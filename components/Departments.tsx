
import React from 'react';
import { motion } from 'framer-motion';

const departments = [
  {
    title: "Fußball",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=1000",
    tag: "Aktiv"
  },
  {
    title: "Turnen & Schwimmen",
    image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?auto=format&fit=crop&q=80&w=1000",
    tag: "Vielseitig"
  },
  {
    title: "Handball",
    image: "https://images.unsplash.com/photo-1628891890377-57bc230e793d?auto=format&fit=crop&q=80&w=1000",
    tag: "Dynamik"
  },
  {
    title: "Volleyball",
    image: "https://images.unsplash.com/photo-1612872086822-67cad662769b?auto=format&fit=crop&q=80&w=1000",
    tag: "Teamgeist"
  },
  {
    title: "Rad",
    image: "https://images.unsplash.com/photo-1474139224675-84a39be87d40?auto=format&fit=crop&q=80&w=1000",
    tag: "Outdoor"
  },
  {
    title: "Tischtennis",
    image: "https://images.unsplash.com/photo-1609710228159-0fa9bd7c0827?auto=format&fit=crop&q=80&w=1000",
    tag: "Präzision"
  },
  {
    title: "Sänger",
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=1000",
    tag: "Kultur"
  },
  {
    title: "Sportabzeichen",
    image: "https://images.unsplash.com/photo-1533560274420-23c6a337c39b?auto=format&fit=crop&q=80&w=1000",
    tag: "Fitness"
  }
];

export const Departments: React.FC = () => {
  return (
    <section id="abteilungen" className="py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black tracking-tighter mb-4 md:mb-6"
          >
            Unsere Abteilungen
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base md:text-xl text-black/50 font-medium max-w-2xl leading-relaxed"
          >
            Für jedes Alter das passende Angebot. Entdecke unsere vielfältigen Sportmöglichkeiten in quadratischem, klarem Design.
          </motion.p>
        </div>

        {/* Grid restricted to max 3 columns on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {departments.map((dept, idx) => (
            <DepartmentCard key={idx} {...dept} />
          ))}
        </div>
      </div>
    </section>
  );
};

const DepartmentCard: React.FC<{ title: string; image: string; tag: string }> = ({ title, image, tag }) => (
  <motion.div 
    whileHover={{ y: -10, scale: 1.02 }}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    viewport={{ once: true }}
    className="group relative aspect-square overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-zinc-100 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500"
  >
    <img 
      src={image} 
      alt={title} 
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
    />
    {/* Apple-style Overlay Gradient */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
    
    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
      <div className="mb-3 md:mb-5">
        <span className="px-4 py-1.5 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white font-black">
          {tag}
        </span>
      </div>
      <h3 className="text-3xl md:text-4xl font-black text-white leading-[0.9] tracking-tighter transition-transform duration-500 group-hover:translate-x-1">
        {title}
      </h3>
      
      {/* Subtle indicator line */}
      <div className="h-[1.5px] w-0 bg-[#D4FF6B] group-hover:w-16 transition-all duration-700 mt-4 rounded-full"></div>
      
      <div className="mt-4 flex items-center gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
        <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Mehr erfahren</span>
        <span className="text-[#D4FF6B] text-xl">→</span>
      </div>
    </div>
  </motion.div>
);
