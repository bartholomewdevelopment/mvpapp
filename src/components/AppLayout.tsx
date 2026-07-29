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
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-gray-900">
      <Navigation isOpen={mobileMenuOpen} onToggle={toggleMobileMenu} />
      <div className="pt-16">
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
      </div>
      <Footer />
      <ScrollToTop />

      <GetStartedModal
        isOpen={isGetStartedModalOpen}
        onClose={closeGetStartedModal}
      />
    </div>
  );
};

export default AppLayout;
