// 실행: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { sha256 } from '../src/scripts/sha256.ts';
import {
  Users, addFriend, bestWin, bragText, decodeBrag, decodeRecords, displayName, encodeBrag, encodeRecords, fameOf, fullName, idError,
  hashPassword, loadFriends, nameError, passwordError, rankRecords, rankWinners, recordOf, LEGACY_SAVE_KEY, USERS_BACKUP_KEY, USERS_KEY,
  type StorageLike,
} from '../src/scripts/users.ts';
import { newSave, type Win } from '../src/scripts/campaign.ts';

function memory(): StorageLike & { map: Map<string, string> } {
  const map = new Map<string, string>();
  return { map, getItem: (k) => map.get(k) ?? null, setItem: (k, v) => void map.set(k, v), removeItem: (k) => void map.delete(k) };
}

test('sha256 은 Node 의 결과와 같다', () => {
  for (const s of ['', 'abc', '받아쓰기 1234', 'x'.repeat(55), 'y'.repeat(56), '한글'.repeat(100)]) {
    assert.equal(sha256(s), createHash('sha256').update(s).digest('hex'));
  }
});

test('아이디·이름·비밀번호 규칙', () => {
  assert.equal(idError('minsu01'), null);
  assert.equal(idError('민수'), null);
  assert.ok(idError(''));
  assert.ok(idError('a'));
  assert.equal(idError('민 수'), null); // 띄어쓰기는 지워진다
  assert.ok(idError('아주아주아주긴아이디입니다요'));
  assert.equal(nameError(''), null); // 이름은 선택
  assert.equal(nameError('  민수 '), null);
  assert.ok(nameError('열한글자가넘는이름입니다'));
  assert.ok(nameError('민수!'));
  assert.ok(passwordError('1'));
  assert.equal(passwordError('1234'), null);
  assert.equal(displayName({ id: 'minsu01', name: '' }), 'minsu01');
  assert.equal(fullName({ id: 'minsu01', name: '민수', school: '한글초' }), '민수 (@minsu01) · 한글초');
});

test('같은 이름이라도 아이디가 다르면 따로 관리되고, 겹치는 아이디는 숫자를 붙여 제안한다', () => {
  const users = new Users(memory());
  const a = users.register('minsu', '1234', { name: '김민수', school: '한글초' });
  assert.ok('save' in a);
  users.logout();
  const dup = users.register('MinSu', '0000', { name: '이민수' });
  assert.ok('error' in dup); // 대소문자만 다른 아이디는 같은 아이디
  assert.equal(users.suggestId('minsu'), 'minsu2');
  const b = users.register(users.suggestId('minsu'), '0000', { name: '이민수' });
  assert.ok('save' in b && b.id === 'minsu2');
  assert.deepEqual(users.records().map((r) => `${r.name}@${r.id}`).sort(), ['김민수@minsu', '이민수@minsu2']);
  assert.equal(users.updateProfile({ name: '이민수', school: '풍선초' }), null);
  assert.equal(users.current()?.school, '풍선초');
  assert.ok(users.updateProfile({ name: '!!!', school: '' }));
  assert.ok('error' in users.register('ok', '1234', { name: '너무너무너무긴이름이에요' }));
});

test('v1(이름이 아이디) 저장은 아이디로 옮겨 읽는다', () => {
  const s = memory();
  const old = { v: 1, current: '민수', accounts: { '민수': { name: '민수', salt: 'abc', hash: 'x', created: 1, updated: 2, save: { ...newSave(), coins: 9 } } } };
  s.setItem(USERS_KEY, JSON.stringify(old));
  const users = new Users(s);
  const me = users.current()!;
  assert.deepEqual([me.id, me.name, me.school, me.save.coins], ['민수', '민수', '', 9]);
  assert.ok('error' in users.register('민수', '1234'));
});

test('등록 → 로그아웃 → 로그인, 비밀번호가 틀리면 못 들어간다', () => {
  const s = memory();
  let t = 1000;
  const users = new Users(s, () => t++, () => 0.5);
  const a = users.register('민수', '1234');
  assert.ok('save' in a);
  assert.equal(users.current()?.id, '민수');
  assert.ok('error' in users.register('민수', '0000'));
  users.logout();
  assert.equal(users.current(), null);
  assert.ok('error' in users.login('민수', '9999'));
  assert.ok('error' in users.login('없는애', '1234'));
  assert.equal((users.login(' 민수', '1234') as { id: string }).id, '민수');
  // 다시 읽어도 유지되고 비밀번호는 저장되지 않는다
  const again = new Users(s);
  assert.equal(again.current()?.id, '민수');
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
  const who = (id: string) => ({ id, name: '', school: '' });
  const a = { ...recordOf(who('a'), { ...newSave(), crowns: 1, best: 100, bossBest: 50 }, 1) };
  const b = { ...recordOf(who('b'), { ...newSave(), crowns: 0, best: 900, bossBest: 0 }, 2) };
  const c = { ...recordOf(who('c'), { ...newSave(), crowns: 0, best: 900, bossBest: 0 }, 3) };
  assert.equal(fameOf(a), 650);
  assert.deepEqual(rankRecords([a, b, c]).map((r) => r.id), ['c', 'b', 'a']);
});

