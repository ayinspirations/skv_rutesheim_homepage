import React from 'react';
import { motion } from 'framer-motion';

// Impressum und Datenschutzerklärung der SKV Rutesheim 1945 e. V.
// Hinweis: Rechtstexte bei Änderungen am Angebot (z. B. neue Einbindungen, Formulare, Tracking)
// unbedingt mit anpassen. Stand siehe STAND unten.

const STAND = 'November 2026';
const EMAIL = 'post@skv-rutesheim.de';

const LegalLayout: React.FC<{ onBack: () => void; eyebrow: string; title: string; children: React.ReactNode }> = ({ onBack, eyebrow, title, children }) => (
  <div className="pt-24 pb-32">
    <section className="px-6">
      <div className="max-w-4xl mx-auto">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={onBack}
          className="mb-12 text-[10px] font-black uppercase tracking-[0.3em] text-black/40 hover:text-black flex items-center gap-2 transition-colors"
        >
          <span>←</span> Zurück zur Startseite
        </motion.button>
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D4FF6B] bg-black px-3 py-1 rounded-full inline-block mb-6">
          {eyebrow}
        </span>
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-12">{title}</h1>
        <div className="space-y-12 text-base md:text-lg font-medium text-black/70 leading-relaxed [&_h2]:text-2xl [&_h2]:md:text-3xl [&_h2]:font-black [&_h2]:tracking-tight [&_h2]:text-black [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-black [&_h3]:text-black [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-3 [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-black [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-1 [&_ul]:mb-3">
          {children}
        </div>
      </div>
    </section>
  </div>
);

const Mail = () => <a href={`mailto:${EMAIL}`}>{EMAIL}</a>;
const Ext: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
);

export const Impressum: React.FC<{ onBack: () => void; onNavigateDatenschutz: () => void }> = ({ onBack, onNavigateDatenschutz }) => (
  <LegalLayout onBack={onBack} eyebrow="Rechtliches" title="Impressum">
    <section>
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        <strong className="text-black">SKV Rutesheim 1945 e. V.</strong><br />
        Robert-Bosch-Str. 55<br />
        71277 Rutesheim
      </p>
    </section>

    <section>
      <h2>Kontakt</h2>
      <p>
        E-Mail: <Mail /><br />
        Internet: <a href="https://skv-rutesheim.de">www.skv-rutesheim.de</a>
      </p>
    </section>

    <section>
      <h2>Vertretung</h2>
      <p>Der Verein wird gerichtlich und außergerichtlich vertreten durch den Vorstand:</p>
      <p>
        Volker Epple<br />
        Helmut Bolay
      </p>
    </section>

    <section>
      <h2>Registereintrag</h2>
      <p>
        Eintragung im Vereinsregister<br />
        Registergericht: Amtsgericht Leonberg<br />
        Registernummer: 146
      </p>
    </section>

    <section>
      <h2>Inhaltlich verantwortlich</h2>
      <p>
        SKV Rutesheim 1945 e. V., vertreten durch den Vorstand<br />
        Robert-Bosch-Str. 55, 71277 Rutesheim
      </p>
    </section>

    <section>
      <h2>Haftung für Inhalte</h2>
      <p>
        Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und
        Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir für eigene
        Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet,
        übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
        rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen
        nach den allgemeinen Gesetzen bleiben hiervon unberührt. Sobald uns eine konkrete Rechtsverletzung bekannt wird,
        entfernen wir die betreffenden Inhalte umgehend.
      </p>
    </section>

    <section>
      <h2>Haftung für Links</h2>
      <p>
        Unsere Website enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Für diese
        fremden Inhalte übernehmen wir keine Gewähr; verantwortlich ist stets der jeweilige Anbieter oder Betreiber der
        Seiten. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft;
        rechtswidrige Inhalte waren zu diesem Zeitpunkt nicht erkennbar. Werden uns Rechtsverletzungen bekannt, entfernen
        wir derartige Links umgehend.
      </p>
    </section>

    <section>
      <h2>Urheberrecht</h2>
      <p>
        Die auf dieser Website veröffentlichten Texte, Bilder, Grafiken und Dokumente unterliegen dem deutschen
        Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
        Urheberrechts bedürfen der vorherigen schriftlichen Zustimmung des Vereins bzw. der jeweiligen Rechteinhaber.
        Soweit Inhalte nicht vom Verein erstellt wurden, werden die Urheberrechte Dritter beachtet. Sollten Sie trotzdem
        auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen Hinweis an <Mail />.
      </p>
      <h3>Bildnachweise</h3>
      <ul>
        <li>Einzelne Symbolbilder (u. a. Fußball, Turnen, Tischtennis, Vereinsheim): <Ext href="https://unsplash.com">Unsplash</Ext> (Unsplash-Lizenz)</li>
        <li>Übrige Fotos und Grafiken: SKV Rutesheim 1945 e. V. bzw. die jeweiligen Abteilungen</li>
      </ul>
    </section>

    <section>
      <h2>Datenschutz</h2>
      <p>
        Informationen zur Verarbeitung personenbezogener Daten finden Sie in unserer{' '}
        <a href="/datenschutz" onClick={(e) => { e.preventDefault(); onNavigateDatenschutz(); }}>Datenschutzerklärung</a>.
      </p>
    </section>

    <section>
      <p className="text-sm text-black/40">
        Webseite umgesetzt durch <Ext href="https://www.akiistudio.de">AkiiStudio</Ext>. Stand: {STAND}
      </p>
    </section>
  </LegalLayout>
);

