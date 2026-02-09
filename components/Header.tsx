
import React, { useState, useEffect } from 'react';
import { ClubLogo } from './ClubLogo';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  onNavigate: (page: 'home' | 'membership' | 'clubhouse') => void;
  currentPage: 'home' | 'membership' | 'clubhouse';
  onOpenContact: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = () => {
    if (currentPage !== 'home') {
      onNavigate('home');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (currentPage !== 'home') {
      onNavigate('home');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || currentPage !== 'home' ? 'py-1.5 bg-white/95 backdrop-blur-xl border-b border-black/5' : 'py-2.5 md:py-3'}`}>
      <div className="max-w-[96%] mx-auto flex items-center justify-between gap-4">
        <div 
          className="flex items-center gap-2 md:gap-3 shrink-0 h-8 md:h-10 cursor-pointer group"
          onClick={handleHomeClick}
        >
          <ClubLogo className="h-full w-auto transition-transform group-hover:scale-105" variant="dark" />
          <div className="hidden md:flex flex-col justify-center">
            <span className="font-black tracking-tighter text-sm md:text-lg leading-none">SKV RUTESHEIM</span>
            <span className="text-[6px] md:text-[8px] font-bold text-black/40 uppercase tracking-widest mt-0.5 leading-none">1945 e. V.</span>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-0.5 bg-white/60 backdrop-blur-xl border border-white/40 p-0.5 rounded-full shadow-sm">
          <button 
            onClick={handleHomeClick}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold transition-all ${currentPage === 'home' ? 'bg-black text-white' : 'text-black/60 hover:bg-black/5'}`}
          >
            Home
          </button>
          <a 
            href="#abteilungen" 
            onClick={(e) => scrollToSection(e, 'abteilungen')}
            className="px-4 py-1.5 rounded-full text-[10px] font-bold text-black/60 hover:bg-black/5 transition-colors"
          >
            Abteilungen
          </a>
          <button 
            onClick={() => onNavigate('clubhouse')}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold transition-all ${currentPage === 'clubhouse' ? 'bg-black text-white' : 'text-black/60 hover:bg-black/5'}`}
          >
            Vereinsheim
          </button>
          <button 
            onClick={() => onNavigate('membership')}
            className={`px-4 py-1.5 rounded-full text-[10px] font-bold transition-all ${currentPage === 'membership' ? 'bg-black text-white' : 'text-black/60 hover:bg-black/5'}`}
          >
            Mitgliedschaft
          </button>
          <button 
            onClick={onOpenContact}
            className="ml-1 px-4 py-1.5 rounded-full text-[10px] font-black bg-[#D4FF6B] text-black border border-black/5 flex items-center gap-1 shadow-sm hover:scale-105 transition-transform"
          >
            Kontakt <span>↗</span>
          </button>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button 
            onClick={() => onNavigate('membership')}
            className="hidden md:flex bg-black text-white px-4 py-1.5 md:px-5 md:py-2 rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all text-[10px] md:text-xs font-bold text-center tracking-wide h-8 md:h-10 items-center justify-center min-w-[100px] md:min-w-[130px]"
          >
            Mitglied werden
          </button>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-1 hover:bg-black/5 rounded-full transition-colors flex flex-col gap-1 items-center justify-center w-8 h-8"
            aria-label="Menu"
          >
            <motion.span animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }} className="w-4 h-0.5 bg-black block rounded-full" />
            <motion.span animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-4 h-0.5 bg-black block rounded-full" />
            <motion.span animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }} className="w-4 h-0.5 bg-black block rounded-full" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]" onClick={() => setIsMenuOpen(false)} />
            <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute top-full left-0 right-0 bg-white border-b border-black/5 shadow-2xl p-6 lg:hidden">
              <div className="flex flex-col gap-3 text-center">
                <button onClick={handleHomeClick} className="text-base font-bold py-2 border-b border-black/5">Home</button>
                <a href="#abteilungen" className="text-base font-bold py-2 border-b border-black/5" onClick={(e) => scrollToSection(e, 'abteilungen')}>Abteilungen</a>
                <button onClick={() => {onNavigate('clubhouse'); setIsMenuOpen(false)}} className="text-base font-bold py-2 border-b border-black/5">Vereinsheim</button>
                <button onClick={() => {onNavigate('membership'); setIsMenuOpen(false)}} className="text-base font-bold py-2 border-b border-black/5">Mitgliedschaft</button>
                <button 
                  onClick={() => {onOpenContact(); setIsMenuOpen(false)}} 
                  className="mt-2 w-full bg-[#D4FF6B] text-black font-black py-3 rounded-xl shadow-lg active:scale-95 transition-transform"
                >
                  Kontakt ↗
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};
