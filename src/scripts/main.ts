// 게임 진행: 입력(마우스·터치) ↔ 로직(round) ↔ 화면(scene, HUD)
import { Stage, type Balloon } from './scene.ts';
import { Game, MAX_HEARTS, Round } from './round.ts';
import { distractorsFor } from './hangul.ts';
import { addSets, loadSets, parseQuestions, parseSets, removeSet, resetSets, updateSet, type QuestionSet } from './questions.ts';
import { sfx, speak, stopSpeaking, unlock, type SpeakMethod } from './audio.ts';
import { canRecord, deleteRecording, getRecording, listRecordings, startRecording, saveRecording, clipKey, type Recorder } from './recordings.ts';
import { IN_APP_NAME, externalUrl, inAppBrowser } from './browser.ts';
import {
  applyQuestionSet, applyWarning, blankCount, bossPhase, bossTime, buy, canResume, difficulty, equip, finishBoss, finishLap, lapQuestions, newSave,
  recordBadShot, setKeyOf, themeIndex, timeLimit, winPoints, ITEMS, MIN_WIN_LAPS, RECKLESS_LOCK_MS, STAGES,
  type Difficulty, type ItemKind, type LapSnapshot, type Mode, type Save,
} from './campaign.ts';
import {
  Users, addFriend, decodeRecords, displayName, encodeRecords, fameOf, fullName, idError, nameError, normalizeId, passwordError, recordOf,
  schoolError, type PlayerRecord, type StorageLike,
} from './users.ts';
import { Pad } from './pad.ts';
import { BossView } from './boss.ts';
import { drawBragCard, shareRecord } from './share.ts';
import { cheerFor, hopeFor } from './cheer.ts';

type State = 'login' | 'profile' | 'rounds' | 'menu' | 'playing' | 'boss' | 'between' | 'paused' | 'result' | 'editor' | 'shop' | 'fame';

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
let sets = loadSets();
let current: QuestionSet = sets[0];
/** 고른 회차의 문제(예전 코드와 같은 모양으로) */
const questions = {
  get list() {
    return current.questions;
  },
  get custom() {
    return !!current.custom;
  },
};

/** 이번 바퀴에 풀 문제: 지난 바퀴에서 틀린 문제가 있으면 그것만 */
function activeList(): string[] {
  return lapQuestions(save, current.questions);
}

/** 저장된 회차 id 로 고른다. 없으면 첫 회차 */
function pickSet(): QuestionSet {
  current = sets.find((x) => x.id === save.setId) ?? sets[0];
  return current;
}
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

// 난사(아무 데나 쏘기) 관리
const badShots: number[] = []; // 최근 빗나간·틀린 사격 시각
let calmUntil = 0; // 이 시각까지 사격 잠금
let lapWarnings = 0;
let warnTimer = 0;

const isLocked = () => document.pointerLockElement === canvas;

function setState(s: State): void {
  state = s;
  document.body.dataset.state = s;
  if (s !== 'playing' && s !== 'boss') {
    clearTimeout(peekTimer);
    $('peek').classList.remove('show');
  }
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
  $('set-pick').textContent = `📚 ${current.title} ▾`;
  $('qstatus').textContent = `${questions.custom ? '올린 문제' : '급수표'} · ${questions.list.length}문제`;
  $('reset').hidden = !sets.some((x) => x.custom);
  // 회차가 바뀌었으면 그 회차의 진행으로(코인·아이템은 그대로)
  applyQuestionSet(save, questions.list);
  save.setId = current.id;
  persist();
  const def = STAGES[save.stage];
  const me = users.current();
  $('player-name').textContent = me ? `👤 ${displayName(me)}` : '👤';
  $('player-name').title = me ? fullName(me) : '';
  const progress = def.mode === 'boss' ? `${def.emoji} ${def.name} 도전!` : `${def.emoji} ${def.name} ${save.lap + 1}바퀴째`;
  const boss = save.bossClears ? ` · 🐉 ${save.bossGrade}` : '';
  $('record').textContent = `${progress} · 🪙 ${save.coins}${save.crowns ? ` · 👑 ${save.crowns}` : ''}${boss}`;
  const active = activeList();
  const retrying = active.length < questions.list.length;
  if (retrying) $('record').textContent += ` · 🔁 틀린 ${active.length}문제부터`;
  const resumable = canResume(save, active.length);
  if (!resumable) save.resume = null;
  const cont = $('continue');
  cont.hidden = !resumable;
  if (resumable) cont.textContent = `▶ 이어하기 (${save.resume!.index + 1}번 문제부터 · ${save.resume!.score}점)`;
  $('start').textContent = resumable
    ? '처음부터 다시'
    : def.mode === 'boss'
      ? retrying ? `🐉 보스전 다시 (틀린 ${active.length}문제)` : '🐉 최종 시험 시작'
      : retrying ? `🔁 틀린 ${active.length}문제 다시` : '게임 시작';
}

/**
 * 바퀴 진행을 저장해 두어 나중에 이어서 할 수 있게 한다.
 * 문항을 끝냈을 때(done)는 다음 문항부터, 풀던 중이면 채운 칸·하트까지 그대로.
 */
function snapshotLap(done = true): void {
  if (!game?.round) return;
  const snap: LapSnapshot = {
    setKey: save.setKey,
    stage: save.stage,
    lap: save.lap,
    index: done ? game.index + 1 : game.index,
    partial: done ? null : game.round.partial,
    score: game.score,
    results: game.results.map((r) => ({ ...r, wrong: r.wrong.slice() })),
    earned: earned.slice(),
    lapCoins,
    lapWarnings,
    savedAt: Date.now(),
  };
  save.resume = snap.index < game.questions.length ? snap : null;
  persist();
}

