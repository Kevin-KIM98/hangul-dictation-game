// 실행: node --test tests/
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parseQuestions, parseSets } from '../src/scripts/questions.ts';
const sets = JSON.parse(readFileSync(new URL('../src/data/sets.json', import.meta.url), 'utf8')) as { id: string; title: string; questions: string[] }[];

test('내장 급수표: 7~12회, 회차마다 10문제', () => {
  assert.equal(sets.length, 6);
  assert.deepEqual(sets.map((s) => s.title.split(' ')[0]), ['7회', '8회', '9회', '10회', '11회', '12회']);
  for (const s of sets) assert.equal(s.questions.length, 10);
  assert.equal(new Set(sets.map((s) => s.id)).size, 6);
});

test('번호가 붙은 줄: "1 만화 영화", "2. 골고루", "3) 신기한"', () => {
  assert.deepEqual(parseQuestions('1 만화 영화\n2. 골고루 잘 먹는구나.\n3) 신기한 맷돌\n10 차례\n\n'), ['만화 영화', '골고루 잘 먹는구나.', '신기한 맷돌', '차례']);
});

test('회차 제목 줄로 여러 묶음을 나눈다', () => {
  const text = `7회 [4. 감동을 나누어요]
1 만화 영화
2 골고루 잘 먹는구나.
8회 [4. 감동을 나누어요]
1 미역도 맛있어.
`;
  const out = parseSets(text, '내 문제');
  assert.deepEqual(out.map((s) => [s.title, s.questions.length]), [['7회 [4. 감동을 나누어요]', 2], ['8회 [4. 감동을 나누어요]', 1]]);
  assert.ok(out.every((s) => s.custom && s.id.startsWith('custom-')));
  assert.notEqual(out[0].id, out[1].id);
});

test('제목이 없으면 한 묶음, JSON 도 받는다', () => {
  assert.deepEqual(parseSets('학교에 갑니다.\n꽃이 피었습니다.', '내 문제').map((s) => [s.title, s.questions]), [['내 문제', ['학교에 갑니다.', '꽃이 피었습니다.']]]);
  assert.deepEqual(parseSets('["가나", "다라"]', '파일').map((s) => s.questions), [['가나', '다라']]);
  const json = parseSets(JSON.stringify([{ title: '1급', questions: ['가'] }, { title: '2급', questions: ['나', '다'] }]), 'x');
  assert.deepEqual(json.map((s) => [s.title, s.questions.length]), [['1급', 1], ['2급', 2]]);
  assert.deepEqual(parseSets('', '빈 파일'), []);
});
