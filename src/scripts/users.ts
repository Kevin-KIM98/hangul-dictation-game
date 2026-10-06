// 학생 계정(이름·비밀번호)과 기록 관리, 명예의 전당, 자랑 카드 — 기기의 저장소(localStorage)에 보관
import { newSave, reviveSave, reviveWin, winPoints, type Grade, type Save, type Win } from './campaign.ts';
import { sha256 } from './sha256.ts';

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export interface Account {
  /** 로그인 아이디(기기 안에서 유일, 대소문자 구분 없음) */
  id: string;
  /** 이름(선택). 비우면 아이디를 보여 준다 */
  name: string;
  /** 학교(선택) */
  school: string;
  salt: string;
  hash: string;
  created: number;
  updated: number;
  save: Save;
}

/** 남에게 보여 주는 기록(자랑 카드·명예의 전당) */
export interface PlayerRecord {
  id: string;
  name: string;
  school: string;
  crowns: number;
  best: number;
  bossBest: number;
  bossGrade: Grade | '';
  bossClears: number;
  totalLaps: number;
  stickers: number;
  updated: number;
  /** 우승 기록(최근 것부터 최대 WINS_KEPT개) */
  wins: Win[];
  /** 링크로 받은 친구의 기록 */
  friend?: boolean;
}

/** 우승자 명단의 한 줄 */
export interface WinnerEntry extends Win {
  id: string;
  name: string;
  school: string;
  points: number;
  /** 1부터. 점수가 같으면 공동 순위 */
  rank: number;
  tied: boolean;
  friend?: boolean;
}

export const WINS_KEPT = 12;

interface Store {
  v: 2;
  current: string | null;
  accounts: Record<string, Account>;
}

export const USERS_KEY = 'dictation.users.v1';
/** 저장이 깨졌을 때를 대비한 복사본(쓸 때마다 같이 쓴다) */
export const USERS_BACKUP_KEY = 'dictation.users.backup';
export const FRIENDS_KEY = 'dictation.friends.v1';
/** 계정이 생기기 전 버전의 저장(첫 계정이 이어받는다) */
export const LEGACY_SAVE_KEY = 'dictation.save.v2';
export const ID_MIN = 2;
export const ID_MAX = 12;
export const NAME_MAX = 10;
export const SCHOOL_MAX = 20;
export const PW_MIN = 2;
export const PW_MAX = 20;

export function normalizeName(name: string): string {
  return name.replace(/\s+/g, ' ').trim();
}

export function normalizeId(id: string): string {
  return id.replace(/\s+/g, '').trim();
}

/** 아이디 비교용(대소문자 구분 없음) */
export function idKey(id: string): string {
  return normalizeId(id).toLowerCase();
}

/** 아이디는 한글·영문·숫자·_ 2~12자, 띄어쓰기 없음 */
export function idError(id: string): string | null {
  const n = normalizeId(id);
  if (!n) return '아이디를 적어 주세요.';
  if ([...n].length < ID_MIN) return `아이디는 ${ID_MIN}글자 이상이에요.`;
  if ([...n].length > ID_MAX) return `아이디는 ${ID_MAX}자까지예요.`;
  if (!/^[가-힣ㄱ-ㅎㅏ-ㅣA-Za-z0-9_]+$/.test(n)) return '아이디는 한글·영어·숫자로 적어요(띄어쓰기 없이).';
  return null;
}

/** 이름(선택)은 한글·영문·숫자 10자까지 */
export function nameError(name: string): string | null {
  const n = normalizeName(name);
  if (!n) return null;
  if ([...n].length > NAME_MAX) return `이름은 ${NAME_MAX}자까지예요.`;
  if (!/^[가-힣ㄱ-ㅎㅏ-ㅣA-Za-z0-9 ]+$/.test(n)) return '이름은 한글·영어·숫자로 적어요.';
  return null;
}

export function schoolError(school: string): string | null {
  const n = normalizeName(school);
  if ([...n].length > SCHOOL_MAX) return `학교 이름은 ${SCHOOL_MAX}자까지예요.`;
  return null;
}

/** 화면에 보여 줄 이름: 이름이 있으면 이름, 없으면 아이디 */
export function displayName(a: { id: string; name: string }): string {
  return a.name || a.id;
}

