// 실행: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { compose, decompose, distractorsFor, similar } from '../src/scripts/hangul.ts';
import { Game, Round } from '../src/scripts/round.ts';
import {
  BOSS_STAGE, ITEMS, MIN_WIN_LAPS, RECKLESS_SHOTS, STAGES, applyQuestionSet, applyWarning, bossPhase, bossTime, buy, difficulty, equip, finishBoss, finishLap,
  canResume, gradeOf, newSave, recordBadShot, reviveSave, reviveSnapshot, setKeyOf, winPoints,
} from '../src/scripts/campaign.ts';

test('음절 분해·조합', () => {
  assert.deepEqual(decompose('갑'), [0, 0, 17]);
  assert.equal(compose(...decompose('꽃')), '꽃');
});

test('헷갈리는 음절: 받침·모음', () => {
  assert.ok(similar('갑').strong.includes('갚'));
  assert.ok(similar('에').strong.includes('애'));
  assert.ok(similar('있').strong.includes('잇'));
  assert.ok(!similar('갑').strong.includes('갑'));
});

test('오답 글자는 제외 목록과 겹치지 않고 중복이 없다', () => {
  const d = distractorsFor(['학', '교', '에'], ['학', '교', '에'], 5, ['갑', '니', '다']);
  assert.equal(d.length, 5);
  assert.equal(new Set(d).size, 5);
  for (const c of d) assert.ok(!['학', '교', '에'].includes(c));
});

test('빈칸: 음절 수·띄어쓰기·문장부호', () => {
  const r = new Round(' 학교에   갑니다. ');
  assert.equal(r.targetCount, 6);
  assert.equal(r.cells.filter((c) => c.kind === 'space').length, 1);
  assert.equal(r.cells[3].kind, 'space');
  assert.equal(r.cells.at(-1)!.kind, 'auto');
  assert.deepEqual(r.upcoming(3), ['학', '교', '에']);
});

test('정답은 빈칸을 채우고, 오답은 하트를 줄인다', () => {
  const r = new Round('가나');
  assert.equal(r.hit('나').ok, false);
  assert.equal(r.hearts, 2);
  assert.equal(r.nextChar, '가');
  assert.equal(r.hit('가').ok, true);
  assert.equal(r.nextChar, '나');
  assert.equal(r.stars, 2);
});

test('하트 0이면 힌트 모드, 문항은 계속 진행', () => {
  const r = new Round('가나');
  for (let i = 0; i < 5; i++) r.hit('다');
  assert.equal(r.hearts, 0);
  assert.ok(r.hintMode);
  assert.ok(r.hit('가').ok);
  assert.ok(r.hit('나').ok);
  assert.ok(r.done);
  assert.equal(r.stars, 1);
});

test('시간 초과: 글자 없이 하트만 잃고 콤보가 끊긴다', () => {
  const g = new Game(['가나']);
  g.nextQuestion();
  g.hit('가');
  g.penalize();
  assert.deepEqual([g.combo, g.round.hearts, g.round.misses, g.round.wrong], [0, 2, 1, []]);
});

test('점수·콤보·문항 진행·결과', () => {
  const g = new Game(['가나', '다']);
  assert.ok(g.nextQuestion());
  assert.equal(g.hit('가').points, 10);
  const last = g.hit('나');
  assert.equal(last.points, 12);
  assert.ok(last.done);
  assert.ok(g.nextQuestion());
  g.hit('라');
  assert.equal(g.combo, 0);
  assert.ok(g.hit('다').done);
  assert.equal(g.score, 32);
  assert.equal(g.nextQuestion(), false);
  assert.deepEqual(g.results.map((r) => r.stars), [3, 2]);
  assert.deepEqual(g.results[1].wrong, ['라']);
});

test('빈칸 채우기: 정한 수만 비우고 받침 글자를 먼저 비운다', () => {
  const r = new Round('학교에 가요');
  r.blankOut(1, () => 0.5);
  assert.deepEqual(r.upcoming(9), ['학']);
  assert.equal(r.cells.filter((c) => c.given).length, 4);
  assert.ok(r.hit('학').ok);
  assert.ok(r.done);
});

test('바퀴: 틀리면 같은 단계를 반복하고 끈기 보상이 커진다', () => {
  const s = newSave();
  const a = finishLap(s, 3, 100);
  assert.equal(a.perfect, false);
  assert.equal(a.advanced, false);
  assert.deepEqual([s.stage, s.lap, s.lastWrong], [0, 1, 3]);
  const b = finishLap(s, 1, 100);
  assert.ok(b.total > a.total);
  assert.ok(b.coins.some((c) => c.label.includes('덜 틀렸어요')));
  assert.deepEqual([s.stage, s.lap], [0, 2]);
});

