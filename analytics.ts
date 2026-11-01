// Umami Cloud (cookielose, datenschutzfreundliche Besucherstatistik).
// Website-ID aus Umami Cloud (Settings → Websites → Tracking code: data-website-id) hier eintragen.
// Solange die ID leer ist, wird kein Statistik-Skript eingebunden.
export const UMAMI_WEBSITE_ID = '';

// Das Skript und die Messdaten laufen über die eigene Domain (Netlify-Proxy, siehe netlify.toml),
// der Browser der Besucher verbindet sich also nicht direkt mit Umami.
export const UMAMI_PROXY_PATH = '/stats';

export const umamiEnabled = UMAMI_WEBSITE_ID.trim() !== '';

export const umamiScriptTag = () =>
  umamiEnabled
    ? `<script defer src="${UMAMI_PROXY_PATH}/script.js" data-website-id="${UMAMI_WEBSITE_ID.trim()}" data-host-url="${UMAMI_PROXY_PATH}" data-domains="skv-rutesheim.de" data-do-not-track="true"></script>`
    : '';
