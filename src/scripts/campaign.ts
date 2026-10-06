// 반복 학습 진행(바퀴·단계·난이도), 코인, 상점 — 화면과 무관한 순수 로직
import type { QuestionResult } from './round.ts';

export type Mode = 'full' | 'blank' | 'speed' | 'boss';

export interface StageDef {
  mode: Mode;
  name: string;
  emoji: string;
  desc: string;
  /** true면 한 글자도 틀리지 않을 때까지 1번부터 다시 */
  needPerfect: boolean;
}

export const STAGES: StageDef[] = [
  { mode: 'full', name: '받아쓰기', emoji: '🎧', desc: '잘 듣고 글자를 순서대로 모두 쏴요', needPerfect: true },
  { mode: 'blank', name: '빈칸 채우기', emoji: '🧩', desc: '빠진 글자만 찾아서 쏴요', needPerfect: false },
  { mode: 'speed', name: '번개 받아쓰기', emoji: '⚡', desc: '시간 안에 끝내면 코인을 더 받아요', needPerfect: false },
  { mode: 'boss', name: '최종 시험', emoji: '🐉', desc: '글자 도둑 대왕! 글자를 직접 써서 되찾아요', needPerfect: false },
];

/** 사격 단계를 모두 지나면 나오는 마지막 단계(손글씨 보스전) */
export const BOSS_STAGE = STAGES.findIndex((s) => s.mode === 'boss');

export const THEME_COUNT = 5;
export const MIN_LEVEL = 1;
export const MAX_LEVEL = 5;

export type ItemKind = 'skin' | 'stream' | 'pop';
export interface Item {
  id: string;
  kind: ItemKind;
  name: string;
  emoji: string;
  price: number;
  /** 물총 크기 배율(skin) */
  size?: number;
  /** 한 줄 설명(상점) */
  desc: string;
  /** 가장 비싸고 멋진 마지막 장비 */
  final?: boolean;
}

export const ITEMS: Item[] = [
  { id: 'skin.basic', kind: 'skin', name: '기본 물총', emoji: '🔫', price: 0, size: 1, desc: '보통 크기' },
  { id: 'skin.mini', kind: 'skin', name: '꼬마 물총', emoji: '🧃', price: 120, size: 0.7, desc: '작고 귀여워요' },
  { id: 'skin.ocean', kind: 'skin', name: '바다 물총', emoji: '🌊', price: 200, size: 1, desc: '파란 바다색' },
  { id: 'skin.berry', kind: 'skin', name: '딸기 물총', emoji: '🍓', price: 260, size: 1, desc: '분홍 딸기색' },
  { id: 'skin.forest', kind: 'skin', name: '숲속 물총', emoji: '🌲', price: 340, size: 1.1, desc: '조금 커요' },
  { id: 'skin.galaxy', kind: 'skin', name: '우주 물총', emoji: '🪐', price: 520, size: 1.15, desc: '보라빛 우주' },
  { id: 'skin.gold', kind: 'skin', name: '황금 물총', emoji: '🏅', price: 800, size: 1.2, desc: '반짝이는 금속' },
  { id: 'skin.rainbow', kind: 'skin', name: '무지개 물총', emoji: '🌈', price: 1200, size: 1.3, desc: '색이 계속 바뀌어요' },
  { id: 'skin.cannon', kind: 'skin', name: '왕대포 물총', emoji: '💣', price: 1700, size: 1.6, desc: '아주 커요!' },
  { id: 'skin.dragon', kind: 'skin', name: '전설의 용 물총', emoji: '🐲', price: 3000, size: 1.85, desc: '가장 크고 빛나요', final: true },
  { id: 'stream.water', kind: 'stream', name: '맑은 물', emoji: '💧', price: 0, desc: '기본 물줄기' },
  { id: 'stream.lemon', kind: 'stream', name: '레몬 주스', emoji: '🍋', price: 150, desc: '노란 물줄기' },
  { id: 'stream.berry', kind: 'stream', name: '딸기 우유', emoji: '🥤', price: 150, desc: '분홍 물줄기' },
  { id: 'stream.mint', kind: 'stream', name: '민트 소다', emoji: '🧊', price: 240, desc: '시원한 민트색' },
  { id: 'stream.lava', kind: 'stream', name: '용암 물줄기', emoji: '🔥', price: 520, desc: '굵고 뜨거워요' },
  { id: 'stream.rainbow', kind: 'stream', name: '무지개 물줄기', emoji: '🌈', price: 760, desc: '색이 바뀌어요' },
  { id: 'stream.dragon', kind: 'stream', name: '용의 숨결', emoji: '🐉', price: 2000, desc: '반짝이가 날려요', final: true },
  { id: 'pop.drop', kind: 'pop', name: '물방울', emoji: '💦', price: 0, desc: '기본 효과' },
  { id: 'pop.star', kind: 'pop', name: '별 팡팡', emoji: '⭐', price: 200, desc: '별이 튀어요' },
  { id: 'pop.heart', kind: 'pop', name: '하트 팡팡', emoji: '💖', price: 200, desc: '하트가 튀어요' },
  { id: 'pop.flower', kind: 'pop', name: '꽃잎 팡팡', emoji: '🌸', price: 420, desc: '꽃잎이 흩날려요' },
  { id: 'pop.confetti', kind: 'pop', name: '색종이', emoji: '🎊', price: 420, desc: '알록달록 색종이' },
  { id: 'pop.firework', kind: 'pop', name: '왕폭죽', emoji: '🎆', price: 850, desc: '크게 터져요' },
  { id: 'pop.galaxy', kind: 'pop', name: '은하수', emoji: '✨', price: 1300, desc: '별빛이 쏟아져요' },
  { id: 'pop.dragon', kind: 'pop', name: '용의 불꽃', emoji: '🐲', price: 2500, desc: '불꽃 고리 + 불꽃놀이', final: true },
];

