import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';

interface NavigationProps {
  isOpen: boolean;
  onToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ isOpen, onToggle }) => {
  const { openGetStartedModal } = useAppContext();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    onToggle(); // Close mobile menu after clicking
  };

  const handleGetStarted = () => {
    openGetStartedModal();
  };

  return (
    <>
      {/* Fixed Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Logo */}
            <div className="flex items-center">
              <img 
                src="https://d64gsuwffb70l.cloudfront.net/6825378e65c820488ff6350b_1752810698242_af3afd62.png" 
                alt="MVP Applications Logo" 
                className="h-8 sm:h-10 w-auto mr-2 sm:mr-3 object-contain"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-gray-600 hover:text-[#fd6a62] font-medium transition-colors text-sm lg:text-base"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('what-i-do')}
                className="text-gray-600 hover:text-[#fd6a62] font-medium transition-colors text-sm lg:text-base"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="text-gray-600 hover:text-[#fd6a62] font-medium transition-colors text-sm lg:text-base"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-gray-600 hover:text-[#fd6a62] font-medium transition-colors text-sm lg:text-base"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-gray-600 hover:text-[#fd6a62] font-medium transition-colors text-sm lg:text-base"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-[#fd6a62] font-medium transition-colors text-sm lg:text-base"
              >
                FAQ
              </button>
              <Button 
                onClick={handleGetStarted}
                className="bg-[#fd6a62] hover:bg-[#fc5951] text-white text-sm px-4 py-2"
              >
                Get Started
              </Button>
            </div>
            
            {/* Mobile menu button */}
            <button 
              onClick={onToggle}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={onToggle}></div>
          <div className="fixed top-14 sm:top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg max-h-[calc(100vh-3.5rem)] sm:max-h-[calc(100vh-4rem)] overflow-y-auto">
            <div className="px-4 sm:px-6 py-4 space-y-3 sm:space-y-4">
              <button 
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left text-gray-600 hover:text-[#fd6a62] font-medium py-2 transition-colors text-base"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('what-i-do')}
                className="block w-full text-left text-gray-600 hover:text-[#fd6a62] font-medium py-2 transition-colors text-base"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('process')}
                className="block w-full text-left text-gray-600 hover:text-[#fd6a62] font-medium py-2 transition-colors text-base"
              >
                Process
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="block w-full text-left text-gray-600 hover:text-[#fd6a62] font-medium py-2 transition-colors text-base"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-gray-600 hover:text-[#fd6a62] font-medium py-2 transition-colors text-base"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="block w-full text-left text-gray-600 hover:text-[#fd6a62] font-medium py-2 transition-colors text-base"
              >
                FAQ
              </button>
              <Button 
                onClick={handleGetStarted}
                className="w-full bg-[#fd6a62] hover:bg-[#fc5951] text-white mt-4 py-3 text-base"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;