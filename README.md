# Black Coffee Café — Cinematic Hero / Farm

First production slice for the Farm → Cup homepage journey.

## Run

```bash
npm install
npm run dev
```

Then open the local Vite URL and **scroll through the full hero**. The hero is intentionally ~270vh tall because scroll position controls the film.

## Included

- React + Vite
- Tailwind CSS
- Lenis smooth scrolling
- GSAP + ScrollTrigger cinematic scrub timeline
- Three.js atmospheric depth layer
- Bundled local H.264 hero demo media
- Bundled 6-frame WebP fallback sequence
- Video scroll seeking + frame-sequence fallback
- Desktop + mobile animation paths
- Farm → Origin handoff ready for Harvest

## Media

Working local media is already included in `public/media/`.

The frame sequence is always present under the video, so the hero still animates if video decoding or seeking fails. See `public/media/README.md` for the production replacement contract.

## Important

The included farm visuals are demo assets for validating the implementation locally. Replace them with final approved/licensed Black Coffee Café campaign footage before production launch.
