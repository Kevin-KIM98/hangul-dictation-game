// 게임 진행: 입력(마우스·터치) ↔ 로직(round) ↔ 화면(scene, HUD)
import { Stage, type Balloon } from './scene.ts';
import { Game, MAX_HEARTS, Round } from './round.ts';
import { distractorsFor } from './hangul.ts';
import { loadQuestions, parseQuestions, resetQuestions, saveQuestions } from './questions.ts';
import { sfx, speak, stopSpeaking, unlock } from './audio.ts';
import {
  applyQuestionSet, blankCount, bossPhase, bossTime, buy, difficulty, equip, finishBoss, finishLap, newSave, themeIndex, timeLimit,
  ITEMS, STAGES, type Difficulty, type ItemKind, type Mode, type Save,
} from './campaign.ts';
import {
  Users, addFriend, decodeBrag, fameOf, nameError, normalizeName, passwordError, recordOf, type PlayerRecord, type StorageLike,
} from './users.ts';
import { Pad } from './pad.ts';
import { BossView } from './boss.ts';
import { drawBragCard, shareRecord } from './share.ts';

type State = 'login' | 'menu' | 'playing' | 'boss' | 'between' | 'paused' | 'result' | 'editor' | 'shop' | 'fame';

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;
const canvas = $<HTMLCanvasElement>('stage');
const board = $('board');

const FIRE_INTERVAL = 300; // ms
const UPCOMING = 3; // 화면에 미리 띄워 둘 정답 글자 수
const HIT_DELAY = 90; // 물줄기가 풍선에 닿기까지(ms)
const REREAD_DELAY = 700; // 틀린 뒤 문제를 다시 읽어 주기까지(ms)
const BONUS_POINTS = 30;
const PRAISE = ['좋아요!', '멋져요!', '잘한다!', '최고예요!', '대단해요!', '받아쓰기 천재!'];
const STICKERS = ['🐶', '🐱', '🐰', '🐻', '🐼', '🦊', '🐯', '🦁', '🐸', '🐵', '🐧', '🦄', '🐳', '🦖', '🐝', '🦋', '🚀', '🌈', '🍭', '🎈'];
const BOSS_THEME = 2; // 별빛 밤 축제
const HURRY_SECONDS = 5;
const FAST_BONUS = 5; // 시간을 반 넘게 남기고 쓰면 추가 점수

/** localStorage 를 못 쓰는 환경(사생활 보호 모드 등)에서는 이번 실행 동안만 기억한다 */
function safeStorage(): StorageLike {
  try {
    localStorage.getItem('dictation.probe');
    return localStorage;
  } catch {
    const m = new Map<string, string>();
    return { getItem: (k) => m.get(k) ?? null, setItem: (k, v) => void m.set(k, v), removeItem: (k) => void m.delete(k) };
  }
}

const storage = safeStorage();
const users = new Users(storage);

/** 지금 들어와 있는 학생의 진행을 저장 */
function persist(): void {
  users.persist();
}

let stage: Stage;
let game: Game;
let state: State = 'menu';
let questions = loadQuestions();
let lastShot = 0;
let lastCorrect = 0;
let lockFailed = false;
let drag: { id: number; x: number; y: number; moved: boolean } | null = null;
let toastTimer = 0;
let rereadTimer = 0;
let bonusUsed = false;
let earned: string[] = []; // 이번 판에서 받은 스티커
let save: Save = users.current()?.save ?? newSave();
let mode: Mode = 'full';
let diff: Difficulty = difficulty(save.level, mode);
let lapCoins = 0; // 이번 바퀴에서 번 코인
let timeMax = 0; // 번개 모드 제한 시간(초)
let timeLeft = 0;
let shopBack: State = 'menu';
let fameBack: State = 'menu';
let playState: 'playing' | 'boss' = 'playing'; // 멈췄다가 돌아갈 화면
let bragArrived: PlayerRecord | null = null; // 링크로 받은 친구 기록

// 최종 시험(보스전)
let pad: Pad;
const boss = new BossView();
let bossHp = 0;
let bossMax = 0;
let busy = false; // 글자를 읽는 중·정답 연출 중에는 제출을 막는다
let padFallback = false; // 손글씨 인식을 못 쓰면 키보드 입력
let lastTick = 0;

const isLocked = () => document.pointerLockElement === canvas;

function setState(s: State): void {
  state = s;
  document.body.dataset.state = s;
}

function toast(msg: string, ms = 2600): void {
  const el = $('toast');
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => el.classList.remove('show'), ms);
}

// ───────── HUD ─────────

function renderBoard(): void {
  board.replaceChildren();
  let word = document.createElement('div');
  word.className = 'word';
  game.round.cells.forEach((cell, i) => {
    if (cell.kind === 'space') {
      board.append(word);
      word = document.createElement('div');
      word.className = 'word';
      return;
    }
    const el = document.createElement('span');
    el.className = `cell ${cell.kind}`;
    el.dataset.i = String(i);
    word.append(el);
  });
  board.append(word);
  paintBoard();
  layoutBoss();
}

/** 보스는 글자판·시간 막대 아래에 자리 잡는다 */
function layoutBoss(): void {
  if (state !== 'boss') return;
  const timer = $('timer');
  const bottom = (timer.hidden ? board : timer).getBoundingClientRect().bottom;
  $('boss').style.paddingTop = `${Math.round(bottom + 6)}px`;
}

function paintBoard(): void {
  const next = game.round.nextIndex;
  board.querySelectorAll<HTMLElement>('.cell').forEach((el) => {
    const i = Number(el.dataset.i);
    const cell = game.round.cells[i];
    el.textContent = cell.filled ? cell.ch : '';
    el.classList.toggle('filled', cell.filled);
    el.classList.toggle('given', !!cell.given);
    el.classList.toggle('next', i === next);
  });
}