/** 이름이 같은 친구와 구별되게: "민수 (@minsu01) · 한글초" */
export function fullName(a: { id: string; name: string; school?: string }): string {
  const base = a.name ? `${a.name} (@${a.id})` : `@${a.id}`;
  return a.school ? `${base} · ${a.school}` : base;
}

export function passwordError(pw: string): string | null {
  if (pw.length < PW_MIN) return `비밀번호는 ${PW_MIN}글자 이상이에요.`;
  if (pw.length > PW_MAX) return `비밀번호는 ${PW_MAX}글자까지예요.`;
  return null;
}

export function hashPassword(salt: string, password: string): string {
  return sha256(`${salt}:${password}`);
}

function randomSalt(rnd: () => number = Math.random): string {
  let s = '';
  for (let i = 0; i < 16; i++) s += Math.floor(rnd() * 36).toString(36);
  return s;
}

export function recordOf(who: { id: string; name: string; school: string }, save: Save, updated: number): PlayerRecord {
  return {
    id: who.id,
    name: who.name,
    school: who.school,
    crowns: save.crowns,
    best: save.best,
    bossBest: save.bossBest,
    bossGrade: save.bossGrade,
    bossClears: save.bossClears,
    totalLaps: save.totalLaps,
    stickers: save.stickers.length,
    updated,
    wins: save.wins.slice(-WINS_KEPT),
  };
}

/** 우승 기록을 우승 점수 순으로 줄 세우고 공동 순위를 매긴다 */
export function rankWinners(records: PlayerRecord[]): WinnerEntry[] {
  const all: WinnerEntry[] = [];
  for (const r of records) {
    for (const w of r.wins) all.push({ ...w, id: r.id, name: r.name, school: r.school, friend: r.friend, points: winPoints(w), rank: 0, tied: false });
  }
  all.sort((a, b) => b.points - a.points || a.at - b.at);
  for (let i = 0; i < all.length; i++) {
    all[i].rank = i > 0 && all[i - 1].points === all[i].points ? all[i - 1].rank : i + 1;
  }
  for (let i = 0; i < all.length; i++) {
    all[i].tied = all.some((o, j) => j !== i && o.rank === all[i].rank);
  }
  return all;
}

/** 명예 점수: 왕관이 가장 크고, 최종 시험 점수와 최고 점수를 더한다 */
export function fameOf(r: Pick<PlayerRecord, 'crowns' | 'bossBest' | 'best'>): number {
  return r.crowns * 500 + r.bossBest + r.best;
}

/** 명예 점수 순(같으면 최근에 논 사람 먼저) */
export function rankRecords<T extends PlayerRecord>(records: T[]): T[] {
  return records.slice().sort((a, b) => fameOf(b) - fameOf(a) || b.updated - a.updated);
}

export class Users {
  private store: Store;
  private storage: StorageLike;
  private now: () => number;
  private rnd: () => number;

  constructor(storage: StorageLike, now: () => number = Date.now, rnd: () => number = Math.random) {
    this.storage = storage;
    this.now = now;
    this.rnd = rnd;
    this.store = this.load();
  }

  /** 마지막 저장이 실패했는가(사생활 보호 모드 등). 화면에서 한 번 알려 준다 */
  writeFailed = false;

  /**
   * 저장된 계정 하나를 안전하게 읽는다. 규칙이 바뀌어도(아이디 길이 등) 계정을 버리지 않는다:
   * 업데이트 때문에 학생이 사라지면 안 된다.
   */
  private static reviveAccount(key: string, a: Partial<Account> | null | undefined): Account | null {
    if (!a || typeof a !== 'object' || typeof a.hash !== 'string' || typeof a.salt !== 'string') return null;
    // v1: 이름이 곧 아이디였다. 이름을 아이디로 옮기고 이름도 그대로 둔다
    const legacy = typeof a.id !== 'string';
    const id = normalizeId(legacy ? String(a.name ?? key) : (a.id as string)) || normalizeId(key);
    if (!id) return null;
    return {
      id,
      name: typeof a.name === 'string' ? normalizeName(a.name) : '',
      school: typeof a.school === 'string' ? normalizeName(a.school) : '',
      salt: a.salt,
      hash: a.hash,
      created: typeof a.created === 'number' ? a.created : 0,
      updated: typeof a.updated === 'number' ? a.updated : 0,
      save: reviveSave(a.save),
    };
  }

