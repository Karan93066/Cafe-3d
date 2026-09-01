import './globals.css';

export const metadata = {
  title: 'The Black Coffee Cafe — 3D Scroll Experience',
  description: 'A cinematic Three.js and GSAP homepage concept for The Black Coffee Cafe.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
