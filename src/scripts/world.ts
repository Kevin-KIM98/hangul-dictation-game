// 놀이공원 배경과 물총 모델 (절차적으로 생성, 외부 에셋 없음)
import * as THREE from 'three';

const PARTY = [0xff6b6b, 0xffc93c, 0x3ddc97, 0x4dabf7, 0xb48cff, 0xff8fc7];

function canvasTexture(w: number, h: number, draw: (g: CanvasRenderingContext2D) => void): THREE.CanvasTexture {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  draw(c.getContext('2d')!);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function stripes(a: string, b: string, count: number): THREE.CanvasTexture {
  const tex = canvasTexture(64, 8, (g) => {
    g.fillStyle = a;
    g.fillRect(0, 0, 64, 8);
    g.fillStyle = b;
    g.fillRect(0, 0, 32, 8);
  });
  tex.wrapS = THREE.RepeatWrapping;
  tex.repeat.x = count;
  return tex;
}

const lambert = (color: number, extra: THREE.MeshLambertMaterialParameters = {}) =>
  new THREE.MeshLambertMaterial({ color, ...extra });

/** 결정적 난수(매번 같은 풍경) */
function seeded(seed: number): () => number {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return s / 2147483647;
  };
}

export type Ambient = 'none' | 'petal' | 'firefly' | 'star' | 'snow';

/** 바퀴마다 바뀌는 배경 */
export interface Theme {
  name: string;
  /** 하늘(CSS 그라데이션) */
  sky: string;
  ground: number;
  path: number;
  /** 언덕·나무에 덧입히는 색과 그 정도(0~1) */
  wash: [number, number];
  cloud: number;
  sun: { color: number; size: number; angle: number; height: number };
  rainbow: boolean;
  flowers: boolean;
  /** 반구 조명 [하늘색, 땅색, 세기] */
  hemi: [number, number, number];
  /** 햇빛 [색, 세기] */
  dir: [number, number];
  ambient: Ambient;
  /** 하늘에 저절로 터지는 불꽃놀이 */
  fireworks: boolean;
}

export const THEMES: Theme[] = [
  {
    name: '봄 놀이공원',
    sky: 'linear-gradient(#3d9df0 0%, #8fd3ff 48%, #e3f6ff 78%, #bdeeb0 100%)',
    ground: 0x8fe07c, path: 0xffe8b0, wash: [0xffffff, 0], cloud: 0xffffff,
    sun: { color: 0xffffff, size: 90, angle: 0.55, height: 120 },
    rainbow: true, flowers: true,
    hemi: [0xffffff, 0xa6e3a1, 2.1], dir: [0xfff3d6, 1.6],
    ambient: 'petal', fireworks: false,
  },
  {
    name: '노을 놀이공원',
    sky: 'linear-gradient(#5b4b9e 0%, #ff8e72 46%, #ffd08a 78%, #c9d68a 100%)',
    ground: 0xb9c96a, path: 0xf6cf9a, wash: [0xff9d5c, 0.35], cloud: 0xffd0bd,
    sun: { color: 0xffa24d, size: 130, angle: -0.3, height: 38 },
    rainbow: false, flowers: true,
    hemi: [0xffd9b8, 0xc9a070, 1.9], dir: [0xff9d5c, 1.8],
    ambient: 'firefly', fireworks: false,
  },
  {
    name: '별빛 밤 축제',
    sky: 'linear-gradient(#0b1033 0%, #1d2b6b 55%, #3a4a9c 84%, #2c5a4a 100%)',
    ground: 0x2f6b55, path: 0x8f86b8, wash: [0x27408b, 0.55], cloud: 0x5a66a8,
    sun: { color: 0xe8eeff, size: 55, angle: 0.5, height: 110 },
    rainbow: false, flowers: true,
    hemi: [0xaec0ff, 0x2a4a5a, 1.7], dir: [0xcfd8ff, 1.1],
    ambient: 'star', fireworks: true,
  },
  {
    name: '눈 내리는 겨울',
    sky: 'linear-gradient(#7fb2e6 0%, #cfe6ff 55%, #f4fbff 80%, #ffffff 100%)',
    ground: 0xf4fbff, path: 0xd3e2f0, wash: [0xffffff, 0.82], cloud: 0xffffff,
    sun: { color: 0xffffff, size: 70, angle: 0.55, height: 120 },
    rainbow: false, flowers: false,
    hemi: [0xffffff, 0xdfeeff, 2.2], dir: [0xffffff, 1.3],
    ambient: 'snow', fireworks: false,
  },
  {
    name: '달나라 우주',
    sky: 'linear-gradient(#070616 0%, #1b1147 50%, #4a2a7a 85%, #6b4aa0 100%)',
    ground: 0x8b7fc0, path: 0xb9b0e0, wash: [0x7a5fd0, 0.75], cloud: 0x4a3d8a,
    sun: { color: 0x9be7ff, size: 120, angle: -0.45, height: 95 },
    rainbow: true, flowers: false,
    hemi: [0xd4c6ff, 0x4a3a7a, 1.8], dir: [0xffe6ff, 1.3],
    ambient: 'star', fireworks: true,
  },
];