export interface Loadout {
  skin: string;
  stream: string;
  pop: string;
}

export interface Save {
  coins: number;
  owned: string[];
  equipped: Loadout;
  /** 지금 문제 묶음의 지문(바뀌면 진행을 처음으로) */
  setKey: string;
  stage: number;
  /** 지금 단계에서 끝낸 바퀴 수 */
  lap: number;
  totalLaps: number;
  level: number;
  /** 지난 바퀴에서 틀린 횟수 */
  lastWrong: number | null;
  crowns: number;
  best: number;
  stickers: string[];
  /** 최종 시험(보스전) 기록 */
  bossBest: number;
  bossClears: number;
  bossGrade: Grade | '';
  /** 지난 우승(또는 처음) 뒤로 돈 바퀴 수 */
  runLaps: number;
  /** 우승 기록(최종 시험 통과마다 하나) */
  wins: Win[];
  /** 난사 경고를 받은 횟수(누적) */
  warnings: number;
  /** 하다 만 바퀴(이어하기). 없으면 null */
  resume: LapSnapshot | null;
  /** 고른 회차(문제 묶음) id */
  setId: string;
  /** 다른 회차의 진행(회차를 바꿔도 잊지 않는다). 키는 setKey */
  sets: Record<string, SetProgress>;
}

/** 회차마다 따로 가는 진행 */
export interface SetProgress {
  stage: number;
  lap: number;
  level: number;
  lastWrong: number | null;
  runLaps: number;
  resume: LapSnapshot | null;
}

/** 바퀴 도중의 진행: 문항을 하나 끝낼 때마다 저장한다 */
export interface LapSnapshot {
  /** 어느 문제 묶음·단계·바퀴의 진행인지 */
  setKey: string;
  stage: number;
  lap: number;
  /** 다음에 풀 문항 번호(0부터) = 끝낸 문항 수 */
  index: number;
  score: number;
  results: QuestionResult[];
  /** 이번 바퀴에서 받은 스티커·코인·경고 */
  earned: string[];
  lapCoins: number;
  lapWarnings: number;
  savedAt: number;
}

export function reviveSnapshot(raw: unknown): LapSnapshot | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Partial<LapSnapshot>;
  const num = (v: unknown, d = 0) => (typeof v === 'number' && Number.isFinite(v) ? v : d);
  if (typeof r.setKey !== 'string' || !Array.isArray(r.results)) return null;
  const results = r.results
    .filter((q): q is QuestionResult => !!q && typeof q === 'object' && typeof (q as QuestionResult).text === 'string')
    .map((q) => ({ text: q.text, stars: num(q.stars, 1), misses: num(q.misses), wrong: Array.isArray(q.wrong) ? q.wrong.filter((w) => typeof w === 'string') : [] }));
  const index = Math.floor(num(r.index));
  if (index < 1 || results.length !== index) return null;
  return {
    setKey: r.setKey,
    stage: Math.floor(num(r.stage)),
    lap: Math.floor(num(r.lap)),
    index,
    score: Math.max(0, num(r.score)),
    results,
    earned: Array.isArray(r.earned) ? r.earned.filter((s) => typeof s === 'string') : [],
    lapCoins: num(r.lapCoins),
    lapWarnings: Math.floor(num(r.lapWarnings)),
    savedAt: num(r.savedAt),
  };
}

