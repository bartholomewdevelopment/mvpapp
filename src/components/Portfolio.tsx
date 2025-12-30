import React from 'react';
import { Card, CardContent } from './ui/card';
import { ExternalLink, Globe, Sparkles } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our Portfolio
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Software we've built for Bartholomew Development/MVP Applications
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group">
            <CardContent className="p-6 sm:p-8">
              <div className="mb-6 sm:mb-8 relative">
                <div className="bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg p-3 sm:p-4 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="bg-gray-600 rounded px-2 py-1 text-xs text-white font-mono">
                      overtimeam.com
                    </div>
                  </div>
                  
                  <div className="bg-white rounded overflow-hidden aspect-video">
                    <img 
                      src="/images/portfolio/overtime-screenshot.png" 
                      alt="Overtime Athletic Management"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="mt-4">
                    <a 
                      href="https://overtimeam.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn relative inline-flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#fd6a62] to-[#fc5951] text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#fc5951] to-[#fd6a62] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <Sparkles className="w-4 h-4 relative z-10 group-hover/btn:animate-pulse" />
                      <span className="relative z-10">View Live Website</span>
                      <ExternalLink className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Overtime Athletic Management
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                  A comprehensive platform for athletic organizations to manage their operations, 
                  built in-house for Bartholomew Development/MVP Applications.
                </p>
                
                <div className="flex items-center justify-center gap-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                    <img 
                      src="/images/portfolio/overtime-logo.jpg" 
                      alt="Overtime Athletic Management logo"
                      className="w-full h-full object-contain rounded"
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900 text-sm sm:text-base">Internal Project</p>
                    <p className="text-xs sm:text-sm text-[#fd6a62] font-medium">Bartholomew Development</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