function paintHud(): void {
  const r = game.round as Game['round'] | undefined;
  $('coins').textContent = String(save.coins);
  $('score').textContent = String(game.score);
  if (!r) {
    // 보스 등장 중: 아직 문항이 없다
    $('qnum').textContent = `${STAGES[save.stage].emoji} 0 / ${game.questions.length}`;
    $('hearts').textContent = '❤️'.repeat(MAX_HEARTS);
    $('combo').textContent = '';
    $('hint').hidden = true;
    return;
  }
  $('qnum').textContent = `${STAGES[save.stage].emoji} ${game.index + 1} / ${game.questions.length}`;
  $('coins').textContent = String(save.coins);
  $('hearts').textContent = '❤️'.repeat(r.hearts) + '🤍'.repeat(MAX_HEARTS - r.hearts);
  $('score').textContent = String(game.score);
  const combo = $('combo');
  combo.textContent = game.combo >= 2 ? `${game.combo} 연속!` : '';
  $('hint').hidden = !r.hintMode;
}

function paintMenu(): void {
  $('qstatus').textContent = questions.custom
    ? `올린 문제 ${questions.list.length}개로 시작해요`
    : `기본 문제 ${questions.list.length}개로 시작해요`;
  $('reset').hidden = !questions.custom;
  // 문제가 바뀌었으면 1단계부터 새로 시작한다(코인·아이템은 그대로)
  applyQuestionSet(save, questions.list);
  persist();
  const def = STAGES[save.stage];
  const me = users.current();
  $('player-name').textContent = me ? `👤 ${me.name}` : '👤';
  const progress = def.mode === 'boss' ? `${def.emoji} ${def.name} 도전!` : `${def.emoji} ${def.name} ${save.lap + 1}바퀴째`;
  const boss = save.bossClears ? ` · 🐉 ${save.bossGrade}` : '';
  $('record').textContent = `${progress} · 🪙 ${save.coins}${save.crowns ? ` · 👑 ${save.crowns}` : ''}${boss}`;
  $('start').textContent = def.mode === 'boss' ? '🐉 최종 시험 시작' : '게임 시작';
}

function addCoins(n: number): void {
  save.coins += n;
  lapCoins += n;
}

/** 배경(바퀴마다 바뀜)과 꾸민 물총을 화면에 적용 */
function applyLook(): string {
  const theme = stage.setTheme(themeIndex(save));
  document.body.style.background = theme.sky;
  stage.setLoadout(save.equipped);
  return theme.name;
}

function paintTimer(): void {
  $('timer').hidden = mode !== 'speed' && mode !== 'boss';
  $('timer-bar').style.width = `${timeMax ? (timeLeft / timeMax) * 100 : 0}%`;
}

function tickTimer(dt: number): void {
  if (mode !== 'speed' || timeLeft <= 0) return;
  timeLeft = Math.max(0, timeLeft - dt);
  paintTimer();
}

/** 화면 위로 떠오르는 글자(점수·칭찬) */
function popup(text: string, x: number, y: number, kind = ''): void {
  const el = document.createElement('div');
  el.className = `pop ${kind}`;
  el.textContent = text;
  el.style.left = `${x}px`;
  el.style.top = `${y}px`;
  document.body.append(el);
  setTimeout(() => el.remove(), 1000);
}

function praise(): void {
  const word = PRAISE[Math.min(PRAISE.length - 1, Math.floor(game.combo / 2) - 1)];
  popup(word, window.innerWidth / 2, window.innerHeight * 0.42, 'praise');
}

/** 틀렸을 때: 잠시 뒤 문제를 자동으로 다시 읽어 준다 */
function rereadSoon(): void {
  clearTimeout(rereadTimer);
  rereadTimer = window.setTimeout(() => {
    if (state !== 'playing') return;
    toast('🔊 다시 잘 들어 보세요', 1600);
    readQuestion();
  }, REREAD_DELAY);
}

// ───────── 풍선 구성 ─────────

/** 다음 정답 풍선이 항상 있도록 보충하고, 나머지는 헷갈리는 글자로 채운다 */
function syncBalloons(): void {
  const round = game.round;
  const total = diff.balloons[stage.portrait ? 0 : 1];
  const up = round.upcoming(UPCOMING);

  const have = stage.balloons.map((b) => b.ch);
  for (const ch of up) {
    const i = have.indexOf(ch);
    if (i >= 0) have.splice(i, 1);
    else stage.spawn(ch);
  }

  const lack = total - stage.balloons.length;
  if (lack > 0) {
    const onStage = stage.balloons.map((b) => b.ch);
    const pool = round.cells.filter((c) => c.kind === 'target' && !up.includes(c.ch)).map((c) => c.ch);
    for (const ch of distractorsFor(up, [...up, ...onStage], lack, pool)) stage.spawn(ch);
  }
  updateHint();
}

function updateHint(): void {
  const round = game.round;
  const on = round.hintMode || (diff.hintMs > 0 && performance.now() - lastCorrect > diff.hintMs);
  stage.setHint(on ? round.nextChar : null);
}

// ───────── 진행 ─────────

function readQuestion(): void {
  const text = game.round.text;
  speak(text, () => toast(`소리가 안 나와요. 눈으로 보고 기억해요:  ${text}`, 3000));
}

/** 한 바퀴(1번~마지막 문항) 시작. 단계·난이도·배경은 저장된 진행에 따라 정해진다 */
function startGame(): void {
  const def = STAGES[save.stage];
  if (def.mode === 'boss') return void startBoss();
  mode = def.mode;
  diff = difficulty(save.level, mode);
  game = new Game(questions.list, mode === 'blank' ? (n) => blankCount(n, save.level) : undefined);
  earned = [];
  lapCoins = 0;
  const themeName = applyLook();
  stage.setDrift(diff.drift);
  stage.clearBalloons();
  setState('playing');

  $('lap-title').textContent = `${def.emoji} ${def.name}`;
  $('lap-sub').textContent = `${save.lap + 1}바퀴 · ${themeName} · 난이도 ${'★'.repeat(save.level)}`;
  $('lap-desc').textContent = def.desc;
  $('lap').classList.add('show');
  setTimeout(() => $('lap').classList.remove('show'), 2000);
  nextQuestion();
}

function nextQuestion(): void {
  if (!game.nextQuestion()) return mode === 'boss' ? showBossResult() : showResult();
  stage.clearBalloons();
  clearTimeout(rereadTimer);
  bonusUsed = false;
  lastCorrect = performance.now();
  if (mode === 'boss') return nextBossQuestion();
  timeMax = timeLeft = mode === 'speed' ? timeLimit(game.round.targetCount, save.level) : 0;
  paintTimer();
  renderBoard();
  paintHud();
  syncBalloons();
  setState('playing');
  readQuestion();
}

