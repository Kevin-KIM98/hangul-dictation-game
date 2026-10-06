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
  unlockSpeech();
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
  /** 보스 등장: 낮게 울리는 포효 */
  roar: () => {
    tone(95, 0.9, 'sawtooth', 0.16, 38);
    tone(140, 0.7, 'square', 0.05, 60, 0.05);
    noise(0.8, 900, 120, 0.25);
  },
  /** 보스가 맞았을 때 */
  bossHit: (combo = 0) => {
    const f = 330 * Math.pow(2, Math.min(combo, 12) / 12);
    tone(f, 0.16, 'square', 0.08, f * 0.5);
    tone(f * 2, 0.1, 'triangle', 0.06, f * 3, 0.04);
    noise(0.12, 3000, 800, 0.2);
  },
  /** 보스의 공격: 쿵 */
  attack: () => {
    tone(130, 0.35, 'sine', 0.3, 35);
    tone(220, 0.18, 'sawtooth', 0.07, 90);
    noise(0.25, 500, 80, 0.3);
  },
  /** 시간이 얼마 안 남았을 때 똑딱 */
  tick: () => tone(1500, 0.04, 'square', 0.05, 1100),
  /** 보스를 물리쳤을 때 팡파르 */
  victory: () => {
    [523, 659, 784, 1047, 784, 1047, 1319].forEach((f, i) => tone(f, i >= 5 ? 0.5 : 0.17, 'triangle', 0.13, undefined, i * 0.13));
    [262, 330, 392, 523].forEach((f, i) => tone(f, 0.6, 'sine', 0.08, undefined, 0.65 + i * 0.02));
  },
};

function koreanVoice(): SpeechSynthesisVoice | undefined {
  return speechSynthesis.getVoices().find((v) => v.lang.replace('_', '-').toLowerCase().startsWith('ko'));
}

/** 일부 브라우저는 음성 목록을 늦게 채운다: 잠깐(최대 waitMs) 기다려 본다 */
function voicesReady(waitMs: number): Promise<void> {
  if (!('speechSynthesis' in window) || speechSynthesis.getVoices().length) return Promise.resolve();
  return new Promise((res) => {
    const done = () => {
      speechSynthesis.removeEventListener('voiceschanged', done);
      res();
    };
    speechSynthesis.addEventListener('voiceschanged', done);
    setTimeout(done, waitMs);
  });
}

let speechUnlocked = false;

/** iOS 등은 사용자 입력 안에서 한 번 말해야 그 뒤로 소리가 난다. unlock() 에서 부른다 */
function unlockSpeech(): void {
  if (speechUnlocked || !('speechSynthesis' in window)) return;
  speechUnlocked = true;
  try {
    const u = new SpeechSynthesisUtterance(' ');
    u.volume = 0;
    speechSynthesis.speak(u);
  } catch {
    /* 무시 */
  }
}

/**
 * 브라우저 내장 음성 합성으로 읽는다. 실제로 소리가 시작되면 true.
 * 시작 신호가 timeout 안에 안 오거나 오류가 나면 false(다음 방법으로).
 */
function speakWeb(text: string, timeoutMs = 3000): Promise<boolean> {
  if (!('speechSynthesis' in window)) return Promise.resolve(false);
  return voicesReady(800).then(
    () =>
      new Promise<boolean>((res) => {
        let settled = false;
        let timer = 0;
        const finish = (ok: boolean) => {
          if (settled) return;
          settled = true;
          clearTimeout(timer);
          res(ok);
        };
        try {
          speechSynthesis.cancel();
          const u = new SpeechSynthesisUtterance(text);
          u.lang = 'ko-KR';
          const voice = koreanVoice();
          if (voice) u.voice = voice; // 없어도 lang 만으로 읽히는 기기가 많아 그냥 시도한다
          u.rate = 0.75;
          u.onstart = () => finish(true);
          u.onerror = (e) => {
            if (e.error === 'canceled' || e.error === 'interrupted') return finish(settled);
            finish(false);
          };
          u.onend = () => finish(true);
          current = u;
          // 일시정지 상태로 굳어 있으면 풀어 준다(크롬 버그)
          if (speechSynthesis.paused) speechSynthesis.resume();
          speechSynthesis.speak(u);
          timer = window.setTimeout(() => finish(false), timeoutMs);
        } catch {
          finish(false);
        }
      }),
  );
}

let player: HTMLAudioElement | null = null;
let playerUrl: string | null = null;

function stopPlayer(): void {
  if (player) {
    player.pause();
    player.src = '';
    player = null;
  }
  if (playerUrl) {
    URL.revokeObjectURL(playerUrl);
    playerUrl = null;
  }
}

/** 오디오 파일(녹음·온라인 음성)을 재생. 실제로 재생이 시작되면 true. objectUrl 이면 끝난 뒤 주소를 거둔다 */
function playUrl(src: string, objectUrl = false, timeoutMs = 6000): Promise<boolean> {
  return new Promise((res) => {
    stopPlayer(); // 이전 재생(과 그 객체 주소)을 먼저 정리한 뒤에 새 주소를 기억한다
    if (objectUrl) playerUrl = src;
    const a = new Audio();
    player = a;
    let settled = false;
    const finish = (ok: boolean) => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      if (!ok && player === a) stopPlayer();
      res(ok);
    };
    a.preload = 'auto';
    a.onplaying = () => finish(true);
    a.onerror = () => finish(false);
    a.onended = () => player === a && stopPlayer();
    a.src = src;
    const timer = setTimeout(() => finish(false), timeoutMs);
    // play() 의 약속이 이행되면 재생이 시작된 것(출력 장치가 없는 환경은 playing 이벤트가 안 올 수 있다)
    a.play().then(() => finish(true), () => finish(false));
  });
}

/** 온라인 음성(인터넷이 되고 브라우저가 허용할 때만). 비공식 주소라 안 되면 조용히 넘어간다 */
function onlineTtsUrl(text: string): string {
  return `https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ko&q=${encodeURIComponent(text)}`;
}

export type SpeakMethod = 'recording' | 'web' | 'online';
let seq = 0;

/**
 * 문장을 한국어로 읽는다. 녹음 → 내장 음성 → 온라인 음성 순으로 되는 것을 쓴다.
 * 모두 안 되면 onFail. 어떤 방법으로 읽었는지 돌려준다(없으면 null).
 */
export async function speak(text: string, onFail: () => void, recording?: Blob | null): Promise<SpeakMethod | null> {
  const my = ++seq;
  stopSpeaking();
  if (recording) {
    if (await playUrl(URL.createObjectURL(recording), true)) return 'recording';
    if (my !== seq) return null;
  }
  if (await speakWeb(text)) return 'web';
  if (my !== seq) return null;
  if (navigator.onLine !== false && (await playUrl(onlineTtsUrl(text)))) return 'online';
  if (my !== seq) return null;
  onFail();
  return null;
}

export function stopSpeaking(): void {
  if ('speechSynthesis' in window) speechSynthesis.cancel();
  current = null;
  stopPlayer();
}

// 일부 브라우저는 음성 목록을 늦게 채운다
if (typeof window !== 'undefined' && 'speechSynthesis' in window) speechSynthesis.getVoices();
