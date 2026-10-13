import React from 'react';

// Ergebnis-Tabellen (Vereinsliste SKV Rutesheim) im Seiten-Stil.

export interface Geraet { name: string; wert: string }
export interface Starterin { rang: number; name: string; punkte: string; geraete: Geraet[]; hervorgehoben?: boolean }
export interface Wettkampfklasse { nr: string; titel: string; teilnehmer: number; stufe: string; starter: Starterin[] }

const S = 'Sprung', R = 'Stufenbarren', BA = 'Balken', BO = 'Boden';
const g = (name: string, wert: string): Geraet => ({ name, wert });

export const bezirk2026Weiblich: Wettkampfklasse[] = [
  {
    nr: '21851', titel: 'Wahl-3-Kampf aus 4 Geräten Juti AK 8 Einzel', teilnehmer: 25, stufe: 'bis P5',
    starter: [
      { rang: 3, name: 'Johanna Friedrich', punkte: '38,50', hervorgehoben: true, geraete: [g(S, '12,20'), g(R, '13,80'), g(BO, '12,50')] },
      { rang: 7, name: 'Sophie Teufel', punkte: '36,00', hervorgehoben: true, geraete: [g(R, '12,70'), g(BA, '11,50'), g(BO, '11,80')] },
      { rang: 13, name: 'Kaia Kleinmann', punkte: '33,80', geraete: [g(S, '11,30'), g(R, '11,00'), g(BO, '11,50')] },
    ],
  },
  {
    nr: '21852', titel: 'Wahl-3-Kampf aus 4 Geräten Juti AK 9 Einzel', teilnehmer: 36, stufe: 'bis P5',
    starter: [
      { rang: 2, name: 'Lotta Ulmer', punkte: '39,50', hervorgehoben: true, geraete: [g(S, '12,30'), g(R, '13,50'), g(BO, '13,70')] },
      { rang: 18, name: 'Luisa Widmaier', punkte: '35,80', geraete: [g(S, '11,70'), g(R, '12,60'), g(BO, '11,50')] },
    ],
  },
  {
    nr: '21860', titel: 'Wahl-3-Kampf aus 4 Geräten Juti AK 10 Einzel', teilnehmer: 29, stufe: 'bis P6',
    starter: [
      { rang: 1, name: 'Mirijam Schütt', punkte: '41,70', hervorgehoben: true, geraete: [g(S, '14,50'), g(R, '13,00'), g(BO, '14,20')] },
      { rang: 6, name: 'Anni Sommer', punkte: '38,70', hervorgehoben: true, geraete: [g(S, '13,20'), g(R, '12,50'), g(BO, '13,00')] },
      { rang: 14, name: 'Lilly Heermann', punkte: '36,50', geraete: [g(R, '11,50'), g(BA, '13,00'), g(BO, '12,00')] },
      { rang: 20, name: 'Lena Schneider', punkte: '35,10', geraete: [g(R, '10,20'), g(BA, '12,00'), g(BO, '12,90')] },
      { rang: 23, name: 'Rosalie Trick', punkte: '34,70', geraete: [g(S, '12,20'), g(R, '11,50'), g(BO, '11,00')] },
    ],
  },
  {
    nr: '21870', titel: 'Wahl-3-Kampf aus 4 Geräten Juti AK 12 Einzel', teilnehmer: 19, stufe: 'bis P7',
    starter: [
      { rang: 2, name: 'Mia Heermann', punkte: '43,10', hervorgehoben: true, geraete: [g(S, '14,30'), g(R, '13,70'), g(BO, '15,10')] },
    ],
  },
  {
    nr: '21880', titel: 'Wahl-3-Kampf aus 4 Geräten Juti AK 14 Einzel', teilnehmer: 15, stufe: 'bis P9',
    starter: [
      { rang: 8, name: 'Sophia Linnea Malek', punkte: '41,90', geraete: [g(S, '13,30'), g(BA, '14,10'), g(BO, '14,50')] },
      { rang: 10, name: 'Jael Gann', punkte: '41,10', geraete: [g(R, '13,00'), g(BA, '13,50'), g(BO, '14,60')] },
    ],
  },
  {
    nr: '21890', titel: 'Wahl-3-Kampf aus 4 Geräten Juti AK 15 und älter', teilnehmer: 15, stufe: 'bis P9',
    starter: [
      { rang: 4, name: 'Felice Emilia Bardoll', punkte: '43,50', hervorgehoben: true, geraete: [g(R, '14,60'), g(BA, '14,60'), g(BO, '14,30')] },
      { rang: 6, name: 'Lina Marietta Grünebach', punkte: '42,80', hervorgehoben: true, geraete: [g(S, '13,60'), g(R, '14,00'), g(BO, '15,20')] },
    ],
  },
];

const rangClass = (r: Starterin) =>
  r.rang <= 3
    ? 'bg-black text-[#D4FF6B]'
    : r.hervorgehoben
      ? 'bg-[#D4FF6B] text-black'
      : 'bg-zinc-100 text-black/60';

export const ErgebnisTabelle: React.FC<{ klassen: Wettkampfklasse[] }> = ({ klassen }) => (
  <div className="space-y-10">
    {klassen.map((k) => (
      <div key={k.nr}>
        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-4">
          <h4 className="text-base md:text-lg font-black tracking-tight">{k.titel}</h4>
          <span className="text-[10px] font-black uppercase tracking-widest text-black/30">
            Wettkampf {k.nr} · {k.teilnehmer} Teilnehmerinnen · {k.stufe}
          </span>
        </div>
        <div className="space-y-3">
          {k.starter.map((r) => (
            <div
              key={r.name}
              className="bg-white p-4 md:p-5 rounded-2xl border border-black/5 grid grid-cols-[auto_1fr_auto] md:grid-cols-[auto_1fr_auto_auto] items-center gap-x-4 gap-y-3"
            >
              <span className={`w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-sm font-black ${rangClass(r)}`}>
                {r.rang}.
              </span>
              <span className="font-black text-sm md:text-base">{r.name}</span>
              <span className="text-right md:order-last">
                <span className="text-lg md:text-xl font-black tracking-tight">{r.punkte}</span>
                <span className="block text-[9px] font-black uppercase tracking-widest text-black/30">Punkte</span>
              </span>
              <div className="col-span-3 md:col-span-1 grid grid-cols-3 gap-2 md:w-[22rem]">
                {r.geraete.map((ge) => (
                  <div key={ge.name} className="bg-zinc-50 rounded-xl px-3 py-2 text-center">
                    <span className="block text-[9px] font-black uppercase tracking-wider text-black/40 leading-tight break-words">{ge.name}</span>
                    <span className="block text-sm font-black">{ge.wert}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
