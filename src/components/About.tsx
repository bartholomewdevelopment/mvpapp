import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Target, Rocket, Calendar } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';

const About: React.FC = () => {
  const { openGetStartedModal } = useAppContext();

  const handleScheduleCall = () => {
    openGetStartedModal();
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#fd6a62]/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#fd6a62]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Cpath d='M0 0h80v1H0zM0 0v80h1V0z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Main headline */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-[#fd6a62] bg-clip-text text-transparent mb-8 leading-tight">
              Your Startup Partner From Day One
            </h2>
            <div className="flex justify-center items-center gap-3 mb-8">
              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-[#fd6a62]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fd6a62] animate-pulse"></div>
              <div className="w-24 h-0.5 bg-gradient-to-r from-[#fd6a62] to-[#fc5951]"></div>
              <div className="w-2 h-2 rounded-full bg-[#fc5951] animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-[#fc5951] to-transparent"></div>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              From clear scopes to simple code that scales, we help founders skip the chaos and build what really matters. No fluff. Just smart software.
            </p>
          </div>

          {/* Two column content */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            <Card className="group hover:shadow-2xl hover:shadow-[#fd6a62]/20 transition-all duration-500 border border-white/10 shadow-lg bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#fd6a62] to-[#fc5951] rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-[#fd6a62]/50">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Why Us?</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  For over 10 years, we've trained teams and led technical projects—both in-person and remotely—under real-world pressure. We've implemented enterprise software for dealerships, rescued failing rollouts, and served as the point of contact for critical go-lives. But we've also spent nights and weekends in the code, building applications from scratch—frontend to backend—with a focus on simplicity, usability, and scale.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  When we launched Bartholomew Development, we combined both worlds: the strategy and systems thinking of implementation with the precision and creativity of full-stack development. We'd seen too many projects fail from unclear scopes, bad communication, and off-the-shelf tech that didn't scale. So we set out to build something better—from day one.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl hover:shadow-[#fd6a62]/20 transition-all duration-500 border border-white/10 shadow-lg bg-gradient-to-br from-slate-800/80 to-gray-800/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-700 to-gray-900 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">How We Help Our Clients</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  We build clean, scalable MVPs for entrepreneurs who want a fast, frustration-free launch. We start with strategy, build only what matters, and wrap it all with live Zoom training and a custom user manual. You don't just get software—you get clarity, control, and confidence.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Need help before or after launch? We offer focused add-ons like customer development interviews and extra features to keep your momentum going. Everything we do is built to help you launch smarter and grow faster.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to action section */}
          <div className="bg-gradient-to-r from-slate-800 to-gray-800 border border-white/10 rounded-3xl p-8 lg:p-12 text-center relative overflow-hidden mb-16">
            <div className="absolute inset-0 bg-gradient-to-r from-[#fd6a62]/10 to-[#fc5951]/10"></div>
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#fd6a62] to-[#fc5951] rounded-2xl flex items-center justify-center shadow-lg shadow-[#fd6a62]/50">
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
                  className="group relative bg-gradient-to-r from-[#fd6a62] to-[#fc5951] hover:from-[#fc5951] hover:to-[#fd6a62] text-white px-8 sm:px-12 py-4 text-base sm:text-lg font-semibold shadow-2xl shadow-[#fd6a62]/50 hover:shadow-[#fd6a62]/70 transform hover:scale-105 transition-all duration-300 rounded-xl w-full sm:w-auto overflow-hidden"
                  onClick={handleScheduleCall}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-2 whitespace-nowrap">
                    <Calendar className="w-5 h-5" />
                    Schedule a Discovery Call
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
              <div className="relative mx-auto lg:mx-0">
                {/* Glow behind photo */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#fd6a62]/30 to-[#fc5951]/20 rounded-3xl blur-2xl opacity-60"></div>
                {/* Diagonal accent line */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border-t-2 border-l-2 border-[#fd6a62]/40 rounded-tl-3xl"></div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 border-b-2 border-r-2 border-[#fc5951]/40 rounded-br-3xl"></div>

                {/* Photo container */}
                <div className="relative w-64 h-80 sm:w-72 sm:h-[22rem] rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/10">
                  <img
                    src="/images/joseph-bartholomew.jpg"
                    alt="Joseph Bartholomew - Founder of MVP Applications"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
                  {/* Name on photo */}
                  <div className="absolute bottom-4 left-5 right-5">
                    <h4 className="text-xl font-bold text-white leading-tight">Joseph Bartholomew</h4>
                    <p className="text-[#fd6a62] font-semibold text-sm mt-0.5">Founder & Lead Developer</p>
                  </div>
                </div>

                {/* Floating stat badge - top right */}
                <div className="absolute -top-3 -right-3 sm:-right-5 bg-gradient-to-br from-[#fd6a62] to-[#fc5951] rounded-xl px-4 py-2.5 shadow-lg shadow-[#fd6a62]/40 z-10">
                  <p className="text-white font-bold text-lg leading-none">10+</p>
                  <p className="text-white/80 text-[10px] font-medium uppercase tracking-wider">Years</p>
                </div>

                {/* Floating stat badge - bottom left */}
                <div className="absolute -bottom-12 -left-3 sm:-left-5 bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 rounded-xl px-4 py-2.5 shadow-lg z-10">
                  <p className="text-white font-bold text-lg leading-none">100%</p>
                  <p className="text-gray-400 text-[10px] font-medium uppercase tracking-wider">U.S. Based</p>
                </div>
              </div>

              {/* Bio side */}
              <div className="text-center lg:text-left">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fd6a62] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#fd6a62]"></span>
                  </span>
                  <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">Meet the Founder</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  Built for founders,<br />
                  <span className="bg-gradient-to-r from-[#fd6a62] to-[#fc5951] bg-clip-text text-transparent">by a founder.</span>
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0">
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
                      className="px-4 py-1.5 rounded-full text-sm font-medium bg-white/[0.06] border border-white/10 text-gray-300"
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
                    className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="w-px h-8 bg-white/20"></div>
                  <img
                    src="/images/bartholomew-dev-logo.png"
                    alt="Bartholomew Development"
                    className="h-6 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
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
