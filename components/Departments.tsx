
import React, { useEffect, useRef, useState } from 'react';

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
    image: "/handball.jpg",
    tag: "Dynamik"
  },
  {
    title: "Volleyball",
    image: "/volleyball.jpg",
    tag: "Teamgeist"
  },
  {
    title: "Rad",
    image: "/rad.jpg",
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
    image: "/sportabzeichen.jpg",
    tag: "Fitness"
  }
];

export const Departments: React.FC = () => {
  return (
    <section id="abteilungen" className="py-20 md:py-32 px-4 md:px-6 bg-white overflow-hidden scroll-mt-20 md:scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 md:mb-6">
            Unsere Abteilungen
          </h2>
          <p className="text-base md:text-xl text-black/50 font-medium max-w-2xl leading-relaxed">
            Für jedes Alter das passende Angebot. Entdecke unsere vielfältigen Sportmöglichkeiten in quadratischem, klarem Design.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          {departments.map((dept, idx) => (
            <DepartmentCard key={idx} index={idx} {...dept} />
          ))}
        </div>
      </div>
    </section>
  );
};

const DepartmentCard: React.FC<{ title: string; image: string; tag: string; index: number }> = ({ title, image, tag, index }) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const hasIO = typeof IntersectionObserver !== 'undefined';
  const [isVisible, setIsVisible] = useState(!hasIO || prefersReducedMotion);

  useEffect(() => {
    if (!hasIO || prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: prefersReducedMotion ? 'none' : `opacity 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.08}s, transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.08}s`,
      }}
      className="group relative aspect-square overflow-hidden rounded-[2rem] md:rounded-[3rem] bg-zinc-100 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.1)] md:hover:-translate-y-2.5 md:hover:scale-[1.02] transition-transform duration-500"
    >
      <img 
        src={image} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
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
        
        <div className="h-[1.5px] w-0 bg-[#D4FF6B] group-hover:w-16 transition-all duration-700 mt-4 rounded-full"></div>
        
        <div className="mt-4 flex items-center gap-2 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
          <span className="text-white/60 text-[10px] font-black uppercase tracking-widest">Mehr erfahren</span>
          <span className="text-[#D4FF6B] text-xl">→</span>
        </div>
      </div>
    </div>
  );
};