  private static parseStore(text: string | null): Store | null {
    try {
      const raw = JSON.parse(text ?? 'null');
      if (!raw || typeof raw !== 'object' || typeof raw.accounts !== 'object' || !raw.accounts) return null;
      const accounts: Record<string, Account> = {};
      for (const [key, a] of Object.entries(raw.accounts as Record<string, Partial<Account>>)) {
        const acc = Users.reviveAccount(key, a);
        if (acc) accounts[idKey(acc.id)] = acc;
      }
      const cur = typeof raw.current === 'string' ? idKey(raw.current) : null;
      return { v: 2, current: cur && accounts[cur] ? cur : null, accounts };
    } catch {
      return null;
    }
  }

  private load(): Store {
    const empty: Store = { v: 2, current: null, accounts: {} };
    let main: Store | null = null;
    let backup: Store | null = null;
    try {
      main = Users.parseStore(this.storage.getItem(USERS_KEY));
      backup = Users.parseStore(this.storage.getItem(USERS_BACKUP_KEY));
    } catch {
      /* 저장소를 못 읽으면 빈 상태 */
    }
    if (!main && !backup) return empty;
    // 둘 다 있으면 합친다: 어느 쪽에만 있는 계정도 잃지 않는다
    const store = main ?? backup!;
    if (main && backup) {
      for (const [k, a] of Object.entries(backup.accounts)) if (!store.accounts[k]) store.accounts[k] = a;
    }
    return store;
  }

  /**
   * 저장. 지금 저장소에 있는데 메모리에 없는 계정은 그대로 남긴다(읽기 실패 뒤 새 가입이
   * 기존 학생을 덮어쓰지 않도록). 복사본도 같이 쓴다.
   */
  private write(): void {
    try {
      const onDisk = Users.parseStore(this.storage.getItem(USERS_KEY));
      if (onDisk) for (const [k, a] of Object.entries(onDisk.accounts)) if (!this.store.accounts[k]) this.store.accounts[k] = a;
      const text = JSON.stringify(this.store);
      this.storage.setItem(USERS_KEY, text);
      this.writeFailed = false;
      try {
        this.storage.setItem(USERS_BACKUP_KEY, text);
      } catch {
        /* 복사본은 못 써도 된다 */
      }
    } catch {
      this.writeFailed = true; // 저장소를 못 쓰면 이번 실행만
    }
  }

  get count(): number {
    return Object.keys(this.store.accounts).length;
  }

  /** 이 기기에 등록된 모든 학생(최근에 논 순서) */
  list(): Account[] {
    return Object.values(this.store.accounts).sort((a, b) => b.updated - a.updated);
  }

  has(id: string): boolean {
    return idKey(id) in this.store.accounts;
  }

  /** 쓰고 싶은 아이디가 이미 있으면 뒤에 숫자를 붙여 비어 있는 아이디를 찾아 준다 */
  suggestId(wanted: string): string {
    const base = normalizeId(wanted).slice(0, ID_MAX - 2) || '친구';
    if (!this.has(base) && !idError(base)) return base;
    for (let n = 2; n < 1000; n++) {
      const cand = `${base}${n}`;
      if (!this.has(cand)) return cand;
    }
    return `${base}${Date.now() % 10000}`;
  }

  current(): Account | null {
    return this.store.current ? (this.store.accounts[this.store.current] ?? null) : null;
  }

  /** 새 학생 등록(아이디는 유일, 이름·학교는 선택). 계정이 하나도 없었으면 이전 버전의 진행을 이어받는다 */
  register(id: string, password: string, profile: { name?: string; school?: string } = {}): Account | { error: string } {
    const err = idError(id) ?? passwordError(password) ?? nameError(profile.name ?? '') ?? schoolError(profile.school ?? '');
    if (err) return { error: err };
    const clean = normalizeId(id);
    const key = idKey(clean);
    if (this.store.accounts[key]) return { error: `'${clean}'은(는) 이미 쓰는 아이디예요. 다른 아이디를 골라요.` };
    let save = newSave();
    if (this.count === 0) {
      try {
        const legacy = JSON.parse(this.storage.getItem(LEGACY_SAVE_KEY) ?? 'null');
        if (legacy) save = reviveSave(legacy);
      } catch {
        /* 없으면 새로 */
      }
    }
    const salt = randomSalt(this.rnd);
    const t = this.now();
    const account: Account = {
      id: clean,
      name: normalizeName(profile.name ?? ''),
      school: normalizeName(profile.school ?? ''),
      salt,
      hash: hashPassword(salt, password),
      created: t,
      updated: t,
      save,
    };
    this.store.accounts[key] = account;
    this.store.current = key;
    this.write();
    return account;
  }

