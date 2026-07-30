import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Code, FileText, Video, Users, Zap, Clock, DollarSign, CheckCircle, Target, Rocket } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import SectionHeader from './SectionHeader';

const WhatIDo: React.FC = () => {
  const { openGetStartedModal } = useAppContext();

  const handleGetStarted = () => {
    openGetStartedModal();
  };

  return (
    <>
      <section id="what-i-do" className="relative py-24 sm:py-32">
        <div className="container relative mx-auto px-4 sm:px-6">
          <SectionHeader
            eyebrow="Engagements"
            title="Two paths to a successful startup"
            lede="Whether you need to validate your idea first or you're ready to build — we guide you through every step with expert coaching, clean code, and complete handoff."
            className="mb-16 sm:mb-20"
          />

          {/* Two Main Offerings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

            {/* OFFERING 1: Complete Startup Lab + MVP Package */}
            {/* Flagship card: real gradient border + coral bloom, so the primary
                offer reads as the hero object rather than one of two equals. */}
            <Card className="brand-frame edge-light relative overflow-hidden border-0">
              <div className="absolute right-0 top-0 bg-brand-grad px-4 py-1 text-sm font-bold text-white">
                ⭐ ALL-INCLUSIVE
              </div>
              <CardHeader className="bg-brand-grad-soft pb-8 pt-12">
                <div className="w-16 h-16 bg-brand-grad rounded-card flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-white text-center mb-2">
                  Complete Startup Package
                </CardTitle>
                <CardDescription className="text-center text-lg text-ink-muted">
                  Validation + Full MVP Development
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="well text-white p-6 mb-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold mb-2">Starting at $8,500</div>
                      <div className="text-sm text-ink-muted">Phased payment structure</div>
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
                      <p className="text-ink-muted"><strong className="text-white">Discovery & Research</strong> - Industry analysis & customer research (3 weeks)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#fd6a62] flex-shrink-0 mt-0.5" />
                      <p className="text-ink-muted"><strong className="text-white">Validation Coaching</strong> - 4-week guided customer validation (4 weeks)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#fd6a62] flex-shrink-0 mt-0.5" />
                      <p className="text-ink-muted"><strong className="text-white">Design & Wireframing</strong> - Complete Figma files & UI/UX (2-4 weeks)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#fd6a62] flex-shrink-0 mt-0.5" />
                      <p className="text-ink-muted"><strong className="text-white">MVP Development</strong> - Full software build with training (4-8 weeks)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#fd6a62] flex-shrink-0 mt-0.5" />
                      <p className="text-ink-muted">3-hour recorded training + PDF manual</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#fd6a62] flex-shrink-0 mt-0.5" />
                      <p className="text-ink-muted font-semibold">100% code ownership + 30 days support</p>
                    </div>
                  </div>

                  <div className="bg-[#fd6a62]/20 border border-[#fd6a62]/40 rounded-lg p-4 mb-6">
                    <p className="text-sm text-ink mb-2">
                      <strong className="text-white">Payment Structure:</strong>
                    </p>
                    <ul className="text-xs text-ink-muted space-y-1">
                      <li>• $1,000 - Discovery & Research (Day 1)</li>
                      <li>• $2,500 - Validation Coaching (After Discovery SOW)</li>
                      <li>• $5,000 - Development Start (After Validation SOW)</li>
                      <li>• Remaining balance in 2 milestone payments</li>
                    </ul>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="btn-brand w-full py-6 text-lg font-semibold"
                  onClick={handleGetStarted}
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>

            {/* OFFERING 2: MVP Development Only */}
            <Card className="relative overflow-hidden border border-hairline-strong shadow-lift bg-white/[0.032] backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-br from-white/10 to-transparent pb-8 pt-12">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-card flex items-center justify-center mx-auto mb-4">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold text-white text-center mb-2">
                  MVP Development Only
                </CardTitle>
                <CardDescription className="text-center text-lg text-ink-muted">
                  For Already Validated Ideas
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-6">
                  <div className="well text-white p-6 mb-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold mb-2">Starting at $6,000</div>
                      <div className="text-sm text-ink-muted">Phased payment structure</div>
                    </div>
                    <div className="border-t border-white/20 pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Clock className="w-4 h-4 text-[#fd6a62]" />
                        <span className="text-sm">9-19 weeks total</span>
                      </div>
                      <div className="text-xs text-ink-muted mt-2">
                        Discovery (3 wks) + Design (2-4 wks) + Build (4-8 wks) + Training
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <p className="text-ink-muted"><strong className="text-white">Discovery:</strong> Scope definition & validation review (3 weeks)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <p className="text-ink-muted"><strong className="text-white">Design & Wireframing:</strong> Complete Figma files (2-4 weeks)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <p className="text-ink-muted"><strong className="text-white">MVP Build:</strong> Full software development (4-8 weeks)</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <p className="text-ink-muted">3-hour recorded training + PDF manual</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                      <p className="text-ink-muted">100% code ownership + 30 days support</p>
                    </div>
                  </div>

                  <div className="bg-amber-900/20 border border-amber-600/40 rounded-lg p-4 mb-6">
                    <p className="text-sm text-amber-200 mb-2">
                      <strong className="text-amber-100">Prerequisites:</strong> Idea must be validated with 20+ customer interviews and 5–10 paying commitments
                    </p>
                    <p className="text-xs text-amber-300 mt-2">
                      <strong className="text-amber-100">Payment:</strong> $1,000 Discovery → $5,000 Development Start → Milestone payments
                    </p>
                  </div>
                </div>

                <Button
                  size="lg"
                  variant="outline"
                  className="w-full border-2 border-[#fd6a62] bg-white text-gray-900 hover:bg-white hover:border-[#fd6a62] hover:shadow-lg hover:shadow-[#fd6a62]/20 py-6 text-lg font-semibold transition-all duration-150 ease-signature"
                  onClick={handleGetStarted}
                >
                  Build My MVP
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Visual: what the deliverables physically look like — the manual, the
              staging build, the wireframes, shot from above on a dark surface.
              Displayed at its own 1818×865 ratio so nothing crops; width/height
              are set to hold the space before it decodes. */}
          <div className="mb-16 overflow-hidden rounded-panel border border-hairline">
            <picture>
              <source srcSet="/images/deliverables-flatlay.webp" type="image/webp" />
              <img
                src="/images/deliverables-flatlay.png"
                alt="The project deliverables laid out on a dark surface: a bound MVP Applications manual, a laptop showing the staging build's dashboard, and a tablet showing the project timeline."
                className="w-full h-auto"
                width={1818}
                height={865}
                loading="lazy"
              />
            </picture>
          </div>

          {/* What's Included in Both */}
          <div className="mb-16">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-8">
              Built on 10+ Years of Implementation Management Expertise
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <Card className="group card-lift border border-hairline bg-white/[0.032] backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-grad rounded-xl sm:rounded-card flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200 ease-signature">
                    <Code className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-white">Clean, Scalable Code</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-ink-muted text-base sm:text-lg leading-relaxed">
                    Modern, responsive UI built with best practices. Ready to scale when you're ready to grow.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group card-lift border border-hairline bg-white/[0.032] backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl sm:rounded-card flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200 ease-signature">
                    <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-white">Professional Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-ink-muted text-base sm:text-lg leading-relaxed">
                    Clear, branded PDF manual explaining how your product works, how to update it, and how to onboard your team.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="group card-lift border border-hairline bg-white/[0.032] backdrop-blur-sm">
                <CardHeader className="text-center pb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-grad rounded-xl sm:rounded-card flex items-center justify-center mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-200 ease-signature">
                    <Video className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-white">Live Training Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-ink-muted text-base sm:text-lg leading-relaxed">
                    3-hour recorded Zoom session to walk you and your team through everything. Leave confident, not confused.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center px-4">
            <Button
              size="lg"
              className="group relative bg-brand-grad hover:from-[#fc5951] hover:to-[#fd6a62] text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg font-semibold shadow-lift transform hover:scale-105 transition-all duration-150 ease-signature w-full sm:w-auto rounded-xl overflow-hidden"
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

export default WhatIDo;