/** 풀던 문항 도중의 진행을 저장(틀리거나 맞힐 때마다, 멈출 때) */
function saveProgress(): void {
  if (state === 'playing' || state === 'boss' || state === 'paused') snapshotLap(false);
}

let pendingPartial: NonNullable<LapSnapshot['partial']> | null = null;

/** 이어하기로 되살린 문항 도중 상태를 지금 문항에 적용한다 */
function applyPartial(): void {
  if (!pendingPartial) return;
  game.round.restorePartial(pendingPartial);
  pendingPartial = null;
}

/** 이어하기: 저장된 진행을 게임에 되살린다. 성공하면 true */
function restoreLap(): boolean {
  const snap = save.resume;
  if (!snap || !canResume(save, game.questions.length) || !game.restore(snap)) return false;
  earned = snap.earned.slice();
  lapCoins = snap.lapCoins;
  lapWarnings = snap.lapWarnings;
  pendingPartial = snap.partial ?? null;
  return true;
}

function addCoins(n: number): void {
  save.coins += n;
  lapCoins += n;
}

function gunSize(): number {
  return ITEMS.find((i) => i.id === save.equipped.skin)?.size ?? 1;
}

/** 배경(바퀴마다 바뀜)과 꾸민 물총, 모은 스티커를 화면에 적용 */
function applyLook(): string {
  const theme = stage.setTheme(themeIndex(save));
  document.body.style.background = theme.sky;
  stage.setLoadout(save.equipped, gunSize());
  stage.setStickers(save.stickers);
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
  setTimeout(() => el.remove(), kind === 'cheer' ? 1800 : 1000);
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

let lastSpeak: SpeakMethod | null = null;
let peekTimer = 0;
let reads = 0; // 문제를 읽어 준 횟수(검수용)

/**
 * 문제를 읽어 준다: 녹음 → 내장 음성 → 온라인 음성. 모두 안 되면 잠깐 글로 보여 준다(보고 기억해서 쓰기).
 */
function readQuestion(): void {
  const text = game.round.text;
  const my = game.round;
  reads++;
  void getRecording(text).then((rec) => {
    if (game.round !== my) return;
    return speak(text, () => showPeek(text), rec).then((m) => {
      if (m) {
        lastSpeak = m;
        $('peek').classList.remove('show');
      }
    });
  });
}

/** 소리를 못 낼 때: 문장을 4초만 보여 준다. 🔊 를 누르면 다시 보인다 */
function showPeek(text: string): void {
  const el = $('peek');
  $('peek-text').textContent = text;
  const app = inAppBrowser(navigator.userAgent);
  $('peek-hint').textContent = app
    ? `${IN_APP_NAME[app]} 안에서는 소리가 안 나요. 처음 화면의 [크롬·사파리로 열기]를 눌러요`
    : '이 기기에서 소리를 낼 수 없어요. 문제 만들기에서 🎙️ 녹음해 두면 어디서나 들려요';
  el.classList.add('show');
  clearTimeout(peekTimer);
  peekTimer = window.setTimeout(() => el.classList.remove('show'), 4000);
}

/** 한 바퀴(1번~마지막 문항) 시작. 단계·난이도·배경은 저장된 진행에 따라 정해진다. resume 이면 하다 만 곳부터 */
function startGame(resume = false): void {
  const def = STAGES[save.stage];
  if (def.mode === 'boss') return void startBoss(resume);
  mode = def.mode;
  diff = difficulty(save.level, mode);
  const list = activeList();
  game = new Game(list, mode === 'blank' ? (n) => blankCount(n, save.level) : undefined);
  earned = [];
  lapCoins = 0;
  lapWarnings = 0;
  badShots.length = 0;
  calmUntil = 0;
  const resumed = resume && restoreLap();
  if (!resumed) {
    save.resume = null;
    persist();
  }
  const themeName = applyLook();
  stage.setDrift(diff.drift);
  stage.clearBalloons();
  stage.setSpeaker(true);
  setState('playing');

  const retrying = list.length < questions.list.length;
  $('lap-title').textContent = resumed ? `▶ ${game.index + 2}번 문제부터 이어서` : retrying ? `🔁 틀린 문제 ${list.length}개 다시` : `${def.emoji} ${def.name}`;
  $('lap-sub').textContent = `${def.emoji} ${def.name} ${save.lap + 1}바퀴 · ${themeName} · 난이도 ${'★'.repeat(save.level)}`;
  $('lap-desc').textContent = retrying ? '지난번에 틀린 문제만 다시 해요. 다 맞히면 다음 단계!' : def.desc;
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
  applyPartial();
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
  if (b.speaker) {
    // 🔊 다시 듣기 풍선: 터지지 않고 문제를 다시 읽어 준다
    sfx.bonus();
    stage.nudge(b);
    popup('🔊 다시 들어요', at.x, at.y - 30, 'bonus');
    readQuestion();
    return;
  }
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
    if (game.round.misses > 0 && game.round.hearts > 0) popup('좋아, 바로 그거야! 👍', window.innerWidth / 2, window.innerHeight * 0.3, 'cheer');
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
    cheer(game.round.hearts);
    updateHint();
    rereadSoon();
    badShot();
  }
  paintHud();
  saveProgress();
}

/** 틀렸을 때 응원 한마디(화면 가운데 위) */
function cheer(heartsLeft: number): void {
  popup(cheerFor(heartsLeft), window.innerWidth / 2, window.innerHeight * 0.3, 'cheer');
}

