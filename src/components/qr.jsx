import { useEffect, useRef } from "react";
import * as THREE from "three";
import QRCode from "qrcode";
import gsap from "gsap";

/* =========================================================
   HELPERS
========================================================= */

const clamp01 = (value) => Math.min(1, Math.max(0, value));

const smoothstep = (value) => {
  const t = clamp01(value);

  return t * t * (3 - 2 * t);
};

const pseudoRandom = (index, salt = 0) => {
  const value = Math.sin(index * 12.9898 + salt * 78.233) * 43758.5453;

  return value - Math.floor(value);
};

/* =========================================================
   REALISTIC COFFEE CUP POINTS

   QR voxels are rearranged into:
   - ceramic body
   - rim
   - coffee surface
   - handle
   - saucer
   - steam
========================================================= */

function createCupPoints(count) {
  const points = [];
  const roles = [];

  const bodyCount = Math.floor(count * 0.48);
  const rimCount = Math.floor(count * 0.12);
  const coffeeCount = Math.floor(count * 0.1);
  const handleCount = Math.floor(count * 0.12);
  const saucerCount = Math.floor(count * 0.12);

  const steamCount =
    count - bodyCount - rimCount - coffeeCount - handleCount - saucerCount;

  /* =====================================================
     CUP BODY
  ===================================================== */

  for (let i = 0; i < bodyCount; i++) {
    const v = i / Math.max(bodyCount - 1, 1);

    const y = THREE.MathUtils.lerp(-1.25, 0.92, v);

    /*
     * Narrower bottom,
     * wider mouth.
     */

    const radiusX = THREE.MathUtils.lerp(1.52, 2.3, v);

    const radiusZ = THREE.MathUtils.lerp(0.62, 0.9, v);

    /*
     * Golden angle distributes
     * points naturally.
     */

    const angle = i * 2.399963229728653 + pseudoRandom(i, 4) * 0.07;

    const x = Math.cos(angle) * radiusX;

    const z = Math.sin(angle) * radiusZ;

    /*
     * Slight handmade ceramic
     * imperfection.
     */

    const jitter = (pseudoRandom(i, 9) - 0.5) * 0.055;

    points.push(new THREE.Vector3(x + jitter, y, z));

    roles.push("ceramic");
  }

  /* =====================================================
     THICK CUP RIM
  ===================================================== */

  for (let i = 0; i < rimCount; i++) {
    const angle = (i / rimCount) * Math.PI * 2;

    const layer = i % 3;

    const multiplier = layer === 0 ? 1 : layer === 1 ? 0.94 : 0.88;

    points.push(
      new THREE.Vector3(
        Math.cos(angle) * 2.4 * multiplier,

        1.03 + Math.sin(angle * 2) * 0.025,

        Math.sin(angle) * 0.96 * multiplier,
      ),
    );

    roles.push("rim");
  }

  /* =====================================================
     COFFEE SURFACE
  ===================================================== */

  for (let i = 0; i < coffeeCount; i++) {
    const radius = Math.sqrt(pseudoRandom(i, 18));

    const angle = pseudoRandom(i, 28) * Math.PI * 2;

    const x = Math.cos(angle) * 2.03 * radius;

    const z = Math.sin(angle) * 0.72 * radius;

    /*
     * Slight crema dome.
     */

    const y = 1.015 + (1 - radius) * 0.09;

    points.push(new THREE.Vector3(x, y, z));

    roles.push("coffee");
  }

  /* =====================================================
     HANDLE
  ===================================================== */

  for (let i = 0; i < handleCount; i++) {
    const angle = (i / handleCount) * Math.PI * 2;

    const layer = i % 4;

    const offset = layer * 0.085;

    const centerX = 2.12;
    const centerY = -0.08;

    const radiusX = 1.06 - offset;

    const radiusY = 1.08 - offset;

    const x = centerX + Math.cos(angle) * radiusX;

    const y = centerY + Math.sin(angle) * radiusY;

    /*
     * Mostly flat toward camera,
     * so handle silhouette is obvious.
     */

    const z = 0.02 + Math.sin(angle) * 0.16;

    points.push(new THREE.Vector3(x, y, z));

    roles.push("handle");
  }

  /* =====================================================
     SAUCER
  ===================================================== */

  for (let i = 0; i < saucerCount; i++) {
    const radius = 0.28 + Math.sqrt(pseudoRandom(i, 44)) * 0.72;

    const angle = pseudoRandom(i, 47) * Math.PI * 2;

    points.push(
      new THREE.Vector3(
        Math.cos(angle) * 3 * radius,

        -1.53 - radius * 0.065,

        Math.sin(angle) * 0.78 * radius,
      ),
    );

    roles.push("saucer");
  }

  /* =====================================================
     STEAM
  ===================================================== */

  for (let i = 0; i < steamCount; i++) {
    const stream = i % 3;

    const streamIndex = Math.floor(i / 3);

    const streamLength = Math.ceil(steamCount / 3);

    const t = streamIndex / Math.max(streamLength - 1, 1);

    const baseX = stream === 0 ? -0.7 : stream === 1 ? 0 : 0.7;

    const wave = Math.sin(t * Math.PI * 2.4 + stream * 1.7) * 0.2;

    const secondaryWave = Math.cos(t * Math.PI * 1.7 + stream) * 0.08;

    points.push(
      new THREE.Vector3(
        baseX + wave + secondaryWave,

        1.48 + t * 2.15,

        0.05 + Math.sin(t * Math.PI) * 0.18,
      ),
    );

    roles.push("steam");
  }

  return {
    points,
    roles,
  };
}

