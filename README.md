# Black Coffee Cafe — Awwwards-style 3D Scroll Homepage

A cinematic homepage prototype built with **Next.js (JavaScript), Three.js and GSAP ScrollTrigger**.

## What changed in this version

- One **persistent fixed Three.js cup** travels through the whole page instead of living only in the hero.
- Every scroll chapter gives the cup a new position, scale, rotation and camera distance.
- Page background transitions with the chapter.
- Long-form **2018 → 2024** history section.
- Horizontal menu journey driven by vertical scroll.
- Layered, parallax café-photo collage using image URLs from the current BCC website.
- Source-site menu items/prices, guarantee copy, sustainability themes, contact and Noida address.
- Responsive/mobile scene choreography and reduced-motion handling.

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Stack

- Next.js / React
- JavaScript
- Three.js
- GSAP + ScrollTrigger

## Brand/source data

Content and image URLs in this concept are drawn from the current Black Coffee Cafe website (`https://theblackcoffeecafe.com/`) for redesign/prototyping purposes. For production, download and optimize the approved brand assets into `/public` instead of hot-linking them.

## Main files

- `components/ScrollWorld.js` — fixed Three.js world + scroll-based 3D choreography
- `components/HomeExperience.js` — page chapters + DOM/GSAP interactions
- `app/globals.css` — art direction and responsive layout

## Recommended production upgrades

1. Replace the procedural cup with an approved `.glb` scan/model of the real BCC cup.
2. Optimize image assets locally using AVIF/WebP.
3. Add Lenis only if you want inertial smooth scrolling (ScrollTrigger works without it).
4. Add a CMS/data source for menu prices and locations.
5. Add route transitions only after the homepage motion system is finalized.