/** 빗나가거나 틀린 사격. 짧은 시간에 몰리면 경고하고 잠시 못 쏘게 한다 */
function badShot(): void {
  if (!recordBadShot(badShots, performance.now())) return;
  lapWarnings++;
  const lost = applyWarning(save);
  persist();
  calmUntil = performance.now() + RECKLESS_LOCK_MS;
  clearTimeout(rereadTimer);
  stopSpeaking();
  sfx.attack();
  navigator.vibrate?.([120, 60, 120]);
  const warn = $('warn');
  $('warn-sub').textContent = lost ? `🪙 -${lost} · 경고 ${save.warnings}번째` : `경고 ${save.warnings}번째 · 다음부터는 코인을 잃어요`;
  warn.classList.add('show');
  const tick = () => {
    const left = Math.ceil((calmUntil - performance.now()) / 1000);
    if (left <= 0 || state !== 'playing') {
      warn.classList.remove('show');
      if (state === 'playing') readQuestion();
      return;
    }
    $('warn-count').textContent = `${left}초 뒤에 다시 쏠 수 있어요`;
    warnTimer = window.setTimeout(tick, 250);
  };
  clearTimeout(warnTimer);
  tick();
  paintHud();
}

function showClear(): void {
  const res = game.results[game.results.length - 1];
  sfx.clear();
  stage.celebrate();
  const fresh = STICKERS.filter((s) => !earned.includes(s));
  const sticker = fresh[Math.floor(Math.random() * fresh.length)] ?? STICKERS[0];
  earned.push(sticker);
  stage.setStickers([...new Set([...save.stickers, ...earned])]);
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
  snapshotLap(true);
  $('clear').classList.add('show');
  setTimeout(() => {
    $('clear').classList.remove('show');
    nextQuestion();
  }, 2300);
}

/** 한 바퀴를 끝냈을 때: 다 맞혔으면 다음 단계, 아니면 1번부터 다시 */
function showResult(): void {
  setState('result');
  stage.setSpeaker(false);
  stage.clearBalloons();
  releaseLock();
  const def = STAGES[save.stage];
  const lapNo = save.lap + 1;
  // 하트를 다 잃은 문항만 "틀린 문항"(한두 번 틀린 건 통과)
  const wrongTexts = game.results.filter((r) => r.misses >= MAX_HEARTS).map((r) => r.text);
  const missed = wrongTexts.length;
  const out = finishLap(save, game.wrongShots, game.score, wrongTexts);
  lapCoins += out.total;
  save.stickers = [...new Set([...save.stickers, ...earned])];
  save.resume = null;
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
  else message = `${hopeFor(missed, game.results.length)} 틀린 ${missed}문제만 다시 하고, 하트가 남으면 통과예요!`;
  if (out.levelChange > 0) message += ' (난이도 ⬆)';
  if (out.levelChange < 0) message += ' (조금 쉽게 해 줄게요)';
  if (lapWarnings) message += ` ⚠️ 아무 데나 쏘기 경고 ${lapWarnings}번 — 잘 듣고 겨눠서 쏴요!`;
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
  $('again').textContent = out.advanced ? `${next.emoji} ${next.name} 시작` : `🔁 틀린 ${missed}문제 다시 (${save.lap + 1}바퀴)`;
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
      stars.textContent = r.misses >= MAX_HEARTS ? '❌' : r.misses ? '🟡' : '⭕';
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
async function startBoss(resume = false): Promise<void> {
  mode = 'boss';
  diff = difficulty(save.level, 'full');
  game = new Game(activeList());
  earned = [];
  lapCoins = 0;
  lapWarnings = 0;
  const resumed = resume && restoreLap();
  if (!resumed) {
    save.resume = null;
    persist();
  }
  busy = true;
  releaseLock();
  const theme = stage.setTheme(BOSS_THEME);
  document.body.style.background = theme.sky;
  stage.setLoadout(save.equipped, gunSize());
  stage.setStickers(save.stickers);
  stage.setSpeaker(false);
  stage.clearBalloons();
  bossMax = game.questions.reduce((n, q) => n + new Round(q).targetCount, 0);
  // 이어하기: 이미 되찾은 글자만큼 보스 체력이 깎여 있다
  bossHp = bossMax - game.results.reduce((n, r) => n + new Round(r.text).targetCount, 0) - (resumed && save.resume?.partial ? save.resume.partial.filled.length : 0);
  setState('boss');
  boss.show(true);
  boss.setHp(bossHp, bossMax);
  boss.setPhase(bossPhase(bossMax ? bossHp / bossMax : 1), true);
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
  cheer(game.round.hearts);
  paintHud();
  updateBossHint();
  resetBossTimer();
  rereadSoon();
  saveProgress();
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
    const { normalizeHandwriting, judgeHandwriting } = await import('./ocr.ts');
    const norm = normalizeHandwriting(img);
    if (!norm) return toast('먼저 글자를 써 보세요 ✏️', 1600);
    const expected = game.round.nextChar;
    if (!expected) return;
    const ok = $<HTMLButtonElement>('pad-ok');
    busy = true;
    $('pad-panel').classList.add('busy');
    ok.disabled = true;
    ok.textContent = '👀 읽는 중…';
    let verdict: import('./ocr.ts').Judgement | null = null;
    try {
      verdict = await judgeHandwriting(norm, expected);
    } catch {
      toast('글자를 읽지 못했어요. 다시 써 볼까요?', 2000);
    } finally {
      busy = false;
      $('pad-panel').classList.remove('busy');
      ok.disabled = false;
      ok.textContent = '✔ 다 썼어요';
    }
    if (state !== 'boss' || !verdict) return;
    lastJudgeHint = verdict.hint;
    text = verdict.ok ? expected : verdict.read;
  }
  onWritten(text);
}

