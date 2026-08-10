
import React, { useState } from 'react';
import { hallen } from './Handball';

// Self-contained on purpose: this section could later be split out to its own
// route (e.g. /turnen/hallen) without touching the rest of the Turnen page.
// The only external dependency is the hall address data already defined for
// /handball, reused here per spec instead of re-deriving the addresses.

const addressFor = (name: string) => hallen.find((h) => h.name === name)?.address;

interface Hotspot {
  id: number;
  label: string;
  note: string;
  shape: 'rect' | 'ellipse';
  x: number;
  y: number;
  width: number;
  height: number;
}

// Schematic (not to-scale) reproduction of the reference site plan — 8 numbered
// points, north at top-right, Robert-Bosch-Straße running horizontally through
// the middle. Styled with the site's existing tokens (Ink/Lime/Fog) rather than
// the old grey/red/green plan graphic — see open TODO in Turnen.tsx about
// confirming the exact visual style with the client.
const hotspots: Hotspot[] = [
  { id: 1, label: 'Stadion Bühl', note: `Tartanbahn / Leichtathletik-Rundlaufbahn. Hier trainiert u. a. die Leichtathletik-Gruppe (Fr, Stadion Bühl).`, shape: 'ellipse', x: 610, y: 90, width: 160, height: 90 },
  { id: 2, label: 'Kunstrasen Spielfeld', note: 'Kunstrasenplatz, oberhalb der Mitte.', shape: 'rect', x: 380, y: 100, width: 130, height: 80 },
  { id: 3, label: 'Rasenplatz', note: 'Rasenspielfeld, links neben dem Kunstrasen.', shape: 'rect', x: 220, y: 100, width: 130, height: 80 },
  { id: 4, label: 'Sporthalle Bühl 1', note: `${addressFor('Sporthalle Bühl 1') ?? 'Adresse folgt'}`, shape: 'rect', x: 520, y: 300, width: 110, height: 90 },
  { id: 5, label: 'Sporthalle Bühl 2', note: `${addressFor('Sporthalle Bühl 2') ?? 'Adresse folgt'} — u. a. Bühl 2 Halle 1/2/3: Bubenturnen, Mädchenturnen, Wettkampfturnen, Fitness-Mix.`, shape: 'rect', x: 400, y: 300, width: 110, height: 90 },
  // Hinweis: /handball führt diese Halle als "Theodor-Heuss-Turnhalle", /turnen-Inhalte
  // sprechen von "Theodor-Heuss-Halle" — Adresse ist identisch, nur der Name weicht ab.
  { id: 6, label: 'Theodor-Heuss-Halle', note: `${addressFor('Theodor-Heuss-Turnhalle') ?? 'Adresse folgt'} — u. a. Eltern-Kind-Turnen, Fit und Fun.`, shape: 'rect', x: 180, y: 320, width: 130, height: 90 },
  { id: 7, label: 'SKV Vereinsheim', note: 'Vereinsheim der SKV Rutesheim.', shape: 'rect', x: 620, y: 420, width: 90, height: 60 },
  { id: 8, label: 'Kleinspielfeld', note: 'Kleines Spielfeld zwischen Stadion und Hallen.', shape: 'rect', x: 540, y: 220, width: 80, height: 60 },
];

export const FacilityMap: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const active = hotspots.find((h) => h.id === activeId) ?? hotspots[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-start">
      <div className="bg-white rounded-[2rem] border border-black/5 p-4 md:p-6 overflow-x-auto">
        <svg viewBox="0 0 800 520" className="w-full min-w-[560px] h-auto" role="img" aria-label="Lageplan Sportgelände Bühl Rutesheim">
          {/* Robert-Bosch-Straße */}
          <rect x="0" y="230" width="800" height="40" className="fill-zinc-100" />
          <text x="400" y="255" textAnchor="middle" className="fill-black/30 text-[13px] font-black uppercase tracking-widest">
            Robert-Bosch-Straße
          </text>

          {/* Parkplätze */}
          <rect x="60" y="330" width="70" height="50" rx="6" className="fill-zinc-50 stroke-black/10" strokeDasharray="4 3" />
          <text x="95" y="360" textAnchor="middle" className="fill-black/30 text-[12px] font-black">P</text>
          <rect x="260" y="330" width="70" height="50" rx="6" className="fill-zinc-50 stroke-black/10" strokeDasharray="4 3" />
          <text x="295" y="360" textAnchor="middle" className="fill-black/30 text-[12px] font-black">P</text>

          {/* North indicator */}
          <text x="760" y="30" textAnchor="middle" className="fill-black/20 text-[12px] font-black uppercase tracking-widest">N ↑</text>

          {hotspots.map((h) => {
            const isActive = h.id === activeId;
            const cx = h.x + h.width / 2;
            const cy = h.y + h.height / 2;
            return (
              <g
                key={h.id}
                role="button"
                tabIndex={0}
                aria-label={`${h.id}. ${h.label}`}
                className="cursor-pointer outline-none"
                onMouseEnter={() => setActiveId(h.id)}
                onFocus={() => setActiveId(h.id)}
                onClick={() => setActiveId(h.id)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setActiveId(h.id); }}
              >
                {h.shape === 'ellipse' ? (
                  <ellipse
                    cx={cx}
                    cy={cy}
                    rx={h.width / 2}
                    ry={h.height / 2}
                    className={`transition-colors stroke-black/20 ${isActive ? 'fill-[#D4FF6B]' : 'fill-zinc-200'}`}
                    strokeWidth={2}
                  />
                ) : (
                  <rect
                    x={h.x}
                    y={h.y}
                    width={h.width}
                    height={h.height}
                    rx={10}
                    className={`transition-colors stroke-black/20 ${isActive ? 'fill-[#D4FF6B]' : 'fill-zinc-200'}`}
                    strokeWidth={2}
                  />
                )}
                <circle cx={cx} cy={cy} r={14} className="fill-black" />
                <text x={cx} y={cy + 5} textAnchor="middle" className="fill-white text-[13px] font-black">{h.id}</text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Info panel + legend — works standalone without the map (accessibility / mobile fallback) */}
      <div className="flex flex-col gap-6">
        <div className="bg-black text-white rounded-[2rem] p-6 md:p-8">
          <span className="text-[#D4FF6B] font-black uppercase tracking-widest text-xs mb-2 block">{active.id}. {active.label}</span>
          <p className="text-white/60 text-sm leading-relaxed">{active.note}</p>
        </div>

        <ol className="space-y-2">
          {hotspots.map((h) => (
            <li key={h.id}>
              <button
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
