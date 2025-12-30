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

  return (
    <>
      <footer className="bg-gradient-to-r from-gray-900 to-slate-800 text-white py-16 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#fd6a62]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#fd6a62]/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Ready to Launch Your MVP Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-[#fd6a62] bg-clip-text text-transparent mb-6">
              Ready to Launch Your MVP?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fd6a62] to-[#fc5951] mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's turn your idea into a launchable product. We'll help you build smart, launch fast, and grow with confidence.
            </p>
            <Button 
              size="lg" 
              className="bg-[#fd6a62] hover:bg-[#fc5951] text-white px-12 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
              onClick={handleScheduleCall}
            >
              Schedule Discovery Call
            </Button>
          </div>
          
          {/* Footer Links */}
          <div className="border-t border-gray-700 pt-8 text-center">
            <div className="mb-4">
              <button
                onClick={openPrivacyModal}
                className="text-[#fd6a62] hover:text-[#fc5951] underline transition-colors"
              >
                Privacy Policy
              </button>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <p className="text-sm text-gray-400">
                Built by{' '}
                <a 
                  href="https://bartdev.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#fd6a62] hover:text-[#fc5951] underline transition-colors"
                >
                  Bartholomew Development
                </a>
              </p>
              <img 
                src="/images/bartholomew-dev-logo.png" 
                alt="Bartholomew Development Logo" 
                className="h-6 w-auto opacity-80"
              />
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
