import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, FileText, Users, Code, Zap, GraduationCap, CheckCircle, Target, Rocket, ArrowRight } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';

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
              One sequence, start to finish: validate, design, build, hand off. Every engagement runs through
              validation first.
            </p>
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

            {/* Branch: already validated? Fast-track */}
            <div className="bg-white/5 border-2 border-white/20 rounded-3xl p-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center gap-3 mb-4">
                  <CheckCircle className="w-7 h-7 text-[#fd6a62]" />
                  <ArrowRight className="w-5 h-5 text-gray-400" />
                  <Rocket className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Already Validated? Fast-Track Your Build
                </h3>
                <p className="text-gray-300 leading-relaxed max-w-2xl mx-auto">
                  If you've already done 15+ interviews and have 5+ paying commitments, we review your evidence
                  and fast-track you to build — your validation phase becomes a quick paid review, credited
                  toward your build. It's the same path, just a shorter first leg.
                </p>
              </div>
            </div>

            {/* Validation → Build credit callout */}
            <div className="bg-gradient-to-r from-[#fd6a62] to-[#fc5951] rounded-3xl p-8 mb-12 text-white relative overflow-hidden">
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
