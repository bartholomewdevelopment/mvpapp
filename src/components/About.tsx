import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Rocket, CheckCircle, Star, Calendar } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';

const About: React.FC = () => {
  const { openGetStartedModal } = useAppContext();

  const handleScheduleCall = () => {
    openGetStartedModal();
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#fd6a62]/10 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#fd6a62]/15 rounded-full blur-3xl opacity-20"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main headline */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#fd6a62] to-gray-900 bg-clip-text text-transparent mb-8 leading-tight">
              Your Startup Partner From Day One
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fd6a62] to-[#fc5951] mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              From clear scopes to simple code that scales, we help funded founders skip the chaos and build what really matters. No fluff. Just smart software.
            </p>
          </div>
          
          {/* Two column content */}
          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fd6a62] to-[#fc5951] rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Why Us?</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  For over 10 years, we've trained teams and led technical projects—both in-person and remotely—under real-world pressure. We've implemented enterprise software for dealerships, rescued failing rollouts, and served as the point of contact for critical go-lives. But we've also spent nights and weekends in the code, building applications from scratch—frontend to backend—with a focus on simplicity, usability, and scale.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  When we launched Bartholomew Development, we combined both worlds: the strategy and systems thinking of implementation with the precision and creativity of full-stack development. We'd seen too many projects fail from unclear scopes, bad communication, and off-the-shelf tech that didn't scale. So we set out to build something better—from day one.
                </p>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">How We Help Our Clients</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed mb-4">
                  We build clean, scalable MVPs for funded entrepreneurs who want a fast, frustration-free launch. We start with strategy, build only what matters, and wrap it all with live Zoom training and a custom user manual. You don't just get software—you get clarity, control, and confidence.
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Need help before or after launch? We offer focused add-ons like customer development interviews and extra features to keep your momentum going. Everything we do is built to help you launch smarter and grow faster.
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Call to action section - Fixed mobile responsiveness */}
          <div className="bg-gradient-to-r from-gray-900 to-slate-800 rounded-3xl p-6 sm:p-8 lg:p-12 text-center relative overflow-hidden mb-16">
            <div className="absolute inset-0 bg-[#fd6a62]/5"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#fd6a62] to-[#fc5951] rounded-2xl flex items-center justify-center">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">What's Next?</h3>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                If you're ready to build your MVP, click below. We'll review your idea, walk you through our process, and help you get clear on what to build first.
              </p>
              <div className="px-4">
                <Button 
                  size="lg" 
                  className="bg-[#fd6a62] hover:bg-[#fc5951] text-white px-6 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
                  onClick={handleScheduleCall}
                >
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  <span className="whitespace-nowrap">Schedule a Discovery Call</span>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Professional headshot section */}
          <div className="text-center">
            <div className="relative inline-block">
              <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-white mx-auto mb-6 bg-gradient-to-br from-[#fd6a62]/10 to-[#fc5951]/10">
                <img 
                  src="/images/joseph-bartholomew.jpg" 
                  alt="Joseph Bartholomew - Professional Developer" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#fd6a62] to-[#fc5951] text-white font-bold text-4xl">JB</div>';
                    }
                  }}
                />
              </div>
              {/* Decorative ring around photo */}
              <div className="absolute inset-0 w-48 h-48 rounded-full border-2 border-[#fd6a62]/20 mx-auto animate-pulse"></div>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-2">Joseph Bartholomew</h4>
              <p className="text-gray-600 font-semibold mb-1">
                Founder, <span className="text-[#fd6a62]">MVP Applications</span>
              </p>
              <p className="text-sm text-gray-500 italic">A Bartholomew Development Company</p>
              <p className="text-sm text-gray-500 mt-2">10+ Years Experience • U.S.-Based • MVP Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
