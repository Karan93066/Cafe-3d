'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function makeCup() {
  const cup = new THREE.Group();

  const shellMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x070707,
    roughness: 0.22,
    metalness: 0.08,
    clearcoat: 0.85,
    clearcoatRoughness: 0.2,
  });

  const points = [
    new THREE.Vector2(1.08, -1.28),
    new THREE.Vector2(1.26, -1.2),
    new THREE.Vector2(1.42, -0.72),
    new THREE.Vector2(1.56, 0.02),
    new THREE.Vector2(1.62, 0.78),
    new THREE.Vector2(1.58, 1.08),
    new THREE.Vector2(1.48, 1.18),
    new THREE.Vector2(1.34, 1.02),
    new THREE.Vector2(1.26, 0.32),
    new THREE.Vector2(1.12, -0.68),
  ];

  const shell = new THREE.Mesh(new THREE.LatheGeometry(points, 96), shellMaterial);
  shell.castShadow = true;
  shell.receiveShadow = true;
  cup.add(shell);

  const rim = new THREE.Mesh(
    new THREE.TorusGeometry(1.535, 0.06, 18, 96),
    new THREE.MeshPhysicalMaterial({ color: 0x1d120d, roughness: 0.3, clearcoat: 0.6 })
  );
  rim.rotation.x = Math.PI / 2;
  rim.position.y = 1.12;
  cup.add(rim);

  const coffee = new THREE.Mesh(
    new THREE.CylinderGeometry(1.42, 1.42, 0.05, 96),
    new THREE.MeshPhysicalMaterial({
      color: 0x351206,
      roughness: 0.12,
      clearcoat: 1,
      clearcoatRoughness: 0.06,
    })
  );
  coffee.position.y = 1.065;
  cup.add(coffee);

  const crema = new THREE.Group();
  [0.86, 0.57, 0.32].forEach((radius, i) => {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(radius, 0.035 - i * 0.006, 12, 72),
      new THREE.MeshBasicMaterial({
        color: i === 0 ? 0xe0a162 : 0xc27b3d,
        transparent: true,
        opacity: 0.5 - i * 0.08,
      })
    );
    ring.rotation.x = Math.PI / 2;
    ring.position.set(0.08 * i, 1.097 + i * 0.004, -0.04 * i);
    ring.scale.y = 0.7 + i * 0.04;
    crema.add(ring);
  });
  cup.add(crema);

  const handle = new THREE.Mesh(new THREE.TorusGeometry(0.76, 0.2, 20, 72), shellMaterial);
  handle.position.set(1.58, -0.03, 0);
  handle.scale.set(1.12, 1.28, 1);
  handle.castShadow = true;
  cup.add(handle);

  const saucer = new THREE.Mesh(
    new THREE.CylinderGeometry(2.02, 2.22, 0.11, 96),
    new THREE.MeshPhysicalMaterial({ color: 0x080808, roughness: 0.34, clearcoat: 0.55 })
  );
  saucer.position.y = -1.39;
  saucer.castShadow = true;
  cup.add(saucer);

  // BCC-inspired mark, rendered as a canvas decal so the demo needs no external model.
  const logoCanvas = document.createElement('canvas');
  logoCanvas.width = 1024;
  logoCanvas.height = 512;
  const c = logoCanvas.getContext('2d');
  c.clearRect(0, 0, 1024, 512);
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.font = '900 180px Arial';
  c.fillStyle = '#e0212d';
  c.fillText('B', 345, 220);
  c.fillStyle = '#f4eee7';
  c.fillText('CC', 610, 220);
  c.font = '600 38px Arial';
  c.letterSpacing = '3px';
  c.fillText('THE BLACK COFFEE CAFE', 520, 360);
  const logoTexture = new THREE.CanvasTexture(logoCanvas);
  logoTexture.colorSpace = THREE.SRGBColorSpace;
  const decal = new THREE.Mesh(
    new THREE.PlaneGeometry(2.25, 1.12),
    new THREE.MeshBasicMaterial({ map: logoTexture, transparent: true, depthWrite: false })
  );
  decal.position.set(0, -0.05, 1.54);
  decal.scale.set(0.62, 0.62, 0.62);
  cup.add(decal);

  return { cup, coffee, crema };
}

