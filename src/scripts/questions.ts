// 내장 문제 / 업로드 문제 로드
import defaults from '../data/questions.json';

const KEY = 'dictation.questions.v1';
export const MAX_QUESTIONS = 30;
const MAX_LENGTH = 40;

/** .txt(한 줄에 한 문제) 또는 .json(문자열 배열 / {text} 배열) 내용을 문제 목록으로 */
export function parseQuestions(raw: string): string[] {
  let items: unknown[] | null = null;
  const text = raw.replace(/^﻿/, '').trim();
  if (text.startsWith('[') || text.startsWith('{')) {
    try {
      const data = JSON.parse(text);
      items = Array.isArray(data) ? data : Array.isArray(data?.questions) ? data.questions : null;
    } catch {
      items = null;
    }
  }
  if (!items) items = text.split(/\r?\n/);
  return items
    .map((it) => (typeof it === 'string' ? it : ((it as { text?: unknown })?.text ?? '')))
    .map((s) => String(s).replace(/^\s*\d+\s*[.)번:]\s*/, '').replace(/\s+/g, ' ').trim())
    .filter((s) => /[가-힣A-Za-z0-9]/.test(s))
    .map((s) => [...s].slice(0, MAX_LENGTH).join(''))
    .slice(0, MAX_QUESTIONS);
}

export function loadQuestions(): { list: string[]; custom: boolean } {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) ?? 'null');
    if (Array.isArray(saved) && saved.length && saved.every((s) => typeof s === 'string')) {
      return { list: saved, custom: true };
    }
  } catch {
    /* 저장소를 못 쓰면 기본 문제 */
  }
  return { list: defaults as string[], custom: false };
}

export function saveQuestions(list: string[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
  } catch {
    /* 이번 실행에서만 사용 */
  }
}

export function resetQuestions(): void {
  try {
    localStorage.removeItem(KEY);
  } catch {
    /* noop */
  }
}
