
import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
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
import { ContactModal } from './components/ContactModal';

type Page = 'home' | 'membership' | 'clubhouse' | 'leitbild' | 'handball' | 'turnen' | 'rad' | 'saenger';

// /handball, /turnen, /rad and /saenger are standalone pages reachable by direct URL
// (deep link), unlike the other pages here which are pure in-app state. All are
// intentionally kept out of Header/Footer nav for now.
//
// OPEN QUESTION for /turnen specifically (unlike the others): Turnen replaces an
// established public department subsite that WAS linked from the old site's main nav,
// whereas Handball's, Rad's and Sänger's pages are new. TODO: confirm with the client
// whether /turnen should be promoted into the main nav, or stay tile-only like the
// others (current default).
const pathToPage: Record<string, Page> = { '/handball': 'handball', '/turnen': 'turnen', '/rad': 'rad', '/saenger': 'saenger' };
const pageFromPath = (): Page => pathToPage[window.location.pathname] ?? 'home';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => pageFromPath());
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Keep the URL bar in sync with /handball and /turnen so those pages are
  // linkable/bookmarkable, without introducing a full router for the rest of the
  // (state-only) pages.
  useEffect(() => {
    const path =
      currentPage === 'handball' ? '/handball' :
      currentPage === 'turnen' ? '/turnen' :
      currentPage === 'rad' ? '/rad' :
      currentPage === 'saenger' ? '/saenger' :
      '/';
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  }, [currentPage]);

  useEffect(() => {
    const onPopState = () => setCurrentPage(pageFromPath());
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return (
    <div className="min-h-screen selection:bg-black selection:text-white bg-white">
      <Header 
        onNavigate={setCurrentPage} 
        currentPage={currentPage} 
        onOpenContact={() => setIsContactOpen(true)}
      />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onNavigateMembership={() => setCurrentPage('membership')} />
            <Stats />
            <Organization onNavigateLeitbild={() => setCurrentPage('leitbild')} />
            <Departments
              onNavigateHandball={() => setCurrentPage('handball')}
              onNavigateTurnen={() => setCurrentPage('turnen')}
              onNavigateRad={() => setCurrentPage('rad')}
              onNavigateSaenger={() => setCurrentPage('saenger')}
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
      </main>
      <Footer onNavigate={setCurrentPage} />
      
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}

export default App;
