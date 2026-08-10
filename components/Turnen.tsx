
import React from 'react';
import { motion } from 'framer-motion';
import { FacilityMap } from './FacilityMap';

interface TurnenProps {
  onBack: () => void;
  onOpenContact?: () => void;
  ctaPrimaryLabel?: string;
  ctaPrimaryHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
}

const UEBER_UNS_TEXT =
  "Die Turnabteilung zählt zur mitgliedstärksten Abteilung im SKV. Wir wollen in erster Linie für Kinder und Jugendliche, für Begabte und Schwächere, eine Hilfe für ihre körperliche Entwicklung bieten. Dabei legen wir großen Wert auf Beweglichkeit und Ausdauer, aber auch die Geselligkeit und Kameradschaft ist ein wichtiger Aspekt. Immer weiter in den Vordergrund tritt dabei das gesundheitsorientierte Sportangebot.";
const HERO_SUBLINE = "Die Turnabteilung zählt zur mitgliedstärksten Abteilung im SKV.";

const badgeClass = "inline-block px-3 py-1 bg-[#D4FF6B] text-black text-[9px] font-black uppercase tracking-widest rounded-full mb-6";
const cardClass = "bg-zinc-50 rounded-[2.5rem] p-8 md:p-14 border border-black/5";
const bodyText = "text-black/60 font-medium leading-relaxed";
const pillLinkClass = "px-5 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border border-transparent bg-zinc-50/50 text-black/40 hover:bg-zinc-100 hover:text-black/60";

