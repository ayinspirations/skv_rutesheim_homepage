
import React, { useState } from 'react';
import { hallen } from './Handball';

// Self-contained on purpose: this section could later be split out to its own
// route (e.g. /turnen/hallen) without touching the rest of the Turnen page.
// The only external dependency is the hall address data already defined for
// /handball, reused here per spec instead of re-deriving the addresses.
//
// This renders the client-supplied reference plan (public/sportgelaende-buehl-rutesheim.gif,
// 624×406px) as-is, as a static background image — it is NOT redrawn as vector shapes.
// A prior hand-drawn vector attempt produced multiple layout errors (misplaced parking,
// buildings overlapping the street, a broken hotspot marker) because freehand recreation
// from a description is unreliable; an image + overlay is the correct approach here.
//
// Hotspot coordinates were measured directly against the actual image file: isolated the
// red-circle pixel clusters already printed on the gif (RGB ~red, low green/blue),
// computed each cluster's centroid, and converted to a percentage of the 624×406 image
// so positioning stays correct at any render size. Do not eyeball-adjust these — if the
// image is ever replaced, re-measure the same way instead of guessing.

const addressFor = (name: string) => hallen.find((h) => h.name === name)?.address;

interface Hotspot {
  id: number;
  label: string;
  note: string;
  leftPct: number;
  topPct: number;
}

const hotspots: Hotspot[] = [
  { id: 1, label: 'Stadion Bühl', note: 'Tartanbahn / Leichtathletik-Rundlaufbahn. Hier trainiert u. a. die Leichtathletik-Gruppe (Fr, Stadion Bühl).', leftPct: 87.83, topPct: 19.16 },
  { id: 2, label: 'Kunstrasen Spielfeld', note: 'Kunstrasenplatz, oberhalb der Mitte, direkt neben dem Rasenplatz und der Laufbahn.', leftPct: 73.11, topPct: 17.15 },
  { id: 3, label: 'Rasenplatz', note: 'Rasenspielfeld, links neben dem Kunstrasen.', leftPct: 62.44, topPct: 34.34 },
  { id: 4, label: 'Sporthalle Bühl 1', note: `${addressFor('Sporthalle Bühl 1') ?? 'Adresse folgt'}`, leftPct: 68.98, topPct: 49.64 },
  { id: 5, label: 'Sporthalle Bühl 2', note: `${addressFor('Sporthalle Bühl 2') ?? 'Adresse folgt'} — u. a. Bühl 2 Halle 1/2/3: Bubenturnen, Mädchenturnen, Wettkampfturnen, Fitness-Mix.`, leftPct: 79.65, topPct: 53.36 },
  // Hinweis: /handball führt diese Halle als "Theodor-Heuss-Turnhalle", /turnen-Inhalte
  // sprechen von "Theodor-Heuss-Halle" — Adresse ist identisch, nur der Name weicht ab.
  { id: 6, label: 'Theodor Heuss Halle', note: `${addressFor('Theodor-Heuss-Turnhalle') ?? 'Adresse folgt'} — u. a. Eltern-Kind-Turnen, Fit und Fun.`, leftPct: 20.78, topPct: 52.55 },
  { id: 7, label: 'SKV Vereinsheim', note: 'Vereinsheim der SKV Rutesheim.', leftPct: 88.08, topPct: 49.66 },
  { id: 8, label: 'Kleinspielfeld', note: 'Kleines Spielfeld zwischen Stadion und Hallen.', leftPct: 73.08, topPct: 32.99 },
];

export const FacilityMap: React.FC = () => {
  // No hotspot is active until the user actually hovers/clicks/focuses one.
  const [activeId, setActiveId] = useState<number | null>(null);
  const active = hotspots.find((h) => h.id === activeId) ?? hotspots[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-start">
      <div className="bg-white rounded-[2rem] border border-black/5 p-4 md:p-6 overflow-x-auto">
        <div className="relative w-full min-w-[520px]" style={{ aspectRatio: '624 / 406' }}>
          <img
            src="/sportgelaende-buehl-rutesheim.gif"
            alt="Lageplan Sportgelände Bühl Rutesheim"
            className="absolute inset-0 w-full h-full object-contain select-none pointer-events-none"
            draggable={false}
          />

          {hotspots.map((h) => {
            const isActive = h.id === activeId;
            return (
              <button
                key={h.id}
                type="button"
                aria-label={`${h.id}. ${h.label}`}
                onMouseEnter={() => setActiveId(h.id)}
                onFocus={() => setActiveId(h.id)}
                onClick={() => setActiveId(h.id)}
                style={{ left: `${h.leftPct}%`, top: `${h.topPct}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 rounded-full flex items-center justify-center text-[10px] md:text-xs font-black outline-none transition-all ${
                  isActive ? 'bg-[#D4FF6B] text-black scale-125 ring-2 ring-black z-10' : 'bg-black text-white hover:scale-110'
                }`}
              >
                {h.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* Info panel + Legende — funktioniert eigenständig ohne die Karte (Barrierefreiheit / Mobile-Fallback) */}
      <div className="flex flex-col gap-6">
        <div className="bg-black text-white rounded-[2rem] p-6 md:p-8">
          <span className="text-[#D4FF6B] font-black uppercase tracking-widest text-xs mb-2 block">{active.id}. {active.label}</span>
          <p className="text-white/60 text-sm leading-relaxed">{active.note}</p>
        </div>

        <ol className="space-y-2">
          {hotspots.map((h) => (
            <li key={h.id}>
              <button
                onMouseEnter={() => setActiveId(h.id)}
                onClick={() => setActiveId(h.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-bold transition-colors ${
                  h.id === activeId ? 'bg-[#D4FF6B] text-black' : 'bg-zinc-50 text-black/60 hover:bg-zinc-100'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-black text-white text-[11px] font-black flex items-center justify-center shrink-0">{h.id}</span>
                {h.label}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
