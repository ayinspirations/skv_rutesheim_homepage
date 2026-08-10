
import React from 'react';
import { motion } from 'framer-motion';

interface SaengerProps {
  onBack: () => void;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
}

const HERO_SUBLINE = "Ein vergnügliches Treffen mit Mut zur Stimme und Spaß am gemeinsamen Singen.";

const badgeClass = "inline-block px-3 py-1 bg-[#D4FF6B] text-black text-[9px] font-black uppercase tracking-widest rounded-full mb-6";
const cardClass = "bg-zinc-50 rounded-[2.5rem] p-8 md:p-14 border border-black/5";
const bodyText = "text-black/60 font-medium leading-relaxed";

const quickLinks = [
  { id: "uebersicht", label: "Übersicht" },
  { id: "termine", label: "Termine" },
  { id: "mitmachen", label: "Mitmachen" },
  { id: "verband", label: "Verband" },
];

// TODO: SKVFreizeitsaenger.jpg (Gruppenbild) wurde vom Kunden angekündigt, liegt aber
// noch nicht unter /public — Platzhalter bis das Bild vorliegt.
const GroupPhotoPlaceholder: React.FC = () => (
  <div
    className="relative w-full aspect-video rounded-2xl overflow-hidden flex items-center justify-center border border-black/5"
    style={{
      backgroundImage: 'repeating-linear-gradient(135deg, #eff6ff 0px, #eff6ff 14px, #dbeafe 14px, #dbeafe 28px)',
    }}
  >
    <span className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-black/40">
      Gruppenbild folgt
    </span>
  </div>
);

export const Saenger: React.FC<SaengerProps> = ({
  onBack,
  ctaPrimaryLabel = "Termine ansehen",
  ctaPrimaryHref = "#termine",
  ctaSecondaryLabel = "Wer mitmachen kann",
  ctaSecondaryHref = "#mitmachen",
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
              SKV Rutesheim <span className="text-black/20">Sänger.</span>
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

      {/* Übersicht */}
      <section id="uebersicht" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Übersicht</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Die SKV-Freizeitsänger*innen</h2>
          <p className={`${bodyText} text-lg mb-10 max-w-3xl`}>{HERO_SUBLINE}</p>

          <div className={`${cardClass} space-y-10`}>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Musikalische Leitung</h3>
              <p className={`${bodyText} text-sm`}>Hans-Dieter Schulz und/oder Angelika Puritscher.</p>
            </div>

            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Hinweis</h3>
              <p className={`${bodyText} text-sm`}>
                Die genauen Termine werden im Mitteilungsblatt veröffentlicht. Eine Anmeldung ist nicht
                erforderlich — einfach vorbeikommen und mitsingen.
              </p>
            </div>

            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Gruppenbild</h3>
              <GroupPhotoPlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* Termine */}
      <section id="termine" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Termine</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Termine</h2>
          <div className={cardClass}>
            <p className="text-lg font-black tracking-tight mb-1">Monatlich, i. d. R. am 1. Mittwoch im Monat</p>
            <p className={`${bodyText} text-sm mb-8`}>17:00–18:30 Uhr</p>

            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Treffpunkt</h3>
            <p className="text-lg font-black tracking-tight mb-1">Nebenraum Sportgaststätte Bühl</p>
            <p className={`${bodyText} text-sm`}>Robert-Bosch-Straße 55, 71277 Rutesheim</p>
          </div>
        </div>
      </section>

      {/* Wer mitmachen kann */}
      <section id="mitmachen" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Mitmachen</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Wer mitmachen kann</h2>
          <p className={`${bodyText} text-lg mb-10 max-w-3xl`}>
            Mitsingen kann bei uns jede und jeder — ganz gleich welcher Generation, mit oder ohne
            Gesangserfahrung. Auch "Badewannensänger*innen" sind bei uns herzlich willkommen.
          </p>

          <div className="bg-black text-white rounded-[2.5rem] p-8 md:p-14 mb-10">
            <h3 className="text-[#D4FF6B] font-black uppercase tracking-widest text-xs mb-8">3 PLUS des gemeinsamen Singens</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div>
                <span className="block text-2xl font-black tracking-tighter mb-2">Musik tut gut</span>
              </div>
              <div>
                <span className="block text-2xl font-black tracking-tighter mb-2">Musik bildet</span>
              </div>
              <div>
                <span className="block text-2xl font-black tracking-tighter mb-2">Gemeinsames Musizieren verbindet</span>
              </div>
            </div>
          </div>

          <p className={`${bodyText} text-sm`}>
            Ihre Angelika Puritscher, Betreuerin der SKV-Freizeitsänger*innen
          </p>
        </div>
      </section>

      {/* Verband */}
      <section id="verband" className="px-6 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Verband</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Verbandszugehörigkeit</h2>
          <p className={`${bodyText} text-lg mb-10 max-w-3xl`}>
            Die SKV-Freizeitsänger*innen sind Mitglied im Schwäbischen Chorverband über den
            Regionalchorverband Johannes Kepler (CVJK), betreut durch die Vorsitzende Angelika Puritscher.
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a
              href="https://www.chorverband-kepler.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-black/10 rounded-xl font-bold text-xs hover:bg-zinc-100 transition-colors"
            >
              Chorverband Johannes Kepler e.V. <span>↗</span>
            </a>
            <a
              href="https://www.s-chorverband.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-black/10 rounded-xl font-bold text-xs hover:bg-zinc-100 transition-colors"
            >
              Schwäbischer Chorverband <span>↗</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
