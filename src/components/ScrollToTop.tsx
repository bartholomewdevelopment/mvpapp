import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      className={`scroll-top-btn fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full bg-brand-grad text-white shadow-lg shadow-[#fd6a62]/30 hover:shadow-xl hover:shadow-[#fd6a62]/50 hover:scale-110 transition-all duration-150 ease-signature flex items-center justify-center ${show ? 'show' : ''}`}
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};

export default ScrollToTop;
