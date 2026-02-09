
import React from 'react';
import { ClubLogo } from './ClubLogo';

interface FooterProps {
  onNavigate: (page: 'home' | 'membership' | 'clubhouse') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="pt-24 pb-12 px-6 bg-[#fbfbfd] border-t border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        {/* Logo Section */}
        <div 
          className="flex flex-col items-center gap-4 mb-10 cursor-pointer group"
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <ClubLogo className="w-14 h-15 transition-transform group-hover:scale-105" variant="dark" />
          <div className="flex flex-col">
             <span className="font-black tracking-tighter text-2xl leading-none">SKV RUTESHEIM</span>
             <span className="text-[10px] font-bold text-black/40 uppercase tracking-[0.3em] mt-1">1945 e. V.</span>
          </div>
        </div>

        {/* Minimal Navigation */}
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-12 text-[10px] md:text-xs font-black uppercase tracking-widest text-black/40">
          <button onClick={() => onNavigate('home')} className="hover:text-black transition-colors">Startseite</button>
          <button onClick={() => onNavigate('clubhouse')} className="hover:text-black transition-colors">Vereinsheim</button>
          <button onClick={() => onNavigate('membership')} className="hover:text-black transition-colors">Mitgliedschaft</button>
          <button className="hover:text-black transition-colors">Impressum</button>
          <button className="hover:text-black transition-colors">Datenschutz</button>
        </div>

        {/* Separator & Credits */}
        <div className="w-full pt-10 border-t border-black/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:items-start items-center gap-1">
            <p className="text-[10px] font-black text-black/30 uppercase tracking-widest">
              © {new Date().getFullYear()} SKV Rutesheim 1945 e. V.
            </p>
            <p className="text-[9px] font-medium text-black/20">
              Sportpark Bühl · Robert-Bosch-Str. 55 · 71277 Rutesheim
            </p>
          </div>
          
          <div className="text-[10px] font-black text-black/30 uppercase tracking-widest flex items-center gap-1.5">
            <span>Webseite umgesetzt durch</span>
            <a 
              href="https://www.akiistudio.de" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-black/60 hover:text-black transition-colors border-b border-black/10 hover:border-black pb-0.5"
            >
              AkiiStudio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
