
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, MotionConfig } from 'framer-motion';
import { Header } from './components/Header';
import { useScrollReveal } from './components/useScrollReveal';
import { Page, pageSeo, pageFromPathname, SITE_URL } from './seo';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Departments } from './components/Departments';
import { Organization } from './components/Organization';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';
import { Membership } from './components/Membership';
import { Clubhouse } from './components/Clubhouse';
import { Leitbild } from './components/Leitbild';
import { Handball } from './components/Handball';
import { Turnen } from './components/Turnen';
import { Rad } from './components/Rad';
import { Saenger } from './components/Saenger';
import { Sportabzeichen } from './components/Sportabzeichen';
import { ContactModal } from './components/ContactModal';

// Jede Seite ist per eigener URL direkt aufrufbar (siehe seo.ts; beim Build entsteht pro
// Seite eine statische HTML-Datei, damit der Server /turnen usw. direkt ausliefert).
const pageFromPath = (): Page => pageFromPathname(window.location.pathname);

const setMeta = (selector: string, attr: string, value: string) => {
  document.querySelector(selector)?.setAttribute(attr, value);
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => pageFromPath());
  const [isContactOpen, setIsContactOpen] = useState(false);
  useScrollReveal(currentPage);

  // URL, Titel und Meta-Angaben mit der aktuellen Seite synchron halten.
  useEffect(() => {
    const { path, title, description } = pageSeo[currentPage];
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', SITE_URL + path);
    setMeta('link[rel="canonical"]', 'href', SITE_URL + path);
    if (pageFromPath() !== currentPage) {
      window.history.pushState({}, '', path);
    }
  }, [currentPage]);

  useEffect(() => {
    const onPopState = () => setCurrentPage(pageFromPath());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <MotionConfig reducedMotion="user" transition={{ duration: 1.3, ease: [0.16, 1, 0.3, 1] }}>
    <div className="min-h-screen selection:bg-black selection:text-white bg-white">
      <Header 
        onNavigate={setCurrentPage} 
        currentPage={currentPage} 
        onOpenContact={() => setIsContactOpen(true)}
      />
      {/* Seitenwechsel: alte Seite blendet aus, danach nach oben scrollen und neue Seite sanft einfliegen */}
      <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo({ top: 0, behavior: 'instant' })}>
      <motion.main
        key={currentPage}
        initial={{ opacity: 0, y: 48 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16, transition: { duration: 0.4, ease: [0.4, 0, 1, 1] } }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {currentPage === 'home' && (
          <>
            <Hero onNavigateMembership={() => setCurrentPage('membership')} />
            <Stats />
            <Organization onNavigateLeitbild={() => setCurrentPage('leitbild')} onNavigateMembership={() => setCurrentPage('membership')} />
            <Departments
              onNavigateHandball={() => setCurrentPage('handball')}
              onNavigateTurnen={() => setCurrentPage('turnen')}
              onNavigateRad={() => setCurrentPage('rad')}
              onNavigateSaenger={() => setCurrentPage('saenger')}
              onNavigateSportabzeichen={() => setCurrentPage('sportabzeichen')}
            />
            <CallToAction onNavigate={() => setCurrentPage('membership')} />
          </>
        )}
        
        {currentPage === 'membership' && (
          <Membership onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'clubhouse' && (
          <Clubhouse onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'leitbild' && (
          <Leitbild onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'handball' && (
          <Handball onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'turnen' && (
          <Turnen onBack={() => setCurrentPage('home')} onOpenContact={() => setIsContactOpen(true)} />
        )}

        {currentPage === 'rad' && (
          <Rad onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'saenger' && (
          <Saenger onBack={() => setCurrentPage('home')} />
        )}

        {currentPage === 'sportabzeichen' && (
          <Sportabzeichen onBack={() => setCurrentPage('home')} />
        )}
      </motion.main>
      </AnimatePresence>
      <Footer onNavigate={setCurrentPage} />
      
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
    </MotionConfig>
  );
}

export default App;