test('자랑 링크: 인코딩·디코딩(우승 기록 포함), 변조는 거부', () => {
  const wins: Win[] = [{ nth: 1, laps: 6, grade: 'A', score: 900, at: 1 }, { nth: 2, laps: 4, grade: 'B', score: 700, at: 2 }];
  const r = recordOf({ id: 'minsu01', name: '민수 짱', school: '한글초' }, { ...newSave(), crowns: 3, best: 420, bossBest: 310, bossGrade: 'A', bossClears: 2, wins }, 1700000000000);
  const code = encodeBrag(r);
  assert.ok(/^[A-Za-z0-9_-]+$/.test(code));
  const back = decodeBrag(code)!;
  assert.deepEqual({ ...back, friend: undefined }, { ...r, friend: undefined });
  assert.ok(back.friend);
  assert.equal(decodeBrag(code.slice(0, -2) + 'zz'), null);
  assert.equal(decodeBrag('%%%'), null);
  const text = bragText(r, 'https://x.y/');
  assert.ok(text.includes('2회차 우승') && text.includes('4바퀴') && text.includes('@minsu01') && text.includes('한글초'));
  assert.equal(bestWin(wins)?.nth, 2);
  // 여러 명(명예의 전당 전체)
  const many = decodeRecords(encodeRecords([r, recordOf({ id: 'yh', name: '영희', school: '' }, newSave(), 5)]))!;
  assert.deepEqual(many.map((m) => `${m.name}@${m.id}`), ['민수 짱@minsu01', '영희@yh']);
});

test('우승자 명단: 적은 바퀴가 언제나 위, 같은 점수는 공동 순위', () => {
  const who = (name: string) => ({ id: name, name, school: '' });
  const a = recordOf(who('빠른이'), { ...newSave(), wins: [{ nth: 1, laps: 4, grade: 'C', score: 300, at: 10 }] }, 1);
  const b = recordOf(who('꼼꼼이'), { ...newSave(), wins: [{ nth: 1, laps: 5, grade: 'S', score: 1990, at: 5 }] }, 2);
  const c = recordOf(who('쌍둥이'), { ...newSave(), wins: [{ nth: 1, laps: 4, grade: 'C', score: 305, at: 20 }] }, 3);
  const d = recordOf(who('느긋이'), { ...newSave(), wins: [{ nth: 1, laps: 20, grade: 'S', score: 1500, at: 1 }, { nth: 2, laps: 4, grade: 'S', score: 1500, at: 30 }] }, 4);
  const list = rankWinners([a, b, c, d]);
  assert.deepEqual(list.map((w) => `${w.name}${w.nth}:${w.rank}${w.tied ? '=' : ''}`), ['느긋이2:1', '빠른이1:2=', '쌍둥이1:2=', '꼼꼼이1:4', '느긋이1:5']);
  assert.ok(list[1].points > list[3].points);
});

test('친구 기록은 같은 이름이면 더 새 것만 남고, 명예의 전당에 함께 나온다', () => {
  const s = memory();
  const yh = { id: 'yh', name: '영희', school: '' };
  const old = { ...recordOf(yh, { ...newSave(), best: 10 }, 1), friend: true };
  const fresh = { ...recordOf(yh, { ...newSave(), best: 50 }, 2), friend: true };
  assert.ok(addFriend(s, fresh));
  assert.equal(addFriend(s, old), false);
  assert.equal(loadFriends(s)[0].best, 50);
  const users = new Users(s);
  users.register('민수', '1234');
  const names = users.records().map((r) => `${displayName(r)}${r.friend ? '*' : ''}`);
  assert.deepEqual(names, ['영희*', '민수']);
  assert.ok(addFriend(s, { ...fresh, updated: 3, wins: [{ nth: 1, laps: 4, grade: 'S', score: 1000, at: 3 }] }));
  assert.deepEqual(users.winners().map((w) => `${w.name}:${w.rank}`), ['영희:1']);
});

test('업데이트해도 학생이 사라지지 않는다: 한 글자 이름, 깨진 저장, 복사본', () => {
  const acc = (name: string) => ({ name, salt: 'abc', hash: hashPassword('abc', '1234'), created: 1, updated: 2, save: { ...newSave(), coins: 5 } });
  // 1) 옛 버전의 한 글자 이름도 그대로 살아 있고 그 아이디로 들어간다
  const s = memory();
  s.setItem(USERS_KEY, JSON.stringify({ v: 1, current: '민', accounts: { '민': acc('민'), '영희': acc('영희') } }));
  let users = new Users(s);
  assert.deepEqual(users.list().map((a) => a.id).sort(), ['민', '영희']);
  assert.ok('save' in users.login('민', '1234'));
  // 2) 저장이 깨져 못 읽어도 새 가입이 기존 학생을 덮어쓰지 않는다(복사본에서 되살린다)
  const good = s.map.get(USERS_KEY)!;
  s.setItem(USERS_BACKUP_KEY, good);
  s.setItem(USERS_KEY, '{broken json');
  users = new Users(s);
  assert.deepEqual(users.list().map((a) => a.id).sort(), ['민', '영희']);
  users.register('새친구', '1234');
  assert.deepEqual(new Users(s).list().map((a) => a.id).sort(), ['민', '새친구', '영희']);
  // 3) 메모리에 없는 계정이 저장소에 생겨도(다른 탭에서 가입) 쓸 때 지우지 않는다
  const other = JSON.parse(s.map.get(USERS_KEY)!);
  other.accounts['다른탭'] = { ...acc('다른탭'), id: '다른탭' };
  s.setItem(USERS_KEY, JSON.stringify(other));
  users.persist();
  assert.ok(new Users(s).has('다른탭'));
  // 4) 저장소가 안 써지면 writeFailed 로 알려 준다
  const bad = memory();
  bad.setItem = () => { throw new Error('quota'); };
  const u2 = new Users(bad);
  u2.register('a1', '1234');
  assert.ok(u2.writeFailed);
});