function flyLetter(b: Balloon, index: number): void {
  const target = board.querySelector<HTMLElement>(`.cell[data-i="${index}"]`);
  if (!target) return;
  const from = stage.screenPos(b);
  const to = target.getBoundingClientRect();
  const el = document.createElement('div');
  el.className = 'fly';
  el.textContent = b.ch;
  el.style.left = `${from.x}px`;
  el.style.top = `${from.y}px`;
  document.body.append(el);
  requestAnimationFrame(() => {
    el.style.left = `${to.left + to.width / 2}px`;
    el.style.top = `${to.top + to.height / 2}px`;
    el.style.fontSize = `${to.height * 0.7}px`;
  });
  setTimeout(() => {
    el.remove();
    paintBoard();
  }, 330);
}

function onHit(b: Balloon): void {
  const at = stage.screenPos(b);
  if (b.bonus) {
    game.score += BONUS_POINTS;
    addCoins(5);
    sfx.bonus();
    popup('보너스 🪙+5', at.x, at.y, 'bonus');
    stage.pop(b);
    stage.celebrate();
    paintHud();
    return;
  }
  const r = game.hit(b.ch);
  if (r.ok) {
    lastCorrect = performance.now();
    clearTimeout(rereadTimer);
    sfx.pop(game.combo);
    addCoins(game.combo % 5 === 0 ? 3 : 1); // 5연속마다 코인 보너스
    popup(`+${r.points}`, at.x, at.y - 30);
    if (game.combo >= 2 && game.combo % 2 === 0) praise();
    flyLetter(b, r.index);
    stage.pop(b);
    stage.shake(0.6);
    if (!r.done && !bonusUsed && Math.random() < 0.4) {
      bonusUsed = true;
      stage.spawnBonus();
    }
    if (r.done) {
      clearTimeout(rereadTimer);
      setState('between');
      stage.setHint(null);
      setTimeout(showClear, 500);
    } else {
      syncBalloons();
    }
  } else {
    sfx.wrong();
    stage.wobble(b);
    navigator.vibrate?.(60);
    $('hearts').classList.remove('shake');
    void $('hearts').offsetWidth;
    $('hearts').classList.add('shake');
    popup('앗!', at.x, at.y - 30, 'oops');
    updateHint();
    rereadSoon();
  }
  paintHud();
}

function showClear(): void {
  const res = game.results[game.results.length - 1];
  sfx.clear();
  stage.celebrate();
  const fresh = STICKERS.filter((s) => !earned.includes(s));
  const sticker = fresh[Math.floor(Math.random() * fresh.length)] ?? STICKERS[0];
  earned.push(sticker);
  $('clear-text').textContent = res.text;
  $('clear-stars').textContent = '⭐'.repeat(res.stars);
  let extra = '';
  if (mode === 'speed' && timeLeft > 0) {
    const bonus = 2 + Math.ceil((timeLeft / timeMax) * 8);
    addCoins(bonus);
    extra = ` · ⚡🪙+${bonus}`;
  } else if (mode === 'boss') {
    const bonus = 2 + Math.max(0, MAX_HEARTS - res.misses) * 2;
    addCoins(bonus);
    extra = ` · 🐉🪙+${bonus}`;
  }
  $('clear-sticker').textContent = `스티커 선물 ${sticker}${extra}`;
  persist();
  $('clear').classList.add('show');
  setTimeout(() => {
    $('clear').classList.remove('show');
    nextQuestion();
  }, 2300);
}

/** 한 바퀴를 끝냈을 때: 다 맞혔으면 다음 단계, 아니면 1번부터 다시 */
function showResult(): void {
  setState('result');
  stage.clearBalloons();
  releaseLock();
  const def = STAGES[save.stage];
  const lapNo = save.lap + 1;
  const missed = game.results.filter((r) => r.misses > 0).length;
  const out = finishLap(save, game.wrongShots, game.score);
  lapCoins += out.total;
  save.stickers = [...new Set([...save.stickers, ...earned])];
  persist();
  const next = STAGES[save.stage];

  $('result-title').textContent = out.crowned
    ? '👑 모든 단계 완료!'
    : out.perfect
      ? '💯 하나도 안 틀렸어요!'
      : out.advanced
        ? '🎉 도전 성공!'
        : '💪 거의 다 왔어요!';
  $('result-score').textContent = `${def.emoji} ${def.name} ${lapNo}바퀴 · ${game.score}점`;
  let message: string;
  if (out.crowned) message = '왕관을 받았어요! 처음 단계부터 새 배경에서 또 도전해요.';
  else if (out.advanced) message = `다음 단계가 열렸어요: ${next.emoji} ${next.name}`;
  else message = `${missed}문제에서 틀렸어요. 1번부터 다시! 하나도 안 틀리면 다음 단계가 열려요.`;
  if (out.levelChange > 0) message += ' (난이도 ⬆)';
  if (out.levelChange < 0) message += ' (조금 쉽게 해 줄게요)';
  $('result-stars').textContent = message;

  const rows = [{ label: '맞힌 글자·보너스', amount: lapCoins - out.total }, ...out.coins];
  $('result-coins').replaceChildren(
    ...rows.map((c) => {
      const li = document.createElement('li');
      const label = document.createElement('span');
      label.textContent = c.label;
      const amount = document.createElement('b');
      amount.textContent = `🪙 +${c.amount}`;
      li.append(label, amount);
      return li;
    }),
  );
  $('result-total').textContent = `이번 바퀴 🪙 +${lapCoins} · 가진 코인 🪙 ${save.coins}`;
  $('result-stickers').textContent = earned.join(' ');
  $('again').textContent = out.advanced ? `${next.emoji} ${next.name} 시작` : `🔁 다시 도전 (${save.lap + 1}바퀴)`;
  $('result-share').hidden = true;
  stage.celebrate(out.perfect ? 16 : 5);
  if (out.perfect) sfx.bonus();
  renderResultList();
}

function renderResultList(): void {
  $('result-list').replaceChildren(
    ...game.results.map((r) => {
      const li = document.createElement('li');
      const text = document.createElement('span');
      text.className = 'r-text';
      text.textContent = r.text;
      const stars = document.createElement('span');
      stars.className = 'r-stars';
      stars.textContent = r.misses ? '❌' : '⭕';
      li.append(text, stars);
      if (r.wrong.length) {
        const wrong = document.createElement('span');
        wrong.className = 'r-wrong';
        wrong.textContent = `헷갈린 글자: ${r.wrong.join(' ')}`;
        li.append(wrong);
      }
      return li;
    }),
  );
}

