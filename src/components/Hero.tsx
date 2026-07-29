import React from 'react';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/contexts/AppContext';

const Hero: React.FC = () => {
  const { openGetStartedModal } = useAppContext();

  const scrollToWhatIDo = () => {
    const whatIDoSection = document.getElementById('what-i-do');
    if (whatIDoSection) {
      whatIDoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    openGetStartedModal();
  };

  return (
    <>
      <section id="hero" className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 overflow-hidden">
        {/* Animated background elements with improved effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-[#fd6a62]/20 to-[#fc5951]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-tl from-[#fd6a62]/25 to-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-[#fd6a62]/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>

        {/* Enhanced grid pattern with animation */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M0 0h80v1H0zM0 0v80h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        {/* Spotlight effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-950/50"></div>

        <div className="relative container mx-auto px-6 py-24 sm:py-32 flex flex-col justify-center min-h-screen text-center">
          <div className="max-w-6xl mx-auto space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mx-auto mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fd6a62] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fd6a62]"></span>
              </span>
              <span className="text-sm font-medium text-gray-200">Validate First, Build Second</span>
            </div>

            {/* Main headline with enhanced gradient */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-gray-100 to-[#fd6a62] bg-clip-text text-transparent mb-8 leading-[1.1] tracking-tight px-4">
              Don't Build Your Startup Until You Know People Will Pay for It
            </h1>

            {/* Animated divider */}
            <div className="flex justify-center items-center gap-3 mb-8">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#fd6a62]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fd6a62] animate-pulse"></div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#fd6a62] to-[#fc5951]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fc5951] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#fc5951] to-transparent"></div>
            </div>

            {/* Subheadline with better spacing */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light px-4">
              <span className="text-[#fd6a62] font-semibold">90% of startups fail</span> because they build something nobody wants. We help you validate your idea with real customers first—then build the MVP right.
            </p>

            {/* CTA buttons with enhanced styling */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4 pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto group relative bg-gradient-to-r from-[#fd6a62] to-[#fc5951] hover:from-[#fc5951] hover:to-[#fd6a62] text-white px-8 sm:px-10 py-6 text-base sm:text-lg font-semibold shadow-2xl shadow-[#fd6a62]/50 hover:shadow-[#fd6a62]/70 transform hover:scale-105 transition-all duration-300 rounded-xl overflow-hidden"
                onClick={handleGetStarted}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="relative flex items-center justify-center gap-2">
                  Start Validation Coaching
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto group border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 px-8 sm:px-10 py-6 text-base sm:text-lg font-semibold transition-all duration-300 rounded-xl hover:scale-105"
                onClick={scrollToWhatIDo}
              >
                <span className="flex items-center justify-center gap-2">
                  Already Validated? Fast-Track Your Build
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="pt-12 flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#fd6a62]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>10+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#fd6a62]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>100% Code Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#fd6a62]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>U.S.-Based Team</span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Hero;