let lastJudgeHint = '';

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
  const where = lastJudgeHint ? ` ${lastJudgeHint}을(를) 또박또박!` : '';
  lastJudgeHint = '';
  toast(`'${text}'(으)로 읽혔어요.${where} 다시 잘 듣고 써요!`, 2800);
  cheer(game.round.hearts);
  paintHud();
  updateBossHint();
  resetBossTimer();
  rereadSoon();
  saveProgress();
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
  if (!r.done) saveProgress();
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

/** 보스전이 끝났다: 하나도 안 틀렸으면 왕관, 틀렸으면 틀린 문제로 보스전을 다시 */
function showBossResult(): void {
  setState('result');
  busy = false;
  document.body.classList.remove('hurry');
  stage.clearBalloons();
  releaseLock();
  const wrongTexts = game.results.filter((r) => r.misses >= MAX_HEARTS).map((r) => r.text);
  const out = finishBoss(save, game.wrongShots, game.score, Date.now(), current.title, wrongTexts);
  lapCoins += out.total;
  save.stickers = [...new Set([...save.stickers, ...earned])];
  save.resume = null;
  persist();
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

  if (!out.cleared) {
    // 틀렸다: 보스는 아직 버티고 있다
    boss.say('크하하! 아직이다! 틀린 글자를 다시 써 봐라!', 3000);
    sfx.attack();
    setTimeout(() => boss.show(false), 2000);
    $('result-title').textContent = `💪 아직이야! 틀린 ${out.retryCount}문제`;
    $('result-score').textContent = `🐉 ${game.wrongShots}번 틀렸어요 · ${game.score}점`;
    $('result-stars').textContent = `${hopeFor(out.retryCount, game.results.length)} 하트를 다 잃은 ${out.retryCount}문제만 다시 쓰면 보스를 물리쳐요! (지금까지 ${save.bossWrong}번 틀림 → ${out.grade}등급)`;
    $('again').textContent = `🐉 보스전 다시 (틀린 ${out.retryCount}문제)`;
    $('result-share').hidden = true;
    renderResultList();
    return;
  }

  boss.beaten();
  sfx.victory();
  stage.celebrate(24);
  void import('./ocr.ts').then((m) => m.releaseHandwriting());
  setTimeout(() => boss.show(false), 1800);
  const win = out.win!;
  const rank = users.winners().find((w) => !w.friend && w.at === win.at && w.id === users.current()?.id);
  $('result-title').textContent = `🏆 ${win.nth}회차 우승! ${out.grade}등급`;
  $('result-score').textContent = `🐉 글자 도둑 대왕 격파 · ${game.score}점${out.newBest ? ' · 🆕 최고 기록!' : ''}`;
  let message = win.laps === MIN_WIN_LAPS ? `⚡ ${win.laps}바퀴 만에 한 번에 우승했어요! ` : `${win.laps}바퀴 만에 우승했어요. `;
  message += `우승 점수 ${winPoints(win)}점`;
  if (rank) message += rank.tied ? ` · 명예의 전당 공동 ${rank.rank}위!` : ` · 명예의 전당 ${rank.rank}위!`;
  message += out.grade === 'S' ? ' 한 글자도 안 틀렸어요!' : ` (${out.grade}등급: 보스전에서 틀린 횟수로 정해요)`;
  if (out.levelChange > 0) message += ' (난이도 ⬆)';
  $('result-stars').textContent = message;
  $('again').textContent = `${STAGES[0].emoji} 새 배경에서 처음부터 다시`;
  $('result-share').hidden = false;
  renderResultList();
}

// ───────── 학생 로그인 ─────────

/** 카카오톡 같은 앱 안의 브라우저면 바깥 브라우저로 열도록 안내한다 */
function paintInApp(): void {
  const app = inAppBrowser(navigator.userAgent);
  const bar = $('inapp');
  bar.hidden = !app;
  if (!app) return;
  $('inapp-text').textContent = `${IN_APP_NAME[app]} 안에서는 소리가 안 나올 수 있어요.`;
}

function bindInApp(): void {
  $('inapp-open').addEventListener('click', async () => {
    const url = location.href;
    const target = externalUrl(inAppBrowser(navigator.userAgent), url);
    if (target) {
      location.href = target;
      return;
    }
    try {
      await navigator.clipboard.writeText(url);
      toast('주소를 복사했어요. 크롬이나 사파리에 붙여 넣어 열어요', 3200);
    } catch {
      toast('오른쪽 위 메뉴에서 "다른 브라우저로 열기"를 눌러요', 3200);
    }
  });
}

function showLogin(): void {
  clearTimeout(rereadTimer);
  stopSpeaking();
  releaseLock();
  setState('login');
  $('login-form').hidden = false;
  $('login-new').hidden = true;
  $('login-msg').textContent = '';
  $('new-msg').textContent = '';
  $<HTMLInputElement>('login-id').value = '';
  $<HTMLInputElement>('login-pw').value = '';
  const known = $('login-known');
  known.replaceChildren(
    ...users.list().slice(0, 8).map((a) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip-btn';
      b.textContent = a.name ? `👤 ${a.name} (@${a.id})` : `👤 @${a.id}`;
      b.title = fullName(a);
      b.addEventListener('click', () => {
        $<HTMLInputElement>('login-id').value = a.id;
        $('login-pw').focus();
      });
      return b;
    }),
  );
}

