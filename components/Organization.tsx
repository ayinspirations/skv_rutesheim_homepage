
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { id: 'verein', label: 'Der Verein' },
  { id: 'vorstand', label: 'Vorstand' },
  { id: 'geschaeftsstelle', label: 'Geschäftsstelle' },
  { id: 'leitbild', label: 'Leitbild' }
];

const mainBoard = [
  { role: "1. Vorsitzender", name: "Volker Epple", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400" },
  { role: "2. Vorsitzender", name: "Helmut Bolay", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400" },
  { role: "Schatzmeister", name: "Helmut Eck", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
  { role: "Geschäftsstellenleiterin", name: "Sandra Koch", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" }
];

const committee = [
  { role: "Schriftführer", names: "Meike Weiß" },
  { role: "Beisitzer", names: "Henriette Schmidt, Sven Heller" },
  { role: "Vermögensverwalter", names: "Jürgen Grauer" },
  { role: "Kassenprüfer", names: "Wolfgang Reichert, Manfred Lang" },
  { role: "Wirtschaftsführer", names: "Maik Sippel" }
];

export const Organization: React.FC = () => {
  const [activeTab, setActiveTab] = useState('verein');

  return (
    <section id="verein" className="py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-20">
        
        {/* Left: Filter Navigation */}
        <div className="lg:w-48 shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all whitespace-nowrap text-left border border-transparent ${
                activeTab === tab.id 
                  ? 'bg-[#D4FF6B] text-black shadow-sm' 
                  : 'bg-zinc-50/50 text-black/40 hover:bg-zinc-100 hover:text-black/60'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right Content Area */}
        <div className="flex-1">
          <AnimatePresence mode="wait">
            {activeTab === 'verein' && (
              <motion.div
                key="verein"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12 md:space-y-16"
              >
                <div className="max-w-5xl">
                  <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
                    Die <span className="text-black">Sport- und Kulturvereinigung</span> <span className="text-black/30">Rutesheim 1945 e.V.</span>
                  </h2>
                  <p className="text-2xl md:text-4xl font-bold tracking-tight leading-snug text-black/40">
                    ist einer der <span className="text-black">größten Mehrspartenvereine</span> im Altkreis Leonberg.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="p-8 md:p-12 bg-zinc-50 rounded-[2.5rem] border border-black/5">
                    <span className="inline-block px-3 py-1 bg-[#D4FF6B] text-black text-[9px] font-black uppercase tracking-widest rounded-full mb-6">Vielfalt</span>
                    <p className="text-lg md:text-2xl font-bold tracking-tight text-black/80 leading-relaxed">
                      Bei der SKV gibt es die Abteilungen <span className="text-black">Fußball, Turnen, Handball, Volleyball, Tischtennis, Sänger, Sportabzeichen</span> und <span className="text-black">Rad</span>.
                    </p>
                  </div>
                  <div className="p-8 md:p-12 bg-zinc-50 rounded-[2.5rem] border border-black/5">
                    <span className="inline-block px-3 py-1 bg-black text-white text-[9px] font-black uppercase tracking-widest rounded-full mb-6">Infrastruktur</span>
                    <p className="text-lg md:text-xl font-medium tracking-tight text-black/50 leading-relaxed">
                      Die SKV ist im <span className="text-black font-bold italic underline decoration-[#D4FF6B] decoration-4">Sportpark Bühl</span> beheimatet. Hier stehen im Stadion Bühl ein Rasenplatz mit Tartan-Laufbahn, Hoch- und Weitsprung, sowie Kugelstoßanlagen zur Verfügung.
                    </p>
                  </div>
                </div>

                <div className="max-w-4xl text-black/40 text-sm md:text-lg font-medium leading-relaxed">
                  Daneben gibt es noch das Rasenspielfeld Spitzwiesen, einen Kunstrasenplatz, ein Tartan-Kleinspielfeld, die Sporthallen Bühl I und II, ein Jugendrasenkleinspielfeld, ein DFB-Mini-Spielfeld auf Kunstrasen und ein Beachvolleyballfeld. Angrenzend befinden sich die Tennisplätze des TC Rutesheim.
                </div>
              </motion.div>
            )}

            {activeTab === 'leitbild' && (
              <motion.div
                key="leitbild"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl space-y-12 md:space-y-20"
              >
                <div>
                  <span className="inline-block px-4 py-1.5 bg-black text-white text-[9px] font-black uppercase tracking-widest rounded-full mb-8">Verantwortung</span>
                  <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-10">
                    Schutz. <br />
                    <span className="text-black/20">Vertrauen.</span> <br />
                    Gemeinschaft.
                  </h2>
                  <p className="text-2xl md:text-4xl font-bold tracking-tight leading-tight text-black max-w-2xl">
                    Leitbild Kinder- und Jugendschutz der SKV Rutesheim 1945 e.V.
                  </p>
                </div>

                <div className="space-y-10">
                  <p className="text-xl md:text-2xl font-medium text-black/60 leading-relaxed">
                    Kinder und Jugendliche für den Sport in einer gelebten Gemeinschaft zu gewinnen und zu begeistern ist ein besonderes Anliegen der SKV Rutesheim.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-l-2 border-[#D4FF6B] pl-8">
                    <p className="text-lg font-medium text-black/80 leading-relaxed">
                      Alle Mitglieder der SKV sind verpflichtet, unsere Kinder und Jugendlichen vor <span className="text-black font-black">Missbrauch und Gewalt</span> in psychischer, physischer und sexueller Form zu schützen. <span className="bg-[#D4FF6B] px-1">Kein Kind wird allein gelassen.</span>
                    </p>
                    <p className="text-lg font-medium text-black/40 leading-relaxed">
                      Betreuer, Übungsleiter und Trainer sind sich ihrer wichtigen Rolle bewusst. Der richtige Umgang mit Nähe und Distanz ist ein zentraler Aspekt auf Basis des Konzepts <span className="text-black font-bold">"SKV gegen Missbrauch"</span>.
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-50 rounded-[3rem] p-8 md:p-14 border border-black/5">
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-12">Ihre Ansprechpartnerinnen</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div className="group">
                      <h4 className="text-2xl md:text-3xl font-black mb-2 tracking-tighter">Marnie Bauer</h4>
                      <p className="text-black/40 font-bold text-xs uppercase tracking-widest mb-6">Jugendschutz-Beauftragte</p>
                      <a href="tel:017639967908" className="inline-flex items-center gap-2 text-lg font-black group-hover:text-[#D4FF6B] transition-colors">
                        <span className="text-xl">📞</span> 0176 39967908
                      </a>
                    </div>
                    <div className="group">
                      <h4 className="text-2xl md:text-3xl font-black mb-2 tracking-tighter">Silke Wirkner</h4>
                      <p className="text-black/40 font-bold text-xs uppercase tracking-widest mb-6">Jugendschutz-Beauftragte</p>
                      <a href="tel:017643972330" className="inline-flex items-center gap-2 text-lg font-black group-hover:text-[#D4FF6B] transition-colors">
                        <span className="text-xl">📞</span> 0176 43972330
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-14 pt-10 border-t border-black/5">
                    <button className="group px-8 py-5 bg-black text-white rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.2em] hover:bg-[#D4FF6B] hover:text-black transition-all flex items-center gap-4 shadow-xl">
                      Zu den Vertrauensleuten der SKV 
                      <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'vorstand' && (
              <motion.div
                key="vorstand"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-12">Der Vorstand</h2>
                
                {/* Executive Board Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24">
                  {mainBoard.map((member, idx) => (
                    <div key={idx} className="group aspect-square relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-zinc-100 shadow-sm border border-black/5">
                      <img src={member.image} alt={member.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-white/50 mb-1">{member.role}</span>
                        <h3 className="text-lg md:text-xl font-black text-white leading-tight">{member.name}</h3>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Committee Section */}
                <div className="bg-zinc-50 rounded-[2.5rem] p-8 md:p-14">
                  <h3 className="text-2xl font-black tracking-tight mb-8">Weitere Ausschussmitglieder</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                    {committee.map((item, idx) => (
                      <div key={idx} className="flex flex-col gap-1 border-b border-black/5 pb-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-black/30">{item.role}</span>
                        <span className="text-lg font-bold text-black/80">{item.names}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'geschaeftsstelle' && (
              <motion.div
                key="geschaeftsstelle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-12 md:space-y-16"
              >
                <div className="max-w-4xl">
                  <span className="inline-block px-4 py-1.5 bg-[#D4FF6B] text-black text-[9px] font-black uppercase tracking-widest rounded-full mb-8">Ansprechpartner</span>
                  <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-10">
                    Unsere <br />
                    <span className="text-black/30">Geschäftsstelle.</span>
                  </h2>
                  <p className="text-xl md:text-2xl font-medium text-black/60 leading-relaxed mb-12">
                    Haben Sie Fragen zu Ihrer Mitgliedschaft oder wollen Sie etwas anderes über die SKV wissen? Unsere Geschäftsstellenleiterin <span className="text-black font-black">Frau Koch</span> hilft Ihnen gern weiter.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Address & Contact Card */}
                  <div className="p-8 md:p-12 bg-zinc-50 rounded-[2.5rem] border border-black/5">
                    <h3 className="text-xs font-black uppercase tracking-[0.3em] text-black/30 mb-8">Kontakt & Anschrift</h3>
                    <div className="space-y-6">
                      <div className="group">
                        <span className="text-[9px] font-black uppercase tracking-widest text-black/30 block mb-1">Standort</span>
                        <p className="text-lg font-bold leading-tight">
                          Robert-Bosch-Str. 55<br />
                          71277 Rutesheim
                        </p>
                      </div>
                      <div className="flex flex-col gap-4">
                        <a href="tel:0715258111" className="flex items-center gap-4 group">
                          <span className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center text-sm shadow-lg group-hover:scale-110 transition-transform">📞</span>
                          <span className="text-lg font-black tracking-tight group-hover:text-black/60">07152 / 58111</span>
                        </a>
                        <div className="flex items-center gap-4 text-black/40">
                          <span className="w-10 h-10 bg-zinc-200 rounded-full flex items-center justify-center text-sm">📠</span>
                          <span className="text-sm font-bold">Fax: 07152 / 3194902</span>
                        </div>
                        <a href="mailto:post@skv-rutesheim.de" className="flex items-center gap-4 group">
                          <span className="w-10 h-10 bg-[#D4FF6B] text-black rounded-full flex items-center justify-center text-sm shadow-md group-hover:scale-110 transition-transform">✉️</span>
                          <span className="text-lg font-black tracking-tight group-hover:text-black/60">post@skv-rutesheim.de</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Opening Hours & Notices */}
                  <div className="flex flex-col gap-8">
                    <div className="p-8 md:p-12 bg-black text-white rounded-[2.5rem] flex-1">
                      <h3 className="text-xs font-black uppercase tracking-[0.3em] text-white/30 mb-8">Öffnungszeiten</h3>
                      <div className="space-y-6">
                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                          <span className="font-black text-[10px] uppercase tracking-widest">Dienstag</span>
                          <span className="text-lg font-bold">19:00 – 20:30 Uhr</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-white/10 pb-4">
                          <span className="font-black text-[10px] uppercase tracking-widest">Donnerstag</span>
                          <span className="text-lg font-bold">18:00 – 20:00 Uhr</span>
                        </div>
                      </div>
                      <div className="mt-8 flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                        <span className="text-xl">ℹ️</span>
                        <p className="text-xs font-medium text-white/50 leading-relaxed">
                          Einen Aufnahmeantrag finden Sie unter der Rubrik <span className="text-white underline decoration-[#D4FF6B]">Mitgliedschaft</span>.
                        </p>
                      </div>
                    </div>

                    {/* Closing Dates */}
                    <div className="p-8 bg-zinc-50 border border-black/5 rounded-[2.5rem]">
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-6 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        Schließzeiten 2025
                      </h4>
                      <ul className="space-y-3">
                        <li className="text-sm font-bold flex justify-between">
                          <span>10. Juni 2025</span>
                          <span className="text-black/20">Geschlossen</span>
                        </li>
                        <li className="text-sm font-bold flex justify-between">
                          <span>15. Juli 2025</span>
                          <span className="text-black/20">Geschlossen</span>
                        </li>
                        <li className="text-sm font-bold pt-2 border-t border-black/5">
                          <span className="block mb-1">Sommerpause</span>
                          <span className="text-lg font-black">30.08. – 14.09.2025</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
