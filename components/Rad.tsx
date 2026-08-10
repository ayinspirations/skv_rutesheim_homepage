
import React from 'react';
import { motion } from 'framer-motion';

interface RadProps {
  onBack: () => void;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
}

const INTRO_TEXT =
  "Die Radabteilung des SKV Rutesheim lädt von Ende März bis Anfang Oktober zu gemeinsamen Fahrradtouren durch die Region ein — für alle, die gerne in geselliger Runde unterwegs sind. Je nach Lust und Kondition ist für jeden die passende Tourenlänge dabei: Abendausfahrten mit rund 30 km, Halbtagestouren mit rund 50 km und ganztägige Touren mit rund 60 km.";

const badgeClass = "inline-block px-3 py-1 bg-[#D4FF6B] text-black text-[9px] font-black uppercase tracking-widest rounded-full mb-6";
const cardClass = "bg-zinc-50 rounded-[2.5rem] p-8 md:p-14 border border-black/5";
const bodyText = "text-black/60 font-medium leading-relaxed";

const mailHref = (email: string) => `mailto:${email}`;
const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, '')}`;

const quickLinks = [
  { id: "uebersicht", label: "Übersicht" },
  { id: "sicherheit", label: "Sicherheit" },
  { id: "downloads", label: "Downloads" },
  { id: "kontakt", label: "Kontakt" },
];

// TODO: Text der 6 Sicherheitsregeln liegt noch nicht vor (folgt laut Kunde in einem
// separaten Anhang/Prompt) — 1:1 übernehmen, sobald geliefert.
const sicherheitsregeln = [
  "Regel 1 — Text folgt.",
  "Regel 2 — Text folgt.",
  "Regel 3 — Text folgt.",
  "Regel 4 — Text folgt.",
  "Regel 5 — Text folgt.",
  "Regel 6 — Text folgt.",
];

interface DownloadCard {
  title: string;
  description: string;
  fileLabel: string;
  href: string;
}

const downloads: DownloadCard[] = [
  {
    title: "Allgemeines",
    description: "Übersicht der Rutesheimer Radwege.",
    fileLabel: "Rutesheimer Radwege 2020 (PDF)",
    href: "/2020%20Rutesheimer%20Radwege.pdf",
  },
  {
    title: "SKV-RAD Fahrradtourenangebot 2026",
    description: "Alle geplanten Touren der Saison 2026 im Überblick.",
    fileLabel: "SKV-RAD Fahrradtourenangebot 2026 (PDF)",
    href: "/SKV-RAD-Fahrradtourenangebot20260608.pdf",
  },
];

// TODO: Name, Telefon und E-Mail der 4 Ansprechpartner liegen noch nicht vor
// (folgt laut Kunde in einem separaten Anhang/Prompt) — 1:1 übernehmen, sobald geliefert.
interface Ansprechpartner {
  role: string;
  name: string;
  phone: string;
  email: string;
}

const abteilungsleitung: Ansprechpartner[] = [
  { role: "Abteilungsleitung", name: "Name folgt", phone: "", email: "" },
  { role: "Abteilungsleitung", name: "Name folgt", phone: "", email: "" },
  { role: "Abteilungsleitung", name: "Name folgt", phone: "", email: "" },
  { role: "Abteilungsleitung", name: "Name folgt", phone: "", email: "" },
];

export const Rad: React.FC<RadProps> = ({
  onBack,
  ctaPrimaryLabel = "Tourenangebot ansehen",
  ctaPrimaryHref = "#downloads",
  ctaSecondaryLabel = "Ansprechpartner kontaktieren",
  ctaSecondaryHref = "#kontakt",
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
              SKV Rutesheim <span className="text-black/20">Rad.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl font-black tracking-tight text-black mb-12 max-w-3xl"
            >
              Auf zwei Rädern durch die Region.
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
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Die Radabteilung</h2>
          <p className={`${bodyText} text-lg mb-10 max-w-3xl`}>{INTRO_TEXT}</p>

          <div className={`${cardClass} space-y-10`}>
            <div>
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Stadtradeln</h3>
              <p className={`${bodyText} text-sm`}>
                Wir sind auch beim Stadtradeln aktiv dabei — unter dem Team{' '}
                <span className="font-black text-black">„SKV-RAD Rutesheim"</span> könnt ihr mitradeln und
                gemeinsam mit uns Kilometer für Rutesheim sammeln.
              </p>
            </div>

            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Treffpunkt</h3>
              <p className="text-lg font-black tracking-tight mb-1">Sporthalle Bühl</p>
              <p className={`${bodyText} text-sm`}>Robert-Bosch-Straße, 71277 Rutesheim</p>
            </div>

            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-4">Mitfahren?</h3>
              <p className={`${bodyText} text-sm`}>
                Gäste sind bei uns jederzeit herzlich willkommen — ihr müsst kein Vereinsmitglied sein, um bei
                einer unserer Touren mitzufahren. Kommt einfach zum Treffpunkt und fahrt mit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sicherheit */}
      <section id="sicherheit" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Sicherheit</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Unsere Sicherheitsregeln</h2>
          <div className={cardClass}>
            <ol className="space-y-4 list-decimal pl-5 marker:font-black marker:text-black">
              {sicherheitsregeln.map((regel, idx) => (
                <li key={idx} className={`${bodyText} text-sm md:text-base`}>{regel}</li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Downloads</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Downloads</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {downloads.map((dl, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[2rem] border border-black/5 flex flex-col gap-4">
                <div>
                  <h4 className="text-lg font-black tracking-tight mb-2">{dl.title}</h4>
                  <p className={`${bodyText} text-sm`}>{dl.description}</p>
                </div>
                <a
                  href={dl.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-4 bg-black text-white rounded-xl font-black text-xs uppercase tracking-widest hover:bg-[#D4FF6B] hover:text-black transition-colors mt-auto"
                >
                  📄 {dl.fileLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="px-6 scroll-mt-32">
        <div className="max-w-7xl mx-auto bg-black text-white rounded-[3rem] p-10 md:p-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-14">Abteilungsleitung</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {abteilungsleitung.map((person, idx) => (
              <div key={idx}>
                <span className="text-[#D4FF6B] font-black uppercase tracking-widest text-xs mb-2 block">{person.role}</span>
                <h4 className="text-lg font-black mb-2">{person.name}</h4>
                <div className="flex flex-col gap-1">
                  {person.phone && (
                    <a href={telHref(person.phone)} className="inline-flex items-center gap-2 text-sm font-bold text-white/70 hover:text-white transition-colors">
                      <span>📞</span> {person.phone}
                    </a>
                  )}
                  {person.email && (
                    <a href={mailHref(person.email)} className="inline-flex items-center gap-2 text-sm font-bold text-white/70 hover:text-white transition-colors">
                      <span>✉️</span> {person.email}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
