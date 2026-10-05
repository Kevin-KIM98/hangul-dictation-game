// 학생 계정(이름·비밀번호)과 기록 관리, 명예의 전당, 자랑 카드 — 기기의 저장소(localStorage)에 보관
import { newSave, reviveSave, type Grade, type Save } from './campaign.ts';
import { sha256 } from './sha256.ts';

export interface StorageLike {
  getItem(key: string): string | null;
  setItem(key: string, value: string): void;
  removeItem(key: string): void;
}

export interface Account {
  name: string;
  salt: string;
  hash: string;
  created: number;
  updated: number;
  save: Save;
}

/** 남에게 보여 주는 기록(자랑 카드·명예의 전당) */
export interface PlayerRecord {
  name: string;
  crowns: number;
  best: number;
  bossBest: number;
  bossGrade: Grade | '';
  bossClears: number;
  totalLaps: number;
  stickers: number;
  updated: number;
  /** 링크로 받은 친구의 기록 */
  friend?: boolean;
}

interface Store {
  v: 1;
  current: string | null;
  accounts: Record<string, Account>;
}

export const USERS_KEY = 'dictation.users.v1';
export const FRIENDS_KEY = 'dictation.friends.v1';
/** 계정이 생기기 전 버전의 저장(첫 계정이 이어받는다) */
export const LEGACY_SAVE_KEY = 'dictation.save.v2';
export const NAME_MAX = 10;
export const PW_MIN = 2;
export const PW_MAX = 20;

export function normalizeName(name: string): string {
  return name.replace(/\s+/g, ' ').trim();
}

export function nameKey(name: string): string {
  return normalizeName(name).toLowerCase();
}

