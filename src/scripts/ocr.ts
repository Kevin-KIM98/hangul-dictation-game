// 받아쓰기 급수표 사진에서 문제 문장을 읽어 낸다 (브라우저 안에서 Tesseract로 인식)
import { compose, decompose, decoysFor, isHangul, jamoDiff, looksAlike, JAMO_NAME } from './hangul.ts';

const MAX_SIDE = 2000;
// 하위 경로(GitHub Pages)에 배포해도 찾을 수 있게 사이트 기준 경로를 붙인다
const ASSETS = new URL(`${import.meta.env.BASE_URL.replace(/[/]+$/, '')}/tesseract`, location.href).href;

/** 사진을 90도 단위로 돌려 캔버스에 그린다 */
export function drawRotated(canvas: HTMLCanvasElement, img: CanvasImageSource & { width: number; height: number }, quarterTurns: number): void {
  const scale = Math.min(1, MAX_SIDE / Math.max(img.width, img.height));
  const w = Math.round(img.width * scale);
  const h = Math.round(img.height * scale);
  const turns = ((quarterTurns % 4) + 4) % 4;
  canvas.width = turns % 2 ? h : w;
  canvas.height = turns % 2 ? w : h;
  const g = canvas.getContext('2d')!;
  g.translate(canvas.width / 2, canvas.height / 2);
  g.rotate((turns * Math.PI) / 2);
  g.drawImage(img, -w / 2, -h / 2, w, h);
  g.setTransform(1, 0, 0, 1, 0, 0);
}

interface Sym {
  text: string;
  x0: number;
  x1: number;
  h: number;
}

const KEEP = /[가-힣0-9A-Za-z.,?!]/;

function median(values: number[]): number {
  if (!values.length) return 0;
  const s = values.slice().sort((a, b) => a - b);
  return s[Math.floor(s.length / 2)];
}

/**
 * 한 줄의 글자들을 문장으로. 급수표는 칸마다 한 글자라서
 * 글자 사이 간격(pitch)으로 띄어쓰기를 되살린다: 한 칸 넘게 비면 띄어쓰기.
 */
export function joinByPitch(symbols: Sym[], pitch: number): string {
  let out = '';
  let prev: Sym | null = null;
  for (const s of symbols) {
    if (prev) {
      const gap = (s.x0 + s.x1) / 2 - (prev.x0 + prev.x1) / 2;
      if (gap > pitch * 3.2) break; // 멀리 떨어진 것은 표 테두리 찌꺼기
      const punct = /[.,?!]/.test(s.text);
      if (!punct && gap > pitch * 1.5) out += ' ';
    }
    out += s.text;
    prev = s;
  }
  return out;
}

/** 줄 앞의 문제 번호, 표 테두리 찌꺼기 등을 정리 */
export function cleanLine(line: string): string {
  return line
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^(?:\S\s+)?[^가-힣]*?\d{1,2}[\s.,)]*(?=[가-힣])/, '') // 문제 번호(앞의 찌꺼기 포함)
    .replace(/^[^가-힣]+/, '')
    .replace(/\s+([.,?!])/g, '$1')
    .replace(/([.?!])[\s.,?!\d]*$/, '$1') // 끝의 점·숫자 찌꺼기
    .replace(/[\s,\d]+$/, '')
    .trim();
}

type KorWorker = Awaited<ReturnType<typeof import('tesseract.js').createWorker>>;

/** 한국어 인식 워커. 인식 엔진과 언어 데이터는 public/tesseract 에 함께 배포한다(외부 CDN 불필요) */
async function createKorWorker(logger: (m: { status: string; progress: number }) => void): Promise<KorWorker> {
  const mod = await import('tesseract.js');
  const createWorker = mod.createWorker ?? (mod as unknown as { default: typeof mod }).default.createWorker; // CJS 번들 대응
  return createWorker('kor', 1, { workerPath: `${ASSETS}/worker.min.js`, corePath: ASSETS, langPath: ASSETS, logger });
}

// ───────── 손글씨 한 글자 읽기(최종 시험) ─────────

let shared: Promise<KorWorker> | null = null;

/**
 * 손글씨용 워커를 미리 띄운다(보스 등장 연출 동안). onProgress 는 0~1.
 * 실패하면 예외를 던지고 다음 호출에서 다시 시도한다.
 */