/** 저장된 이어하기가 지금 문제 묶음·단계·바퀴에 맞는지 */
export function canResume(save: Save, questionCount: number): boolean {
  const r = save.resume;
  return !!r && r.setKey === save.setKey && r.stage === save.stage && r.lap === save.lap && r.index < questionCount;
}

export type Grade = 'S' | 'A' | 'B' | 'C';
export const GRADES: Grade[] = ['S', 'A', 'B', 'C'];

export interface Win {
  /** 이 학생의 몇 번째 우승인지 */
  nth: number;
  /** 우승까지 돈 바퀴 수(최종 시험 포함, 최소 4) */
  laps: number;
  grade: Grade;
  /** 최종 시험 점수 */
  score: number;
  /** 우승 시각 */
  at: number;
  /** 어느 회차였는지(제목) */
  set?: string;
}

export function newSave(): Save {
  return {
    coins: 0,
    owned: ['skin.basic', 'stream.water', 'pop.drop'],
    equipped: { skin: 'skin.basic', stream: 'stream.water', pop: 'pop.drop' },
    setKey: '',
    stage: 0,
    lap: 0,
    totalLaps: 0,
    level: 2,
    lastWrong: null,
    crowns: 0,
    best: 0,
    stickers: [],
    bossBest: 0,
    bossClears: 0,
    bossGrade: '',
    runLaps: 0,
    wins: [],
    warnings: 0,
    resume: null,
    setId: '',
    sets: {},
  };
}

/** 저장된 우승 기록을 안전하게 읽는다 */
export function reviveWin(raw: unknown): Win | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Partial<Win>;
  const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) && v >= 0 ? Math.floor(v) : 0);
  if (!GRADES.includes(r.grade as Grade)) return null;
  const w: Win = { nth: num(r.nth), laps: Math.max(1, num(r.laps)), grade: r.grade as Grade, score: num(r.score), at: num(r.at) };
  if (typeof r.set === 'string' && r.set) w.set = r.set.slice(0, 30);
  return w;
}

function reviveProgress(raw: unknown): SetProgress | null {
  if (!raw || typeof raw !== 'object') return null;
  const r = raw as Partial<SetProgress>;
  const num = (v: unknown, d: number) => (typeof v === 'number' && Number.isFinite(v) ? v : d);
  return {
    stage: Math.min(STAGES.length - 1, Math.max(0, Math.floor(num(r.stage, 0)))),
    lap: Math.max(0, Math.floor(num(r.lap, 0))),
    level: Math.min(MAX_LEVEL, Math.max(MIN_LEVEL, Math.floor(num(r.level, 2)))),
    lastWrong: typeof r.lastWrong === 'number' ? r.lastWrong : null,
    runLaps: Math.max(0, Math.floor(num(r.runLaps, 0))),
    resume: reviveSnapshot(r.resume),
  };
}

