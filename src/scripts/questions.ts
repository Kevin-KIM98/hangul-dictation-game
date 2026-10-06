// 문제 묶음(회차): 내장 급수표 + 올린 문제. 회차를 골라 받아쓰기를 시작한다
import defaults from '../data/sets.json' with { type: 'json' };

export interface QuestionSet {
  id: string;
  /** 예: "7회 [4. 감동을 나누어요]" */
  title: string;
  questions: string[];
  /** 올리거나 직접 쓴 문제 */
  custom?: boolean;
}

const KEY = 'dictation.sets.v1';
const LEGACY_KEY = 'dictation.questions.v1';
export const MAX_QUESTIONS = 30;
export const MAX_SETS = 40;
const MAX_LENGTH = 40;
const TITLE_MAX = 30;

/** "7회 [4. 감동을 나누어요]" 처럼 회차 제목인 줄 */
const TITLE_RE = /^\s*(?:제\s*)?\d{1,3}\s*(?:회|회차|급|단계|주차|과)(?:\s|\[|$)/;

function cleanLine(s: string): string {
  return [...String(s).replace(/^\s*\d{1,2}\s*(?:[.)번:]\s*|\s+)/, '').replace(/\s+/g, ' ').trim()].slice(0, MAX_LENGTH).join('');
}

/** 한 묶음의 문제 줄들(번호·공백 정리). 최대 30개 */
export function parseQuestions(raw: string): string[] {
  const items = splitItems(raw);
  return items
    .map(cleanLine)
    .filter((s) => /[가-힣A-Za-z0-9]/.test(s))
    .slice(0, MAX_QUESTIONS);
}

function splitItems(raw: string): string[] {
  const text = raw.replace(/^﻿/, '').trim();
  if (text.startsWith('[') || text.startsWith('{')) {
    try {
      const data = JSON.parse(text);
      const arr = Array.isArray(data) ? data : Array.isArray(data?.questions) ? data.questions : null;
      if (arr) return arr.map((it: unknown) => (typeof it === 'string' ? it : String((it as { text?: unknown })?.text ?? '')));
    } catch {
      /* 글로 본다 */
    }
  }
  return text.split(/\r?\n/);
}

export function cleanTitle(s: string): string {
  return [...s.replace(/\s+/g, ' ').trim()].slice(0, TITLE_MAX).join('');
}

function newId(): string {
  return `custom-${Date.now().toString(36)}-${Math.floor(Math.random() * 1e6).toString(36)}`;
}

/**
 * .txt / .json 을 회차 묶음들로. "7회 [...]" 같은 제목 줄이 있으면 그 줄마다 새 회차,
 * 없으면 fallbackTitle 한 묶음. JSON 은 문자열 배열(한 묶음) 또는 [{title, questions}] 배열.
 */
export function parseSets(raw: string, fallbackTitle: string): QuestionSet[] {
  const text = raw.replace(/^﻿/, '').trim();
  if (text.startsWith('[') || text.startsWith('{')) {
    try {
      const data = JSON.parse(text);
      const arr = Array.isArray(data) ? data : Array.isArray(data?.sets) ? data.sets : null;
      if (arr && arr.length && arr.every((it: unknown) => it && typeof it === 'object' && Array.isArray((it as QuestionSet).questions))) {
        return (arr as QuestionSet[])
          .map((it, i) => ({
            id: newId() + i,
            title: cleanTitle(String(it.title ?? `${fallbackTitle} ${i + 1}`)),
            questions: parseQuestions(JSON.stringify(it.questions)),
            custom: true,
          }))
          .filter((s) => s.questions.length)
          .slice(0, MAX_SETS);
      }
    } catch {
      /* 글로 본다 */
    }
  }
  const groups: { title: string; lines: string[] }[] = [];
  for (const line of splitItems(text)) {
    if (TITLE_RE.test(line)) {
      groups.push({ title: cleanTitle(line), lines: [] });
      continue;
    }
    if (!groups.length) groups.push({ title: cleanTitle(fallbackTitle), lines: [] });
    groups[groups.length - 1].lines.push(line);
  }
  return groups
    .map((g, i) => ({ id: newId() + i, title: g.title, questions: parseQuestions(g.lines.join('\n')), custom: true }))
    .filter((s) => s.questions.length)
    .slice(0, MAX_SETS);
}

function readCustom(): QuestionSet[] {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY) ?? 'null');
    if (Array.isArray(saved)) {
      return saved
        .filter((s) => s && typeof s.id === 'string' && typeof s.title === 'string' && Array.isArray(s.questions))
        .map((s) => ({ id: s.id, title: cleanTitle(s.title), questions: s.questions.filter((q: unknown) => typeof q === 'string'), custom: true }))
        .filter((s) => s.questions.length);
    }
    // 이전 버전: 문제 목록 하나
    const legacy = JSON.parse(localStorage.getItem(LEGACY_KEY) ?? 'null');
    if (Array.isArray(legacy) && legacy.length && legacy.every((s) => typeof s === 'string')) {
      const set: QuestionSet = { id: 'custom-legacy', title: '내 문제', questions: legacy, custom: true };
      writeCustom([set]);
      localStorage.removeItem(LEGACY_KEY);
      return [set];
    }
  } catch {
    /* 저장소를 못 쓰면 기본 문제 */
  }
  return [];
}

function writeCustom(list: QuestionSet[]): void {
  try {
    localStorage.setItem(KEY, JSON.stringify(list.map(({ id, title, questions }) => ({ id, title, questions }))));
  } catch {
    /* 이번 실행에서만 사용 */
  }
}

/** 기본 회차 + 올린 회차 */
export function loadSets(): QuestionSet[] {
  return [...(defaults as QuestionSet[]), ...readCustom()];
}

/** 회차 추가(같은 제목이면 바꿔치기). 추가된 회차들을 돌려준다 */
export function addSets(sets: QuestionSet[]): QuestionSet[] {
  const mine = readCustom();
  for (const s of sets) {
    const i = mine.findIndex((m) => m.title === s.title);
    if (i >= 0) mine[i] = { ...s, id: mine[i].id };
    else mine.push(s);
  }
  writeCustom(mine.slice(-MAX_SETS));
  return sets.map((s) => mine.find((m) => m.title === s.title) ?? s);
}

export function updateSet(id: string, title: string, questions: string[]): QuestionSet | null {
  const mine = readCustom();
  const i = mine.findIndex((m) => m.id === id);
  if (i < 0) return null;
  mine[i] = { ...mine[i], title: cleanTitle(title), questions };
  writeCustom(mine);
  return mine[i];
}

export function removeSet(id: string): void {
  writeCustom(readCustom().filter((m) => m.id !== id));
}

export function resetSets(): void {
  try {
    localStorage.removeItem(KEY);
    localStorage.removeItem(LEGACY_KEY);
  } catch {
    /* noop */
  }
}
