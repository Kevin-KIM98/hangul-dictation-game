// 반복 학습 진행(바퀴·단계·난이도), 코인, 상점 — 화면과 무관한 순수 로직

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
}

export const ITEMS: Item[] = [
  { id: 'skin.basic', kind: 'skin', name: '기본 물총', emoji: '🔫', price: 0 },
  { id: 'skin.ocean', kind: 'skin', name: '바다 물총', emoji: '🌊', price: 40 },
  { id: 'skin.berry', kind: 'skin', name: '딸기 물총', emoji: '🍓', price: 60 },
  { id: 'skin.galaxy', kind: 'skin', name: '우주 물총', emoji: '🪐', price: 120 },
  { id: 'skin.gold', kind: 'skin', name: '황금 물총', emoji: '🏅', price: 200 },
  { id: 'skin.rainbow', kind: 'skin', name: '무지개 물총', emoji: '🌈', price: 300 },
  { id: 'stream.water', kind: 'stream', name: '맑은 물', emoji: '💧', price: 0 },
  { id: 'stream.lemon', kind: 'stream', name: '레몬 주스', emoji: '🍋', price: 30 },
  { id: 'stream.berry', kind: 'stream', name: '딸기 우유', emoji: '🥤', price: 30 },
  { id: 'stream.rainbow', kind: 'stream', name: '무지개 물줄기', emoji: '🌈', price: 120 },
  { id: 'pop.drop', kind: 'pop', name: '물방울', emoji: '💦', price: 0 },
  { id: 'pop.star', kind: 'pop', name: '별 팡팡', emoji: '⭐', price: 50 },
  { id: 'pop.heart', kind: 'pop', name: '하트 팡팡', emoji: '💖', price: 50 },
  { id: 'pop.confetti', kind: 'pop', name: '색종이', emoji: '🎊', price: 100 },
  { id: 'pop.firework', kind: 'pop', name: '왕폭죽', emoji: '🎆', price: 200 },
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
}

export type Grade = 'S' | 'A' | 'B' | 'C';
export const GRADES: Grade[] = ['S', 'A', 'B', 'C'];

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
  };
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

/** 문제 묶음이 바뀌었으면 진행(단계·바퀴)을 처음으로. 코인·아이템은 그대로 */
export function applyQuestionSet(save: Save, questions: string[]): boolean {
  const key = setKeyOf(questions);
  if (save.setKey === key) return false;
  const first = save.setKey === '';
  save.setKey = key;
  save.stage = 0;
  save.lap = 0;
  save.lastWrong = null;
  save.level = 2;
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

export interface BossOutcome {
  grade: Grade;
  perfect: boolean;
  /** 이번 점수가 최고 기록인가 */
  newBest: boolean;
  coins: { label: string; amount: number }[];
  total: number;
  levelChange: number;
}

/**
 * 최종 시험을 끝냈을 때: 왕관을 받고 처음 단계로 돌아간다.
 * wrongShots: 틀리게 쓴(또는 시간을 넘긴) 횟수.
 */
export function finishBoss(save: Save, wrongShots: number, score: number): BossOutcome {
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
  save.stage = 0;
  save.lap = 0;
  save.lastWrong = null;

  const total = coins.reduce((n, c) => n + c.amount, 0);
  save.coins += total;
  return { grade, perfect, newBest, coins, total, levelChange: save.level - before };
}
