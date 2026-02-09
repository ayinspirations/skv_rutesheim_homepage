
import React from 'react';
import { motion } from 'framer-motion';

interface HeroProps {
  onNavigateMembership?: () => void;
}

const upcomingEvents = [
  {
    title: "Jahreshauptversammlung",
    date: "20. März 2026",
    info: "Vereinsheim · 19:00 Uhr",
    icon: "📅"
  },
  {
    title: "Fleckenfest",
    date: "27./28. Juni 2026",
    info: "Rutesheim Stadtmitte",
    icon: "🎡"
  }
];

export const Hero: React.FC<HeroProps> = ({ onNavigateMembership }) => {
  const scrollToDepartments = () => {
    const element = document.getElementById('abteilungen');
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative px-3 md:px-5 pt-14 md:pt-16 pb-3 md:pb-5 min-h-[100svh] md:h-screen overflow-hidden flex flex-col">
      <div className="relative flex-1 w-full bg-zinc-400 rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl flex flex-col">
        {/* Background: Grass with blur */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.jpg" 
            alt="Sports Grass Field" 
            className="w-full h-full object-cover blur-[6px] scale-105 opacity-90"
          />
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Content Container */}
        {/* Mobile: flex-col-reverse puts Section 2 (Headline) above Section 1 (Notif). justify-start anchors it at top. */}
        <div className="relative z-10 flex flex-col-reverse md:flex-col h-full p-6 md:p-10 lg:p-14 justify-start md:justify-between gap-8 md:gap-0 overflow-y-auto md:overflow-hidden no-scrollbar">
          
          {/* Section 1: Notifications & Map */}
          <div className="relative w-full flex flex-col md:flex-row justify-between items-start gap-6 md:gap-4 mb-8 md:mb-0">
            
            {/* Left: Notifications (Apple Style) */}
            <div className="flex flex-col gap-2.5 w-full max-w-[280px] md:max-w-[320px] z-30">
              <motion.span 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 }}
                className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-white/40 mb-1 ml-4"
              >
                Nächste Termine
              </motion.span>
              {upcomingEvents.map((event, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -30, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  transition={{ 
                    duration: 0.8, 
                    delay: 1 + (idx * 0.2), 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="bg-white/10 backdrop-blur-3xl border border-white/20 p-3 md:p-4 rounded-[1.2rem] md:rounded-[1.5rem] shadow-xl flex items-center gap-3 md:gap-4 group cursor-default"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-white/10 rounded-lg md:rounded-xl flex items-center justify-center text-base md:text-lg shrink-0 border border-white/10">
                    {event.icon}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <div className="flex justify-between items-center gap-2">
                      <span className="text-white font-black text-[10px] md:text-xs truncate">{event.title}</span>
                    </div>
                    <span className="text-white/80 text-[9px] md:text-[10px] font-bold mt-0.5">{event.date}</span>
                    <span className="text-white/40 text-[8px] md:text-[9px] font-medium truncate">{event.info}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Map Card (Only on Web/Desktop) */}
            <motion.div 
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="hidden md:block w-full max-w-[240px] z-30"
            >
              <div className="bg-white/10 backdrop-blur-3xl border border-white/20 p-2 rounded-[2rem] shadow-2xl group cursor-default">
                <div className="flex items-center gap-2 mb-3 px-1">
                  <div className="w-8 h-8 bg-[#D4FF6B] rounded-lg flex items-center justify-center shrink-0 shadow-lg shadow-[#D4FF6B]/20">
                    <span className="text-xs">📍</span>
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-white text-[7px] font-black uppercase tracking-[0.2em] opacity-50 leading-none mb-1 truncate">Sportpark Bühl</span>
                    <span className="text-white font-bold text-[11px] leading-tight truncate">Rutesheim, DE</span>
                  </div>
                </div>
                
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=Robert-Bosch-Str.+55,+71277+Rutesheim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative block w-full aspect-[4/3] rounded-[1rem] overflow-hidden border border-white/5 group/map"
                >
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    src="https://maps.google.com/maps?q=Robert-Bosch-Str.%2055,%2071277%20Rutesheim&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    className="grayscale opacity-40 contrast-125 scale-110 transition-all duration-700 md:group-hover/map:grayscale-0 md:group-hover/map:opacity-100 md:group-hover/map:scale-100 pointer-events-none"
                  ></iframe>
                  <div className="absolute inset-0 bg-black/10 transition-colors"></div>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Section 2: Headline Area */}
          <div className="pointer-events-none relative z-20 pt-16 md:pt-0 mb-4 md:mb-0 md:mt-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-1.5 bg-[#D4FF6B] px-3 py-1 rounded-full mb-4 md:mb-5 border border-black/5 shadow-lg pointer-events-auto"
            >
              <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
              <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.2em] text-black leading-none">Willkommen bei der SKV</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white tracking-tighter leading-[0.9] mb-8 md:mb-10 font-black max-w-5xl"
              style={{ fontSize: 'clamp(2.5rem, 9vw, 6.8rem)' }}
            >
              Mehr als ein Verein.<br />Eine Gemeinschaft.
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pointer-events-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-10"
            >
              <button 
                onClick={onNavigateMembership}
                className="w-full sm:w-auto px-6 py-4 md:px-10 md:py-5 bg-white text-black rounded-xl md:rounded-2xl font-black text-[11px] md:text-sm hover:bg-[#D4FF6B] hover:scale-105 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-3 group"
              >
                Jetzt Mitglied werden
                <span className="text-sm md:text-xl transition-transform group-hover:translate-x-1 group-hover:-translate-y-1">↗</span>
              </button>
              
              <button 
                onClick={scrollToDepartments}
                className="px-2 py-2 text-white/70 hover:text-white font-black text-[11px] md:text-sm transition-all flex items-center gap-3 group mx-auto sm:mx-0"
              >
                Zu den Abteilungen
                <span className="text-sm md:text-xl opacity-50 group-hover:opacity-100 transition-all group-hover:translate-y-1">↓</span>
              </button>
            </motion.div>
          </div>
        </div>

        {/* Ambient Overlays */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
        <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/40 to-transparent pointer-events-none block md:hidden"></div>
      </div>
    </section>
  );
};
