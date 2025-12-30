import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, FileText, Users, Code, Zap, GraduationCap, CheckCircle } from 'lucide-react';
import GetStartedModal from './GetStartedModal';

const Process: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGetStarted = () => {
    setIsModalOpen(true);
  };

  const steps = [
    {
      icon: Users,
      title: "Customer Development Research",
      description: "Validate before you build. We'll run short interviews with your target customers to test assumptions, uncover real pain points, and ensure your MVP solves a problem people care about. You'll receive a summary report with quotes, insights, and clear guidance—saving you time, money, and missteps.",
      color: "from-[#fd6a62] to-[#fc5951]",
      optional: true
    },
    {
      icon: Code,
      title: "MVP Build: Core Development Sprint",
      description: "Build the right thing—fast and clean. Using modern, scalable code and intuitive UI/UX, we'll bring your MVP to life. You'll get weekly updates, a private staging link to view progress in real time, and clear visibility into everything that's being built.",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: Zap,
      title: "Testing and Feedback Loop",
      description: "Let real users shape your product. After internal testing, we'll guide you through gathering feedback from early users. We'll fix bugs, clean up UX issues, and make sure the product performs in real-world conditions before launch. This is where your MVP gets sharpened.",
      color: "from-[#fd6a62] to-[#fc5951]"
    },
    {
      icon: GraduationCap,
      title: "Training and Handoff",
      description: "You're in full control. We'll meet for a detailed 3-hour recorded Zoom session. We'll walk you (or your team) through everything: using your app, managing content, handling edge cases, and planning for growth. You'll leave confident, not confused.",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <>
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fd6a62' fill-opacity='1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-[#fd6a62] to-gray-900 bg-clip-text text-transparent mb-6">
              A Proven Process that Respects Your Time and Budget
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#fd6a62] to-[#fc5951] mx-auto mb-8"></div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 mb-16">
              {steps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className={`group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border-0 shadow-lg bg-white/90 backdrop-blur-sm relative overflow-hidden ${step.optional ? 'border-2 border-dashed border-[#fd6a62]/30' : ''}`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center gap-4">
                          <span className={`bg-gradient-to-r ${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                            {index + 1}
                          </span>
                          <div className={`w-8 h-8 bg-gradient-to-br ${step.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-gray-900 leading-tight mb-2">
                            {step.title}
                          </CardTitle>
                          {step.optional && (
                            <div className="bg-[#fd6a62]/10 text-[#fd6a62] px-2 py-1 rounded-full text-xs font-semibold inline-block">
                              OPTIONAL ADD-ON
                            </div>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-600 text-base leading-relaxed ml-20">
                        {step.description}
                      </CardDescription>
                    </CardContent>
                    
                    {/* Connecting line for vertical flow */}
                    {index < steps.length - 1 && (
                      <div className="absolute left-6 -bottom-4 z-20">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-[#fd6a62]/30 to-[#fc5951]/30 ml-5.5"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#fd6a62] rounded-full"></div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          </div>
          
          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-[#fd6a62]/10 text-[#fd6a62] px-6 py-3 rounded-full font-semibold">
                <CheckCircle className="w-5 h-5" />
                Ready to transform your idea into reality?
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-[#fd6a62] hover:bg-[#fc5951] text-white px-12 py-4 text-lg font-semibold shadow-2xl transform hover:scale-105 transition-all duration-300"
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

export default Process;