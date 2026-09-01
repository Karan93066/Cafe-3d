'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollWorld from './ScrollWorld';

gsap.registerPlugin(ScrollTrigger);

const DIRECTIONS_URL = 'https://maps.google.com/maps?vet=10CAAQoqAOahcKEwi4zurdnMeWAxUAAAAAHQAAAAAQCA..i&pvq=Cg0vZy8xMXQ2MDczemp2IhcKEWJsYWNrIGNvZmZlZSBjYWZlEAIYAw&lqi=ChFibGFjayBjb2ZmZWUgY2FmZUia9MeDmLmAgAhaHxAAEAEQAhgAGAEYAiIRYmxhY2sgY29mZmVlIGNhZmWSAQRjYWZl&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=in&sa=X&ftid=0x390ce598b9649ea7:0x906185a44a4aa863';

const ASSETS = {
  cup: 'https://theblackcoffeecafe.com/wp-content/uploads/2024/04/bcccoffee.png',
  storefront: 'https://theblackcoffeecafe.com/wp-content/uploads/2022/04/5-385x385.jpg',
  guest: 'https://theblackcoffeecafe.com/wp-content/uploads/2022/04/2-385x385.jpg',
  counter: 'https://theblackcoffeecafe.com/wp-content/uploads/2022/04/3-385x385.jpg',
  machine: 'https://theblackcoffeecafe.com/wp-content/uploads/2022/04/4-385x385.jpg',
  pour: 'https://theblackcoffeecafe.com/wp-content/uploads/2022/06/process-menu-385x385.jpg',
  food: 'https://theblackcoffeecafe.com/wp-content/uploads/2024/05/me-10-scaled-385x385.jpg',
};

const history = [
  ['2018', 'The first pour', 'BCC began as a small coffee shop with quick bites, classic frappes and a cozy place for friends to gather.'],
  ['2022', 'Noida, Sector 62', "The flagship store opened in Noida's Sector 62, followed by another outpost at Gaur City Mall."],
  ['2023', 'Into Gurugram', 'BCC expanded into NCR with a flagship store in Vatika Business Park, Gurugram.'],
  ['2024', 'Keep evolving', 'The focus moved toward menu innovation, sustainability and a bigger café footprint.'],
];

const menuItems = [
  ['01', 'Café Latte', '₹159', 'espresso / steamed milk'],
  ['02', 'Cappuccino', '₹159', 'espresso / milk foam'],
  ['03', 'Black Coffee', '₹159', 'clean / rich / direct'],
  ['04', 'Caramel Macchiato', '₹169', 'caramel / espresso / milk'],
  ['05', 'Espresso Tonic', '₹179', 'tonic / ice / espresso'],
  ['06', 'Pumpkin Spice Latte', '₹179', 'spiced / silky / seasonal'],
  ['07', 'Siphon', '₹429', 'vacuum pot / serves two'],
  ['08', 'Blast Nachos', '₹269', 'crispy / cheesy / loaded'],
  ['09', 'Whopper Burrito', '₹239', 'veg / bold / filling'],
];

const chapters = [
  ['01', 'Intro', 'hero'],
  ['02', 'Story', 'story'],
  ['03', 'History', 'history'],
  ['04', 'Menu', 'menu'],
  ['05', 'Ambience', 'ambience'],
  ['06', 'Promise', 'promise'],
  ['07', 'Visit', 'location'],
];

const backgrounds = {
  hero: '#080604',
  story: '#0d0806',
  history: '#070707',
  menu: '#120806',
  ambience: '#090706',
  promise: '#0d0b08',
  location: '#060606',
};

