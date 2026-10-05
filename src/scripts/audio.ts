// 문제 읽어주기(TTS)와 효과음(WebAudio 합성)

let ctx: AudioContext | null = null;
let current: SpeechSynthesisUtterance | null = null; // GC로 끊기지 않게 참조 유지

/** 첫 사용자 입력에서 호출 (모바일 오디오 잠금 해제) */
export function unlock(): void {
  try {
    ctx ??= new AudioContext();
    if (ctx.state === 'suspended') void ctx.resume();
  } catch {
    ctx = null;
  }
}

function tone(freq: number, dur: number, type: OscillatorType, vol: number, slideTo?: number, delay = 0): void {
  if (!ctx) return;
  const t = ctx.currentTime + delay;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, t);
  if (slideTo) osc.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
  gain.gain.setValueAtTime(vol, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  osc.connect(gain).connect(ctx.destination);
  osc.start(t);
  osc.stop(t + dur + 0.02);
}

let noiseBuffer: AudioBuffer | null = null;

/** 대역 통과 필터를 거친 잡음(물 뿜는 소리) */
function noise(dur: number, from: number, to: number, vol: number): void {
  if (!ctx) return;
  if (!noiseBuffer) {
    noiseBuffer = ctx.createBuffer(1, ctx.sampleRate * 0.5, ctx.sampleRate);
    const d = noiseBuffer.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  const t = ctx.currentTime;
  const src = ctx.createBufferSource();
  src.buffer = noiseBuffer;
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.Q.value = 0.9;
  filter.frequency.setValueAtTime(from, t);
  filter.frequency.exponentialRampToValueAtTime(to, t + dur);
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(vol, t);
  gain.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  src.connect(filter).connect(gain).connect(ctx.destination);
  src.start(t);
  src.stop(t + dur + 0.02);
}

export const sfx = {
  /** 물총 발사: "푸슉" 하는 물소리(잡음) + 묵직한 반동음 */
  shoot: () => {
    noise(0.16, 2600, 700, 0.22);
    tone(170, 0.11, 'sine', 0.22, 55);
    tone(900, 0.05, 'triangle', 0.05, 300);
  },
  /** 연속으로 맞힐수록 음이 올라간다 */
  pop: (combo = 0) => {
    const f = 520 * Math.pow(2, Math.min(combo, 12) / 12);
    tone(f, 0.12, 'square', 0.06, f * 2.6);
    noise(0.07, 3800, 1500, 0.2); // 풍선 터지는 "팡"
  },
  bonus: () => [784, 988, 1175, 1568].forEach((f, i) => tone(f, 0.14, 'square', 0.07, undefined, i * 0.07)),
  wrong: () => tone(210, 0.2, 'sawtooth', 0.05, 130),
  clear: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.18, 'triangle', 0.12, undefined, i * 0.11)),
};

function koreanVoice(): SpeechSynthesisVoice | undefined {
  return speechSynthesis.getVoices().find((v) => v.lang.replace('_', '-').toLowerCase().startsWith('ko'));
}

/** 문장을 한국어로 읽는다. 읽을 수 없으면 onFail 호출 */
export function speak(text: string, onFail: () => void): void {
  if (!('speechSynthesis' in window)) return onFail();
  const voices = speechSynthesis.getVoices();
  const voice = koreanVoice();
  // 목록이 비어 있으면(안드로이드 등) lang 지정만으로 읽히므로 시도한다
  if (voices.length > 0 && !voice) return onFail();
  speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.lang = 'ko-KR';
  if (voice) u.voice = voice;
  u.rate = 0.75;
  u.onerror = (e) => {
    if (e.error !== 'canceled' && e.error !== 'interrupted') onFail();
  };
  current = u;
  speechSynthesis.speak(u);
}

export function stopSpeaking(): void {
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  current = null;
}

// 일부 브라우저는 음성 목록을 늦게 채운다
if (typeof window !== 'undefined' && 'speechSynthesis' in window) speechSynthesis.getVoices();
