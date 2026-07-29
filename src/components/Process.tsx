import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, FileText, Users, Code, Zap, GraduationCap, CheckCircle, Target, Rocket, ArrowRight } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';

const Process: React.FC = () => {
  const { openGetStartedModal } = useAppContext();
  const [selectedPath, setSelectedPath] = useState<'validation' | 'mvp'>('validation');

  const handleGetStarted = () => {
    openGetStartedModal();
  };

  const validationSteps = [
    {
      icon: Target,
      title: "Structured 4-Phase Validation",
      description: "We guide you through our proven framework: Problem-Market Fit → Solution-Market Fit → Product-Market Fit → Scale-Market Fit. Each phase has clear data thresholds—you proceed when validated, pivot when needed, or kill when it won't work.",
      color: "from-[#fd6a62] to-[#fc5951]"
    },
    {
      icon: Users,
      title: "Real Customer Validation",
      description: "Conduct 15-20 customer interviews with strangers (not friends who lie). Test pricing, get paying commitments, and prove people will pay BEFORE you build. We provide scripts, templates, and expert feedback on every interview.",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: FileText,
      title: "Data-Driven Decision Making",
      description: "Track metrics weekly. 60%+ rate problem as 8/10 severity. 50%+ already spending money on solutions. 5-10 paying commitments before building. Let data override gut feelings—that's how you avoid the 90% failure rate.",
      color: "from-[#fd6a62] to-[#fc5951]"
    },
    {
      icon: Rocket,
      title: "Transition to MVP Build",
      description: "Once validated, 50% of your coaching fees are credited toward MVP development. Seamless handoff from validation to build—with validated requirements already locked in.",
      color: "from-gray-700 to-gray-900"
    }
  ];

  const mvpSteps = [
    {
      icon: Phone,
      title: "Discovery Phase ($1,000)",
      description: "2-3 weeks to define scope, prioritize features, and lock in accurate pricing. We review your validation evidence, map user flows, and create detailed requirements. This prevents scope creep and ensures we're building the right thing.",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: FileText,
      title: "Planning Phase (FREE)",
      description: "2-4 weeks to create wireframes, design architecture, and finalize technical approach. You'll see exactly what we're building before we write a single line of code. This is where we catch issues early—not after launch.",
      color: "from-[#fd6a62] to-[#fc5951]"
    },
    {
      icon: Code,
      title: "Build Phase ($5K-$20K)",
      description: "4-8 weeks of core MVP development. Modern, scalable code with responsive UI. Weekly updates and private staging link to view progress in real time. Built with 10+ years of implementation management expertise—not just coding skills.",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: GraduationCap,
      title: "Training and Handoff",
      description: "3-hour recorded Zoom session walking you through everything: using your app, managing content, handling edge cases, and planning for growth. Plus professional PDF manual and 30 days post-launch support. You leave confident, not confused.",
      color: "from-[#fd6a62] to-[#fc5951]"
    }
  ];

  const currentSteps = selectedPath === 'validation' ? validationSteps : mvpSteps;

  return (
    <>
      <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-[#fd6a62]/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#fd6a62]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M0 0h80v1H0zM0 0v80h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-gray-100 to-[#fd6a62] bg-clip-text text-transparent mb-6">
              Our Process: Validation Before Development
            </h2>
            <div className="flex justify-center items-center gap-3 mb-8">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#fd6a62]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fd6a62] animate-pulse"></div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#fd6a62] to-[#fc5951]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fc5951] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#fc5951] to-transparent"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Choose your path based on where you are in your startup journey
            </p>
          </div>

          {/* Path Selector */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedPath('validation')}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedPath === 'validation'
                    ? 'border-[#fd6a62] bg-[#fd6a62]/20 shadow-lg shadow-[#fd6a62]/20'
                    : 'border-white/20 bg-slate-800/50 hover:border-[#fd6a62]/50'
                }`}
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Target className={`w-6 h-6 ${selectedPath === 'validation' ? 'text-[#fd6a62]' : 'text-gray-400'}`} />
                  <h3 className={`text-xl font-bold ${selectedPath === 'validation' ? 'text-[#fd6a62]' : 'text-white'}`}>
                    Validation Coaching
                  </h3>
                </div>
                <p className="text-sm text-gray-300">Start here if your idea isn't validated yet</p>
                {selectedPath === 'validation' && (
                  <div className="mt-3 inline-block bg-[#fd6a62] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ RECOMMENDED
                  </div>
                )}
              </button>

              <button
                onClick={() => setSelectedPath('mvp')}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 ${
                  selectedPath === 'mvp'
                    ? 'border-white/40 bg-white/10 shadow-lg shadow-white/10'
                    : 'border-white/20 bg-slate-800/50 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Rocket className={`w-6 h-6 ${selectedPath === 'mvp' ? 'text-white' : 'text-gray-400'}`} />
                  <h3 className={`text-xl font-bold ${selectedPath === 'mvp' ? 'text-white' : 'text-white'}`}>
                    MVP Development
                  </h3>
                </div>
                <p className="text-sm text-gray-300">Already validated? Let's build it</p>
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 mb-16">
              {currentSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="group hover:shadow-2xl hover:shadow-[#fd6a62]/20 transition-all duration-500 transform hover:-translate-y-1 border border-white/10 shadow-lg bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-sm relative overflow-hidden">
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
                          <CardTitle className="text-xl font-bold text-white leading-tight mb-2">
                            {step.title}
                          </CardTitle>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-300 text-base leading-relaxed ml-20">
                        {step.description}
                      </CardDescription>
                    </CardContent>

                    {/* Connecting line for vertical flow */}
                    {index < currentSteps.length - 1 && (
                      <div className="absolute left-6 -bottom-4 z-20">
                        <div className="w-0.5 h-8 bg-gradient-to-b from-[#fd6a62]/30 to-[#fc5951]/30 ml-[22px]"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#fd6a62] rounded-full"></div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>

            {/* Combined Journey Callout */}
            {selectedPath === 'validation' && (
              <div className="bg-gradient-to-r from-[#fd6a62] to-[#fc5951] rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center gap-4 mb-4">
                    <Target className="w-8 h-8" />
                    <ArrowRight className="w-6 h-6" />
                    <Rocket className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-4">
                    Complete the Full Journey
                  </h3>
                  <p className="text-center text-lg leading-relaxed max-w-2xl mx-auto">
                    Start with Startup Lab to validate your idea, then get 50% of your coaching fees credited toward MVP development. This is the proven path to avoid building something nobody wants.
                  </p>
                </div>
              </div>
            )}

            {selectedPath === 'mvp' && (
              <div className="bg-amber-900/20 border-2 border-amber-600/40 rounded-3xl p-8 mb-12">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-900/30 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-amber-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-amber-100 mb-4">
                    Not Validated Yet?
                  </h3>
                  <p className="text-amber-200 leading-relaxed max-w-2xl mx-auto mb-6">
                    90% of startups fail because they build before validating. If you haven't completed 15+ customer interviews and gotten 5+ paying commitments, start with Validation Coaching instead.
                  </p>
                  <Button
                    variant="outline"
                    className="border-2 border-amber-400 text-amber-100 hover:bg-amber-400 hover:text-gray-900"
                    onClick={() => setSelectedPath('validation')}
                  >
                    View Validation Coaching Path
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-[#fd6a62]/20 text-[#fd6a62] border border-[#fd6a62]/40 px-6 py-3 rounded-full font-semibold">
                <CheckCircle className="w-5 h-5" />
                {selectedPath === 'validation'
                  ? 'Ready to validate your idea before building?'
                  : 'Ready to build your validated MVP?'}
              </div>
            </div>
            <Button
              size="lg"
              className="group relative bg-gradient-to-r from-[#fd6a62] to-[#fc5951] hover:from-[#fc5951] hover:to-[#fd6a62] text-white px-12 py-4 text-lg font-semibold shadow-2xl shadow-[#fd6a62]/50 hover:shadow-[#fd6a62]/70 transform hover:scale-105 transition-all duration-300 rounded-xl overflow-hidden"
              onClick={handleGetStarted}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              <span className="relative">Get Started</span>
            </Button>
          </div>
        </div>
      </section>

    </>
  );
};

export default Process;
