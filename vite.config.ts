import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { pageSeo, SITE_URL } from './seo';

// Erzeugt beim Build pro Seite eine eigene HTML-Datei (z. B. dist/turnen/index.html und
// dist/turnen.html) mit passendem Titel/Meta/Canonical. Dadurch funktionieren Direktaufrufe
// wie /turnen auf jedem statischen Hosting, und Google sieht pro Seite eigene Angaben.
// Zusätzlich wird dist/sitemap.xml geschrieben.
const staticPages = (): Plugin => ({
  name: 'skv-static-pages',
  apply: 'build',
  closeBundle() {
    const dist = path.resolve(__dirname, 'dist');
    const base = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
    const esc = (v: string) => v.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
    const pages = Object.values(pageSeo);
    for (const { path: p, title, description } of pages) {
      const url = SITE_URL + p;
      const html = base
        .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`)
        .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(description)}`)
        .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(title)}`)
        .replace(/(<meta property="og:description" content=")[^"]*/, `$1${esc(description)}`)
        .replace(/(<meta property="og:url" content=")[^"]*/, `$1${url}`)
        .replace(/(<link rel="canonical" href=")[^"]*/, `$1${url}`);
      if (p === '/') {
        fs.writeFileSync(path.join(dist, 'index.html'), html);
      } else {
        fs.mkdirSync(path.join(dist, p), { recursive: true });
        fs.writeFileSync(path.join(dist, p, 'index.html'), html);
        fs.writeFileSync(path.join(dist, `${p}.html`), html);
      }
    }
    const today = new Date().toISOString().slice(0, 10);
    const sitemap =
      '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
      pages.map((pg) => `  <url><loc>${SITE_URL}${pg.path}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
      '\n</urlset>\n';
    fs.writeFileSync(path.join(dist, 'sitemap.xml'), sitemap);
  },
});

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 5000,
        host: '0.0.0.0',
        allowedHosts: true,
      },
      plugins: [react(), staticPages()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
