// 최종 시험의 보스(글자 도둑 대왕) 연출 — DOM/CSS 애니메이션

const $ = <T extends HTMLElement = HTMLElement>(id: string) => document.getElementById(id) as T;

export const BOSS_NAME = '글자 도둑 대왕';
const FACES = ['👹', '😈', '🔥'];
const TAUNT = {
  intro: ['크하하! 글자는 전부 내 거다!', '글자를 되찾고 싶으면 직접 써 봐라!'],
  hurt: ['으악!', '아야!', '이, 이럴 수가!', '크윽… 제법인데?', '내 글자가!'],
  wrong: ['흥! 그건 다른 글자잖아!', '크하하, 틀렸다!', '그 정도로는 어림없지!', '다시 잘 들어 봐라!'],
  unread: ['뭐라고 쓴 거야? 크게 또박또박!', '글자가 안 보이는데? 더 크게!'],
  timeout: ['시간 끝! 내 차례다!', '느려 터졌군! 받아라!'],
  rage: ['이제 진짜 화났다!!', '시간을 더 줄여 주마!'],
  beaten: ['으아아악… 글자를 돌려주마…!'],
};

function pick(list: string[]): string {
  return list[Math.floor(Math.random() * list.length)];
}

export class BossView {
  private root = $('boss');
  private sprite = $('boss-sprite');
  private bar = $('boss-hp-bar');
  private hp = $('boss-hp-text');
  private bubble = $('boss-say');
  private sayTimer = 0;
  private phase = 0;

  show(on: boolean): void {
    this.root.hidden = !on;
    if (on) this.setPhase(0, true);
  }

  setHp(cur: number, max: number): void {
    const ratio = max ? cur / max : 0;
    this.bar.style.width = `${Math.max(0, ratio) * 100}%`;
    this.hp.textContent = `${BOSS_NAME}  ${cur} / ${max}`;
  }

  /** 체력 단계(0 평상·1 화남·2 분노)에 따라 얼굴과 색이 바뀐다 */
  setPhase(phase: number, silent = false): void {
    if (phase === this.phase && !silent) return;
    const raged = phase > this.phase;
    this.phase = phase;
    this.root.dataset.phase = String(phase);
    this.sprite.textContent = FACES[phase];
    if (raged && !silent) this.say(pick(TAUNT.rage), 1800);
  }

  private animate(cls: string, ms: number): void {
    this.sprite.classList.remove('hurt', 'attack', 'beaten', 'intro');
    void this.sprite.offsetWidth;
    this.sprite.classList.add(cls);
    setTimeout(() => this.sprite.classList.remove(cls), ms);
  }

  intro(): void {
    this.animate('intro', 1500);
    this.say(pick(TAUNT.intro), 2600);
  }

  hurt(): void {
    this.animate('hurt', 450);
    this.say(pick(TAUNT.hurt), 1200);
  }

  attack(kind: 'wrong' | 'timeout'): void {
    this.animate('attack', 650);
    this.say(pick(TAUNT[kind]), 1800);
  }

  unread(): void {
    this.say(pick(TAUNT.unread), 1800);
  }

  beaten(): void {
    this.animate('beaten', 1600);
    this.say(pick(TAUNT.beaten), 2200);
  }

  say(text: string, ms: number): void {
    this.bubble.textContent = text;
    this.bubble.classList.add('show');
    clearTimeout(this.sayTimer);
    this.sayTimer = window.setTimeout(() => this.bubble.classList.remove('show'), ms);
  }
}