// ───────── 최종 시험(보스전): 화면에 직접 글자를 쓴다 ─────────

function quake(): void {
  document.body.classList.remove('quake');
  void document.body.offsetWidth;
  document.body.classList.add('quake');
  stage.shake(1.2);
  navigator.vibrate?.([80, 40, 80]);
}

/** 보스 등장: 손글씨 인식 엔진을 준비하는 동안 등장 연출을 보여 준다 */
async function startBoss(): Promise<void> {
  mode = 'boss';
  diff = difficulty(save.level, 'full');
  game = new Game(questions.list);
  earned = [];
  lapCoins = 0;
  busy = true;
  releaseLock();
  const theme = stage.setTheme(BOSS_THEME);
  document.body.style.background = theme.sky;
  stage.setLoadout(save.equipped);
  stage.clearBalloons();
  bossMax = bossHp = questions.list.reduce((n, q) => n + new Round(q).targetCount, 0);
  setState('boss');
  boss.show(true);
  boss.setHp(bossHp, bossMax);
  board.replaceChildren();
  timeMax = timeLeft = 0;
  paintTimer();
  paintHud();
  pad.enabled = false;
  pad.clear();
  pad.setTrace(null);
  $('pad-title').textContent = '🐉 준비하세요…';
  const load = $('boss-load');
  const sub = $('boss-load-sub');
  sub.textContent = '손글씨 인식 준비 중 0%';
  load.classList.add('show');
  sfx.roar();
  quake();

  const { loadHandwriting } = await import('./ocr.ts');
  try {
    await loadHandwriting((p) => (sub.textContent = `손글씨 인식 준비 중 ${Math.round(p * 100)}%`));
    padFallback = false;
  } catch {
    padFallback = true;
  }
  if (state !== 'boss') return; // 기다리다 나갔다
  load.classList.remove('show');
  applyPadMode();
  if (padFallback) toast('손글씨 인식을 쓸 수 없어 키보드로 글자를 적어요', 3200);
  boss.intro();
  sfx.roar();
  setTimeout(() => state === 'boss' && nextQuestion(), 1400);
}

function applyPadMode(): void {
  $('pad').hidden = padFallback;
  $('pad-undo').hidden = padFallback;
  $('pad-clear').hidden = padFallback;
  $<HTMLInputElement>('pad-type').hidden = !padFallback;
  pad.resize();
}

function nextBossQuestion(): void {
  busy = false;
  pad.enabled = true;
  pad.clear();
  pad.setTrace(null);
  $<HTMLInputElement>('pad-type').value = '';
  renderBoard();
  paintHud();
  paintPadTitle();
  resetBossTimer();
  setState('boss');
  readQuestion();
  if (padFallback) $('pad-type').focus();
}

function paintPadTitle(): void {
  const r = game.round;
  const left = r.cells.filter((c) => !c.filled).length;
  $('pad-title').textContent = `${padFallback ? '⌨️' : '✏️'} ${game.index + 1}번 · 빨간 칸의 글자를 ${padFallback ? '적어요' : '써요'} (${left}글자 남음)`;
}

function resetBossTimer(): void {
  timeMax = timeLeft = bossTime(save.level, bossMax ? bossHp / bossMax : 1);
  lastTick = Math.ceil(timeLeft);
  document.body.classList.remove('hurry');
  paintTimer();
  layoutBoss();
}

function tickBoss(dt: number): void {
  if (busy || timeMax <= 0) return;
  timeLeft = Math.max(0, timeLeft - dt);
  paintTimer();
  const secs = Math.ceil(timeLeft);
  if (secs <= HURRY_SECONDS) {
    document.body.classList.add('hurry');
    if (secs < lastTick && secs > 0) sfx.tick();
  }
  lastTick = secs;
  if (timeLeft <= 0) bossTimeout();
}

function updateBossHint(): void {
  pad.setTrace(game.round.hintMode ? game.round.nextChar : null);
  if (game.round.hintMode) $('pad-title').textContent = '💡 연한 글자를 따라 써요';
}

/** 시간 초과: 보스의 공격 */
function bossTimeout(): void {
  game.penalize();
  sfx.attack();
  boss.attack('timeout');
  quake();
  $('hearts').classList.remove('shake');
  void $('hearts').offsetWidth;
  $('hearts').classList.add('shake');
  popup('⏰ 시간 끝!', window.innerWidth / 2, window.innerHeight * 0.4, 'oops');
  paintHud();
  updateBossHint();
  resetBossTimer();
  rereadSoon();
}

/** [다 썼어요]: 쓴 글자를 읽어서 판정 */
async function submitWriting(): Promise<void> {
  if (state !== 'boss' || busy) return;
  unlock();
  let text: string;
  if (padFallback) {
    const input = $<HTMLInputElement>('pad-type');
    text = input.value.replace(/[^가-힣]/g, '');
    input.value = '';
    if (!text) return toast('글자를 적어 주세요');
  } else {
    const img = pad.toImage();
    if (!img) return toast('먼저 글자를 써 보세요 ✏️', 1600);
    const { normalizeHandwriting, readHandwriting } = await import('./ocr.ts');
    const norm = normalizeHandwriting(img);
    if (!norm) return toast('먼저 글자를 써 보세요 ✏️', 1600);
    const ok = $<HTMLButtonElement>('pad-ok');
    busy = true;
    $('pad-panel').classList.add('busy');
    ok.disabled = true;
    ok.textContent = '👀 읽는 중…';
    try {
      text = await readHandwriting(norm);
    } catch {
      text = '';
      toast('글자를 읽지 못했어요. 다시 써 볼까요?', 2000);
    } finally {
      busy = false;
      $('pad-panel').classList.remove('busy');
      ok.disabled = false;
      ok.textContent = '✔ 다 썼어요';
    }
    if (state !== 'boss') return;
  }
  onWritten(text);
}