/** 이름은 한글·영문·숫자 1~10자 */
export function nameError(name: string): string | null {
  const n = normalizeName(name);
  if (!n) return '이름을 적어 주세요.';
  if ([...n].length > NAME_MAX) return `이름은 ${NAME_MAX}자까지예요.`;
  if (!/^[가-힣ㄱ-ㅎㅏ-ㅣA-Za-z0-9 ]+$/.test(n)) return '이름은 한글·영어·숫자로 적어요.';
  return null;
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

export function recordOf(name: string, save: Save, updated: number): PlayerRecord {
  return {
    name,
    crowns: save.crowns,
    best: save.best,
    bossBest: save.bossBest,
    bossGrade: save.bossGrade,
    bossClears: save.bossClears,
    totalLaps: save.totalLaps,
    stickers: save.stickers.length,
    updated,
  };
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

  private load(): Store {
    const empty: Store = { v: 1, current: null, accounts: {} };
    try {
      const raw = JSON.parse(this.storage.getItem(USERS_KEY) ?? 'null');
      if (!raw || typeof raw !== 'object' || typeof raw.accounts !== 'object' || !raw.accounts) return empty;
      const accounts: Record<string, Account> = {};
      for (const [key, a] of Object.entries(raw.accounts as Record<string, Partial<Account>>)) {
        if (!a || typeof a.name !== 'string' || typeof a.hash !== 'string' || typeof a.salt !== 'string') continue;
        accounts[key] = {
          name: a.name,
          salt: a.salt,
          hash: a.hash,
          created: typeof a.created === 'number' ? a.created : 0,
          updated: typeof a.updated === 'number' ? a.updated : 0,
          save: reviveSave(a.save),
        };
      }
      const current = typeof raw.current === 'string' && accounts[raw.current] ? raw.current : null;
      return { v: 1, current, accounts };
    } catch {
      return empty;
    }
  }

  private write(): void {
    try {
      this.storage.setItem(USERS_KEY, JSON.stringify(this.store));
    } catch {
      /* 저장소를 못 쓰면 이번 실행만 */
    }
  }

  get count(): number {
    return Object.keys(this.store.accounts).length;
  }

  /** 이 기기에 등록된 모든 학생(최근에 논 순서) */
  list(): Account[] {
    return Object.values(this.store.accounts).sort((a, b) => b.updated - a.updated);
  }

  has(name: string): boolean {
    return nameKey(name) in this.store.accounts;
  }

  current(): Account | null {
    return this.store.current ? (this.store.accounts[this.store.current] ?? null) : null;
  }

  /** 새 학생 등록. 계정이 하나도 없었으면 이전 버전의 진행을 이어받는다 */
  register(name: string, password: string): Account | { error: string } {
    const err = nameError(name) ?? passwordError(password);
    if (err) return { error: err };
    const clean = normalizeName(name);
    const key = nameKey(clean);
    if (this.store.accounts[key]) return { error: '이미 있는 이름이에요. 비밀번호를 넣고 들어가요.' };
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
    const account: Account = { name: clean, salt, hash: hashPassword(salt, password), created: t, updated: t, save };
    this.store.accounts[key] = account;
    this.store.current = key;
    this.write();
    return account;
  }

  /** 이름·비밀번호가 맞으면 그 학생으로 들어간다 */
  login(name: string, password: string): Account | { error: string } {
    const key = nameKey(name);
    const account = this.store.accounts[key];
    if (!account) return { error: '없는 이름이에요.' };
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

  /** 지금 학생의 진행을 저장 */
  persist(): void {
    const a = this.current();
    if (!a) return;
    a.updated = this.now();
    this.write();
  }

  /** 명예의 전당: 이 기기의 학생들 + 링크로 받은 친구들 */
  records(): PlayerRecord[] {
    const mine = this.list().map((a) => recordOf(a.name, a.save, a.updated));
    const names = new Set(mine.map((r) => nameKey(r.name)));
    const friends = loadFriends(this.storage).filter((f) => !names.has(nameKey(f.name)));
    return rankRecords([...mine, ...friends]);
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
  const body = [r.name, r.crowns, r.best, r.bossBest, r.bossGrade, r.bossClears, r.totalLaps, r.stickers, r.updated].join('|');
  return toBase64Url(`${body}|${sha256(body).slice(0, 6)}`);
}

export function decodeBrag(text: string): PlayerRecord | null {
  try {
    const parts = fromBase64Url(text).split('|');
    if (parts.length !== 10) return null;
    const check = parts.pop()!;
    if (sha256(parts.join('|')).slice(0, 6) !== check) return null;
    const [name, crowns, best, bossBest, bossGrade, bossClears, totalLaps, stickers, updated] = parts;
    if (nameError(name)) return null;
    const num = (s: string) => {
      const n = Number(s);
      return Number.isFinite(n) && n >= 0 ? n : 0;
    };
    return {
      name: normalizeName(name),
      crowns: num(crowns),
      best: num(best),
      bossBest: num(bossBest),
      bossGrade: ['S', 'A', 'B', 'C'].includes(bossGrade) ? (bossGrade as Grade) : '',
      bossClears: num(bossClears),
      totalLaps: num(totalLaps),
      stickers: num(stickers),
      updated: num(updated),
      friend: true,
    };
  } catch {
    return null;
  }
}

export function loadFriends(storage: StorageLike): PlayerRecord[] {
  try {
    const raw = JSON.parse(storage.getItem(FRIENDS_KEY) ?? 'null');
    if (!Array.isArray(raw)) return [];
    return raw.filter((r) => r && typeof r.name === 'string').map((r) => ({ ...r, friend: true }) as PlayerRecord);
  } catch {
    return [];
  }
}

/** 친구의 기록을 저장(같은 이름이면 더 새 것만) */
export function addFriend(storage: StorageLike, record: PlayerRecord): boolean {
  const list = loadFriends(storage);
  const i = list.findIndex((f) => nameKey(f.name) === nameKey(record.name));
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

/** 자랑 글(메신저에 붙여 넣기용) */
export function bragText(r: PlayerRecord, url: string): string {
  const parts = [`🏆 ${r.name}의 받아쓰기 풍선 사격 기록!`];
  parts.push(`👑 왕관 ${r.crowns} · ⭐ 최고 ${r.best}점`);
  if (r.bossClears) parts.push(`🐉 최종 시험 ${r.bossGrade}등급 · ${r.bossBest}점`);
  parts.push(`명예 점수 ${fameOf(r)}점 — 나도 도전하기 👉 ${url}`);
  return parts.join('\n');
}