test('바퀴: 하나도 안 틀리면 다음 단계, 사격을 다 지나면 최종 시험', () => {
  const s = newSave();
  const a = finishLap(s, 0, 100);
  assert.ok(a.perfect && a.advanced);
  assert.deepEqual([s.stage, s.lap, s.level], [1, 0, 3]);
  finishLap(s, 4, 100); // 도전 단계는 틀려도 통과
  assert.equal(s.stage, 2);
  const c = finishLap(s, 2, 100);
  assert.equal(c.crowned, false);
  assert.equal(s.stage, BOSS_STAGE);
  assert.equal(STAGES[s.stage].mode, 'boss');
  assert.deepEqual([s.crowns, s.totalLaps], [0, 3]);
});

test('최종 시험: 등급·왕관·기록, 끝나면 처음 단계로', () => {
  const s = newSave();
  s.stage = BOSS_STAGE;
  s.lap = 2;
  s.runLaps = 3;
  const a = finishBoss(s, 0, 300, 77, '7회 [4. 감동을 나누어요]');
  assert.deepEqual([a.grade, a.perfect, a.newBest], ['S', true, true]);
  assert.equal(a.win.set, '7회 [4. 감동을 나누어요]');
  assert.equal(reviveSave({ wins: [a.win] }).wins[0].set, a.win.set);
  assert.deepEqual([s.stage, s.lap, s.crowns, s.bossBest, s.bossGrade, s.bossClears, s.level], [0, 0, 1, 300, 'S', 1, 3]);
  assert.ok(a.coins.some((c) => c.label.includes('왕관')));
  assert.deepEqual(a.win, { nth: 1, laps: 4, grade: 'S', score: 300, at: 77, set: '7회 [4. 감동을 나누어요]' });
  assert.ok(a.coins.some((c) => c.label.includes('한 번에')));
  assert.deepEqual([s.runLaps, s.wins.length], [0, 1]);
  s.stage = BOSS_STAGE;
  s.runLaps = 7;
  const b = finishBoss(s, 4, 200);
  assert.deepEqual([b.grade, b.newBest, s.bossBest, s.bossGrade, s.crowns], ['B', false, 300, 'S', 2]);
  assert.deepEqual([b.win.nth, b.win.laps], [2, 8]);
  assert.ok(b.total < a.total);
  assert.deepEqual([gradeOf(1), gradeOf(2), gradeOf(3), gradeOf(9)], ['A', 'A', 'B', 'C']);
});

test('최종 시험: 보스 체력이 줄면 글자 쓰는 시간이 짧아진다', () => {
  assert.deepEqual([bossPhase(1), bossPhase(0.5), bossPhase(0.2)], [0, 1, 2]);
  assert.ok(bossTime(2, 1) > bossTime(2, 0.4));
  assert.ok(bossTime(2, 0.4) > bossTime(2, 0.1));
  assert.ok(bossTime(1, 1) > bossTime(5, 1));
  assert.ok(bossTime(5, 0.01) >= 8);
});

test('난이도: 많이 틀리면 쉬워진다', () => {
  const s = newSave();
  finishLap(s, 9, 0);
  assert.equal(s.level, 1);
  finishLap(s, 20, 0);
  assert.equal(s.level, 1);
  assert.ok(difficulty(1, 'full').balloons[1] < difficulty(5, 'full').balloons[1]);
});

test('회차를 바꾸면 새 회차는 처음부터, 돌아오면 하던 데서. 코인은 유지', () => {
  const s = newSave();
  assert.equal(applyQuestionSet(s, ['가', '나']), false); // 첫 적용
  finishLap(s, 0, 10);
  const coins = s.coins;
  assert.equal(applyQuestionSet(s, ['가', '나']), false);
  assert.equal(s.stage, 1);
  assert.equal(applyQuestionSet(s, ['다', '라']), true);
  assert.deepEqual([s.stage, s.lap, s.level, s.coins], [0, 0, 2, coins]);
  finishLap(s, 5, 10); // 둘째 회차에서 한 바퀴(틀림)
  assert.deepEqual([s.stage, s.lap], [0, 1]);
  assert.equal(applyQuestionSet(s, ['가', '나']), true); // 첫 회차로 돌아오면 2단계·난이도 3
  assert.deepEqual([s.stage, s.lap, s.level], [1, 0, 3]);
  assert.equal(applyQuestionSet(s, ['다', '라']), true);
  assert.deepEqual([s.stage, s.lap, s.lastWrong], [0, 1, 5]);
  const back = reviveSave(JSON.parse(JSON.stringify(s)));
  assert.equal(back.sets[setKeyOf(['가', '나'])].stage, 1);
});