/** 저장된 값이 깨졌거나 옛 버전이어도 안전하게 읽는다 */
export function reviveSave(raw: unknown): Save {
  const base = newSave();
  if (!raw || typeof raw !== 'object') return base;
  const r = raw as Partial<Save>;
  const num = (v: unknown, d: number) => (typeof v === 'number' && Number.isFinite(v) ? v : d);
  const ids = new Set(ITEMS.map((i) => i.id));
  const owned = Array.isArray(r.owned) ? r.owned.filter((id) => ids.has(id)) : [];
  const save: Save = {
    ...base,
    coins: Math.max(0, Math.floor(num(r.coins, 0))),
    owned: [...new Set([...base.owned, ...owned])],
    setKey: typeof r.setKey === 'string' ? r.setKey : '',
    stage: Math.min(STAGES.length - 1, Math.max(0, Math.floor(num(r.stage, 0)))),
    lap: Math.max(0, Math.floor(num(r.lap, 0))),
    totalLaps: Math.max(0, Math.floor(num(r.totalLaps, 0))),
    level: Math.min(MAX_LEVEL, Math.max(MIN_LEVEL, Math.floor(num(r.level, 2)))),
    lastWrong: typeof r.lastWrong === 'number' ? r.lastWrong : null,
    crowns: Math.max(0, Math.floor(num(r.crowns, 0))),
    best: Math.max(0, num(r.best, 0)),
    stickers: Array.isArray(r.stickers) ? r.stickers.filter((s) => typeof s === 'string') : [],
    bossBest: Math.max(0, num(r.bossBest, 0)),
    bossClears: Math.max(0, Math.floor(num(r.bossClears, 0))),
    bossGrade: GRADES.includes(r.bossGrade as Grade) ? (r.bossGrade as Grade) : '',
    runLaps: Math.max(0, Math.floor(num(r.runLaps, 0))),
    wins: Array.isArray(r.wins) ? r.wins.map(reviveWin).filter((w): w is Win => !!w) : [],
    warnings: Math.max(0, Math.floor(num(r.warnings, 0))),
    resume: reviveSnapshot(r.resume),
    setId: typeof r.setId === 'string' ? r.setId : '',
    sets: {},
  };
  if (r.sets && typeof r.sets === 'object') {
    for (const [k, v] of Object.entries(r.sets as Record<string, unknown>)) {
      const p = reviveProgress(v);
      if (p) save.sets[k] = p;
    }
  }
  for (const kind of ['skin', 'stream', 'pop'] as const) {
    const id = r.equipped?.[kind];
    if (typeof id === 'string' && save.owned.includes(id) && id.startsWith(kind)) save.equipped[kind] = id;
  }
  return save;
}

export function setKeyOf(questions: string[]): string {
  let h = 5381;
  for (const ch of questions.join('\n')) h = ((h << 5) + h + ch.codePointAt(0)!) | 0;
  return `${questions.length}:${h >>> 0}`;
}

/**
 * 문제 묶음(회차)을 바꾼다: 지금 회차의 진행(단계·바퀴·난이도·이어하기)은 기억해 두고,
 * 새 회차는 전에 하던 데서 이어간다(처음이면 1단계부터). 코인·아이템·왕관은 그대로.
 * 바뀌었으면 true.
 */
export function applyQuestionSet(save: Save, questions: string[]): boolean {
  const key = setKeyOf(questions);
  if (save.setKey === key) return false;
  if (save.setKey) {
    save.sets[save.setKey] = { stage: save.stage, lap: save.lap, level: save.level, lastWrong: save.lastWrong, runLaps: save.runLaps, resume: save.resume };
  }
  const first = save.setKey === '';
  const next = save.sets[key];
  save.setKey = key;
  save.stage = next?.stage ?? 0;
  save.lap = next?.lap ?? 0;
  save.level = next?.level ?? 2;
  save.lastWrong = next?.lastWrong ?? null;
  save.runLaps = next?.runLaps ?? 0;
  save.resume = next?.resume ?? null;
  return !first;
}

export interface Difficulty {
  /** 화면의 풍선 수 [세로, 가로] */
  balloons: [number, number];
  /** 풍선이 떠다니는 빠르기 배율 */
  drift: number;
  /** 정답을 못 맞히면 이 시간 뒤 반짝임 힌트(ms). 0이면 자동 힌트 없음 */
  hintMs: number;
}

const LEVELS: Difficulty[] = [
  { balloons: [5, 6], drift: 0.6, hintMs: 8000 },
  { balloons: [6, 8], drift: 1, hintMs: 15000 },
  { balloons: [7, 9], drift: 1.3, hintMs: 22000 },
  { balloons: [7, 10], drift: 1.6, hintMs: 30000 },
  { balloons: [8, 10], drift: 2, hintMs: 0 },
];

export function difficulty(level: number, mode: Mode): Difficulty {
  const d = { ...LEVELS[Math.min(MAX_LEVEL, Math.max(MIN_LEVEL, level)) - 1] };
  if (mode === 'speed') d.drift *= 1.4;
  return d;
}

/** 빈칸 채우기에서 비울 글자 수 */
export function blankCount(targets: number, level: number): number {
  const ratio = 0.25 + level * 0.07;
  return Math.max(1, Math.min(targets, Math.round(targets * ratio)));
}

/** 번개 모드 제한 시간(초) */
export function timeLimit(targets: number, level: number): number {
  return 5 + targets * (4.2 - level * 0.4);
}