/** 읽힌 글자(한글만)로 판정 */
function onWritten(text: string): void {
  const expected = game.round.nextChar;
  if (!expected || busy) return;
  if (text.includes(expected)) return bossHitBy(expected);
  pad.clear();
  if (!text) {
    sfx.wrong();
    boss.unread();
    return;
  }
  // 다른 글자를 썼다: 보스의 공격
  game.hit([...text][0]);
  sfx.attack();
  boss.attack('wrong');
  quake();
  $('hearts').classList.remove('shake');
  void $('hearts').offsetWidth;
  $('hearts').classList.add('shake');
  toast(`'${text}'(으)로 읽혔어요. 다시 잘 듣고 또박또박 써요!`, 2600);
  paintHud();
  updateBossHint();
  resetBossTimer();
  rereadSoon();
}

/** 맞게 썼다: 보스가 맞는다 */
function bossHitBy(ch: string): void {
  const r = game.hit(ch);
  if (!r.ok) return;
  clearTimeout(rereadTimer);
  bossHp = Math.max(0, bossHp - 1);
  const fast = timeMax > 0 && timeLeft > timeMax / 2;
  if (fast) game.score += FAST_BONUS;
  addCoins(game.combo % 5 === 0 ? 3 : 1);
  const at = $('boss-sprite').getBoundingClientRect();
  const x = at.left + at.width / 2;
  const y = at.top + at.height / 2;
  sfx.bossHit(game.combo);
  boss.hurt();
  boss.setHp(bossHp, bossMax);
  boss.setPhase(bossPhase(bossMax ? bossHp / bossMax : 0));
  stage.shake(0.5);
  stage.celebrate(2);
  popup(`${ch} +${r.points + (fast ? FAST_BONUS : 0)}`, x, y - 30);
  if (fast) popup('⚡ 빠른 공격!', x, y + 30, 'bonus');
  if (game.combo >= 2 && game.combo % 2 === 0) praise();
  pad.clear();
  pad.setTrace(null);
  paintBoard();
  paintHud();
  if (r.done) {
    busy = true;
    pad.enabled = false;
    setTimeout(showClear, 500);
  } else {
    paintPadTitle();
    updateBossHint();
    resetBossTimer();
  }
}

/** 보스를 물리쳤다: 왕관·등급·기록 */
function showBossResult(): void {
  setState('result');
  busy = false;
  document.body.classList.remove('hurry');
  stage.clearBalloons();
  releaseLock();
  boss.beaten();
  sfx.victory();
  stage.celebrate(24);
  const out = finishBoss(save, game.wrongShots, game.score);
  lapCoins += out.total;
  save.stickers = [...new Set([...save.stickers, ...earned])];
  persist();
  void import('./ocr.ts').then((m) => m.releaseHandwriting());
  setTimeout(() => boss.show(false), 1800);

  $('result-title').textContent = `🏆 최종 시험 통과! ${out.grade}등급`;
  $('result-score').textContent = `🐉 글자 도둑 대왕 격파 · ${game.score}점${out.newBest ? ' · 🆕 최고 기록!' : ''}`;
  let message = out.perfect
    ? '한 글자도 안 틀렸어요! 왕관을 받고 명예의 전당에 올랐어요.'
    : `${game.wrongShots}번 틀렸지만 끝까지 해냈어요! 왕관을 받고 명예의 전당에 올랐어요.`;
  if (out.levelChange > 0) message += ' (난이도 ⬆)';
  if (out.levelChange < 0) message += ' (조금 쉽게 해 줄게요)';
  $('result-stars').textContent = message;
  const rows = [{ label: '되찾은 글자·보너스', amount: lapCoins - out.total }, ...out.coins];
  $('result-coins').replaceChildren(
    ...rows.map((c) => {
      const li = document.createElement('li');
      const label = document.createElement('span');
      label.textContent = c.label;
      const amount = document.createElement('b');
      amount.textContent = `🪙 +${c.amount}`;
      li.append(label, amount);
      return li;
    }),
  );
  $('result-total').textContent = `이번 시험 🪙 +${lapCoins} · 가진 코인 🪙 ${save.coins}`;
  $('result-stickers').textContent = earned.join(' ');
  $('again').textContent = `${STAGES[0].emoji} 새 배경에서 처음부터 다시`;
  $('result-share').hidden = false;
  renderResultList();
}

// ───────── 학생 로그인 ─────────

function showLogin(): void {
  clearTimeout(rereadTimer);
  stopSpeaking();
  releaseLock();
  setState('login');
  $('login-form').hidden = false;
  $('login-new').hidden = true;
  $('login-msg').textContent = '';
  $<HTMLInputElement>('login-name').value = '';
  $<HTMLInputElement>('login-pw').value = '';
  const known = $('login-known');
  known.replaceChildren(
    ...users.list().slice(0, 8).map((a) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip-btn';
      b.textContent = `👤 ${a.name}`;
      b.addEventListener('click', () => {
        $<HTMLInputElement>('login-name').value = a.name;
        $('login-pw').focus();
      });
      return b;
    }),
  );
}

/** 들어온 학생의 진행으로 바꾸고 메뉴로 */
function enter(account: { name: string; save: Save }, fresh: boolean): void {
  save = account.save;
  unlock();
  toMenu();
  toast(fresh ? `🌟 ${account.name} 친구, 환영해요! 모험을 시작해요` : `👋 ${account.name} 친구, 어서 와요!`, 2600);
  if (bragArrived) {
    bragArrived = null;
    openFame();
  }
}

function bindLogin(): void {
  const name = $<HTMLInputElement>('login-name');
  const pw = $<HTMLInputElement>('login-pw');
  const msg = $('login-msg');
  $('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const err = nameError(name.value) ?? passwordError(pw.value);
    if (err) return void (msg.textContent = err);
    if (users.has(name.value)) {
      const r = users.login(name.value, pw.value);
      if ('error' in r) return void (msg.textContent = r.error);
      return enter(r, false);
    }
    msg.textContent = '';
    $('login-new-name').textContent = normalizeName(name.value);
    $('login-form').hidden = true;
    $('login-new').hidden = false;
  });
  $('login-create').addEventListener('click', () => {
    const r = users.register(name.value, pw.value);
    $('login-form').hidden = false;
    $('login-new').hidden = true;
    if ('error' in r) return void (msg.textContent = r.error);
    enter(r, true);
  });
  $('login-back').addEventListener('click', () => {
    $('login-form').hidden = false;
    $('login-new').hidden = true;
    name.focus();
  });
  $('logout').addEventListener('click', () => {
    persist();
    users.logout();
    save = newSave();
    showLogin();
  });
}

