
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HandballProps {
  onBack: () => void;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
}

const MISSION_TEXT =
  "Die Handballabteilung des SKV Rutesheim steht für Begeisterung, Teamgeist und eine nachhaltige Förderung des Handballsports – von den Kleinsten bis zu den Erwachsenen. Besonders im Kinder- und Jugendhandball legen wir großen Wert darauf, den Spaß an Bewegung und Spiel zu vermitteln und gleichzeitig sportliche sowie persönliche Entwicklung zu fördern. Gemeinsam mit unseren Partnervereinen aus Renningen und Magstadt bilden wir das HandballTeam Heckengäu und schaffen damit optimale Bedingungen für Ausbildung, Training und Wettkampfbetrieb. Durch den Zusammenschluss können wir unseren Spielerinnen und Spielern ein attraktives sportliches Umfeld und eine starke Gemeinschaft bieten. So verbinden wir leistungsorientierten Handball mit Freude am Sport und einem lebendigen Vereinsleben.";

interface NewsItem {
  title: string;
  modalTitle?: string;
  modalBody?: React.ReactNode;
}

const newsParagraph = "text-black/70 font-medium leading-relaxed mb-4";
const newsOrderedList = "space-y-2 mb-4 pl-5 list-decimal marker:font-black marker:text-black";
const newsSubList = "space-y-1 mt-2 mb-1 pl-5 list-[lower-alpha] marker:font-bold marker:text-black/50 text-black/70";

const abteilungsversammlungBody = (
  <>
    <p className={newsParagraph}>Liebe Mitglieder der Handballabteilung,</p>
    <p className={newsParagraph}>
      wir laden euch herzlich zur nächsten Abteilungsversammlung unserer Handballabteilung ein.
    </p>
    <p className={newsParagraph}>
      Die Versammlung findet am 08. Mai 2026 um 19 Uhr im Nebenzimmer der Sportgaststätte Bühl statt.
    </p>

    <p className="text-black font-black text-sm uppercase tracking-widest mb-3">Die Tagesordnung</p>
    <ol className={newsOrderedList}>
      <li>Begrüßung durch den Abteilungsleiter</li>
      <li>Rückblick auf die vergangene Saison durch Offizielle und Trainer</li>
      <li>Finanzbericht</li>
      <li>
        Entlastungen
        <ol className={newsSubList}>
          <li>Abteilungsleiter</li>
          <li>Stellv. Abteilungsleiter</li>
          <li>Kasse</li>
          <li>Jugendleitung</li>
        </ol>
      </li>
      <li>
        Wahlen
        <ol className={newsSubList}>
          <li>Stellv. Abteilungsleiter</li>
          <li>Jugendleitung</li>
        </ol>
      </li>
      <li>Ausblick Spielgemeinschaft HT Heckengäu</li>
      <li>Sonstiges</li>
    </ol>

    <p className={newsParagraph}>
      Eventuelle Anträge bitten wir bis eine Woche vor der Versammlung beim Abteilungsleiter, Stefan Kugel, unter{' '}
      <a
        href="https://www.handball-rutesheim.de/de/news/Abteilungsversammlung-2026.php#wEmpty"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black font-bold underline underline-offset-2 hover:text-black/60 transition-colors"
      >
        abteilungsleitung@handball-rutesheim.de
      </a>{' '}
      einzureichen.
    </p>

    <p className={newsParagraph}>
      Mit sportlichen Grüßen,
      <br />
      Stefan Kugel und Maximilian Hoffart
      <br />
      Abteilungsleitung
    </p>
  </>
);

