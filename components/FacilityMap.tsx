
import React, { useState } from 'react';
import { hallen } from './Handball';

// Self-contained on purpose: this section could later be split out to its own
// route (e.g. /turnen/hallen) without touching the rest of the Turnen page.
// The only external dependency is the hall address data already defined for
// /handball, reused here per spec instead of re-deriving the addresses.
//
// The road layout and building shapes/positions below are traced directly from the
// client-supplied reference plan ("Sportgelände Bühl Rutesheim") — numbering, labels,
// street course and building silhouettes follow that image 1:1. Colors were kept close
// to the reference (track orange, Kunstrasen teal, Rasenplatz mint, halls salmon/pink)
// since the client asked for an exact reproduction of street + buildings; only the
// numbered hotspot badges use the site's black/lime accent for on-brand interactivity.

const addressFor = (name: string) => hallen.find((h) => h.name === name)?.address;

interface Hotspot {
  id: number;
  label: string;
  note: string;
  path: string;
  badge: { x: number; y: number };
}

const hotspots: Hotspot[] = [
  {
    id: 1,
    label: 'Stadion Bühl',
    note: 'Tartanbahn / Leichtathletik-Rundlaufbahn. Hier trainiert u. a. die Leichtathletik-Gruppe (Fr, Stadion Bühl).',
    // Ring drawn separately (two ellipses) — path unused for the track, see renderShape().
    path: '',
    badge: { x: 995, y: 175 },
  },
  {
    id: 2,
    label: 'Kunstrasen Spielfeld',
    note: 'Kunstrasenplatz, oberhalb der Mitte, direkt neben dem Rasenplatz und der Laufbahn.',
    path: 'M 800,45 L 985,60 L 965,235 L 815,220 Z',
    badge: { x: 885, y: 135 },
  },
  {
    id: 3,
    label: 'Rasenplatz',
    note: 'Rasenspielfeld, links neben dem Kunstrasen.',
    path: 'M 650,195 L 762,205 L 752,300 L 645,290 Z',
    badge: { x: 700, y: 245 },
  },
  {
    id: 4,
    label: 'Sporthalle Bühl 1',
    note: `${addressFor('Sporthalle Bühl 1') ?? 'Adresse folgt'}`,
    path: 'M 740,300 L 850,290 L 860,390 L 760,400 L 730,360 Z',
    badge: { x: 795, y: 345 },
  },
  {
    id: 5,
    label: 'Sporthalle Bühl 2',
    note: `${addressFor('Sporthalle Bühl 2') ?? 'Adresse folgt'} — u. a. Bühl 2 Halle 1/2/3: Bubenturnen, Mädchenturnen, Wettkampfturnen, Fitness-Mix.`,
    path: 'M 872,320 L 960,315 L 965,385 L 878,390 Z',
    badge: { x: 918, y: 353 },
  },
  // Hinweis: /handball führt diese Halle als "Theodor-Heuss-Turnhalle", /turnen-Inhalte
  // sprechen von "Theodor-Heuss-Halle" — Adresse ist identisch, nur der Name weicht ab.
  {
    id: 6,
    label: 'Theodor Heuss Halle',
    note: `${addressFor('Theodor-Heuss-Turnhalle') ?? 'Adresse folgt'} — u. a. Eltern-Kind-Turnen, Fit und Fun.`,
    path: 'M 205,365 L 245,365 L 245,350 L 265,350 L 265,410 L 205,410 Z',
    badge: { x: 235, y: 388 },
  },
  {
    id: 7,
    label: 'SKV Vereinsheim',
    note: 'Vereinsheim der SKV Rutesheim.',
    path: 'M 985,345 L 1040,340 L 1045,385 L 990,390 Z',
    badge: { x: 1015, y: 366 },
  },
  {
    id: 8,
    label: 'Kleinspielfeld',
    note: 'Kleines Spielfeld zwischen Stadion und Hallen.',
    path: 'M 800,195 L 895,195 L 895,250 L 800,250 Z',
    badge: { x: 847, y: 222 },
  },
];

const baseFillFor = (id: number) => {
  switch (id) {
    case 1: return 'fill-[#eab676]'; // Tartanbahn orange
    case 2: return 'fill-[#3fae8e]'; // Kunstrasen teal
    case 3: return 'fill-[#bfe3cf]'; // Rasenplatz mint
    case 8: return 'fill-[#e8b878]'; // Kleinspielfeld tan
    default: return 'fill-[#f3b3ae]'; // Hallen/Vereinsheim salmon
  }
};