/** 들어온 학생의 진행으로 바꾸고 메뉴로 */
function enter(account: { id: string; name: string; save: Save }, fresh: boolean): void {
  save = account.save;
  pickSet();
  unlock();
  toMenu();
  const who = displayName(account);
  if (fresh) toast(`🌟 ${who} 친구, 환영해요! 아이디는 @${account.id}예요`, 3000);
  else if (canResume(save, activeList().length)) toast(`👋 ${who} 친구, 어서 와요! 하던 바퀴를 이어서 할 수 있어요`, 3000);
  else toast(`👋 ${who} 친구, 어서 와요!`, 2600);
  if (users.writeFailed) setTimeout(() => toast('⚠️ 이 브라우저는 저장이 안 돼요(시크릿 모드?). 기록이 남지 않을 수 있어요', 4000), 2800);
  if (bragArrived) {
    bragArrived = null;
    openFame();
  }
}

/** 새로 만들기 화면 열기: 적어 둔 아이디가 있으면 비어 있는 아이디를 제안한다 */
function openCreate(): void {
  const typed = $<HTMLInputElement>('login-id').value;
  const idInput = $<HTMLInputElement>('new-id');
  idInput.value = typed.trim() ? users.suggestId(typed) : '';
  $<HTMLInputElement>('new-pw').value = $<HTMLInputElement>('login-pw').value;
  $<HTMLInputElement>('new-name').value = '';
  $<HTMLInputElement>('new-school').value = '';
  $('new-msg').textContent = typed.trim() && users.has(typed) ? `'${normalizeId(typed)}'은(는) 이미 있어서 '${idInput.value}'을(를) 제안해요.` : '';
  $('login-form').hidden = true;
  $('login-new').hidden = false;
  (idInput.value ? $('new-pw') : idInput).focus();
}

function bindLogin(): void {
  const id = $<HTMLInputElement>('login-id');
  const pw = $<HTMLInputElement>('login-pw');
  const msg = $('login-msg');
  $('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const err = (normalizeId(id.value) ? null : '아이디를 적어 주세요.') ?? passwordError(pw.value);
    if (err) return void (msg.textContent = err);
    if (!users.has(id.value)) {
      msg.textContent = '없는 아이디예요. 처음이면 아래 [새로 만들기]를 눌러요.';
      return;
    }
    const r = users.login(id.value, pw.value);
    if ('error' in r) return void (msg.textContent = r.error);
    enter(r, false);
  });
  $('login-first').addEventListener('click', openCreate);
  $('login-create').addEventListener('click', () => {
    const newId = $<HTMLInputElement>('new-id').value;
    const newPw = $<HTMLInputElement>('new-pw').value;
    const name = $<HTMLInputElement>('new-name').value;
    const school = $<HTMLInputElement>('new-school').value;
    const nmsg = $('new-msg');
    if (users.has(newId)) {
      const alt = users.suggestId(newId);
      nmsg.textContent = `'${normalizeId(newId)}'은(는) 이미 쓰는 아이디예요. '${alt}'은(는) 어때요?`;
      $<HTMLInputElement>('new-id').value = alt;
      return;
    }
    const r = users.register(newId, newPw, { name, school });
    if ('error' in r) return void (nmsg.textContent = r.error);
    $('login-form').hidden = false;
    $('login-new').hidden = true;
    enter(r, true);
  });
  $('login-back').addEventListener('click', () => {
    $('login-form').hidden = false;
    $('login-new').hidden = true;
    id.focus();
  });
  $('logout').addEventListener('click', () => {
    persist();
    users.logout();
    save = newSave();
    showLogin();
  });

  // 내 정보(이름·학교 바꾸기)
  $('player-name').addEventListener('click', openProfile);
  $('profile-save').addEventListener('click', () => {
    const name = $<HTMLInputElement>('profile-name').value;
    const school = $<HTMLInputElement>('profile-school').value;
    const err = users.updateProfile({ name, school });
    if (err) return void ($('profile-msg').textContent = err);
    toast('내 정보를 저장했어요', 1600);
    toMenu();
  });
  $('profile-cancel').addEventListener('click', toMenu);
}

function openProfile(): void {
  const me = users.current();
  if (!me || state !== 'menu') return;
  $('profile-id').textContent = `아이디 @${me.id}`;
  $<HTMLInputElement>('profile-name').value = me.name;
  $<HTMLInputElement>('profile-school').value = me.school;
  $('profile-msg').textContent = '';
  setState('profile');
}

// ───────── 명예의 전당 · 자랑하기 ─────────

function openFame(): void {
  if (state !== 'fame') fameBack = state;
  renderFame();
  $('share-box').hidden = true;
  setState('fame');
}

function formatDate(at: number): string {
  if (!at) return '';
  const d = new Date(at);
  return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
}