export function themeIndex(save: Save): number {
  return save.totalLaps % THEME_COUNT;
}

export interface LapOutcome {
  perfect: boolean;
  /** 다음 단계로 넘어갔는가 */
  advanced: boolean;
  /** 모든 단계를 끝냈는가(왕관 획득) */
  crowned: boolean;
  coins: { label: string; amount: number }[];
  total: number;
  levelChange: number;
}

/**
 * 한 바퀴(1번~마지막 문항)를 끝냈을 때.
 * wrongShots: 이번 바퀴에서 오답 풍선을 맞힌 횟수.
 */
export function finishLap(save: Save, wrongShots: number, score: number): LapOutcome {
  const stage = STAGES[save.stage];
  const perfect = wrongShots === 0;
  const coins: LapOutcome['coins'] = [{ label: '끝까지 해냈어요', amount: 10 }];
  // 반복할수록 커지는 끈기 보상
  if (save.lap > 0) coins.push({ label: `끈기 보상 (${save.lap + 1}바퀴째)`, amount: Math.min(save.lap, 10) * 5 });
  if (!perfect && save.lastWrong !== null && wrongShots < save.lastWrong) {
    coins.push({ label: `지난번보다 ${save.lastWrong - wrongShots}개 덜 틀렸어요`, amount: 10 });
  }
  if (perfect) coins.push({ label: '하나도 안 틀렸어요!', amount: 50 });

  const before = save.level;
  if (perfect) save.level = Math.min(MAX_LEVEL, save.level + 1);
  else if (wrongShots >= 8) save.level = Math.max(MIN_LEVEL, save.level - 1);

  const advanced = perfect || !stage.needPerfect;
  let crowned = false;
  save.totalLaps++;
  save.runLaps++;
  save.best = Math.max(save.best, score);
  if (advanced) {
    save.lap = 0;
    save.lastWrong = null;
    save.stage++;
    if (save.stage >= STAGES.length) {
      // 보스 단계는 finishBoss 로 끝내므로 여기 오지 않지만, 안전하게 처음으로
      save.stage = 0;
      save.crowns++;
      crowned = true;
      coins.push({ label: '모든 단계 완료 왕관', amount: 100 });
    }
  } else {
    save.lap++;
    save.lastWrong = wrongShots;
  }

  const total = coins.reduce((n, c) => n + c.amount, 0);
  save.coins += total;
  return { perfect, advanced, crowned, coins, total, levelChange: save.level - before };
}

export function buy(save: Save, id: string): boolean {
  const item = ITEMS.find((i) => i.id === id);
  if (!item || save.owned.includes(id) || save.coins < item.price) return false;
  save.coins -= item.price;
  save.owned.push(id);
  save.equipped[item.kind] = id;
  return true;
}

export function equip(save: Save, id: string): boolean {
  const item = ITEMS.find((i) => i.id === id);
  if (!item || !save.owned.includes(id)) return false;
  save.equipped[item.kind] = id;
  return true;
}

// ───────── 최종 시험(보스전) ─────────

/** 글자 하나를 쓸 수 있는 시간(초). 보스 체력이 줄수록 짧아진다 */
export function bossTime(level: number, hpRatio: number): number {
  const base = 30 - Math.min(MAX_LEVEL, Math.max(MIN_LEVEL, level)) * 2;
  const phase = bossPhase(hpRatio);
  return Math.max(8, Math.round(base * [1, 0.8, 0.65][phase]));
}

/** 0 평상 · 1 화남(체력 50% 이하) · 2 분노(25% 이하) */
export function bossPhase(hpRatio: number): 0 | 1 | 2 {
  if (hpRatio <= 0.25) return 2;
  if (hpRatio <= 0.5) return 1;
  return 0;
}

export function gradeOf(wrongShots: number): Grade {
  if (wrongShots === 0) return 'S';
  if (wrongShots <= 2) return 'A';
  if (wrongShots <= 5) return 'B';
  return 'C';
}

export function betterGrade(a: Grade | '', b: Grade | ''): Grade | '' {
  if (!a) return b;
  if (!b) return a;
  return GRADES.indexOf(a) <= GRADES.indexOf(b) ? a : b;
}