export function loadHandwriting(onProgress?: (ratio: number) => void): Promise<void> {
  shared ??= (async () => {
    const steps = ['loading tesseract core', 'initializing tesseract', 'loading language traineddata', 'initializing api'];
    const worker = await createKorWorker((m) => {
      const i = steps.indexOf(m.status);
      if (i >= 0) onProgress?.((i + (m.progress || 0)) / steps.length);
    });
    // 한 단어(=한 글자)로 보고 읽는 모드가 글자 하나에 가장 정확하다
    await worker.setParameters({ tessedit_pageseg_mode: '8' as never });
    onProgress?.(1);
    return worker;
  })().catch((e) => {
    shared = null;
    throw e;
  });
  return shared.then(() => undefined);
}

export async function releaseHandwriting(): Promise<void> {
  const w = shared;
  shared = null;
  if (w) await (await w).terminate().catch(() => {});
}

/** 손글씨 캔버스에서 읽힌 한글만 돌려준다(없으면 빈 문자열). psm 8 = 한 단어, 10 = 한 글자 */
export async function readHandwriting(canvas: HTMLCanvasElement, psm: 8 | 10 = 8): Promise<string> {
  await loadHandwriting();
  const worker = await shared!;
  if (psm !== 8) await worker.setParameters({ tessedit_pageseg_mode: String(psm) as never });
  try {
    const { data } = await worker.recognize(canvas);
    return data.text.replace(/[^가-힣]/g, '');
  } finally {
    if (psm !== 8) await worker.setParameters({ tessedit_pageseg_mode: '8' as never });
  }
}

// ───────── 아이 글씨를 너그럽게 보는 판정 ─────────

const FONTS = ['Jua', 'Malgun Gothic', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Noto Sans CJK KR', 'NanumGothic', 'sans-serif'];
const FEAT = 40;

/** 획을 굵게(thick>0) 또는 글자를 작게(scale<1) 바꾼 사본 — 기계가 다른 모양으로도 읽어 보게 */
function variant(src: HTMLCanvasElement, thick: number, scale: number): HTMLCanvasElement {
  const out = document.createElement('canvas');
  out.width = out.height = src.width;
  const g = out.getContext('2d')!;
  g.fillStyle = '#fff';
  g.fillRect(0, 0, out.width, out.height);
  const w = src.width * scale;
  const off = (src.width - w) / 2;
  g.globalCompositeOperation = 'multiply';
  if (thick > 0) {
    for (let dx = -thick; dx <= thick; dx++) for (let dy = -thick; dy <= thick; dy++) g.drawImage(src, off + dx, off + dy, w, w);
  } else g.drawImage(src, off, off, w, w);
  return out;
}

/** 잉크 부분만 잘라 40×40 으로 맞춘 모양 벡터(0=흰, 1=검) */
function shapeOf(src: HTMLCanvasElement): Float32Array | null {
  const w = src.width;
  const h = src.height;
  const d = src.getContext('2d')!.getImageData(0, 0, w, h).data;
  let x0 = w, y0 = h, x1 = -1, y1 = -1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      if (d[i + 3] > 40 && d[i] + d[i + 1] + d[i + 2] < 384) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
  }
  if (x1 < 0) return null;
  const c = document.createElement('canvas');
  c.width = c.height = FEAT;
  const g = c.getContext('2d')!;
  g.fillStyle = '#fff';
  g.fillRect(0, 0, FEAT, FEAT);
  g.filter = 'blur(1px)';
  const bw = x1 - x0 + 1;
  const bh = y1 - y0 + 1;
  const k = (FEAT * 0.9) / Math.max(bw, bh);
  g.drawImage(src, x0, y0, bw, bh, (FEAT - bw * k) / 2, (FEAT - bh * k) / 2, bw * k, bh * k);
  const o = g.getImageData(0, 0, FEAT, FEAT).data;
  const f = new Float32Array(FEAT * FEAT);
  for (let i = 0; i < f.length; i++) f[i] = 1 - o[i * 4] / 255;
  return f;
}

function correlation(a: Float32Array, b: Float32Array): number {
  const n = a.length;
  let sa = 0, sb = 0;
  for (let i = 0; i < n; i++) {
    sa += a[i];
    sb += b[i];
  }
  const ma = sa / n;
  const mb = sb / n;
  let sab = 0, saa = 0, sbb = 0;
  for (let i = 0; i < n; i++) {
    const x = a[i] - ma;
    const y = b[i] - mb;
    sab += x * y;
    saa += x * x;
    sbb += y * y;
  }
  return sab / Math.sqrt(saa * sbb + 1e-9);
}

const templateCache = new Map<string, Float32Array[]>();