const jahreshauptversammlungHFRBody = (
  <>
    <p className={newsParagraph}>Liebe Mitglieder,</p>
    <p className={newsParagraph}>
      am Freitag, den 08. Mai 2026 findet im Anschluss an die Jahreshauptversammlung der Handballabteilung des SKV
      Rutesheim e.V. in der Sportgaststätte Bühl im Nebenzimmer unsere diesjährige Jahreshauptversammlung statt.
      Hierzu möchten wir Euch herzlich einladen – Beginn ca. 20:00 Uhr.
    </p>

    <p className="text-black font-black text-sm uppercase tracking-widest mb-3">Tagesordnungspunkte</p>
    <ol className={newsOrderedList}>
      <li>
        Lagebericht
        <ol className={newsSubList}>
          <li>Mitglieder</li>
          <li>Sponsoren</li>
          <li>HT Heckengäu</li>
          <li>Bewirtung</li>
        </ol>
      </li>
      <li>Finanzbericht 2025</li>
      <li>Finanzentwurf 2026</li>
      <li>Entlastungen</li>
      <li>Neuwahlen</li>
      <li>
        Sonstiges
        <ol className={newsSubList}>
          <li>Sommerfest 2026</li>
          <li>Neue Bewirtungseinnahmequellen</li>
        </ol>
      </li>
    </ol>

    <p className={newsParagraph}>
      Anträge auf etwaige Tagesordnungspunkte sind bis zum 28. April 2026 schriftlich beim Vorstand einzureichen.
    </p>

    <p className={newsParagraph}>Wir freuen uns Euch zahlreich begrüßen zu dürfen.</p>

    <p className={newsParagraph}>
      Mit sportlichen Grüßen
      <br />
      Handballförderverein Region Rutesheim e.V.
    </p>

    <p className={`${newsParagraph} mb-0`}>
      Dusica Cvetkovic (1. Vorsitzende)
      <br />
      Sophie Polster (2. Vorsitzende)
    </p>
  </>
);

const jahresrueckblick2025Body = (
  <>
    <p className={newsParagraph}>
      Die SKV Rutesheim Handball blickt auf ein ereignisreiches und erfolgreiches Jahr 2025 zurück. Besonders
      prägend war der Start in das zweite Jahr der Jugendspielgemeinschaft mit der Spvgg Renningen und dem SV
      Magstadt, die sich sportlich wie organisatorisch weiter gefestigt hat und großen Anklang findet. Parallel
      dazu wurden wichtige Weichen für die Zukunft gestellt: Die Vorbereitungen zur Weiterentwicklung der
      Jugendspielgemeinschaft hin zu einer Gesamtspielgemeinschaft ab der Saison 2026/2027 wurden konsequent
      vorangetrieben. Hinter den Kulissen wird in vielen Arbeitsgruppen eifrig auf den Zusammenschluss
      hingearbeitet um auch künftig attraktiven Handball im Aktivenbereich in der Region anbieten zu können.
    </p>
    <p className={newsParagraph}>
      Ein besonderes Highlight zum Jahresende war auch wieder der Grundschulaktionstag in Kooperation mit der
      Theodor-Heuss-Schule in Rutesheim – in seiner bereits 10. Auflage wurde der Handball begeisternden Kindern
      spielerisch nahegebracht.
    </p>
    <p className={newsParagraph}>
      Im Rutesheimer Kinderhandball konnten auch 2025, nach dem Zusammenschluss der beiden Handballverbände aus
      Württemberg und Baden zum neuen BWHV, wieder Spieltage im F- und E-Jugendbereich durchgeführt werden und
      unsere Teams waren bisher sehr erfolgreich. Wir freuen uns auf eine Fortsetzung in 2026. Zum Start des
      Kalenderjahres 2026 sollen auch die ersten Minispieltage folgen - unsere Kleinsten sind schon voller
      Vorfreude.
    </p>
    <p className={newsParagraph}>
      Aus Sicht der Kinder bildeten die Weihnachtsfeiern der Minis sowie der F- und E-Jugenden einen fröhlichen
      Jahresabschluss 2025. Für leuchtende Kinderaugen, liebevolle Geschenke und ein leckeres Essen sorgte der
      Handballförderverein Rutesheim e.V., der diese Feiern finanziell unterstützt hat. Außerdem werden auch die
      vielen Trainingsmaterialien, Handbälle, Trikots und vieles mehr im Kinder- und Jugendbereich über den
      Förderverein finanziert. Für die wertvolle Unterstützung möchten wir uns herzlich bedanken!
    </p>
    <p className={newsParagraph}>
      Wer mehr über den HFR erfahren möchten oder durch eine Mitgliedschaft den Kinder- und Jugendhandball in
      Rutesheim unterstützen möchte, kann sich gerne hier auf unserer Homepage weiter umbeischauen.
    </p>
    <p className={`${newsParagraph} mb-0`}>
      Ein großer Dank gilt darüber hinaus natürlich auch allen Trainerinnen und Trainern, Betreuerinnen und
      Betreuern sowie den zahlreichen ehrenamtlichen Helferinnen und Helfern, die mit ihrem Engagement den
      Handballbetrieb im Verein erst möglich machen. Ebenso danken wir den Eltern für ihre kontinuierliche
      Unterstützung, ihre Mithilfe bei Spieltagen und Veranstaltungen sowie das entgegengebrachte Vertrauen. Die
      SKV Rutesheim freut sich auf ein sportlich erfolgreiches Jahr 2026.
    </p>
  </>
);

