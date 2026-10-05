// 자랑 카드: 기록을 그림으로 만들어 공유(Web Share)하거나 저장한다
import { bragText, displayName, encodeBrag, fameOf, type PlayerRecord } from './users.ts';

const FONT = '"Jua", "Malgun Gothic", "Apple SD Gothic Neo", sans-serif';

/** 친구가 열면 내 기록이 명예의 전당에 들어가는 링크 */
export function bragUrl(r: PlayerRecord): string {
  const url = new URL(location.href);
  url.search = '';
  url.hash = `brag=${encodeBrag(r)}`;
  return url.href;
}

function roundRect(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number): void {
  g.beginPath();
  g.roundRect(x, y, w, h, r);
}

/** 720×420 자랑 카드 */
export function drawBragCard(canvas: HTMLCanvasElement, r: PlayerRecord): void {
  const W = 720;
  const H = 420;
  canvas.width = W;
  canvas.height = H;
  const g = canvas.getContext('2d')!;
  const sky = g.createLinearGradient(0, 0, 0, H);
  sky.addColorStop(0, '#3d9df0');
  sky.addColorStop(1, '#bdeeb0');
  g.fillStyle = sky;
  g.fillRect(0, 0, W, H);
  // 풍선 장식
  const colors = ['#ff6b6b', '#ffc93c', '#3ddc97', '#b48cff', '#ff9f43'];
  for (let i = 0; i < 9; i++) {
    const x = 40 + ((i * 97) % (W - 80));
    const y = 30 + ((i * 61) % 120);
    g.fillStyle = colors[i % colors.length];
    g.beginPath();
    g.ellipse(x, y, 16, 20, 0, 0, Math.PI * 2);
    g.fill();
  }
  g.fillStyle = '#fff8e7';
  g.strokeStyle = '#1d2b53';
  g.lineWidth = 6;
  roundRect(g, 36, 70, W - 72, H - 106, 28);
  g.fill();
  g.stroke();

  g.fillStyle = '#1d2b53';
  g.textAlign = 'center';
  g.font = `22px ${FONT}`;
  g.fillStyle = '#ff5d5d';
  g.fillText('받아쓰기 풍선 사격', W / 2, 112);
  g.fillStyle = '#1d2b53';
  g.font = `46px ${FONT}`;
  g.fillText(`🏆 ${displayName(r)}의 기록`, W / 2, 166);
  g.font = `18px ${FONT}`;
  g.fillStyle = '#5a6a92';
  g.fillText(`@${r.id}${r.school ? ` · ${r.school}` : ''}`, W / 2, 192);
  g.fillStyle = '#1d2b53';

  g.font = `30px ${FONT}`;
  const lines = [`👑 왕관 ${r.crowns}개   ⭐ 최고 ${r.best}점`];
  lines.push(r.bossClears ? `🐉 최종 시험 ${r.bossGrade}등급 · ${r.bossBest}점` : '🐉 최종 시험 도전 중!');
  lines.forEach((t, i) => g.fillText(t, W / 2, 236 + i * 42));

  g.fillStyle = '#ff5d5d';
  roundRect(g, W / 2 - 150, 300, 300, 56, 18);
  g.fill();
  g.fillStyle = '#fff';
  g.font = `30px ${FONT}`;
  g.fillText(`명예 점수 ${fameOf(r)}점`, W / 2, 339);
}

export interface ShareOutcome {
  /** 'shared' 공유창 · 'copied' 글 복사 · 'none' 둘 다 안 됨 */
  how: 'shared' | 'copied' | 'none';
  url: string;
  text: string;
}

/** 공유창이 있으면 그림과 글을 보내고, 없으면 글을 복사한다 */
export async function shareRecord(canvas: HTMLCanvasElement, r: PlayerRecord): Promise<ShareOutcome> {
  const url = bragUrl(r);
  const text = bragText(r, url);
  const nav = navigator as Navigator & { canShare?: (d: ShareData) => boolean };
  if (typeof nav.share === 'function') {
    try {
      const blob = await new Promise<Blob | null>((res) => canvas.toBlob(res, 'image/png'));
      const files = blob ? [new File([blob], `${r.name}-받아쓰기-기록.png`, { type: 'image/png' })] : [];
      const data: ShareData = files.length && nav.canShare?.({ files }) ? { files, text } : { text, url };
      await nav.share(data);
      return { how: 'shared', url, text };
    } catch (e) {
      if ((e as DOMException)?.name === 'AbortError') return { how: 'none', url, text };
    }
  }
  try {
    await navigator.clipboard.writeText(text);
    return { how: 'copied', url, text };
  } catch {
    return { how: 'none', url, text };
  }
}