function makeSteam() {
  const group = new THREE.Group();
  for (let i = 0; i < 4; i += 1) {
    const x = (i - 1.5) * 0.34;
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(x, 1.18, 0),
      new THREE.Vector3(x + 0.18, 1.65, 0.06),
      new THREE.Vector3(x - 0.16, 2.08, -0.05),
      new THREE.Vector3(x + 0.12, 2.56, 0.05),
      new THREE.Vector3(x - 0.08, 3.08, 0),
    ]);
    const material = new THREE.MeshBasicMaterial({
      color: 0xf3e7dc,
      transparent: true,
      opacity: 0.08 + i * 0.025,
      depthWrite: false,
    });
    const mesh = new THREE.Mesh(new THREE.TubeGeometry(curve, 54, 0.018 + i * 0.003, 7, false), material);
    group.add(mesh);
  }
  return group;
}

function makeBeans() {
  const geometry = new THREE.SphereGeometry(0.2, 18, 14);
  const material = new THREE.MeshStandardMaterial({ color: 0x341509, roughness: 0.64, metalness: 0.02 });
  const count = 54;
  const mesh = new THREE.InstancedMesh(geometry, material, count);
  const dummy = new THREE.Object3D();

  for (let i = 0; i < count; i += 1) {
    const angle = i * 1.07;
    const radius = 2.25 + (i % 9) * 0.27;
    const y = -2.5 + ((i * 1.37) % 6.6);
    dummy.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius * 0.48);
    dummy.rotation.set(i * 0.61, i * 0.47, i * 0.19);
    const s = 0.55 + (i % 5) * 0.12;
    dummy.scale.set(s * 0.88, s * 0.46, s * 1.25);
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
  }
  mesh.instanceMatrix.needsUpdate = true;
  return mesh;
}

function makeDust() {
  const count = 210;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i += 1) {
    positions[i * 3] = (Math.random() - 0.5) * 16;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 7;
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  return new THREE.Points(
    geometry,
    new THREE.PointsMaterial({ color: 0xbd7440, size: 0.022, transparent: true, opacity: 0.46 })
  );
}

const DESKTOP_SCENES = [
  { id: 'hero',     p: [1.65, -0.1, 0], s: 1.0,  r: [-0.08, -0.28, -0.08], camera: 9.4, bean: 1.0 },
  { id: 'story',    p: [-2.4, -0.15, 0], s: 0.78, r: [0.04, 0.62, 0.12],    camera: 8.8, bean: 0.8 },
  { id: 'history',  p: [2.65, -0.35, 0], s: 0.67, r: [0.18, -0.85, -0.16],  camera: 9.3, bean: 1.3 },
  { id: 'menu',     p: [0.2, -0.2, 0], s: 1.38, r: [-0.12, 0.25, 0.08],     camera: 7.6, bean: 1.7 },
  { id: 'ambience', p: [-2.75, 0.25, 0], s: 0.56, r: [0.13, 1.18, -0.2],    camera: 9.7, bean: 0.72 },
  { id: 'promise',  p: [2.65, 0.0, 0], s: 0.63, r: [-0.16, -1.08, 0.14],    camera: 9.2, bean: 1.08 },
  { id: 'location', p: [0.25, -0.25, 0], s: 1.18, r: [-0.08, 0.12, 0.02],   camera: 8.0, bean: 0.55 },
];

const MOBILE_SCENES = [
  { id: 'hero',     p: [0.2, 1.05, 0], s: 0.72, r: [-0.06, -0.2, -0.06], camera: 9.9, bean: 0.75 },
  { id: 'story',    p: [1.35, 0.4, 0], s: 0.5, r: [0.05, 0.5, 0.08],    camera: 9.7, bean: 0.6 },
  { id: 'history',  p: [-1.25, 0.2, 0], s: 0.48, r: [0.12, -0.7, -0.1], camera: 9.9, bean: 0.8 },
  { id: 'menu',     p: [0, 0.7, 0], s: 0.72, r: [-0.1, 0.25, 0.06],     camera: 9.1, bean: 1.0 },
  { id: 'ambience', p: [1.4, 0.25, 0], s: 0.46, r: [0.1, 1.0, -0.16],   camera: 10.0, bean: 0.55 },
  { id: 'promise',  p: [-1.35, 0.3, 0], s: 0.48, r: [-0.1, -0.9, 0.12], camera: 9.8, bean: 0.7 },
  { id: 'location', p: [0, 0.75, 0], s: 0.75, r: [-0.06, 0.1, 0.02],    camera: 9.1, bean: 0.45 },
];

