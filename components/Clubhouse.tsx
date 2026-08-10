
import React from 'react';
import { motion } from 'framer-motion';

interface ClubhouseProps {
  onBack: () => void;
}

const openingHours = [
  { day: "Montag", hours: "Ruhetag", highlight: false },
  { day: "Dienstag - Samstag", hours: "11:30 - 14:00 Uhr & 17:30 - 22:30 Uhr", highlight: true },
  { day: "Sonn- & Feiertage", hours: "11:30 - 14:00 Uhr & 14:30 - 21:00 Uhr", highlight: true }
];

export const Clubhouse: React.FC<ClubhouseProps> = ({ onBack }) => {
  return (
    <div className="pt-24 pb-32">
      {/* Header Section */}
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
          
          <div className="flex flex-col lg:flex-row gap-12 lg:items-end">
            <div className="flex-1">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
              >
                Sportgaststätte <br />
                <span className="text-black/20">Bühl.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl md:text-3xl font-medium text-black/50 leading-relaxed max-w-2xl"
              >
                Genießen Sie exzellente Küche in gemütlicher Atmosphäre – direkt am Stadion der SKV Rutesheim.
              </motion.p>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:w-80 shrink-0 bg-zinc-50 border border-black/5 p-8 rounded-[2.5rem]"
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-black/30 mb-6 block">Pächterin</span>
              <h3 className="text-2xl font-black mb-1">Frau Erhardt</h3>
              <p className="text-black/40 font-bold text-xs uppercase tracking-widest mb-8">Gastgeberin aus Leidenschaft</p>
              
              <div className="space-y-4">
                <a href="tel:071523560808" className="flex items-center gap-3 text-sm font-bold hover:text-[#D4FF6B] transition-colors">
                  <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">📞</span>
                  07152 / 3560808
                </a>
                <a href="mailto:Erhardt.ellen@t-online.de" className="flex items-center gap-3 text-sm font-bold hover:text-[#D4FF6B] transition-colors">
                  <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">✉️</span>
                  E-Mail senden
                </a>
                <a href="https://www.ristorante-pizzeria-buehl.de/start/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm font-bold hover:text-[#D4FF6B] transition-colors">
                  <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-xs">🌐</span>
                  Zur Homepage ↗
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Image Banner */}
      <section className="px-6 mb-20 md:mb-32">
        <div className="max-w-7xl mx-auto h-[400px] md:h-[600px] rounded-[3rem] overflow-hidden relative group">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=2070" 
            alt="Interior Restaurant" 
            className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
          <div className="absolute bottom-10 left-10 text-white pointer-events-none">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 block">Modernisiert 2024</span>
            <h4 className="text-2xl font-black tracking-tight">Helle & gemütliche Atmosphäre</h4>
          </div>
        </div>
      </section>

      {/* Opening Hours & Details */}
      <section className="px-6 mb-20 md:mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-12">Öffnungszeiten</h2>
            <div className="space-y-4">
              {openingHours.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row justify-between p-6 rounded-2xl border ${item.highlight ? 'bg-white border-black/5 shadow-sm' : 'bg-zinc-50 border-transparent opacity-50'}`}
                >
                  <span className="font-black text-xs uppercase tracking-widest">{item.day}</span>
                  <span className={`text-lg font-bold ${item.highlight ? 'text-black' : 'text-black/40'}`}>{item.hours}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-[#D4FF6B] rounded-[2.5rem] flex items-center gap-6">
              <span className="text-4xl">♿</span>
              <p className="text-black font-black tracking-tight leading-snug">
                Unser Sportheim ist vollständig behindertengerecht gestaltet – barrierefreier Zugang für alle Gäste.
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-12">Räumlichkeiten</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-zinc-50 p-8 rounded-[2rem] border border-black/5">
                <span className="text-3xl font-black mb-4 block">60</span>
                <h4 className="font-black text-xs uppercase tracking-widest text-black/40 mb-2">Plätze im Lokal</h4>
                <p className="text-sm font-medium text-black/60 leading-relaxed">
                  Neu möbliert in 2024. Perfekt für gesellige Runden oder ein ruhiges Abendessen.
                </p>
              </div>
              <div className="bg-zinc-50 p-8 rounded-[2rem] border border-black/5">
                <span className="text-3xl font-black mb-4 block">50</span>
                <h4 className="font-black text-xs uppercase tracking-widest text-black/40 mb-2">Terrassenplätze</h4>
                <p className="text-sm font-medium text-black/60 leading-relaxed">
                  Mit direktem Blick auf das Stadion. Ideal für Fußballtage und Sommerabende.
                </p>
              </div>
              <div className="bg-zinc-50 p-8 rounded-[2rem] border border-black/5">
                <span className="text-3xl font-black mb-4 block">140</span>
                <h4 className="font-black text-xs uppercase tracking-widest text-black/40 mb-2">Zwei Nebensäle</h4>
                <p className="text-sm font-medium text-black/60 leading-relaxed">
                  Kombinierbar durch Schiebetüren (50 + 90 Plätze). Ideal für Tagungen & Feiern.
                </p>
              </div>
              <div className="bg-black text-white p-8 rounded-[2rem]">
                <span className="text-3xl font-black mb-4 block">200</span>
                <h4 className="font-black text-xs uppercase tracking-widest text-white/40 mb-2">Gesamtkapazität</h4>
                <p className="text-sm font-medium text-white/60 leading-relaxed">
                  Durch Öffnen aller Schiebetüren schaffen wir Platz für Ihre Großveranstaltung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events / Weddings Callout */}
      <section className="px-6 mb-20">
        <div className="max-w-7xl mx-auto bg-zinc-50 rounded-[3rem] p-10 md:p-20 overflow-hidden relative">
          <div className="relative z-10 max-w-3xl">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#D4FF6B] bg-black px-4 py-1 rounded-full mb-8 inline-block">Ihr Event</span>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-[0.9]">
              Hochzeiten, Jubiläen & <span className="text-black/30">Weihnachtsfeiern.</span>
            </h2>
            <p className="text-xl md:text-2xl font-medium text-black/40 leading-relaxed mb-12">
              Unser großer Saal verfügt über moderne Lichteffekte und bietet durch seine Helligkeit das optimale Ambiente für Taufen, Beerdigungen oder geschäftliche Tagungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-5 bg-black text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#D4FF6B] hover:text-black transition-all shadow-xl flex items-center justify-center gap-3">
                Termin anfragen ↗
              </button>
            </div>
          </div>
          
          {/* Subtle decorative stadium view mock */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none hidden lg:block">
            <div className="w-full h-full bg-gradient-to-l from-green-500/20 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* Location / Map Section */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
             <h3 className="text-2xl font-black tracking-tight mb-4">Hier finden Sie uns</h3>
             <p className="text-lg font-medium text-black/40 mb-8">
               Robert-Bosch-Str. 55, 71277 Rutesheim <br />
               Direkt am Stadion der SKV.
             </p>
          </div>
          <div className="w-full md:w-2/3 h-[300px] rounded-[2rem] overflow-hidden border border-black/5 grayscale">
            <iframe 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              scrolling="no" 
              src="https://maps.google.com/maps?q=Robert-Bosch-Str.%2055,%2071277%20Rutesheim&t=&z=14&ie=UTF8&iwloc=&output=embed"
              className="opacity-80 grayscale contrast-125"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};