  /** 아이디·비밀번호가 맞으면 그 학생으로 들어간다 */
  login(id: string, password: string): Account | { error: string } {
    const key = idKey(id);
    const account = this.store.accounts[key];
    if (!account) return { error: '없는 아이디예요. 처음이면 [새로 만들기]를 눌러요.' };
    if (hashPassword(account.salt, password) !== account.hash) return { error: '비밀번호가 달라요.' };
    this.store.current = key;
    account.updated = this.now();
    this.write();
    return account;
  }

  logout(): void {
    this.store.current = null;
    this.write();
  }

  /** 이름·학교(선택) 바꾸기 */
  updateProfile(profile: { name: string; school: string }): string | null {
    const a = this.current();
    if (!a) return '먼저 들어와야 해요.';
    const err = nameError(profile.name) ?? schoolError(profile.school);
    if (err) return err;
    a.name = normalizeName(profile.name);
    a.school = normalizeName(profile.school);
    a.updated = this.now();
    this.write();
    return null;
  }

  /** 지금 학생의 진행을 저장 */
  persist(): void {
    const a = this.current();
    if (!a) return;
    a.updated = this.now();
    this.write();
  }

  /** 명예의 전당: 이 기기의 학생들 + 링크로 받은 친구들 */
  records(): PlayerRecord[] {
    const mine = this.list().map((a) => recordOf(a, a.save, a.updated));
    const ids = new Set(mine.map((r) => idKey(r.id)));
    const friends = loadFriends(this.storage).filter((f) => !ids.has(idKey(f.id)));
    return rankRecords([...mine, ...friends]);
  }

  /** 우승자 명단(모든 학생·친구의 모든 우승) */
  winners(): WinnerEntry[] {
    return rankWinners(this.records());
  }
}

// ───────── 자랑 카드(링크로 친구에게) ─────────

function toBase64Url(text: string): string {
  const bytes = new TextEncoder().encode(text);
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function fromBase64Url(text: string): string {
  const bin = atob(text.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - (text.length % 4)) % 4));
  const bytes = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
  return new TextDecoder().decode(bytes);
}

/** 기록을 링크에 넣을 짧은 글자로 */
export function encodeBrag(r: PlayerRecord): string {
  return encodeRecords([r]);
}

export function decodeBrag(text: string): PlayerRecord | null {
  return decodeRecords(text)?.[0] ?? null;
}

type Packed = [string, number, number, number, string, number, number, number, number, [number, number, string, number, number, string?][], string, string];

function pack(r: PlayerRecord): Packed {
  return [
    r.name, r.crowns, r.best, r.bossBest, r.bossGrade, r.bossClears, r.totalLaps, r.stickers, r.updated,
    r.wins.slice(-WINS_KEPT).map((w) => (w.set ? [w.nth, w.laps, w.grade, w.score, w.at, w.set] : [w.nth, w.laps, w.grade, w.score, w.at])),
    r.id, r.school,
  ];
}

