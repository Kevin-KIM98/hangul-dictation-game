// Three.js 렌더: 놀이공원 하늘, 글자 풍선, 물총, 발사 연출
import * as THREE from 'three';
import { buildGun, buildWorld, type Gun, type Theme, type World } from './world.ts';

const EYE = new THREE.Vector3(0, 1.6, 0);
const COLORS = [0xff6b6b, 0xffc93c, 0x3ddc97, 0x4dabf7, 0xb48cff, 0xff9f43];
const MAX_PARTICLES = 320;
const BONUS_TIME = 8; // 보너스 별 풍선이 화면을 가로지르는 시간(초)
const FONT = '"Jua", "Malgun Gothic", "Apple SD Gothic Neo", sans-serif';

export interface Balloon {
  ch: string;
  group: THREE.Group;
  base: THREE.Vector3;
  label: THREE.Sprite;
  halo: THREE.Sprite;
  color: number;
  phase: number;
  age: number;
  wobble: number;
  hint: boolean;
  /** 반지름 배율 */
  size: number;
  bonus: boolean;
}

function labelTexture(ch: string): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 192;
  const g = c.getContext('2d')!;
  g.font = `150px ${FONT}`;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.lineJoin = 'round';
  g.lineWidth = 22;
  g.strokeStyle = '#ffffff';
  g.strokeText(ch, 96, 104);
  g.fillStyle = '#1d2b53';
  g.fillText(ch, 96, 104);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function haloTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(64, 64, 20, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,0)');
  grad.addColorStop(0.55, 'rgba(255,244,150,0.95)');
  grad.addColorStop(1, 'rgba(255,244,150,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

/** 동그란 물방울(파티클용) */
function dropTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.7, 'rgba(255,255,255,1)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}

/** 총구에서 퍼지는 물보라 고리 */
function splashTexture(): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(64, 64, 8, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,0.95)');
  grad.addColorStop(0.45, 'rgba(170,228,255,0.7)');
  grad.addColorStop(0.75, 'rgba(120,205,255,0.35)');
  grad.addColorStop(1, 'rgba(120,205,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}

const RECOIL_Q = new THREE.Quaternion();
const RECOIL_E = new THREE.Euler();
const SHOT_TIME = 0.2;

function emojiTexture(emoji: string): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  g.font = '50px "Segoe UI Emoji", "Apple Color Emoji", "Noto Color Emoji", sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(emoji, 32, 36);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/** 풍선이 터질 때 효과: 입자 모양·개수·세기. ring 은 퍼지는 고리, fireworks 는 하늘에 덤으로 터지는 불꽃 수 */
const POP_FX: Record<string, { emoji?: string; count: number; power: number; party?: boolean; size: number; ring?: boolean; fireworks?: number; shake?: number }> = {
  'pop.drop': { count: 1, power: 1, size: 0.36 },
  'pop.star': { emoji: '⭐', count: 0.8, power: 1.1, size: 0.75 },
  'pop.heart': { emoji: '💖', count: 0.8, power: 1.1, size: 0.75 },
  'pop.flower': { emoji: '🌸', count: 1, power: 0.8, size: 0.7 },
  'pop.confetti': { count: 1.6, power: 1.3, party: true, size: 0.4 },
  'pop.firework': { count: 2.3, power: 1.8, party: true, size: 0.44, ring: true },
  'pop.galaxy': { emoji: '✨', count: 2.4, power: 1.5, size: 0.8, ring: true, fireworks: 1 },
  'pop.dragon': { emoji: '🔥', count: 3, power: 2.3, party: true, size: 0.85, ring: true, fireworks: 3, shake: 0.9 },
};
/** 물줄기: 색·굵기, sparkle 은 날아가는 동안 반짝이가 흩어진다 */
const STREAMS: Record<string, { color: number; width: number; rainbow?: boolean; sparkle?: boolean }> = {
  'stream.water': { color: 0xd4f1ff, width: 1 },
  'stream.lemon': { color: 0xfff27a, width: 1 },
  'stream.berry': { color: 0xffb3d1, width: 1 },
  'stream.mint': { color: 0x9ffcf0, width: 1.15 },
  'stream.lava': { color: 0xff7a1a, width: 1.7 },
  'stream.rainbow': { color: 0xffffff, width: 1.2, rainbow: true },
  'stream.dragon': { color: 0xffffff, width: 2.1, rainbow: true, sparkle: true },
};
const MAX_STICKERS = 24;

export class Stage {
  portrait = false;
  balloons: Balloon[] = [];
  bonus: Balloon | null = null;

  private renderer: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(58, 1, 0.1, 400);
  private canvas: HTMLCanvasElement;
  private raycaster = new THREE.Raycaster();
  private time = 0;

  private yaw = 0;
  private pitch = 0;
  private basePitch = 0;
  private yawSpread = 0.7;
  private pitchMin = 0.02;
  private pitchMax = 0.5;
  private radius = 1.25;

  private sphereGeo = new THREE.SphereGeometry(1, 24, 18);
  private knotGeo = new THREE.ConeGeometry(0.14, 0.2, 8);
  private stringGeo = new THREE.CylinderGeometry(0.012, 0.012, 1.6, 4);
  // 밤 배경에서도 색이 죽지 않도록 살짝 스스로 빛나게 한다
  private balloonMats = COLORS.map((c) => new THREE.MeshStandardMaterial({ color: c, roughness: 0.3, metalness: 0.05, emissive: c, emissiveIntensity: 0.22 }));
  private stringMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
  private haloMat = new THREE.SpriteMaterial({ map: haloTexture(), depthWrite: false, transparent: true });

  private gunModel: Gun = buildGun();
  private gun = this.gunModel.group;
  private world!: World;
  private hemi = new THREE.HemisphereLight(0xffffff, 0xa6e3a1, 2.1);
  private sunLight = new THREE.DirectionalLight(0xfff3d6, 1.6);
  private nightShow = false;
  private drift = 1;
  private popId = 'pop.drop';
  private stream = STREAMS['stream.water'];
  private gunSize = 1;
  private rings: THREE.Sprite[] = [];
  private ringLife: number[] = [];
  private stickers: { sprite: THREE.Sprite; base: THREE.Vector3; phase: number }[] = [];
  private pMat!: THREE.PointsMaterial;
  private pTextures = new Map<string, THREE.Texture>();
  private goldMat = new THREE.MeshStandardMaterial({ color: 0xffd23f, roughness: 0.2, metalness: 0.3, emissive: 0x8a5a00 });
  private fireworks: { at: number; pos: THREE.Vector3 }[] = [];
  private recoil = 0;
  private aimNdc = new THREE.Vector2(); // 총이 겨누는 화면 위치
  private aimHold = 0; // 겨눈 자세를 유지하는 남은 시간(초)
  private gunQuat = new THREE.Quaternion();
  private gunRest = new THREE.Vector3();
  private kick = 0; // 발사 반동으로 화면이 살짝 들리는 정도
  private shaking = 0;
  private beam: THREE.Mesh;
  private shotT = -1; // 0..1 진행, 음수면 꺼짐
  private shotEnd = new THREE.Vector3();
  private splash: THREE.Sprite;
  private splashLife = 0;

  private pGeo = new THREE.BufferGeometry();
  private pPos = new Float32Array(MAX_PARTICLES * 3);
  private pCol = new Float32Array(MAX_PARTICLES * 3);
  private pVel = new Float32Array(MAX_PARTICLES * 3);
  private pLife = new Float32Array(MAX_PARTICLES);
  private pNext = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.camera.rotation.order = 'YXZ';
    this.camera.position.copy(EYE);
    this.scene.add(this.camera);

    this.sunLight.position.set(6, 12, 8);
    this.scene.add(this.hemi, this.sunLight);

    this.world = buildWorld(this.scene);
    this.camera.add(this.gun);

    this.beam = new THREE.Mesh(
      new THREE.CylinderGeometry(0.11, 0.02, 1, 10, 1, true).rotateX(Math.PI / 2),
      new THREE.MeshBasicMaterial({ color: 0xd4f1ff, transparent: true, opacity: 0.9, depthWrite: false }),
    );
    this.beam.visible = false;
    this.beam.frustumCulled = false;
    this.scene.add(this.beam);

    this.splash = new THREE.Sprite(
      new THREE.SpriteMaterial({ map: splashTexture(), transparent: true, depthWrite: false, depthTest: false }),
    );
    this.splash.position.copy(this.gunModel.muzzle);
    this.splash.visible = false;
    this.gun.add(this.splash);

    const ringMat = new THREE.SpriteMaterial({ map: haloTexture(), transparent: true, depthWrite: false, opacity: 0 });
    for (let i = 0; i < 4; i++) {
      const ring = new THREE.Sprite(ringMat.clone());
      ring.visible = false;
      this.scene.add(ring);
      this.rings.push(ring);
      this.ringLife.push(0);
    }

    this.pPos.fill(-999);
    this.pGeo.setAttribute('position', new THREE.BufferAttribute(this.pPos, 3));
    this.pGeo.setAttribute('color', new THREE.BufferAttribute(this.pCol, 3));
    this.pTextures.set('pop.drop', dropTexture());
    this.pMat = new THREE.PointsMaterial({ size: 0.36, map: this.pTextures.get('pop.drop'), vertexColors: true, transparent: true, alphaTest: 0.2, depthWrite: false });
    const points = new THREE.Points(this.pGeo, this.pMat);
    points.frustumCulled = false;
    this.scene.add(points);

    this.resize();
  }

  resize(): void {
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.renderer.setSize(w, h, false);
    const aspect = w / h;
    this.portrait = aspect < 1;
    this.camera.aspect = aspect;
    this.camera.fov = this.portrait ? 72 : 58;
    this.camera.updateProjectionMatrix();

    const vHalf = THREE.MathUtils.degToRad(this.camera.fov / 2);
    const hHalf = Math.atan(Math.tan(vHalf) * aspect);
    // 풍선은 모두 기본 시야 안에, 상단 글자판을 피해 조금 아래쪽에 배치
    this.yawSpread = THREE.MathUtils.clamp(hHalf * 0.82, 0.2, 0.8);
    this.pitchMax = this.portrait ? 0.6 : 0.46;
    this.basePitch = (this.pitchMin + this.pitchMax) / 2 + vHalf * 0.06;
    this.radius = this.portrait ? 0.88 : 1.25;
    this.applyGunSize();
    this.gun.position.copy(this.gunRest);
    this.yaw = 0;
    this.pitch = this.basePitch;
    for (const b of this.balloons) this.place(b);
  }

  /** 바퀴마다 바뀌는 배경. 고른 테마를 돌려준다 */
  setTheme(index: number): Theme {
    const th = this.world.setTheme(index);
    this.hemi.color.set(th.hemi[0]);
    this.hemi.groundColor.set(th.hemi[1]);
    this.hemi.intensity = th.hemi[2];
    this.sunLight.color.set(th.dir[0]);
    this.sunLight.intensity = th.dir[1];
    this.nightShow = th.fireworks;
    return th;
  }

  /** 풍선이 떠다니는 빠르기(난이도) */
  setDrift(mult: number): void {
    this.drift = mult;
  }

  private applyGunSize(): void {
    this.gun.scale.setScalar((this.portrait ? 0.38 : 0.5) * this.gunSize);
    // 큰 물총은 풍선을 가리지 않게 화면 모서리 바깥쪽으로 밀어 총구만 크게 보인다
    const k = Math.max(0, this.gunSize - 1);
    this.gunRest.set((this.portrait ? 0.16 : 0.34) + k * 0.3, -0.34 - k * 0.36, -0.8);
  }

  /** 상점에서 고른 물총(크기 배율 포함)·물줄기·터지는 효과 */
  setLoadout(l: { skin: string; stream: string; pop: string }, gunSize = 1): void {
    this.gunModel.setSkin(l.skin);
    this.gunSize = gunSize;
    this.applyGunSize();
    this.stream = STREAMS[l.stream] ?? STREAMS['stream.water'];
    this.popId = POP_FX[l.pop] ? l.pop : 'pop.drop';
    const fx = POP_FX[this.popId];
    const key = fx.emoji ? this.popId : 'pop.drop';
    if (!this.pTextures.has(key)) this.pTextures.set(key, emojiTexture(fx.emoji!));
    this.pMat.map = this.pTextures.get(key)!;
    this.pMat.size = fx.size;
    this.pMat.needsUpdate = true;
    (this.beam.material as THREE.MeshBasicMaterial).color.set(this.stream.color);
  }

  /**
   * 학생이 모은 스티커(동물 이모지)를 잔디밭 곳곳에 세워 둔다.
   * 학생마다 모은 스티커가 달라서 배경이 달라 보인다.
   */
  setStickers(list: string[]): void {
    for (const s of this.stickers) {
      this.scene.remove(s.sprite);
      s.sprite.material.map?.dispose();
      s.sprite.material.dispose();
    }
    this.stickers = [];
    const seen = [...new Set(list)].slice(0, MAX_STICKERS);
    seen.forEach((emoji, i) => {
      // 같은 스티커는 늘 같은 자리에(학생마다 익숙한 풍경이 되도록)
      const h = [...emoji].reduce((n, c) => (n * 31 + c.codePointAt(0)!) % 9973, 7);
      const yaw = ((i / Math.max(1, seen.length)) * 2 - 1) * 1.15 + ((h % 100) / 100 - 0.5) * 0.25;
      const d = 5.5 + (h % 7) * 0.8;
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: emojiTexture(emoji), transparent: true, depthWrite: false }));
      const size = 1.1 + (h % 5) * 0.12;
      sprite.scale.set(size, size, 1);
      const base = new THREE.Vector3(Math.sin(yaw) * d, size * 0.5 + 0.05, -Math.cos(yaw) * d);
      sprite.position.copy(base);
      this.scene.add(sprite);
      this.stickers.push({ sprite, base, phase: h });
    });
  }

  private ring(at: THREE.Vector3, color: number): void {
    const i = this.ringLife.findIndex((l) => l <= 0);
    if (i < 0) return;
    const r = this.rings[i];
    r.position.copy(at);
    r.material.color.set(color);
    r.visible = true;
    this.ringLife[i] = 1;
  }

  /** 총이 화면의 이 위치를 겨누게 한다 */
  aim(ndc: { x: number; y: number }): void {
    this.aimNdc.set(ndc.x, ndc.y);
    this.aimHold = 1.2;
  }

  /** 풍선이 터질 때 화면 흔들림 */
  shake(amount: number): void {
    this.shaking = Math.max(this.shaking, amount);
  }

  /** 총구가 조준 지점을 향하도록 회전값을 구한다. rate=1이면 즉시 */
  private orientGun(rate: number): void {
    const tan = Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2));
    const target = new THREE.Vector3(this.aimNdc.x * tan * this.camera.aspect, this.aimNdc.y * tan, -1).multiplyScalar(13);
    // Matrix4.lookAt 은 -z 축이 target 을 향하게 만든다(총열이 -z)
    const want = new THREE.Quaternion().setFromRotationMatrix(new THREE.Matrix4().lookAt(this.gunRest, target, THREE.Object3D.DEFAULT_UP));
    this.gunQuat.slerp(want, rate);
  }

  /** 시야 이동 (라디안). 범위 제한 */
  look(dyaw: number, dpitch: number): void {
    // 풍선이 놓이는 범위보다 넉넉하게: 가장자리 풍선도 조준점 한가운데에 올 수 있어야 한다
    const yawMax = this.yawSpread + 0.25;
    this.yaw = THREE.MathUtils.clamp(this.yaw + dyaw, -yawMax, yawMax);
    this.pitch = THREE.MathUtils.clamp(this.pitch + dpitch, this.pitchMin - 0.2, this.pitchMax + 0.2);
  }

  private place(b: Balloon): void {
    const minGap = this.radius * 2.4;
    let best = new THREE.Vector3();
    let bestGap = -1;
    for (let i = 0; i < 40; i++) {
      const yaw = (Math.random() * 2 - 1) * this.yawSpread;
      const pitch = this.pitchMin + Math.random() * (this.pitchMax - this.pitchMin);
      const d = 12.5 + Math.random() * 3;
      const p = new THREE.Vector3(
        Math.sin(yaw) * Math.cos(pitch) * d,
        EYE.y + Math.sin(pitch) * d,
        -Math.cos(yaw) * Math.cos(pitch) * d,
      );
      // 화면에서 겹치지 않도록 같은 거리로 투영해 간격을 잰다
      const flat = p.clone().sub(EYE).setLength(14);
      let gap = Infinity;
      for (const o of this.balloons) {
        if (o !== b) gap = Math.min(gap, o.base.clone().sub(EYE).setLength(14).distanceTo(flat));
      }
      if (gap > bestGap) {
        bestGap = gap;
        best = p;
      }
      if (gap >= minGap) break;
    }
    b.base.copy(best);
    b.group.position.copy(best);
  }

  spawn(ch: string): Balloon {
    const color = Math.floor(Math.random() * COLORS.length);
    const group = new THREE.Group();
    const body = new THREE.Mesh(this.sphereGeo, this.balloonMats[color]);
    body.scale.set(1, 1.12, 1);
    const knot = new THREE.Mesh(this.knotGeo, this.balloonMats[color]);
    knot.position.y = -1.18;
    const string = new THREE.Mesh(this.stringGeo, this.stringMat);
    string.position.y = -2.05;
    const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: labelTexture(ch), transparent: true }));
    label.scale.setScalar(1.85);
    const halo = new THREE.Sprite(this.haloMat);
    halo.scale.setScalar(3.6);
    halo.visible = false;
    group.add(halo, body, knot, string, label);
    group.scale.setScalar(0.001);
    this.scene.add(group);

    const b: Balloon = {
      ch,
      group,
      base: new THREE.Vector3(),
      label,
      halo,
      color: COLORS[color],
      phase: Math.random() * Math.PI * 2,
      age: 0,
      wobble: 0,
      hint: false,
      size: 1,
      bonus: false,
    };
    this.place(b);
    this.balloons.push(b);
    return b;
  }

  private remove(b: Balloon): void {
    if (b === this.bonus) this.bonus = null;
    this.scene.remove(b.group);
    b.label.material.map?.dispose();
    b.label.material.dispose();
    this.balloons = this.balloons.filter((x) => x !== b);
  }

  pop(b: Balloon): void {
    const fx = POP_FX[this.popId];
    this.burst(b.group.position, fx.emoji ? 0xffffff : b.color, Math.round((b.bonus ? 60 : 26) * fx.count), (b.bonus ? 1.8 : 1) * fx.power, fx.party);
    if (fx.ring) this.ring(b.group.position, fx.party ? 0xffffff : b.color);
    if (fx.fireworks) this.celebrate(fx.fireworks);
    if (fx.shake) this.shake(fx.shake);
    this.remove(b);
  }

  wobble(b: Balloon): void {
    b.wobble = 0.45;
  }

  clearBalloons(): void {
    for (const b of this.balloons.slice()) this.remove(b);
    if (this.bonus) this.remove(this.bonus);
  }

  /** 화면을 가로질러 날아가는 보너스 별 풍선 */
  spawnBonus(): void {
    if (this.bonus) return;
    const b = this.spawn('⭐');
    this.balloons = this.balloons.filter((x) => x !== b);
    (b.group.children[1] as THREE.Mesh).material = this.goldMat;
    (b.group.children[2] as THREE.Mesh).material = this.goldMat;
    b.halo.visible = true;
    b.color = 0xffd23f;
    b.size = 0.72;
    b.bonus = true;
    b.phase = Math.random() < 0.5 ? 1 : -1; // 날아가는 방향
    this.bonus = b;
  }

  /** 문항을 맞혔을 때 하늘에 터지는 불꽃놀이 */
  celebrate(count = 7): void {
    for (let i = 0; i < count; i++) {
      const yaw = this.yaw + (Math.random() * 2 - 1) * this.yawSpread * 1.1;
      const pitch = this.pitchMin + 0.1 + Math.random() * this.pitchMax;
      const d = 16 + Math.random() * 5;
      this.fireworks.push({
        at: this.time + i * 0.22,
        pos: new THREE.Vector3(Math.sin(-yaw) * Math.cos(pitch) * d, EYE.y + Math.sin(pitch) * d, -Math.cos(yaw) * Math.cos(pitch) * d),
      });
    }
  }

  setHint(ch: string | null): void {
    for (const b of this.balloons) b.hint = ch !== null && b.ch === ch;
  }

  /** 풍선의 화면 좌표(px) */
  screenPos(b: Balloon): { x: number; y: number } {
    this.camera.rotation.set(this.pitch, this.yaw, 0);
    this.camera.updateMatrixWorld();
    const v = b.group.position.clone().project(this.camera);
    const r = this.canvas.getBoundingClientRect();
    return { x: r.left + ((v.x + 1) / 2) * r.width, y: r.top + ((1 - v.y) / 2) * r.height };
  }

  /**
   * 발사. ndc가 null이면 화면 중앙(조준점), 아니면 그 화면 위치로 쏜다.
   * tolerance는 풍선 반지름 대비 판정 여유(아이용으로 넉넉하게).
   */
  fire(ndc: { x: number; y: number } | null, tolerance: number): Balloon | null {
    this.camera.rotation.set(this.pitch, this.yaw, 0);
    this.camera.updateMatrixWorld();
    const aim = new THREE.Vector2(ndc?.x ?? 0, ndc?.y ?? 0);
    this.raycaster.setFromCamera(aim, this.camera);
    const { origin, direction } = this.raycaster.ray;

    let hit: Balloon | null = null;
    let bestRatio = tolerance;
    const rel = new THREE.Vector3();
    for (const b of this.bonus ? [...this.balloons, this.bonus] : this.balloons) {
      rel.copy(b.group.position).sub(origin);
      const t = rel.dot(direction);
      if (t <= 0) continue;
      const perp = Math.sqrt(Math.max(0, rel.lengthSq() - t * t));
      const ratio = perp / (this.radius * b.size);
      if (ratio < bestRatio) {
        bestRatio = ratio;
        hit = b;
      }
    }

    const end = hit ? hit.group.position.clone() : origin.clone().addScaledVector(direction, 40);
    this.aim(aim);
    this.orientGun(1); // 쏘는 순간에는 총구가 정확히 목표를 향한다
    this.gun.quaternion.copy(this.gunQuat);
    this.kick = 1;
    this.shotEnd.copy(end);
    this.shotT = 0;
    this.splashLife = 1;
    this.recoil = 1;
    if (!hit) this.burst(end, 0x9be7ff, 6);
    return hit;
  }

  private burst(at: THREE.Vector3, color: number, count: number, power = 1, party = false): void {
    const c = new THREE.Color(color);
    for (let n = 0; n < count; n++) {
      if (party) c.set(COLORS[Math.floor(Math.random() * COLORS.length)]);
      const i = this.pNext;
      this.pNext = (this.pNext + 1) % MAX_PARTICLES;
      this.pPos.set([at.x, at.y, at.z], i * 3);
      const v = new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.3, Math.random() - 0.5).normalize();
      v.multiplyScalar((2 + Math.random() * 4) * power);
      this.pVel.set([v.x, v.y, v.z], i * 3);
      this.pCol.set([c.r, c.g, c.b], i * 3);
      this.pLife[i] = 0.5 + Math.random() * 0.3;
    }
    this.pGeo.attributes.color.needsUpdate = true;
  }

  update(dt: number): void {
    this.time += dt;
    const t = this.time;
    this.kick = Math.max(0, this.kick - dt * 9);
    this.shaking = Math.max(0, this.shaking - dt * 5);
    this.camera.rotation.set(
      this.pitch + this.kick * 0.012 + Math.sin(t * 71) * 0.004 * this.shaking,
      this.yaw + Math.sin(t * 57) * 0.004 * this.shaking,
      0,
    );
    this.world.update(t);
    if (this.nightShow && Math.random() < dt * 0.3) this.celebrate(1);
    if (this.stream.rainbow) (this.beam.material as THREE.MeshBasicMaterial).color.setHSL((t * 1.5) % 1, 0.9, 0.72);
    for (let i = 0; i < this.rings.length; i++) {
      if (this.ringLife[i] <= 0) continue;
      this.ringLife[i] = Math.max(0, this.ringLife[i] - dt * 1.8);
      const k = 1 - this.ringLife[i];
      const r = this.rings[i];
      r.scale.setScalar(this.radius * (1.5 + k * 7));
      r.material.opacity = this.ringLife[i] * 0.9;
      r.visible = this.ringLife[i] > 0;
    }
    for (const s of this.stickers) {
      s.sprite.position.y = s.base.y + Math.sin(t * 1.6 + s.phase) * 0.06;
      s.sprite.material.rotation = Math.sin(t * 1.1 + s.phase) * 0.08;
    }

    while (this.fireworks.length && this.fireworks[0].at <= t) {
      const f = this.fireworks.shift()!;
      this.burst(f.pos, POP_FX[this.popId].emoji ? 0xffffff : COLORS[Math.floor(Math.random() * COLORS.length)], 36, 1.6);
    }

    if (this.bonus) {
      const b = this.bonus;
      const k = b.age / BONUS_TIME;
      if (k >= 1) this.remove(b);
      else {
        const yaw = b.phase * (k * 2 - 1) * (this.yawSpread + 0.25);
        const pitch = this.pitchMax * 0.8 + Math.sin(t * 2.2) * 0.05;
        b.base.set(Math.sin(yaw) * Math.cos(pitch) * 11, EYE.y + Math.sin(pitch) * 11, -Math.cos(yaw) * Math.cos(pitch) * 11);
      }
    }
    const toEye = new THREE.Vector3();
    for (const b of this.bonus ? [...this.balloons, this.bonus] : this.balloons) {
      b.age += dt;
      const grow = Math.min(1, b.age / 0.35);
      let s = this.radius * b.size * (1 - Math.pow(1 - grow, 3)) * (1 + 0.12 * Math.sin(grow * Math.PI));
      if (b.hint) s *= 1 + 0.08 * Math.sin(t * 7);
      b.group.scale.setScalar(Math.max(s, 0.001));
      b.halo.visible = b.hint || b.bonus;
      if (b.bonus) b.group.rotation.z = Math.sin(t * 5) * 0.15;

      const sway = 0.45 + (this.drift - 1) * 0.3;
      let x = b.base.x + (b.bonus ? 0 : Math.sin(t * 0.55 * this.drift + b.phase) * sway);
      const y = b.base.y + Math.sin(t * 0.8 * this.drift + b.phase * 2) * (0.35 + (this.drift - 1) * 0.15);
      if (b.wobble > 0) {
        b.wobble -= dt;
        x += Math.sin(t * 45) * 0.3 * Math.max(b.wobble, 0);
      }
      b.group.position.set(x, y, b.base.z);
      toEye.copy(EYE).sub(b.group.position).normalize();
      b.label.position.copy(toEye).multiplyScalar(1.12);
    }

    // 조준: 겨눈 자세를 잠깐 유지하다가 가운데로 돌아온다
    if (this.aimHold > 0) this.aimHold -= dt;
    else this.aimNdc.multiplyScalar(Math.max(0, 1 - dt * 4));
    this.orientGun(1 - Math.exp(-dt * 20));
    // 반동: 뒤로 밀리며 총구가 들렸다가 스프링처럼 돌아온다
    this.recoil = Math.max(0, this.recoil - dt * 5.5);
    const punch = this.recoil * this.recoil;
    this.gun.quaternion.copy(this.gunQuat).multiply(RECOIL_Q.setFromEuler(RECOIL_E.set(punch * 0.28, 0, punch * -0.05)));
    this.gun.position.set(
      this.gunRest.x,
      this.gunRest.y + Math.sin(t * 1.6) * 0.006 - punch * 0.02,
      this.gunRest.z + punch * 0.13,
    );
    this.gunModel.animate(this.recoil, t);

    // 물줄기: 총구에서 뻗어 나간 뒤 꼬리부터 사라진다
    if (this.shotT >= 0) {
      this.shotT += dt / SHOT_TIME;
      if (this.shotT >= 1) {
        this.shotT = -1;
        this.beam.visible = false;
      } else {
        this.gun.updateWorldMatrix(true, false);
        const muzzle = this.gun.localToWorld(this.gunModel.muzzle.clone());
        const head = Math.min(1, this.shotT / 0.45);
        const tail = Math.max(0, (this.shotT - 0.4) / 0.6);
        const from = muzzle.clone().lerp(this.shotEnd, tail);
        const to = muzzle.clone().lerp(this.shotEnd, head);
        this.beam.position.copy(from).lerp(to, 0.5);
        this.beam.lookAt(to);
        const w = this.stream.width * (0.8 + 0.2 * this.gunSize);
        this.beam.scale.set(w, w, Math.max(from.distanceTo(to), 0.01));
        this.beam.visible = true;
        // 용의 숨결: 물줄기를 따라 반짝이가 흩날린다
        if (this.stream.sparkle) this.burst(from.clone().lerp(to, Math.random()), 0xffffff, 2, 0.5, true);
      }
    }
    if (this.splashLife > 0) {
      this.splashLife = Math.max(0, this.splashLife - dt * 6);
      const k = 1 - this.splashLife;
      this.splash.visible = this.splashLife > 0;
      this.splash.scale.setScalar(0.12 + k * 0.3);
      this.splash.material.opacity = this.splashLife;
    }

    for (let i = 0; i < MAX_PARTICLES; i++) {
      if (this.pLife[i] <= 0) continue;
      this.pLife[i] -= dt;
      const k = i * 3;
      if (this.pLife[i] <= 0) {
        this.pPos[k + 1] = -999;
        continue;
      }
      this.pVel[k + 1] -= 9 * dt;
      this.pPos[k] += this.pVel[k] * dt;
      this.pPos[k + 1] += this.pVel[k + 1] * dt;
      this.pPos[k + 2] += this.pVel[k + 2] * dt;
    }
    this.pGeo.attributes.position.needsUpdate = true;

    this.renderer.render(this.scene, this.camera);
  }

  get drawCalls(): number {
    return this.renderer.info.render.calls;
  }
}