// ───────── 명예의 전당 · 자랑하기 ─────────

function openFame(): void {
  if (state !== 'fame') fameBack = state;
  renderFame();
  $('share-box').hidden = true;
  setState('fame');
}

function renderFame(): void {
  const me = users.current();
  const medals = ['🥇', '🥈', '🥉'];
  $('fame-share').hidden = !me;
  $('fame-list').replaceChildren(
    ...users.records().map((r, i) => {
      const li = document.createElement('li');
      if (me && !r.friend && r.name === me.name) li.classList.add('me');
      const rank = document.createElement('span');
      rank.className = 'f-rank';
      rank.textContent = medals[i] ?? `${i + 1}`;
      const name = document.createElement('span');
      name.className = 'f-name';
      name.textContent = r.friend ? `${r.name} 👫` : r.name;
      const fame = document.createElement('span');
      fame.className = 'f-fame';
      fame.textContent = `${fameOf(r)}점`;
      const detail = document.createElement('span');
      detail.className = 'f-detail';
      const bossText = r.bossClears ? `${r.bossGrade}등급 ${r.bossBest}점` : '도전 중';
      detail.textContent = `👑 ${r.crowns} · ⭐ ${r.best} · 🐉 ${bossText}${r.friend ? ' · 링크로 받은 친구' : ''}`;
      li.append(rank, name, fame, detail);
      return li;
    }),
  );
}

async function shareMine(): Promise<void> {
  const me = users.current();
  if (!me) return;
  const record = recordOf(me.name, save, Date.now());
  const canvas = $<HTMLCanvasElement>('share-card');
  drawBragCard(canvas, record);
  const box = $('share-box');
  box.hidden = false;
  const status = $('share-status');
  status.textContent = '자랑 카드를 만들었어요…';
  const out = await shareRecord(canvas, record);
  $<HTMLTextAreaElement>('share-text').value = out.text;
  try {
    $<HTMLAnchorElement>('share-download').href = canvas.toDataURL('image/png');
  } catch {
    $('share-download').hidden = true;
  }
  status.textContent =
    out.how === 'shared'
      ? '친구에게 보냈어요! 링크를 열면 친구의 명예의 전당에 내 기록이 들어가요.'
      : out.how === 'copied'
        ? '자랑 글을 복사했어요. 메신저에 붙여 넣어 친구에게 보내요!'
        : '아래 글을 복사해서 친구에게 보내요. 링크를 열면 내 기록이 친구 화면에 나와요.';
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function bindFame(): void {
  $('fame-open').addEventListener('click', openFame);
  $('result-share').addEventListener('click', () => {
    openFame();
    void shareMine();
  });
  $('fame-share').addEventListener('click', () => void shareMine());
  $('share-copy').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText($<HTMLTextAreaElement>('share-text').value);
      toast('복사했어요! 친구에게 붙여 넣어요', 1800);
    } catch {
      $<HTMLTextAreaElement>('share-text').select();
      toast('글을 길게 눌러 복사해요', 1800);
    }
  });
  $('fame-close').addEventListener('click', () => {
    if (fameBack === 'result') setState('result');
    else toMenu();
  });
}

/** 친구가 보낸 자랑 링크(#brag=…)를 받아 둔다 */
function receiveBrag(): void {
  const m = location.hash.match(/brag=([A-Za-z0-9_-]+)/);
  if (!m) return;
  history.replaceState(null, '', location.pathname + location.search);
  const record = decodeBrag(m[1]);
  if (!record) return toast('자랑 링크를 읽을 수 없어요', 2600);
  addFriend(storage, record);
  bragArrived = record;
  toast(`👫 ${record.name} 친구의 기록이 도착했어요! 명예의 전당에서 비교해 봐요`, 4000);
}

// ───────── 꾸미기 상점 ─────────

const KIND_TITLE: Record<ItemKind, string> = { skin: '물총', stream: '물줄기', pop: '터지는 효과' };

function openShop(): void {
  if (state !== 'shop') shopBack = state;
  renderShop();
  setState('shop');
}

function renderShop(): void {
  $('shop-coins').textContent = `🪙 ${save.coins}`;
  const list = $('shop-list');
  list.replaceChildren();
  for (const kind of ['skin', 'stream', 'pop'] as const) {
    const title = document.createElement('h3');
    title.textContent = KIND_TITLE[kind];
    const grid = document.createElement('div');
    grid.className = 'shop-grid';
    for (const item of ITEMS.filter((i) => i.kind === kind)) {
      const owned = save.owned.includes(item.id);
      const on = save.equipped[kind] === item.id;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `item${on ? ' on' : ''}${owned ? ' owned' : ''}`;
      const icon = document.createElement('span');
      icon.className = 'item-icon';
      icon.textContent = item.emoji;
      const name = document.createElement('span');
      name.textContent = item.name;
      const tag = document.createElement('span');
      tag.className = 'item-tag';
      tag.textContent = on ? '사용 중' : owned ? '바꾸기' : `🪙 ${item.price}`;
      btn.append(icon, name, tag);
      btn.addEventListener('click', () => pickItem(item.id));
      grid.append(btn);
    }
    list.append(title, grid);
  }
}

function pickItem(id: string): void {
  const item = ITEMS.find((i) => i.id === id)!;
  unlock();
  if (save.owned.includes(id)) equip(save, id);
  else if (buy(save, id)) {
    sfx.bonus();
    toast(`${item.emoji} ${item.name}을(를) 샀어요!`, 1800);
  } else return toast(`코인이 ${item.price - save.coins}개 더 필요해요. 받아쓰기로 모아요!`, 2200);
  persist();
  stage.setLoadout(save.equipped);
  // 고른 것을 바로 보여 준다: 한 발 쏘고 터뜨리기
  sfx.shoot();
  stage.fire({ x: 0, y: 0.25 }, 0);
  stage.celebrate(2);
  renderShop();
}

function pause(): void {
  if (state !== 'playing' && state !== 'boss') return;
  if (state === 'boss' && busy) return; // 글자를 읽는 중·정답 연출 중에는 잠시 뒤에
  playState = state;
  setState('paused');
  clearTimeout(rereadTimer);
  stopSpeaking();
  releaseLock();
}