/* =========================================================
   COMPONENT
========================================================= */

export default function CoffeeQR({ url = "https://theblackcoffeecafe.com/" }) {
  const containerRef = useRef(null);

  const progressRef = useRef({
    value: 0,
  });

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    /* =====================================================
       SCENE
    ===================================================== */

    const scene = new THREE.Scene();

    /* =====================================================
       CAMERA

       Slightly elevated so coffee
       inside the cup stays visible.
    ===================================================== */

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);

    camera.position.set(0, 0.7, 18);

    camera.lookAt(0, 0, 0);

    /* =====================================================
       RENDERER
    ===================================================== */

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,

      powerPreference: "high-performance",
    });

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    renderer.outputColorSpace = THREE.SRGBColorSpace;

    renderer.toneMapping = THREE.ACESFilmicToneMapping;

    renderer.toneMappingExposure = 1.16;

    renderer.setClearColor(0x000000, 0);

    container.appendChild(renderer.domElement);

    /* =====================================================
       LIGHTING
    ===================================================== */

    /*
     * Main warm café light.
     */

    const keyLight = new THREE.DirectionalLight(0xffead0, 4.6);

    keyLight.position.set(-4, 7, 8);

    scene.add(keyLight);

    /*
     * Cooler fill gives blocks
     * visible dimensional sides.
     */

    const fillLight = new THREE.DirectionalLight(0xdbe5ff, 2);

    fillLight.position.set(5, 2, 6);

    scene.add(fillLight);

    /*
     * BCC red accent.
     */

    const redLight = new THREE.PointLight(0xe52521, 10, 18);

    redLight.position.set(-5, -0.4, 4);

    scene.add(redLight);

    /*
     * Back rim light.
     */

    const rimLight = new THREE.PointLight(0xfff8ef, 5, 16);

    rimLight.position.set(4, 5, -3);

    scene.add(rimLight);

    /*
     * Warm lower bounce.
     */

    const bounceLight = new THREE.PointLight(0xd59655, 3, 12);

    bounceLight.position.set(0, -4, 5);

    scene.add(bounceLight);

    const ambient = new THREE.AmbientLight(0xffffff, 0.58);

    scene.add(ambient);

    /* =====================================================
       QR MATRIX
    ===================================================== */

    const qr = QRCode.create(url, {
      errorCorrectionLevel: "H",
    });

    const size = qr.modules.size;

    const data = qr.modules.data;

    const activeCells = [];

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (data[y * size + x]) {
          activeCells.push({
            x,
            y,
          });
        }
      }
    }

    /* =====================================================
       VOXEL GEOMETRY

       Deeper than before.

       During rotation you can now
       clearly see the sides.
    ===================================================== */

    const geometry = new THREE.BoxGeometry(0.19, 0.19, 0.3);

    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,

      roughness: 0.3,

      metalness: 0.035,

      clearcoat: 0.42,

      clearcoatRoughness: 0.26,

      sheen: 0.18,

      sheenColor: new THREE.Color(0xfff0dc),

      sheenRoughness: 0.48,

      reflectivity: 0.58,
    });

    const mesh = new THREE.InstancedMesh(
      geometry,
      material,
      activeCells.length,
    );

    mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    mesh.frustumCulled = false;

    scene.add(mesh);

    /* =====================================================
       QR POSITIONS
    ===================================================== */

    const spacing = 0.205;

    const qrPositions = activeCells.map(
      (cell) =>
        new THREE.Vector3(
          (cell.x - (size - 1) / 2) * spacing,

          -(cell.y - (size - 1) / 2) * spacing,

          0,
        ),
    );

    /* =====================================================
       CUP POSITIONS
    ===================================================== */

    const { points: cupPositions, roles } = createCupPoints(activeCells.length);

    /* =====================================================
       RICH BCC COLORS
    ===================================================== */

    const ivoryLight = new THREE.Color("#fff8e9");

    const ivoryWarm = new THREE.Color("#e8d7bd");

    const ceramicShadow = new THREE.Color("#b89e7d");

    const espressoDark = new THREE.Color("#1b0d08");

    const espresso = new THREE.Color("#452519");

    const coffeeWarm = new THREE.Color("#6b3822");

    const cremaLight = new THREE.Color("#e8bc79");

    const cremaGold = new THREE.Color("#b8793e");

    const bccRed = new THREE.Color("#e52521");

    const bccDarkRed = new THREE.Color("#9f1515");

    const steamLight = new THREE.Color("#f1eee8");

    const steamCool = new THREE.Color("#aaa7a1");

    const qrColor = new THREE.Color("#050505");

    /* =====================================================
       INSTANCE START COLORS
    ===================================================== */

    const cupColors = roles.map((role, index) => {
      const random = pseudoRandom(index, 92);

      /*
       * COFFEE
       */

      if (role === "coffee") {
        if (random > 0.86) {
          return cremaLight.clone();
        }

        if (random > 0.7) {
          return cremaGold.clone();
        }

        if (random > 0.44) {
          return coffeeWarm.clone();
        }

        if (random > 0.2) {
          return espresso.clone();
        }

        return espressoDark.clone();
      }

      /*
       * STEAM
       */

      if (role === "steam") {
        return random > 0.5 ? steamLight.clone() : steamCool.clone();
      }

      /*
       * RIM
       */

      if (role === "rim") {
        if (random > 0.94) {
          return bccRed.clone();
        }

        return ivoryLight.clone();
      }

      /*
       * HANDLE
       */

      if (role === "handle") {
        if (random > 0.91) {
          return bccDarkRed.clone();
        }

        return random > 0.48 ? ivoryLight.clone() : ivoryWarm.clone();
      }

      /*
       * SAUCER
       */

      if (role === "saucer") {
        if (random > 0.93) {
          return bccRed.clone();
        }

        if (random > 0.57) {
          return ivoryLight.clone();
        }

        if (random > 0.25) {
          return ivoryWarm.clone();
        }

        return ceramicShadow.clone();
      }

      /*
       * CERAMIC BODY
       *
       * Red blocks are intentionally
       * rare accents.
       */

      if (random > 0.955) {
        return bccRed.clone();
      }

      if (random > 0.91) {
        return bccDarkRed.clone();
      }

      if (random > 0.63) {
        return ivoryLight.clone();
      }

      if (random > 0.27) {
        return ivoryWarm.clone();
      }

      return ceramicShadow.clone();
    });

    /* =====================================================
       DIFFERENT BLOCK PROPORTIONS

       Not every piece is an identical cube.
    ===================================================== */

    const cupScales = roles.map((role, index) => {
      const random = pseudoRandom(index, 111);

      if (role === "steam") {
        return {
          x: 0.34,
          y: 0.85 + random * 0.5,
          z: 0.3,
        };
      }

      if (role === "coffee") {
        return {
          x: 0.8 + random * 0.18,

          y: 0.4,

          z: 0.82 + random * 0.2,
        };
      }

      if (role === "rim") {
        return {
          x: 1.12,
          y: 0.72,
          z: 1.22,
        };
      }

      if (role === "handle") {
        return {
          x: 0.92,
          y: 0.92,
          z: 1.28,
        };
      }

      if (role === "saucer") {
        return {
          x: 1.08,
          y: 0.5,
          z: 1.08,
        };
      }

      return {
        x: 0.92 + random * 0.16,

        y: 0.92 + random * 0.16,

        z: 1 + random * 0.4,
      };
    });

    /* =====================================================
       TRANSFORMATION STAGGER

       Creates wave instead of
       everything moving together.
    ===================================================== */

    const delays = activeCells.map((_, index) => {
      const cup = cupPositions[index];

      const vertical = clamp01(THREE.MathUtils.mapLinear(cup.y, -2, 3.7, 0, 1));

      const radial = clamp01(Math.abs(cup.x) / 3.5);

      const random = pseudoRandom(index, 81);

      return vertical * 0.07 + radial * 0.025 + random * 0.045;
    });

    /* =====================================================
       QR WHITE BACKPLATE
    ===================================================== */

    const qrPlateSize = (size + 8) * spacing;

    const qrPlateGeometry = new THREE.PlaneGeometry(qrPlateSize, qrPlateSize);

    const qrPlateMaterial = new THREE.MeshBasicMaterial({
      color: 0xf7f7f5,

      transparent: true,

      opacity: 0,

      depthWrite: false,
    });

    const qrPlate = new THREE.Mesh(qrPlateGeometry, qrPlateMaterial);

    qrPlate.position.z = -0.18;

    qrPlate.scale.setScalar(0.96);

    scene.add(qrPlate);

    /* =====================================================
       FLOOR SHADOW
    ===================================================== */

    const shadowGeometry = new THREE.PlaneGeometry(6.8, 1.8);

    const shadowMaterial = new THREE.MeshBasicMaterial({
      color: 0x000000,

      transparent: true,

      opacity: 0.32,

      depthWrite: false,
    });

    const shadow = new THREE.Mesh(shadowGeometry, shadowMaterial);

    shadow.rotation.x = -Math.PI / 2;

    shadow.position.set(0, -1.76, 0.15);

    scene.add(shadow);

    /* =====================================================
       RENDER HELPERS
    ===================================================== */

    const dummy = new THREE.Object3D();

    const tempColor = new THREE.Color();

    /* =====================================================
       PIXEL RENDER
    ===================================================== */

    const renderPixels = (elapsed) => {
      const globalProgress = progressRef.current.value;

      activeCells.forEach((_, index) => {
        const delay = delays[index];

        /*
         * Each voxel gets its own
         * local progress.
         */

        const localProgress = smoothstep(
          (globalProgress - delay) / (1 - delay),
        );

        const start = cupPositions[index];

        const end = qrPositions[index];

        /* =================================
             POSITION
          ================================= */

        let x = THREE.MathUtils.lerp(start.x, end.x, localProgress);

        let y = THREE.MathUtils.lerp(start.y, end.y, localProgress);

        let z = THREE.MathUtils.lerp(start.z, end.z, localProgress);

        /*
         * Arc reaches maximum halfway.
         */

        const arc = Math.sin(localProgress * Math.PI);

        const random1 = pseudoRandom(index, 38);

        const random2 = pseudoRandom(index, 44);

        const random3 = pseudoRandom(index, 51);

        /*
         * Large depth travel.
         *
         * This is what makes the
         * blocks feel truly 3D.
         */

        const depthFlight = arc * (0.85 + random1 * 2.2);

        const depthDirection = random2 > 0.38 ? 1 : -0.52;

        z += depthFlight * depthDirection;

        /*
         * Circular / magnetic movement.
         */

        const swirlAngle = index * 0.31 + localProgress * Math.PI * 3;

        const swirlStrength = arc * (0.07 + random3 * 0.28);

        x += Math.cos(swirlAngle) * swirlStrength;

        y += Math.sin(swirlAngle) * swirlStrength;

        /*
         * Selected voxels travel
         * very close to camera.
         */

        if (random1 > 0.88) {
          z += arc * 1.55;
        }

        /*
         * Tiny vertical lift gives
         * a lighter transition.
         */

        y += arc * (random2 - 0.5) * 0.22;

        dummy.position.set(x, y, z);

        /* =================================
             ROTATION
          ================================= */

        const rotationAmount = Math.sin(localProgress * Math.PI);

        dummy.rotation.set(
          rotationAmount * (pseudoRandom(index, 54) - 0.5) * 2.6,

          rotationAmount * (pseudoRandom(index, 61) - 0.5) * 3.5,

          rotationAmount * (pseudoRandom(index, 72) - 0.5) * 2.3,
        );

        /*
         * Smoothly flatten orientation
         * during final QR landing.
         */

        if (localProgress > 0.86) {
          const settle = smoothstep((localProgress - 0.86) / 0.14);

          dummy.rotation.x *= 1 - settle;

          dummy.rotation.y *= 1 - settle;

          dummy.rotation.z *= 1 - settle;
        }

        /* =================================
             SCALE
          ================================= */

        const cupScale = cupScales[index];

        const scaleX = THREE.MathUtils.lerp(cupScale.x, 1, localProgress);

        const scaleY = THREE.MathUtils.lerp(cupScale.y, 1, localProgress);

        /*
         * Final QR tiles are thinner
         * than cup voxels.
         */

        const scaleZ = THREE.MathUtils.lerp(cupScale.z, 0.5, localProgress);

        /*
         * Slight expansion when blocks
         * break apart.
         */

        const expansion = 1 + Math.sin(localProgress * Math.PI) * 0.14;

        dummy.scale.set(
          scaleX * expansion,
          scaleY * expansion,
          scaleZ * expansion,
        );

        dummy.updateMatrix();

        mesh.setMatrixAt(index, dummy.matrix);

        /* =================================
             COLOR

             Keep cup colors for most
             of the animation.

             Only turn black near QR landing.
          ================================= */

        const colorProgress = smoothstep((localProgress - 0.56) / 0.37);

        tempColor.copy(cupColors[index]).lerp(qrColor, colorProgress);

        mesh.setColorAt(index, tempColor);
      });

      mesh.instanceMatrix.needsUpdate = true;

      if (mesh.instanceColor) {
        mesh.instanceColor.needsUpdate = true;
      }

      /* =================================
         ENTIRE SCULPTURE ORIENTATION
      ================================= */

      const straighten = smoothstep((globalProgress - 0.28) / 0.62);

      /*
       * Cup begins at an angle,
       * showing voxel sides.
       */

      const idleStrength = Math.pow(1 - globalProgress, 2);

      mesh.rotation.y =
        THREE.MathUtils.lerp(-0.17, 0, straighten) +
        Math.sin(elapsed * 0.35) * 0.012 * idleStrength;

      mesh.rotation.x = THREE.MathUtils.lerp(-0.055, 0, straighten);

      /*
       * Very subtle floating cup.
       */

      mesh.position.y = Math.sin(elapsed * 0.75) * 0.045 * idleStrength;

      /* =================================
         QR BACKGROUND
      ================================= */

      const plateReveal = smoothstep((globalProgress - 0.9) / 0.1);

      qrPlateMaterial.opacity = plateReveal;

      qrPlate.scale.setScalar(THREE.MathUtils.lerp(0.96, 1, plateReveal));

      /* =================================
         CUP FLOOR SHADOW
      ================================= */

      shadowMaterial.opacity = THREE.MathUtils.lerp(
        0.32,
        0,
        smoothstep(globalProgress / 0.78),
      );

      shadow.scale.x = 1 + Math.sin(elapsed * 0.6) * 0.025 * idleStrength;

      /* =================================
         LIGHT BREATHING
      ================================= */

      redLight.intensity = 9 + Math.sin(elapsed * 0.85) * 1.5 * idleStrength;
    };

    /* =====================================================
       INTERACTION

       Much slower than previous version.
    ===================================================== */

    const reveal = () => {
      gsap.killTweensOf(progressRef.current);

      gsap.to(progressRef.current, {
        value: 1,

        duration: 3.4,

        ease: "power2.inOut",
      });
    };

    const hide = () => {
      gsap.killTweensOf(progressRef.current);

      gsap.to(progressRef.current, {
        value: 0,

        duration: 3.6,

        ease: "power2.inOut",
      });
    };

    const toggle = () => {
      const shouldReveal = progressRef.current.value < 0.5;

      if (shouldReveal) {
        reveal();
      } else {
        hide();
      }
    };

    container.addEventListener("mouseenter", reveal);

    container.addEventListener("mouseleave", hide);

    container.addEventListener("click", toggle);

    /* =====================================================
       RESIZE
    ===================================================== */

    const resize = () => {
      const width = container.clientWidth;

      const height = container.clientHeight;

      if (!width || !height) {
        return;
      }

      renderer.setSize(width, height, false);

      camera.aspect = width / height;

      camera.updateProjectionMatrix();
    };

    resize();

    window.addEventListener("resize", resize);

    /* =====================================================
       RENDER LOOP
    ===================================================== */

    const clock = new THREE.Clock();

    let frame;

    const render = () => {
      const elapsed = clock.getElapsedTime();

      renderPixels(elapsed);

      renderer.render(scene, camera);

      frame = requestAnimationFrame(render);
    };

    render();

    /* =====================================================
       CLEANUP
    ===================================================== */

    return () => {
      cancelAnimationFrame(frame);

      gsap.killTweensOf(progressRef.current);

      window.removeEventListener("resize", resize);

      container.removeEventListener("mouseenter", reveal);

      container.removeEventListener("mouseleave", hide);

      container.removeEventListener("click", toggle);

      geometry.dispose();

      material.dispose();

      qrPlateGeometry.dispose();

      qrPlateMaterial.dispose();

      shadowGeometry.dispose();

      shadowMaterial.dispose();

      renderer.dispose();

      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [url]);

  /* =====================================================
     JSX
  ===================================================== */

  return (
    <div className="coffee-qr">
      <div ref={containerRef} className="coffee-qr__canvas" />

      <div className="coffee-qr__copy">
        <span>FROM CUP TO CONNECTION</span>

        <p>Hover to reveal. Scan to explore The Black Coffee Café.</p>
      </div>
    </div>
  );
}
