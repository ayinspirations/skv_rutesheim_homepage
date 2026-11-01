/** Tailwind wird beim Build erzeugt (statt per CDN), damit Besucher keine Verbindung zu fremden Servern aufbauen. */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './App.tsx', './index.tsx', './seo.ts', './components/**/*.{ts,tsx}'],
  theme: { extend: {} },
  plugins: [],
};
