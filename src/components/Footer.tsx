import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
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
      <footer className="relative border-t border-hairline pb-14 pt-24 text-ink">
        <div className="container relative mx-auto px-6">
          {/* ——— Closing CTA ——— */}
          <div className="mb-20 text-center">
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-hairline bg-white/[0.04] px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-accent2027" aria-hidden="true" />
              <span className="eyebrow">Let's build your startup</span>
            </div>

            <h2 className="display-2 text-ink">Ready to launch your MVP?</h2>

            <p className="lede mx-auto mt-5">
              Start with a free 60-minute Pre-Validation — pass it, and paid Validation is the next step.
              We'll help you build smart, launch fast, and grow with confidence.
            </p>

            <div className="mt-9">
              <button
                onClick={handleScheduleCall}
                className="group inline-flex items-center justify-center gap-2 rounded-[var(--r-md)] btn-brand px-8 py-4 text-base font-semibold"
              >
                Book free Pre-Validation
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 ease-signature group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          {/* Footer Links */}
          <div className="border-t border-hairline pt-12">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-[#fd6a62]/20 blur-xl rounded-full group-hover:bg-[#fd6a62]/30 transition-all duration-150 ease-signature"></div>
                    <img
                      src="/images/mvp-applications-logo.png"
                      alt="MVP Applications Logo"
                      className="h-12 w-auto relative z-10 object-contain"
                    />
                  </div>
                </div>
                <p className="text-sm text-ink-subtle leading-relaxed max-w-sm">
                  Product strategy, design, and development for founders who want to launch fast
                  without cutting corners.
                </p>
                <div className="mt-5 flex items-center gap-4">
                  <a
                    href="https://bartdev.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#fd6a62] hover:text-[#fc5951] underline transition-colors duration-150 ease-signature font-medium"
                  >
                    Built by Bartholomew Development
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink mb-4">Company</h3>
                <ul className="space-y-3 text-sm text-ink-subtle">
                  <li>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="hover:text-white transition-colors duration-150 ease-signature"
                    >
                      About
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("process")}
                      className="hover:text-white transition-colors duration-150 ease-signature"
                    >
                      Process
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("portfolio")}
                      className="hover:text-white transition-colors duration-150 ease-signature"
                    >
                      Portfolio
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("faq")}
                      className="hover:text-white transition-colors duration-150 ease-signature"
                    >
                      FAQs
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink mb-4">Services</h3>
                <ul className="space-y-3 text-sm text-ink-subtle">
                  <li>
                    <button
                      onClick={() => scrollToSection("what-i-do")}
                      className="hover:text-white transition-colors duration-150 ease-signature"
                    >
                      MVP Build
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("what-i-do")}
                      className="hover:text-white transition-colors duration-150 ease-signature"
                    >
                      Product Strategy
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("what-i-do")}
                      className="hover:text-white transition-colors duration-150 ease-signature"
                    >
                      UX/UI Design
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => scrollToSection("what-i-do")}
                      className="hover:text-white transition-colors duration-150 ease-signature"
                    >
                      Ongoing Support
                    </button>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-ink mb-4">Contact</h3>
                <ul className="space-y-3 text-sm text-ink-subtle">
                  <li>
                    <button
                      onClick={handleScheduleCall}
                      className="hover:text-white transition-colors duration-150 ease-signature"
                    >
                      Book Pre-Validation
                    </button>
                  </li>
                  <li>
                    <a
                      href="mailto:info@bartholomewdevelopment.com"
                      className="hover:text-white transition-colors duration-150 ease-signature"
                    >
                      info@bartholomewdevelopment.com
                    </a>
                  </li>
                  <li>
                    <span className="text-ink-faint">US-based, working with US clients only</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 border-t border-hairline pt-8 flex flex-col items-center gap-6 text-center">
              <button
                onClick={openPrivacyModal}
                className="text-ink-subtle hover:text-[#fd6a62] underline transition-colors duration-150 ease-signature text-sm"
              >
                Privacy Policy
              </button>
              <div className="flex flex-col items-center space-y-4">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#fd6a62]/20 blur-xl rounded-full group-hover:bg-[#fd6a62]/30 transition-all duration-150 ease-signature"></div>
                  <img
                    src="/images/bartholomew-dev-logo.png"
                    alt="Bartholomew Development Logo"
                    className="h-7 w-auto opacity-70 group-hover:opacity-100 transition-opacity duration-150 ease-signature relative z-10"
                  />
                </div>
                <p className="text-xs text-ink-faint">© 2026 MVP Applications. All rights reserved.</p>
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