/** 우승까지 걸릴 수 있는 가장 적은 바퀴 수(사격 3단계 + 최종 시험) */
export const MIN_WIN_LAPS = STAGES.length;
const GRADE_POINTS: Record<Grade, number> = { S: 300, A: 200, B: 100, C: 0 };

/**
 * 우승 점수: 빨리(적은 바퀴로) 우승할수록 높다. 바퀴 하나 차이(500)가
 * 등급(최대 300)과 시험 점수(최대 99)를 합친 것보다 크고, 등급 한 칸(100)이 시험 점수보다 커서
 * 빠른 우승 > 등급 > 시험 점수 순으로 언제나 정해진다.
 */
export function winPoints(w: Pick<Win, 'laps' | 'grade' | 'score'>): number {
  const speed = Math.max(500, 5000 - 500 * Math.max(0, w.laps - MIN_WIN_LAPS));
  return speed + GRADE_POINTS[w.grade] + Math.min(99, Math.floor(w.score / 20));
}

export interface BossOutcome {
  grade: Grade;
  perfect: boolean;
  /** 이번 점수가 최고 기록인가 */
  newBest: boolean;
  /** 이번 우승 기록 */
  win: Win;
  coins: { label: string; amount: number }[];
  total: number;
  levelChange: number;
}

/**
 * 최종 시험을 끝냈을 때: 왕관을 받고 처음 단계로 돌아간다.
 * wrongShots: 틀리게 쓴(또는 시간을 넘긴) 횟수.
 */
export function finishBoss(save: Save, wrongShots: number, score: number, now: number = Date.now(), setTitle = ''): BossOutcome {
  const grade = gradeOf(wrongShots);
  const perfect = wrongShots === 0;
  const coins: BossOutcome['coins'] = [{ label: '글자 도둑 대왕을 물리쳤어요', amount: 100 }];
  if (perfect) coins.push({ label: '한 글자도 안 틀렸어요! (S)', amount: 100 });
  else if (grade === 'A') coins.push({ label: '거의 완벽해요 (A)', amount: 50 });
  else if (grade === 'B') coins.push({ label: '끝까지 버텼어요 (B)', amount: 20 });
  coins.push({ label: '모든 단계 완료 왕관', amount: 100 });

  const before = save.level;
  if (perfect) save.level = Math.min(MAX_LEVEL, save.level + 1);
  else if (wrongShots >= 8) save.level = Math.max(MIN_LEVEL, save.level - 1);

  const newBest = score > save.bossBest;
  save.bossBest = Math.max(save.bossBest, score);
  save.bossClears++;
  save.bossGrade = betterGrade(save.bossGrade, grade);
  save.best = Math.max(save.best, score);
  save.totalLaps++;
  save.crowns++;
  const win: Win = { nth: save.bossClears, laps: Math.max(MIN_WIN_LAPS, save.runLaps + 1), grade, score, at: now };
  if (setTitle) win.set = setTitle;
  save.wins.push(win);
  if (win.laps === MIN_WIN_LAPS) coins.push({ label: '⚡ 한 번에 우승!', amount: 150 });
  save.runLaps = 0;
  save.stage = 0;
  save.lap = 0;
  save.lastWrong = null;

  const total = coins.reduce((n, c) => n + c.amount, 0);
  save.coins += total;
  return { grade, perfect, newBest, win, coins, total, levelChange: save.level - before };
}

// ───────── 난사(아무 데나 쏘기) 경고 ─────────

export const RECKLESS_WINDOW_MS = 6000;
export const RECKLESS_SHOTS = 6;
export const RECKLESS_LOCK_MS = 3000;
export const RECKLESS_COIN_PENALTY = 5;

/**
 * 최근 빗나간·틀린 사격 시각을 모아 두고, 짧은 시간에 너무 많으면 true(경고).
 * 경고가 나면 목록을 비운다.
 */
export function recordBadShot(log: number[], now: number): boolean {
  log.push(now);
  while (log.length && now - log[0] > RECKLESS_WINDOW_MS) log.shift();
  if (log.length < RECKLESS_SHOTS) return false;
  log.length = 0;
  return true;
}

/** 경고를 받았을 때: 두 번째부터 코인을 조금 잃는다. 잃은 코인을 돌려준다 */
export function applyWarning(save: Save): number {
  save.warnings++;
  if (save.warnings < 2) return 0;
  const lost = Math.min(save.coins, RECKLESS_COIN_PENALTY);
  save.coins -= lost;
  return lost;
}