/** 글자를 여러 글꼴로 찍은 본보기 모양들 */
function templates(ch: string): Float32Array[] {
  let t = templateCache.get(ch);
  if (t) return t;
  t = [];
  const seen = new Set<string>();
  for (const family of FONTS) {
    const c = document.createElement('canvas');
    c.width = c.height = 160;
    const g = c.getContext('2d')!;
    g.fillStyle = '#fff';
    g.fillRect(0, 0, 160, 160);
    g.fillStyle = '#000';
    g.font = `120px "${family}"`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillText(ch, 80, 86);
    const f = shapeOf(c);
    if (!f) continue;
    const key = Array.from(f.subarray(0, 200)).map((v) => Math.round(v * 9)).join('');
    if (seen.has(key)) continue; // 없는 글꼴은 같은 기본 글꼴로 찍히므로 하나만
    seen.add(key);
    t.push(f);
  }
  templateCache.set(ch, t);
  return t;
}

function shapeScore(drawn: Float32Array, ch: string): number {
  return Math.max(-1, ...templates(ch).map((t) => correlation(drawn, t)));
}

/** 같은 자음에 모음만 다른 글자들(모음을 틀리게 쓴 경우를 가려내는 비교 대상) */
function vowelRivals(ch: string): string[] {
  if (!isHangul(ch)) return [];
  const [cho, jung, jong] = decompose(ch);
  const out: string[] = [];
  for (let j = 0; j < 21; j++) if (j !== jung) out.push(compose(cho, j, jong));
  return out;
}

/** 모양 점수 묶음: 정답 / 자음이 다른 글자 중 최고 / 모음이 다른 글자 중 최고 */
function shapeScores(drawn: Float32Array, expected: string): { mine: number; cons: number; vowel: number } {
  const mine = shapeScore(drawn, expected);
  const cons = Math.max(-1, ...decoysFor(expected, 12).filter((d) => !jamoDiff(expected, d).includes('jung')).map((d) => shapeScore(drawn, d)));
  const vowel = Math.max(-1, ...vowelRivals(expected).map((d) => shapeScore(drawn, d)));
  return { mine, cons, vowel };
}

export interface Judgement {
  ok: boolean;
  /** 기계가 읽은 글자(없으면 '') */
  read: string;
  /** 어떻게 맞다고 봤는지 */
  how: 'ocr' | 'ocr-retry' | 'shape' | 'lenient' | 'none';
  /** 틀렸을 때 어디가 다른지("받침" 등). 모르면 '' */
  hint: string;
  /** 모양 비교 점수(검수용): 정답 본보기 / 자음이 다른 글자 / 모음이 다른 글자 */
  scores?: { mine: number; cons: number; vowel: number };
}

/**
 * 쓴 글자가 정답(expected)인지 아이 글씨를 생각해 너그럽게 판정한다.
 * ① 그대로 읽기 → ② 굵게·작게·한 글자 모드로 다시 읽기 → ③ 글꼴 본보기와 모양 비교(헷갈리는 글자보다 정답에 가까우면 인정)
 * → ④ 읽힌 글자가 정답과 생김새 비슷한 자모 하나만 다르고 모양도 정답 쪽이면 인정.
 */
export async function judgeHandwriting(norm: HTMLCanvasElement, expected: string): Promise<Judgement> {
  const drawn = shapeOf(norm);
  const scores = drawn ? shapeScores(drawn, expected) : undefined;
  // 기계가 정답이라고 읽으면 믿는다(모양으로 거부해 보니 맞게 쓴 글자까지 떨어뜨렸다)
  const vowelVeto = false;

  const reads: string[] = [];
  const first = await readHandwriting(norm);
  reads.push(first);
  if (first.includes(expected) && !vowelVeto) return { ok: true, read: first, how: 'ocr', hint: '', scores };

  const passes: [HTMLCanvasElement, 8 | 10][] = [
    [variant(norm, 2, 1), 8],
    [variant(norm, 0, 0.7), 10],
    [variant(norm, 1, 0.8), 8],
  ];
  for (const [img, psm] of passes) {
    const r = await readHandwriting(img, psm);
    reads.push(r);
    if (r.includes(expected) && !vowelVeto) return { ok: true, read: r, how: 'ocr-retry', hint: '', scores };
  }
  const read = reads.find((r) => r.length === 1) ?? reads.find((r) => r.length) ?? '';
  const readCh = [...read][0] ?? '';

  // 모양 비교: 정답 본보기와의 닮음이 헷갈리는 글자들보다 높으면 정답.
  // 자음이 다른 글자(갑/갚)와는 거의 비슷해도 봐주지만, 모음이 다른 글자(맷/멧)보다는 분명히 정답 쪽이어야 한다
  let shapeOk = false;
  if (scores) {
    shapeOk = scores.mine >= 0.45 && scores.mine >= scores.cons - 0.03 && scores.mine >= scores.vowel;
    if (shapeOk && (!readCh || looksAlike(expected, readCh) || jamoDiff(expected, readCh).length >= 2)) {
      return { ok: true, read, how: 'shape', hint: '', scores };
    }
  }
  // 읽힌 글자가 정답과 생김새 비슷한 자모 하나만 다르면(ㅅ↔ㅈ 받침 등) 아이 글씨로 보고 인정
  if (readCh && looksAlike(expected, readCh) && shapeOk) return { ok: true, read, how: 'lenient', hint: '', scores };

  const diff = readCh ? jamoDiff(expected, readCh) : [];
  const hint = diff.length === 1 ? JAMO_NAME[diff[0]] : '';
  return { ok: false, read, how: 'none', hint, scores };
}

