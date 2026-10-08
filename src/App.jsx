import { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CoffeeQR from "./components/qr";
import CupReveal from "./components/CupReveal";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

gsap.registerPlugin(ScrollTrigger);

const chapters = [
  {
    id: "origin",
    number: "01",
    kicker: "Ethiopia",
    title: ["Where coffee", "begins."],
    body: "In the highlands of Ethiopia, coffee begins its journey beneath a rich, living landscape.",
    align: "center",
    accent: true,
  },

  {
    id: "harvest",
    number: "02",
    kicker: "The Harvest",
    title: ["Picked", "at its peak."],
    body: "Ripe coffee cherries are carefully selected when their colour, sweetness and flavour are ready.",
    align: "left",
  },

  {
    id: "processing",
    number: "03",
    kicker: "From Cherry to Bean",
    title: ["The fruit fades.", "The bean remains."],
    body: "The coffee cherry is processed to uncover the seeds at the heart of every cup.",
    align: "right",
  },

  {
    id: "drying",
    number: "04",
    kicker: "Drying",
    title: ["Time.", "Air.", "Patience."],
    body: "The beans are carefully dried, allowing moisture to leave while flavour continues to develop.",
    align: "left",
  },

  {
    id: "roasting",
    number: "05",
    kicker: "The Roast",
    title: ["Heat transforms", "everything."],
    body: "Green coffee meets heat, developing the colour, aroma and character hidden within the bean.",
    align: "right",
    accent: true,
  },

  {
    id: "grinding",
    number: "06",
    kicker: "Grinding",
    title: ["Broken down.", "Opened up."],
    body: "Freshly roasted beans are ground with precision, preparing their flavour for extraction.",
    align: "left",
  },

  {
    id: "brewing",
    number: "07",
    kicker: "Brewing",
    title: ["Water meets", "coffee."],
    body: "Hot water draws out the aroma, sweetness and depth developed through every stage of the journey.",
    align: "right",
    accent: true,
  },

  {
    id: "cup",
    number: "08",
    kicker: "The Cup",
    title: ["The journey", "becomes a ritual."],
    body: "From the first aroma to the final pour, every step comes together in a single cup.",
    align: "center",
  },

  {
    id: "experience",
    number: "09",
    kicker: "The Black Coffee Café",
    title: ["From origin", "to experience."],
    body: "Coffee reaches the table alongside food, conversation and the atmosphere that defines BCC.",
    align: "left",
    accent: true,
  },

  {
    id: "final",
    number: "10",
    kicker: "From Ethiopia to BCC",
    title: ["Every bean", "has a journey."],
    body: "And every journey ends with a cup worth remembering.",
    align: "center",
    accent: true,
  },
];

export default function App() {
  const experienceRef = useRef(null);

  const forestRef = useRef(null);
  const beansRef = useRef(null);
  const videoRef = useRef(null);

  const progressRef = useRef(null);
  const chapterRefs = useRef([]);

  // Forest
  const forestTargetTime = useRef(0);
  const forestRenderedTime = useRef(0);

  // Beans transition
  const beansTargetTime = useRef(0);
  const beansRenderedTime = useRef(0);

  // Main scene
  const sceneTargetTime = useRef(0);
  const sceneRenderedTime = useRef(0);

  const [videoReady, setVideoReady] = useState(false);
  const [activeChapter, setActiveChapter] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  /* ---------------------------------------------
     SMOOTH SCROLL
  ---------------------------------------------- */

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.82,
      touchMultiplier: 1,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const updateLenis = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    window.__lenis = lenis;

    return () => {
      gsap.ticker.remove(updateLenis);

      lenis.destroy();

      delete window.__lenis;
    };
  }, []);

  /* ---------------------------------------------
     VIDEO INITIALISATION
  ---------------------------------------------- */

  useEffect(() => {
    const forest = forestRef.current;
    const beans = beansRef.current;
    const scene = videoRef.current;

    if (!forest || !beans || !scene) return;

    const videos = [forest, beans, scene];

    let initialised = false;

    const prepareVideo = (video) => {
      video.muted = true;
      video.playsInline = true;
      video.preload = "auto";

      video.pause();

      try {
        video.currentTime = 0.001;
      } catch {
        // browser still preparing
      }
    };

    const checkReady = () => {
      if (initialised) return;

      const allReady = videos.every(
        (video) =>
          video.readyState >= 1 &&
          Number.isFinite(video.duration) &&
          video.duration > 0,
      );

      if (!allReady) return;

      initialised = true;

      videos.forEach(prepareVideo);

      forestTargetTime.current = 0;
      forestRenderedTime.current = 0;

      beansTargetTime.current = 0;
      beansRenderedTime.current = 0;

      sceneTargetTime.current = 0;
      sceneRenderedTime.current = 0;

      setVideoReady(true);

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };

    videos.forEach((video) => {
      video.addEventListener("loadedmetadata", checkReady);
    });

    checkReady();

    return () => {
      videos.forEach((video) => {
        video.removeEventListener("loadedmetadata", checkReady);
      });
    };
  }, []);

  /* ---------------------------------------------
     MAIN EXPERIENCE
  ---------------------------------------------- */

  useLayoutEffect(() => {
    if (!videoReady) return;

    const experience = experienceRef.current;

    const forest = forestRef.current;

    const beans = beansRef.current;

    const scene = videoRef.current;

    const chapter01 = chapterRefs.current[0];

    const chapter02 = chapterRefs.current[1];

    if (
      !experience ||
      !forest ||
      !beans ||
      !scene ||
      !chapter01 ||
      !chapter02
    ) {
      return;
    }

    let rafId;

    let lastForestSeek = 0;
    let lastBeansSeek = 0;
    let lastSceneSeek = 0;

    /*
     * Use only the visually useful
     * portion of the beans clip.
     */
    const beansStartTime = 0.05;

    const beansEndTime = Math.max(beans.duration - 0.08, beansStartTime);

    const ctx = gsap.context(() => {
      // /* -----------------------------------------
      //    GLOBAL VIDEO TIMELINE
      // ------------------------------------------ */

      // ScrollTrigger.create({
      //   trigger: experience,

      //   start: "top top",

      //   /*
      //    * IMPORTANT:
      //    *
      //    * The video finishes when the last real
      //    * content section finishes.
      //    */
      //   end: "bottom bottom",

      //   invalidateOnRefresh: true,

      //   onUpdate: (self) => {
      //     if (!video.duration) return;

      //     const progress = self.progress;

      //     targetTime.current = progress * Math.max(video.duration - 0.08, 0);

      //     if (progressRef.current) {
      //       gsap.set(progressRef.current, {
      //         scaleX: progress,
      //       });
      //     }
      //   },
      // });
      /* -----------------------------------------
       MEDIA INITIAL STATE
    ------------------------------------------ */

      gsap.set(forest, {
        autoAlpha: 1,
        scale: 1,
        filter: "brightness(1) saturate(1) blur(0px)",
      });

      gsap.set(beans, {
        autoAlpha: 0,

        scale: 1.025,

        filter: "brightness(0.78) saturate(0.9) blur(2px)",
      });

      gsap.set(scene, {
        autoAlpha: 0,

        scale: 1.035,

        filter: "brightness(0.76) saturate(0.9) blur(3px)",
      });

      /* -----------------------------------------
       GLOBAL PAGE PROGRESS
    ------------------------------------------ */

      ScrollTrigger.create({
        trigger: experience,

        start: "top top",
        end: "bottom bottom",

        invalidateOnRefresh: true,

        onUpdate: (self) => {
          if (progressRef.current) {
            gsap.set(progressRef.current, {
              scaleX: self.progress,
            });
          }
        },
      });

      /* -----------------------------------------
       01 — FOREST / ORIGIN
    ------------------------------------------ */

      ScrollTrigger.create({
        trigger: chapter01,

        start: "top top",

        // Finish forest much sooner
        end: "bottom 88%",

        invalidateOnRefresh: true,

        onUpdate: (self) => {
          if (!forest.duration) return;

          forestTargetTime.current =
            self.progress * Math.max(forest.duration - 0.08, 0);
        },
      });

      /* -----------------------------------------
       FOREST → ROASTED BEAN TRANSITION
    ------------------------------------------ */

      /* ==========================================
   CHAPTER 01 — FOREST PLAYHEAD
========================================== */

      ScrollTrigger.create({
        trigger: chapter01,

        start: "top top",

        // Forest finishes BEFORE Chapter 01 completely leaves.
        // This is exactly where the beans bridge begins.
        end: "bottom 72%",

        invalidateOnRefresh: true,

        onUpdate: (self) => {
          if (!forest.duration) return;

          forestTargetTime.current =
            self.progress * Math.max(forest.duration - 0.08, 0);
        },
      });

      /* ==========================================
   FOREST → BEANS → SCENE

   0.00 ───────── 0.30
   Forest -> Beans

   0.30 ───────── 0.70
   Beans stays fully visible

   0.70 ───────── 1.00
   Beans -> Main Scene
========================================== */

      const mediaBridge = gsap.timeline({
        scrollTrigger: {
          trigger: chapter01,

          start: "bottom 88%",

          endTrigger: chapter02,
          end: "top -20%",

          scrub: 1.25,

          invalidateOnRefresh: true,

          onUpdate: (self) => {
            if (!beans.duration) return;

            beansTargetTime.current =
              beansStartTime + self.progress * (beansEndTime - beansStartTime);
          },
        },
      });

      /* ------------------------------------------
   PHASE 01
   FOREST → BEANS
------------------------------------------ */

      mediaBridge

        .to(
          forest,
          {
            autoAlpha: 0,

            scale: 1.075,

            filter: "brightness(0.32) saturate(0.45) blur(5px)",

            duration: 0.3,

            ease: "none",
          },
          0,
        )

        .to(
          beans,
          {
            autoAlpha: 1,

            scale: 1,

            filter: "brightness(1) saturate(1) blur(0px)",

            duration: 0.28,

            ease: "none",
          },
          0.02,
        )

        /* ------------------------------------------
     PHASE 02
     LET THE BEANS BREATHE

     Beans remain completely visible here.

     Only an extremely subtle camera push happens.
  ------------------------------------------ */

        .to(
          beans,
          {
            scale: 1.025,

            duration: 0.4,

            ease: "none",
          },
          0.3,
        )

        /* ------------------------------------------
     PHASE 03
     BEANS → MAIN SCENE
  ------------------------------------------ */

        .to(
          beans,
          {
            autoAlpha: 0,

            scale: 1.085,

            filter: "brightness(0.42) saturate(0.72) blur(5px)",

            duration: 0.3,

            ease: "none",
          },
          0.7,
        )

        .to(
          scene,
          {
            autoAlpha: 1,

            scale: 1,

            filter: "brightness(1) saturate(1) blur(0px)",

            duration: 0.3,

            ease: "none",
          },
          0.7,
        );

      /* ==========================================
   CHAPTER 02+ — MAIN SCENE PLAYHEAD
========================================== */

      ScrollTrigger.create({
        trigger: chapter02,

        /*
         * The scene video doesn't start scrubbing early.
         *
         * Beans owns the transition first.
         */
        start: "top 10%",

        endTrigger: experience,
        end: "bottom bottom",

        invalidateOnRefresh: true,

        onUpdate: (self) => {
          if (!scene.duration) return;

          sceneTargetTime.current =
            self.progress * Math.max(scene.duration - 0.08, 0);
        },
      });
      /* -----------------------------------------
         REAL CHAPTER ANIMATIONS
      ------------------------------------------ */

      chapterRefs.current.forEach((chapter, index) => {
        if (!chapter) return;

        const content = chapter.querySelector(".chapter__content");

        const eyebrow = chapter.querySelector(".chapter__eyebrow");

        const titleLines = chapter.querySelectorAll(".title-line > span");

        const description = chapter.querySelector(".chapter__description");

        const decoration = chapter.querySelector(".chapter__rule");

        /*
         * First hero must exist immediately.
         */

        if (index === 0) {
          gsap.set(content, {
            autoAlpha: 1,
          });

          gsap.set(titleLines, {
            yPercent: 0,
          });

          gsap.set([eyebrow, description, decoration], {
            opacity: 1,
          });
        } else {
          gsap.set(content, {
            autoAlpha: 1,
          });

          gsap.set(eyebrow, {
            opacity: 0,
            y: 16,
          });

          gsap.set(titleLines, {
            yPercent: 120,
          });

          gsap.set(description, {
            opacity: 0,
            y: 28,
          });

          gsap.set(decoration, {
            scaleX: 0,
            transformOrigin: index % 2 === 0 ? "left center" : "right center",
          });

          const intro = gsap.timeline({
            scrollTrigger: {
              trigger: chapter,

              start: "top 85%",
              end: "top 34%",

              scrub: 1,
            },
          });

          intro
            .to(
              eyebrow,
              {
                opacity: 1,
                y: 0,
                ease: "none",
              },
              0,
            )

            .to(
              titleLines,
              {
                yPercent: 0,

                stagger: 0.07,

                ease: "none",
              },
              0.08,
            )

            .to(
              decoration,
              {
                scaleX: 1,
                ease: "none",
              },
              0.15,
            )

            .to(
              description,
              {
                opacity: 1,
                y: 0,
                ease: "none",
              },
              0.18,
            );
        }

        /*
         * Every section independently disappears
         * before the next scene takes control.
         */

        const outro = gsap.timeline({
          scrollTrigger: {
            trigger: chapter,

            start: "bottom 52%",
            end: "bottom 12%",

            scrub: 1,
          },
        });

        outro
          .to(
            titleLines,
            {
              yPercent: -115,
              stagger: 0.035,
              ease: "none",
            },
            0,
          )

          .to(
            eyebrow,
            {
              opacity: 0,
              y: -15,
              ease: "none",
            },
            0,
          )

          .to(
            description,
            {
              opacity: 0,
              y: -20,
              ease: "none",
            },
            0,
          )

          .to(
            decoration,
            {
              opacity: 0,
            },
            0,
          );

        /*
         * Update fixed section indicator.
         */

        ScrollTrigger.create({
          trigger: chapter,

          start: "top 52%",
          end: "bottom 52%",

          onEnter: () => setActiveChapter(index),

          onEnterBack: () => setActiveChapter(index),
        });
      });

      gsap.to(".stage-vignette", {
        opacity: 0.72,

        ease: "none",

        scrollTrigger: {
          trigger: experience,

          start: "20% top",
          end: "80% bottom",

          scrub: true,
        },
      });
    }, experience);

    /* -------------------------------------------
       SMOOTH VIDEO PLAYHEAD

       Scroll position chooses TARGET time.

       RAF softly chases the target so wheel events
       don't look like raw video seeking.
    -------------------------------------------- */

    const scrubVideo = (video, targetRef, renderedRef, timestamp, lastSeek) => {
      const target = targetRef.current;

      let current = renderedRef.current;

      current += (target - current) * 0.115;

      renderedRef.current = current;

      if (
        timestamp - lastSeek > 30 &&
        video.readyState >= 2 &&
        Math.abs(video.currentTime - current) > 0.018
      ) {
        try {
          video.currentTime = current;

          return timestamp;
        } catch {
          // browser is buffering
        }
      }

      return lastSeek;
    };
    const render = (timestamp) => {
      /* FOREST */

      lastForestSeek = scrubVideo(
        forest,
        forestTargetTime,
        forestRenderedTime,
        timestamp,
        lastForestSeek,
      );

      /* BEANS */

      lastBeansSeek = scrubVideo(
        beans,
        beansTargetTime,
        beansRenderedTime,
        timestamp,
        lastBeansSeek,
      );

      /* MAIN SCENE */

      lastSceneSeek = scrubVideo(
        scene,
        sceneTargetTime,
        sceneRenderedTime,
        timestamp,
        lastSceneSeek,
      );

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);

      ctx.revert();
    };
  }, [videoReady]);

  /* ---------------------------------------------
     MENU NAVIGATION
  ---------------------------------------------- */

  const goToChapter = (index) => {
    const chapter = chapterRefs.current[index];

    if (!chapter) return;

    setMenuOpen(false);

    if (window.__lenis) {
      window.__lenis.scrollTo(chapter, {
        offset: 0,
        duration: 1.7,
      });

      return;
    }

    chapter.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="site">
      {/* Loader */}

      <div className={`loader ${videoReady ? "loader--finished" : ""}`}>
        <div className="loader__content">
          <img
            className="loader__logo"
            src="/logo_bcc.png"
            alt="The Black Coffee Cafe"
          />

          <div className="loader__track">
            <i />
          </div>

          <small>COFFEE • FOOD • CULTURE</small>
        </div>
      </div>

      {/* Header */}

      <header className="header">
        <div>
          <button
            className="logo"
            onClick={() => goToChapter(0)}
            aria-label="The Black Coffee Cafe">
            <img src="/logo_bcc.png" alt="The Black Coffee Cafe" />
          </button>
        </div>
      </header>

      {/* Menu */}

      <aside className={`menu ${menuOpen ? "menu--open" : ""}`}>
        <nav>
          {chapters.map((chapter, index) => (
            <button key={chapter.id} onClick={() => goToChapter(index)}>
              <small>{chapter.number}</small>

              <span>{chapter.kicker}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Main cinematic experience */}

      <section className="experience" ref={experienceRef}>
        {/* This stays behind the entire journey */}

        <div className="media-stage">
          {/* FOREST */}

          <video
            ref={forestRef}
            className="forest-video"
            src="/forest.mov"
            muted
            playsInline
            preload="auto"
          />

          {/* ROASTED BEANS BRIDGE */}

          <video
            ref={beansRef}
            className="beans-video"
            src="/beans.mov"
            muted
            playsInline
            preload="auto"
          />

          {/* EXISTING MAIN FILM */}

          <video
            ref={videoRef}
            className="scene-video"
            src="/scene.mp4"
            muted
            playsInline
            preload="auto"
          />

          <div className="stage-gradient" />
          <div className="stage-vignette" />
          <div className="red-atmosphere" />
          <div className="noise" />
        </div>

        {/*

          THESE ARE NOW REAL SECTIONS.

          Not fake copy sitting inside one giant
          fixed viewport.

        */}

        <div className="chapter-stack">
          {chapters.map((chapter, index) => (
            <section
              key={chapter.id}
              id={chapter.id}
              ref={(element) => {
                chapterRefs.current[index] = element;
              }}
              className={`
  chapter
  chapter--${chapter.align}
  ${chapter.accent ? "chapter--accent" : ""}
`}>
              <div className="chapter__pin">
                <div className="chapter__content">
                  <div className="chapter__eyebrow">
                    <span>{chapter.number}</span>

                    <i />

                    <span>{chapter.kicker}</span>
                  </div>

                  <h1 className="chapter__title">
                    {chapter.title.map((line, lineIndex) => (
                      <span className="title-line" key={lineIndex}>
                        <span>{line}</span>
                      </span>
                    ))}
                  </h1>

                  <div className="chapter__rule" />

                  <p className="chapter__description">{chapter.body}</p>
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>

      {/* Actual normal page after cinematic story */}
      <CupReveal />
      <section className="ending">
        <div className="ending__grid">
          <div className="ending__left">
            <p className="ending__eyebrow">THE BLACK COFFEE CAFÉ</p>

            <h2>
              Black.
              <br />
              <span>Bold.</span>
              <br />
              Beautiful.
            </h2>

            <div className="ending__actions">
              <a
                href="https://theblackcoffeecafe.com/?page_id=3788"
                target="_blank"
                rel="noreferrer">
                Explore Menu
                <span>↗</span>
              </a>

              <a
                href="https://theblackcoffeecafe.com/?page_id=3899"
                target="_blank"
                rel="noreferrer">
                Visit BCC
                <span>↗</span>
              </a>
            </div>
          </div>

          <div className="ending__right">
            <CoffeeQR url="https://theblackcoffeecafe.com/" />
          </div>
        </div>

        <div className="ending__bottom">
          <span>SPECIALTY COFFEE</span>
          <span>FOOD • COFFEE • CULTURE</span>
          <span>© BLACK COFFEE CAFÉ</span>
        </div>
      </section>

      <div className="page-progress">
        <div ref={progressRef} className="page-progress__fill" />
      </div>
    </main>
  );
}
