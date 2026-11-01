import React, { useState } from 'react';

// Zwei-Klick-Lösung für Google Maps: Die Karte (und damit eine Verbindung zu Google) wird erst
// geladen, nachdem die Besucherin/der Besucher aktiv zugestimmt hat. Die Zustimmung gilt nur für
// den aktuellen Seitenaufruf; es werden keine Cookies oder lokalen Speicher genutzt.
export const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Robert-Bosch-Str.%2055,%2071277%20Rutesheim&t=&z=14&ie=UTF8&iwloc=&output=embed';
export const MAPS_LINK_URL =
  'https://www.google.com/maps/search/?api=1&query=Robert-Bosch-Str.+55,+71277+Rutesheim';

export const MapConsent: React.FC<{ className?: string; iframeClassName?: string }> = ({ className = '', iframeClassName = '' }) => {
  const [loaded, setLoaded] = useState(false);

  if (loaded) {
    return (
      <iframe
        title="Karte: Robert-Bosch-Str. 55, 71277 Rutesheim (Google Maps)"
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={MAPS_EMBED_URL}
        className={`border-0 ${iframeClassName}`}
      />
    );
  }

  return (
    <div className={`w-full h-full flex flex-col items-center justify-center text-center gap-4 p-6 bg-zinc-100 ${className}`}>
      <span className="text-3xl" aria-hidden="true">📍</span>
      <p className="text-sm font-medium text-black/60 max-w-md leading-relaxed">
        Mit dem Laden der Karte werden Daten (u. a. Ihre IP-Adresse) an Google übertragen.
        Mehr dazu in unserer{' '}
        <a href="/datenschutz#google-maps" className="underline hover:text-black">Datenschutzerklärung</a>.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="px-5 py-2.5 rounded-full bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-black/80 transition-colors"
        >
          Karte laden
        </button>
        <a
          href={MAPS_LINK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 rounded-full border border-black/15 text-xs font-black uppercase tracking-widest text-black/60 hover:text-black transition-colors"
        >
          In Google Maps öffnen ↗
        </a>
      </div>
    </div>
  );
};
