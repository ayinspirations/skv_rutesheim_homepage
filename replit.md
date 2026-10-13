# SKV Rutesheim 1945 e.V. - Modern Sports Club Website

## Overview
A modern, single-page website for the SKV Rutesheim 1945 e.V. sports club built with React, TypeScript, and Vite. Uses Tailwind CSS (via CDN) and Framer Motion for animations.

## Project Architecture
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS (CDN), Google Fonts (Inter)
- **Animations**: Framer Motion
- **Structure**: Flat component layout in `/components/`
- **Entry**: `index.html` → `index.tsx` → `App.tsx`

## Key Files
- `vite.config.ts` - Vite config, dev server on port 5000
- `index.html` - HTML entry with Tailwind CDN and importmap
- `App.tsx` - Main app component
- `components/` - All page sections (Hero, Header, Footer, etc.)

## Development
- `npm run dev` - Start dev server on port 5000
- `npm run build` - Build for production (outputs to `dist/`)

## Deployment
- Static deployment, build with `npm run build`, serve from `dist/`

## URLs & SEO
- Jede Seite hat eine eigene URL (`seo.ts`): `/`, `/mitgliedschaft`, `/vereinsheim`, `/leitbild`, `/handball`, `/turnen`, `/rad`, `/saenger`, `/sportabzeichen`.
- `npm run build` erzeugt pro Seite eine statische HTML-Datei (eigener Titel, Beschreibung, Canonical) sowie `dist/sitemap.xml`, damit Direktaufrufe auf jedem statischen Hosting funktionieren.
- `public/robots.txt` + Meta-Tags erlauben Crawling/Indexierung nur durch Google.
