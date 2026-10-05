// 실행: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { compose, decompose, distractorsFor, similar } from '../src/scripts/hangul.ts';
import { Game, Round } from '../src/scripts/round.ts';
import { applyQuestionSet, buy, difficulty, equip, finishLap, newSave, reviveSave } from '../src/scripts/campaign.ts';

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

test('바퀴: 하나도 안 틀리면 다음 단계, 끝까지 가면 왕관', () => {
  const s = newSave();
  const a = finishLap(s, 0, 100);
  assert.ok(a.perfect && a.advanced);
  assert.deepEqual([s.stage, s.lap, s.level], [1, 0, 3]);
  finishLap(s, 4, 100); // 도전 단계는 틀려도 통과
  assert.equal(s.stage, 2);
  const c = finishLap(s, 2, 100);
  assert.ok(c.crowned);
  assert.deepEqual([s.stage, s.crowns, s.totalLaps], [0, 1, 3]);
});

test('난이도: 많이 틀리면 쉬워진다', () => {
  const s = newSave();
  finishLap(s, 9, 0);
  assert.equal(s.level, 1);
  finishLap(s, 20, 0);
  assert.equal(s.level, 1);
  assert.ok(difficulty(1, 'full').balloons[1] < difficulty(5, 'full').balloons[1]);
});

test('문제가 바뀌면 진행만 처음으로, 코인은 유지', () => {
  const s = newSave();
  assert.equal(applyQuestionSet(s, ['가', '나']), false); // 첫 적용
  finishLap(s, 0, 10);
  const coins = s.coins;
  assert.equal(applyQuestionSet(s, ['가', '나']), false);
  assert.equal(s.stage, 1);
  assert.equal(applyQuestionSet(s, ['다', '라']), true);
  assert.deepEqual([s.stage, s.lap, s.coins], [0, 0, coins]);
});

test('상점: 코인이 모자라면 못 사고, 사면 바로 장착', () => {
  const s = newSave();
  assert.equal(buy(s, 'skin.ocean'), false);
  s.coins = 50;
  assert.ok(buy(s, 'skin.ocean'));
  assert.deepEqual([s.coins, s.equipped.skin], [10, 'skin.ocean']);
  assert.equal(buy(s, 'skin.ocean'), false);
  assert.ok(equip(s, 'skin.basic'));
  assert.equal(equip(s, 'skin.gold'), false);
  assert.equal(reviveSave({ coins: 'x', equipped: { skin: 'skin.gold' } }).equipped.skin, 'skin.basic');
});
