
import React from 'react';
import { motion } from 'framer-motion';

interface MembershipProps {
  onBack: () => void;
}

const fees = [
  { category: "Kinder", detail: "bis 4 Jahre", price: "35,00 €", per: "Jahr" },
  { category: "Jugend", detail: "bis 18 Jahre", price: "70,00 €", per: "Jahr" },
  { category: "Erwachsene", detail: "über 18 Jahre", price: "105,00 €", per: "Jahr" },
  { category: "Ehepaare", detail: "ohne Kinder", price: "160,00 €", per: "Jahr" },
  { category: "Familien", detail: "inkl. Kinder bis 18/27 J.", price: "190,00 €", per: "Jahr" },
  { category: "Ausbildung", detail: "Studenten bis 27 J.", price: "70,00 €", per: "Jahr" }
];

export const Membership: React.FC<MembershipProps> = ({ onBack }) => {
  return (
    <div className="pt-24 pb-32">
      {/* Editorial Header */}
      <section className="px-6 mb-20 md:mb-32">
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
              className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10"
            >
              Einfach <br />
              <span className="text-black/20">Mitglied</span> <br />
              werden.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-3xl font-medium text-black/50 leading-relaxed"
            >
              Egal, ob du ein erfahrener Sportler oder ein Neuling bist – wir freuen uns, dich in unserer Sport- und Kulturvereinigung willkommen zu heißen.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Registration Paths */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Digital Path */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-black text-white p-10 md:p-16 rounded-[3rem] shadow-2xl flex flex-col justify-between aspect-[4/5] md:aspect-auto"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-[#D4FF6B] text-black text-[9px] font-black uppercase tracking-widest rounded-full mb-8">Empfohlen</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Digital anmelden.</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-10">
                Nutze unser Online-Portal für eine schnelle und unkomplizierte Anmeldung. Sicher, papierlos und sofort aktiv.
              </p>
            </div>
            <a
              href="https://skvrutesheim.pw-ng.de/Frontend/Home/NewMember"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-5 bg-[#D4FF6B] text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-[1.02] transition-transform text-center"
            >
              Zum Online-Portal ↗
            </a>
          </motion.div>

          {/* Classic Path */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-zinc-50 border border-black/5 p-10 md:p-16 rounded-[3rem] flex flex-col justify-between aspect-[4/5] md:aspect-auto"
          >
            <div>
              <span className="inline-block px-3 py-1 bg-black text-white text-[9px] font-black uppercase tracking-widest rounded-full mb-8">Klassisch</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Per Post oder E-Mail.</h2>
              <p className="text-black/40 text-lg leading-relaxed mb-10">
                Lade dir die Formulare herunter, fülle sie aus und sende sie uns zu oder bringe sie direkt in der Geschäftsstelle vorbei.
              </p>
            </div>
            <div className="space-y-3">
              <a
                href="/Aufnahmeantrag2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white border border-black/10 text-black rounded-xl font-bold text-xs flex items-center justify-center gap-3 hover:bg-zinc-100 transition-colors"
              >
                📄 Aufnahmeantrag (PDF)
              </a>
              <a
                href="/AntragBeitragVerguenstigung.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-white border border-black/10 text-black rounded-xl font-bold text-xs flex items-center justify-center gap-3 hover:bg-zinc-100 transition-colors"
              >
                📄 Beitragsvergünstigung (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fees Table */}
      <section className="px-6 mb-32 bg-zinc-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">Beiträge & Gebühren</h2>
            <p className="text-black/40 text-lg font-medium max-w-2xl">
              Transparente Strukturen für alle Lebenslagen. Gültig ab dem 01.01.2025 auf Beschluss der Hauptversammlung.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fees.map((fee, idx) => (
              <div key={idx} className="bg-white p-8 rounded-[2rem] border border-black/5 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-2 block">{fee.detail}</span>
                  <h3 className="text-2xl font-black mb-6">{fee.category}</h3>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-black">{fee.price}</span>
                  <span className="text-black/30 font-bold text-sm">/ {fee.per}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-4xl text-black/40 text-sm leading-relaxed space-y-4 font-medium">
            <p>
              Bei Vollendung des 18. Lebensjahres wird der Vereinsbeitrag ab dem Folgejahr auf die Höhe des Beitrags für Erwachsene angehoben. Der Antrag auf Berücksichtigung im Familienbeitrag über 18 hinaus (bis 27 J.) muss bis zum 31.12. gestellt werden.
            </p>
            <p>
              Im Mitgliedsbeitrag ist die Sportversicherung des Württembergischen Landessportbundes (WLSB) enthalten. Der Beitrag wird jährlich am 01. Februar per SEPA eingezogen.
            </p>
          </div>
        </div>
      </section>

      {/* Fine Print / Guidelines */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto bg-black text-white rounded-[3rem] p-10 md:p-20">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-12">Wichtiges Kleingedrucktes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="space-y-10">
              <div className="group">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#D4FF6B] mb-4">Eintritt unter dem Jahr</h4>
                <p className="text-white/60 leading-relaxed font-medium">Bei Vereinseintritt bis zum 30. Juni ist der volle Mitgliedsbeitrag, ab 1. Juli der halbe Mitgliedsbeitrag zu entrichten.</p>
              </div>
              <div className="group">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#D4FF6B] mb-4">Kündigungsfristen</h4>
                <p className="text-white/60 leading-relaxed font-medium">Der Austritt ist nur zum Ende eines Kalenderjahres möglich. Die Kündigung muss spätestens bis zum 30. September schriftlich vorliegen.</p>
              </div>
            </div>
            <div className="space-y-10">
              <div className="group">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#D4FF6B] mb-4">Veränderungen</h4>
                <p className="text-white/60 leading-relaxed font-medium">Adressänderungen oder neue Bankverbindungen sind der Geschäftsstelle umgehend mitzuteilen.</p>
              </div>
              <div className="group">
                <h4 className="text-xs font-black uppercase tracking-widest text-[#D4FF6B] mb-4">Abteilungsbeiträge</h4>
                <p className="text-white/60 leading-relaxed font-medium">Abteilungen können zur Deckung von Mehrausgaben eigene Beiträge oder Umlagen erheben. Diese werden gesondert bekanntgegeben.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-20 pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-white/30 text-xs font-bold uppercase tracking-widest">Beschlossen am 22.03.2024</p>
            <a
              href="/BeitragsordnungAb2025.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-black rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-[#D4FF6B] transition-colors"
            >
              Ganze Beitragsordnung laden (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
