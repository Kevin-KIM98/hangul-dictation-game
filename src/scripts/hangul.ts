// 한글 음절 분해와 "헷갈리는 글자" 생성 (순수 로직)

const BASE = 0xac00;
const LAST = 0xd7a3;

export function isHangul(ch: string): boolean {
  const c = ch.charCodeAt(0);
  return c >= BASE && c <= LAST;
}

/** [초성, 중성, 종성] 인덱스 */
export function decompose(ch: string): [number, number, number] {
  const c = ch.charCodeAt(0) - BASE;
  return [Math.floor(c / 588), Math.floor((c % 588) / 28), c % 28];
}

export function compose(cho: number, jung: number, jong: number): string {
  return String.fromCharCode(BASE + cho * 588 + jung * 28 + jong);
}

// 소리가 같거나 비슷해 받아쓰기에서 자주 틀리는 묶음
const JUNG_STRONG = [[1, 5], [3, 7], [10, 11, 15], [19, 20], [19, 5]]; // ㅐㅔ / ㅒㅖ / ㅙㅚㅞ / ㅢㅣ / ㅢㅔ
const JUNG_WEAK = [[4, 8], [13, 18], [0, 2], [4, 6], [8, 12], [13, 17]];
const JONG_STRONG = [
  [1, 2, 24], // ㄱ ㄲ ㅋ
  [4, 6], // ㄴ ㄶ
  [7, 19, 20, 22, 23, 25, 27], // ㄷ ㅅ ㅆ ㅈ ㅊ ㅌ ㅎ
  [8, 15, 9], // ㄹ ㅀ ㄺ
  [16, 10], // ㅁ ㄻ
  [17, 26, 18], // ㅂ ㅍ ㅄ
];
const JONG_WEAK = [[4, 21], [4, 16], [1, 9]];
const CHO_WEAK = [[0, 1, 15], [3, 4, 16], [7, 8, 17], [9, 10], [12, 13, 14]];

function others(groups: number[][], v: number): number[] {
  const out: number[] = [];
  for (const g of groups) if (g.includes(v)) for (const x of g) if (x !== v) out.push(x);
  return out;
}

/** 정답 음절과 헷갈리는 음절 목록. strong = 소리가 거의 같은 것 */
export function similar(ch: string): { strong: string[]; weak: string[] } {
  if (!isHangul(ch)) return { strong: [], weak: [] };
  const [cho, jung, jong] = decompose(ch);
  const strong = new Set<string>();
  const weak = new Set<string>();
  for (const j of others(JUNG_STRONG, jung)) strong.add(compose(cho, j, jong));
  for (const j of others(JONG_STRONG, jong)) strong.add(compose(cho, jung, j));
  for (const j of others(JUNG_WEAK, jung)) weak.add(compose(cho, j, jong));
  for (const j of others(JONG_WEAK, jong)) weak.add(compose(cho, jung, j));
  for (const c of others(CHO_WEAK, cho)) weak.add(compose(c, jung, jong));
  if (jong === 0) for (const j of [4, 21, 8]) weak.add(compose(cho, jung, j));
  else weak.add(compose(cho, jung, 0));
  strong.delete(ch);
  weak.delete(ch);
  for (const s of strong) weak.delete(s);
  return { strong: [...strong], weak: [...weak] };
}

export function shuffle<T>(arr: T[], rnd: () => number = Math.random): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/**
 * targets(곧 쏴야 할 글자들)에 대한 오답 글자 n개.
 * 헷갈리는 음절을 먼저 쓰고, 모자라면 pool(문장의 다른 글자)로 채운다.
 */
export function distractorsFor(
  targets: string[],
  exclude: Iterable<string>,
  n: number,
  pool: string[] = [],
  rnd: () => number = Math.random,
): string[] {
  const banned = new Set(exclude);
  const out: string[] = [];
  const take = (list: string[]) => {
    for (const c of shuffle(list, rnd)) {
      if (out.length >= n) return;
      if (banned.has(c)) continue;
      banned.add(c);
      out.push(c);
    }
  };
  const sims = targets.map(similar);
  take(sims.flatMap((s) => s.strong));
  take(sims.flatMap((s) => s.weak));
  take(pool);
  return out;
}

export type JamoPart = 'cho' | 'jung' | 'jong';
export const JAMO_NAME: Record<JamoPart, string> = { cho: '첫 자음', jung: '모음', jong: '받침' };

/** 두 음절이 어느 자모에서 다른지. 같으면 [], 한글이 아니면 ['cho','jung','jong'] */
export function jamoDiff(a: string, b: string): JamoPart[] {
  if (!isHangul(a) || !isHangul(b)) return ['cho', 'jung', 'jong'];
  const x = decompose(a);
  const y = decompose(b);
  const out: JamoPart[] = [];
  if (x[0] !== y[0]) out.push('cho');
  if (x[1] !== y[1]) out.push('jung');
  if (x[2] !== y[2]) out.push('jong');
  return out;
}

// 손글씨에서 모양이 비슷해 기계가 자주 혼동하는 자모(소리가 아니라 생김새 기준)
const CHO_LOOK = [[0, 1, 15], [2, 3, 4], [5, 6, 16], [7, 8, 17], [9, 10, 12, 13, 14], [11]]; // ㄱㄲㅋ ㄴㄷㄸ ㄹㅁㅌ ㅂㅃㅍ ㅅㅆㅈㅉㅊ ㅇ
// 모음은 봐주지 않는다(ㅏ/ㅐ, ㅐ/ㅔ 가 받아쓰기의 핵심)
const JUNG_LOOK: number[][] = [];
const JONG_LOOK = [[0], [1, 2, 24, 3], [4, 5, 6], [7, 19, 20, 22, 23, 25, 27], [8, 9, 10, 11, 12, 13, 14, 15], [16, 17, 18, 26], [21]];

function sameLook(groups: number[][], a: number, b: number): boolean {
  return a === b || groups.some((g) => g.includes(a) && g.includes(b));
}

/**
 * 기계가 읽은 글자(read)가 정답(expected)과 "생김새가 비슷한 한 자모"만 다른가.
 * 아이들 글씨를 너무 빡빡하게 보지 않기 위한 느슨한 판정에 쓴다.
 */
export function looksAlike(expected: string, read: string): boolean {
  const diff = jamoDiff(expected, read);
  if (diff.length !== 1) return diff.length === 0;
  const [e, r] = [decompose(expected), decompose(read)];
  if (diff[0] === 'cho') return sameLook(CHO_LOOK, e[0], r[0]);
  if (diff[0] === 'jung') return sameLook(JUNG_LOOK, e[1], r[1]);
  return sameLook(JONG_LOOK, e[2], r[2]);
}

/** 정답과 헷갈리는 글자들(모양 비교의 비교 대상) */
export function decoysFor(ch: string, max = 10): string[] {
  const { strong, weak } = similar(ch);
  return [...new Set([...strong, ...weak])].slice(0, max);
}