export default function HomeExperience() {
  const root = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ctx = gsap.context(() => {
      gsap.from('.nav-bar', { y: -24, opacity: 0, duration: 0.9, ease: 'power3.out' });
      gsap.from('.hero-reveal', { y: 48, opacity: 0, duration: 1.05, stagger: 0.09, ease: 'power3.out', delay: 0.12 });

      chapters.forEach(([, , id], index) => {
        const section = document.getElementById(id);
        const railItem = document.querySelector(`[data-rail="${id}"]`);
        if (!section || !railItem) return;

        ScrollTrigger.create({
          trigger: section,
          start: 'top 48%',
          end: 'bottom 48%',
          onEnter: () => {
            document.querySelectorAll('.chapter-rail a').forEach((el) => el.classList.remove('is-active'));
            railItem.classList.add('is-active');
            gsap.to('.ambient-layer', { backgroundColor: backgrounds[id], duration: 0.8, overwrite: true });
          },
          onEnterBack: () => {
            document.querySelectorAll('.chapter-rail a').forEach((el) => el.classList.remove('is-active'));
            railItem.classList.add('is-active');
            gsap.to('.ambient-layer', { backgroundColor: backgrounds[id], duration: 0.8, overwrite: true });
          },
        });

        if (!reduceMotion && index > 0) {
          gsap.utils.toArray(section.querySelectorAll('[data-reveal]')).forEach((element, itemIndex) => {
            gsap.from(element, {
              y: 64,
              opacity: 0,
              duration: 1,
              delay: itemIndex * 0.035,
              ease: 'power3.out',
              scrollTrigger: { trigger: element, start: 'top 88%' },
            });
          });
        }
      });

      if (!reduceMotion) {
        document.querySelectorAll('.image-card img').forEach((image) => {
          gsap.fromTo(image, { yPercent: -7, scale: 1.08 }, {
            yPercent: 7,
            scale: 1.08,
            ease: 'none',
            scrollTrigger: { trigger: image.parentElement, start: 'top bottom', end: 'bottom top', scrub: 1.2 },
          });
        });

        const menuTrack = document.querySelector('.menu-track');
        if (menuTrack) {
          gsap.to(menuTrack, {
            x: () => -Math.max(0, menuTrack.scrollWidth - window.innerWidth + Math.min(150, window.innerWidth * 0.08)),
            ease: 'none',
            scrollTrigger: {
              trigger: '#menu',
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }

        gsap.to('.history-years', {
          yPercent: -24,
          ease: 'none',
          scrollTrigger: { trigger: '#history', start: 'top top', end: 'bottom bottom', scrub: 1 },
        });

        gsap.to('.hero-word-outline', {
          xPercent: 8,
          ease: 'none',
          scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 },
        });
      }
    }, root);

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 350);
    return () => {
      window.clearTimeout(refresh);
      ctx.revert();
    };
  }, []);

  return (
    <main id="site" ref={root}>
      <div className="ambient-layer" />
      <div className="noise-layer" />
      <ScrollWorld />

      <header className="nav-bar">
        <a href="#hero" className="logo-mark" aria-label="Black Coffee Cafe home">
          <b>B</b><strong>CC</strong><span>THE BLACK COFFEE CAFE</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#story">Story</a>
          <a href="#menu">Menu</a>
          <a href="#ambience">Café</a>
        </nav>
        <a className="nav-location" href={DIRECTIONS_URL} target="_blank" rel="noreferrer">NOIDA 62 ↗</a>
      </header>

      <aside className="chapter-rail" aria-label="Page chapters">
        {chapters.map(([n, label, id]) => (
          <a key={id} href={`#${id}`} data-rail={id} className={id === 'hero' ? 'is-active' : ''} aria-label={label}>
            <span>{n}</span><i />
          </a>
        ))}
      </aside>

      <section className="chapter hero-chapter" id="hero">
        <div className="chapter-inner hero-grid">
          <div className="hero-copy-block">
            <p className="kicker hero-reveal">Noida · Coffee · Culture</p>
            <h1 className="hero-reveal">
              <span>Black</span>
              <span className="red-word">Coffee</span>
              <span>Café.</span>
            </h1>
            <p className="hero-lead hero-reveal">Specialty coffee, Mexican food and cool ambience — reimagined as a cinematic scroll experience.</p>
            <div className="hero-actions hero-reveal">
              <a href="#menu" className="pill pill-light">Explore menu <b>↘</b></a>
              <a href={DIRECTIONS_URL} target="_blank" rel="noreferrer" className="pill pill-line">Get directions <b>↗</b></a>
            </div>
          </div>

          <div className="hero-status hero-reveal">
            <span>01 / 07</span>
            <p>Scroll to move<br />the coffee through<br />the story.</p>
          </div>

          <div className="hero-tags hero-reveal">
            <span>Cool ambience</span><span>Specialty coffee</span><span>Mexican food</span>
          </div>
        </div>
        <div className="hero-word-outline" aria-hidden="true">BLACK</div>
      </section>

      <section className="chapter story-chapter" id="story">
        <div className="chapter-inner story-layout">
          <div className="story-number" data-reveal>02</div>
          <div className="story-copy-panel">
            <p className="kicker" data-reveal>The story behind our café</p>
            <h2 data-reveal>Good coffee.<br /><em>Better pauses.</em></h2>
            <p className="body-copy" data-reveal>From classic espresso to lattes and cappuccinos, BCC builds around carefully selected coffee and food made for long conversations.</p>
            <div className="micro-list" data-reveal>
              <span><b>01</b> Quality</span><span><b>02</b> Freshness</span><span><b>03</b> Hospitality</span>
            </div>
          </div>
          <figure className="product-cutout" data-reveal>
            <img src={ASSETS.cup} alt="Black Coffee Cafe branded takeaway cup" />
            <figcaption>Original BCC cup / source-site asset</figcaption>
          </figure>
        </div>
      </section>

      <section className="chapter history-chapter" id="history">
        <div className="history-sticky">
          <div className="chapter-inner history-layout">
            <div className="history-heading">
              <p className="kicker" data-reveal>Since 2018</p>
              <h2 data-reveal>Built one<br />pour at a time.</h2>
              <p className="body-copy" data-reveal>BCC’s own timeline becomes a vertical story while the cup crosses the frame.</p>
            </div>
            <div className="history-window">
              <div className="history-years">
                {history.map(([year, title, copy], i) => (
                  <article className="year-row" key={year} data-reveal>
                    <span className="year-index">0{i + 1}</span>
                    <strong>{year}</strong>
                    <div><h3>{title}</h3><p>{copy}</p></div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter menu-chapter" id="menu">
        <div className="menu-sticky">
          <div className="menu-heading chapter-inner">
            <div>
              <p className="kicker" data-reveal>From the current BCC menu</p>
              <h2 data-reveal>Pick your<br /><em>ritual.</em></h2>
            </div>
            <p className="menu-scroll-hint">Scroll sideways by scrolling down →</p>
          </div>
          <div className="menu-track-wrap">
            <div className="menu-track">
              {menuItems.map(([n, title, price, note], i) => (
                <article className="menu-tile" key={title}>
                  <div className="menu-art">
                    {i === 4 ? <img src={ASSETS.pour} alt="Coffee being poured" /> : <span className={`cup-graphic type-${i % 4}`} />}
                  </div>
                  <div className="menu-tile-top"><span>{n}</span><b>{price}</b></div>
                  <h3>{title}</h3>
                  <p>{note}</p>
                </article>
              ))}
              <a className="menu-tile menu-end" href="https://theblackcoffeecafe.com/?page_id=3788" target="_blank" rel="noreferrer">
                <span>Full menu</span><strong>100+ choices</strong><i>↗</i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="chapter ambience-chapter" id="ambience">
        <div className="chapter-inner ambience-layout">
          <div className="ambience-copy">
            <p className="kicker" data-reveal>Inside BCC</p>
            <h2 data-reveal>Taste meets<br /><em>aesthetics.</em></h2>
            <p className="body-copy" data-reveal>The source-site gallery already has the raw material: storefront energy, warm interiors, espresso machinery and real café moments. Here they become a layered scroll collage.</p>
            <div className="review-stat" data-reveal><strong>50,000+</strong><span>reviews claimed on the current BCC site</span></div>
          </div>
          <div className="collage">
            <figure className="image-card image-a" data-reveal><img src={ASSETS.storefront} alt="Black Coffee Cafe storefront" /><figcaption>Exterior / BCC</figcaption></figure>
            <figure className="image-card image-b" data-reveal><img src={ASSETS.counter} alt="Black Coffee Cafe counter interior" /><figcaption>Counter / BCC</figcaption></figure>
            <figure className="image-card image-c" data-reveal><img src={ASSETS.machine} alt="Espresso machines at Black Coffee Cafe" /><figcaption>Bar / BCC</figcaption></figure>
            <figure className="image-card image-d" data-reveal><img src={ASSETS.guest} alt="Guest enjoying coffee at Black Coffee Cafe" /><figcaption>Community / BCC</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="chapter promise-chapter" id="promise">
        <div className="chapter-inner promise-layout">
          <div className="promise-title">
            <p className="kicker" data-reveal>Our guarantee at BCC</p>
            <h2 data-reveal>Four things.<br />No compromise.</h2>
          </div>
          <div className="promise-grid">
            {[
              ['01', 'Quality', 'Only the freshest ingredients, with a commitment to excellence.'],
              ['02', 'Exceptional service', 'Friendly, attentive service that aims to exceed expectations.'],
              ['03', 'Cleanliness', 'Stringent standards designed for safety and comfort.'],
              ['04', 'Satisfaction', "If something isn't right, the BCC promise is to make it right."],
            ].map(([n, title, text]) => (
              <article className="promise-card" key={title} data-reveal><span>{n}</span><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="sustainability-strip" data-reveal>
            <span>Sourced with care</span><strong>100% organic · always fresh · reducing plastic impact</strong>
          </div>
        </div>
      </section>

      <section className="chapter location-chapter" id="location">
        <div className="location-photo" aria-hidden="true"><img src={ASSETS.food} alt="" /></div>
        <div className="chapter-inner location-layout">
          <div className="location-meta" data-reveal>
            <p className="kicker">Find us</p>
            <span>Sector 62</span>
            <span>Noida, Uttar Pradesh</span>
          </div>
          <div className="location-main">
            <h2 data-reveal>Meet you<br />over coffee.</h2>
            <p className="address" data-reveal>A-40, i-Thum Tower,<br />Sector-62, Noida, UP</p>
            <div className="contact-row" data-reveal>
              <a className="pill pill-light" href={DIRECTIONS_URL} target="_blank" rel="noreferrer">Open Google Maps <b>↗</b></a>
              <a href="tel:+917877799986">+91 78 777 999 86</a>
              <a href="mailto:bccofficial0@gmail.com">bccofficial0@gmail.com</a>
            </div>
          </div>
          <div className="location-stamp" data-reveal><span>BCC</span><small>NOIDA<br />INDIA</small></div>
        </div>
        <footer className="site-footer">
          <span>THE BLACK COFFEE CAFE</span>
          <span>3D WEB EXPERIENCE / CONCEPT</span>
          <a href="#hero">BACK TO TOP ↑</a>
        </footer>
      </section>
    </main>
  );
}
