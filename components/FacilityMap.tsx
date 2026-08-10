
import React, { useState } from 'react';
import { hallen } from './Handball';

// Self-contained on purpose: this section could later be split out to its own
// route (e.g. /turnen/hallen) without touching the rest of the Turnen page.
// The only external dependency is the hall address data already defined for
// /handball, reused here per spec instead of re-deriving the addresses.
//
// IMPORTANT: per explicit client instruction this map must reproduce the reference
// plan ("Sportgelände Bühl Rutesheim") 1:1 — road course, building shapes/positions,
// colors (peach track, teal Kunstrasen, mint Rasenplatz, salmon/coral halls, red
// building cluster, red numbered badges) and the baked-in title/legend/north-arrow are
// all traced directly from that image. Do not restyle to on-brand colors.
// The only additive UI element beyond the static reference image is a thin lime focus
// ring on the active/hovered hotspot (interaction feedback), plus the separate
// accessible legend list + info panel below (required for touch/a11y fallback).

const addressFor = (name: string) => hallen.find((h) => h.name === name)?.address;

interface Hotspot {
  id: number;
  label: string;
  note: string;
  path: string;
  fill: string;
  badge: { x: number; y: number };
}

const PEACH = '#f6c98d';
const TEAL = '#14a37a';
const MINT = '#dcefe1';
const SALMON = '#fbc9cd';
const CORAL = '#f2857f';
const BG = '#d9d9d9';
const ROAD_LINE = '#4a4a4a';
const ROAD_BED = '#e7e7e7';

const hotspots: Hotspot[] = [
  {
    id: 1,
    label: 'Stadion Bühl',
    note: 'Tartanbahn / Leichtathletik-Rundlaufbahn. Hier trainiert u. a. die Leichtathletik-Gruppe (Fr, Stadion Bühl).',
    // Stadionform (zwei gedrehte Pillen), siehe Render unten.
    path: '',
    fill: PEACH,
    badge: { x: 1015, y: 145 },
  },
  {
    id: 2,
    label: 'Kunstrasen Spielfeld',
    note: 'Kunstrasenplatz, oberhalb der Mitte, direkt neben dem Rasenplatz und der Laufbahn.',
    path: 'M 800,20 L 935,35 L 905,225 L 780,205 Z',
    fill: TEAL,
    badge: { x: 850, y: 110 },
  },
  {
    id: 3,
    label: 'Rasenplatz',
    note: 'Rasenspielfeld, links neben dem Kunstrasen.',
    path: 'M 695,205 L 790,213 L 776,300 L 690,292 Z',
    fill: MINT,
    badge: { x: 735, y: 250 },
  },
  {
    id: 4,
    label: 'Sporthalle Bühl 1',
    note: `${addressFor('Sporthalle Bühl 1') ?? 'Adresse folgt'}`,
    path: 'M 735,300 L 815,292 L 822,365 L 760,372 L 735,345 Z',
    fill: SALMON,
    badge: { x: 780, y: 335 },
  },
  {
    id: 5,
    label: 'Sporthalle Bühl 2',
    note: `${addressFor('Sporthalle Bühl 2') ?? 'Adresse folgt'} — u. a. Bühl 2 Halle 1/2/3: Bubenturnen, Mädchenturnen, Wettkampfturnen, Fitness-Mix.`,
    path: 'M 840,335 L 910,328 L 916,388 L 845,393 Z',
    fill: SALMON,
    badge: { x: 878, y: 362 },
  },
  // Hinweis: /handball führt diese Halle als "Theodor-Heuss-Turnhalle", /turnen-Inhalte
  // sprechen von "Theodor-Heuss-Halle" — Adresse ist identisch, nur der Name weicht ab.
  {
    id: 6,
    label: 'Theodor Heuss Halle',
    note: `${addressFor('Theodor-Heuss-Turnhalle') ?? 'Adresse folgt'} — u. a. Eltern-Kind-Turnen, Fit und Fun.`,
    path: 'M 200,340 L 245,340 L 245,355 L 220,355 L 220,395 L 200,395 Z',
    fill: CORAL,
    badge: { x: 220, y: 372 },
  },
  {
    id: 7,
    label: 'SKV Vereinsheim',
    note: 'Vereinsheim der SKV Rutesheim.',
    path: 'M 925,375 L 975,370 L 982,412 L 930,417 Z',
    fill: SALMON,
    badge: { x: 953, y: 394 },
  },
  {
    id: 8,
    label: 'Kleinspielfeld',
    note: 'Kleines Spielfeld zwischen Stadion und Hallen.',
    path: 'M 805,200 L 880,205 L 875,248 L 805,243 Z',
    fill: PEACH,
    badge: { x: 840, y: 224 },
  },
];

