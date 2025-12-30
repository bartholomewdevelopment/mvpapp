import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import GetStartedModal from './GetStartedModal';

const Hero: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scrollToWhatIDo = () => {
    const whatIDoSection = document.getElementById('what-i-do');
    if (whatIDoSection) {
      whatIDoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#fd6a62]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#fd6a62]/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#fd6a62]/8 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-6 py-20 flex flex-col justify-center min-h-screen text-center">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-[#fd6a62] bg-clip-text text-transparent mb-8 leading-tight">
              Helping funded startups launch MVP's that actually convert
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fd6a62] to-[#fc5951] mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Our custom MVP development means you get a clean, launch-ready product without scope creep, timezone issues, or broken communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-[#fd6a62] hover:bg-[#fc5951] text-white px-8 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={handleGetStarted}
              >
                Get Started
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#fd6a62] text-[#fd6a62] hover:bg-[#fd6a62] hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
                onClick={scrollToWhatIDo}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <GetStartedModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Hero;