const mailHref = (email: string) => `mailto:${email}`;
const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, '')}`;

const AccordionSection: React.FC<{ title: string; id?: string; defaultOpen?: boolean; children: React.ReactNode }> = ({ title, id, defaultOpen, children }) => (
  <details id={id} open={defaultOpen} className="group scroll-mt-32">
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

// TODO: MailTo=N Kontaktformular-System (alte Seite) muss durch echte Ansprechpartner-Kontaktwege
// ersetzt werden. Bis dahin Platzhalter-Buttons.
const ContactFormPlaceholder: React.FC<{ name: string }> = ({ name }) => (
  <a href="#" className="inline-flex items-center gap-2 text-sm font-black text-black hover:text-black/50 transition-colors">
    <span>✉️</span> {name} — Kontaktformular
  </a>
);

const quickLinks = [
  { id: "aktuelles", label: "Aktuelles" },
  { id: "ueber-uns", label: "Über uns" },
  { id: "sportangebot", label: "Sportangebot" },
  { id: "termine", label: "Termine" },
  { id: "wettkampfergebnisse", label: "Wettkampfergebnisse" },
  { id: "formulare", label: "Formulare" },
  { id: "links", label: "Links" },
  { id: "sponsoren", label: "Sponsoren" },
];

// --- Aktuelles -------------------------------------------------------------

interface NewsItem {
  date: string;
  title: string;
  body: string;
  links?: { label: string; href: string }[];
  jumpHref?: string;
  highlighted?: boolean;
  contactEmail?: string;
}

// TODO: Platzhalter-Links ("#") — die konkreten Ergebnis-/Zielseiten wurden nicht mitgeliefert.
const news: NewsItem[] = [
  {
    date: "6.8.2026",
    title: "Kursangebote",
    body: "Der Kurs FitWaLa startet wieder am 15.09.2026. Weitere Infos und das Anmeldeformular unter: Kursangebote",
    jumpHref: "#fitnesskurse",
  },
  {
    date: "14.7.2026",
    title: "Gaukinderturnfest",
    body: "Am 12.7.2026 fand in Renningen das Gaukinderturnfest statt.",
    links: [{ label: "Ergebnisse der SKV...", href: "#" }],
  },
  {
    date: "12.7.2026",
    title: "Mehrkampfcup Landesfinale",
    body: "Am 4.7. und 5.7.2026 fand in Heidenheim das Landesfinale im Mehrkampf statt.",
    links: [{ label: "Ergebnisse der SKV...", href: "#" }],
  },
  {
    date: "30.03.2026",
    title: "Trainer/Trainerin gesucht",
    body: "Trainer/Trainerin gesucht – Fördergruppe Mädchen (ab 11 Jahre) im Wettkampfturnen. Die SKV Rutesheim sucht ab sofort eine engagierte Trainerin oder einen Trainer für die Fördergruppe Mädchen (ab 11 Jahre) im Bereich Wettkampfturnen / Geräteturnen. Unsere Trainingszeiten: Montag und Donnerstag 18:00–19:30 Uhr. Deine Aufgaben: Training der Fördergruppe im Geräteturnen, Vermittlung von Technik, Kraft, Beweglichkeit und Koordination, Vorbereitung und Begleitung bei Wettkämpfen. Das wünschen wir uns: Erfahrung im Geräteturnen (Trainerlizenz wünschenswert, aber nicht zwingend erforderlich), Freude an der Arbeit mit Kindern und Jugendlichen. Durch den Zusammenhalt und die Motivation in der Turnabteilung bieten wir Dir eine gute Grundlage und Unterstützung bei Deinem Einstieg. Neben der Kostenübernahme für Fort- und Weiterbildungen erhältst Du zudem eine Aufwandsentschädigung für Dein Ehrenamt. Falls Du Interesse hast, bei uns einzusteigen, freuen wir uns über Deine Nachricht!",
    highlighted: true,
    contactEmail: "wettkampfturnen@skv-Rutesheim.de",
  },
  {
    date: "18.5.2026",
    title: "Start in die Freiluftsaison",
    body: "Start in die Freiluftsaison 2026 der Leichtathleten.",
    links: [{ label: "Ergebnisse der Wettkämpfe zum Saisonstart...", href: "#" }],
  },
  {
    date: "21.4.2026",
    title: "Gaumeisterschaften",
    body: "Gaumeisterschaften Gerätturnen. Am Samstag, 18. April 2026 fanden die Gaumeisterschaften im Gerätturnen in Gültstein bzw. Magstadt statt.",
    links: [{ label: "Ergebnisse der SKV...", href: "#" }],
  },
  {
    date: "16.3.2026",
    title: "Bezirksmeisterschaft",
    body: "Bezirksmeisterschaft Gerätturnen. Am Samstag, 14. März 2026 wurde die Bezirksmeisterschaft im Turnen und das Hallenbezirksturnfest Gerätturnen in Rutesheim durchgeführt.",
    links: [
      { label: "Ergebnisse der SKV...", href: "#" },
      { label: "Alle Ergebnisse weiblich...", href: "#" },
      { label: "Alle Ergebnisse männlich...", href: "#" },
    ],
  },
];

// --- Organigramm -------------------------------------------------------------

const orgLeitung = [
  { name: "Sven Heller", role: "Abteilungsleitung" },
  { name: "Rolf Käßmann", role: "Kassenwart" },
  { name: "Melanie Raisch", role: "Schriftführerin" },
  { name: "Cornelia Schneider", role: "Kassier" },
  { name: "Meike Weiss", role: "Stellvertretende Abteilungsleitung" },
  { name: "Beate Ziegler", role: "Wirtschaftsleitung" },
];

const orgErwachsenensport = [
  { name: "Helmut Budil jun.", role: "gemischte Gruppe" },
  { name: "Frank Geyer", role: "Männer Spiel & Sport" },
  { name: "Matthias Götz", role: "Erwachsenen Turnen" },
  { name: "Peter Langenstein", role: "Männer Spiel & Sport" },
  { name: "Maike Wegner", role: "Konditionsgymnastik" },
  { name: "Meike Weiss", role: "Frauengymnastik" },
  { name: "Erich Wimmer", role: "Männer Spiel & Sport" },
];

const orgGesundheitssport = [
  { name: "Erika Dudziak", role: "Sport nach Krebs" },
  { name: "Cornelia Schneider", role: "Fit & Fun" },
  { name: "Sabine Weiss", role: "Fit bis ins hohe Alter" },
];

const orgNameGroups: { title: string; names: string[] }[] = [
  { title: "Kleinkinderturnen", names: ["Regine Alles", "Stephanie Bergmann", "Desiree Immel", "Thomas Kieferle", "Kathrin Meyer", "Michaela Schaust"] },
  { title: "Mädchenturnen", names: ["Sylvia Ackermann", "Stephanie Bergmann", "Sarah Bergmann", "Alina Meyer", "Michaela Schaust", "Henriette Schmidt", "Johanna Seibold", "Manu Widmaier", "Angelika Willscher"] },
  { title: "Wettkampfturnen Mädchen", names: ["Marina Essig", "Mona Nickel", "Melanie Raisch", "Henriette Schmidt", "Tanja Sieglen", "Birgit Wilden"] },
  { title: "Bubenturnen", names: ["Jelena Balzereit", "Larissa Gann", "Matthias Götz", "Sylvia Heller", "Heike Janisch", "Clara Körner", "Birgit Schaber", "Nico Warth"] },
  { title: "Wettkampfturnen Jungs", names: ["Helmut Budil jun.", "Dominic Fischer", "Stephan Wetzel"] },
  { title: "Leichtathletik", names: ["Christian Zubac"] },
  { title: "Kurse", names: ["Fabienne Gottschlich", "Sarah Mezger", "Mona Nickel", "Heidi Pfister"] },
  { title: "Schwimmschule", names: ["Helga Flad", "Fabienne Gottschlich", "Sabrina Köhle", "Jule König", "Yvonne Lube", "Julia Mezger", "Heidi Pfister", "Nikola Wyhlidal", "Regina Zorn", "Miriam"] },
];

// --- Sportangebot -------------------------------------------------------------

interface OfferingRow {
  age: string;
  time: string;
  hall?: string;
  trainer: string;
}
interface OfferingGroup {
  title: string;
  trainerLabel?: string;
  rows: OfferingRow[];
}

const OfferingTable: React.FC<{ groups: OfferingGroup[] }> = ({ groups }) => (
  <div className="space-y-8">
    {groups.map((g, i) => (
      <div key={i}>
        <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">{g.title}</h4>
        <div className="space-y-3">
          {g.rows.map((r, ri) => (
            <div key={ri} className="bg-white p-4 rounded-xl border border-black/5 grid grid-cols-1 sm:grid-cols-[1fr_2fr_1fr] gap-1 sm:gap-4 text-sm">
              <span className="font-black">{r.age}</span>
              <span className="text-black/60 font-medium">{r.time}{r.hall ? ` — ${r.hall}` : ''}</span>
              <span className="text-black/40 text-xs font-bold">{g.trainerLabel ?? 'Übungsleiter'}: {r.trainer}</span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

const kinderJugendGroups: OfferingGroup[] = [
  {
    title: "Eltern Kind Turnen",
    rows: [
      { age: "ab 2 Jahre (ohne größere Geschwister)", time: "Fr 15:00–16:00 Uhr", hall: "Theodor-Heuss-Halle", trainer: "Michaela Schaust" },
      { age: "ab 2 Jahre (mit größeren Geschwistern)", time: "Fr 16:05–17:00 Uhr", hall: "Theodor-Heuss-Halle", trainer: "Michaela Schaust" },
    ],
  },
  {
    title: "Kleinkinderturnen",
    rows: [
      { age: "3–5 Jahre", time: "Mo 14:30–15:15 Uhr", hall: "Festhalle", trainer: "Michaela Schaust, Stephanie Bergmann" },
      { age: "3–5 Jahre", time: "Mo 15:20–16:05 Uhr", hall: "Festhalle", trainer: "Michaela Schaust, Stephanie Bergmann" },
      { age: "3–5 Jahre Turnküken", time: "Di 16:15–17:00 Uhr", hall: "Festhalle", trainer: "Thomas Kieferle, Michaela Schaust" },
      { age: "3–5 Jahre Turnmäuse", time: "Di 17:05–17:50 Uhr", hall: "Festhalle", trainer: "Thomas Kieferle, Michaela Schaust" },
    ],
  },
  {
    title: "Bubenturnen",
    rows: [
      { age: "5–7 Jahre", time: "Mi 16:30–17:20 Uhr", hall: "Bühl 2", trainer: "Matthias Götz, Birgit Schaber, Jelena Balzereit" },
      { age: "5–7 Jahre", time: "Mi 17:20–18:10 Uhr", hall: "Bühl 2", trainer: "Matthias Götz, Birgit Schaber, Larissa Gann" },
      { age: "7–9 Jahre", time: "Mi 18:15–19:15 Uhr", hall: "Bühl 2", trainer: "Matthias Götz, Birgit Schaber, Larissa Gann" },
    ],
  },
  {
    title: "Mädchenturnen",
    rows: [
      { age: "Vorschule", time: "Mo 17:00–18:00 Uhr", hall: "Bühl 2", trainer: "Michaela Schaust, Stephanie Bergmann" },
      { age: "1. Klasse", time: "Mo 17:00–18:00 Uhr", hall: "Bühl 2", trainer: "Michaela Schaust, Angelika Willscher" },
      { age: "2. Klasse", time: "Mo 18:00–19:00 Uhr", hall: "Bühl 2", trainer: "Michaela Schaust, Angelika Willscher" },
      { age: "3. Klasse", time: "Mo 18:00–19:00 Uhr", hall: "Bühl 2", trainer: "Michaela Schaust, Stephanie Bergmann" },
      { age: "ab 4. Klasse", time: "Mi 17:15–18:15 Uhr", hall: "Bühl 2", trainer: "Sylvia Ackermann" },
      { age: "ab 6. Klasse", time: "Mi 18:15–19:45 Uhr", hall: "Bühl 2", trainer: "Sylvia Ackermann, Henriette Schmidt" },
    ],
  },
  {
    title: "Leichtathletik",
    rows: [
      { age: "11–14 Jahre", time: "Mo 17:00–19:00 Uhr (Festhalle) / Fr 16:00–17:15 Uhr (Stadion Bühl)", trainer: "Christian Zubac" },
    ],
  },
];

const wettkampfturnenGroups: OfferingGroup[] = [
  {
    title: "Turnen männlich",
    rows: [
      { age: "ab 8 Jahre", time: "Mi 18:30–19:45 Uhr (Bühl 2 Halle 1) / Fr 17:15–19:00 Uhr (Theodor-Heuss-Halle)", trainer: "Dominic Fischer, Stephan Wetzel" },
    ],
  },
  {
    title: "Turnen weiblich",
    rows: [
      { age: "6–10 Jahre", time: "Mo 16:30–18:00 Uhr", hall: "Bühl 2 Halle 3", trainer: "Mona Nickel" },
      { age: "8–10 Jahre", time: "Mi 17:00–18:30 Uhr", hall: "Bühl 2 Halle 3", trainer: "Birgit Wilden" },
      { age: "11–21 Jahre", time: "Mo 18:00–19:30 Uhr; Do Sommer 18:00–20:00 Uhr / Winter 17:30–19:00 Uhr", hall: "Bühl 2 Halle 3", trainer: "Melanie Raisch, Marina Essig, Tanja Sieglen" },
    ],
  },
];

const erwachsenensportGroups: OfferingGroup[] = [
  {
    title: "Bubis Sportgruppe",
    trainerLabel: "Ansprechpartner",
    rows: [{ age: "ab 14 Jahren", time: "Mi 20:00–21:45 Uhr", hall: "Bühl 2 Halle 3", trainer: "Helmut Budil jun." }],
  },
  {
    title: "Konditionsgymnastik für Frauen und Männer",
    trainerLabel: "Ansprechpartner",
    rows: [{ age: "ab 18 Jahren", time: "Do 20:00–21:00 Uhr", hall: "Festhalle", trainer: "Maike Wegner" }],
  },
  {
    title: "Fitness-Mix",
    trainerLabel: "Ansprechpartner",
    rows: [{ age: "ab 16 Jahren", time: "Mi 20:00–21:00 Uhr", hall: "Bühl 2 Halle 1", trainer: "Meike Weiss" }],
  },
];

const gesundheitssportGroups: OfferingGroup[] = [
  {
    title: "Fit und Fun — funktionelle Gymnastik für Frauen und Männer",
    trainerLabel: "Ansprechpartner",
    rows: [
      { age: "ab 55 Jahren", time: "Mo 16:30–17:30 Uhr", hall: "Theodor-Heuss-Halle", trainer: "Conny Schneider" },
      { age: "ab 55 Jahren", time: "Mo 17:30–18:30 Uhr", hall: "Theodor-Heuss-Halle", trainer: "Conny Schneider" },
    ],
  },
  {
    title: "Sport nach Krebs",
    trainerLabel: "Ansprechpartner",
    rows: [{ age: "Altersunabhängig", time: "Do 19:00–20:15 Uhr", hall: "Festhalle", trainer: "Erika Dudziak" }],
  },
  {
    title: "Sport trotz Arthrose",
    trainerLabel: "Ansprechpartner",
    rows: [{ age: "Altersunabhängig", time: "Do 17:30–18:45 Uhr", hall: "Festhalle", trainer: "Erika Dudziak" }],
  },
  {
    title: "Fit bis ins hohe Alter",
    trainerLabel: "Ansprechpartner",
    rows: [{ age: "ab 70 Jahren", time: "Di 17:00–18:00 Uhr", hall: "Theodor-Heuss-Halle", trainer: "Sabine Weiss" }],
  },
  {
    title: "Wassergymnastik",
    trainerLabel: "Ansprechpartner",
    rows: [{ age: "ab 50 Jahren", time: "Mo 19:30–20:45 Uhr", hall: "Theodor-Heuss-Schwimmbad", trainer: "Heidi Pfister" }],
  },
];

const schwimmkursTermine = [
  "24.09.2025 (kein Kurs am 01.10.2025)",
  "08.10.2025–22.10.2025 (Herbstferien)",
  "05.11.2025–17.12.2025",
  "Weihnachtsferien",
  "07.01.2026–04.02.2026",
  "Kurstermine 1/2026: 25.02.26–25.03.26",
  "Osterferien 15.04.26–22.04.26 (kein Kurs 29.04)",
  "06.05.26 (kein Kurs 13.05)",
  "20.05.26",
  "Pfingstferien 10.06.26–22.07.26",
];

// --- Termine -------------------------------------------------------------

interface Wettkampf { title: string; ort: string; datum: string; hasResult?: boolean }
interface Turnabteilungtermin { title: string; ort: string; datum: string }

const wettkaempfe2026: Wettkampf[] = [
  { title: "Bezirks-Hallenturnfest m/w", ort: "Rutesheim", datum: "14.03.2026", hasResult: true },
  { title: "Geräteturnen Gaumeisterschaft weiblich", ort: "Gültstein", datum: "18.04.2026", hasResult: true },
  { title: "Geräteturnen Gaumeisterschaft männlich", ort: "Magstadt", datum: "18.04.2026", hasResult: true },
  { title: "Mehrkampfcup", ort: "Renningen", datum: "25.04.2026", hasResult: true },
  { title: "Kindercup", ort: "Kuppingen", datum: "27.06.2026" },
  { title: "Mehrkampfcup Landesfinale", ort: "Heidenheim", datum: "4./5.07.2026", hasResult: true },
  { title: "Gaukinderturnfest", ort: "Renningen", datum: "12.07.2026", hasResult: true },
];

const turnabteilung2026: Turnabteilungtermin[] = [
  { title: "Abteilungssitzung", ort: "Vereinsheim 18:30 Uhr", datum: "24.02.2026" },
  { title: "Jahreshauptversammlung", ort: "Vereinsheim 19:00 Uhr", datum: "20.03.2026" },
  { title: "Abteilungssitzung", ort: "Vereinsheim 19:00 Uhr", datum: "12.05.2026" },
  { title: "Fleckenfest", ort: "", datum: "27./28.6.2026" },
  { title: "Abteilungssitzung", ort: "Vereinsheim 19:00 Uhr", datum: "13.10.2026" },
  { title: "Jahresabschlussfeier", ort: "Bühl 1", datum: "12.12.2026" },
];

const wettkaempfe2025: Wettkampf[] = [
  { title: "Bezirks-Hallenturnfest m/w", ort: "Rutesheim", datum: "22.03.2025" },
  { title: "Geräteturnen Gaumeisterschaft weiblich", ort: "Schafhausen", datum: "5.04.2025" },
  { title: "Geräteturnen Gaumeisterschaft männlich", ort: "Magstadt", datum: "5.04.2025" },
  { title: "Kindercup", ort: "Flacht", datum: "25.10.2025", hasResult: true },
  { title: "Mehrkampfcup", ort: "Weil im Schönbuch", datum: "24.05.2025" },
];

const turnabteilung2025: Turnabteilungtermin[] = [
  { title: "Abteilungssitzung", ort: "Vereinsheim 19:00 Uhr", datum: "4.2.2025" },
  { title: "Bürgerfest", ort: "Bühl Halle 2, 13:30 Uhr", datum: "29.03.2025" },
  { title: "Jahreshauptversammlung", ort: "Vereinsheim 19:00 Uhr", datum: "28.03.2025" },
  { title: "Fleckenfest", ort: "", datum: "28./29.6.2025" },
  { title: "Familientag", ort: "Margarete-Steiff-Str. 3", datum: "11.10.2025" },
];

const WettkampfList: React.FC<{ items: Wettkampf[] }> = ({ items }) => (
  <div className="space-y-3">
    {items.map((w, idx) => (
      <div key={idx} className="bg-white p-4 rounded-xl border border-black/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <span className="font-black text-sm">{w.title}</span>
          <span className="text-black/40 text-xs font-bold block sm:inline sm:ml-2">{w.ort} — {w.datum}</span>
        </div>
        {/* TODO: Platzhalter-Link — echte Ergebnis-Seite wurde nicht mitgeliefert. */}
        {w.hasResult && (
          <a href="#" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-black hover:text-black/50 transition-colors shrink-0">
            Ergebnis ↗
          </a>
        )}
      </div>
    ))}
  </div>
);

const TurnabteilungList: React.FC<{ items: Turnabteilungtermin[] }> = ({ items }) => (
  <div className="space-y-3">
    {items.map((t, idx) => (
      <div key={idx} className="bg-white p-4 rounded-xl border border-black/5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
        <span className="font-black text-sm">{t.title}</span>
        <span className="text-black/40 text-xs font-bold">{t.ort ? `${t.ort} — ` : ''}{t.datum}</span>
      </div>
    ))}
  </div>
);

// --- Formulare -------------------------------------------------------------

// TODO: Bis auf den Aufnahmeantrag (bereits vorhandenes Asset) liegen die übrigen PDFs noch nicht vor.
const formulare = [
  {
    group: "Allgemein",
    items: [
      { label: "Wettkampfteilnahme (Datenschutzerklärung PDF)", href: "#" },
      { label: "Aufnahmeantrag SKV", href: "/Aufnahmeantrag2026.pdf" },
    ],
  },
  {
    group: "Bestellformulare",
    items: [
      { label: "Trainingsanzug (PDF)", href: "#" },
      { label: "Turnschläppchen und Handschutz (PDF)", href: "#" },
    ],
  },
  {
    group: "Schwimmkurse",
    items: [
      { label: "Anmeldung zu den Kursen (PDF)", href: "#" },
      { label: "Elterninformation (PDF)", href: "#" },
    ],
  },
];

// --- Links -------------------------------------------------------------

// TODO: Für alle Nachbarvereine/Verbände wurden keine URLs mitgeliefert — Platzhalter "#".
const nachbarvereine = [
  "WTG Heckengäu", "VFL Herrenberg", "SpVgg Renningen", "SpVgg Holzgerlingen", "TSV Dagersheim",
  "VFL Sindelfingen", "MTV Stuttgart", "SV Böblingen", "TSV Leinfelden", "SV Bondorf",
  "TSV Weissach", "TSV Flacht", "TSV Schafhausen", "SV Leonberg/Eltingen",
];
const verbaende = ["Deutscher Turnerbund", "Schwäbischer Turnerbund", "Geräteturnen im STB", "Turngau Stuttgart", "Deutsche Turnerjugend"];

// TODO: Sponsoren-Logos noch vom Kunden anzufordern.
const sponsoren = [
  { name: "Glaserei Budil", href: "https://glaserei-budil.de" },
  { name: "ixmedia", href: "https://ixmedia.de" },
];

export const Turnen: React.FC<TurnenProps> = ({
  onBack,
  onOpenContact,
  ctaPrimaryLabel = "Zur Anmeldung",
  ctaPrimaryHref = "#sportangebot",
  ctaSecondaryLabel = "Ansprechpartner kontaktieren",
  ctaSecondaryHref = "#ueber-uns",
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
              SKV Rutesheim <span className="text-black/20">Turnen.</span>
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
            <a key={link.id} href={`#${link.id}`} className={pillLinkClass}>
              {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* Aktuelles */}
      <section id="aktuelles" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Aktuelles</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Neuigkeiten aus der Turnabteilung</h2>

          <div className="space-y-4">
            {news.map((item, idx) => (
              <details
                key={idx}
                className={`group ${item.highlighted ? "bg-black text-white rounded-[2rem] p-6 md:p-8" : `${cardClass.replace('p-8 md:p-14', 'p-6 md:p-8')}`}`}
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                  <div>
                    <span className={`text-[10px] font-black uppercase tracking-widest mb-2 block ${item.highlighted ? 'text-[#D4FF6B]' : 'text-black/30'}`}>{item.date}</span>
                    <h3 className="text-lg md:text-xl font-black tracking-tight">{item.title}</h3>
                  </div>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 group-open:rotate-180 ${item.highlighted ? 'bg-white text-black' : 'bg-black text-white'}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </span>
                </summary>

                <div className="mt-4">
                  <p className={`text-sm leading-relaxed mb-4 ${item.highlighted ? 'text-white/60' : 'text-black/60'} font-medium`}>{item.body}</p>

                  {item.jumpHref && (
                    <a href={item.jumpHref} className="text-xs font-black text-black hover:text-black/50 transition-colors">
                      Kursangebote →
                    </a>
                  )}

                  {item.links && (
                    <div className="flex flex-wrap gap-4">
                      {item.links.map((l, lIdx) => (
                        <a key={lIdx} href={l.href} target="_blank" rel="noopener noreferrer" className="text-xs font-black text-black hover:text-black/50 transition-colors">
                          {l.label} ↗
                        </a>
                      ))}
                    </div>
                  )}

                  {item.contactEmail && (
                    <a href={mailHref(item.contactEmail)} className="inline-flex items-center gap-2 text-sm font-black text-[#D4FF6B] hover:text-white transition-colors mt-2">
                      <span>✉️</span> {item.contactEmail}
                    </a>
                  )}
                </div>
              </details>
            ))}

            {/* Generic Übungsleiter/Helfer-gesucht post — no date given in source content */}
            <details className={`group ${cardClass.replace('p-8 md:p-14', 'p-6 md:p-8')}`}>
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2 block">ohne Datum</span>
                  <h3 className="text-lg md:text-xl font-black tracking-tight">Übungsleiterinnen, Fitnesstrainerinnen und Helferinnen gesucht</h3>
                </div>
                <span className="shrink-0 w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-open:rotate-180">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </span>
              </summary>

              <div className="mt-4">
                <p className="text-sm text-black/60 leading-relaxed font-medium mb-4">
                  Die Turnabteilung der SKV Rutesheim braucht dringend Unterstützung. Für folgende Bereiche suchen wir Sie als Übungsleiterin oder Kursleiter*in:
                </p>
                <ul className="space-y-1 mb-4">
                  <li className="text-sm text-black/60 font-medium">– Breitensport Erwachsene — Mittwoch 20:00–21:30 Uhr</li>
                  <li className="text-sm text-black/60 font-medium">– Yoga oder Pilates — Mittwoch 18:00–20:00 Uhr</li>
                </ul>
                <p className="text-sm text-black/60 leading-relaxed font-medium mb-4">Für folgende Bereiche suchen wir Sie als Übungsleiterinnen oder Helferinnen:</p>
                <ul className="space-y-1 mb-4">
                  <li className="text-sm text-black/60 font-medium">– Kinderturnen — Montag- und/oder Dienstagnachmittag</li>
                </ul>
                <p className="text-sm text-black/60 leading-relaxed font-medium mb-4">
                  DAS BIETEN WIR: Monetäre Aufwandsentschädigung, kostenfreie Aus- und Weiterbildungsmöglichkeit, aktives Vereinsleben. Auch Neueinsteiger sind herzlich willkommen.
                </p>
                <p className="text-sm text-black/60 leading-relaxed font-medium">
                  Bei Interesse: <a href={telHref('0151 15721516')} className="font-black text-black hover:text-black/50 transition-colors">Sven Heller: 0151-15721516</a>{' '}
                  {/* TODO: keine konkrete E-Mail-Adresse für "Mail an die Turnabteilung" mitgeliefert */}
                  oder eine Mail an die Turnabteilung.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Über uns + Organigramm */}
      <section id="ueber-uns" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Über uns</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Die Turnabteilung</h2>
          <p className={`${bodyText} text-lg mb-10 max-w-3xl`}>{UEBER_UNS_TEXT}</p>

          <div className={`${cardClass} mb-10`}>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-10">Ansprechpartner</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1 block">Abteilungsleiter</span>
                <h4 className="text-xl md:text-2xl font-black mb-3 tracking-tighter">Sven Heller</h4>
                <a href={telHref('0151 15721516')} className="inline-flex items-center gap-2 text-sm font-black hover:text-black/50 transition-colors">
                  <span>📞</span> 0151 15721516
                </a>
                {onOpenContact && (
                  <button onClick={onOpenContact} className="block mt-4 text-sm font-black text-black hover:text-black/50 transition-colors">
                    Allgemeines Kontaktformular →
                  </button>
                )}
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-1 block">SKV-Rutesheim Geschäftsstelle</span>
                <h4 className="text-lg font-black mb-3 tracking-tight">Robert-Bosch-Straße 55, 71277 Rutesheim</h4>
                <div className="flex flex-col gap-2">
                  <a href={telHref('07152 58111')} className="inline-flex items-center gap-2 text-sm font-black hover:text-black/50 transition-colors">
                    <span>📞</span> 07152 / 58111
                  </a>
                  <a href={mailHref('post@skv-Rutesheim.de')} className="inline-flex items-center gap-2 text-sm font-black hover:text-black/50 transition-colors">
                    <span>✉️</span> post@skv-Rutesheim.de
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className={cardClass}>
            <AccordionSection title="Organigramm">
              <div className="space-y-10">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">Abteilungsleitung</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {orgLeitung.map((p, idx) => (
                      <div key={idx} className="flex justify-between border-b border-black/5 pb-2">
                        <span className="text-sm font-bold">{p.name}</span>
                        <span className="text-xs font-bold text-black/40">{p.role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {orgNameGroups.map((group, idx) => (
                  <div key={idx}>
                    <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">{group.title}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-2">
                      {group.names.map((name, nIdx) => (
                        <span key={nIdx} className="text-sm font-bold text-black/70">{name}</span>
                      ))}
                    </div>
                  </div>
                ))}

                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">Erwachsenensport</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {orgErwachsenensport.map((p, idx) => (
                      <div key={idx} className="flex justify-between border-b border-black/5 pb-2">
                        <span className="text-sm font-bold">{p.name}</span>
                        <span className="text-xs font-bold text-black/40">{p.role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">Gesundheitssport</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {orgGesundheitssport.map((p, idx) => (
                      <div key={idx} className="flex justify-between border-b border-black/5 pb-2">
                        <span className="text-sm font-bold">{p.name}</span>
                        <span className="text-xs font-bold text-black/40">{p.role}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8 border-t border-black/5">
                  <h4 className="text-sm font-black tracking-tight mb-2">Übungsleiter / Helfer werden</h4>
                  <p className={`${bodyText} text-sm mb-4`}>Soll ihr Bild hier erscheinen?? Kein Problem!!</p>
                  {/* TODO: Ziel-URL für "Wir suchen noch ÜbungsleiterInnen!!" nicht abgerufen/bestätigt */}
                  <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-[#D4FF6B] text-black rounded-xl font-black text-xs uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                    Wir suchen noch ÜbungsleiterInnen!! ↗
                  </a>
                </div>
              </div>
            </AccordionSection>
          </div>
        </div>
      </section>

      {/* Sportangebot */}
      <section id="sportangebot" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Sportangebot</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Unser Sportangebot</h2>

          <div className={`${cardClass} space-y-10`}>
            <div id="kinder-jugendsport" className="scroll-mt-32">
              <AccordionSection title="Kinder-/Jugendsport" defaultOpen>
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <ContactFormPlaceholder name="Michaela Schaust" />
                  {/* TODO: "Anmeldung"-Link (Ziel-Seite) nicht mitgeliefert */}
                  <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-black/10 rounded-xl font-bold text-xs hover:bg-zinc-100 transition-colors">
                    Anmeldung ↗
                  </a>
                </div>
                <OfferingTable groups={kinderJugendGroups} />
              </AccordionSection>
            </div>

            <div id="wettkampfturnen" className="pt-10 border-t border-black/5 scroll-mt-32">
              <AccordionSection title="Wettkampfturnen">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <ContactFormPlaceholder name="Melanie Raisch" />
                </div>
                <p className={`${bodyText} text-sm mb-8`}>Wettkampfturnen zwei mal pro Woche.</p>
                <OfferingTable groups={wettkampfturnenGroups} />
              </AccordionSection>
            </div>

            <div id="erwachsenensport" className="pt-10 border-t border-black/5 scroll-mt-32">
              <AccordionSection title="Erwachsenesport">
                <div className="flex flex-wrap items-center gap-4 mb-8">
                  <ContactFormPlaceholder name="Matthias Götz" />
                </div>
                <OfferingTable groups={erwachsenensportGroups} />
              </AccordionSection>
            </div>

            <div id="gesundheitssport" className="pt-10 border-t border-black/5 scroll-mt-32">
              <AccordionSection title="Gesundheitssport">
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  <ContactFormPlaceholder name="Conny Schneider" />
                </div>
                <p className={`${bodyText} text-sm mb-8`}>Ansprechpartnerin Wassergymnastik: Fabienne Gottschlich</p>
                <OfferingTable groups={gesundheitssportGroups} />
              </AccordionSection>
            </div>

            <div id="fitnesskurse" className="pt-10 border-t border-black/5 scroll-mt-32">
              <AccordionSection title="Fitnesskurse">
                <div className="flex flex-wrap items-center gap-4 mb-6">
                  <ContactFormPlaceholder name="Matthias Götz" />
                </div>
                <p className={`${bodyText} text-sm mb-6`}>
                  Anmeldung entweder per Anmeldeformular oder online über die Kursanmeldung.
                </p>
                {/* TODO: Online-Kursanmeldung-Link und beide PDFs nicht mitgeliefert */}
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-black/10 rounded-xl font-bold text-xs hover:bg-zinc-100 transition-colors">
                    Online-Kursanmeldung ↗
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-black/10 rounded-xl font-bold text-xs hover:bg-zinc-100 transition-colors">
                    📄 Anmeldeformular FitWaLa ab September 2026 (PDF)
                  </a>
                  <a href="#" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-black/10 rounded-xl font-bold text-xs hover:bg-zinc-100 transition-colors">
                    📄 Ausschreibung FitWaLa ab September 2026 (PDF)
                  </a>
                </div>
              </AccordionSection>
            </div>

            <div id="schwimmkurse" className="pt-10 border-t border-black/5 scroll-mt-32">
              <AccordionSection title="Schwimmkurse">
                <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">Kurstermine</h4>
                <ul className="space-y-2 mb-8">
                  {schwimmkursTermine.map((termin, idx) => (
                    <li key={idx} className="text-sm text-black/60 font-medium flex gap-3">
                      <span className="text-black/20 font-black shrink-0">–</span>
                      <span>{termin}</span>
                    </li>
                  ))}
                </ul>
                <p className={`${bodyText} text-sm mb-4`}>
                  Alle Anmeldungen kommen automatisch auf die Warteliste für den nächsten freien Kurs.
                </p>
                <p className={`${bodyText} text-sm`}>
                  Der Schwimmschule des SKV Rutesheim e.V. wurde erneut am 2. Juni 2023 die Auszeichnung "SchwimmGut" überreicht. Wir haben für unsere Gruppen passende Urkunden entwickelt, die den Seesternen entsprechen.{' '}
                  {/* TODO: Ziel-URL zu SchwimmGut nicht mitgeliefert */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="font-black text-black hover:text-black/50 transition-colors">Mehr zu SchwimmGut ↗</a>
                </p>
              </AccordionSection>
            </div>
          </div>
        </div>
      </section>

      {/* Sportgelände & Hallen */}
      <section id="hallen" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-6xl mx-auto">
          <span className={badgeClass}>Sportgelände</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">Sportgelände Bühl Rutesheim</h2>
          <p className={`${bodyText} mb-10 max-w-3xl`}>
            Robert-Bosch-Straße 55 / Robert-Bosch-Straße 23 (Theodor-Heuss-Halle), 71277 Rutesheim. Auf den Punkt tippen oder hovern, um mehr über die jeweilige Sportstätte zu erfahren.
          </p>
          <FacilityMap />
        </div>
      </section>

      {/* Termine */}
      <section id="termine" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Termine</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Termine</h2>

          <div className={`${cardClass} mb-6`}>
            <AccordionSection title="Termine 2026" defaultOpen>
              <div className="space-y-10">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">Wettkämpfe</h4>
                  <WettkampfList items={wettkaempfe2026} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">Turnabteilung</h4>
                  <TurnabteilungList items={turnabteilung2026} />
                </div>
              </div>
            </AccordionSection>
          </div>

          <div className={cardClass}>
            <AccordionSection title="Termine 2025">
              <div className="space-y-10">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">Wettkämpfe</h4>
                  <WettkampfList items={wettkaempfe2025} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">Turnabteilung</h4>
                  <TurnabteilungList items={turnabteilung2025} />
                </div>
              </div>
            </AccordionSection>
          </div>
        </div>
      </section>

      {/* Wettkampfergebnisse — nur ausgehende Links, kein Duplikat der Termine-Inhalte */}
      <section id="wettkampfergebnisse" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Wettkampfergebnisse</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Wettkampfergebnisse</h2>
          <div className={cardClass}>
            <AccordionSection title="Ergebnislinks">
              <div className="space-y-10">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">2026</h4>
                  <WettkampfList items={wettkaempfe2026.filter((w) => w.hasResult)} />
                </div>
                <div>
                  <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">2025</h4>
                  <WettkampfList items={wettkaempfe2025.filter((w) => w.hasResult)} />
                </div>
              </div>
            </AccordionSection>
          </div>
        </div>
      </section>

      {/* Formulare */}
      <section id="formulare" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Formulare</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Formulare</h2>
          <div className={`${cardClass} space-y-10`}>
            {formulare.map((group, idx) => (
              <div key={idx} className={idx > 0 ? 'pt-10 border-t border-black/5' : ''}>
                <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">{group.group}</h4>
                <div className="flex flex-col gap-2">
                  {group.items.map((item, iIdx) => (
                    <a key={iIdx} href={item.href} target={item.href.startsWith('/') ? undefined : '_blank'} rel={item.href.startsWith('/') ? undefined : 'noopener noreferrer'} className="inline-flex items-center gap-3 text-sm font-bold text-black hover:text-black/50 transition-colors">
                      <span>📄</span> {item.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Links */}
      <section id="links" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Links</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-10">Links</h2>
          <div className={`${cardClass} space-y-10`}>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">Nachbarvereine</h4>
              <div className="flex flex-wrap gap-2">
                {nachbarvereine.map((name, idx) => (
                  <a key={idx} href="#" target="_blank" rel="noopener noreferrer" className={pillLinkClass}>{name}</a>
                ))}
              </div>
            </div>
            <div className="pt-10 border-t border-black/5">
              <h4 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">Verbände & Organisationen</h4>
              <div className="flex flex-wrap gap-2">
                {verbaende.map((name, idx) => (
                  <a key={idx} href="#" target="_blank" rel="noopener noreferrer" className={pillLinkClass}>{name}</a>
                ))}
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sponsoren.map((sponsor, idx) => (
              <a
                key={idx}
                href={sponsor.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-[2rem] border border-black/5 flex items-center gap-4 hover:bg-zinc-50 transition-colors"
              >
                {/* TODO: Logo-Datei noch vom Kunden anzufordern */}
                <div className="w-16 h-16 rounded-xl bg-zinc-100 border border-black/5 flex items-center justify-center text-[9px] font-black uppercase tracking-widest text-black/30 text-center shrink-0">
                  Logo folgt
                </div>
                <span className="font-black text-sm">{sponsor.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer-Kontakt */}
      <section className="px-6">
        <div className="max-w-5xl mx-auto bg-black text-white rounded-[3rem] p-10 md:p-16 text-center">
          <span className="text-[#D4FF6B] font-black uppercase tracking-widest text-xs mb-4 block">Kontakt</span>
          <h3 className="text-2xl md:text-3xl font-black tracking-tight mb-4">SKV Rutesheim Turnabteilung</h3>
          <p className="text-white/60 font-medium mb-2">Robert-Bosch-Straße 55, 71277 Rutesheim</p>
          <a href={telHref('07152 58111')} className="text-white/60 font-medium hover:text-white transition-colors">Tel.: 07152 / 58111</a>
        </div>
      </section>
    </div>
  );
};
