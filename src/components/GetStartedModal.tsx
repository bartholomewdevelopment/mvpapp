import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Step4, Step5, Step6, Step7 } from './GetStartedModalSteps';
import { Choices, StepHeading, Step } from './GetStartedModalUI';
import { sendEmailNotification } from '@/lib/emailService';
import { AlertCircle, CheckCircle, ArrowRight, ArrowLeft, Target, Rocket, X } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TOTAL_STEPS = 10;

/** Header names the step you're on, so the counter isn't the only orientation. */
const STEP_LABELS = [
  'Your email',
  'Direction',
  'Validation',
  'Recommendation',
  'Funding',
  'Traction',
  'Budget',
  'Objective',
  'About you',
  'Schedule',
];

const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [emailSent, setEmailSent] = useState(false);
  const [recommendedPath, setRecommendedPath] = useState<'startup-lab' | 'mvp' | null>(null);
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);
  const [formData, setFormData] = useState({
    user_email: '',
    interested_in: '',
    validation_status: '',
    planning_stage: '',
    funding_status: '',
    active_users: '',
    budget: '',
    main_goal: '',
    role: '',
    timeline: '',
    user_name: '',
    user_phone: ''
  });

  // Load Calendly script when step 10 is reached
  useEffect(() => {
    if (step === 10 && !calendlyLoaded) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      script.onload = () => setCalendlyLoaded(true);
      document.body.appendChild(script);

      return () => {
        // Cleanup script on unmount if needed
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        if (existingScript && !calendlyLoaded) {
          document.body.removeChild(existingScript);
        }
      };
    }
  }, [step, calendlyLoaded]);

  const handleNext = () => {
    if (step === 1 && formData.user_email && !emailSent && formData.user_email.includes('@')) {
      sendEmailNotification({ user_email: formData.user_email }, 'initial');
      setEmailSent(true);
    }

    // Determine recommended path based on validation status
    if (step === 3 && formData.validation_status) {
      if (formData.validation_status === 'not-validated' ||
          formData.validation_status === 'friends-family' ||
          formData.validation_status === 'few-interviews') {
        setRecommendedPath('startup-lab');
      } else if (formData.validation_status === 'validated-committed' ||
                 formData.validation_status === 'validated-paying') {
        setRecommendedPath('mvp');
      }
    }

    // Send notification before moving to Calendly step
    if (step === 9) {
      sendEmailNotification(formData, 'progress');
    }

    if (step < 10) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    if (step > 1 && step < 10 && formData.user_email) {
      sendEmailNotification(formData, 'progress');
    }
    setStep(1);
    setEmailSent(false);
    setRecommendedPath(null);
    setCalendlyLoaded(false);
    setFormData({
      user_email: '',
      interested_in: '',
      validation_status: '',
      planning_stage: '',
      funding_status: '',
      active_users: '',
      budget: '',
      main_goal: '',
      role: '',
      timeline: '',
      user_name: '',
      user_phone: ''
    });
    onClose();
  };

  /**
   * The recommendation panel after validation. Both outcomes use coral rather
   * than coral-vs-green: the design system is monochrome plus one accent, and
   * the two results are already distinguished by what they say.
   */
  const renderRecommendation = (
    eyebrow: string,
    title: string,
    body: string,
    points: string[],
  ) => (
    <Step>
      <div className="rounded-[var(--r-lg)] border border-[color:var(--accent)] bg-[color:var(--p-accent-wash)] p-6">
        <p className="paper-eyebrow" style={{ color: 'var(--p-accent-ink)' }}>{eyebrow}</p>
        <h3 className="paper-title mt-3 text-[1.375rem]">{title}</h3>
        <p className="paper-hint mt-3 text-[0.9375rem] leading-relaxed">{body}</p>

        <ul className="mt-6 space-y-px border-t border-[color:var(--p-hairline)] pt-1">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 border-b border-[color:var(--p-hairline)] py-3 last:border-b-0"
            >
              <CheckCircle
                className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--accent)]"
                aria-hidden="true"
              />
              <span className="text-[0.9375rem] leading-snug text-[color:var(--p-ink)]">{point}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="paper-hint mt-5 text-sm">
        Continue to add a few details and book your consultation call.
      </p>
    </Step>
  );

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Step>
            <StepHeading
              eyebrow="Step one"
              title="Let's start with your email."
              hint="We'll use it to send your recommendation and confirm your call — nothing else."
            />
            <div className="space-y-2.5">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-[color:var(--p-ink)]"
              >
                Email address
              </Label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={formData.user_email}
                onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                placeholder="your@email.com"
                className="field"
              />
            </div>
          </Step>
        );

      case 2:
        return (
          <Step>
            <StepHeading
              eyebrow="Direction"
              title="Which option are you interested in?"
              hint="Choose the path that fits your current stage."
            />
            <Choices
              name="interested_in"
              value={formData.interested_in}
              onChange={(value) => setFormData({ ...formData, interested_in: value })}
              options={[
                {
                  value: 'startup-lab',
                  label: 'BartDev Startup Lab',
                  detail: 'Validate my idea before building',
                  icon: <Target className="h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />,
                },
                {
                  value: 'mvp-dev',
                  label: 'MVP Development',
                  detail: 'My idea is already validated',
                  icon: <Rocket className="h-4 w-4 text-[color:var(--accent)]" aria-hidden="true" />,
                },
                {
                  value: 'not-sure',
                  label: 'Not sure',
                  detail: 'Help me decide which path is right',
                  icon: (
                    <AlertCircle
                      className="h-4 w-4 text-[color:var(--p-ink-subtle)]"
                      aria-hidden="true"
                    />
                  ),
                },
              ]}
            />
          </Step>
        );

      case 3:
        return (
          <Step>
            <StepHeading
              eyebrow="Validation"
              title="Have you validated your idea with real customers?"
              hint="This is the answer that decides which path we recommend."
            />
            <Choices
              name="validation_status"
              value={formData.validation_status}
              onChange={(value) => setFormData({ ...formData, validation_status: value })}
              options={[
                { value: 'not-validated', label: "No — I haven't talked to potential customers yet" },
                { value: 'friends-family', label: 'Only validated with friends/family' },
                { value: 'few-interviews', label: 'Did a few interviews (less than 20 strangers)' },
                { value: 'validated-committed', label: '20+ interviews with strangers + 5–10 paying commitments' },
                { value: 'validated-paying', label: '20+ interviews + paying customers already using a prototype' },
              ]}
            />
          </Step>
        );

      case 4:
        if (recommendedPath === 'startup-lab') {
          return renderRecommendation(
            'Our recommendation',
            'Start with the BartDev Startup Lab',
            'Based on your answers, your idea needs validation before building. This is the single best way to avoid spending $50K+ on something nobody wants.',
            [
              '8–16 weeks of structured validation coaching',
              'Prove people will pay before you build',
              '50% of coaching fees credited toward your MVP build',
            ],
          );
        }
        if (recommendedPath === 'mvp') {
          return renderRecommendation(
            'Our recommendation',
            "You're ready to fast-track your build",
            'Based on your validation work, we review your evidence and fast-track you to build. Your validation phase becomes a quick paid review, credited toward the build.',
            [
              '6–12 weeks from discovery to launch',
              'Professional training and documentation included',
              '100% code ownership + 30 days support',
              'Investment: $18,000–$50,000 based on scope',
            ],
          );
        }
        return (
          <Step>
            <StepHeading
              eyebrow="Planning"
              title="Where are you in the planning process?"
            />
            <Choices
              name="planning_stage"
              value={formData.planning_stage}
              onChange={(value) => setFormData({ ...formData, planning_stage: value })}
              options={[
                { value: 'initial-concept', label: 'Just an initial concept — no clear plan yet' },
                { value: 'problem-defined', label: 'Problem defined, but solution still in brainstorm' },
                { value: 'solution-defined', label: 'Solution defined — working on feature list' },
                { value: 'wireframes-created', label: 'Wireframes or prototypes created' },
                { value: 'requirements-complete', label: 'Detailed requirements and user stories complete' },
              ]}
            />
          </Step>
        );

      case 5:
        return (
          <Step>
            <StepHeading eyebrow="Funding" title="What's your current funding status?" />
            <Choices
              name="funding_status"
              value={formData.funding_status}
              onChange={(value) => setFormData({ ...formData, funding_status: value })}
              options={[
                { value: 'idea-only', label: 'Idea only — no funding yet' },
                { value: 'bootstrapped', label: 'Bootstrapped (personal savings, friends & family)' },
                { value: 'pre-seed', label: 'Pre-seed round in progress or secured (up to ~$250K)' },
                { value: 'seed', label: 'Seed round or beyond ($250K+)' },
              ]}
            />
          </Step>
        );

      case 6:
        return <Step4 formData={formData} setFormData={setFormData} />;
      case 7:
        return <Step5 formData={formData} setFormData={setFormData} />;
      case 8:
        return <Step6 formData={formData} setFormData={setFormData} />;
      case 9:
        return <Step7 formData={formData} setFormData={setFormData} />;
      case 10:
        return (
          <Step>
            <div className="mb-6 flex items-start justify-between gap-6">
              <div>
                <p className="paper-eyebrow mb-3">Last step</p>
                <h3 className="paper-title text-[1.5rem] sm:text-[1.75rem]">
                  Schedule your discovery call
                </h3>
                <p className="paper-hint mt-2.5 text-[0.9375rem] leading-relaxed">
                  Pick a time that works for you. We'll have your answers in front of us.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="-mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--p-hairline-strong)] transition-colors duration-150 hover:bg-[color:var(--p-surface)]"
                aria-label="Close"
              >
                <X className="h-4 w-4 text-[color:var(--p-ink-muted)]" aria-hidden="true" />
              </button>
            </div>

            {/* Calendly Embed */}
            <div
              className="calendly-inline-widget overflow-hidden rounded-[var(--r-md)] border border-[color:var(--p-hairline)]"
              data-url={`https://calendly.com/joseph-bartholomewdevelopment/idea-sprint?name=${encodeURIComponent(formData.user_name || '')}&email=${encodeURIComponent(formData.user_email || '')}`}
              style={{ minWidth: '320px', height: '700px' }}
            />
          </Step>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.user_email.trim() !== '';
      case 2: return formData.interested_in !== '';
      case 3: return formData.validation_status !== '';
      case 4: return recommendedPath !== null || formData.planning_stage !== '';
      case 5: return formData.funding_status !== '';
      case 6: return formData.active_users !== '';
      case 7: return formData.budget !== '';
      case 8: return formData.main_goal !== '';
      case 9: return formData.role !== '';
      case 10: return false; // Hide Next button on Calendly step
      default: return true;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      {/* hideCloseButton: the header renders its own close control (and the
          scheduling step renders one inline), so the built-in one would stack
          on top of it. */}
      <DialogContent
        hideCloseButton
        className={`paper ${step === 10 ? 'sm:max-w-[900px]' : 'sm:max-w-[620px]'} max-h-[90vh] max-w-[95vw] overflow-hidden border-0 bg-white p-0 gap-0 shadow-2xl`}
      >
        {/* ——— Header: one flat plane of the site's own canvas colour, not a
            three-stop gradient with a coral wash over it. The step is named,
            counted in mono, and tracked on ten discrete segments. ——— */}
        <div className="relative bg-[color:var(--canvas)] px-6 pb-5 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="eyebrow !text-[0.625rem]">
                Step{' '}
                <span className="tabular-nums text-[color:var(--accent-ink)]">
                  {String(step).padStart(2, '0')}
                </span>{' '}
                / {TOTAL_STEPS}
              </p>
              <DialogTitle className="mt-2 truncate font-display text-lg font-semibold tracking-[-0.02em] text-ink">
                {STEP_LABELS[step - 1]}
              </DialogTitle>
            </div>

            <button
              onClick={handleClose}
              className="-mr-1 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline transition-colors duration-150 hover:bg-white/10"
              aria-label="Close"
            >
              <X className="h-4 w-4 text-ink-subtle" aria-hidden="true" />
            </button>
          </div>

          <div className="rail mt-5" role="presentation">
            {Array.from({ length: TOTAL_STEPS }, (_, i) => (
              <span
                key={i}
                className="rail-seg"
                data-done={i + 1 < step}
                data-current={i + 1 === step}
              />
            ))}
          </div>
        </div>

        {/* ——— Content ——— */}
        <div
          className={`overflow-y-auto bg-white px-6 py-8 ${
            step === 10 ? 'max-h-[85vh]' : 'max-h-[calc(90vh-232px)]'
          }`}
        >
          {renderStep()}
        </div>

        {/* ——— Footer: hairline, not a gray gradient slab ——— */}
        {step < 10 && (
          <div className="flex items-center justify-between gap-4 border-t border-[color:var(--p-hairline)] bg-white px-6 py-5">
            <button
              onClick={handleBack}
              disabled={step === 1}
              className="inline-flex h-11 items-center gap-2 rounded-[var(--r-md)] px-4 text-sm font-medium text-[color:var(--p-ink-muted)] transition-colors duration-150 hover:bg-[color:var(--p-surface)] hover:text-[color:var(--p-ink)] disabled:pointer-events-none disabled:opacity-35"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Back
            </button>

            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className="btn-brand group inline-flex h-11 items-center gap-2 px-7 text-sm font-semibold disabled:pointer-events-none disabled:opacity-40 disabled:shadow-none"
            >
              {step === 9 ? 'Book my call' : 'Continue'}
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 ease-signature group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedModal;