function resume(): void {
  if (state !== 'paused') return;
  setState(playState);
  lastCorrect = performance.now();
  if (playState === 'boss') layoutBoss();
}

function closeShop(): void {
  if (shopBack === 'result') setState('result');
  else toMenu();
}

function toMenu(): void {
  clearTimeout(rereadTimer);
  stopSpeaking();
  releaseLock();
  if (mode === 'boss') {
    busy = false;
    boss.show(false);
    document.body.classList.remove('hurry');
    void import('./ocr.ts').then((m) => m.releaseHandwriting());
  }
  mode = 'full';
  setState('menu');
  applyLook();
  decorate();
  paintMenu();
}

function decorate(): void {
  stage.clearBalloons();
  for (const ch of '받아쓰기풍선') stage.spawn(ch);
}

// ───────── 문제 편집(사진으로 올리기 · 직접 쓰기) ─────────

let photo: ImageBitmap | null = null;
let turns = 0;

function openEditor(lines: string[], withPhoto: boolean): void {
  $<HTMLTextAreaElement>('ed-text').value = lines.join('\n');
  $('ed-photo').hidden = !withPhoto;
  $('ed-status').textContent = withPhoto ? '글자가 똑바로 보이게 돌린 뒤 [글자 읽기]를 눌러요.' : '한 줄에 한 문제씩 적어요.';
  setState('editor');
}

function bindEditor(): void {
  const preview = $<HTMLCanvasElement>('ed-canvas');
  const text = $<HTMLTextAreaElement>('ed-text');
  const scan = $<HTMLButtonElement>('ed-scan');

  $<HTMLInputElement>('photo').addEventListener('change', async (e) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    try {
      photo = await createImageBitmap(file);
    } catch {
      return toast('사진을 열 수 없어요.');
    }
    turns = 0;
    const { drawRotated } = await import('./ocr.ts');
    drawRotated(preview, photo, turns);
    openEditor([], true);
  });

  $('ed-rotate').addEventListener('click', async () => {
    if (!photo) return;
    turns = (turns + 1) % 4;
    const { drawRotated } = await import('./ocr.ts');
    drawRotated(preview, photo, turns);
  });

  scan.addEventListener('click', async () => {
    if (!photo || scan.disabled) return;
    scan.disabled = true;
    const status = $('ed-status');
    status.textContent = '글자를 읽을 준비를 하고 있어요…';
    try {
      const { cleanForOcr, recognize } = await import('./ocr.ts');
      const lines = await recognize(cleanForOcr(preview), (p) => {
        status.textContent = `글자를 읽고 있어요… ${Math.round(p * 100)}%`;
      });
      if (lines.length) {
        text.value = lines.join('\n');
        status.textContent = `${lines.length}줄을 읽었어요. 틀린 글자·띄어쓰기를 고치고, 필요 없는 줄은 지운 뒤 저장해요.`;
      } else {
        status.textContent = '글자를 찾지 못했어요. 사진을 돌려 보거나 아래에 직접 적어 주세요.';
      }
    } catch {
      status.textContent = '글자 읽기에 실패했어요. 아래에 직접 적어 주세요.';
    } finally {
      scan.disabled = false;
    }
  });

  $('write').addEventListener('click', () => openEditor(questions.list, false));
  $('ed-cancel').addEventListener('click', toMenu);
  $('ed-save').addEventListener('click', () => {
    const list = parseQuestions(text.value);
    if (!list.length) return toast('문제가 없어요. 한 줄에 한 문제씩 적어 주세요.');
    saveQuestions(list);
    questions = { list, custom: true };
    photo = null;
    toMenu();
    toast(`문제 ${list.length}개를 저장했어요!`);
  });
}

// ───────── 입력 ─────────

function requestLock(): void {
  if (lockFailed || !canvas.requestPointerLock) return;
  try {
    const p = canvas.requestPointerLock() as unknown as Promise<void> | undefined;
    p?.catch?.(() => (lockFailed = true));
  } catch {
    lockFailed = true;
  }
}

function releaseLock(): void {
  if (isLocked()) document.exitPointerLock();
}

function ndcOf(e: PointerEvent): { x: number; y: number } {
  const r = canvas.getBoundingClientRect();
  return { x: ((e.clientX - r.left) / r.width) * 2 - 1, y: -(((e.clientY - r.top) / r.height) * 2 - 1) };
}

/** ndc가 null이면 조준점(화면 중앙)으로 발사 */
function shoot(ndc: { x: number; y: number } | null): void {
  if (state !== 'playing') return;
  const now = performance.now();
  if (now - lastShot < FIRE_INTERVAL) return;
  lastShot = now;
  sfx.shoot();
  navigator.vibrate?.(18);
  const hit = stage.fire(ndc, ndc ? 1.35 : 1.15);
  marker(ndc ?? { x: 0, y: 0 }, !!hit);
  if (!hit) return;
  // 물줄기가 날아가 닿는 순간에 터진다
  setTimeout(() => {
    if (state === 'playing' && (stage.balloons.includes(hit) || stage.bonus === hit)) onHit(hit);
  }, HIT_DELAY);
}

/** 쏜 자리에 조준 고리(맞으면 히트 마커)를 잠깐 보여 준다 */
function marker(ndc: { x: number; y: number }, hit: boolean): void {
  const r = canvas.getBoundingClientRect();
  const el = document.createElement('div');
  el.className = hit ? 'marker hit' : 'marker';
  el.style.left = `${r.left + ((ndc.x + 1) / 2) * r.width}px`;
  el.style.top = `${r.top + ((1 - ndc.y) / 2) * r.height}px`;
  document.body.append(el);
  setTimeout(() => el.remove(), 320);
}