export const Datenschutz: React.FC<{ onBack: () => void }> = ({ onBack }) => (
  <LegalLayout onBack={onBack} eyebrow="Rechtliches" title={'Datenschutz\u00ADerklärung'}>
    <section>
      <h2>1. Verantwortlicher</h2>
      <p>Verantwortlich für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
      <p>
        <strong className="text-black">SKV Rutesheim 1945 e. V.</strong><br />
        Robert-Bosch-Str. 55<br />
        71277 Rutesheim<br />
        E-Mail: <Mail /><br />
        Vertreten durch den Vorstand: Volker Epple, Helmut Bolay
      </p>
      <p>Bei Fragen zum Datenschutz erreichen Sie uns jederzeit unter der oben genannten Adresse.</p>
    </section>

    <section>
      <h2>2. Das Wichtigste in Kürze</h2>
      <ul>
        <li>Wir setzen <strong className="text-black">keine Cookies</strong>, keine Analyse- oder Tracking-Werkzeuge und keine Werbedienste ein.</li>
        <li>Schriftarten, Skripte und Bilder werden <strong className="text-black">von unserem eigenen Webserver</strong> ausgeliefert; beim Aufruf der Seiten wird keine Verbindung zu Google Fonts oder anderen Drittanbietern aufgebaut.</li>
        <li>Eine Google-Maps-Karte wird <strong className="text-black">erst nach Ihrem Klick</strong> geladen.</li>
        <li>Beim Aufruf der Website verarbeitet unser Hosting-Anbieter technisch notwendige Zugriffsdaten (siehe Abschnitt 3).</li>
      </ul>
    </section>

    <section>
      <h2>3. Hosting und Server-Logfiles</h2>
      <p>
        Diese Website wird bei <strong className="text-black">Netlify, Inc.</strong>, San Francisco, USA („Netlify“), gehostet und über
        dessen weltweites Servernetz (Content Delivery Network) ausgeliefert. Beim Aufruf unserer Seiten werden durch
        Netlify automatisch Informationen erfasst, die Ihr Browser übermittelt:
      </p>
      <ul>
        <li>IP-Adresse des anfragenden Geräts</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>aufgerufene Seite bzw. Datei und übertragene Datenmenge</li>
        <li>Referrer-URL (zuvor besuchte Seite), soweit übermittelt</li>
        <li>Browsertyp, Browserversion und Betriebssystem</li>
      </ul>
      <p>
        Diese Daten sind technisch erforderlich, um die Website auszuliefern sowie Stabilität und Sicherheit (z. B. Abwehr
        von Angriffen) zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO; unser berechtigtes Interesse liegt
        in einer sicheren und funktionsfähigen Bereitstellung der Website. Eine Zusammenführung mit anderen Datenquellen
        oder eine Auswertung zu Marketingzwecken findet nicht statt. Die Daten werden von Netlify nur für einen begrenzten
        Zeitraum gespeichert und anschließend gelöscht.
      </p>
      <p>
        Netlify verarbeitet die Daten in unserem Auftrag auf Grundlage eines Vertrags zur Auftragsverarbeitung
        (Art. 28 DSGVO). Dabei kann eine Übermittlung in die USA erfolgen. Diese stützt sich auf den
        Angemessenheitsbeschluss der EU-Kommission zum EU-US Data Privacy Framework (Art. 45 DSGVO) und ergänzend auf
        Standardvertragsklauseln der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO). Weitere Informationen:{' '}
        <Ext href="https://www.netlify.com/privacy/">Datenschutzerklärung von Netlify</Ext>.
      </p>
    </section>

    <section>
      <h2>4. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
        Sie an „https://“ und dem Schloss-Symbol in der Adresszeile Ihres Browsers.
      </p>
    </section>

    <section>
      <h2>5. Cookies und lokale Speicherung</h2>
      <p>
        Unsere Website verwendet keine Cookies und speichert keine Informationen in Ihrem Browser (z. B. Local Storage).
        Eine Einwilligung nach § 25 TDDDG ist daher für den Besuch der Website nicht erforderlich. Erst wenn Sie eine
        Google-Maps-Karte aktiv laden, kann Google eigene Cookies setzen (siehe Abschnitt 7).
      </p>
    </section>

    <section>
      <h2>6. Kontakt per E-Mail oder Telefon</h2>
      <p>
        Wenn Sie uns per E-Mail oder Telefon kontaktieren, verarbeiten wir Ihre Angaben (z. B. Name, E-Mail-Adresse,
        Telefonnummer, Inhalt der Anfrage) zur Bearbeitung Ihres Anliegens. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO,
        sofern Ihre Anfrage mit einer Mitgliedschaft, einer Kursanmeldung oder vorvertraglichen Maßnahmen zusammenhängt,
        im Übrigen Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Ihre Daten
        werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine gesetzlichen Aufbewahrungspflichten
        entgegenstehen.
      </p>
    </section>

    <section id="google-maps" className="scroll-mt-28">
      <h2>7. Google Maps</h2>
      <p>
        Auf der Seite „Vereinsheim“ können Sie eine Karte des Kartendienstes Google Maps anzeigen lassen. Anbieter ist
        die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland („Google“). Die Karte wird nicht
        automatisch geladen. Erst wenn Sie auf „Karte laden“ klicken, stellt Ihr Browser eine Verbindung zu Servern von
        Google her. Dabei werden insbesondere Ihre IP-Adresse, Datum und Uhrzeit sowie Informationen zu Ihrem Browser an
        Google übermittelt; Google kann zudem Cookies setzen. Über die Kartengrafik auf der Startseite und den Button „In Google Maps
        öffnen“ gelangen Sie per Klick direkt zur Website von Google Maps; dort gelten die Datenschutzbestimmungen von
        Google.
      </p>
      <p>
        Rechtsgrundlage ist Ihre Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG), die Sie durch den Klick
        erteilen. Die Einwilligung gilt nur für den jeweiligen Seitenaufruf und kann jederzeit mit Wirkung für die
        Zukunft widerrufen werden, indem Sie die Seite neu laden. Eine Übermittlung in die USA an die Google LLC ist
        möglich; Google ist nach dem EU-US Data Privacy Framework zertifiziert. Weitere Informationen:{' '}
        <Ext href="https://policies.google.com/privacy?hl=de">Datenschutzerklärung von Google</Ext>.
      </p>
    </section>

    <section>
      <h2>8. Links zu anderen Websites und Portalen</h2>
      <p>
        Unsere Website enthält Links zu Angeboten anderer Anbieter, z. B. zum Online-Mitgliederportal (Mitgliedsantrag,
        Login, Registrierung, Kündigung), zu Online-Anmeldeformularen, zu Verbänden, Abteilungs- und Partnerseiten
        sowie zu Downloads. Beim bloßen Aufruf unserer Seiten werden an diese Anbieter keine Daten übertragen. Erst
        wenn Sie einem Link folgen, verlassen Sie unsere Website; es gelten dann die Datenschutzhinweise des jeweiligen
        Anbieters, die Sie dort einsehen können. Für Daten, die Sie im Mitgliederportal oder in Anmeldeformularen des
        Vereins angeben (z. B. Mitgliedsantrag, Kursanmeldung), gelten ergänzend die Datenschutzhinweise, die Ihnen dort
        bzw. mit dem jeweiligen Formular zur Verfügung gestellt werden.
      </p>
    </section>

    <section>
      <h2>9. Ihre Rechte</h2>
      <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Recht auf Widerruf erteilter Einwilligungen mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
      </ul>
      <h3>Widerspruchsrecht (Art. 21 DSGVO)</h3>
      <p>
        Soweit wir Daten auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO verarbeiten, können Sie aus Gründen, die sich aus
        Ihrer besonderen Situation ergeben, jederzeit Widerspruch gegen die Verarbeitung einlegen. Wir verarbeiten die
        Daten dann nicht mehr, es sei denn, wir können zwingende schutzwürdige Gründe nachweisen, die Ihre Interessen
        überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
      </p>
      <p>Zur Ausübung Ihrer Rechte genügt eine formlose Nachricht an <Mail />.</p>
      <h3>Beschwerderecht bei einer Aufsichtsbehörde</h3>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren (Art. 77 DSGVO). Für uns zuständig
        ist: Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg,
        Lautenschlagerstraße 20, 70173 Stuttgart,{' '}
        <Ext href="https://www.baden-wuerttemberg.datenschutz.de">www.baden-wuerttemberg.datenschutz.de</Ext>.
      </p>
    </section>

    <section>
      <h2>10. Keine automatisierte Entscheidungsfindung</h2>
      <p>
        Eine automatisierte Entscheidungsfindung einschließlich Profiling (Art. 22 DSGVO) findet nicht statt. Sie sind
        nicht verpflichtet, uns personenbezogene Daten bereitzustellen; ohne die oben genannten technischen Zugriffsdaten
        kann die Website jedoch nicht angezeigt werden.
      </p>
    </section>

    <section>
      <h2>11. Geltungsbereich und Aktualität</h2>
      <p>
        Diese Datenschutzerklärung gilt für die Website skv-rutesheim.de einschließlich der Unterseiten der Abteilungen
        (z. B. /volleyball). Wir passen sie an, wenn sich unser Angebot oder die Rechtslage ändert. Stand: {STAND}.
      </p>
    </section>
  </LegalLayout>
);
