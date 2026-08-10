
import React from 'react';
import { motion } from 'framer-motion';

interface SportabzeichenProps {
  onBack: () => void;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
}

const HERO_SUBLINE = "Deutsches Sportabzeichen, Lauftreff und Walkingtreff.";

const badgeClass = "inline-block px-3 py-1 bg-[#D4FF6B] text-black text-[9px] font-black uppercase tracking-widest rounded-full mb-6";
const cardClass = "bg-zinc-50 rounded-[2.5rem] p-8 md:p-14 border border-black/5";
const bodyText = "text-black/60 font-medium leading-relaxed";

const telHref = (phone: string) => `tel:${phone.replace(/[\s/]+/g, '')}`;

const quickLinks = [
  { id: "sportabzeichen", label: "Deutsches Sportabzeichen" },
  { id: "lauftreff", label: "Lauftreff" },
  { id: "walkingtreff", label: "Walkingtreff" },
];

const termine2026 = ["21.07.", "28.07.", "08.09.", "15.09.", "22.09."];

// TODO: Namen des 8-köpfigen Sportabzeichen-Teams liegen noch nicht vor
// (folgt laut Kunde in einem separaten Anhang/Prompt) — 1:1 übernehmen, sobald geliefert.
const team = ["Name folgt", "Name folgt", "Name folgt", "Name folgt", "Name folgt", "Name folgt", "Name folgt", "Name folgt"];

// TODO: Exakte URLs zu beiden Leistungskatalogen liegen noch nicht vor
// (folgt laut Kunde in einem separaten Anhang/Prompt) — 1:1 übernehmen, sobald geliefert.
const leistungskataloge = [
  { label: "Leistungskatalog Erwachsene (PDF)", href: "#" },
  { label: "Leistungskatalog Kinder/Jugendliche (PDF)", href: "#" },
];

interface SeasonEntry {
  treffpunkt: string;
  zeit: string;
}

// TODO: Exakte Treffpunkte/Zeiten für Winter und Sommer liegen noch nicht vor
// (folgt laut Kunde in einem separaten Anhang/Prompt) — 1:1 übernehmen, sobald geliefert.
const lauftreffWinter: SeasonEntry[] = [{ treffpunkt: "Treffpunkt folgt", zeit: "Zeit folgt" }];
const lauftreffSommer: SeasonEntry[] = [{ treffpunkt: "Treffpunkt folgt", zeit: "Zeit folgt" }];
const walkingtreffWinter: SeasonEntry[] = [{ treffpunkt: "Treffpunkt folgt", zeit: "Zeit folgt" }];
const walkingtreffSommer: SeasonEntry[] = [{ treffpunkt: "Treffpunkt folgt", zeit: "Zeit folgt" }];

