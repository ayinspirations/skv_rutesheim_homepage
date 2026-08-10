
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
import { ContactModal } from './components/ContactModal';

type Page = 'home' | 'membership' | 'clubhouse' | 'leitbild' | 'handball';

// /handball is a standalone page reachable by direct URL (deep link), unlike the other
// pages here which are pure in-app state. It is intentionally kept out of Header/Footer nav.
const pageFromPath = (): Page => (window.location.pathname === '/handball' ? 'handball' : 'home');

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(() => pageFromPath());
  const [isContactOpen, setIsContactOpen] = useState(false);

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  // Keep the URL bar in sync with /handball so the page is linkable/bookmarkable,
  // without introducing a full router for the rest of the (state-only) pages.
  useEffect(() => {
    const path = currentPage === 'handball' ? '/handball' : '/';
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
            <Departments onNavigateHandball={() => setCurrentPage('handball')} />
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
