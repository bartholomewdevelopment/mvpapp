import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, FileText, Users, Code, Zap, GraduationCap, CheckCircle, Target, Rocket, ArrowRight } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import SectionHeader from './SectionHeader';
import InlineVisual from './InlineVisual';
import timelineSvg from '@/assets/visuals/process-timeline.svg?raw';

const Process: React.FC = () => {
  const { openGetStartedModal } = useAppContext();

  const handleGetStarted = () => {
    openGetStartedModal();
  };

  const steps = [
    {
      icon: Phone,
      title: "Discovery & Research ($1,500)",
      description: "3 weeks of industry analysis, customer research, and competitive landscape work. We map who your customer actually is and where the real problem lives. Deliverable: a Statement of Work with findings and recommendations.",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: Target,
      title: "Validation Coaching ($3,000)",
      description: "4 weeks of structured validation covering the first two phases of our framework: Problem-Market Fit → Solution-Market Fit. Each phase has clear data thresholds—you proceed when validated, pivot when needed, or kill it when it won't work. Product-Market Fit and Scale-Market Fit come after launch as separate Growth & Scale engagements.",
      color: "from-[#fd6a62] to-[#fc5951]"
    },
    {
      icon: Users,
      title: "Real Customer Evidence",
      description: "Conduct 15-20 customer interviews with strangers (not friends who lie). Test pricing, get paying commitments, and prove people will pay BEFORE you build. We provide scripts, templates, and expert feedback on every interview. The thresholds are explicit: 60%+ rate the problem 8/10 or higher on severity, 50%+ already spend money trying to solve it, and 5-10 paying commitments before a line of code is written.",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: FileText,
      title: "Design & Wireframing (included)",
      description: "2-4 weeks to create wireframes, design the architecture, and finalize the technical approach. You'll see exactly what we're building before we write a single line of code. This is where we catch issues early—not after launch.",
      color: "from-[#fd6a62] to-[#fc5951]"
    },
    {
      icon: Code,
      title: "MVP Build (from $18,000)",
      description: "4-8 weeks of core MVP development, typically $18,000–$50,000 depending on scope. Modern, scalable code with a responsive UI. Weekly updates and a private staging link to watch progress in real time. Built with 10+ years of implementation management expertise—not just coding skills.",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: GraduationCap,
      title: "Training and Handoff",
      description: "3-hour recorded Zoom session walking you through everything: using your app, managing content, handling edge cases, and planning for growth. Plus a professional PDF manual and 30 days post-launch support. You leave confident, not confused.",
      color: "from-[#fd6a62] to-[#fc5951]"
    }
  ];

  const currentSteps = steps;

  return (
    <>
      <section className="relative py-24 sm:py-32">
        <div className="container relative mx-auto px-6">
          <SectionHeader
            eyebrow="How it works"
            title="Our process: validation before development"
            lede="One sequence, start to finish: validate, design, build, hand off. Every engagement runs through validation first."
            className="mb-16 sm:mb-20"
          />

          {/* The timeline diagram carries the method better than the prose does.
              Kept outside the max-w-4xl column: its small type is 16px in a 1600px
              canvas, so below ~1100px of display width the labels fall under 11px.
              Narrow viewports scroll it rather than shrink it. */}
          <div className="mb-16 -mx-6 overflow-x-auto px-6 sm:mx-0 sm:px-0">
            <InlineVisual markup={timelineSvg} className="min-w-[1100px]" />
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8 mb-16">
              {currentSteps.map((step, index) => {
                const IconComponent = step.icon;
                return (
                  <Card key={index} className="group hover:shadow-lift-high transition-all duration-200 ease-signature transform hover:-translate-y-1 border border-hairline shadow-lg bg-white/[0.032] backdrop-blur-sm relative overflow-hidden">
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

            {/* Branch: already validated? Fast-track */}
            <div className="bg-white/5 border border-hairline-strong rounded-panel p-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                  <CheckCircle className="w-7 h-7 text-[#fd6a62]" />
                  <ArrowRight className="w-5 h-5 text-ink-subtle" />
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Already Validated? Fast-Track Your Build
                </h3>
                <p className="text-ink-muted leading-relaxed max-w-2xl mx-auto">
                  If you've already done 15+ interviews and have 5+ paying commitments, we review your evidence
                  and fast-track you to build — your validation phase becomes a quick paid review, credited
                  toward your build. It's the same path, just a shorter first leg.
                </p>
              </div>
            </div>

            {/* Validation → Build credit callout */}
            <div className="bg-brand-grad rounded-panel p-8 mb-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <Target className="w-8 h-8" />
                  <ArrowRight className="w-6 h-6" />
                  <Rocket className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-center mb-4">
                  Validation Pays for Itself
                </h3>
                <p className="text-center text-lg leading-relaxed max-w-2xl mx-auto">
                  50% of your validation coaching fees ($1,500) are credited toward your MVP build. And if the
                  data says stop, you've spent $4,500 finding out—not $50,000 building something nobody wants.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="mb-8">
              <div className="inline-flex items-center gap-2 bg-[#fd6a62]/20 text-[#fd6a62] border border-[#fd6a62]/40 px-6 py-3 rounded-full font-semibold">
                <CheckCircle className="w-5 h-5" />
                Ready to validate your idea before building?
              </div>
            </div>
            <Button
              size="lg"
              className="btn-brand px-12 py-4 text-lg font-semibold"
              onClick={handleGetStarted}
            >
              <span className="relative">Get Started</span>
            </Button>
          </div>
        </div>
      </section>

    </>
  );
};

export default Process;
