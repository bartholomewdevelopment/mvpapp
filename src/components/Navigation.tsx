import React from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useAppContext } from "@/contexts/AppContext";
import { useActiveSection } from "@/hooks/useScrollAnimation";

interface NavigationProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navItems = [
  { id: "hero", label: "Home" },
  { id: "what-i-do", label: "Services" },
  { id: "process", label: "Process" },
  { id: "portfolio", label: "Portfolio" },
  { id: "about", label: "About" },
  { id: "faq", label: "FAQ" },
];

const sectionIds = navItems.map((n) => n.id);

const Navigation: React.FC<NavigationProps> = ({ isOpen, onToggle }) => {
  const { openGetStartedModal } = useAppContext();
  const activeSection = useActiveSection(sectionIds);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    if (isOpen) onToggle();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 backdrop-blur-md border-b border-white/10 shadow-2xl">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <div className="flex items-center group">
              <div className="relative">
                <div className="absolute inset-0 bg-[#fd6a62]/20 blur-xl rounded-full group-hover:bg-[#fd6a62]/30 transition-all duration-300" />
                <img
                  src="/images/mvp-applications-logo.png"
                  alt="MVP Applications Logo"
                  className="h-16 sm:h-20 w-auto relative z-10 object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative font-medium transition-all duration-300 text-sm lg:text-base px-3 lg:px-4 py-2 rounded-lg hover:bg-white/10 group ${
                    activeSection === item.id ? "text-white" : "text-gray-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <div
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#fd6a62] rounded-full transition-all duration-300 ${
                      activeSection === item.id
                        ? "w-6 opacity-100"
                        : "w-0 opacity-0 group-hover:w-full group-hover:opacity-100"
                    }`}
                  />
                </button>
              ))}
              <Button
                onClick={openGetStartedModal}
                className="ml-2 lg:ml-4 bg-gradient-to-r from-[#fd6a62] to-[#fc5951] hover:from-[#fc5951] hover:to-[#fd6a62] text-white text-sm px-5 lg:px-6 py-2.5 shadow-lg shadow-[#fd6a62]/50 hover:shadow-xl hover:shadow-[#fd6a62]/60 transform hover:scale-105 transition-all duration-300"
              >
                Get Started
              </Button>
            </div>

            <button
              onClick={onToggle}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300 text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="w-6 h-6 sm:w-7 sm:h-7" /> : <Menu className="w-6 h-6 sm:w-7 sm:h-7" />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md" onClick={onToggle} />
          <div className="fixed top-16 sm:top-20 left-0 right-0 bg-gradient-to-b from-slate-900 to-gray-900 border-b border-white/10 shadow-2xl max-h-[calc(100vh-4rem)] sm:max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-4 sm:px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left font-medium py-3 px-4 rounded-lg transition-all duration-300 text-base ${
                    activeSection === item.id
                      ? "text-[#fd6a62] bg-[#fd6a62]/10"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                onClick={openGetStartedModal}
                className="w-full bg-gradient-to-r from-[#fd6a62] to-[#fc5951] hover:from-[#fc5951] hover:to-[#fd6a62] text-white mt-4 py-4 text-base shadow-lg shadow-[#fd6a62]/50 hover:shadow-xl transition-all duration-300"
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