export interface World {
  update(t: number): void;
  setTheme(index: number): Theme;
}

export function buildWorld(scene: THREE.Scene): World {
  const rnd = seeded(7);
  const m = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const e = new THREE.Euler();
  const col = new THREE.Color();
  const hillBase: THREE.Color[] = [];
  const leafBase: THREE.Color[] = [];
  const polar = (angle: number, dist: number, y = 0) =>
    new THREE.Vector3(Math.sin(angle) * dist, y, -Math.cos(angle) * dist);

  // 잔디밭 + 산책길
  const ground = new THREE.Mesh(new THREE.CircleGeometry(220, 48).rotateX(-Math.PI / 2), lambert(0x8fe07c));
  scene.add(ground);
  const path = new THREE.Mesh(new THREE.PlaneGeometry(5, 70).rotateX(-Math.PI / 2), lambert(0xffe8b0));
  path.position.set(0, 0.02, -42);
  scene.add(path);

  // 겹겹이 언덕
  const hills = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 24, 14), lambert(0xffffff), 11);
  const hillTones = [0x79d68a, 0x63c97f, 0x9be38b, 0x52b97a];
  for (let i = 0; i < 11; i++) {
    const a = -1.5 + (i / 10) * 3 + (rnd() - 0.5) * 0.1;
    const d = 85 + (i % 3) * 22;
    const s = 20 + rnd() * 16;
    m.compose(polar(a, d, -s * 0.5), q, new THREE.Vector3(s * 1.7, s, s));
    hills.setMatrixAt(i, m);
    hills.setColorAt(i, col.set(hillTones[i % hillTones.length]));
    hillBase.push(col.clone());
  }
  scene.add(hills);

  // 나무(줄기 + 동글동글 잎, 가끔 벚꽃)
  const TREES = 30;
  const trunks = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.22, 0.3, 1.6, 6), lambert(0x9c6b3f), TREES);
  const leaves = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), lambert(0xffffff, { flatShading: true }), TREES * 2);
  const leafTones = [0x3cb371, 0x2fa866, 0x58c97b, 0xff9ecb, 0x46b98a];
  for (let i = 0; i < TREES; i++) {
    const side = i % 2 ? 1 : -1;
    const a = side * (0.22 + rnd() * 1.25);
    const d = 26 + rnd() * 42;
    const s = 1 + rnd() * 0.9;
    const p = polar(a, d);
    m.compose(p.clone().setY(0.8 * s), q, new THREE.Vector3(s, s, s));
    trunks.setMatrixAt(i, m);
    const tone = leafTones[Math.floor(rnd() * leafTones.length)];
    m.compose(p.clone().setY(2.3 * s), q, new THREE.Vector3(1.5 * s, 1.4 * s, 1.5 * s));
    leaves.setMatrixAt(i * 2, m);
    leaves.setColorAt(i * 2, col.set(tone));
    leafBase.push(col.clone());
    m.compose(p.clone().add(new THREE.Vector3(0.5 * s, 3.3 * s, 0.2)), q, new THREE.Vector3(s, s, s));
    leaves.setMatrixAt(i * 2 + 1, m);
    leaves.setColorAt(i * 2 + 1, col.set(tone).offsetHSL(0, 0, 0.05));
    leafBase.push(col.clone());
  }
  scene.add(trunks, leaves);

  // 꽃밭
  const FLOWERS = 90;
  const flowers = new THREE.InstancedMesh(new THREE.SphereGeometry(0.16, 6, 5), lambert(0xffffff), FLOWERS);
  for (let i = 0; i < FLOWERS; i++) {
    const a = (rnd() - 0.5) * 2.2;
    const d = 6 + rnd() * 24;
    const p = polar(a, d, 0.14);
    if (Math.abs(p.x) < 4) p.x += Math.sign(p.x || 1) * 4;
    m.compose(p, q, new THREE.Vector3(1, 0.7, 1));
    flowers.setMatrixAt(i, m);
    flowers.setColorAt(i, col.set(i % 5 === 0 ? 0xffffff : PARTY[i % PARTY.length]));
  }
  scene.add(flowers);

  // 해
  const sun = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: canvasTexture(256, 256, (g) => {
        const grad = g.createRadialGradient(128, 128, 0, 128, 128, 128);
        grad.addColorStop(0, 'rgba(255,255,240,1)');
        grad.addColorStop(0.28, 'rgba(255,236,130,1)');
        grad.addColorStop(0.36, 'rgba(255,225,110,0.45)');
        grad.addColorStop(1, 'rgba(255,225,110,0)');
        g.fillStyle = grad;
        g.fillRect(0, 0, 256, 256);
      }),
      depthWrite: false,
      transparent: true,
    }),
  );
  sun.position.copy(polar(0.55, 190, 120));
  sun.scale.setScalar(90);
  scene.add(sun);

  // 무지개
  const rainbow = new THREE.Mesh(
    new THREE.RingGeometry(62, 80, 64, 1, 0, Math.PI),
    new THREE.MeshBasicMaterial({
      map: canvasTexture(512, 512, (g) => {
        const bands = ['#ff6b6b', '#ff9f43', '#ffd23f', '#3ddc97', '#4dabf7', '#b48cff'];
        // RingGeometry의 UV는 평면 투영이므로 동심원으로 그린다
        bands.forEach((c, i) => {
          g.beginPath();
          g.arc(256, 256, 253 - i * 9.6, 0, Math.PI * 2);
          g.fillStyle = c;
          g.fill();
        });
      }),
      transparent: true,
      opacity: 0.6,
      depthWrite: false,
      side: THREE.DoubleSide,
    }),
  );
  rainbow.position.set(-30, -6, -170);
  scene.add(rainbow);

  // 구름
  const puffs = new THREE.InstancedMesh(new THREE.SphereGeometry(1, 12, 8), new THREE.MeshBasicMaterial({ color: 0xffffff }), 40);
  for (let i = 0; i < 40; i++) {
    const cluster = Math.floor(i / 4);
    const a = (cluster / 10) * Math.PI * 2 + 0.3;
    const d = 110 + (cluster % 3) * 25;
    const s = 5 + rnd() * 5;
    const off = (i % 4) - 1.5;
    m.compose(
      polar(a, d, 42 + (cluster % 4) * 9 + Math.abs(off) * -2).add(new THREE.Vector3(off * 7, 0, 0)),
      q,
      new THREE.Vector3(s * 1.5, s * 0.75, s),
    );
    puffs.setMatrixAt(i, m);
  }
  const clouds = new THREE.Group().add(puffs);
  scene.add(clouds);

  // 대관람차
  const wheelPos = new THREE.Vector3(-44, 21, -82);
  const R = 17;
  const wheel = new THREE.Group();
  wheel.add(new THREE.Mesh(new THREE.TorusGeometry(R, 0.45, 8, 48), lambert(0xff5d8f)));
  wheel.add(new THREE.Mesh(new THREE.TorusGeometry(R * 0.45, 0.25, 6, 32), lambert(0xffd23f)));
  const CABINS = 10;
  const spokes = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.16, 0.16, R, 5), lambert(0xffffff), CABINS);
  const cabins = new THREE.InstancedMesh(new THREE.SphereGeometry(1.9, 12, 8), lambert(0xffffff), CABINS);
  for (let i = 0; i < CABINS; i++) {
    const a = (i / CABINS) * Math.PI * 2;
    const dir = new THREE.Vector3(Math.cos(a), Math.sin(a), 0);
    m.compose(dir.clone().multiplyScalar(R / 2), q.setFromEuler(e.set(0, 0, a - Math.PI / 2)), new THREE.Vector3(1, 1, 1));
    spokes.setMatrixAt(i, m);
    m.compose(dir.multiplyScalar(R), q.identity(), new THREE.Vector3(1, 0.85, 1));
    cabins.setMatrixAt(i, m);
    cabins.setColorAt(i, col.set(PARTY[i % PARTY.length]));
  }
  wheel.add(spokes, cabins);
  wheel.position.copy(wheelPos);
  wheel.rotation.y = 0.35;
  scene.add(wheel);
  const legs = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.5, 0.7, 24, 6), lambert(0x7d8fd6), 2);
  for (let i = 0; i < 2; i++) {
    const lean = i ? 0.32 : -0.32;
    m.compose(
      wheelPos.clone().add(new THREE.Vector3(Math.sin(lean) * 11, -11, 0)),
      q.setFromEuler(e.set(0, 0, -lean)),
      new THREE.Vector3(1, 1, 1),
    );
    legs.setMatrixAt(i, m);
  }
  q.identity();
  scene.add(legs);

  // 서커스 천막
  const tents = [
    { p: new THREE.Vector3(36, 0, -62), s: 1 },
    { p: new THREE.Vector3(60, 0, -92), s: 1.35 },
    { p: new THREE.Vector3(-22, 0, -70), s: 0.7 },
  ];
  const roofs = new THREE.InstancedMesh(
    new THREE.ConeGeometry(9, 7, 20, 1, true),
    new THREE.MeshLambertMaterial({ map: stripes('#ff5d5d', '#fff8e7', 10), side: THREE.DoubleSide }),
    tents.length,
  );
  const walls = new THREE.InstancedMesh(
    new THREE.CylinderGeometry(8.4, 8.4, 5, 20, 1, true),
    new THREE.MeshLambertMaterial({ map: stripes('#ffd23f', '#fff8e7', 10), side: THREE.DoubleSide }),
    tents.length,
  );
  const tips = new THREE.InstancedMesh(new THREE.SphereGeometry(0.8, 8, 6), lambert(0xffd23f), tents.length);
  tents.forEach(({ p, s }, i) => {
    const sc = new THREE.Vector3(s, s, s);
    m.compose(p.clone().setY(8.5 * s), q, sc);
    roofs.setMatrixAt(i, m);
    m.compose(p.clone().setY(2.5 * s), q, sc);
    walls.setMatrixAt(i, m);
    m.compose(p.clone().setY(12.3 * s), q, sc);
    tips.setMatrixAt(i, m);
  });
  scene.add(roofs, walls, tips);

  // 만국기(깃발 줄) — 양옆 기둥 사이에 늘어뜨림
  const flagGeo = new THREE.BufferGeometry();
  flagGeo.setAttribute('position', new THREE.Float32BufferAttribute([-0.5, 0, 0, 0.5, 0, 0, 0, -1.1, 0], 3));
  flagGeo.computeVertexNormals();
  const lines = [
    { from: new THREE.Vector3(-34, 10, -50), to: new THREE.Vector3(-5, 11.5, -64) },
    { from: new THREE.Vector3(5, 11.5, -64), to: new THREE.Vector3(34, 10, -50) },
  ];
  const PER = 14;
  const flags = new THREE.InstancedMesh(flagGeo, new THREE.MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide }), PER * lines.length);
  const flagBase: THREE.Vector3[] = [];
  lines.forEach(({ from, to }, li) => {
    for (let i = 0; i < PER; i++) {
      const k = (i + 0.5) / PER;
      const p = from.clone().lerp(to, k);
      p.y -= Math.sin(k * Math.PI) * 2.2; // 늘어진 줄
      flagBase.push(p);
      flags.setColorAt(li * PER + i, col.set(PARTY[i % PARTY.length]));
    }
  });
  scene.add(flags);
  const poles = new THREE.InstancedMesh(new THREE.CylinderGeometry(0.14, 0.18, 13, 6), lambert(0xfff8e7), 4);
  [lines[0].from, lines[0].to, lines[1].from, lines[1].to].forEach((p, i) => {
    m.compose(new THREE.Vector3(p.x, p.y / 2, p.z), q, new THREE.Vector3(1, p.y / 13, 1));
    poles.setMatrixAt(i, m);
  });
  scene.add(poles);

  // 열기구
  const AIR = 3;
  const envelopes = new THREE.InstancedMesh(
    new THREE.SphereGeometry(1, 16, 12),
    new THREE.MeshLambertMaterial({ map: stripes('#ffffff', '#ffd9a0', 6) }),
    AIR,
  );
  const baskets = new THREE.InstancedMesh(new THREE.BoxGeometry(0.5, 0.4, 0.5), lambert(0xa9703f), AIR);
  const air = [
    { a: -0.95, d: 120, y: 52, s: 8, c: 0xff6b6b },
    { a: 0.35, d: 170, y: 105, s: 7, c: 0x4dabf7 },
    { a: 1.05, d: 110, y: 44, s: 7, c: 0xb48cff },
  ];
  air.forEach((b, i) => envelopes.setColorAt(i, col.set(b.c)));
  scene.add(envelopes, baskets);

  // 흩날리는 것들(꽃잎·눈·반딧불·별)
  const AMBIENT = 150;
  const aBase = new Float32Array(AMBIENT * 3);
  const aPos = new Float32Array(AMBIENT * 3);
  const aSeed = new Float32Array(AMBIENT);
  const aGeo = new THREE.BufferGeometry();
  aGeo.setAttribute('position', new THREE.BufferAttribute(aPos, 3));
  const aMat = new THREE.PointsMaterial({
    size: 0.3,
    transparent: true,
    alphaTest: 0.05,
    depthWrite: false,
    map: canvasTexture(64, 64, (g) => {
      const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.5, 'rgba(255,255,255,0.9)');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      g.fillStyle = grad;
      g.fillRect(0, 0, 64, 64);
    }),
  });
  const ambient = new THREE.Points(aGeo, aMat);
  ambient.frustumCulled = false;
  scene.add(ambient);
  let ambientKind: Ambient = 'none';
  const AMBIENT_LOOK: Record<Ambient, { color: number; size: number }> = {
    none: { color: 0xffffff, size: 0.1 },
    petal: { color: 0xffb7d5, size: 0.36 },
    snow: { color: 0xffffff, size: 0.32 },
    firefly: { color: 0xfff27a, size: 0.3 },
    star: { color: 0xffffff, size: 2.8 },
  };
  const seedAmbient = () => {
    for (let i = 0; i < AMBIENT; i++) {
      aSeed[i] = Math.random();
      let p: THREE.Vector3;
      if (ambientKind === 'star') {
        const elev = 0.15 + Math.random() * 1.2;
        p = polar((Math.random() - 0.5) * 3.6, Math.cos(elev) * 240, Math.sin(elev) * 240);
      } else {
        p = new THREE.Vector3((Math.random() - 0.5) * 56, Math.random() * 24, -6 - Math.random() * 42);
      }
      aBase.set([p.x, p.y, p.z], i * 3);
    }
    aPos.set(aBase);
    aMat.color.set(AMBIENT_LOOK[ambientKind].color);
    aMat.size = AMBIENT_LOOK[ambientKind].size;
    aMat.opacity = 1;
    ambient.visible = ambientKind !== 'none';
    aGeo.attributes.position.needsUpdate = true;
  };
  const moveAmbient = (t: number) => {
    if (ambientKind === 'none') return;
    if (ambientKind === 'star') {
      aMat.opacity = 0.75 + Math.sin(t * 2.2) * 0.25;
      return;
    }
    const fall = ambientKind === 'snow' ? 1.6 : ambientKind === 'petal' ? 1 : 0;
    for (let i = 0; i < AMBIENT; i++) {
      const k = i * 3;
      const seed = aSeed[i];
      if (fall) {
        aPos[k] = aBase[k] + Math.sin(t * 0.8 + seed * 20) * 0.9;
        aPos[k + 1] = (((aBase[k + 1] - t * fall * (0.6 + seed * 0.8)) % 24) + 24) % 24;
      } else {
        aPos[k] = aBase[k] + Math.sin(t * 0.5 + seed * 30) * 2;
        aPos[k + 1] = 0.8 + aBase[k + 1] * 0.3 + Math.sin(t * 0.7 + seed * 17) * 0.8;
      }
    }
    if (!fall) aMat.opacity = 0.65 + Math.sin(t * 3) * 0.35;
    aGeo.attributes.position.needsUpdate = true;
  };

  const pos = new THREE.Vector3();
  const scale = new THREE.Vector3();
  return {
    setTheme(index: number) {
      const th = THEMES[((index % THEMES.length) + THEMES.length) % THEMES.length];
      (ground.material as THREE.MeshLambertMaterial).color.set(th.ground);
      (path.material as THREE.MeshLambertMaterial).color.set(th.path);
      const wash = new THREE.Color(th.wash[0]);
      hillBase.forEach((c, i) => hills.setColorAt(i, col.copy(c).lerp(wash, th.wash[1])));
      leafBase.forEach((c, i) => leaves.setColorAt(i, col.copy(c).lerp(wash, th.wash[1])));
      hills.instanceColor!.needsUpdate = true;
      leaves.instanceColor!.needsUpdate = true;
      (puffs.material as THREE.MeshBasicMaterial).color.set(th.cloud);
      sun.material.color.set(th.sun.color);
      sun.scale.setScalar(th.sun.size);
      sun.position.copy(polar(th.sun.angle, 190, th.sun.height));
      rainbow.visible = th.rainbow;
      flowers.visible = th.flowers;
      ambientKind = th.ambient;
      seedAmbient();
      return th;
    },
    update(t: number) {
      moveAmbient(t);
      clouds.rotation.y = t * 0.004;
      wheel.rotation.z = t * 0.12;
      air.forEach((b, i) => {
        pos.copy(polar(b.a + t * 0.004 * (i % 2 ? 1 : -1), b.d, b.y + Math.sin(t * 0.3 + i * 2) * 2));
        m.compose(pos, q.identity(), scale.set(b.s, b.s * 1.15, b.s));
        envelopes.setMatrixAt(i, m);
        pos.y -= b.s * 1.5;
        m.compose(pos, q, scale.setScalar(b.s * 0.55));
        baskets.setMatrixAt(i, m);
      });
      envelopes.instanceMatrix.needsUpdate = true;
      baskets.instanceMatrix.needsUpdate = true;
      flagBase.forEach((p, i) => {
        m.compose(p, q.setFromEuler(e.set(Math.sin(t * 3 + i * 0.7) * 0.25, 0, 0)), scale.setScalar(1.5));
        flags.setMatrixAt(i, m);
      });
      flags.instanceMatrix.needsUpdate = true;
    },
  };
}