export const FacilityMap: React.FC = () => {
  const [activeId, setActiveId] = useState<number>(1);
  const active = hotspots.find((h) => h.id === activeId) ?? hotspots[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-start">
      <div className="bg-white rounded-[2rem] border border-black/5 p-4 md:p-6 overflow-x-auto">
        <svg viewBox="0 0 1080 720" className="w-full min-w-[640px] h-auto" role="img" aria-label="Lageplan Sportgelände Bühl Rutesheim">
          <rect x="0" y="0" width="1080" height="720" className="fill-zinc-100" />

          <text x="30" y="55" className="fill-black text-[30px] font-black tracking-tight">Sportgelände Bühl Rutesheim</text>

          {/* Nordpfeil */}
          <g transform="translate(1040, 35)">
            <circle r="18" className="fill-white stroke-black/20" strokeWidth={1.5} />
            <path d="M 0,-12 L 5,4 L 0,0 L -5,4 Z" className="fill-black/70" />
            <text x="0" y="-20" textAnchor="middle" className="fill-black/50 text-[11px] font-black">N</text>
          </g>

          {/* Roter Gebäudecluster (Kontext, nicht interaktiv) */}
          <g className="fill-[#ef8b86]">
            <rect x="0" y="235" width="45" height="95" />
            <rect x="45" y="195" width="45" height="135" />
            <rect x="90" y="215" width="40" height="115" />
            <rect x="130" y="255" width="55" height="75" />
            <rect x="95" y="175" width="35" height="45" className="fill-white stroke-[#ef8b86]" strokeWidth={3} />
            <path d="M 175,330 L 205,330 L 205,350 L 190,365 L 175,350 Z" />
          </g>

          {/* Straßen */}
          <polyline points="610,0 555,65 600,110 555,175 455,235 430,330" className="fill-none stroke-black/25" strokeWidth={9} strokeLinecap="round" strokeLinejoin="round" />
          <rect x="0" y="330" width="780" height="35" className="fill-zinc-200 stroke-black/15" strokeWidth={1.5} />
          <text x="460" y="352" textAnchor="middle" className="fill-black/40 text-[13px] font-bold">Robert Bosch Strasse</text>
          <path d="M 780,347 L 1080,718" className="fill-none stroke-black/25" strokeWidth={14} strokeLinecap="round" />
          <path d="M 780,347 L 1080,718" className="fill-none stroke-zinc-100" strokeWidth={2} strokeDasharray="10 8" />
          <text x="0" y="0" transform="translate(945, 500) rotate(66)" textAnchor="middle" className="fill-black/40 text-[11px] font-bold">Renningen, Weil der Stadt</text>
          <text x="0" y="0" transform="translate(1015, 640) rotate(66)" textAnchor="middle" className="fill-black/40 text-[11px] font-bold">Leonberg</text>

          {/* Parkplätze (Kontext, nicht interaktiv) */}
          {[
            { x: 20, y: 355, w: 140, h: 68 },
            { x: 270, y: 355, w: 145, h: 68 },
            { x: 845, y: 430, w: 150, h: 45 },
            { x: 845, y: 480, w: 95, h: 45 },
          ].map((p, idx) => (
            <g key={idx}>
              <rect x={p.x} y={p.y} width={p.w} height={p.h} className="fill-white stroke-black/15" strokeWidth={1.5} />
              <rect x={p.x + 8} y={p.y + 8} width={22} height={22} rx={4} className="fill-[#5fa8e0]" />
              <text x={p.x + 19} y={p.y + 25} textAnchor="middle" className="fill-white text-[13px] font-black">P</text>
            </g>
          ))}
          <rect x="970" y="470" width="60" height="35" className="fill-zinc-200 stroke-black/15" strokeWidth={1.5} />

          {/* Sportstätten (interaktive Hotspots) — Flächen und Badges in zwei getrennten
              Durchläufen gezeichnet, damit ein Badge nie von einer später gezeichneten,
              überlappenden Nachbarfläche verdeckt wird (z. B. Kunstrasen ragt in den Ring
              der Laufbahn hinein). */}
          {hotspots.map((h) => {
            const isActive = h.id === activeId;
            const commonProps = {
              role: 'button' as const,
              tabIndex: 0,
              'aria-label': `${h.id}. ${h.label}`,
              className: 'cursor-pointer outline-none',
              onMouseEnter: () => setActiveId(h.id),
              onFocus: () => setActiveId(h.id),
              onClick: () => setActiveId(h.id),
              onKeyDown: (e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') setActiveId(h.id); },
            };

            return (
              <g key={h.id} {...commonProps}>
                {h.id === 1 ? (
                  <>
                    <ellipse cx={955} cy={175} rx={115} ry={140} className={`transition-opacity stroke-black/20 ${baseFillFor(1)} ${isActive ? 'opacity-100' : 'opacity-80'}`} strokeWidth={2} />
                    <ellipse cx={955} cy={175} rx={68} ry={95} className="fill-zinc-100" />
                    <rect x={945} y={38} width={20} height={12} rx={2} className="fill-[#f4d35e]" />
                    <rect x={880} y={225} width={30} height={12} rx={2} className="fill-[#f4d35e]" transform="rotate(-20, 895, 231)" />
                  </>
                ) : (
                  <path
                    d={h.path}
                    className={`transition-opacity stroke-black/20 ${baseFillFor(h.id)} ${isActive ? 'opacity-100' : 'opacity-80'}`}
                    strokeWidth={2}
                  />
                )}
                {isActive && h.id !== 1 && (
                  <path d={h.path} className="fill-none stroke-black" strokeWidth={2.5} />
                )}
                {isActive && h.id === 1 && (
                  <ellipse cx={955} cy={175} rx={115} ry={140} className="fill-none stroke-black" strokeWidth={2.5} />
                )}
              </g>
            );
          })}

          {/* Badges — eigener Durchlauf, immer oberste Ebene */}
          {hotspots.map((h) => (
            <g
              key={`badge-${h.id}`}
              role="button"
              tabIndex={0}
              aria-label={`${h.id}. ${h.label}`}
              className="cursor-pointer outline-none"
              onMouseEnter={() => setActiveId(h.id)}
              onFocus={() => setActiveId(h.id)}
              onClick={() => setActiveId(h.id)}
              onKeyDown={(e: React.KeyboardEvent) => { if (e.key === 'Enter' || e.key === ' ') setActiveId(h.id); }}
            >
              <circle cx={h.badge.x} cy={h.badge.y} r={15} className="fill-black" />
              <text x={h.badge.x} y={h.badge.y + 5} textAnchor="middle" className="fill-white text-[14px] font-black">{h.id}</text>
            </g>
          ))}
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