// TODO: Platzhalter-Links — echte Artikelseiten/-links für die übrigen Meldungen liegen noch nicht vor.
const neuigkeiten: NewsItem[] = [
  { title: "Abteilungsversammlung 2026", modalTitle: "Abteilungsversammlung 2026", modalBody: abteilungsversammlungBody },
  {
    title: "Jahreshauptversammlung HFR 2026",
    modalTitle: "Einladung zur Jahreshauptversammlung 2026 des Handballförderverein Region Rutesheim e.V.",
    modalBody: jahreshauptversammlungHFRBody,
  },
  {
    title: "SKV Rutesheim Handball: Erfolgreicher Jahresrückblick 2025 und klarer Blick nach vorne",
    modalTitle: "SKV Rutesheim Handball: Erfolgreicher Jahresrückblick 2025 und klarer Blick nach vorne",
    modalBody: jahresrueckblick2025Body,
  },
  { title: "10. Auflage des Grundschulaktionstages in Kooperation mit der Theodor-Heuss-Schule" },
  { title: "Unser neuer HT Heckengäu Fan Shop ist online" },
];

// TODO: Platzhalter-Links — echte Berichts-PDFs/-Seiten liegen noch nicht vor.
const berichte = [
  "Bericht der Jahreshauptversammlung 2025",
  "Bericht der Jahreshauptversammlung 2024 der SKV Rutesheim – Abteilung Handball",
];

interface Sponsor {
  name: string;
  logo: string;
  href?: string;
}

const sponsoren: Sponsor[] = [
  { name: "Hagebau Bolay", logo: "/logo-hagebau-bolay-traegerflaeche-rgb.png", href: "https://www.hagebau-bolay.de/" },
  { name: "Bäckerei Diefenbach", logo: "/diefenbach.gif", href: "https://www.baeckerei-diefenbach.de/" },
  // TODO: Website/Link für Böhmler noch vom Kunden anzufordern.
  { name: "Böhmler", logo: "/boehmler.jpg" },
];

const ansprechpartnerAbteilung = [
  { role: "Abteilungsleiter", name: "Stefan Kugel", email: "abteilungsleitung@handball-rutesheim.de" },
  { role: "stellv. Abteilungsleiter", name: "Maximilian Hoffart", email: "stellv.abteilungsleitung@handball-rutesheim.de" },
  { role: "Jugendleitung", name: "Markus Polster und Daniel Wielsch", email: "jugendleitung@handball-rutesheim.de" },
  { role: "Kassier", name: "Sarah Weber", email: "kassier@handball-rutesheim.de" },
  // Hinweis: E-Mail laut Zusendung identisch mit der des Abteilungsleiters —
  // TODO: beim Kunden gegenchecken, ob das korrekt ist oder Isolde Kindler eine eigene Adresse hat.
  { role: "Geschäftsstelle", name: "Isolde Kindler", email: "abteilungsleitung@handball-rutesheim.de" },
];

interface TrainingGroup {
  name: string;
  scheduleLines?: string[];
  sporthalle?: string;
  trainer?: string;
  email?: string;
  note?: string;
  needsFoto?: boolean;
}

