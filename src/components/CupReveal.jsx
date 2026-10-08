import { useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";

const cupLid = "/bcc-cup-lid.png";

const cupBody = "/bcc-cup-body.png";

const leftItems = [
  {
    icon: "leaf",

    title: "Benefiting you",

    text: "From focused mornings to slow afternoons, coffee becomes part of the rhythm of your day.",
  },

  {
    icon: "package",

    title: "Made with care",

    text: "Thoughtful details, considered presentation and a cup designed to feel unmistakably BCC.",
  },

  {
    icon: "diamond",

    title: "Quality first",

    text: "Coffee, ingredients and preparation are treated with attention at every stage of the experience.",
  },
];

const rightItems = [
  {
    icon: "gift",

    title: "Best in class",

    text: "A bold visual identity and café experience built around detail, quality and presentation.",
  },

  {
    icon: "loyalty",

    title: "Worth returning to",

    text: "Coffee, food and atmosphere come together to create an everyday ritual people remember.",
  },

  {
    icon: "network",

    title: "The BCC experience",

    text: "From the first pour to the last sip, every detail belongs to the same Black Coffee Café story.",
  },
];

function FeatureIcon({ type }) {
  const common = {
    fill: "none",

    stroke: "currentColor",

    strokeWidth: 1.8,

    strokeLinecap: "round",

    strokeLinejoin: "round",
  };

  if (type === "leaf") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="M12 21v-9" />

        <path {...common} d="M12 14c-4.3 0-7-2.4-7-6.5 4.2-.3 7 1.9 7 6.5Z" />

        <path {...common} d="M12 11c0-4 2.2-6.4 6-7 1 4.1-.8 7-6 7Z" />
      </svg>
    );
  }

  if (type === "package") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <ellipse {...common} cx="12" cy="5.5" rx="6" ry="2.5" />

        <path {...common} d="M6 5.5v12c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-12" />
      </svg>
    );
  }

  if (type === "diamond") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="m4 8 3-4h10l3 4-8 12L4 8Z" />

        <path {...common} d="m7 4 5 16 5-16M4 8h16" />
      </svg>
    );
  }

  if (type === "gift") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path {...common} d="M4 10h16v10H4zM3 7h18v3H3zM12 7v13" />

        <path
          {...common}
          d="M12 7H8.8C6.9 7 6 6.1 6 4.9 6 3.8 6.9 3 8 3c2 0 4 4 4 4Zm0 0h3.2C17.1 7 18 6.1 18 4.9 18 3.8 17.1 3 16 3c-2 0-4 4-4 4Z"
        />
      </svg>
    );
  }

  if (type === "loyalty") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle {...common} cx="12" cy="12" r="8" />

        <path
          {...common}
          d="M8 13c1.1 1.6 2.4 2.4 4 2.4s2.9-.8 4-2.4M9 9h.01M15 9h.01"
        />

        <path {...common} d="M12 2v3M4.9 4.9 7 7M19.1 4.9 17 7" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle {...common} cx="12" cy="6" r="3" />

      <circle {...common} cx="6" cy="16" r="3" />

      <circle {...common} cx="18" cy="16" r="3" />

      <path {...common} d="m10.3 8.5-2.6 5M13.7 8.5l2.6 5M9 16h6" />
    </svg>
  );
}

