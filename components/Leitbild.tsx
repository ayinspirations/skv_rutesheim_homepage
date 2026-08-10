
import React from 'react';
import { motion } from 'framer-motion';

interface LeitbildProps {
  onBack: () => void;
}

const jumpLinks = [
  { id: 'vorbeugung', label: 'Vorbeugung' },
  { id: 'aufklaerung', label: 'Aufklärung' },
  { id: 'anzeichen', label: 'Anzeichen' },
  { id: 'recht', label: 'Recht' },
  { id: 'taeterprofile', label: 'Täterprofile' },
  { id: 'verantwortliche', label: 'Verantwortliche' },
  { id: 'ansprechpartner', label: 'Ansprechpartner' },
  { id: 'seminare', label: 'Seminare' },
  { id: 'schutzbefohlene', label: 'Schutzbefohlene' },
  { id: 'partizipation', label: 'Partizipation' },
  { id: 'beschwerde', label: 'Beschwerde' },
  { id: 'vorgehen', label: 'Vorgehen' },
];

const missbrauchIst = [
  "Wenn eine erwachsene Person ein Mädchen oder einen Jungen gegen ihren oder seinen Willen berührt.",
  "Wenn eine erwachsene Person ein Mädchen oder einen Jungen so berührt, dass es ihm unangenehm ist.",
  "Wenn die Person Geschlechtsteile eines Mädchen oder Jungen anfasst oder sie bittet, sie anzufassen.",
  "Wenn die Person sich vor einem/r Kind oder Jugendlichen selbst befriedigt.",
  "Wenn die Person Fotos oder Videos macht, auf denen die Kinder oder Jugendlichen nackt zu sehen sind.",
  "Wenn die Person diese Fotos und Videos anderen weitergibt oder verkauft.",
  "Wenn die Person Kinder oder Jugendliche bedrängt, mit ihm Sex-Fotos oder -Videos anzuschauen.",
  "Wenn die Person ein Kind oder einen Jugendlichen zwingen will, mit ihm Sex zu haben.",
];

const moeglichesVerhalten = [
  "versuchen im Anschluss alles richtig zu machen und nicht aufzufallen.",
  "ziehen sich zurück und brechen Kontakte zu Freunden ab.",
  "werden krank. Sie leiden zum Beispiel an Kopf- und Bauchschmerzen, schlafen schlecht oder entwickeln Hautkrankheiten.",
  "fügen sich selbst Schmerzen zu und verletzen sich.",
  "essen zu wenig oder zu viel.",
  "nehmen Drogen, trinken Alkohol oder entwickeln andere Süchte, um das Erlebte zu verdrängen.",
  "verhalten sich nicht mehr altersgerecht.",
  "überschreiten Grenzen und halten sich nicht an Regeln.",
  "wirken ängstlich oder verhalten sich aggressiv.",
];

const taeterQuellen = [
  'Groth, A.N., Hobson, W.F. & Gary, T.S. (1982). "The Child Molester: Clinical Observations", Journal of Social Work & Human Sexuality',
  'Schorsch, E. (1985): "Perversion als Straft. Dynamik und Psychotherapie", Stuttgart 1985',
  'Zonana, G. Abel (1999): "Dangerous sex offenders. A task force report of the American Psychiatric Association", Washington, DC: American Psychiatric Association',
  'Ahlers Ch. J., Schaefer G. A., Beier K. M. (2005): "Das Spektrum der Sexualstörungen und ihre Klassifizierbarkeit im ICD-10 und DSM-IV", Sexuologie 12 (3/4)',
  'Beier K. M.: "Dissexualität im Lebenslängsschnitt", Theoretische und empirische Untersuchungen zur Phänomenologie und Prognose begutachteter Sexualstraftäter. Berlin 1995.',
  'Deegener G. (2005) "Kindesmissbrauch. Erkennen, helfen, vorbeugen" 4. Auflage, Weinheim u. Basel 2009',
  'Rossilhol, J.-B. (2002) "Sexuelle Gewalt gegen Jungen, Dunkelfelder", Marburg 2002',
];

const kjBeauftragteAufgaben = [
  "Die Kinder- und Jugendschutz-Beauftragten sind vertrauensvolle Ansprechpartner für Betroffene und diejenigen, die etwas beobachten. Sie nehmen Missbrauchshinweise entgegen und leiten im Falle eines Verdachtes entsprechende Schritte ein.",
  "Die Kinder- und Jugendschutz-Beauftragten halten Kontakt zu Fachkräften der regionalen Sportbünde sowie anderen Stellen, die sich mit der Verhinderung von Missbrauch befassen.",
  "Die Kinder- und Jugendschutz-Beauftragten koordinieren in Zusammenarbeit mit dem Vorstand und der Geschäftsstelle Missbrauch vermeidende Maßnahmen im Verein wie z.B. Organisation von Workshops, Infoveranstaltungen für Jugendleiter, Eltern, Jugendtrainer- und Betreuer.",
  "Die Kinder- und Jugendschutz-Beauftragten sorgen für eine angemessene Öffentlichkeitsarbeit hinsichtlich des Konzepts SKV gegen Missbrauch.",
  "Die Kinder- und Jugendschutz-Beauftragten stellen unterstützt durch die Vertrauensleute der Abteilungen sicher, dass alle Betreuer/-innen, Übungsleiter/-innen und Trainer/-innen von Jugendlichen und Kindern den Ehrenkodex unterschrieben haben. Der original unterschriebene Ehrenkodex wird bei den Kinder- und Jugendschutz-Beauftragten oder in der Geschäftsstelle abgelegt.",
  "Die Kinder- und Jugendschutz-Beauftragten stellen sicher, dass alle Betreuer/-innen, Übungsleiter/-innen und Trainer/-innen von Jugendlichen und Kindern ein erweitertes Führungszeugnis ohne Eintrag vorgelegt haben. Die Kinder- und Jugendschutz-Beauftragten erstellen zu jedem vorgelegten Dokument ein Archivierungsprotokoll (das Dokument selbst wird nicht bei uns abgelegt). Der Nachweis muss alle fünf Jahre wiederholt werden.",
];