function unpack(raw: unknown): PlayerRecord | null {
  if (!Array.isArray(raw) || raw.length < 9) return null;
  const [name, crowns, best, bossBest, bossGrade, bossClears, totalLaps, stickers, updated, wins, id, school] = raw as Packed;
  // 예전 링크에는 아이디가 없었다: 이름을 아이디로 쓴다
  const cleanId = normalizeId(typeof id === 'string' ? id : String(name ?? ''));
  if (idError(cleanId)) return null;
  if (typeof name !== 'string' || nameError(name)) return null;
  const num = (v: unknown) => (typeof v === 'number' && Number.isFinite(v) && v >= 0 ? v : 0);
  return {
    id: cleanId,
    name: normalizeName(name),
    school: typeof school === 'string' && !schoolError(school) ? normalizeName(school) : '',
    crowns: num(crowns),
    best: num(best),
    bossBest: num(bossBest),
    bossGrade: ['S', 'A', 'B', 'C'].includes(bossGrade) ? (bossGrade as Grade) : '',
    bossClears: num(bossClears),
    totalLaps: num(totalLaps),
    stickers: num(stickers),
    updated: num(updated),
    wins: Array.isArray(wins)
      ? wins
          .map((w) => (Array.isArray(w) ? reviveWin({ nth: w[0], laps: w[1], grade: w[2], score: w[3], at: w[4], set: w[5] }) : null))
          .filter((w): w is Win => !!w)
      : [],
    friend: true,
  };
}

/** 여러 학생의 기록(명예의 전당 전체)을 링크용 글자로. 변조를 막는 짧은 검사값을 붙인다 */
export function encodeRecords(records: PlayerRecord[]): string {
  const body = JSON.stringify(records.map(pack));
  return toBase64Url(`${sha256(body).slice(0, 6)}${body}`);
}

export function decodeRecords(text: string): PlayerRecord[] | null {
  try {
    const raw = fromBase64Url(text);
    const check = raw.slice(0, 6);
    const body = raw.slice(6);
    if (sha256(body).slice(0, 6) !== check) return null;
    const list = JSON.parse(body);
    if (!Array.isArray(list)) return null;
    const out = list.map(unpack).filter((r): r is PlayerRecord => !!r);
    return out.length ? out : null;
  } catch {
    return null;
  }
}

export function loadFriends(storage: StorageLike): PlayerRecord[] {
  try {
    const raw = JSON.parse(storage.getItem(FRIENDS_KEY) ?? 'null');
    if (!Array.isArray(raw)) return [];
    return raw
      .filter((r) => r && (typeof r.id === 'string' || typeof r.name === 'string'))
      .map(
        (r) =>
          ({
            ...r,
            id: normalizeId(typeof r.id === 'string' ? r.id : r.name),
            name: typeof r.name === 'string' ? r.name : '',
            school: typeof r.school === 'string' ? r.school : '',
            wins: Array.isArray(r.wins) ? r.wins.map(reviveWin).filter((w: Win | null): w is Win => !!w) : [],
            friend: true,
          }) as PlayerRecord,
      )
      .filter((r) => !idError(r.id));
  } catch {
    return [];
  }
}

/** 친구의 기록을 저장(같은 아이디면 더 새 것만) */
export function addFriend(storage: StorageLike, record: PlayerRecord): boolean {
  const list = loadFriends(storage);
  const i = list.findIndex((f) => idKey(f.id) === idKey(record.id));
  if (i >= 0 && list[i].updated >= record.updated) return false;
  if (i >= 0) list[i] = { ...record, friend: true };
  else list.push({ ...record, friend: true });
  try {
    storage.setItem(FRIENDS_KEY, JSON.stringify(list.slice(-50)));
  } catch {
    /* noop */
  }
  return true;
}

/** 가장 잘한 우승 기록 */
export function bestWin(wins: Win[]): Win | null {
  let best: Win | null = null;
  for (const w of wins) if (!best || winPoints(w) > winPoints(best)) best = w;
  return best;
}

/** 자랑 글(메신저에 붙여 넣기용) */
export function bragText(r: PlayerRecord, url: string): string {
  const parts = [`🏆 ${fullName(r)}의 받아쓰기 풍선 사격 기록!`];
  parts.push(`👑 왕관 ${r.crowns} · ⭐ 최고 ${r.best}점`);
  const win = bestWin(r.wins);
  if (win) parts.push(`🏅 ${win.nth}회차 우승 · ${win.laps}바퀴 만에 ${win.grade}등급 · 우승 점수 ${winPoints(win)}점`);
  else if (r.bossClears) parts.push(`🐉 최종 시험 ${r.bossGrade}등급 · ${r.bossBest}점`);
  parts.push(`명예 점수 ${fameOf(r)}점 — 나도 도전하기 👉 ${url}`);
  return parts.join('\n');
}