const SeasonSchedule: React.FC<{ winter: SeasonEntry[]; sommer: SeasonEntry[] }> = ({ winter, sommer }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
    <div>
      <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">Winter</h4>
      <div className="space-y-3">
        {winter.map((entry, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-black/5">
            <span className="block text-sm font-black">{entry.treffpunkt}</span>
            <span className="block text-xs font-bold text-black/40">{entry.zeit}</span>
          </div>
        ))}
      </div>
    </div>
    <div>
      <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">Sommer</h4>
      <div className="space-y-3">
        {sommer.map((entry, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl border border-black/5">
            <span className="block text-sm font-black">{entry.treffpunkt}</span>
            <span className="block text-xs font-bold text-black/40">{entry.zeit}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Sportabzeichen: React.FC<SportabzeichenProps> = ({
  onBack,
  ctaPrimaryLabel = "Termine ansehen",
  ctaPrimaryHref = "#sportabzeichen",
  ctaSecondaryLabel = "Lauftreff & Walkingtreff",
  ctaSecondaryHref = "#lauftreff",
}) => {
  return (
    <div className="pt-24 pb-32">
      {/* Hero */}
      <section className="px-6 mb-16 md:mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onBack}
            className="mb-12 text-[10px] font-black uppercase tracking-[0.3em] text-black/40 hover:text-black flex items-center gap-2 transition-colors"
          >
            <span>←</span> Zurück zur Startseite
          </motion.button>

          <div className="max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-6"
            >
              SKV Rutesheim <span className="text-black/20">Sportabzeichen.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl font-black tracking-tight text-black mb-12 max-w-3xl"
            >
              {HERO_SUBLINE}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={ctaPrimaryHref}
                className="px-8 py-5 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#D4FF6B] hover:text-black transition-all shadow-xl text-center"
              >
                {ctaPrimaryLabel}
              </a>
              <a
                href={ctaSecondaryHref}
                className="px-8 py-5 bg-zinc-50 border border-black/5 text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-zinc-100 transition-colors text-center"
              >
                {ctaSecondaryLabel}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="px-6 mb-20 md:mb-32">
        <div className="max-w-7xl mx-auto flex flex-row gap-2 overflow-x-auto scrollbar-hide">
          {quickLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="px-5 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border border-transparent bg-zinc-50/50 text-black/40 hover:bg-zinc-100 hover:text-black/60"
            >
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* Deutsches Sportabzeichen */}
      <section id="sportabzeichen" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Deutsches Sportabzeichen</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Deutsches Sportabzeichen</h2>

          <div className={`${cardClass} space-y-10`}>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Termine 2026</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {termine2026.map((datum, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white border border-black/5 rounded-xl font-black text-sm">{datum}</span>
                ))}
              </div>
              <p className="text-lg font-black tracking-tight mb-1">Sportgelände Bühl</p>
              <p className={`${bodyText} text-sm mb-4`}>18:30 – ca. 20:00 Uhr</p>
              <p className={`${bodyText} text-sm`}>
                Die Abnahmen finden nur bei trockenem Wetter statt — einzelne Termine können daher kurzfristig ausfallen.
              </p>
            </div>

            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Sondertermin Walking</h3>
              <p className="text-lg font-black tracking-tight mb-1">21.07., 18:30 Uhr</p>
              <p className={`${bodyText} text-sm`}>Flachter Tor</p>
            </div>

            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Allgemeine Hinweise</h3>
              <ul className="space-y-2">
                <li className={`${bodyText} text-sm flex gap-3`}>
                  <span className="text-black/20 font-black shrink-0">–</span>
                  <span>Eine SKV-Mitgliedschaft ist nicht erforderlich.</span>
                </li>
                <li className={`${bodyText} text-sm flex gap-3`}>
                  <span className="text-black/20 font-black shrink-0">–</span>
                  <span>Ein Schwimmnachweis ist erforderlich — Erwachsene müssen diesen alle 5 Jahre erneuern.</span>
                </li>
                <li className={`${bodyText} text-sm flex gap-3`}>
                  <span className="text-black/20 font-black shrink-0">–</span>
                  <span>Hinweis für Polizei-/Zoll-Anwärter: Bitte vorab zu den Abnahmeterminen erkundigen.</span>
                </li>
              </ul>
            </div>

            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Unser Team</h3>
              <div className="flex flex-wrap gap-2">
                {team.map((name, idx) => (
                  <span key={idx} className="px-4 py-2 bg-white border border-black/5 rounded-xl font-bold text-sm">{name}</span>
                ))}
              </div>
            </div>

            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Kontakt</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                <div>
                  <h4 className="text-lg font-black mb-2 tracking-tighter">Katja Heckel</h4>
                  <a href={telHref('0172 7953 848')} className="inline-flex items-center gap-2 text-sm font-black hover:text-black/50 transition-colors">
                    <span>📞</span> 0172 7953 848
                  </a>
                </div>
                <div>
                  <h4 className="text-lg font-black mb-2 tracking-tighter">Dieter Sauter</h4>
                  <a href={telHref('07152/55633')} className="inline-flex items-center gap-2 text-sm font-black hover:text-black/50 transition-colors">
                    <span>📞</span> 07152/55633
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Leistungskataloge</h3>
              <div className="flex flex-wrap gap-4">
                {leistungskataloge.map((doc, idx) => (
                  <a
                    key={idx}
                    href={doc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-black/10 rounded-xl font-bold text-xs hover:bg-zinc-100 transition-colors"
                  >
                    📄 {doc.label} <span>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lauftreff */}
      <section id="lauftreff" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Lauftreff</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Lauftreff</h2>

          <div className={`${cardClass} space-y-10`}>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Ansprechpartner</h3>
              <h4 className="text-lg font-black mb-2 tracking-tighter">Edgar Winter</h4>
              <a href={telHref('07152/51396')} className="inline-flex items-center gap-2 text-sm font-black hover:text-black/50 transition-colors">
                <span>📞</span> 07152/51396
              </a>
            </div>

            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Treffpunkte & Zeiten</h3>
              <SeasonSchedule winter={lauftreffWinter} sommer={lauftreffSommer} />
            </div>
          </div>
        </div>
      </section>

      {/* Walkingtreff */}
      <section id="walkingtreff" className="px-6 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Walkingtreff</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Walkingtreff</h2>

          <div className={`${cardClass} space-y-10`}>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Ansprechpartnerin</h3>
              <h4 className="text-lg font-black mb-2 tracking-tighter">Monika Winter</h4>
              <a href={telHref('07152/51396')} className="inline-flex items-center gap-2 text-sm font-black hover:text-black/50 transition-colors">
                <span>📞</span> 07152/51396
              </a>
            </div>

            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Treffpunkte & Zeiten</h3>
              <SeasonSchedule winter={walkingtreffWinter} sommer={walkingtreffSommer} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
