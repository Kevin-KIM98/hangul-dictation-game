// 받아쓰기 급수표 사진에서 문제 문장을 읽어 낸다 (브라우저 안에서 Tesseract로 인식)

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

export async function recognize(canvas: HTMLCanvasElement, onProgress: (ratio: number) => void): Promise<string[]> {
  const mod = await import('tesseract.js');
  const createWorker = mod.createWorker ?? (mod as unknown as { default: typeof mod }).default.createWorker; // CJS 번들 대응
  const worker = await createWorker('kor', 1, {
    // 인식 엔진과 한국어 데이터는 public/tesseract 에 함께 배포한다(외부 CDN 불필요)
    workerPath: `${ASSETS}/worker.min.js`,
    corePath: ASSETS,
    langPath: ASSETS,
    logger: (m: { status: string; progress: number }) => {
      if (m.status === 'recognizing text') onProgress(m.progress);
    },
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
