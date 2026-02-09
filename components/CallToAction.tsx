
import React from 'react';
import { motion } from 'framer-motion';

interface CallToActionProps {
  onNavigate?: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative h-[450px] rounded-[3rem] overflow-hidden flex flex-col items-center justify-center text-center px-6"
        >
          {/* Immersive Grass Background */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1551698618-1fed5d965596?auto=format&fit=crop&q=80&w=1500" 
              alt="Grass" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">
              Werde Teil unserer Gemeinschaft
            </h2>
            <p className="text-white/70 text-lg mb-10 font-light tracking-wide">
              Schließe dich über 1.200 Sportbegeisterten an und erlebe die Leidenschaft für Bewegung in Rutesheim.
            </p>
            <button 
              onClick={onNavigate}
              className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg hover:bg-zinc-100 transition-all hover:scale-105 shadow-2xl"
            >
              Jetzt Mitgliedsantrag stellen
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
