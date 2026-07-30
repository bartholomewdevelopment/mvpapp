import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Rocket, Calendar } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import SectionHeader from './SectionHeader';

const About: React.FC = () => {
  const { openGetStartedModal } = useAppContext();

  const handleScheduleCall = () => {
    openGetStartedModal();
  };

  return (
    <section className="relative py-24 sm:py-32">
      <div className="container relative mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            eyebrow="Who we are"
            title="Your startup partner from day one"
            lede="From clear scopes to simple code that scales, we help founders skip the chaos and build what really matters. No fluff. Just smart software."
            className="mb-16 sm:mb-24"
          />

          {/* Two column content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <Card className="group card-lift border border-hairline bg-white/[0.032] backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-brand-grad rounded-card flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200 ease-signature shadow-lift">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Why Us?</h3>
                </div>
                <p className="text-ink-muted text-lg leading-relaxed mb-6">
                  For over 10 years, we've trained teams and led technical projects—both in-person and remotely—under real-world pressure. We've implemented enterprise software for dealerships, rescued failing rollouts, and served as the point of contact for critical go-lives. But we've also spent nights and weekends in the code, building applications from scratch—frontend to backend—with a focus on simplicity, usability, and scale.
                </p>
                <p className="text-ink-muted text-lg leading-relaxed mb-6">
                  When we launched Bartholomew Development, we combined both worlds: the strategy and systems thinking of implementation with the precision and creativity of full-stack development. We'd seen too many projects fail from unclear scopes, bad communication, and off-the-shelf tech that didn't scale. So we set out to build something better—from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="group card-lift border border-hairline bg-white/[0.032] backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-card flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-200 ease-signature shadow-lg">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">How We Help Our Clients</h3>
                </div>
                <p className="text-ink-muted text-lg leading-relaxed mb-4">
                  We build clean, scalable MVPs for entrepreneurs who want a fast, frustration-free launch. We start with strategy, build only what matters, and wrap it all with live Zoom training and a custom user manual. You don't just get software—you get clarity, control, and confidence.
                </p>
                <p className="text-ink-muted text-lg leading-relaxed">
                  Need help before or after launch? We offer focused add-ons like customer development interviews and extra features to keep your momentum going. Everything we do is built to help you launch smarter and grow faster.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to action section */}
          <div className="bg-white/[0.03] border border-hairline rounded-panel p-8 lg:p-12 text-center relative overflow-hidden mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[#fd6a62]/10 to-[#fc5951]/10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-brand-grad rounded-card flex items-center justify-center shadow-lift">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">What's Next?</h3>
              <p className="text-lg sm:text-xl text-ink-muted mb-8 max-w-3xl mx-auto leading-relaxed px-4">
                If you're ready to build your MVP, start where everyone starts: a free 60-minute Pre-Validation. Like getting pre-approved before a lender's real decision, it's the gate you pass before paid Validation begins — we'll pressure-test your idea and get you clear on what to build first.
              </p>
              <div className="px-4">
                <Button
                  size="lg"
                  className="group relative bg-brand-grad hover:from-[#fc5951] hover:to-[#fd6a62] text-white px-8 sm:px-12 py-4 text-base sm:text-lg font-semibold shadow-lift transform hover:scale-105 transition-all duration-150 ease-signature rounded-xl w-full sm:w-auto overflow-hidden"
                  onClick={handleScheduleCall}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0"></div>
                  <span className="relative flex items-center justify-center gap-2 whitespace-nowrap">
                    <Calendar className="w-5 h-5" />
                    Book Free Pre-Validation
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* Founder spotlight */}
          <div className="relative">
            {/* Large watermark */}
            <div className="absolute -top-10 right-0 text-[12rem] font-black text-white/[0.02] leading-none select-none pointer-events-none hidden lg:block">
              JB
            </div>

            <div className="grid lg:grid-cols-[340px_1fr] gap-10 lg:gap-16 items-center">
              {/* Photo side */}
              <div className="mx-auto w-64 sm:w-72 lg:mx-0">
                <div className="relative">
                  {/* Glow behind photo */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-[#fd6a62]/30 to-[#fc5951]/20 rounded-panel blur-2xl opacity-60"></div>
                  {/* Diagonal accent line */}
                  <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#fd6a62]/40 rounded-tl-3xl"></div>
                  <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#fc5951]/40 rounded-br-3xl"></div>

                  {/* Photo container — the portrait ships as shot: square, uncropped,
                      full colour. No duotone and no scrim over the face, so the name
                      sits below the frame rather than on top of it. */}
                  <div className="relative aspect-square w-full rounded-card overflow-hidden shadow-lift-high shadow-black/40 border border-hairline">
                    <img
                      src="/images/portrait-joseph.jpeg"
                      alt="Joseph Bartholomew - Founder of MVP Applications"
                      className="w-full h-full object-cover"
                      width={1024}
                      height={1024}
                      loading="lazy"
                    />
                  </div>

                  {/* Floating stat badge - top right */}
                  <div className="absolute -top-3 -right-3 sm:-right-5 bg-brand-grad rounded-xl px-4 py-2.5 shadow-lift z-10">
                    <p className="text-white font-bold text-lg leading-none">10+</p>
                    <p className="text-white/80 text-[10px] font-medium uppercase tracking-wider">Years</p>
                  </div>

                  {/* Floating stat badge - bottom left */}
                  <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-gradient-to-br from-slate-700 to-slate-800 border border-hairline rounded-xl px-4 py-2.5 shadow-lg z-10">
                    <p className="text-white font-bold text-lg leading-none">100%</p>
                    <p className="text-ink-subtle text-[10px] font-medium uppercase tracking-wider">U.S. Based</p>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="text-xl font-bold text-white leading-tight">Joseph Bartholomew</h4>
                  <p className="text-[#fd6a62] font-semibold text-sm mt-0.5">Founder &amp; Lead Developer</p>
                </div>
              </div>

              {/* Bio side */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-5">
                  <span className="relative flex h-2 w-2">
                    <span className=" absolute inline-flex h-full w-full rounded-full bg-[#fd6a62] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fd6a62]"></span>
                  </span>
                  <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider">Meet the Founder</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  Built for founders,<br />
                  <span className="bg-brand-grad bg-clip-text text-transparent">by a founder.</span>
                </h3>

                <p className="text-ink-muted text-lg leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
                  I've spent a decade leading enterprise software rollouts, training hundreds of non-technical users, and rescuing failing go-lives. Now I channel that same discipline into helping startup founders validate their ideas and ship real products — fast.
                </p>

                {/* Credential pills */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                  {[
                    'Full-Stack Developer',
                    'Implementation Expert',
                    'Validation Coach',
                    'MVP Specialist',
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/[0.06] border border-hairline text-ink-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Company logos / affiliation */}
                <div className="flex items-center justify-center lg:justify-start gap-4">
                  <img
                    src="/images/mvp-applications-logo.png"
                    alt="MVP Applications"
                    className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-150 ease-signature"
                  />
                  <div className="w-px h-8 bg-white/20"></div>
                  <img
                    src="/images/bartholomew-dev-logo.png"
                    alt="Bartholomew Development"
                    className="h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-150 ease-signature"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