export interface Gun {
  group: THREE.Group;
  /** 총구 위치(총 로컬 좌표) */
  muzzle: THREE.Vector3;
  /** recoil 0..1 에 따라 펌프·물통을 움직인다 */
  animate(recoil: number, t: number): void;
  /** 상점에서 고른 색으로 갈아입힌다 */
  setSkin(id: string): void;
}

interface SkinDef {
  body: number;
  barrel: number;
  accent: number;
  grip: number;
  metal?: number;
  /** 몸통 색이 무지개처럼 계속 바뀐다 */
  rainbow?: boolean;
  /** 스스로 빛나는 정도 */
  glow?: number;
  /** 총구에 아지랑이처럼 빛나는 기운 */
  aura?: number;
}

const SKINS: Record<string, SkinDef> = {
  'skin.basic': { body: 0xff5d5d, barrel: 0xffd23f, accent: 0x3ddc97, grip: 0x2b3a67 },
  'skin.mini': { body: 0xffa94d, barrel: 0xfff4e6, accent: 0x74c0fc, grip: 0x5c3d00 },
  'skin.ocean': { body: 0x2f9bff, barrel: 0xe3f6ff, accent: 0x5ce1e6, grip: 0x123a6b },
  'skin.berry': { body: 0xff7eb6, barrel: 0xfff0f6, accent: 0xff4d6d, grip: 0xa61e4d },
  'skin.forest': { body: 0x2f9e44, barrel: 0xd8f5a2, accent: 0x8ce99a, grip: 0x5c3a1e },
  'skin.galaxy': { body: 0x5f3dc4, barrel: 0x22b8cf, accent: 0xf783ac, grip: 0x1a1033, glow: 0.25 },
  'skin.gold': { body: 0xffc93c, barrel: 0xfff3bf, accent: 0xff922b, grip: 0x5c3d00, metal: 0.75 },
  'skin.rainbow': { body: 0xff5d5d, barrel: 0xffffff, accent: 0x3ddc97, grip: 0x2b3a67, rainbow: true },
  'skin.cannon': { body: 0x343a40, barrel: 0xff6b6b, accent: 0xffd43b, grip: 0x212529, metal: 0.5 },
  'skin.dragon': { body: 0xffd43b, barrel: 0xff922b, accent: 0x9775fa, grip: 0x7a1f1f, metal: 0.85, rainbow: true, glow: 0.45, aura: 1 },
};

