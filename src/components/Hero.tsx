import React from 'react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { useAppContext } from '@/contexts/AppContext';
import InlineVisual from './InlineVisual';
import heroEvidenceSvg from '@/assets/visuals/hero-evidence.svg?raw';

const Hero: React.FC = () => {
  const { openGetStartedModal } = useAppContext();

  const scrollToWhatIDo = () => {
    document.getElementById('what-i-do')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleGetStarted = () => {
    openGetStartedModal();
  };

  const proof = [
    { value: '10+', label: 'Years experience' },
    { value: '100%', label: 'Code ownership' },
    { value: 'U.S.', label: 'Based team' },
  ];

  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Quiet hairline mesh, masked out at the edges — replaces the old 10%-opacity full-bleed grid */}
      <div className="mesh" aria-hidden="true" />

      <div className="container relative mx-auto px-6 pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pb-36 lg:pt-32">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          {/* ——— Copy column: left-aligned, which reads far more current than centred hero text ——— */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-hairline bg-white/[0.04] px-4 py-1.5 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-accent2027" aria-hidden="true" />
              <span className="eyebrow">Validate first, build second</span>
            </div>

            {/* The brand coral gradient lands on the payoff phrase, not the whole
                headline — full contrast on the setup, brand punch on the promise. */}
            <h1 className="display-1 text-ink">
              Don't build your startup until you know{' '}
              <span className="text-brand-grad">people will pay for it.</span>
            </h1>

            <p className="lede mt-7">
              <span className="font-semibold text-ink">90% of startups fail</span> because they build
              something nobody wants. We validate your idea with real customers first — then build the MVP
              right.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button
                onClick={handleGetStarted}
                className="group inline-flex items-center justify-center gap-2 rounded-[var(--r-md)] btn-brand px-7 py-3.5 text-base font-semibold"
              >
                Start with validation
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 ease-signature group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </button>

              <button
                onClick={scrollToWhatIDo}
                className="group inline-flex items-center justify-center gap-2 rounded-[var(--r-md)] border border-hairline-strong bg-white/[0.03] px-7 py-3.5 text-base font-semibold text-ink transition-all duration-150 ease-signature hover:border-hairline-strong hover:bg-white/[0.07]"
              >
                Already validated? Fast-track your build
                <ArrowDown
                  className="h-4 w-4 transition-transform duration-200 ease-signature group-hover:translate-y-0.5"
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Proof strip — numbers set in the display face, labels in mono. No icon soup. */}
            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-hairline pt-7">
              {proof.map((item) => (
                <div key={item.label}>
                  <dd className="numeral text-3xl text-ink sm:text-4xl">{item.value}</dd>
                  <dt className="mt-1.5 text-xs leading-snug text-ink-subtle">{item.label}</dt>
                </div>
              ))}
            </dl>
          </div>

          {/* ——— Visual column: the single highest-impact place to add real artwork ——— */}
          <div className="relative">
            <div
              className="absolute -inset-6 rounded-panel opacity-60 blur-2xl"
              style={{
                background:
                  'radial-gradient(60% 50% at 50% 30%, rgba(253,106,98,0.14), transparent 72%)',
              }}
              aria-hidden="true"
            />
            {/* Authored at 4:5 with a transparent background — no panel or border
                around it, so the aurora reads through the glass. */}
            <InlineVisual markup={heroEvidenceSvg} className="relative" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