test('상점: 코인이 모자라면 못 사고, 사면 바로 장착', () => {
  const s = newSave();
  assert.equal(buy(s, 'skin.ocean'), false);
  s.coins = 250;
  assert.ok(buy(s, 'skin.ocean'));
  assert.deepEqual([s.coins, s.equipped.skin], [50, 'skin.ocean']);
  assert.equal(buy(s, 'skin.ocean'), false);
  assert.ok(equip(s, 'skin.basic'));
  assert.equal(equip(s, 'skin.gold'), false);
  assert.equal(reviveSave({ coins: 'x', equipped: { skin: 'skin.gold' } }).equipped.skin, 'skin.basic');
});

test('우승 점수: 바퀴 수가 적으면 등급·점수가 낮아도 더 높다', () => {
  const fast = winPoints({ laps: MIN_WIN_LAPS, grade: 'C', score: 100 });
  const slow = winPoints({ laps: MIN_WIN_LAPS + 1, grade: 'S', score: 5000 });
  assert.ok(fast > slow);
  assert.ok(winPoints({ laps: 4, grade: 'S', score: 100 }) > winPoints({ laps: 4, grade: 'A', score: 1990 }));
  assert.ok(winPoints({ laps: 30, grade: 'C', score: 0 }) >= 500);
});

test('바퀴를 돌 때마다 runLaps 가 쌓인다', () => {
  const s = newSave();
  finishLap(s, 3, 10);
  finishLap(s, 0, 10);
  assert.equal(s.runLaps, 2);
  assert.ok(reviveSave({ wins: [{ nth: 1, laps: 4, grade: 'S', score: 1, at: 1 }, { grade: 'Z' }] }).wins.length === 1);
});

test('난사 경고: 짧은 시간에 빗나간 사격이 많으면 경고, 두 번째부터 코인을 잃는다', () => {
  const log: number[] = [];
  for (let i = 0; i < RECKLESS_SHOTS - 1; i++) assert.equal(recordBadShot(log, i * 100), false);
  assert.equal(recordBadShot(log, 600), true);
  assert.equal(log.length, 0);
  // 띄엄띄엄 쏘면 경고가 아니다
  for (let i = 0; i < 10; i++) assert.equal(recordBadShot(log, i * 2000), false);
  const s = newSave();
  s.coins = 3;
  assert.equal(applyWarning(s), 0);
  assert.equal(applyWarning(s), 3);
  assert.deepEqual([s.warnings, s.coins], [2, 0]);
});

test('상점: 최종 무기는 가장 비싸고, 물총 크기가 다양하다', () => {
  for (const kind of ['skin', 'stream', 'pop'] as const) {
    const items = ITEMS.filter((i) => i.kind === kind);
    const final = items.find((i) => i.final)!;
    assert.ok(final && items.every((i) => i.price <= final.price));
  }
  const sizes = new Set(ITEMS.filter((i) => i.kind === 'skin').map((i) => i.size));
  assert.ok(sizes.size >= 5);
  assert.ok(new Set(ITEMS.map((i) => i.id)).size === ITEMS.length);
});

test('이어하기: 끝낸 문항·점수·결과를 되살리고 다음 문항부터 간다', () => {
  const g = new Game(['가', '나', '다']);
  assert.equal(g.restore({ index: 3, score: 10, results: [] }), false); // 다 끝난 바퀴는 이어할 수 없다
  assert.equal(g.restore({ index: 1, score: 10, results: [] }), false); // 결과 수가 맞지 않는다
  assert.ok(g.restore({ index: 2, score: 32, results: [{ text: '가', stars: 3, misses: 0, wrong: [] }, { text: '나', stars: 2, misses: 1, wrong: ['너'] }] }));
  assert.ok(g.nextQuestion());
  assert.deepEqual([g.index, g.round.text, g.score, g.combo, g.wrongShots], [2, '다', 32, 0, 1]);
  assert.ok(g.hit('다').done);
  assert.equal(g.nextQuestion(), false);
  assert.equal(g.results.length, 3);
});

test('이어하기 저장은 같은 문제 묶음·단계·바퀴에서만 쓴다', () => {
  const s = newSave();
  applyQuestionSet(s, ['가', '나', '다']);
  const snap = reviveSnapshot({ setKey: s.setKey, stage: 0, lap: 0, index: 1, score: 10, results: [{ text: '가', stars: 3, misses: 0, wrong: [] }], earned: ['🐶'], lapCoins: 3, lapWarnings: 0, savedAt: 1 });
  assert.ok(snap);
  s.resume = snap;
  assert.ok(canResume(s, 3));
  assert.equal(canResume(s, 1), false);
  s.lap = 1;
  assert.equal(canResume(s, 3), false);
  s.lap = 0;
  applyQuestionSet(s, ['라']);
  assert.equal(s.resume, null);
  assert.equal(reviveSnapshot({ setKey: 'x', index: 2, results: [{ text: '가' }] }), null);
  assert.equal(reviveSave({ resume: { setKey: 'k', stage: 0, lap: 0, index: 1, results: [{ text: '가' }] } }).resume?.index, 1);
});