export default function ScrollWorld() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const mobile = window.matchMedia('(max-width: 760px)').matches;
    const states = mobile ? MOBILE_SCENES : DESKTOP_SCENES;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x080504, mobile ? 0.07 : 0.055);

    const camera = new THREE.PerspectiveCamera(mobile ? 44 : 38, 1, 0.1, 100);
    camera.position.set(0, 0.2, states[0].camera);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, mobile ? 1.35 : 1.8));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.14;
    renderer.shadowMap.enabled = !mobile;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    const hemi = new THREE.HemisphereLight(0xffe0c4, 0x120906, 1.15);
    scene.add(hemi);

    const key = new THREE.SpotLight(0xffa654, 48, 25, Math.PI / 5, 0.55, 1.25);
    key.position.set(4.8, 6, 6.5);
    key.castShadow = !mobile;
    scene.add(key);

    const redRim = new THREE.PointLight(0xd82b35, 12, 16, 2);
    redRim.position.set(-4.2, 1.8, 2.4);
    scene.add(redRim);

    const warmFill = new THREE.PointLight(0xb56833, 13, 18, 2);
    warmFill.position.set(1.6, -3.4, 2.8);
    scene.add(warmFill);

    const rig = new THREE.Group();
    const idle = new THREE.Group();
    const cupParts = makeCup();
    const steam = makeSteam();
    const beans = makeBeans();
    const dust = makeDust();

    idle.add(cupParts.cup, steam);
    rig.add(idle, beans);
    scene.add(rig, dust);

    const start = states[0];
    rig.position.set(...start.p);
    rig.rotation.set(...start.r);
    rig.scale.setScalar(start.s);
    beans.scale.setScalar(start.bean);

    const pointer = { x: 0, y: 0 };
    const onPointerMove = (event) => {
      pointer.x = (event.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (event.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', resize);
    resize();

    const ctx = gsap.context(() => {
      if (reduceMotion) return;

      for (let i = 1; i < states.length; i += 1) {
        const from = states[i - 1];
        const to = states[i];
        const trigger = document.getElementById(to.id);
        if (!trigger) continue;

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger,
            start: 'top 92%',
            end: 'top 18%',
            scrub: 1.15,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .fromTo(rig.position, { x: from.p[0], y: from.p[1], z: from.p[2] }, { x: to.p[0], y: to.p[1], z: to.p[2], ease: 'none', immediateRender: false }, 0)
          .fromTo(rig.rotation, { x: from.r[0], y: from.r[1], z: from.r[2] }, { x: to.r[0], y: to.r[1], z: to.r[2], ease: 'none', immediateRender: false }, 0)
          .fromTo(rig.scale, { x: from.s, y: from.s, z: from.s }, { x: to.s, y: to.s, z: to.s, ease: 'none', immediateRender: false }, 0)
          .fromTo(beans.scale, { x: from.bean, y: from.bean, z: from.bean }, { x: to.bean, y: to.bean, z: to.bean, ease: 'none', immediateRender: false }, 0)
          .fromTo(camera.position, { z: from.camera }, { z: to.camera, ease: 'none', immediateRender: false }, 0);
      }

      gsap.to(beans.rotation, {
        y: Math.PI * 3.4,
        ease: 'none',
        scrollTrigger: { trigger: '#site', start: 'top top', end: 'bottom bottom', scrub: 1.4 },
      });
      gsap.to(dust.rotation, {
        y: -Math.PI * 0.75,
        x: 0.16,
        ease: 'none',
        scrollTrigger: { trigger: '#site', start: 'top top', end: 'bottom bottom', scrub: 2 },
      });
      gsap.to(cupParts.crema.rotation, {
        y: Math.PI * 2,
        ease: 'none',
        scrollTrigger: { trigger: '#site', start: 'top top', end: 'bottom bottom', scrub: 1 },
      });
    }, mount);

    const clock = new THREE.Clock();
    let frame;
    const draw = () => {
      const t = clock.getElapsedTime();
      if (!reduceMotion) {
        idle.rotation.y += (pointer.x * 0.07 - idle.rotation.y) * 0.035;
        idle.rotation.x += (-pointer.y * 0.04 - idle.rotation.x) * 0.035;
        idle.position.y = Math.sin(t * 0.86) * 0.055;
        steam.position.y = (t * 0.045) % 0.42;
        steam.rotation.y = Math.sin(t * 0.42) * 0.08;
        cupParts.coffee.rotation.y = t * 0.06;
      }
      renderer.render(scene, camera);
      frame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      ctx.revert();
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', resize);
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose?.();
        if (object.material) {
          const materials = Array.isArray(object.material) ? object.material : [object.material];
          materials.forEach((material) => {
            if (material.map) material.map.dispose?.();
            material.dispose?.();
          });
        }
      });
      renderer.dispose();
    };
  }, []);

  return <div className="webgl-stage" ref={mountRef} aria-hidden="true" />;
}