function renderFame(): void {
  const me = users.current();
  const medals = ['🥇', '🥈', '🥉'];
  $('fame-share').hidden = !me;
  const winners = users.winners();
  $('hall-share').hidden = !winners.length;
  $('winners-list').replaceChildren(
    ...winners.map((w) => {
      const li = document.createElement('li');
      if (me && !w.friend && w.id === me.id) li.classList.add('me');
      if (w.rank === 1) li.classList.add('top');
      const rank = document.createElement('span');
      rank.className = 'f-rank';
      rank.textContent = w.rank <= 3 ? medals[w.rank - 1] : `${w.rank}위`;
      if (w.tied) rank.textContent = `공동 ${rank.textContent}`;
      const name = document.createElement('span');
      name.className = 'f-name';
      name.textContent = `${displayName(w)}${w.friend ? ' 👫' : ''} · ${w.nth}회차 우승`;
      const pts = document.createElement('span');
      pts.className = 'f-fame';
      pts.textContent = `${w.points}점`;
      const detail = document.createElement('span');
      detail.className = 'f-detail';
      const speed = w.laps === MIN_WIN_LAPS ? `⚡ ${w.laps}바퀴 만에 한 번에!` : `${w.laps}바퀴 만에`;
      detail.textContent = `@${w.id}${w.school ? ` · ${w.school}` : ''} · ${speed} · ${w.grade}등급 · 시험 ${w.score}점 · ${formatDate(w.at)}`;
      li.append(rank, name, pts, detail);
      return li;
    }),
  );
  $('fame-list').replaceChildren(
    ...users.records().map((r, i) => {
      const li = document.createElement('li');
      if (me && !r.friend && r.id === me.id) li.classList.add('me');
      const rank = document.createElement('span');
      rank.className = 'f-rank';
      rank.textContent = medals[i] ?? `${i + 1}`;
      const name = document.createElement('span');
      name.className = 'f-name';
      name.textContent = r.friend ? `${displayName(r)} 👫` : displayName(r);
      const fame = document.createElement('span');
      fame.className = 'f-fame';
      fame.textContent = `${fameOf(r)}점`;
      const detail = document.createElement('span');
      detail.className = 'f-detail';
      const bossText = r.bossClears ? `${r.bossGrade}등급 ${r.bossBest}점` : '도전 중';
      detail.textContent = `@${r.id}${r.school ? ` · ${r.school}` : ''} · 👑 ${r.crowns} · ⭐ ${r.best} · 🐉 ${bossText}${r.friend ? ' · 링크로 받은 친구' : ''}`;
      li.append(rank, name, fame, detail);
      return li;
    }),
  );
}

async function shareMine(): Promise<void> {
  const me = users.current();
  if (!me) return;
  const record = recordOf(me, save, Date.now());
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
  $('hall-share').addEventListener('click', async () => {
    // 우승자가 있는 학생들의 기록을 한 링크에 담는다
    const winners = users.records().filter((r) => r.wins.length);
    const url = new URL(location.href);
    url.search = '';
    url.hash = `hall=${encodeRecords(winners)}`;
    const text = `🏆 우리 명예의 전당! 우승자 ${winners.length}명 — 구경하기 👉 ${url.href}`;
    const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
    try {
      if (typeof nav.share === 'function') await nav.share({ text });
      else {
        await navigator.clipboard.writeText(text);
        toast('명예의 전당 링크를 복사했어요. 친구·선생님께 보내요!', 2600);
      }
    } catch {
      $('share-box').hidden = false;
      $<HTMLTextAreaElement>('share-text').value = text;
      $('share-status').textContent = '아래 링크를 복사해서 보내요';
    }
  });
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

/** 친구가 보낸 자랑 링크(#brag=…)나 명예의 전당 링크(#hall=…)를 받아 둔다 */
function receiveBrag(): void {
  const m = location.hash.match(/(brag|hall)=([A-Za-z0-9_-]+)/);
  if (!m) return;
  history.replaceState(null, '', location.pathname + location.search);
  const records = decodeRecords(m[2]);
  if (!records) return toast('링크를 읽을 수 없어요', 2600);
  for (const r of records) addFriend(storage, r);
  bragArrived = records[0];
  toast(
    records.length === 1
      ? `👫 ${displayName(records[0])} 친구의 기록이 도착했어요! 명예의 전당에서 비교해 봐요`
      : `🏆 친구 ${records.length}명의 우승 기록이 도착했어요! 명예의 전당을 열어요`,
    4000,
  );
}

// ───────── 꾸미기 상점 ─────────

const KIND_TITLE: Record<ItemKind, string> = { skin: '물총 (크기가 달라요)', stream: '물줄기', pop: '터지는 효과' };

function sizeLabel(size: number): string {
  if (size <= 0.8) return '아주 작음';
  if (size < 1) return '작음';
  if (size === 1) return '보통';
  if (size < 1.3) return '큼';
  if (size < 1.6) return '아주 큼';
  return '거대!';
}

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
      btn.className = `item${on ? ' on' : ''}${owned ? ' owned' : ''}${item.final ? ' final' : ''}${!owned && save.coins < item.price ? ' locked' : ''}`;
      const icon = document.createElement('span');
      icon.className = 'item-icon';
      icon.textContent = item.emoji;
      if (item.size) icon.style.fontSize = `${Math.round(22 + item.size * 12)}px`;
      const name = document.createElement('span');
      name.className = 'item-name';
      name.textContent = item.final ? `👑 ${item.name}` : item.name;
      const desc = document.createElement('span');
      desc.className = 'item-desc';
      desc.textContent = item.kind === 'skin' && item.size ? `${sizeLabel(item.size)} · ${item.desc}` : item.desc;
      const tag = document.createElement('span');
      tag.className = 'item-tag';
      tag.textContent = on ? '사용 중' : owned ? '바꾸기' : `🪙 ${item.price}`;
      btn.append(icon, name, desc, tag);
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
  stage.setLoadout(save.equipped, gunSize());
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
  saveProgress();
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
  stage.setSpeaker(false);
  stage.clearBalloons();
  for (const ch of '받아쓰기풍선') stage.spawn(ch);
}

// ───────── 회차 고르기 ─────────

function chooseSet(set: QuestionSet): void {
  current = set;
  save.setId = set.id;
  toMenu();
}

function openRounds(): void {
  renderRounds();
  setState('rounds');
}

