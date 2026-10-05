// 실행: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { sha256 } from '../src/scripts/sha256.ts';
import {
  Users, addFriend, bragText, decodeBrag, encodeBrag, fameOf, loadFriends, nameError, passwordError, rankRecords, recordOf,
  LEGACY_SAVE_KEY, type StorageLike,
} from '../src/scripts/users.ts';
import { newSave } from '../src/scripts/campaign.ts';

function memory(): StorageLike & { map: Map<string, string> } {
  const map = new Map<string, string>();
  return { map, getItem: (k) => map.get(k) ?? null, setItem: (k, v) => void map.set(k, v), removeItem: (k) => void map.delete(k) };
}

test('sha256 은 Node 의 결과와 같다', () => {
  for (const s of ['', 'abc', '받아쓰기 1234', 'x'.repeat(55), 'y'.repeat(56), '한글'.repeat(100)]) {
    assert.equal(sha256(s), createHash('sha256').update(s).digest('hex'));
  }
});

test('이름·비밀번호 규칙', () => {
  assert.equal(nameError('  민수 '), null);
  assert.ok(nameError(''));
  assert.ok(nameError('열한글자가넘는이름입니다'));
  assert.ok(nameError('민수!'));
  assert.ok(passwordError('1'));
  assert.equal(passwordError('1234'), null);
});

test('등록 → 로그아웃 → 로그인, 비밀번호가 틀리면 못 들어간다', () => {
  const s = memory();
  let t = 1000;
  const users = new Users(s, () => t++, () => 0.5);
  const a = users.register('민수', '1234');
  assert.ok('save' in a);
  assert.equal(users.current()?.name, '민수');
  assert.ok('error' in users.register('민수', '0000'));
  users.logout();
  assert.equal(users.current(), null);
  assert.ok('error' in users.login('민수', '9999'));
  assert.ok('error' in users.login('없는애', '1234'));
  assert.equal((users.login(' 민수', '1234') as { name: string }).name, '민수');
  // 다시 읽어도 유지되고 비밀번호는 저장되지 않는다
  const again = new Users(s);
  assert.equal(again.current()?.name, '민수');
  assert.ok(!s.map.get('dictation.users.v1')!.includes('1234'));
});

test('첫 계정은 이전 버전의 진행(코인·왕관)을 이어받고, 둘째 계정은 새로 시작한다', () => {
  const s = memory();
  const legacy = { ...newSave(), coins: 77, crowns: 2 };
  s.setItem(LEGACY_SAVE_KEY, JSON.stringify(legacy));
  const users = new Users(s);
  const a = users.register('민수', '1234');
  assert.equal((a as { save: typeof legacy }).save.coins, 77);
  const b = users.register('영희', '1234');
  assert.equal((b as { save: typeof legacy }).save.coins, 0);
  assert.equal(users.count, 2);
});

test('명예 점수와 순위', () => {
  const a = { ...recordOf('a', { ...newSave(), crowns: 1, best: 100, bossBest: 50 }, 1) };
  const b = { ...recordOf('b', { ...newSave(), crowns: 0, best: 900, bossBest: 0 }, 2) };
  const c = { ...recordOf('c', { ...newSave(), crowns: 0, best: 900, bossBest: 0 }, 3) };
  assert.equal(fameOf(a), 650);
  assert.deepEqual(rankRecords([a, b, c]).map((r) => r.name), ['c', 'b', 'a']);
});

test('자랑 링크: 인코딩·디코딩, 변조는 거부', () => {
  const r = recordOf('민수 짱', { ...newSave(), crowns: 3, best: 420, bossBest: 310, bossGrade: 'A', bossClears: 2 }, 1700000000000);
  const code = encodeBrag(r);
  assert.ok(/^[A-Za-z0-9_-]+$/.test(code));
  const back = decodeBrag(code)!;
  assert.deepEqual({ ...back, friend: undefined }, { ...r, friend: undefined });
  assert.ok(back.friend);
  assert.equal(decodeBrag(code.slice(0, -2) + 'zz'), null);
  assert.equal(decodeBrag('%%%'), null);
  assert.ok(bragText(r, 'https://x.y/').includes('A등급'));
});

test('친구 기록은 같은 이름이면 더 새 것만 남고, 명예의 전당에 함께 나온다', () => {
  const s = memory();
  const old = { ...recordOf('영희', { ...newSave(), best: 10 }, 1), friend: true };
  const fresh = { ...recordOf('영희', { ...newSave(), best: 50 }, 2), friend: true };
  assert.ok(addFriend(s, fresh));
  assert.equal(addFriend(s, old), false);
  assert.equal(loadFriends(s)[0].best, 50);
  const users = new Users(s);
  users.register('민수', '1234');
  const names = users.records().map((r) => `${r.name}${r.friend ? '*' : ''}`);
  assert.deepEqual(names, ['영희*', '민수']);
});