const OCR_SIZE = 200;

/**
 * 쓴 글자를 인식하기 좋게 손질: 잉크 부분만 잘라 캔버스의 80% 크기로 가운데에 둔다.
 * (글자가 작거나 구석에 있으면 인식률이 크게 떨어진다) 잉크가 없으면 null.
 */
export function normalizeHandwriting(src: HTMLCanvasElement): HTMLCanvasElement | null {
  const w = src.width;
  const h = src.height;
  if (!w || !h) return null;
  const data = src.getContext('2d')!.getImageData(0, 0, w, h).data;
  let x0 = w, y0 = h, x1 = -1, y1 = -1;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      if (data[i + 3] > 40 && data[i] + data[i + 1] + data[i + 2] < 384) {
        if (x < x0) x0 = x;
        if (x > x1) x1 = x;
        if (y < y0) y0 = y;
        if (y > y1) y1 = y;
      }
    }
  }
  if (x1 < 0 || y1 < 0) return null;
  const bw = x1 - x0 + 1;
  const bh = y1 - y0 + 1;
  const out = document.createElement('canvas');
  out.width = out.height = OCR_SIZE;
  const g = out.getContext('2d')!;
  g.fillStyle = '#fff';
  g.fillRect(0, 0, OCR_SIZE, OCR_SIZE);
  const scale = (OCR_SIZE * 0.8) / Math.max(bw, bh);
  const dw = bw * scale;
  const dh = bh * scale;
  g.imageSmoothingQuality = 'high';
  g.drawImage(src, x0, y0, bw, bh, (OCR_SIZE - dw) / 2, (OCR_SIZE - dh) / 2, dw, dh);
  return out;
}

export async function recognize(canvas: HTMLCanvasElement, onProgress: (ratio: number) => void): Promise<string[]> {
  const worker = await createKorWorker((m) => {
    if (m.status === 'recognizing text') onProgress(m.progress);
  });
  try {
    // 호출하는 쪽에서 cleanForOcr 로 손질한 캔버스를 넘긴다
    await worker.setParameters({ tessedit_pageseg_mode: '6' as never, preserve_interword_spaces: '1' });
    const { data } = await worker.recognize(canvas, {}, { blocks: true });

    const lines: { raw: string; symbols: Sym[] }[] = [];
    for (const block of data.blocks ?? []) {
      for (const para of block.paragraphs) {
        for (const line of para.lines) {
          const symbols: Sym[] = [];
          for (const word of line.words) {
            for (const s of word.symbols) {
              if (KEEP.test(s.text)) symbols.push({ text: s.text, x0: s.bbox.x0, x1: s.bbox.x1, h: s.bbox.y1 - s.bbox.y0 });
            }
          }
          symbols.sort((a, b) => a.x0 - b.x0);
          lines.push({ raw: line.text, symbols });
        }
      }
    }

    // 한 칸의 너비(pitch): 이웃한 글자 사이 간격 중 가장 흔한(작은) 묶음의 중앙값
    const gaps: number[] = [];
    const widths: number[] = [];
    for (const l of lines) {
      const hangul = l.symbols.filter((s) => /[가-힣]/.test(s.text));
      for (const s of hangul) widths.push(s.x1 - s.x0);
      for (let i = 1; i < hangul.length; i++) {
        gaps.push((hangul[i].x0 + hangul[i].x1) / 2 - (hangul[i - 1].x0 + hangul[i - 1].x1) / 2);
      }
    }
    gaps.sort((a, b) => a - b);
    const base = gaps[Math.floor(gaps.length / 4)] ?? 0;
    const pitch = median(gaps.filter((g) => g > base * 0.6 && g < base * 1.4));
    // 칸 공책(한 칸 한 글자)이면 글자 사이가 글자 너비보다 눈에 띄게 넓다
    const grid = pitch > median(widths) * 1.2;

    return lines
      .filter((l) => !/[\[\]]/.test(l.raw)) // "6회 [3. 단원 이름]" 같은 제목 줄
      .map((l) => cleanLine(grid ? joinByPitch(l.symbols, pitch) : l.raw.replace(/[^가-힣0-9A-Za-z.,?! ]/g, ' ')))
      .filter((s) => (s.match(/[가-힣]/g) ?? []).length >= 2);
  } finally {
    await worker.terminate();
  }
}