const trainingsgruppen: TrainingGroup[] = [
  {
    name: "Spielgruppe (ab 3 Jahren)",
    note: "Wir können zur Zeit leider keine Spielgruppe anbieten.",
    email: "spielgruppe@handball-rutesheim.de",
  },
  // TODO: Mannschaftsfoto noch vom Kunden anzufordern.
  {
    name: "Minis (ab 4 Jahren)",
    scheduleLines: ["Freitag, 16:00–17:00 Uhr"],
    sporthalle: "Bühl 1",
    trainer: "Philipp Kamping, Lars Neuffer",
    email: "minis@handball-rutesheim.de",
    needsFoto: true,
  },
  // TODO: Mannschaftsfoto noch vom Kunden anzufordern.
  {
    name: "Gemischte F-Jugend",
    scheduleLines: ["Freitag, 16:00–17:30 Uhr"],
    sporthalle: "Bühl 2",
    trainer: "Andreas Flöck, Sarina Gaß, Maja Kulis",
    email: "f-jugend@handball-rutesheim.de",
    needsFoto: true,
  },
  // TODO: Mannschaftsfoto noch vom Kunden anzufordern.
  {
    name: "Gemischte E-Jugend",
    scheduleLines: ["Freitag, 17:00–18:30 Uhr"],
    sporthalle: "Bühl 1",
    trainer: "Jessica Drodofsky, Markus Spindler, Cornelius Bührle",
    email: "e-jugend@handball-rutesheim.de",
    needsFoto: true,
  },
  // Hinweis: D/C/B/A-Jugend-Zeiten stammen aus dem "Handball Team Heckengäu"-Gesamtplan
  // und laufen gemeinsam mit den Partnervereinen über Renningen/Magstadt/Rutesheim.
  // TODO: kein separater Trainer pro Team angegeben — beim Kunden nachfragen, ob ergänzt werden soll.
  {
    name: "D-Jugend weiblich",
    scheduleLines: [
      "Dienstag, 17:15–19:00 Uhr (Magstadt)",
      "Mittwoch, 18:00–19:30 Uhr (Rutesheim)",
      "Freitag, 15:20–17:00 Uhr (Renningen)",
      "Samstag, 9:30–11:00 Uhr Zusatzangebot (Magstadt)",
    ],
  },
  {
    name: "D-Jugend männlich",
    scheduleLines: ["Montag, 17:15–19:00 Uhr (ReRuMa rollierend)", "Mittwoch, 17:00–18:30 Uhr (ReRuMa rollierend)"],
  },
  {
    name: "C-Jugend weiblich",
    scheduleLines: ["Montag, 17:15–19:00 Uhr (ReRuMa rollierend)", "Mittwoch, 17:00–18:30 Uhr (ReRuMa rollierend)"],
  },
  {
    name: "C-Jugend männlich",
    scheduleLines: [
      "Dienstag, 17:15–19:00 Uhr (Magstadt)",
      "Mittwoch, 18:00–19:30 Uhr (Rutesheim)",
      "Freitag, 17:00–18:15 Uhr (Renningen)",
      "Samstag, 9:30–11:00 Uhr Zusatzangebot (Magstadt)",
      "Donnerstag, 18:30–20:00 Uhr (Renningen)",
    ],
  },
  {
    name: "B-Jugend weiblich",
    scheduleLines: ["Montag, 19:00–20:30 Uhr (Magstadt)", "Mittwoch, 19:30–20:30 Uhr (Renningen)"],
  },
  {
    name: "B-Jugend männlich",
    scheduleLines: ["Montag, 17:15–19:00 Uhr (ReRuMa rollierend)", "Mittwoch, 17:00–18:30 Uhr (ReRuMa rollierend)"],
  },
  {
    name: "A-Jugend weiblich",
    scheduleLines: ["Montag, 19:00–20:30 Uhr (Magstadt)", "Mittwoch, 19:30–20:30 Uhr (Renningen)"],
  },
  {
    name: "A-Jugend männlich",
    scheduleLines: [
      "Montag, 19:15–20:30 Uhr (Renningen)",
      "Mittwoch, 19:30–22:00 Uhr (Magstadt)",
      "Mittwoch, 18:30–20:00 Uhr (Magstadt)",
    ],
  },
  {
    name: "Damen 2",
    scheduleLines: ["Mittwoch, 19:30–21:00 Uhr", "Freitag, 18:30–20:15 Uhr"],
    sporthalle: "Bühl 1",
    trainer: "Friedemann Aust",
    email: "frauen2@handball-rutesheim.de",
  },
  {
    name: "Damen 1",
    scheduleLines: ["Mittwoch, 20:15–21:45 Uhr", "Freitag, 20:15–21:45 Uhr"],
    sporthalle: "Bühl 1",
    trainer: "Christoph Hönig",
    email: "frauen1@handball-rutesheim.de",
  },
  {
    name: "Herren",
    scheduleLines: ["Donnerstag, 20:00–21:45 Uhr"],
    sporthalle: "Bühl 1",
    trainer: "Fabian Weber",
    email: "herren@handball-rutesheim.de",
  },
];

export interface Halle {
  name: string;
  subtitle: string;
  address: string;
  notes?: string[];
}