const TRACK_CX = 985;
const TRACK_CY = 150;
const TRACK_ROTATE = -18;

export const FacilityMap: React.FC = () => {
  // No hotspot is active until the user actually hovers/clicks/focuses one, so the map
  // renders exactly like the static reference image on first load (no added ring).
  const [activeId, setActiveId] = useState<number | null>(null);
  const active = hotspots.find((h) => h.id === activeId) ?? hotspots[0];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-8 items-start">
      <div className="bg-white rounded-[2rem] border border-black/5 p-4 md:p-6 overflow-x-auto">
        <svg viewBox="0 0 1084 720" className="w-full min-w-[640px] h-auto" role="img" aria-label="Lageplan Sportgelände Bühl Rutesheim">
          <rect x="0" y="0" width="1084" height="720" fill={BG} />

          <text x="20" y="55" className="fill-black text-[32px] font-normal">Sportgelände Bühl Rutesheim</text>

          {/* Nordpfeil */}
          <g transform="translate(1045, 30)">
            <circle r="17" fill="#fff" stroke="#999" strokeWidth={1.5} />
            <path d="M 0,-13 L 6,5 L 0,1 L -6,5 Z" fill="#333" />
            <text x="0" y="-19" textAnchor="middle" className="text-[11px] font-bold" fill="#666">N</text>
          </g>

          {/* Roter Gebäudecluster (Kontext, nicht interaktiv) */}
          <g fill={CORAL}>
            <rect x="0" y="230" width="45" height="95" />
            <rect x="45" y="195" width="45" height="130" />
            <rect x="90" y="215" width="40" height="110" />
            <rect x="130" y="255" width="55" height="70" />
            <rect x="95" y="175" width="35" height="45" fill="#fff" stroke={CORAL} strokeWidth={3} />
            <path d="M 178,325 L 208,325 L 208,345 L 193,362 L 178,345 Z" />
          </g>

          {/* Straßen: doppellinige Straßensignatur (heller Belag, dunkler Rand) */}
          <polyline points="605,0 550,60 595,105 550,170 460,225 388,325" fill="none" stroke={ROAD_BED} strokeWidth={10} />
          <polyline points="605,0 550,60 595,105 550,170 460,225 388,325" fill="none" stroke={ROAD_LINE} strokeWidth={2} />

          <rect x="0" y="322" width="770" height="34" fill={ROAD_BED} stroke={ROAD_LINE} strokeWidth={1.5} />
          <text x="450" y="343" textAnchor="middle" className="text-[13px] font-bold" fill="#555">Robert Bosch Strasse</text>

          <polygon points="770,322 1084,595 1084,635 770,356" fill={ROAD_BED} stroke={ROAD_LINE} strokeWidth={1.5} />
          <text textAnchor="middle" className="text-[12px] font-bold" fill="#555" transform="translate(985, 470) rotate(58)">Renningen, Weil der Stadt</text>
          <text textAnchor="middle" className="text-[12px] font-bold" fill="#555" transform="translate(1050, 615) rotate(58)">Leonberg</text>

          {/* Parkplätze (Kontext, nicht interaktiv) */}
          {[
            { x: 12, y: 340, w: 145, h: 70 },
            { x: 265, y: 340, w: 150, h: 70 },
            { x: 848, y: 420, w: 150, h: 42 },
            { x: 848, y: 468, w: 90, h: 42 },
          ].map((p, idx) => (
            <g key={idx}>
              <rect x={p.x} y={p.y} width={p.w} height={p.h} fill="#fff" stroke="#999" strokeWidth={1.5} />
              <rect x={p.x + 8} y={p.y + 8} width={22} height={22} rx={4} fill="#4fa8dc" />
              <text x={p.x + 19} y={p.y + 25} textAnchor="middle" className="text-[13px] font-black" fill="#fff">P</text>
            </g>
          ))}
          <rect x="948" y="458" width="55" height="35" fill={ROAD_BED} stroke="#999" strokeWidth={1.5} />
          <rect x="805" y="450" width="20" height="50" fill="#fff" stroke="#999" strokeWidth={1.5} />

          {/* Sportstätten (interaktive Hotspots) — Flächen und Badges in zwei getrennten
              Durchläufen gezeichnet, damit ein Badge nie von einer später gezeichneten,
              überlappenden Nachbarfläche verdeckt wird (z. B. Kunstrasen ragt in den Ring
              der Laufbahn hinein). Farben entsprechen exakt der Referenzgrafik; die
              schmale Lime-Kontur markiert nur den aktiven/gehoverten Punkt. */}
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
                  <g transform={`rotate(${TRACK_ROTATE}, ${TRACK_CX}, ${TRACK_CY})`}>
                    {/* Laufbahn als Stadionform (Pille): volle Eckabrundung ergibt die
                        typische Rundlaufbahn-Silhouette statt einer reinen Ellipse. */}
                    <rect x={TRACK_CX - 145} y={TRACK_CY - 82} width={290} height={164} rx={82} fill={PEACH} stroke="#333" strokeWidth={1.5} />
                    <rect x={TRACK_CX - 85} y={TRACK_CY - 47} width={170} height={94} rx={47} fill={BG} />
                    <rect x={TRACK_CX - 12} y={TRACK_CY - 78} width={22} height={12} rx={2} fill="#f4d35e" />
                    <rect x={TRACK_CX - 70} y={TRACK_CY + 44} width={34} height={12} rx={2} fill="#f4d35e" />
                  </g>
                ) : (
                  <path d={h.path} fill={h.fill} stroke="#333" strokeWidth={1.5} />
                )}
                {isActive && (
                  h.id === 1
                    ? (
                      <g transform={`rotate(${TRACK_ROTATE}, ${TRACK_CX}, ${TRACK_CY})`}>
                        <rect x={TRACK_CX - 149} y={TRACK_CY - 86} width={298} height={172} rx={86} fill="none" stroke="#D4FF6B" strokeWidth={4} />
                      </g>
                    )
                    : <path d={h.path} fill="none" stroke="#D4FF6B" strokeWidth={4} />
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
              <circle cx={h.badge.x} cy={h.badge.y} r={14} fill="#e8362d" stroke="#fff" strokeWidth={1.5} />
              <text x={h.badge.x} y={h.badge.y + 5} textAnchor="middle" className="text-[14px] font-black" fill="#fff">{h.id}</text>
            </g>
          ))}

          {/* Legende — 1:1 wie in der Referenzgrafik in die Karte eingezeichnet */}
          <g style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} fill="#111" className="text-[17px]">
            <text x="115" y="512">1&#160;&#160;Stadion Bühl</text>
            <text x="115" y="536">2&#160;&#160;Kunstrasen Spielfeld</text>
            <text x="115" y="560">3&#160;&#160;Rasenplatz</text>
            <text x="115" y="584">4&#160;&#160;Sporthalle Bühl 1</text>
            <text x="440" y="512">5&#160;&#160;Sporthalle Bühl 2</text>
            <text x="440" y="536">6&#160;&#160;Theodor Heuss Halle</text>
            <text x="440" y="560">7&#160;&#160;SKV Vereinsheim</text>
            <text x="440" y="584">8&#160;&#160;Kleinspielfeld</text>
          </g>
        </svg>
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
                onClick={() => setActiveId(h.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-bold transition-colors ${
                  h.id === activeId ? 'bg-[#D4FF6B] text-black' : 'bg-zinc-50 text-black/60 hover:bg-zinc-100'
                }`}
              >
                <span className="w-6 h-6 rounded-full bg-[#e8362d] text-white text-[11px] font-black flex items-center justify-center shrink-0">{h.id}</span>
                {h.label}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