function renderRounds(): void {
  const list = $('rounds-list');
  list.replaceChildren(
    ...sets.map((set) => {
      const li = document.createElement('li');
      li.className = `round${set.id === current.id ? ' on' : ''}`;
      const main = document.createElement('button');
      main.type = 'button';
      main.className = 'round-main';
      const title = document.createElement('span');
      title.className = 'round-title';
      title.textContent = `${set.custom ? '✏️ ' : ''}${set.title}`;
      const detail = document.createElement('span');
      detail.className = 'round-detail';
      const key = setKeyOf(set.questions);
      const p = set.id === current.id ? { stage: save.stage, lap: save.lap, resume: save.resume } : save.sets[key];
      const wins = save.wins.filter((w) => w.set === set.title).length;
      const parts = [`${set.questions.length}문제`];
      if (p) parts.push(`${STAGES[p.stage].emoji} ${STAGES[p.stage].name} ${p.lap + 1}바퀴째`);
      else parts.push('아직 안 했어요');
      if (p?.resume) parts.push(`▶ ${p.resume.index + 1}번부터 이어하기`);
      if (wins) parts.push(`🏆 우승 ${wins}회`);
      detail.textContent = parts.join(' · ');
      main.append(title, detail);
      main.addEventListener('click', () => chooseSet(set));
      li.append(main);
      if (set.custom) {
        const edit = document.createElement('button');
        edit.type = 'button';
        edit.className = 'round-btn';
        edit.textContent = '✏️';
        edit.title = '고치기';
        edit.addEventListener('click', () => openEditor(set, false));
        const del = document.createElement('button');
        del.type = 'button';
        del.className = 'round-btn';
        del.textContent = '🗑';
        del.title = '지우기';
        del.addEventListener('click', () => {
          removeSet(set.id);
          sets = loadSets();
          if (current.id === set.id) current = sets[0];
          toast(`'${set.title}' 회차를 지웠어요`, 1800);
          renderRounds();
        });
        li.append(edit, del);
      }
      return li;
    }),
  );
}

// ───────── 문제 편집(사진으로 올리기 · 직접 쓰기) ─────────

let editingId: string | null = null; // 고치는 중인 올린 회차

let photo: ImageBitmap | null = null;
let turns = 0;

/**
 * set 이 올린 회차면 고치기, 급수표 회차면 그 문제를 채워 열되 저장하면 내 회차로 복사된다
 * (급수표 문장을 녹음만 하고 [취소]해도 녹음은 남는다). null 이면 빈 회차 만들기.
 */
function openEditor(set: QuestionSet | null, withPhoto: boolean): void {
  editingId = set?.custom ? set.id : null;
  $<HTMLInputElement>('ed-title').value = set ? (set.custom ? set.title : `${set.title} (내 문제)`) : withPhoto ? '사진 문제' : '내 문제';
  $<HTMLTextAreaElement>('ed-text').value = set ? set.questions.join('\n') : '';
  $('ed-photo').hidden = !withPhoto;
  $('ed-status').textContent = withPhoto
    ? '글자가 똑바로 보이게 돌린 뒤 [글자 읽기]를 눌러요.'
    : set && !set.custom
      ? '급수표 문제예요. 🎙️ 녹음만 할 거면 녹음 뒤 [취소], 고쳐서 저장하면 내 회차로 복사돼요.'
      : '한 줄에 한 문제씩 적어요. "7회 [제목]" 같은 줄을 넣으면 여러 회차로 나뉘어요.';
  setState('editor');
  void renderRecordings();
}

/** 편집 내용을 회차로 저장하고 첫 회차를 고른다 */
function saveEditor(): void {
  const text = $<HTMLTextAreaElement>('ed-text').value;
  const title = $<HTMLInputElement>('ed-title').value.trim() || '내 문제';
  const parsed = parseSets(text, title);
  if (!parsed.length) return toast('문제가 없어요. 한 줄에 한 문제씩 적어 주세요.');
  let chosen: QuestionSet | undefined;
  if (editingId && parsed.length === 1) {
    chosen = updateSet(editingId, title, parsed[0].questions) ?? undefined;
  }
  if (!chosen) {
    if (parsed.length === 1) parsed[0].title = title;
    chosen = addSets(parsed)[0];
  }
  sets = loadSets();
  photo = null;
  chooseSet(sets.find((x) => x.id === chosen!.id) ?? sets[0]);
  toast(parsed.length > 1 ? `회차 ${parsed.length}개를 저장했어요!` : `'${chosen.title}' ${chosen.questions.length}문제를 저장했어요!`);
}

// ───────── 문제 녹음(보호자·선생님 목소리) ─────────

let recorder: Recorder | null = null;
let recordingFor: string | null = null;
let recTimer = 0;

/** 적어 둔 문제마다 🎙️ 녹음 · ▶ 듣기 · 🗑 버튼을 보여 준다 */
async function renderRecordings(): Promise<void> {
  const box = $('ed-rec');
  const lines = parseQuestions($<HTMLTextAreaElement>('ed-text').value);
  box.hidden = !lines.length;
  if (!lines.length) return;
  const have = await listRecordings();
  const supported = canRecord();
  $('ed-rec-title').textContent = `🎙️ 내 목소리로 녹음 (${lines.filter((l) => have.has(clipKey(l))).length}/${lines.length})`;
  $('ed-rec-note').textContent = supported
    ? '녹음해 두면 소리가 안 나는 기기에서도 내 목소리로 문제를 들려줘요. 한 줄에 8초까지.'
    : '이 브라우저는 녹음을 지원하지 않아요. 크롬이나 사파리에서 녹음해요.';
  $('ed-rec-list').replaceChildren(
    ...lines.map((line) => {
      const row = document.createElement('div');
      row.className = 'rec-row';
      const text = document.createElement('span');
      text.className = 'rec-text';
      text.textContent = (have.has(clipKey(line)) ? '✅ ' : '') + line;
      const btn = (label: string, cls: string, on: () => void) => {
        const b = document.createElement('button');
        b.type = 'button';
        b.className = `rec-btn ${cls}`;
        b.textContent = label;
        b.addEventListener('click', on);
        return b;
      };
      row.append(text);
      if (recordingFor === line) {
        row.classList.add('recording');
        row.append(btn('⏹ 끝', 'stop', () => void stopRecordingFor(line)));
      } else {
        if (supported) row.append(btn('🎙️', 'rec', () => void startRecordingFor(line)));
        if (have.has(clipKey(line))) {
          row.append(btn('▶', 'play', () => void playRecordingOf(line)));
          row.append(btn('🗑', 'del', () => deleteRecording(line).then(renderRecordings)));
        }
      }
      return row;
    }),
  );
}

