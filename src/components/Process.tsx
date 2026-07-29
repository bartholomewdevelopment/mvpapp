import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, FileText, Users, Code, Zap, GraduationCap, CheckCircle, Target, Rocket, ArrowRight } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import SectionHeader from './SectionHeader';
import VisualSlot from './VisualSlot';

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
      <section className="relative py-24 sm:py-32">
        <div className="container relative mx-auto px-6">
          <SectionHeader
            eyebrow="How it works"
            title="Our process: validation before development"
            lede="Choose your path based on where you are in your startup journey."
            className="mb-16 sm:mb-20"
          />

          {/* Path Selector */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => setSelectedPath('validation')}
                className={`p-6 rounded-card border-2 transition-all duration-150 ease-signature ${
                  selectedPath === 'validation'
                    ? 'border-[#fd6a62] bg-[#fd6a62]/20 shadow-lg shadow-[#fd6a62]/20'
                    : 'border-white/20 bg-slate-800/50 hover:border-[#fd6a62]/50'
                }`}
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Target className={`w-6 h-6 ${selectedPath === 'validation' ? 'text-[#fd6a62]' : 'text-ink-subtle'}`} />
                  <h3 className={`text-xl font-bold ${selectedPath === 'validation' ? 'text-[#fd6a62]' : 'text-white'}`}>
                    Validation Coaching
                  </h3>
                </div>
                <p className="text-sm text-ink-muted">Start here if your idea isn't validated yet</p>
                {selectedPath === 'validation' && (
                  <div className="mt-3 inline-block bg-[#fd6a62] text-white px-3 py-1 rounded-full text-xs font-semibold">
                    ⭐ RECOMMENDED
                  </div>
                )}
              </button>

              <button
                onClick={() => setSelectedPath('mvp')}
                className={`p-6 rounded-card border-2 transition-all duration-150 ease-signature ${
                  selectedPath === 'mvp'
                    ? 'border-white/40 bg-white/10 shadow-lg shadow-white/10'
                    : 'border-white/20 bg-slate-800/50 hover:border-white/30'
                }`}
              >
                <div className="flex items-center justify-center gap-3 mb-2">
                  <Rocket className={`w-6 h-6 ${selectedPath === 'mvp' ? 'text-white' : 'text-ink-subtle'}`} />
                  <h3 className={`text-xl font-bold ${selectedPath === 'mvp' ? 'text-white' : 'text-white'}`}>
                    MVP Development
                  </h3>
                </div>
                <p className="text-sm text-ink-muted">Already validated? Let's build it</p>
              </button>
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Visual: the process is the product here — it deserves a real diagram */}
            <div className="mb-14">
              <VisualSlot
                kind="Diagram"
                ratio="aspect-[16/7]"
                label="The validation → build timeline"
                note="A horizontal timeline with the four phases, their durations, and the go/pivot/kill decision gate after validation. Show the data thresholds as small annotations on the gate. This is the single most persuasive graphic on the site: it makes the phased, evidence-gated method legible in one glance instead of five paragraphs."
              />
            </div>

            <div className="space-y-8 mb-16">
              {currentSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="group card-lift border border-hairline bg-white/[0.032] backdrop-blur-sm relative overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center gap-4">
                          <span className={`bg-gradient-to-r ${step.color} text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform duration-200 ease-signature`}>
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
                      <CardDescription className="text-ink-muted text-base leading-relaxed ml-20">
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
              <div className="bg-brand-grad rounded-panel p-8 mb-12 text-white relative overflow-hidden">
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
              <div className="bg-amber-900/20 border-2 border-amber-600/40 rounded-panel p-8 mb-12">
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
              className="group relative bg-brand-grad hover:from-[#fc5951] hover:to-[#fd6a62] text-white px-12 py-4 text-lg font-semibold shadow-lift transform hover:scale-105 transition-all duration-150 ease-signature rounded-xl overflow-hidden"
              onClick={handleGetStarted}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0"></div>
              <span className="relative">Get Started</span>
            </Button>
          </div>
        </div>
      </section>

    </>
  );
};

export default Process;
