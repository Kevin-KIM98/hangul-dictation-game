// 실행: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { externalUrl, inAppBrowser } from '../src/scripts/browser.ts';
import { clipKey, pickMime } from '../src/scripts/recordings.ts';

const KAKAO = 'Mozilla/5.0 (Linux; Android 14; SM-S918N Build/UP1A.231005.007; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/124.0.0.0 Mobile Safari/537.36;KAKAOTALK 10.8.0';
const CHROME = 'Mozilla/5.0 (Linux; Android 14; SM-S918N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Mobile Safari/537.36';
const SAFARI = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

test('앱 안의 브라우저 감지', () => {
  assert.equal(inAppBrowser(KAKAO), 'kakao');
  assert.equal(inAppBrowser(CHROME), null);
  assert.equal(inAppBrowser(SAFARI), null);
  assert.equal(inAppBrowser('Mozilla/5.0 (Linux; Android 13; wv) NAVER(inapp; search; 1000; 12.0.0)'), 'naver');
  assert.equal(inAppBrowser('Mozilla/5.0 (iPhone) Line/13.0.0'), 'line');
  assert.equal(inAppBrowser('Mozilla/5.0 (Linux; Android 13; Pixel; wv) AppleWebKit/537.36 Chrome/120 Mobile Safari/537.36'), 'other');
});

test('바깥 브라우저로 여는 주소', () => {
  const url = 'https://kevin-kim98.github.io/hangul-dictation-game/#brag=abc';
  assert.ok(externalUrl('kakao', url)!.startsWith('kakaotalk://web/openExternal?url=https%3A%2F%2F'));
  assert.ok(externalUrl('line', url)!.includes('openExternalBrowser=1'));
  assert.equal(externalUrl(null, url), null); // node 에는 navigator 가 없으니 안내만
});

test('녹음 형식 고르기와 저장 키', () => {
  assert.equal(pickMime((m) => m === 'audio/mp4'), 'audio/mp4');
  assert.equal(pickMime(() => true), 'audio/webm;codecs=opus');
  assert.equal(pickMime(() => false), '');
  assert.equal(clipKey('  학교에   갑니다. '), '학교에 갑니다.');
});