const vertrauensleuteAufgaben = [
  "Hören und sehen",
  "Aufmerksam sein",
  "Ansprechpartner/-in für Kinder, Jugendliche und Erwachsene sein",
  "zu Themen der sexualisierten Gewalt aufklären",
  "im Bedarfsfall die Arbeit der Kinder- und Jugend-Schutzbeauftragten unterstützen",
  "Beschwerden annehmen",
];

const kjBeauftragte = [
  { name: "Marnie Bauer", phone: "0176 39967908" },
  { name: "Silke Wirkner", phone: "0176 43972330" },
];

const vertrauensleute = [
  { department: "Tischtennis", people: [{ name: "Tobias Sauter" }, { name: "Linda Rockenbauch" }] },
  { department: "Turnen", people: [{ name: "Sven Heller", phone: "01511 5721516" }, { name: "Meike Weiß", phone: "0178 2396457" }] },
  { department: "Handball", people: [{ name: "Fabian Baumhauer", phone: "0173 4720520" }, { name: "Sarah Weber", phone: "01629 102638" }] },
  { department: "Volleyball", people: [{ name: "Sigrid Auracher", phone: "01575 7116777" }, { name: "Sara Azizi", phone: "0176 45724395" }, { name: "Marie Lou Bauer", phone: "015170002836" }] },
  { department: "Fußball", people: [{ name: "Susanne Kähler", phone: "01514 2465649" }, { name: "Peyman Kardjan", phone: "0176 47381475" }, { name: "Antonio Butto", phone: "0172 2608682" }] },
  { department: "Sportabzeichen", people: [{ name: "Robert Czarnetzki", phone: "0173 3168488" }, { name: "Leonore Stautmeister", phone: "0170 2419213" }] },
];

const wsjModule = [
  "Modul 1: Informationen zum Bundeskinderschutzgesetz",
  "Modul 2: Sensibilisierung",
  "Modul 3: Informationen zur Erstellung einen Präventions- und Schutzkonzeptes",
  "Modul 4: Qualifizierung für (Kinder-) Schutzbeauftragte [zentral im SpOrt Stuttgart]",
  "Fachtag PSG: Modul 2 (Vormittag) und Modul 3 (Nachmittag)",
];

const wsjVoraussetzungen = [
  "mindestens 15 angemeldete Teilnehmer",
  "Rückmeldung des Anmeldestandes an die WSJ bis spätestens eine Woche vor dem Veranstaltungstag",
  "Organisation der Räumlichkeiten",
  "eventuell Bereitstellung Catering/Verpflegung",
  "Teilnehmermanagement: Veranstaltungsausschreibung, Versand der Einladungen, Führen einer Teilnehmerliste etc.",
  "wenn möglich: Bereitstellung der technischen Geräte (Laptop, Beamer inkl. Projektionsfläche)",
  "ggf. Bereitstellung von Metaplanwänden (Pinnwänden) und einer Flipchart",
];

const wsjKosten = [
  "Referentenkosten je nach Dauer (30 € je 45 min.)",
  "Fahrtkosten des Referenten je nach Entfernung (0,30 € pro Kilometer)",
];

const wsjLeistungen = ["Fachvortrag", "Unterlagen / Broschüren / Präsentation"];

const partizipationFragen = [
  "Was gilt es dabei zu beachten?",
  "Wie werden die Sätze richtig formuliert?",
  "Welche Informationen sollten Kinder wissen und welche Rolle spielt dabei das Alter des Kindes?",
];

const vorgehenSchritte = [
  "Die beobachtende oder von einem/r Betroffenen/r angesprochene oder die betroffene Person informiert in jedem Fall die Kinder- und Jugendschutz-Beauftragten und ggf. die Vertrauensleute der betroffenen Abteilung. Dieser Kreis übernimmt das weitere Vorgehen und informiert den Vorstand über den Verdachtsfall.",
  "__CONTACTS__",
  "Gemeinsam mit den Fachexperten werden die Vorwürfe analysiert, um das Gefährdungspotenzial abschätzen zu können und gezielte Schritte einzuleiten.",
  "Der Schutz des Kindes oder Jugendlichen steht im Mittelpunkt. Bestätigt sich ein Verdacht, muss das Opfer sofort vor weiteren Übergriffen geschützt werden, indem der Täter bzw. die Täterin suspendiert wird.",
  "Im Fall der Suspendierung müssen mit dem Täter/der Täterin Zusammenarbeitende informiert werden, damit der Ausschluss nicht unterlaufen werden kann. Informationen an unbeteiligte Dritte werden nicht weitergegeben.",
  "In Abstimmung mit den Fachexperten ist durch Kinder- und Jugendschutz-Beauftragte oder Vertrauensleute oder auch eine dem Opfer vertraute Person der Kontakt zum Opfer zu suchen. Wichtig: Zuhören und Vertrauen entgegenbringen. In keinem Fall darf ein Kind bedrängt werden.",
  "Alle Beobachtungen, Gespräche und Wahrnehmungen müssen schriftlich mit Datum und so detailliert wie möglich dokumentiert werden.",
  "Zur Dokumentation sind Handy-Aufnahmen in Ton und Bild erlaubt. Kinderschutz geht hier vor Datenschutz. Weisen das Kind bzw. der Jugendliche Verletzungen auf, dürfen die verletzten Körperstellen per Bild festgehalten werden.",
  "Mit den Fachexperten ist abzuwägen, ob und zu welchem Zeitpunkt die Erziehungsberechtigten des Opfers einbezogen werden, sofern nicht ein innerfamiliärer Verdacht besteht.",
  "Inwieweit das Opfer durch die bei der SKV Zuständigen bei der Verarbeitung der Ereignisse unterstützt werden kann, ist ebenfalls mit den Fachexperten abzustimmen.",
  "Sollte sich der Verdacht nicht bestätigen, ist wichtig, der zu Unrecht beschuldigten Person Maßnahmen zur Rehabilitation (Richtigstellung in Gremien und Gesprächsrunden, gegenüber Eltern) anzubieten.",
  "Bewusst und gezielt falsche Verdächtigungen werden mit Vereinsausschluss des/r Denunzianten/-in sanktioniert.",
];

