// Zentrale SEO-Daten: genutzt von App.tsx (Titel/Meta beim Seitenwechsel) und
// vite.config.ts (statische HTML-Datei pro Seite, sitemap.xml beim Build).

// TODO: finale Domain prüfen (mit/ohne www).
export const SITE_URL = 'https://skv-rutesheim.de';

export type Page =
  | 'home' | 'membership' | 'clubhouse' | 'leitbild'
  | 'handball' | 'turnen' | 'rad' | 'saenger' | 'sportabzeichen'
  | 'impressum' | 'datenschutz';

export interface PageSeo { path: string; title: string; description: string }

export const pageSeo: Record<Page, PageSeo> = {
  home: {
    path: '/',
    title: 'SKV Rutesheim 1945 e. V. – Sport- und Kulturvereinigung',
    description: 'Mehrspartenverein im Sportpark Bühl: Fußball, Turnen & Schwimmen, Handball, Volleyball, Rad, Tischtennis, Sänger und Sportabzeichen – Mitglied werden!',
  },
  membership: {
    path: '/mitgliedschaft',
    title: 'Mitgliedschaft – SKV Rutesheim',
    description: 'Mitglied werden bei der SKV Rutesheim: Beiträge, Online-Anmeldung, Formulare sowie Login, Registrierung und Kündigung im Mitgliederportal.',
  },
  clubhouse: {
    path: '/vereinsheim',
    title: 'Vereinsheim & Sportgaststätte Bühl – SKV Rutesheim',
    description: 'Sportgaststätte Bühl am Stadion der SKV Rutesheim: Öffnungszeiten, Kontakt und Räumlichkeiten für Feiern, Jubiläen und Tagungen.',
  },
  leitbild: {
    path: '/leitbild',
    title: 'Leitbild & Kinderschutz – SKV Rutesheim',
    description: 'Leitbild der SKV Rutesheim und Informationen zum Kinder- und Jugendschutz, Verhaltensregeln und Ansprechpersonen.',
  },
  handball: {
    path: '/handball',
    title: 'Handball – SKV Rutesheim',
    description: 'Handballabteilung der SKV Rutesheim: Mannschaften, Trainingszeiten, Termine und Kontakt – von den Minis bis zu den Aktiven.',
  },
  turnen: {
    path: '/turnen',
    title: 'Turnen & Schwimmen – SKV Rutesheim',
    description: 'Turnabteilung der SKV Rutesheim: Kinder- und Jugendsport, Wettkampfturnen, Gesundheits- und Fitnesskurse, Schwimmschule, Termine und Ergebnisse.',
  },
  rad: {
    path: '/rad',
    title: 'Rad – SKV Rutesheim',
    description: 'Radabteilung der SKV Rutesheim: gemeinsame Fahrradtouren von März bis Oktober – Abendausfahrten, Halbtages- und Tagestouren. Gäste sind willkommen.',
  },
  saenger: {
    path: '/saenger',
    title: 'Sänger – SKV Rutesheim',
    description: 'Sängerabteilung der SKV Rutesheim: Chor, Proben, Termine und Kontakt.',
  },
  sportabzeichen: {
    path: '/sportabzeichen',
    title: 'Sportabzeichen – SKV Rutesheim',
    description: 'Deutsches Sportabzeichen bei der SKV Rutesheim: Termine, Leistungsanforderungen und Ansprechpartner.',
  },
  impressum: {
    path: '/impressum',
    title: 'Impressum – SKV Rutesheim',
    description: 'Impressum der SKV Rutesheim 1945 e. V.: Anschrift, Kontakt, Vorstand und Vereinsregister.',
  },
  datenschutz: {
    path: '/datenschutz',
    title: 'Datenschutzerklärung – SKV Rutesheim',
    description: 'Datenschutzerklärung der SKV Rutesheim 1945 e. V.: Hosting, Server-Logfiles, Google Maps und Ihre Rechte nach DSGVO.',
  },
};

export const pageFromPathname = (pathname: string): Page => {
  const clean = pathname.replace(/\/+$/, '').replace(/\.html$/, '') || '/';
  const hit = (Object.keys(pageSeo) as Page[]).find((p) => pageSeo[p].path === clean);
  return hit ?? 'home';
};
