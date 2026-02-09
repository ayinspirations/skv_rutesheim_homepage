
import React from 'react';
import { motion } from 'framer-motion';

interface CallToActionProps {
  onNavigate?: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 px-4 md:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative bg-black rounded-[2rem] md:rounded-[3rem] overflow-hidden px-8 md:px-16 py-16 md:py-24"
        >
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-[#D4FF6B] rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-black mb-8 md:mb-10">
              Empfohlen
            </span>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-[0.95]">
              Werde Teil unserer Gemeinschaft.
            </h2>

            <p className="text-white/50 text-base md:text-lg mb-12 md:mb-16 font-medium leading-relaxed max-w-lg">
              Schließe dich über 1.200 Sportbegeisterten an und erlebe die Leidenschaft für Bewegung in Rutesheim.
            </p>

            <button 
              onClick={onNavigate}
              className="w-full sm:w-auto px-10 py-4 md:py-5 bg-[#D4FF6B] text-black rounded-xl md:rounded-2xl font-black text-sm md:text-base hover:brightness-110 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-[#D4FF6B]/20 flex items-center justify-center gap-2"
            >
              Jetzt Mitgliedsantrag stellen
              <span className="text-lg">↗</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
