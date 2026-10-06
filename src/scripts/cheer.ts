// 틀렸을 때 아이에게 보여 주는 응원 — 순수 로직

const CHEERS = [
  '괜찮아! 다시 잘 들어 봐 💪',
  '거의 다 왔어, 한 번 더! 🌟',
  '천천히 또박또박 해 보자 😊',
  '틀려도 괜찮아, 배우는 중이야!',
  '좋아, 다음엔 맞힐 수 있어! ✨',
  '잘하고 있어! 한 번만 더 들어 봐 🎧',
  '힘내! 넌 할 수 있어 🙌',
];

/** 남은 하트에 맞춘 응원 한마디 */
export function cheerFor(heartsLeft: number, rnd: () => number = Math.random): string {
  if (heartsLeft <= 0) return '힌트를 켤게! 연한 글자를 따라 하면 돼 🌟';
  const base = CHEERS[Math.floor(rnd() * CHEERS.length)];
  return heartsLeft === 1 ? `${base} (하트 1개 남았어)` : base;
}

/** 바퀴를 끝냈을 때, 틀린 문제가 있어도 희망을 주는 말 */
export function hopeFor(failed: number, total: number): string {
  if (failed === 0) return '모두 통과! 정말 대단해요 🎉';
  const done = total - failed;
  if (done === 0) return '처음은 원래 어려워요. 한 번 더 하면 분명 늘어요 💪';
  return `${total}문제 중 ${done}문제를 해냈어요! 남은 ${failed}문제만 다시 해 보면 돼요 🌈`;
}
