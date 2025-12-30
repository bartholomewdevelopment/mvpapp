import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, FileText, Video, Users, Zap, Clock, DollarSign } from 'lucide-react';
import GetStartedModal from './GetStartedModal';

const WhatIDo: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="what-i-do" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 sm:top-20 right-5 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-[#fd6a62]/10 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-[#fd6a62]/15 rounded-full blur-3xl opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#fd6a62] to-gray-900 bg-clip-text text-transparent mb-4 sm:mb-6 px-2">
              What You Get When You Work With Us
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#fd6a62] to-[#fc5951] mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              A clean MVP is just the beginning. We guide you through every step - so you know exactly what you're getting, how to use it, and what to build next.
            </p>
          </div>
          
          {/* Timeline and Cost Section */}
          <div className="bg-gradient-to-br from-[#fd6a62] to-[#fc5951] rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 text-center">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Launch Your MVP in Just 10 Business Days</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto mb-6 sm:mb-8">
                <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8">
                  <Clock className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-white" />
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Timeline</h4>
                  <p className="text-base sm:text-lg leading-relaxed">
                    No bloated timelines. Your MVP is ready in just 10 business days—not months.
                  </p>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8">
                  <DollarSign className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 text-white" />
                  <h4 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Investment</h4>
                  <p className="text-base sm:text-lg leading-relaxed">
                    At a fraction of the cost of big development firms—without sacrificing quality or speed.
                  </p>
                </div>
              </div>
              <p className="text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto px-4">
                Perfect for getting early traction, feedback, and funding—without wasting time or money.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#fd6a62] to-[#fc5951] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">Core MVP</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Your startup's essential functionality, custom-built and ready to launch. Clean code, responsive UI, and built to scale when you're ready to grow.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">PDF User Manual</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  No mystery, no jargon—just a clear, branded guide explaining how your MVP works, how to update it, and how to onboard your team or investors.
                </CardDescription>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 shadow-lg bg-white/80 backdrop-blur-sm md:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#fd6a62] to-[#fc5951] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-gray-900">3-Hour Zoom Training</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base sm:text-lg leading-relaxed">
                  Live, recorded training session to walk you or your team through the product. We bring over 10 years of professional experience leading training.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
          
          {/* Optional Add-ons */}
          <div className="bg-gradient-to-r from-gray-900 to-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 mb-12 sm:mb-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-[#fd6a62]/5"></div>
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 sm:mb-12">Optional Add-On Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#fd6a62] mr-3 sm:mr-4 flex-shrink-0" />
                    <h4 className="text-lg sm:text-xl font-bold text-white">Customer Development Research</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Need help identifying what to build first? We'll interview real potential customers and summarize insights to help you validate demand before we write a single line of code.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20">
                  <div className="flex items-center mb-4">
                    <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-[#fd6a62] mr-3 sm:mr-4 flex-shrink-0" />
                    <h4 className="text-lg sm:text-xl font-bold text-white">Add-On Secondary Feature</h4>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                    Once your Core MVP is locked in, we can scope and build one additional feature—perfect for testing traction, improving retention, or demoing to investors.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center px-4">
            <Button 
              size="lg" 
              className="bg-[#fd6a62] hover:bg-[#fc5951] text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
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

export default WhatIDo;