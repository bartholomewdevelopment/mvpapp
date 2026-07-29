import React, { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
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
  const [scrolled, setScrolled] = useState(false);

  /* Transparent over the hero, then a hairline + blur once the page moves.
     A bar that reacts to scroll position is a small thing that dates a site
     quickly when it's missing. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    if (isOpen) onToggle();
  };

  return (
    <>
      <nav
        aria-label="Primary"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-200 ease-signature ${
          scrolled
            ? "border-b border-hairline bg-[rgba(8,9,12,0.82)] backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <button
              onClick={() => scrollToSection("hero")}
              className="flex items-center"
              aria-label="MVP Applications — back to top"
            >
              <img
                src="/images/mvp-applications-logo.png"
                alt="MVP Applications"
                className="h-12 w-auto object-contain transition-opacity duration-150 hover:opacity-80 sm:h-14"
              />
            </button>

            {/* ——— Desktop: pill-grouped links, one accent for the active item ——— */}
            <div className="hidden items-center gap-1 md:flex">
              <div className="mr-2 flex items-center gap-0.5 rounded-full border border-hairline bg-white/[0.03] p-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    aria-current={activeSection === item.id ? "true" : undefined}
                    className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-150 ease-signature lg:px-4 ${
                      activeSection === item.id
                        ? "bg-white/[0.09] text-ink"
                        : "text-ink-subtle hover:text-ink"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button
                onClick={openGetStartedModal}
                className="group inline-flex items-center gap-1.5 rounded-full bg-accent2027 px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 ease-signature hover:bg-accent2027-hover"
              >
                Get started
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-200 ease-signature group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>

            <button
              onClick={onToggle}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 items-center justify-center rounded-[var(--r-md)] border border-hairline text-ink-muted transition-colors duration-150 hover:bg-white/[0.06] hover:text-ink md:hidden"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            onClick={onToggle}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            className="fixed inset-x-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto border-b border-hairline bg-[rgba(12,14,19,0.96)] backdrop-blur-xl sm:top-20 sm:max-h-[calc(100vh-5rem)]"
          >
            <div className="space-y-1 px-4 py-6 sm:px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? "true" : undefined}
                  className={`block w-full rounded-[var(--r-md)] px-4 py-3.5 text-left text-base font-medium transition-colors duration-150 ${
                    activeSection === item.id
                      ? "bg-white/[0.07] text-ink"
                      : "text-ink-subtle hover:bg-white/[0.04] hover:text-ink"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  onToggle();
                  openGetStartedModal();
                }}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-[var(--r-md)] bg-accent2027 px-6 py-4 text-base font-semibold text-white transition-colors duration-150 hover:bg-accent2027-hover"
              >
                Get started
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