/** 알록달록 물총 */
export function buildGun(): Gun {
  const group = new THREE.Group();
  const std = (color: number, extra: THREE.MeshStandardMaterialParameters = {}) =>
    new THREE.MeshStandardMaterial({ color, roughness: 0.35, metalness: 0.05, ...extra });
  const add = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number) => {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, y, z);
    group.add(mesh);
    return mesh;
  };
  const alongZ = (geo: THREE.BufferGeometry) => geo.rotateX(Math.PI / 2);

  const coral = std(0xff5d5d);
  const sunny = std(0xffd23f);
  const mint = std(0x3ddc97);
  const navy = std(0x2b3a67);
  const white = std(0xffffff);

  // 몸통
  add(alongZ(new THREE.CapsuleGeometry(0.1, 0.42, 6, 14)), coral, 0, 0, 0);
  add(alongZ(new THREE.CylinderGeometry(0.105, 0.105, 0.05, 16)), white, 0, 0, -0.12);
  add(alongZ(new THREE.CylinderGeometry(0.105, 0.105, 0.05, 16)), white, 0, 0, 0.14);
  // 총열 + 노즐
  add(alongZ(new THREE.CylinderGeometry(0.05, 0.065, 0.42, 14)), sunny, 0, 0.02, -0.5);
  add(alongZ(new THREE.CylinderGeometry(0.075, 0.06, 0.09, 14)), mint, 0, 0.02, -0.72);
  add(new THREE.TorusGeometry(0.07, 0.018, 8, 18), white, 0, 0.02, -0.765);
  // 펌프 손잡이
  const pump = add(alongZ(new THREE.CapsuleGeometry(0.045, 0.14, 4, 10)), mint, 0, -0.09, -0.42);
  // 물통(투명) + 출렁이는 물
  add(new THREE.CapsuleGeometry(0.115, 0.1, 6, 14), std(0xbfe9ff, { transparent: true, opacity: 0.45, roughness: 0.1 }), 0, 0.2, 0.06);
  const water = add(new THREE.SphereGeometry(0.095, 14, 10), std(0x2f9bff, { roughness: 0.15 }), 0, 0.17, 0.06);
  add(new THREE.CylinderGeometry(0.06, 0.06, 0.04, 14), sunny, 0, 0.345, 0.06);
  // 손잡이 + 방아쇠
  const grip = add(new THREE.CapsuleGeometry(0.055, 0.18, 4, 10), navy, 0, -0.2, 0.2);
  grip.rotation.x = 0.35;
  const guard = add(new THREE.TorusGeometry(0.06, 0.014, 6, 14, Math.PI), navy, 0, -0.11, 0.05);
  guard.rotation.set(0, Math.PI / 2, Math.PI);
  // 조준 고리
  const sight = add(new THREE.TorusGeometry(0.03, 0.01, 6, 14), white, 0, 0.115, -0.3);
  sight.rotation.y = 0;
  // 옆면 별 장식
  const star = new THREE.Shape();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 ? 0.022 : 0.05;
    const a = (i / 10) * Math.PI * 2 + Math.PI / 2;
    if (i === 0) star.moveTo(Math.cos(a) * r, Math.sin(a) * r);
    else star.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  const starGeo = new THREE.ExtrudeGeometry(star, { depth: 0.012, bevelEnabled: false }).rotateY(-Math.PI / 2);
  add(starGeo, sunny, -0.098, 0.01, 0.02);

  // 전설의 용 물총: 총구의 빛나는 기운 + 등의 가시(뿔)
  const auraTex = (() => {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const g = c.getContext('2d')!;
    const grad = g.createRadialGradient(64, 64, 4, 64, 64, 64);
    grad.addColorStop(0, 'rgba(255,255,255,0.95)');
    grad.addColorStop(0.3, 'rgba(255,220,120,0.6)');
    grad.addColorStop(1, 'rgba(255,120,60,0)');
    g.fillStyle = grad;
    g.fillRect(0, 0, 128, 128);
    return new THREE.CanvasTexture(c);
  })();
  const aura = new THREE.Sprite(new THREE.SpriteMaterial({ map: auraTex, transparent: true, depthWrite: false, depthTest: false, opacity: 0.9 }));
  aura.position.set(0, 0.02, -0.8);
  aura.visible = false;
  group.add(aura);
  const horns: THREE.Mesh[] = [];
  for (let i = 0; i < 4; i++) {
    const horn = add(new THREE.ConeGeometry(0.03, 0.12, 6), mint, 0, 0.13, 0.12 - i * 0.12);
    horn.rotation.x = -0.5;
    horn.visible = false;
    horns.push(horn);
  }

  let current: SkinDef = SKINS['skin.basic'];
  return {
    group,
    muzzle: new THREE.Vector3(0, 0.02, -0.78),
    setSkin(id) {
      const skin = (current = SKINS[id] ?? SKINS['skin.basic']);
      coral.color.set(skin.body);
      sunny.color.set(skin.barrel);
      mint.color.set(skin.accent);
      navy.color.set(skin.grip);
      for (const m of [coral, sunny, mint]) {
        m.metalness = skin.metal ?? 0.05;
        m.emissive.set(skin.glow ? m.color : 0x000000);
        m.emissiveIntensity = skin.glow ?? 0;
      }
      aura.visible = !!skin.aura;
      for (const h of horns) h.visible = !!skin.aura;
    },
    animate(recoil, t) {
      if (current.rainbow) {
        const speed = current.aura ? 0.35 : 0.12;
        coral.color.setHSL((t * speed) % 1, 0.9, current.aura ? 0.55 : 0.62);
        mint.color.setHSL((t * speed + 0.33) % 1, 0.8, 0.58);
        if (!current.aura) sunny.color.setHSL((t * speed + 0.66) % 1, 0.9, 0.7);
        if (current.glow) for (const m of [coral, mint]) m.emissive.copy(m.color);
      }
      if (current.aura) {
        aura.scale.setScalar(0.28 + Math.sin(t * 6) * 0.05 + recoil * 0.4);
        aura.material.rotation = t * 2;
        aura.material.opacity = 0.7 + Math.sin(t * 9) * 0.2;
      }
      pump.position.z = -0.42 + recoil * 0.1;
      water.position.y = 0.17 + Math.sin(t * 2.2) * 0.008 - recoil * 0.015;
      water.scale.set(1 + recoil * 0.08, 1 - recoil * 0.1, 1 + recoil * 0.08);
    },
  };
}
