import React, { useState } from 'react';
import Navigation from './Navigation';
import Hero from './Hero';
import WhatIDo from './WhatIDo';
import Process from './Process';
import About from './About';
import FAQ from './FAQ';
import Portfolio from './Portfolio';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import GetStartedModal from './GetStartedModal';
import { useAppContext } from '@/contexts/AppContext';

const AppLayout: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isGetStartedModalOpen, closeGetStartedModal } = useAppContext();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    /*
     * One canvas for the whole page. In the previous design every section painted
     * its own `from-slate-950 via-slate-900 to-gray-900` gradient plus two pulsing
     * blur blobs, which read as seven stacked backgrounds. Atmosphere now lives
     * here, once: a slow aurora behind the fold and a fine grain layer over
     * everything. Sections are transparent and separated by rhythm, not colour.
     */
    <div className="relative min-h-screen bg-canvas text-ink antialiased">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      {/* Ambient layer — fixed so it doesn't repeat per section */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="aurora" />
        <div className="grain" />
      </div>

      <div className="relative z-10">
        <Navigation isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />

        <main id="main" className="pt-16 sm:pt-20">
          <div id="hero">
            <Hero />
          </div>
          <div id="what-i-do">
            <WhatIDo />
          </div>
          <div id="process">
            <Process />
          </div>
          <div id="portfolio">
            <Portfolio />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="faq">
            <FAQ />
          </div>
        </main>

        <Footer />
        <ScrollToTop />
      </div>

      <GetStartedModal isOpen={isGetStartedModalOpen} onClose={closeGetStartedModal} />
    </div>
  );
};

export default AppLayout;