/**
 * 인식 전 손질: 흑백으로 바꾸고(주변 밝기 기준) 칸 공책의 가로·세로 줄을 지운다.
 * 줄이 남아 있으면 글자와 붙어 인식률이 크게 떨어진다.
 */
export function cleanForOcr(src: HTMLCanvasElement): HTMLCanvasElement {
  const w = src.width;
  const h = src.height;
  const data = src.getContext('2d')!.getImageData(0, 0, w, h).data;
  const gray = new Uint8Array(w * h);
  for (let i = 0; i < w * h; i++) gray[i] = (data[i * 4] * 77 + data[i * 4 + 1] * 150 + data[i * 4 + 2] * 29) >> 8;

  // 적분 영상으로 주변 평균을 구해 그림자·조명 차이를 없앤다
  const integral = new Float64Array((w + 1) * (h + 1));
  for (let y = 0; y < h; y++) {
    let row = 0;
    for (let x = 0; x < w; x++) {
      row += gray[y * w + x];
      integral[(y + 1) * (w + 1) + x + 1] = integral[y * (w + 1) + x + 1] + row;
    }
  }
  const R = Math.max(12, Math.round(Math.max(w, h) / 60));
  const dark = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) {
    const y0 = Math.max(0, y - R);
    const y1 = Math.min(h, y + R + 1);
    for (let x = 0; x < w; x++) {
      const x0 = Math.max(0, x - R);
      const x1 = Math.min(w, x + R + 1);
      const sum = integral[y1 * (w + 1) + x1] - integral[y0 * (w + 1) + x1] - integral[y1 * (w + 1) + x0] + integral[y0 * (w + 1) + x0];
      const mean = sum / ((x1 - x0) * (y1 - y0));
      if (gray[y * w + x] < mean * 0.78) dark[y * w + x] = 1;
    }
  }

  // 긴 직선(칸 줄) 지우기: 글자 획보다 훨씬 긴 가로·세로 줄.
  // 사진이 조금 기울어도 이어지도록 위아래(좌우) T픽셀까지 같은 줄로 본다.
  const LONG = Math.round(Math.max(w, h) * 0.05);
  const T = 2;
  const keep = dark.slice();
  const at = (x: number, y: number) => x >= 0 && y >= 0 && x < w && y < h && dark[y * w + x] === 1;
  for (let y = 0; y < h; y++) {
    let start = -1;
    for (let x = 0; x <= w; x++) {
      let on = false;
      if (x < w) for (let d = -T; d <= T && !on; d++) on = at(x, y + d);
      if (on && start < 0) start = x;
      if (!on && start >= 0) {
        if (x - start >= LONG) {
          for (let d = -T; d <= T; d++) {
            const yy = y + d;
            if (yy >= 0 && yy < h) keep.fill(0, yy * w + start, yy * w + x);
          }
        }
        start = -1;
      }
    }
  }
  for (let x = 0; x < w; x++) {
    let start = -1;
    for (let y = 0; y <= h; y++) {
      let on = false;
      if (y < h) for (let d = -T; d <= T && !on; d++) on = at(x + d, y);
      if (on && start < 0) start = y;
      if (!on && start >= 0) {
        if (y - start >= LONG) {
          for (let k = start; k < y; k++) {
            for (let d = -T; d <= T; d++) if (x + d >= 0 && x + d < w) keep[k * w + x + d] = 0;
          }
        }
        start = -1;
      }
    }
  }

  const out = document.createElement('canvas');
  out.width = w;
  out.height = h;
  const g = out.getContext('2d')!;
  const img = g.createImageData(w, h);
  for (let i = 0; i < w * h; i++) {
    const v = keep[i] ? 0 : 255;
    img.data[i * 4] = img.data[i * 4 + 1] = img.data[i * 4 + 2] = v;
    img.data[i * 4 + 3] = 255;
  }
  g.putImageData(img, 0, 0);
  return out;
}