function bindInput(): void {
  canvas.addEventListener('pointerdown', (e) => {
    unlock();
    if (state !== 'playing') return;
    if (e.pointerType === 'mouse') {
      if (e.button !== 0) return;
      if (isLocked()) shoot(null);
      else if (lockFailed) shoot(ndcOf(e));
      else requestLock();
      return;
    }
    drag = { id: e.pointerId, x: e.clientX, y: e.clientY, moved: false };
    stage.aim(ndcOf(e)); // 누르는 순간 총이 그쪽을 겨눈다
  });

  canvas.addEventListener('pointermove', (e) => {
    if (state !== 'playing') return;
    if (isLocked()) return stage.look(-e.movementX * 0.0022, -e.movementY * 0.0022);
    if (e.pointerType === 'mouse') return stage.aim(ndcOf(e)); // 총이 마우스를 따라 겨눈다
    if (!drag || drag.id !== e.pointerId) return;
    const dx = e.clientX - drag.x;
    const dy = e.clientY - drag.y;
    if (!drag.moved && Math.hypot(dx, dy) < 14) return;
    drag.moved = true;
    drag.x = e.clientX;
    drag.y = e.clientY;
    stage.look(dx * 0.003, dy * 0.003); // 끌어서 화면 옮기기
  });

  const endDrag = (e: PointerEvent, fire: boolean) => {
    if (!drag || drag.id !== e.pointerId) return;
    if (fire && !drag.moved) shoot(ndcOf(e));
    drag = null;
  };
  canvas.addEventListener('pointerup', (e) => endDrag(e, true));
  canvas.addEventListener('pointercancel', (e) => endDrag(e, false));

  document.addEventListener('pointerlockerror', () => (lockFailed = true));
  document.addEventListener('pointerlockchange', () => {
    document.body.classList.toggle('locked', isLocked());
    if (!isLocked() && state === 'playing') pause(); // Esc
  });

  window.addEventListener('keydown', (e) => {
    const typing = e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement;
    if (e.code === 'Space' && state === 'playing') {
      e.preventDefault();
      shoot(null);
    } else if (e.code === 'Enter' && state === 'boss') {
      e.preventDefault();
      void submitWriting();
    } else if (e.code === 'KeyR' && (state === 'playing' || state === 'boss') && !typing) {
      readQuestion();
    } else if (e.code === 'Escape' || (e.code === 'KeyP' && !typing)) {
      if (state === 'playing' || state === 'boss') pause();
      else if (state === 'paused') resume();
    }
  });

  const startFrom = (e: MouseEvent) => {
    unlock();
    const bossNext = STAGES[save.stage].mode === 'boss';
    startGame();
    if (!bossNext && (e as PointerEvent).pointerType === 'mouse') requestLock();
  };
  $('start').addEventListener('click', startFrom);
  $('again').addEventListener('click', startFrom);
  $('home').addEventListener('click', toMenu);
  $('shop-open').addEventListener('click', openShop);
  $('result-shop').addEventListener('click', openShop);
  $('shop-close').addEventListener('click', closeShop);
  $('quit').addEventListener('click', toMenu);
  $('replay').addEventListener('click', () => state === 'playing' && readQuestion());
  $('pause').addEventListener('click', pause);
  $('resume').addEventListener('click', (e) => {
    resume();
    if (state === 'playing' && (e as PointerEvent).pointerType === 'mouse') requestLock();
  });

  // 손글씨 패드
  pad = new Pad($<HTMLCanvasElement>('pad'));
  $('pad-ok').addEventListener('click', () => void submitWriting());
  $('pad-undo').addEventListener('click', () => pad.undo());
  $('pad-clear').addEventListener('click', () => pad.clear());
  $('pad-replay').addEventListener('click', () => state === 'boss' && readQuestion());
  $('pad-pause').addEventListener('click', pause);
  $<HTMLCanvasElement>('pad').addEventListener('pointerdown', unlock);

  bindEditor();
  bindLogin();
  bindFame();

  $<HTMLInputElement>('file').addEventListener('change', async (e) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    const list = parseQuestions(await file.text());
    if (!list.length) return toast('문제를 찾지 못했어요. 한 줄에 한 문제씩 적어 주세요.');
    saveQuestions(list);
    questions = { list, custom: true };
    paintMenu();
    toast(`문제 ${list.length}개를 올렸어요!`);
  });
  $('reset').addEventListener('click', () => {
    resetQuestions();
    questions = loadQuestions();
    paintMenu();
  });

  document.addEventListener('visibilitychange', () => document.hidden && pause());
  window.addEventListener('resize', () => {
    stage.resize();
    pad.resize();
    layoutBoss();
  });
  // 모바일: 두 번 탭 확대·길게 눌러 메뉴 방지
  document.addEventListener('contextmenu', (e) => e.preventDefault());
  document.addEventListener('dblclick', (e) => e.preventDefault());
}

// ───────── 시작 ─────────

async function boot(): Promise<void> {
  // 풍선 글자를 그리기 전에 글꼴을 기다린다(실패해도 기본 글꼴로 진행)
  await Promise.race([document.fonts.load('150px Jua', '한글'), new Promise((r) => setTimeout(r, 1500))]).catch(() => {});
  stage = new Stage(canvas);
  bindInput();
  receiveBrag();
  applyLook();
  decorate();
  const me = users.current();
  if (me) {
    setState('menu');
    paintMenu();
    if (bragArrived) {
      bragArrived = null;
      openFame();
    }
  } else {
    showLogin();
  }

  let prev = performance.now();
  let hintTick = 0;
  const loop = (now: number) => {
    const dt = Math.min(0.05, (now - prev) / 1000);
    prev = now;
    if (state === 'playing') tickTimer(dt);
    if (state === 'boss') tickBoss(dt);
    if (state === 'playing' && (hintTick += dt) > 0.5) {
      hintTick = 0;
      updateHint();
    }
    stage.update(state === 'paused' ? 0 : dt);
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);

  // 자동 검수용 훅
  (window as any).__game = {
    get state() { return state; },
    get game() { return game; },
    get stage() { return stage; },
    get save() { return save; },
    get users() { return users; },
    get pad() { return pad; },
    get boss() { return { hp: bossHp, max: bossMax, busy, fallback: padFallback, timeLeft }; },
    hitChar(ch: string) {
      const b = stage.balloons.find((x) => x.ch === ch);
      if (b && state === 'playing') onHit(b);
      return !!b;
    },
    /** 최종 시험: 글꼴로 글자를 찍어 제출(손글씨 인식까지 거친다) */
    write(ch: string) {
      if (state !== 'boss') return Promise.resolve(false);
      pad.stamp(ch);
      return submitWriting().then(() => true);
    },
    /** 최종 시험: 읽힌 글자를 바로 넣는다(인식 없이 판정만) */
    written(text: string) {
      if (state !== 'boss') return false;
      onWritten(text);
      return true;
    },
    timeout() {
      if (state === 'boss') bossTimeout();
    },
  };
}

void boot();
