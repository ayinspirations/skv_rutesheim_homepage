import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { pageSeo, SITE_URL } from './seo';

// Eigenständige Volleyball-Seite: liegt als statische Mini-Website in public/skv-rutesheim-volleyball
// und wird unter /volleyball/ ausgeliefert. Ein <base href="/volleyball/"> sorgt dafür, dass die
// relativen Links/Bilder (style.css, bilder/..., training.html) auch bei /volleyball ohne
// Schrägstrich funktionieren.
// Bilder von Unsplash (Unsplash-Lizenz) werden beim Build einmalig heruntergeladen und von der
// eigenen Domain ausgeliefert. So baut der Browser der Besucher keine Verbindung zu Unsplash auf.
// Liegt eine Datei bereits in public/bilder/, wird diese verwendet.
const REMOTE_IMAGES: Record<string, string> = {
  'bilder/fussball.jpg': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000&fm=jpg',
  'bilder/turnen.jpg': 'https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=1000&fm=jpg',
  'bilder/tischtennis.jpg': 'https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&q=80&w=1000&fm=jpg',
  'bilder/vereinsheim-innen.jpg': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070&fm=jpg',
};

const localImages = (): Plugin => {
  let isBuild = false;
  return {
    name: 'skv-local-images',
    configResolved(config) { isBuild = config.command === 'build'; },
    // Dev-Server: fehlende Dateien vorübergehend direkt von der Quelle laden.
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const rel = (req.url || '').split('?')[0].replace(/^\//, '');
        const src = REMOTE_IMAGES[rel];
        if (!src || fs.existsSync(path.resolve(__dirname, 'public', rel))) return next();
        res.statusCode = 302;
        res.setHeader('Location', src);
        res.end();
      });
    },
    async closeBundle() {
      if (!isBuild) return;
      const dist = path.resolve(__dirname, 'dist');
      for (const [rel, src] of Object.entries(REMOTE_IMAGES)) {
        const target = path.join(dist, rel);
        if (fs.existsSync(target)) continue;
        const res = await fetch(src);
        if (!res.ok) throw new Error(`Bild ${rel} konnte nicht geladen werden (${res.status}). Datei manuell unter public/${rel} ablegen.`);
        fs.mkdirSync(path.dirname(target), { recursive: true });
        fs.writeFileSync(target, Buffer.from(await res.arrayBuffer()));
      }
    },
  };
};

const VOLLEYBALL_SRC = path.resolve(__dirname, 'public', 'skv-rutesheim-volleyball');
const VOLLEYBALL_PATH = '/volleyball';
const withVolleyballBase = (html: string) =>
  html.replace(/<head([^>]*)>/i, `<head$1><base href="${VOLLEYBALL_PATH}/">`);

const volleyballSite = (): Plugin => {
  let isBuild = false;
  return {
  name: 'skv-volleyball-site',
  configResolved(config) { isBuild = config.command === 'build'; },
  // Dev-Server: /volleyball und /volleyball/* aus dem public-Ordner bedienen.
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      const url = (req.url || '').split('?')[0];
      if (url !== VOLLEYBALL_PATH && !url.startsWith(VOLLEYBALL_PATH + '/')) return next();
      let rel = decodeURIComponent(url.slice(VOLLEYBALL_PATH.length)).replace(/^\/+/, '') || 'index.html';
      const file = path.resolve(VOLLEYBALL_SRC, rel);
      if (!file.startsWith(VOLLEYBALL_SRC) || !fs.existsSync(file) || !fs.statSync(file).isFile()) return next();
      if (file.endsWith('.html')) {
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end(withVolleyballBase(fs.readFileSync(file, 'utf8')));
      } else {
        req.url = '/skv-rutesheim-volleyball/' + rel;
        next();
      }
    });
  },
  // Build: Ordner nach dist/volleyball verschieben und <base> in alle HTML-Dateien einsetzen.
  closeBundle() {
    if (!isBuild) return;
    const dist = path.resolve(__dirname, 'dist');
    const from = path.join(dist, 'skv-rutesheim-volleyball');
    if (!fs.existsSync(from)) return;
    const to = path.join(dist, VOLLEYBALL_PATH.slice(1));
    fs.rmSync(to, { recursive: true, force: true });
    fs.renameSync(from, to);
    // Interne Notizen nicht öffentlich ausliefern.
    fs.rmSync(path.join(to, 'README.txt'), { force: true });
    for (const f of fs.readdirSync(to)) {
      if (f.endsWith('.html')) {
        const fp = path.join(to, f);
        fs.writeFileSync(fp, withVolleyballBase(fs.readFileSync(fp, 'utf8')));
      }
    }
    // Direktaufruf /volleyball (ohne Schrägstrich) auf jedem statischen Hosting.
    fs.copyFileSync(path.join(to, 'index.html'), path.join(dist, 'volleyball.html'));
  },
  };
};

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
      [...pages.map((pg) => pg.path), VOLLEYBALL_PATH + '/']
        .map((p) => `  <url><loc>${SITE_URL}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
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
      plugins: [react(), staticPages(), volleyballSite(), localImages()],
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