// Exported so /turnen (FacilityMap) can reuse the same address data instead of re-deriving it.
// TODO: Foto vorhanden lt. Kunde für Theodor-Heuss-Turnhalle — beim Kunden anfordern, alle übrigen Fotos TODO.
export const hallen: Halle[] = [
  {
    name: "Sporthalle Bühl 1",
    subtitle: "Spiel- und Trainingsbetrieb",
    address: "71277 Rutesheim, Robert-Bosch-Straße 51",
    notes: ["Hallennummer HVW: 6059", "Eingeschränktes Haftmittelverbot: Trimona-Haftmittel erlaubt"],
  },
  {
    name: "Sporthalle Bühl 2",
    subtitle: "Trainingsbetrieb",
    address: "71277 Rutesheim, Robert-Bosch-Straße 51",
  },
  {
    name: "Theodor-Heuss-Turnhalle",
    subtitle: "Trainingsbetrieb",
    address: "71277 Rutesheim, Robert-Bosch-Straße 23",
  },
  {
    name: "Renningen Rankbachhalle",
    subtitle: "Trainingsbetrieb",
    address: "71272 Renningen, Rankbachstraße 51",
  },
  {
    name: "Renningen Stadionsporthalle",
    subtitle: "Trainingsbetrieb",
    address: "71272 Renningen, Rankbachstraße 53",
  },
  {
    name: "Magstadt",
    subtitle: "Trainingsbetrieb",
    address: "71106 Magstadt, Alte Stuttgarter Straße 70",
  },
];

const schiedsrichter = ["Fabian Kersten", "Katharina Sattler-Riethmüller", "Sarah Weber", "Fabian Weber"];

// Hinweis: Die bisherige Live-Website nannte einen abweichenden Vorstand (Dusica Cvetkovic als
// Vorsitzende, Sophie Polster als stellv. Vorsitzende, Valentina Rebuli als Kassiererin,
// Stefanie Baum als Schriftführerin). TODO: vor Go-Live beim Kunden bestätigen, welche Besetzung
// aktuell korrekt ist — die untenstehende Mail-Version wurde hier als aktuellere Quelle übernommen.
const foerdervereinAnsprechpartner = [
  { role: "1. Vorstand", name: "Valentina Rebuli", email: "foerderverein@handball-rutesheim.de" },
  { role: "2. Vorstand", name: "Melissa Rapp", email: "foerderverein@handball-rutesheim.de" },
  { role: "Finanzen", name: "Stefanie Baum", email: "foerderverein@handball-rutesheim.de" },
];

const quickLinks = [
  { id: "neuigkeiten", label: "Neuigkeiten" },
  { id: "berichte", label: "Berichte" },
  { id: "links", label: "Links" },
  { id: "abteilungen", label: "Abteilungen" },
  { id: "staetten", label: "Spiel- & Trainingsstätten" },
  { id: "schiedsrichter", label: "Schiedsrichterteam" },
  { id: "sponsoren", label: "Sponsoren" },
  { id: "foerderverein", label: "Förderverein" },
];

const badgeClass = "inline-block px-3 py-1 bg-[#D4FF6B] text-black text-[9px] font-black uppercase tracking-widest rounded-full mb-6";
const cardClass = "bg-zinc-50 rounded-[2.5rem] p-8 md:p-14 border border-black/5";
const bodyText = "text-black/60 font-medium leading-relaxed";
const pillLinkClass = "px-5 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border border-transparent bg-zinc-50/50 text-black/40 hover:bg-zinc-100 hover:text-black/60";

const mailHref = (email: string) => `mailto:${email}`;

// Platzhalter für noch fehlende Fotos (Mannschaften, Hallen, Schiedsrichterteam) —
// TODO: sobald echtes Bildmaterial vorliegt, hier ersetzen.
const PhotoPlaceholder: React.FC<{ label?: string; className?: string }> = ({ label = "Bild folgt...", className = "" }) => (
  <div
    className={`relative w-full aspect-video rounded-2xl overflow-hidden flex items-center justify-center border border-black/5 ${className}`}
    style={{
      backgroundImage: 'repeating-linear-gradient(135deg, #eff6ff 0px, #eff6ff 14px, #dbeafe 14px, #dbeafe 28px)',
    }}
  >
    <span className="px-3 py-1.5 bg-white/80 backdrop-blur-sm rounded-full text-[10px] font-black uppercase tracking-widest text-black/40">
      {label}
    </span>
  </div>
);