async function startRecordingFor(line: string): Promise<void> {
  if (recorder) await stopRecordingFor(recordingFor!);
  unlock();
  try {
    recorder = await startRecording(8000, () => void stopRecordingFor(line));
  } catch {
    return toast('마이크를 쓸 수 없어요. 마이크 사용을 허용해 주세요', 3000);
  }
  recordingFor = line;
  toast(`🎙️ 녹음 중… "${line}" 을(를) 또박또박 읽어요`, 8000);
  void renderRecordings();
}

async function stopRecordingFor(line: string): Promise<void> {
  const r = recorder;
  if (!r) return;
  recorder = null;
  recordingFor = null;
  clearTimeout(recTimer);
  const blob = await r.stop();
  if (blob.size < 200) toast('녹음이 너무 짧아요. 다시 해 봐요', 2000);
  else {
    await saveRecording(line, blob);
    toast('녹음했어요! ▶ 로 들어 봐요', 1800);
  }
  void renderRecordings();
}

async function playRecordingOf(line: string): Promise<void> {
  unlock();
  const rec = await getRecording(line);
  if (!rec) return;
  await speak(line, () => toast('재생할 수 없어요', 1600), rec);
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
    openEditor(null, true);
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

  $('write').addEventListener('click', () => openEditor(current, false));
  $('set-pick').addEventListener('click', openRounds);
  $('rounds-close').addEventListener('click', toMenu);
  $('rounds-write').addEventListener('click', () => openEditor(null, false));
  let recDebounce = 0;
  text.addEventListener('input', () => {
    clearTimeout(recDebounce);
    recDebounce = window.setTimeout(() => void renderRecordings(), 500);
  });
  $('ed-cancel').addEventListener('click', () => {
    if (recorder) recorder.cancel();
    recorder = null;
    recordingFor = null;
    toMenu();
  });
  $('ed-save').addEventListener('click', saveEditor);
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
  if (now < calmUntil) return; // 경고 중에는 잠시 쉰다
  if (now - lastShot < FIRE_INTERVAL) return;
  lastShot = now;
  sfx.shoot();
  navigator.vibrate?.(18);
  const hit = stage.fire(ndc, ndc ? 1.35 : 1.15);
  marker(ndc ?? { x: 0, y: 0 }, !!hit);
  if (!hit) return badShot();
  // 물줄기가 날아가 닿는 순간에 터진다
  setTimeout(() => {
    if (state === 'playing' && (stage.balloons.includes(hit) || stage.bonus === hit || stage.speaker === hit)) onHit(hit);
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

  const startFrom = (e: MouseEvent, resume = false) => {
    unlock();
    const bossNext = STAGES[save.stage].mode === 'boss';
    startGame(resume);
    if (!bossNext && (e as PointerEvent).pointerType === 'mouse') requestLock();
  };
  $('start').addEventListener('click', (e) => startFrom(e));
  $('continue').addEventListener('click', (e) => startFrom(e, true));
  $('again').addEventListener('click', (e) => startFrom(e));
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
  bindInApp();
  paintInApp();

  $<HTMLInputElement>('file').addEventListener('change', async (e) => {
    const input = e.target as HTMLInputElement;
    const file = input.files?.[0];
    input.value = '';
    if (!file) return;
    const parsed = parseSets(await file.text(), file.name.replace(/\.[^.]+$/, '') || '올린 문제');
    if (!parsed.length) return toast('문제를 찾지 못했어요. 한 줄에 한 문제씩 적어 주세요.');
    const added = addSets(parsed);
    sets = loadSets();
    chooseSet(sets.find((x) => x.id === added[0].id) ?? sets[0]);
    toast(parsed.length > 1 ? `회차 ${parsed.length}개를 올렸어요! 회차를 골라 시작해요` : `'${added[0].title}' ${added[0].questions.length}문제를 올렸어요!`, 3000);
  });
  $('reset').addEventListener('click', () => {
    resetSets();
    sets = loadSets();
    current = sets[0];
    toMenu();
    toast('올린 문제를 지우고 급수표만 남겼어요', 2200);
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
    pickSet();
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
    get calm() { return performance.now() < calmUntil; },
    get lastSpeak() { return lastSpeak; },
    get reads() { return reads; },
    get sets() { return sets; },
    get current() { return current; },
    chooseSet(id: string) { const x = sets.find((y) => y.id === id); if (x) chooseSet(x); return !!x; },
    startGame,
    readQuestion,
    shootAt(x: number, y: number) { shoot({ x, y }); },
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
    /** 검수용: 글꼴 글자를 찍어 판정만 해 본다 */
    async judge(ch: string, expected: string) {
      pad.stamp(ch);
      const { normalizeHandwriting, judgeHandwriting } = await import('./ocr.ts');
      const norm = normalizeHandwriting(pad.toImage()!);
      pad.clear();
      return norm ? judgeHandwriting(norm, expected) : null;
    },
  };
}

void boot();