export default function CupReveal() {
  const rootRef = useRef(null);

  const stageRef = useRef(null);

  const leftPanelRef = useRef(null);

  const rightPanelRef = useRef(null);

  const cupRef = useRef(null);

  const lidRef = useRef(null);

  const bodyRef = useRef(null);

  const mouthRef = useRef(null);

  const promptRef = useRef(null);

  const glowRef = useRef(null);

  const timelineRef = useRef(null);

  const hoverTweenRef = useRef(null);

  const [open, setOpen] = useState(false);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    const ctx = gsap.context(() => {
      const leftItemsEls = rootRef.current.querySelectorAll(
        ".cup-reveal__panel--left .cup-reveal__item",
      );

      const rightItemsEls = rootRef.current.querySelectorAll(
        ".cup-reveal__panel--right .cup-reveal__item",
      );

      const lines = rootRef.current.querySelectorAll(".cup-reveal__line");

      const steam = rootRef.current.querySelectorAll(".cup-reveal__steam i");

      gsap.set(leftPanelRef.current, {
        clipPath: "inset(0 0 0 100%)",
      });

      gsap.set(rightPanelRef.current, {
        clipPath: "inset(0 100% 0 0)",
      });

      gsap.set(leftItemsEls, {
        autoAlpha: 0,

        x: 34,
      });

      gsap.set(rightItemsEls, {
        autoAlpha: 0,

        x: -34,
      });

      gsap.set(lines, {
        scaleX: 0,

        transformOrigin: "center center",
      });

      gsap.set(mouthRef.current, {
        autoAlpha: 0,

        scaleX: 0.45,

        scaleY: 0.35,
      });

      gsap.set(glowRef.current, {
        autoAlpha: 0,

        scale: 0.72,
      });

      gsap.set(steam, {
        autoAlpha: 0,

        y: 20,

        scaleY: 0.7,
      });

      gsap.set(cupRef.current, {
        y: 20,

        scale: 0.965,
      });

      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const d = (value) => (reduceMotion ? 0.01 : value);

      // Different travel distances keep the separate pieces inside narrow screens.
      const mobile = window.matchMedia("(max-width: 760px)").matches;
      const lidLift = mobile ? -72 : -118;
      const lidSide = mobile ? -10 : -23;
      const lidTilt = mobile ? -11 : -14;
      const bodyTilt = mobile ? 4.5 : 5.5;

      timelineRef.current = gsap

        .timeline({
          paused: true,

          defaults: {
            overwrite: "auto",
          },

          onStart: () => {
            cupRef.current?.classList.add("is-animating");
          },

          onComplete: () => {
            cupRef.current?.classList.remove("is-animating");
          },

          onReverseComplete: () => {
            cupRef.current?.classList.remove("is-animating");
          },
        })

        // 01 — The cup becomes the focal point.

        .to(
          cupRef.current,

          {
            y: 0,

            scale: 1.025,

            duration: d(0.42),

            ease: "power3.out",
          },

          0,
        )

        .to(
          promptRef.current,

          {
            autoAlpha: 0,

            y: -12,

            duration: d(0.24),

            ease: "power2.out",
          },

          0,
        )

        // 02 — A warm glow appears behind the opening.

        .to(
          glowRef.current,

          {
            autoAlpha: 0.8,

            scale: 1,

            duration: d(0.5),

            ease: "power2.out",
          },

          0.08,
        )

        // 03 — Body settles while the opening is exposed.

        .to(
          bodyRef.current,

          {
            y: mobile ? 8 : 14,

            x: mobile ? 3 : 7,

            rotation: bodyTilt,

            scale: 0.995,

            duration: d(0.72),

            ease: "power3.inOut",
          },

          0.08,
        )

        .to(
          mouthRef.current,

          {
            autoAlpha: 1,

            scaleX: 1,

            scaleY: 1,

            duration: d(0.38),

            ease: "power3.out",
          },

          0.17,
        )

        // 04 — Lid and body tilt in opposite directions while separating.

        .to(
          lidRef.current,

          {
            y: lidLift,

            x: lidSide,

            rotation: lidTilt,

            scale: 1.03,

            duration: d(0.9),

            ease: "power4.inOut",
          },

          0.08,
        )

        // 05 — Panels unfold outward from behind the cup.

        .to(
          leftPanelRef.current,

          {
            clipPath: "inset(0 0 0 0%)",

            duration: d(0.95),

            ease: "power4.inOut",
          },

          0.3,
        )

        .to(
          rightPanelRef.current,

          {
            clipPath: "inset(0 0% 0 0)",

            duration: d(0.95),

            ease: "power4.inOut",
          },

          0.3,
        )

        // 06 — Steam rises only after the lid clears the rim.

        .to(
          steam,

          {
            autoAlpha: 0.58,

            y: 0,

            scaleY: 1,

            duration: d(0.72),

            stagger: reduceMotion ? 0 : 0.09,

            ease: "power2.out",
          },

          0.48,
        )

        // 07 — Fine lines + content arrive after the large motion.

        .to(
          lines,

          {
            scaleX: 1,

            duration: d(0.48),

            stagger: reduceMotion ? 0 : 0.035,

            ease: "power2.out",
          },

          0.7,
        )

        .to(
          leftItemsEls,

          {
            autoAlpha: 1,

            x: 0,

            duration: d(0.55),

            stagger: reduceMotion ? 0 : 0.07,

            ease: "power3.out",
          },

          0.69,
        )

        .to(
          rightItemsEls,

          {
            autoAlpha: 1,

            x: 0,

            duration: d(0.55),

            stagger: reduceMotion ? 0 : 0.07,

            ease: "power3.out",
          },

          0.74,
        )

        // 08 — Very small final settle keeps it premium, not bouncy.

        .to(
          cupRef.current,

          {
            scale: 1,

            duration: d(0.38),

            ease: "power2.out",
          },

          1.04,
        );

      mm.add(
        "(min-width: 761px) and (prefers-reduced-motion: no-preference)",

        () => {
          const xTo = gsap.quickTo(cupRef.current, "x", {
            duration: 0.55,

            ease: "power3.out",
          });

          const rotateTo = gsap.quickTo(cupRef.current, "rotation", {
            duration: 0.7,

            ease: "power3.out",
          });

          const onMove = (event) => {
            if (cupRef.current?.classList.contains("is-animating")) return;

            const rect = stageRef.current.getBoundingClientRect();

            const normalizedX = (event.clientX - rect.left) / rect.width - 0.5;

            xTo(normalizedX * 8);

            rotateTo(normalizedX * 0.9);
          };

          const onLeave = () => {
            xTo(0);

            rotateTo(0);
          };

          const stage = stageRef.current;

          stage.addEventListener("pointermove", onMove);

          stage.addEventListener("pointerleave", onLeave);

          hoverTweenRef.current = () => {
            stage.removeEventListener("pointermove", onMove);

            stage.removeEventListener("pointerleave", onLeave);
          };

          return hoverTweenRef.current;
        },
      );
    }, rootRef);

    return () => {
      hoverTweenRef.current?.();

      mm.revert();

      ctx.revert();
    };
  }, []);

  const openCup = () => {
    if (!timelineRef.current) return;

    setOpen(true);
    timelineRef.current.timeScale(1).play();
  };

  const closeCup = () => {
    if (!timelineRef.current) return;

    setOpen(false);
    timelineRef.current.timeScale(1.15).reverse();
  };

  return (
    <section
      ref={rootRef}
      className={`cup-reveal ${open ? "cup-reveal--open" : ""}`}
      aria-label="Discover the BCC cup">
      <div ref={stageRef} className="cup-reveal__stage">
        <div
          ref={leftPanelRef}
          className="cup-reveal__panel cup-reveal__panel--left">
          {leftItems.map((item, index) => (
            <article className="cup-reveal__row" key={item.title}>
              <div className="cup-reveal__item">
                <span className="cup-reveal__icon">
                  <FeatureIcon type={item.icon} />
                </span>

                <div className="cup-reveal__copy">
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>
              </div>

              {index < leftItems.length - 1 && (
                <span className="cup-reveal__line" />
              )}
            </article>
          ))}
        </div>

        <div
          ref={rightPanelRef}
          className="cup-reveal__panel cup-reveal__panel--right">
          {rightItems.map((item, index) => (
            <article className="cup-reveal__row" key={item.title}>
              <div className="cup-reveal__item cup-reveal__item--right">
                <div className="cup-reveal__copy">
                  <h3>{item.title}</h3>

                  <p>{item.text}</p>
                </div>

                <span className="cup-reveal__icon">
                  <FeatureIcon type={item.icon} />
                </span>
              </div>

              {index < rightItems.length - 1 && (
                <span className="cup-reveal__line" />
              )}
            </article>
          ))}
        </div>

        <div ref={glowRef} className="cup-reveal__glow" aria-hidden="true" />

        <button
          ref={cupRef}
          className="cup-reveal__cup"
          type="button"
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse" || e.pointerType === "pen") {
              openCup();
            }
          }}
          onPointerLeave={(e) => {
            if (e.pointerType === "mouse" || e.pointerType === "pen") {
              closeCup();
            }
          }}
          onClick={(e) => {
            if (e.detail === 0 || window.matchMedia("(hover: none)").matches) {
              open ? closeCup() : openCup();
            }
          }}
          aria-expanded={open}
          aria-label="Discover the BCC cup">
          <span className="cup-reveal__steam" aria-hidden="true">
            <i />

            <i />

            <i />
          </span>

          <img
            ref={bodyRef}
            className="cup-reveal__body"
            src={cupBody}
            alt=""
            draggable="false"
          />

          <img
            ref={lidRef}
            className="cup-reveal__lid"
            src={cupLid}
            alt="Black Coffee Cafe takeaway cup"
            draggable="false"
          />
        </button>
      </div>
    </section>
  );
}