const AccordionSection: React.FC<{ title: string; id?: string; children: React.ReactNode }> = ({ title, id, children }) => (
  <details id={id} className="group scroll-mt-32">
    <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
      <span className="text-lg md:text-2xl font-black tracking-tight">{title}</span>
      <span className="shrink-0 w-8 h-8 md:w-9 md:h-9 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-open:rotate-180">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </span>
    </summary>
    <div className="mt-8">{children}</div>
  </details>
);

const NewsModal: React.FC<{ item: NewsItem | null; onClose: () => void }> = ({ item, onClose }) => (
  <AnimatePresence>
    {item && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/40 backdrop-blur-md"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white rounded-[2.5rem] shadow-2xl border border-black/5"
        >
          <button
            onClick={onClose}
            className="sticky top-6 float-right mr-6 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-black/40 hover:text-black hover:bg-zinc-200 transition-all z-10"
          >
            ✕
          </button>
          <div className="p-8 md:p-12 pt-16">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight leading-tight mb-8">{item.modalTitle}</h2>
            {item.modalBody}
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

export const Handball: React.FC<HandballProps> = ({
  onBack,
  ctaPrimaryLabel = "Ansprechpartner kontaktieren",
  ctaPrimaryHref = "#ansprechpartner",
  ctaSecondaryLabel = "Förderverein unterstützen",
  ctaSecondaryHref = "#foerderverein",
}) => {
  const [activeNewsIndex, setActiveNewsIndex] = useState<number | null>(null);

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

          {/* Überschrift + Logo: die Überschrift behält ihre eigene (schrumpfbare)
              Breite, das Logo sitzt in der verbleibenden Fläche daneben und wird
              darin horizontal zentriert — dadurch rutscht es auf breiten Screens
              weit nach rechts, genau zwischen Textende und rechtem Rand. */}
          <div className="flex flex-row items-center gap-3 sm:gap-6 lg:gap-10 mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="shrink-0 max-w-[10.5rem] sm:max-w-xs md:max-w-sm lg:max-w-xl text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9]"
            >
              SKV Rutesheim <span className="text-black/20">Handball.</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15 }}
              className="flex-1 flex justify-center items-center min-w-0"
            >
              <img
                src="/Handball_Rutesheim.png"
                alt="Logo Handball Rutesheim"
                className="w-16 sm:w-24 md:w-32 lg:w-48 xl:w-56 h-auto object-contain"
              />
            </motion.div>
          </div>

          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl font-black tracking-tight text-black mb-8"
            >
              Haut's rein!
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-black/60 leading-relaxed max-w-3xl mb-12"
            >
              {MISSION_TEXT}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
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
            <a key={link.id} href={`#${link.id}`} className={pillLinkClass}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* Neuigkeiten + Berichte */}
      <section className="px-6 mb-20 md:mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div id="neuigkeiten" className={`${cardClass} scroll-mt-32`}>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">Neuigkeiten</h2>
            <ul className="space-y-4">
              {neuigkeiten.map((item, idx) => (
                <li key={idx} className="border-b border-black/5 pb-4 last:border-b-0 last:pb-0">
                  {item.modalBody ? (
                    <button
                      type="button"
                      onClick={() => setActiveNewsIndex(idx)}
                      className="w-full flex items-center justify-between gap-4 text-sm md:text-base font-bold text-black hover:text-black/50 transition-colors text-left"
                    >
                      <span>{item.title}</span>
                      <span className="shrink-0 text-black/20">→</span>
                    </button>
                  ) : (
                    // TODO: Platzhalter-Link — echte Artikelseite folgt
                    <a href="#" className="flex items-center justify-between gap-4 text-sm md:text-base font-bold text-black hover:text-black/50 transition-colors">
                      <span>{item.title}</span>
                      <span className="shrink-0 text-black/20">→</span>
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div id="berichte" className={`${cardClass} scroll-mt-32`}>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">Berichte</h2>
            <ul className="space-y-4">
              {berichte.map((title, idx) => (
                <li key={idx} className="border-b border-black/5 pb-4 last:border-b-0 last:pb-0">
                  {/* TODO: Platzhalter-Link — echter Bericht folgt */}
                  <a href="#" className="flex items-center justify-between gap-4 text-sm md:text-base font-bold text-black hover:text-black/50 transition-colors">
                    <span>{title}</span>
                    <span className="shrink-0 text-black/20">→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Abteilungen */}
      <section id="abteilungen" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Abteilungen</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Die Handballabteilung</h2>
          <p className={`${bodyText} text-lg mb-10 max-w-3xl`}>{MISSION_TEXT}</p>

          <span id="links" className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-3 block scroll-mt-32">Links</span>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-14">
            <a
              href="https://www.skv-rutesheim.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-black/10 rounded-xl font-bold text-xs hover:bg-zinc-100 transition-colors"
            >
              Hauptverein: skv-rutesheim.de <span>↗</span>
            </a>
            <a
              href="https://www.ht-heckengaeu.de"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-black/10 rounded-xl font-bold text-xs hover:bg-zinc-100 transition-colors"
            >
              Spielgemeinschaft: ht-heckengaeu.de <span>↗</span>
            </a>
            <a
              href="https://ht-heckengaeu.teamservice24.shop/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 bg-white border border-black/10 rounded-xl font-bold text-xs hover:bg-zinc-100 transition-colors"
            >
              Shop <span>↗</span>
            </a>
          </div>

          <div className={`${cardClass} space-y-10`}>
            <AccordionSection title="Ansprechpartner der Abteilung" id="ansprechpartner">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
                {ansprechpartnerAbteilung.map((person, idx) => (
                  <div key={idx}>
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1 block">{person.role}</span>
                    <h4 className="text-xl md:text-2xl font-black mb-3 tracking-tighter">{person.name}</h4>
                    <a href={mailHref(person.email)} className="inline-flex items-center gap-2 text-sm font-black text-black hover:text-black/50 transition-colors">
                      <span className="text-lg">✉️</span> {person.email}
                    </a>
                  </div>
                ))}
              </div>
            </AccordionSection>

            <div className="pt-10 border-t border-black/5">
              <AccordionSection title="Trainingszeiten und Trainer">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trainingsgruppen.map((group, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] border border-black/5 flex flex-col gap-4">
                      <h4 className="text-sm font-black uppercase tracking-widest">{group.name}</h4>

                      {group.needsFoto && <PhotoPlaceholder />}

                      {group.note && <p className="text-black/50 text-sm font-medium leading-relaxed">{group.note}</p>}

                      {group.scheduleLines && (
                        <ul className="space-y-1.5">
                          {group.scheduleLines.map((line, lineIdx) => (
                            <li key={lineIdx} className="text-black/60 text-xs font-bold leading-relaxed">{line}</li>
                          ))}
                        </ul>
                      )}

                      {group.sporthalle && (
                        <p className="text-black/40 text-[10px] font-black uppercase tracking-widest">Sporthalle: {group.sporthalle}</p>
                      )}

                      {group.trainer && (
                        <p className="text-black/60 text-xs font-bold">Trainer: {group.trainer}</p>
                      )}

                      {group.email && (
                        <a href={mailHref(group.email)} className="inline-flex items-center gap-2 text-xs font-black text-black hover:text-black/50 transition-colors mt-auto">
                          <span>✉️</span> {group.email}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </AccordionSection>
            </div>
          </div>
        </div>
      </section>

      {/* Spiel- und Trainingsstätten */}
      <section id="staetten" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Hallen</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Spiel- und Trainingsstätten</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {hallen.map((halle, idx) => (
              <div key={idx} className="bg-white p-6 rounded-[2rem] border border-black/5 flex flex-col gap-4">
                {/* TODO: Hallenfoto ergänzen, sobald verfügbar */}
                <PhotoPlaceholder />
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1 block">{halle.subtitle}</span>
                  <h4 className="text-lg font-black tracking-tight mb-2">{halle.name}</h4>
                  <p className="text-black/60 text-sm font-bold">{halle.address}</p>
                </div>
                {halle.notes && (
                  <ul className="space-y-1 pt-4 border-t border-black/5">
                    {halle.notes.map((note, noteIdx) => (
                      <li key={noteIdx} className="text-black/40 text-xs font-medium leading-relaxed">{note}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schiedsrichterteam */}
      <section id="schiedsrichter" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Schiedsrichter</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Das Schiedsrichterteam</h2>
          <div className={cardClass}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {/* TODO: Teamfoto Schiedsrichterteam ergänzen, sobald verfügbar */}
              <PhotoPlaceholder />
              <div>
                <p className={`${bodyText} mb-6`}>Aktuell stehen folgende Kollegen zur Verfügung:</p>
                <ul className="space-y-2">
                  {schiedsrichter.map((name, idx) => (
                    <li key={idx} className="text-lg font-black tracking-tight">{name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsoren */}
      <section id="sponsoren" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Sponsoren</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Unsere Sponsoren</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {sponsoren.map((sponsor, idx) => {
              const logoImg = (
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="max-w-full max-h-full object-contain"
                />
              );
              return (
                <div
                  key={idx}
                  className="bg-white h-28 sm:h-32 p-6 rounded-[2rem] border border-black/5 flex items-center justify-center"
                >
                  {sponsor.href ? (
                    <a
                      href={sponsor.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full h-full flex items-center justify-center hover:opacity-70 transition-opacity"
                      aria-label={sponsor.name}
                    >
                      {logoImg}
                    </a>
                  ) : (
                    logoImg
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Förderverein */}
      <section id="foerderverein" className="px-6 scroll-mt-32">
        <div className="max-w-7xl mx-auto bg-black text-white rounded-[3rem] p-10 md:p-20">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8">
            <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 bg-white rounded-2xl p-3 flex items-center justify-center shadow-lg">
              <img
                src="/logo_HFR-blau.png"
                alt="Logo Handballförderverein Region Rutesheim"
                className="w-full h-full object-contain"
              />
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight">Handballförderverein Region Rutesheim e.V.</h2>
          </div>
          <p className="text-white/60 leading-relaxed font-medium mb-14 max-w-3xl">
            Der Handballförderverein Region Rutesheim e.V. unterstützt mit großem ehrenamtlichem Engagement die Handballabteilung des SKV Rutesheim. Ziel ist es, allen jungen Handballerinnen und Handballern optimale Bedingungen für ihre sportliche und persönliche Entwicklung zu bieten und den Handballsport in unserer Region nachhaltig zu stärken. Durch Mitgliedsbeiträge, Spenden und Sponsoring werden unter anderem Trainingsmaterialien, Veranstaltungen und besondere Projekte gefördert. So trägt der Förderverein maßgeblich dazu bei, die Zukunft des Handballs in Rutesheim und im HandballTeam Heckengäu aktiv mitzugestalten. Jede Unterstützung hilft dabei, unsere ehrenamtliche Arbeit im Handball erfolgreich weiterzuentwickeln.
          </p>

          <div className="mb-14 pb-14 border-b border-white/10">
            <AccordionSection title="Ansprechpartner des Fördervereins">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                {foerdervereinAnsprechpartner.map((person, idx) => (
                  <div key={idx}>
                    <span className="text-[#D4FF6B] font-black uppercase tracking-widest text-xs mb-2 block">{person.role}</span>
                    <h4 className="text-lg font-black mb-2">{person.name}</h4>
                    <a href={mailHref(person.email)} className="inline-flex items-center gap-2 text-sm font-bold text-white/70 hover:text-white transition-colors">
                      <span>✉️</span> {person.email}
                    </a>
                  </div>
                ))}
              </div>
            </AccordionSection>
          </div>

          <h3 className="text-xl md:text-2xl font-black tracking-tight mb-10">Möglichkeiten zur Unterstützung</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#D4FF6B] mb-4">Sponsoring</h4>
              <p className="text-white/60 leading-relaxed font-medium text-sm">
                Wenn Sie ein Unternehmen haben oder selbständig sind und gerne Werbung machen möchten, können Sie dies auch gerne über den Förderverein machen. Somit machen Sie nicht nur für sich Werbung, sondern unterstützen gleichzeitig unsere Jugend.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#D4FF6B] mb-4">Spende</h4>
              <p className="text-white/60 leading-relaxed font-medium text-sm">
                Sie können auch einen Einmalbetrag an den Förderverein spenden, ab einer Spende von 200,- € erhalten Sie von uns eine Spendenbescheinigung.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#D4FF6B] mb-4">Mitglied werden</h4>
              <p className="text-white/60 leading-relaxed font-medium text-sm">
                Als Privatperson schon ab 15 € im Jahr Mitglied werden.
              </p>
            </div>
          </div>

          <a
            href="/Beitrittserklaerung_HFR.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-5 bg-white text-black rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#D4FF6B] transition-colors"
          >
            Mitgliedsantrag herunterladen (PDF)
          </a>
        </div>
      </section>

      <NewsModal item={activeNewsIndex !== null ? neuigkeiten[activeNewsIndex] : null} onClose={() => setActiveNewsIndex(null)} />
    </div>
  );
};
