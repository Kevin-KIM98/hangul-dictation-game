// 손글씨 패드: 손가락·마우스로 글자를 쓰고, 인식용 이미지를 만든다

type Point = { x: number; y: number };

const FONT = '"Jua", "Malgun Gothic", "Apple SD Gothic Neo", sans-serif';

export class Pad {
  strokes: Point[][] = [];
  /** 힌트 모드: 연하게 보여 주는 정답 글자(따라 쓰기) */
  trace: string | null = null;
  onChange: (() => void) | null = null;
  enabled = true;

  private canvas: HTMLCanvasElement;
  private g: CanvasRenderingContext2D;
  private active: { id: number; points: Point[] } | null = null;
  private dpr = 1;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.g = canvas.getContext('2d')!;
    canvas.addEventListener('pointerdown', (e) => this.down(e));
    canvas.addEventListener('pointermove', (e) => this.move(e));
    canvas.addEventListener('pointerup', (e) => this.up(e));
    canvas.addEventListener('pointercancel', (e) => this.up(e));
    canvas.addEventListener('pointerleave', (e) => this.up(e));
    this.resize();
  }

  get isEmpty(): boolean {
    return this.strokes.length === 0 && !this.active;
  }

  /** CSS 크기에 맞춰 픽셀 크기를 잡고 다시 그린다 */
  resize(): void {
    this.dpr = Math.min(2, window.devicePixelRatio || 1);
    const size = this.canvas.clientWidth || 260;
    const next = Math.round(size * this.dpr);
    const prev = this.canvas.width;
    if (prev && prev !== next) {
      // 쓰던 글자가 찌그러지지 않게 획을 같은 비율로 옮긴다
      const k = next / prev;
      for (const s of this.strokes) for (const pt of s) (pt.x *= k), (pt.y *= k);
    }
    this.canvas.width = next;
    this.canvas.height = next;
    this.draw();
  }

  clear(): void {
    this.strokes = [];
    this.active = null;
    this.draw();
    this.onChange?.();
  }

  /** 마지막 획 지우기 */
  undo(): void {
    this.strokes.pop();
    this.draw();
    this.onChange?.();
  }

  setTrace(ch: string | null): void {
    this.trace = ch;
    this.draw();
  }

  private pos(e: PointerEvent): Point {
    const r = this.canvas.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * this.canvas.width, y: ((e.clientY - r.top) / r.height) * this.canvas.height };
  }

  private down(e: PointerEvent): void {
    if (!this.enabled || this.active) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.preventDefault();
    this.canvas.setPointerCapture?.(e.pointerId);
    this.active = { id: e.pointerId, points: [this.pos(e)] };
    this.draw();
  }

  private move(e: PointerEvent): void {
    if (!this.active || this.active.id !== e.pointerId) return;
    e.preventDefault();
    const p = this.pos(e);
    const last = this.active.points[this.active.points.length - 1];
    if (Math.hypot(p.x - last.x, p.y - last.y) < 1.5 * this.dpr) return;
    this.active.points.push(p);
    this.draw();
  }

  private up(e: PointerEvent): void {
    if (!this.active || this.active.id !== e.pointerId) return;
    this.strokes.push(this.active.points);
    this.active = null;
    this.draw();
    this.onChange?.();
  }

  private stroke(g: CanvasRenderingContext2D, points: Point[], width: number): void {
    g.lineWidth = width;
    g.lineCap = 'round';
    g.lineJoin = 'round';
    g.beginPath();
    if (points.length === 1) {
      g.arc(points[0].x, points[0].y, width / 2, 0, Math.PI * 2);
      g.fill();
      return;
    }
    g.moveTo(points[0].x, points[0].y);
    for (let i = 1; i < points.length; i++) g.lineTo(points[i].x, points[i].y);
    g.stroke();
  }

  private draw(): void {
    const { g, canvas } = this;
    const size = canvas.width;
    g.clearRect(0, 0, size, size);
    // 칸 공책처럼 가운데 점선 십자
    g.save();
    g.strokeStyle = 'rgba(29, 43, 83, 0.18)';
    g.lineWidth = 2 * this.dpr;
    g.setLineDash([8 * this.dpr, 8 * this.dpr]);
    g.beginPath();
    g.moveTo(size / 2, 0);
    g.lineTo(size / 2, size);
    g.moveTo(0, size / 2);
    g.lineTo(size, size / 2);
    g.stroke();
    g.restore();
    if (this.trace) {
      g.save();
      g.font = `${size * 0.72}px ${FONT}`;
      g.textAlign = 'center';
      g.textBaseline = 'middle';
      g.fillStyle = 'rgba(77, 171, 247, 0.35)';
      g.fillText(this.trace, size / 2, size * 0.54);
      g.restore();
    }
    g.strokeStyle = g.fillStyle = '#1d2b53';
    const width = size * 0.045;
    for (const s of this.strokes) this.stroke(g, s, width);
    if (this.active) this.stroke(g, this.active.points, width);
  }

  /** 획만(힌트 글자·안내선 없이) 흰 바탕에 그린 캔버스. 아무것도 안 썼으면 null */
  toImage(): HTMLCanvasElement | null {
    if (!this.strokes.length) return null;
    const size = this.canvas.width;
    const out = document.createElement('canvas');
    out.width = out.height = size;
    const g = out.getContext('2d')!;
    g.fillStyle = '#fff';
    g.fillRect(0, 0, size, size);
    g.strokeStyle = g.fillStyle = '#000';
    for (const s of this.strokes) this.stroke(g, s, size * 0.045);
    return out;
  }

  /** 검수용: 글꼴로 글자를 찍어 손글씨 대신 넣는다 */
  stamp(ch: string): void {
    const size = this.canvas.width;
    const n = 36;
    // 글자 윤곽을 따라 점을 찍는 대신, 글꼴 글자를 조각 획으로 바꿔 둔다
    const c = document.createElement('canvas');
    c.width = c.height = size;
    const g = c.getContext('2d')!;
    g.font = `${size * 0.7}px ${FONT}`;
    g.textAlign = 'center';
    g.textBaseline = 'middle';
    g.fillStyle = '#000';
    g.fillText(ch, size / 2, size * 0.54);
    const data = g.getImageData(0, 0, size, size).data;
    const step = Math.max(2, Math.round(size / n));
    const strokes: Point[][] = [];
    for (let y = 0; y < size; y += step) {
      let run: Point[] = [];
      for (let x = 0; x < size; x += step) {
        if (data[(y * size + x) * 4 + 3] > 128) run.push({ x, y });
        else if (run.length) {
          strokes.push(run);
          run = [];
        }
      }
      if (run.length) strokes.push(run);
    }
    this.strokes = strokes;
    this.draw();
    this.onChange?.();
  }
}
