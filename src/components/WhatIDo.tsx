import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, FileText, Video, Users, Zap, Clock, DollarSign, CheckCircle, Target, Rocket } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';

const WhatIDo: React.FC = () => {
  const { openGetStartedModal } = useAppContext();

  const handleGetStarted = () => {
    openGetStartedModal();
  };

  return (
    <>
      <section id="what-i-do" className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 sm:top-20 right-5 sm:right-20 w-32 h-32 sm:w-64 sm:h-64 bg-[#fd6a62]/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-5 sm:left-20 w-40 h-40 sm:w-80 sm:h-80 bg-[#fd6a62]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M0 0h80v1H0zM0 0v80h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '80px 80px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-[#fd6a62] bg-clip-text text-transparent mb-4 sm:mb-6 px-2 leading-tight">
              One Proven Path: Validate, Then Build.
            </h2>
            <div className="flex justify-center items-center gap-3 mb-6 sm:mb-8">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#fd6a62]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fd6a62] animate-pulse"></div>
              <div className="w-16 sm:w-24 h-0.5 bg-gradient-to-r from-[#fd6a62] to-[#fc5951]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fc5951] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#fc5951] to-transparent"></div>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Every engagement starts with validation. We prove real customers will pay—then build the MVP right, with expert coaching, clean code, and complete handoff.
            </p>
          </div>

          {/* Single Offering */}
          <div className="grid grid-cols-1 gap-8 mb-16 max-w-2xl mx-auto">

            {/* OFFERING: Complete Startup Lab + MVP Package */}
            <Card className="relative overflow-hidden border-2 border-[#fd6a62] shadow-2xl shadow-[#fd6a62]/20 bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-sm">
              <div className="absolute top-0 right-0 bg-[#fd6a62] text-white px-4 py-1 text-sm font-bold">
                ⭐ ALL-INCLUSIVE
              </div>
              <CardHeader className="bg-gradient-to-br from-[#fd6a62]/20 to-transparent pb-8 pt-12">
                <div className="w-16 h-16 bg-gradient-to-br from-[#fd6a62] to-[#fc5951] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-white text-center mb-2">
                  Complete Startup Package
                </CardTitle>
                <CardDescription className="text-center text-lg text-gray-300">
                  Validation + Full MVP Development
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-gray-900 to-slate-800 text-white rounded-xl p-6 mb-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold mb-2">Starting at $22,500</div>
                      <div className="text-sm text-gray-300">Phased payment structure</div>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-[#fd6a62]" />
                        <span className="text-sm">13-23 weeks total (data-driven)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#fd6a62] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300"><strong className="text-white">Discovery & Research ($1,500)</strong> - Industry analysis & customer research (3 weeks)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#fd6a62] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300"><strong className="text-white">Validation Coaching ($3,000)</strong> - 4-week guided customer validation covering Problem-Market Fit &amp; Solution-Market Fit (4 weeks)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#fd6a62] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300"><strong className="text-white">Design & Wireframing</strong> - Complete Figma files & UI/UX (2-4 weeks)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#fd6a62] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300"><strong className="text-white">MVP Development (from $18,000)</strong> - Full software build with training, typically $18,000–$50,000 by scope (4-8 weeks)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#fd6a62] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300">3-hour recorded training + PDF manual</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#fd6a62] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 font-semibold">100% code ownership + 30 days support</p>
                    </div>
                  </div>

                  <div className="bg-[#fd6a62]/20 border border-[#fd6a62]/40 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-200 mb-2">
                      <strong className="text-white">Payment Structure:</strong>
                    </p>
                    <ul className="text-xs text-gray-300 space-y-1">
                      <li>• $1,500 - Discovery & Research (Day 1)</li>
                      <li>• $3,000 - Validation Coaching (After Discovery SOW)</li>
                      <li>• Build deposit (40% of build) at development start (After Validation SOW)</li>
                      <li>• Remaining build balance across 2 milestone payments</li>
                    </ul>
                    <p className="text-xs text-gray-400 mt-3">
                      50% of validation coaching fees ($1,500) credited toward your build.
                    </p>
                  </div>

                  {/* Already validated? Fast-track note */}
                  <div className="bg-white/5 border border-white/20 rounded-lg p-4 mb-6">
                    <p className="text-sm text-gray-200 mb-1">
                      <strong className="text-white">Already validated?</strong>
                    </p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      If you've already done 15+ interviews and have 5+ paying commitments, we review your
                      evidence and fast-track you to build — your validation phase becomes a quick paid
                      review, credited toward your build.
                    </p>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="w-full bg-[#fd6a62] hover:bg-[#fc5951] text-white py-6 text-lg font-semibold shadow-lg"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

          </div>

          {/* Partner Offers — included perks for package clients */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="border border-white/10 shadow-lg bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#fd6a62] to-[#fc5951] rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    Partner Perks Included for Package Clients
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Influence on Purpose culture quiz</strong> — understand your
                  founding team's working style before you scale it.{' '}
                  <a
                    href="https://influenceonpurpose.com/assessment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#fd6a62] underline underline-offset-2 hover:text-[#fc5951] transition-colors"
                  >
                    Take the quiz
                  </a>
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  <strong className="text-white">Discounted founder coaching through Rebekah</strong> — an
                  exclusive rate on one-on-one coaching for package clients.{' '}
                  <a
                    href="https://calendly.com/rebekah-iop/15-minute-meeting?month=2026-07"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#fd6a62] underline underline-offset-2 hover:text-[#fc5951] transition-colors"
                  >
                    Book a 15-minute intro
                  </a>
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Post-launch: Growth & Scale engagements */}
          <div className="max-w-2xl mx-auto mb-16">
            <Card className="border border-white/10 shadow-lg bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    After Launch: Growth &amp; Scale
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The package covers <strong className="text-white">Problem-Market Fit</strong> and{' '}
                  <strong className="text-white">Solution-Market Fit</strong> — the two phases that decide
                  whether you should build at all. <strong className="text-white">Product-Market Fit</strong>{' '}
                  and <strong className="text-white">Scale-Market Fit</strong> come after launch, once real
                  users are in the product, and are available as separate Growth &amp; Scale engagements.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Optional monthly support plans (post 30-day window) */}
          {/* TODO(founder): review this section's copy, plan names, and price points before launch. */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-3">
              Ongoing Support After Your First 30 Days
            </h3>
            <p className="text-center text-gray-300 max-w-2xl mx-auto mb-8 text-sm sm:text-base">
              Every build includes 30 days of post-launch support. After that, an optional monthly plan keeps
              your product maintained, monitored, and improving.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border border-white/10 shadow-lg bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-lg font-bold text-white">Essential</CardTitle>
                  <div className="text-3xl font-bold text-white mt-2">$49<span className="text-base font-normal text-gray-400">/mo</span></div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed text-center">
                    Hosting checks, dependency and security updates, uptime monitoring, email support.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border-2 border-[#fd6a62] shadow-lg shadow-[#fd6a62]/20 bg-gradient-to-br from-slate-800/90 to-gray-800/90 backdrop-blur-sm">
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-lg font-bold text-white">Growth</CardTitle>
                  <div className="text-3xl font-bold text-white mt-2">$149<span className="text-base font-normal text-gray-400">/mo</span></div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed text-center">
                    Everything in Essential, plus a monthly small-change allowance, bug fixes, and a
                    quarterly product review.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="border border-white/10 shadow-lg bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-3">
                  <CardTitle className="text-lg font-bold text-white">Priority</CardTitle>
                  <div className="text-3xl font-bold text-white mt-2">$399<span className="text-base font-normal text-gray-400">/mo</span></div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-sm leading-relaxed text-center">
                    Everything in Growth, plus priority response times and a larger monthly development
                    allowance.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
            <p className="text-center text-gray-400 text-sm mt-6">
              Running something larger? <span className="text-white font-semibold">Enterprise</span> support is
              scoped and priced to fit.
            </p>
          </div>

          {/* What's Included */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8">
              Built on 10+ Years of Implementation Management Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="group hover:shadow-2xl hover:shadow-[#fd6a62]/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/10 shadow-lg bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#fd6a62] to-[#fc5951] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-white">Clean, Scalable Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Modern, responsive UI built with best practices. Ready to scale when you're ready to grow.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 transform hover:-translate-y-2 border border-white/10 shadow-lg bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-white">Professional Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Clear, branded PDF manual explaining how your product works, how to update it, and how to onboard your team.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-2xl hover:shadow-[#fd6a62]/20 transition-all duration-500 transform hover:-translate-y-2 border border-white/10 shadow-lg bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#fd6a62] to-[#fc5951] rounded-xl sm:rounded-2xl flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Video className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-white">Live Training Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    3-hour recorded Zoom session to walk you and your team through everything. Leave confident, not confused.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center px-4">
            <Button
              size="lg"
              className="group relative bg-gradient-to-r from-[#fd6a62] to-[#fc5951] hover:from-[#fc5951] hover:to-[#fd6a62] text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-2xl shadow-[#fd6a62]/50 hover:shadow-[#fd6a62]/70 transform hover:scale-105 transition-all duration-300 w-full sm:w-auto rounded-xl overflow-hidden"
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

export default WhatIDo;