const badgeClass = "inline-block px-3 py-1 bg-[#D4FF6B] text-black text-[9px] font-black uppercase tracking-widest rounded-full mb-6";
const cardClass = "bg-zinc-50 rounded-[2.5rem] p-8 md:p-14 border border-black/5";
const bodyText = "text-black/60 font-medium leading-relaxed";

const BulletList: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, idx) => (
      <li key={idx} className={`flex gap-3 ${bodyText}`}>
        <span className="text-black/20 font-black shrink-0">–</span>
        <span>{item}</span>
      </li>
    ))}
  </ul>
);

const telHref = (phone: string) => `tel:${phone.replace(/\s+/g, '')}`;

export const Leitbild: React.FC<LeitbildProps> = ({ onBack }) => {
  return (
    <div className="pt-24 pb-32">
      {/* Hero */}
      <section className="px-6 mb-12 md:mb-16">
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
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
            >
              <span className="text-black/20">Vertrauen.</span> <br />
              Gemeinschaft.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-2xl md:text-4xl font-bold tracking-tight leading-tight text-black mb-8"
            >
              Leitbild Kinder- und Jugendschutz der SKV Rutesheim 1945 e.V.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl font-medium text-black/60 leading-relaxed mb-12"
            >
              Kinder und Jugendliche für den Sport in einer gelebten Gemeinschaft zu gewinnen und zu begeistern ist ein besonderes Anliegen der SKV Rutesheim.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-l-2 border-[#D4FF6B] pl-8">
              <p className="text-lg font-medium text-black/80 leading-relaxed">
                Alle Mitglieder der SKV sind verpflichtet, unsere Kinder und Jugendlichen vor <span className="text-black font-black">Missbrauch und Gewalt</span> in psychischer, physischer und sexueller Form zu schützen. <span className="bg-[#D4FF6B] px-1">Kein Kind wird allein gelassen.</span>
              </p>
              <p className="text-lg font-medium text-black/40 leading-relaxed">
                Betreuer, Übungsleiter und Trainer sind sich ihrer wichtigen Rolle bewusst. Der richtige Umgang mit Nähe und Distanz ist ein zentraler Aspekt auf Basis des Konzepts <span className="text-black font-bold">"SKV gegen Missbrauch"</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky jump nav */}
      <div className="sticky top-12 md:top-14 z-30 bg-white/90 backdrop-blur-xl border-y border-black/5 mb-20 md:mb-32">
        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-row gap-2 overflow-x-auto scrollbar-hide">
          {jumpLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="px-5 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap border border-transparent bg-zinc-50/50 text-black/40 hover:bg-zinc-100 hover:text-black/60"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Section 1 — Vorbeugung */}
      <section id="vorbeugung" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Vorbeugung</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Missbrauch vorbeugen</h2>
          <div className={cardClass}>
            <div className="space-y-10">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">Verhalten Erwachsener</h3>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-sm font-bold text-black hover:text-black/60 transition-colors"
                >
                  <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs shrink-0">↓</span>
                  Download Ehrenkodex der Württembergischen Sportjugend (WSJ)
                </a>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-black/30 mb-2">Verhaltensregeln zum Kindeswohl</h3>
              </div>
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-black/30 mb-2">Aufklärung und Information</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Aufklärung */}
      <section id="aufklaerung" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Aufklärung</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Was ist Missbrauch?</h2>
          <p className={`${bodyText} text-lg mb-10 max-w-3xl`}>
            Missbrauch oder Sexuelle Gewalt oder sexueller Missbrauch, ist ein Thema, über das nur selten gesprochen wird. Doch es ist wichtig, darüber Bescheid zu wissen und zu wissen, was man dagegen tun kann. Kinder und Jugendliche sind niemals schuld, wenn sie sexuell missbraucht werden. Betroffene Kinder und Jugendliche denken aber genau das und schämen sich – und die Erwachsenen, die die Kinder missbraucht haben, bestärken die Kinder darin, weil die Betroffenen dann nicht darüber reden.
          </p>
          <div className={cardClass}>
            <h3 className="text-xs font-black uppercase tracking-widest text-black/30 mb-8">DAS ist MISSBRAUCH:</h3>
            <BulletList items={missbrauchIst} />
          </div>
        </div>
      </section>

      {/* Section 3 — Anzeichen */}
      <section id="anzeichen" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Anzeichen</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Mögliches Verhalten</h2>
          <p className={`${bodyText} text-lg mb-10 max-w-3xl`}>
            Kinder und Jugendliche, die sexuell missbraucht werden,
          </p>
          <div className={cardClass}>
            <BulletList items={moeglichesVerhalten} />
          </div>
        </div>
      </section>

      {/* Section 4 — Rechtliche Situation (DARK CARD) */}
      <section id="recht" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-7xl mx-auto bg-black text-white rounded-[3rem] p-10 md:p-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3">Rechtliche Situation</h2>
          <p className="text-white/40 text-sm md:text-base font-medium mb-12 md:mb-16">gemäß Strafgesetzbuch und Sozialgesetzbuch</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#D4FF6B] mb-4">§ 176 StGB</h4>
              <details className="group">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-black text-base md:text-lg text-white">
                  <span>§ 176 Sexueller Missbrauch von Kindern</span>
                  <span className="shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="text-white/60 leading-relaxed font-medium text-sm space-y-4 mt-5">
                  <p>(1) Mit Freiheitsstrafe nicht unter einem Jahr wird bestraft, wer</p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>sexuelle Handlungen an einer Person unter vierzehn Jahren (Kind) vornimmt oder an sich von dem Kind vornehmen lässt,</li>
                    <li>ein Kind dazu bestimmt, dass es sexuelle Handlungen an einer dritten Person vornimmt oder von einer dritten Person an sich vornehmen lässt,</li>
                    <li>ein Kind für eine Tat nach Nummer 1 oder Nummer 2 anbietet oder nachzuweisen verspricht.</li>
                  </ol>
                  <p>
                    (2) In den Fällen des Absatzes 1 Nummer 1 kann das Gericht von Strafe nach dieser Vorschrift absehen, wenn zwischen Täter und Kind die sexuelle Handlung einvernehmlich erfolgt und der Unterschied sowohl im Alter als auch im Entwicklungsstand oder Reifegrad gering ist, es sei denn, der Täter nutzt die fehlende Fähigkeit des Kindes zur sexuellen Selbstbestimmung aus.
                  </p>
                </div>
              </details>
            </div>

            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#D4FF6B] mb-4">§ 8a SGB VIII</h4>
              <details className="group">
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-black text-base md:text-lg text-white">
                  <span>§ 8a Schutzauftrag bei Kindeswohlgefährdung</span>
                  <span className="shrink-0 w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-sm transition-transform group-open:rotate-45">+</span>
                </summary>
                <div className="text-white/60 leading-relaxed font-medium text-sm space-y-4 mt-5">
                  <p className="text-white/40 text-xs">
                    (Sozialgesetzbuch (SGB) – Achtes Buch (VIII) – Kinder- und Jugendhilfe – Artikel 1 des Gesetzes v. 26. Juni 1990, BGBl. I S. 1163):
                  </p>
                  <p>
                    (1) Werden dem Jugendamt gewichtige Anhaltspunkte für die Gefährdung des Wohls eines Kindes oder Jugendlichen bekannt, so hat es das Gefährdungsrisiko im Zusammenwirken mehrerer Fachkräfte einzuschätzen. Soweit der wirksame Schutz dieses Kindes oder dieses Jugendlichen nicht in Frage gestellt wird, hat das Jugendamt die Erziehungsberechtigten sowie das Kind oder den Jugendlichen in die Gefährdungseinschätzung einzubeziehen und, sofern dies nach fachlicher Einschätzung erforderlich ist,
                  </p>
                  <ol className="list-decimal pl-5 space-y-2">
                    <li>sich dabei einen unmittelbaren Eindruck von dem Kind und von seiner persönlichen Umgebung zu verschaffen sowie</li>
                    <li>Personen, die gemäß § 4 Absatz 3 des Gesetzes zur Kooperation und Information im Kinderschutz dem Jugendamt Daten übermittelt haben, in geeigneter Weise an der Gefährdungseinschätzung zu beteiligen.</li>
                  </ol>
                  <p>Hält das Jugendamt zur Abwendung der Gefährdung die Gewährung von Hilfen für geeignet und notwendig, so hat es diese den Erziehungsberechtigten anzubieten.</p>
                  <p>
                    (2) Hält das Jugendamt das Tätigwerden des Familiengerichts für erforderlich, so hat es das Gericht anzurufen; dies gilt auch, wenn die Erziehungsberechtigten nicht bereit oder in der Lage sind, bei der Abschätzung des Gefährdungsrisikos mitzuwirken. Besteht eine dringende Gefahr und kann die Entscheidung des Gerichts nicht abgewartet werden, so ist das Jugendamt verpflichtet, das Kind oder den Jugendlichen in Obhut zu nehmen.
                  </p>
                  <p>
                    (3) Soweit zur Abwendung der Gefährdung das Tätigwerden anderer Leistungsträger, der Einrichtungen der Gesundheitshilfe oder der Polizei notwendig ist, hat das Jugendamt auf die Inanspruchnahme durch die Erziehungsberechtigten hinzuwirken. Ist ein sofortiges Tätigwerden erforderlich und wirken die Personensorgeberechtigten oder die Erziehungsberechtigten nicht mit, so schaltet das Jugendamt die anderen zur Abwendung der Gefährdung zuständigen Stellen selbst ein.
                  </p>
                  <p>(4) In Vereinbarungen mit den Trägern von Einrichtungen und Diensten, die Leistungen nach diesem Buch erbringen, ist sicherzustellen, dass</p>
                  <ol className="list-decimal pl-5 space-y-2" start={3}>
                    <li>deren Fachkräfte bei Bekanntwerden gewichtiger Anhaltspunkte für die Gefährdung eines von ihnen betreuten Kindes oder Jugendlichen eine Gefährdungseinschätzung vornehmen,</li>
                    <li>bei der Gefährdungseinschätzung eine insoweit erfahrene Fachkraft beratend hinzugezogen wird sowie</li>
                    <li>die Erziehungsberechtigten sowie das Kind oder der Jugendliche in die Gefährdungseinschätzung einbezogen werden, soweit hierdurch der wirksame Schutz des Kindes oder Jugendlichen nicht in Frage gestellt wird.</li>
                  </ol>
                  <p>
                    In den Vereinbarungen sind die Kriterien für die Qualifikation der beratend hinzuzuziehenden insoweit erfahrenen Fachkraft zu regeln, die insbesondere auch den spezifischen Schutzbedürfnissen von Kindern und Jugendlichen mit Behinderungen Rechnung tragen. Daneben ist in die Vereinbarungen insbesondere die Verpflichtung aufzunehmen, dass die Fachkräfte der Träger bei den Erziehungsberechtigten auf die Inanspruchnahme von Hilfen hinwirken, wenn sie diese für erforderlich halten, und das Jugendamt informieren, falls die Gefährdung nicht anders abgewendet werden kann.
                  </p>
                  <p>
                    (5) In Vereinbarungen mit Kindertagespflegepersonen, die Leistungen nach diesem Buch erbringen, ist sicherzustellen, dass diese bei Bekanntwerden gewichtiger Anhaltspunkte für die Gefährdung eines von ihnen betreuten Kindes eine Gefährdungseinschätzung vornehmen und dabei eine insoweit erfahrene Fachkraft beratend hinzuziehen. Die Erziehungsberechtigten sowie das Kind sind in die Gefährdungseinschätzung einzubeziehen, soweit hierdurch der wirksame Schutz des Kindes nicht in Frage gestellt wird. Absatz 4 Satz 2 und 3 gilt entsprechend.
                  </p>
                  <p>
                    (6) Werden einem örtlichen Träger gewichtige Anhaltspunkte für die Gefährdung des Wohls eines Kindes oder eines Jugendlichen bekannt, so sind dem für die Gewährung von Leistungen zuständigen örtlichen Träger die Daten mitzuteilen, deren Kenntnis zur Wahrnehmung des Schutzauftrags bei Kindeswohlgefährdung nach § 8a erforderlich ist. Die Mitteilung soll im Rahmen eines Gespräches zwischen den Fachkräften der beiden örtlichen Träger erfolgen, an dem die Personensorgeberechtigten sowie das Kind oder der Jugendliche beteiligt werden sollen, soweit hierdurch der wirksame Schutz des Kindes oder des Jugendlichen nicht in Frage gestellt wird.
                  </p>
                </div>
              </details>
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-white/10">
            <p className="text-white/30 text-xs font-medium leading-relaxed">
              Quellen: Gesetzestexte a. a. O. sowie Internet-Recherche insbesondere Webseiten Bundesbeauftragte für Missbrauch, Württembergischer Landessportbund u. w.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5 — Täterprofile */}
      <section id="taeterprofile" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Täterprofile</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Wer ist Täterin und Täter?</h2>
          <p className={`${bodyText} text-lg mb-10 max-w-3xl`}>
            Die folgende Einteilung hat sich mittlerweile in Forschung und Literatur (siehe Fußnoten) etabliert.
          </p>

          <div className={`${cardClass} space-y-12`}>
            <div>
              <h3 className="text-lg font-black tracking-tight mb-3">1.) Kernpädophile</h3>
              <p className={bodyText}>
                Das sexuelle Interesse ist seit der Pubertät überwiegend oder ausschließlich auf Kinder gerichtet. Befriedigung ist nur im Umgang mit Kindern, möglichst im vorpubertären Alter, zu erreichen. Wenn der Drang nach einer sexuellen Beziehung zu Kindern dauerhaft ist und die betroffene Person selbst mindestens 16 Jahre alt ist, spricht man von einer psychischen Störung. Körperliche Gewalt oder offene Drohungen werden in den seltensten Fällen angewendet. Charakteristisch ist dagegen die subtile psychische Manipulation. Der Täter schleicht sich zumeist über längere Zeit in das Vertrauen des Kindes ein und stellt eine emotionale Abhängigkeitsbeziehung her, der das Kind sich aus eigener Kraft nicht mehr entziehen kann. Zum Anteil pädophiler Täter am sexuellen Missbrauch von Kindern: Nach übereinstimmenden Schätzungen geht man davon aus, dass sich bei maximal etwa 25% aller Täter überhaupt eine pädophile Ausrichtung diagnostizieren lässt. Kernpädophile, die einmal ein Kind missbraucht haben, unterliegen allerdings einer hohen Rückfallgefahr. Prof. Beier (Charité Berlin, siehe Fußnoten) ermittelte eine Rückfälligkeit von 80% für die ausschließlich Pädophilen.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight mb-3">2.) Regressive Täter</h3>
              <p className={bodyText}>
                Der weitaus größte Teil aller sexuellen Übergriffe an Kindern wird von regressiven Tätern begangen, auch bekannt als "heterosexuelle Ersatzobjekttäter". Dies sind Männer, die in ihrer Sexualität eigentlich auf Erwachsene ausgerichtet sind, zumeist auf Frauen. Trotzdem sind diese Männer nicht in der Lage, mit anderen Erwachsenen eine zufrieden stellende sexuelle Beziehung einzugehen. Um ihre sexuellen Bedürfnisse zu befriedigen, greifen diese Täter dann ersatzweise auf Kinder zurück, da diese wesentlich leichter zu erreichen sind; daher auch der Ausdruck "Ersatzobjekttäter". Viele innerfamiliäre Missbrauchsfälle (z. B. durch Stiefväter oder Verwandte) sind auf diesen Tätertyp zurückzuführen. Die Rückfallgefahr ist deutlich geringer als beim pädophilen Täter. Prof. Beier ermittelte für den regressiven Täter eine Rückfallquote von 10-30%.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight mb-3">3.) Antisoziale Gewalttäter</h3>
              <p className={bodyText}>
                Wie der regressive Täter ist auch der antisoziale Gewalttäter nicht primär auf Kinder fixiert. Sexualität ist für ihn nur ein Mittel, Macht und Gewalt über andere Menschen auszuüben. Der antisoziale Gewalttäter vergeht sich an Kindern, weil sie die einfachsten Opfer sind. Seine hohe Gewaltbereitschaft ohne Empathievermögen und nur ein unzureichend bis gar nicht ausgeprägtes Gewissen machen ihn so gefährlich. Statistisch spielt dieser Tätertyp eine untergeordnete Rolle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight mb-3">Frauen als Täter</h3>
              <p className={bodyText}>
                Nach Schätzungen einzelner Wissenschaftlicher sollen Frauen immerhin für 10% aller missbrauchten Mädchen verantwortlich sein. Bei den sexuell missbrauchten Jungen soll es einen Täteranteil von 25% Frauen geben. Die Täterinnen kommen praktisch immer aus dem direkten Umfeld der Kinder: Familienangehörige (z. B. Tanten, Großmütter), Erzieherinnen oder Pflegemütter. Nach Einschätzung von Beier seien diese Fälle nicht auf pädophile Neigungen, sondern auf Ersatzhandlungen zurückzuführen. Es gäbe demnach also kein weibliches Pendant zum männlichen Kernpädophilen, sondern eher zum regressiven Täter.
              </p>
            </div>

            <details className="pt-6 border-t border-black/5">
              <summary className="cursor-pointer list-none text-xs font-black uppercase tracking-widest text-black/30">
                Quellen zum vorstehenden Text, die ausschließlich gekürzt übernommen worden sind:
              </summary>
              <ul className="space-y-2 mt-6">
                {taeterQuellen.map((quelle, idx) => (
                  <li key={idx} className="text-xs text-black/40 font-medium leading-relaxed flex gap-2">
                    <span className="shrink-0">–</span>
                    <span>{quelle}</span>
                  </li>
                ))}
              </ul>
            </details>
          </div>
        </div>
      </section>

      {/* Section 6 — Verantwortliche */}
      <section id="verantwortliche" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto space-y-8">
          <div>
            <span className={badgeClass}>Verantwortliche</span>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Aufgabenbeschreibung Kinder- und Jugendschutz-Beauftragte</h2>
            <div className={cardClass}>
              <h3 className="text-xs font-black uppercase tracking-widest text-black/30 mb-8">
                Information, Sensibilisierung und Aufklärung zu Themen der sexualisierten Gewalt gegen Kinder und Jugendliche
              </h3>
              <BulletList items={kjBeauftragteAufgaben} />
            </div>
          </div>

          <div>
            <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-8">Aufgabenbeschreibung Vertrauensleute</h2>
            <div className={cardClass}>
              <h3 className="text-xs font-black uppercase tracking-widest text-black/30 mb-8">Einsatz: Jeweils in den Sportabteilungen der SKV</h3>
              <p className="text-xs font-black uppercase tracking-widest text-black/30 mb-4">Aufgaben</p>
              <BulletList items={vertrauensleuteAufgaben} />
              <p className={`${bodyText} mt-8 pt-8 border-t border-black/5`}>
                Voraussetzung: In der Abteilung aktiv und deshalb den Kindern und Jugendlichen vertraut sein – als Trainer/-in, Übungsleiter/-in, Betreuer/-in, mitarbeitende Eltern(-Teile)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7 — Ansprechpartner */}
      <section id="ansprechpartner" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Ansprechpartner</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Die SKV-Ansprechpartner/-innen</h2>

          <div className={cardClass}>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-12">Kinder- und Jugendschutz-Beauftragte</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 mb-16 pb-16 border-b border-black/5">
              {kjBeauftragte.map((person, idx) => (
                <div key={idx} className="group">
                  <h4 className="text-2xl md:text-3xl font-black mb-2 tracking-tighter">{person.name}</h4>
                  <p className="text-black/40 font-bold text-xs uppercase tracking-widest mb-6">Jugendschutz-Beauftragte</p>
                  <a href={telHref(person.phone)} className="inline-flex items-center gap-2 text-lg font-black group-hover:text-[#D4FF6B] transition-colors">
                    <span className="text-xl">📞</span> {person.phone}
                  </a>
                </div>
              ))}
            </div>

            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-8">Vertrauensleute</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {vertrauensleute.map((dep, idx) => (
                <div key={idx} className="bg-white p-6 rounded-[2rem] border border-black/5">
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-4 block">{dep.department}</span>
                  <div className="space-y-3">
                    {dep.people.map((person, pIdx) => (
                      <div key={pIdx} className="flex flex-col">
                        <span className="text-sm font-bold text-black/80">{person.name}</span>
                        {person.phone && (
                          <a href={telHref(person.phone)} className="text-xs font-bold text-black/40 hover:text-black transition-colors">
                            📞 {person.phone}
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Seminare */}
      <section id="seminare" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Seminare</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6">Seminare zu &gt; Kinder- und Jugendschutz &lt;</h2>
          <p className={`${bodyText} text-lg mb-10 max-w-3xl`}>
            Informationen zu den WSJ-Maßnahmen im Rahmen der "Prävention von sexualisierter Gewalt" (PSG)
          </p>

          <div className={`${cardClass} space-y-10`}>
            <div>
              <h3 className="text-xs font-black uppercase tracking-widest text-black/30 mb-6">Angebote der WSJ (vor Ort)</h3>
              <BulletList items={wsjModule} />
            </div>
            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-widest text-black/30 mb-6">Voraussetzungen (Aufgaben des Veranstalters vor Ort)</h3>
              <BulletList items={wsjVoraussetzungen} />
            </div>
            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-widest text-black/30 mb-6">Kosten/Finanzen</h3>
              <BulletList items={wsjKosten} />
            </div>
            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-widest text-black/30 mb-6">Leistungen der WSJ</h3>
              <BulletList items={wsjLeistungen} />
            </div>
            <div className="pt-10 border-t border-black/5">
              <p className={bodyText}>
                Verpflichtend für alle Personen, die in der SKV Kontakt zu Kindern und Jugendlichen haben, ist die so genannte Sensibilisierungsmaßnahme (Modul 2). Für lizenzierte Trainer/-innen und Übungsleiter/-innen wichtig: Die Teilnahme an dieser Maßnahme hat Lizenz erhaltenden Charakter (3 LE).
              </p>
            </div>
            <div className="pt-10 border-t border-black/5">
              <h3 className="text-xs font-black uppercase tracking-widest text-black/30 mb-6">Inhalt</h3>
              <p className={bodyText}>
                Aktiver Kinder- und Jugendschutz geht alle etwas an und sollte in allen gesellschaftlichen Lebensbereichen gewährleistet sein – auch in den Sportvereinen. Dazu gehört, Kindern ein sicheres Umfeld zu schaffen, sie vor sexualisierter Gewalt zu schützen sowie aktiv hinzusehen und zu handeln, wenn einem doch mal etwas "seltsam" vorkommt. Doch was ist sexualisierte Gewalt überhaupt? Wie tritt ein möglicher Täter auf und wie verhält er sich? Was kann ich tun, um die Mädchen und Jungen bestmöglich vor sexuellen Übergriffen zu schützen? Welche Auswirkungen hat ein sexueller Übergriff auf ein Kind? Woran kann ich diesen möglicherweise erkennen? Wie reagiere ich, wenn tatsächlich mal eines der betreuten Kinder auffällig wird? Und wie kann ich mich selbst vor Anschuldigungen schützen? U. a. diese Fragen werden in der Veranstaltung mit dem Titel „Sensibilisierung" beantwortet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9 — Schutzbefohlene */}
      <section id="schutzbefohlene" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Schutzbefohlene</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Verantwortung für Schutzbefohlene</h2>
          <div className={`${cardClass} space-y-10`}>
            <div>
              <h3 className="text-lg font-black tracking-tight mb-3">Führungszeugnis</h3>
              <p className={bodyText}>
                Voraussetzung für die Ausübung von Trainings- und Betreuungsaufgaben im Kinder- und Jugendlichen-Sport ist die Vorlage eines erweiterten Führungszeugnisses, das alle fünf Jahre zu erneuern ist. Diese Voraussetzung gilt auch für Personen, die nur vorübergehend helfen, beispielsweise bei Nichtbesetzung einer Trainer/-in-Stelle durch einen Elternteil. Nur kurze Vertretungen über bis zu vier Wochen fallen nicht darunter. Erweiterte Führungszeugnisse stellen einen Ausschnitt des Bundeszentralregisters dar, sind je nach Wohnort des/r Antragstellers/-in bei der Stadt Rutesheim bzw. bei der Gemeindeverwaltung des Wohnortes zu beantragen und aufgrund der Gemeinnützigkeit der Sport- und Kulturvereinigung 1945 Rutesheim e. V. für den/die Antragssteller/-in kostenlos.
              </p>
            </div>
            <div className="pt-10 border-t border-black/5">
              <h3 className="text-lg font-black tracking-tight mb-3">Einstellungsgespräch</h3>
              <p className={bodyText}>
                Gespräche zur Gewinnung von Übungsleitern/-innen, Trainern/-innen und Betreuer/-innen beinhalten grundsätzlich den Kinder- und Jugendschutz. Abzuklären sind zumindest folgende Fragen: Welche Haltung hat eine Bewerberin oder ein Bewerber zum Thema Schutz vor sexuellem Missbrauch? Wie offen ist er oder sie für Maßnahmen zur Missbrauchs-Prävention? Welche Erfahrungen gibt es dazu aus vorherigen Vereins-Tätigkeiten? Nach dem Einstellungsgespräch: Auch nach der Gewinnung der Person muss der Kinder- und Jugendschutz Gesprächsgegenstand bleiben. Es muss im Zusammenwirken mit den Kinder- und Jugendschutz-Beauftragten und den Vertrauensleuten Raum für kontinuierlichen Austausch, Fragen und Anregungen geben.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10 — Partizipation */}
      <section id="partizipation" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Partizipation</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Partizipation von Kindern und Jugendlichen</h2>
          <div className={`${cardClass} space-y-8`}>
            <div>
              <h3 className="text-lg font-black tracking-tight mb-3">Kinder und Jugendliche mitnehmen</h3>
              <p className={bodyText}>
                Das vierte Heft der "Nicht wegschieben!"-Reihe des Bundesministeriums für Familie, Senioren, Frauen und Jugend (BMFSFJ) und der Unabhängigen Beauftragten für Fragen des sexuellen Kindesmissbrauchs (UBSKM) beschäftigt sich mit der Frage, wie mit Kindern über sexuelle Gewalt gesprochen werden kann. Dabei werden zunächst wesentliche Bedenken aufgegriffen, um diesen richtig zu begegnen. Zudem finden Sie im Text einen kurzen Leitfaden dazu, wie Sie mit Kindern über das Thema sprechen können. Fragen dazu:
              </p>
              <ul className="space-y-3 mt-6">
                {partizipationFragen.map((frage, idx) => (
                  <li key={idx} className={`flex gap-3 ${bodyText}`}>
                    <span className="text-black/20 font-black shrink-0">–</span>
                    <span>{frage}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-8 border-t border-black/5">
              <p className={bodyText}>
                Alle Broschüren zur Kampagne "Schieb den Gedanken nicht weg!" richten sich an Erwachsene, die ein Kind in ihrer Familie oder im direkten Umfeld kennen, um es vor sexueller Gewalt und Missbrauch zu schützen sowie an Institutionen und Einrichtungen, die Informationen zu dem Thema bereitstellen und aktiv werden möchten.
              </p>
              <a href="#" className="inline-flex items-center gap-2 mt-6 text-sm font-black text-black hover:text-black/60 transition-colors">
                Wie kann ich mit Kindern über sexuelle Gewalt sprechen? <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11 — Beschwerde */}
      <section id="beschwerde" className="px-6 mb-20 md:mb-32 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <span className={badgeClass}>Beschwerde</span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-8">Beschwerdeverfahren</h2>
          <div className={cardClass}>
            <p className={bodyText}>
              Wenn das Verhalten eines/r Erwachsenen nicht den Anforderungen des Kinder- und Jugendschutzes entspricht, stehen die Kinder- und Jugendschutz-Beauftragten und die Vertrauensleute bereit, diese Beschwerden entgegen zu nehmen. Dies gilt für Kinder und Jugendliche, die in einer Weise von einem/r Erwachsenen behandelt (angesprochen und/oder angefasst) werden, die sie nicht wollen und die ihnen nicht gefällt. Und das gilt für alle, die etwas beobachten, das nicht dem Ehrenkodex und den SKV-Verhaltensregeln entspricht. Die Entgegennahme solcher Beschwerden und Hinweise gehört zu den Aufgaben der Kinder- und Jugendschutz-Beauftragten und der Vertrauensleute.
            </p>
            <a href="#ansprechpartner" className="inline-flex items-center gap-2 mt-6 text-sm font-black text-black hover:text-black/60 transition-colors">
              Die SKV Ansprechpartner/-innen <span>↓</span>
            </a>
          </div>
        </div>
      </section>

      {/* Section 12 — Umgang mit Missbrauchs- und -verdachtsfällen (DARK CARD) */}
      <section id="vorgehen" className="px-6 scroll-mt-32">
        <div className="max-w-7xl mx-auto bg-black text-white rounded-[3rem] p-10 md:p-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3">Umgang mit Missbrauchs- und -verdachtsfällen</h2>
          <p className="text-white/40 text-sm md:text-base font-medium mb-6">Was ist zu tun?</p>
          <p className="text-white/60 leading-relaxed font-medium mb-12 max-w-3xl">
            Was ist zu tun, wenn bei der SKV ein Verdacht auf Kindesmissbrauch geäußert wird bzw. jemand eine verdächtige Beobachtung macht oder sich ein Kind, ein/e Jugendliche/r aufgrund eines erlebten Ereignisses meldet? Wie zu reagieren ist, zeigen die folgenden Handlungsleitlinien. Sie weisen den Weg, um den ersten Schritt zum "Handeln" zu erleichtern und Maßnahmen zur Intervention einzuleiten.
          </p>

          <ol className="list-decimal pl-5 space-y-6 text-white/60 leading-relaxed font-medium">
            {vorgehenSchritte.map((schritt, idx) =>
              schritt === '__CONTACTS__' ? (
                <li key={idx}>
                  <p>Der Kontakt zu einer der Fachberatungsstellen ist durch die Kinder- und Jugendschutz-Beauftragten herzustellen. Diese wird beim weiteren Vorgehen unterstützen:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <span className="text-[#D4FF6B] font-black uppercase tracking-widest text-xs mb-3 block">Thamar Böblingen</span>
                      <p className="text-white/60 text-sm leading-relaxed">
                        Stuttgarter Str. 17, 71032 Böblingen<br />
                        <a href="tel:07031222066" className="hover:text-white transition-colors">Tel: 07031-222 066</a><br />
                        <a href="mailto:beratungsstelle@thamar.de" className="hover:text-white transition-colors">beratungsstelle@thamar.de</a><br />
                        <a href="https://www.thamar.de" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">www.thamar.de</a><br />
                        Onlineberatung: <a href="https://thamarhilfeclick.de" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">thamarhilfeclick.de</a>
                      </p>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                      <span className="text-[#D4FF6B] font-black uppercase tracking-widest text-xs mb-3 block">Nummer gegen Kummer</span>
                      <p className="text-white/60 text-sm leading-relaxed">
                        anonym und kostenlos<br />
                        <a href="tel:116111" className="hover:text-white transition-colors">Tel: 116111</a>, montags – samstags von 14–20 Uhr<br />
                        <a href="https://nummergegenkummer.de" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">nummergegenkummer.de</a>
                      </p>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={idx}>{schritt}</li>
              )
            )}
          </ol>

          <div className="mt-16 pt-10 border-t border-white/10">
            <p className="text-white/30 text-xs font-medium leading-relaxed">
              Die Polizei unterstützt mit umfangreichen Informationen: Webseite{' '}
              <a href="https://www.polizei-beratung.de" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors underline">
                www.polizei-beratung.de
              </a>{' '}
              | Broschüre: Missbrauch verhindern
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
