import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import { useAppContext } from '@/contexts/AppContext';

const Footer: React.FC = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const { openGetStartedModal } = useAppContext();

  const openPrivacyModal = () => {
    setIsPrivacyModalOpen(true);
  };

  const closePrivacyModal = () => {
    setIsPrivacyModalOpen(false);
  };

  // Expose modal function globally for cookie banner to call
  useEffect(() => {
    (window as any).openPrivacyModalFromCookie = openPrivacyModal;
  }, []);

  const handleScheduleCall = () => {
    openGetStartedModal();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <footer className="bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 text-white py-20 relative overflow-hidden border-t border-white/5">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-[#fd6a62]/15 to-[#fc5951]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-[#fd6a62]/20 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M0 0h80v1H0zM0 0v80h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Ready to Launch Your MVP Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mx-auto mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fd6a62] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fd6a62]"></span>
              </span>
              <span className="text-sm font-medium text-gray-200">Let's Build Your Startup</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-[#fd6a62] bg-clip-text text-transparent mb-6 leading-tight">
              Ready to Launch Your MVP?
            </h2>

            <div className="flex justify-center items-center gap-3 mb-8">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#fd6a62]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fd6a62] animate-pulse"></div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#fd6a62] to-[#fc5951]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fc5951] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#fc5951] to-transparent"></div>
            </div>

            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Let's turn your idea into a launchable product. We'll help you build smart, launch fast, and grow with confidence.
            </p>

            <Button
              size="lg"
              className="group relative bg-gradient-to-r from-[#fd6a62] to-[#fc5951] hover:from-[#fc5951] hover:to-[#fd6a62] text-white px-10 py-6 text-lg font-semibold shadow-2xl shadow-[#fd6a62]/50 hover:shadow-[#fd6a62]/70 transform hover:scale-105 transition-all duration-300 rounded-xl overflow-hidden"
              onClick={handleScheduleCall}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <span className="relative flex items-center justify-center gap-2">
                Schedule Discovery Call
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Button>
          </div>

          {/* Footer Links */}
          <div className="border-t border-white/10 pt-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#fd6a62]/20 blur-xl rounded-full group-hover:bg-[#fd6a62]/30 transition-all duration-300"></div>
                    <img
                      src="/images/mvp-applications-logo.png"
                      alt="MVP Applications Logo"
                      className="h-12 w-auto relative z-10 object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                  Product strategy, design, and development for founders who want to launch fast
                  without cutting corners.
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <a
                    href="https://bartdev.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#fd6a62] hover:text-[#fc5951] underline transition-colors duration-300 font-medium"
                  >
                    Built by Bartholomew Development
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">Company</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="hover:text-white transition-colors duration-300"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("process")}
                      className="hover:text-white transition-colors duration-300"
                    >
                      Process
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("portfolio")}
                      className="hover:text-white transition-colors duration-300"
                    >
                      Portfolio
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("faq")}
                      className="hover:text-white transition-colors duration-300"
                    >
                      FAQs
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">Services</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <button
                      onClick={() => scrollToSection("what-i-do")}
                      className="hover:text-white transition-colors duration-300"
                    >
                      MVP Build
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("what-i-do")}
                      className="hover:text-white transition-colors duration-300"
                    >
                      Product Strategy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("what-i-do")}
                      className="hover:text-white transition-colors duration-300"
                    >
                      UX/UI Design
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("what-i-do")}
                      className="hover:text-white transition-colors duration-300"
                    >
                      Ongoing Support
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-200 mb-4">Contact</h3>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <button
                      onClick={handleScheduleCall}
                      className="hover:text-white transition-colors duration-300"
                    >
                      Schedule a Call
                    </button>
                  </li>
                  <li>
                    <a
                      href="mailto:info@bartholomewdevelopment.com"
                      className="hover:text-white transition-colors duration-300"
                    >
                      info@bartholomewdevelopment.com
                    </a>
                  </li>
                  <li>
                    <span className="text-gray-500">US-based, working with US clients only</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-white/10 pt-8 flex flex-col items-center gap-6 text-center">
              <button
                onClick={openPrivacyModal}
                className="text-gray-400 hover:text-[#fd6a62] underline transition-colors duration-300 text-sm"
              >
                Privacy Policy
              </button>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#fd6a62]/20 blur-xl rounded-full group-hover:bg-[#fd6a62]/30 transition-all duration-300"></div>
                  <img
                    src="/images/bartholomew-dev-logo.png"
                    alt="Bartholomew Development Logo"
                    className="h-7 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
                  />
                </div>
                <p className="text-xs text-gray-500">© 2026 MVP Applications. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyPolicyModal 
        isOpen={isPrivacyModalOpen} 
        onClose={closePrivacyModal} 
      />
    </>
  );
};

export default Footer;
