// 문항 진행·채점·점수 (순수 로직, 화면과 무관)
import { decompose, isHangul } from './hangul.ts';

export type CellKind = 'target' | 'space' | 'auto';
export interface Cell {
  ch: string;
  kind: CellKind;
  filled: boolean;
  /** 빈칸 채우기에서 미리 보여 주는 글자 */
  given?: boolean;
}

export const MAX_HEARTS = 3;
const TARGET_RE = /[가-힣ㄱ-ㅎㅏ-ㅣA-Za-z0-9]/;

export class Round {
  text: string;
  cells: Cell[];
  hearts = MAX_HEARTS;
  misses = 0;
  wrong: string[] = [];

  constructor(text: string) {
    this.text = text.trim().replace(/\s+/g, ' ');
    this.cells = [...this.text].map((ch) => {
      if (ch === ' ') return { ch, kind: 'space', filled: true };
      if (TARGET_RE.test(ch)) return { ch, kind: 'target', filled: false };
      return { ch, kind: 'auto', filled: true }; // 문장부호는 자동 입력
    });
  }

  /**
   * 빈칸 채우기: count개만 비워 두고 나머지 글자는 미리 채운다.
   * 받침이 있어 틀리기 쉬운 글자를 먼저 비운다.
   */
  blankOut(count: number, rnd: () => number = Math.random): void {
    const targets = this.cells.filter((c) => c.kind === 'target');
    const ranked = targets
      .map((c) => ({ c, key: (isHangul(c.ch) && decompose(c.ch)[2] !== 0 ? 1 : 0) + rnd() }))
      .sort((a, b) => b.key - a.key);
    const blank = new Set(ranked.slice(0, Math.max(1, count)).map((r) => r.c));
    for (const c of targets) {
      if (blank.has(c)) continue;
      c.filled = true;
      c.given = true;
    }
  }

  get nextIndex(): number {
    return this.cells.findIndex((c) => !c.filled);
  }
  get nextChar(): string | null {
    const i = this.nextIndex;
    return i < 0 ? null : this.cells[i].ch;
  }
  get done(): boolean {
    return this.nextIndex < 0;
  }
  get hintMode(): boolean {
    return this.hearts <= 0;
  }
  get targetCount(): number {
    return this.cells.filter((c) => c.kind === 'target').length;
  }

  /** 앞으로 쏴야 할 글자 k개 */
  upcoming(k: number): string[] {
    return this.cells.filter((c) => !c.filled).slice(0, k).map((c) => c.ch);
  }

  get stars(): number {
    if (this.hintMode) return 1;
    if (this.misses === 0) return 3;
    return this.misses <= 2 ? 2 : 1;
  }

  /** 글자를 못 쓴 채 시간이 지났을 때처럼, 글자 없이 하트만 잃는다 */
  penalize(): void {
    this.misses++;
    this.hearts = Math.max(0, this.hearts - 1);
  }

  /** 글자 풍선을 맞혔을 때. ok면 index번 빈칸이 채워진다 */
  hit(ch: string): { ok: boolean; index: number } {
    const i = this.nextIndex;
    if (i < 0) return { ok: false, index: -1 };
    if (this.cells[i].ch === ch) {
      this.cells[i].filled = true;
      return { ok: true, index: i };
    }
    this.misses++;
    this.hearts = Math.max(0, this.hearts - 1);
    if (!this.wrong.includes(ch)) this.wrong.push(ch);
    return { ok: false, index: i };
  }
}

export interface QuestionResult {
  text: string;
  stars: number;
  misses: number;
  wrong: string[];
}

export class Game {
  questions: string[];
  index = -1;
  score = 0;
  combo = 0;
  round!: Round;
  results: QuestionResult[] = [];

  /** 문항의 글자 수를 받아 비울 글자 수를 돌려준다(0이면 전부 쏘기) */
  private blanks: (targets: number) => number;

  constructor(questions: string[], blanks: (targets: number) => number = () => 0) {
    this.questions = questions;
    this.blanks = blanks;
  }

  /** 이번 바퀴에서 오답 풍선을 맞힌 횟수 */
  get wrongShots(): number {
    return this.results.reduce((n, r) => n + r.misses, 0);
  }

  get finished(): boolean {
    return this.index >= this.questions.length;
  }
  get totalStars(): number {
    return this.results.reduce((s, r) => s + r.stars, 0);
  }

  /** 다음 문항으로. 더 없으면 false */
  nextQuestion(): boolean {
    this.index++;
    if (this.index >= this.questions.length) return false;
    this.round = new Round(this.questions[this.index]);
    const blanks = this.blanks(this.round.targetCount);
    if (blanks > 0) this.round.blankOut(blanks);
    return true;
  }

  /** 시간 초과 등: 하트만 잃고 콤보가 끊긴다 */
  penalize(): void {
    this.round.penalize();
    this.combo = 0;
  }

  hit(ch: string): { ok: boolean; index: number; points: number; done: boolean } {
    const r = this.round.hit(ch);
    let points = 0;
    if (r.ok) {
      points = 10 + Math.min(10, this.combo * 2);
      this.combo++;
      this.score += points;
    } else {
      this.combo = 0;
    }
    const done = this.round.done;
    if (r.ok && done) {
      const { text, stars, misses, wrong } = this.round;
      this.results.push({ text, stars, misses, wrong: wrong.slice() });
    }
    return { ...r, points, done };
  }
}
