// 앱 안의 브라우저(카카오톡·네이버 등) 감지와 바깥 브라우저로 열기 — 순수 로직 + 작은 DOM 사용

export type InApp = 'kakao' | 'naver' | 'line' | 'instagram' | 'facebook' | 'daum' | 'other' | null;

/** 앱 안에 내장된 브라우저인지. 이런 곳은 음성 합성(TTS)·포인터 잠금이 안 되는 경우가 많다 */
export function inAppBrowser(ua: string): InApp {
  const u = ua.toLowerCase();
  if (u.includes('kakaotalk')) return 'kakao';
  if (u.includes('naver(inapp') || u.includes('naver/')) return 'naver';
  if (u.includes('line/')) return 'line';
  if (u.includes('instagram')) return 'instagram';
  if (u.includes('fbav') || u.includes('fban')) return 'facebook';
  if (u.includes('daumapps')) return 'daum';
  // 안드로이드 WebView(일반 앱 안의 브라우저)
  if (/android/.test(u) && /; wv\)/.test(u)) return 'other';
  return null;
}

export const IN_APP_NAME: Record<Exclude<InApp, null>, string> = {
  kakao: '카카오톡',
  naver: '네이버',
  line: '라인',
  instagram: '인스타그램',
  facebook: '페이스북',
  daum: '다음',
  other: '앱 안의 브라우저',
};

/** 앱이 열어 주는 바깥 브라우저용 주소. 못 만들면 null(안내만) */
export function externalUrl(kind: InApp, url: string): string | null {
  if (kind === 'kakao') return `kakaotalk://web/openExternal?url=${encodeURIComponent(url)}`;
  if (kind === 'line') {
    const u = new URL(url);
    u.searchParams.set('openExternalBrowser', '1');
    return u.href;
  }
  if (/android/i.test(typeof navigator === 'undefined' ? '' : navigator.userAgent)) {
    // 크롬 열기 인텐트
    const u = new URL(url);
    return `intent://${u.host}${u.pathname}${u.search}${u.hash}#Intent;scheme=${u.protocol.replace(':', '')};package=com.android.chrome;end`;
  }
  return null;
}
