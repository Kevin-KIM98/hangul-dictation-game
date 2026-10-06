// 문제를 읽어 주는 녹음(보호자·선생님 목소리). IndexedDB 에 문장별로 보관한다.
// 브라우저 내장 음성이 없는 앱 안 브라우저에서도 녹음은 언제나 재생된다.

const DB = 'dictation-audio';
const STORE = 'clips';

function open(): Promise<IDBDatabase> {
  return new Promise((res, rej) => {
    if (typeof indexedDB === 'undefined') return rej(new Error('no indexedDB'));
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => res(req.result);
    req.onerror = () => rej(req.error);
  });
}

function tx<T>(mode: IDBTransactionMode, run: (store: IDBObjectStore) => IDBRequest<T>): Promise<T> {
  return open().then(
    (db) =>
      new Promise<T>((res, rej) => {
        const t = db.transaction(STORE, mode);
        const req = run(t.objectStore(STORE));
        req.onsuccess = () => res(req.result);
        req.onerror = () => rej(req.error);
        t.oncomplete = () => db.close();
      }),
  );
}

/** 문장을 저장 키로(띄어쓰기·앞뒤 공백 정리) */
export function clipKey(text: string): string {
  return text.replace(/\s+/g, ' ').trim();
}

export async function getRecording(text: string): Promise<Blob | null> {
  try {
    const v = await tx<Blob | undefined>('readonly', (s) => s.get(clipKey(text)));
    return v instanceof Blob ? v : null;
  } catch {
    return null;
  }
}

export function saveRecording(text: string, blob: Blob): Promise<void> {
  return tx('readwrite', (s) => s.put(blob, clipKey(text))).then(() => undefined);
}

export function deleteRecording(text: string): Promise<void> {
  return tx('readwrite', (s) => s.delete(clipKey(text))).then(() => undefined);
}

export async function listRecordings(): Promise<Set<string>> {
  try {
    const keys = await tx<IDBValidKey[]>('readonly', (s) => s.getAllKeys());
    return new Set(keys.map(String));
  } catch {
    return new Set();
  }
}

export function canRecord(): boolean {
  return typeof MediaRecorder !== 'undefined' && !!navigator.mediaDevices?.getUserMedia;
}

/** 지원하는 녹음 형식 고르기 */
export function pickMime(supported: (m: string) => boolean): string {
  for (const m of ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus', 'audio/aac']) if (supported(m)) return m;
  return '';
}

export interface Recorder {
  /** 녹음을 끝내고 결과를 받는다 */
  stop(): Promise<Blob>;
  cancel(): void;
}

/** 마이크 녹음 시작. maxMs 가 지나면 저절로 끝난다 */
export async function startRecording(maxMs = 8000, onAutoStop?: () => void): Promise<Recorder> {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const mime = pickMime((m) => MediaRecorder.isTypeSupported(m));
  const rec = new MediaRecorder(stream, mime ? { mimeType: mime } : undefined);
  const chunks: Blob[] = [];
  rec.ondataavailable = (e) => e.data.size && chunks.push(e.data);
  const done = new Promise<Blob>((res) => {
    rec.onstop = () => {
      stream.getTracks().forEach((t) => t.stop());
      res(new Blob(chunks, { type: rec.mimeType || mime || 'audio/webm' }));
    };
  });
  rec.start();
  const timer = setTimeout(() => {
    if (rec.state === 'recording') {
      rec.stop();
      onAutoStop?.();
    }
  }, maxMs);
  return {
    stop() {
      clearTimeout(timer);
      if (rec.state === 'recording') rec.stop();
      return done;
    },
    cancel() {
      clearTimeout(timer);
      if (rec.state === 'recording') rec.stop();
      void done;
    },
  };
}
