import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

/**
 * Shared pieces for the Get Started flow.
 *
 * Before this existed, steps 1–5 rendered padded option cards while steps 6–9
 * rendered bare `flex items-center space-x-2` radio rows — the same question
 * asked two different ways. One `<Choices>` primitive keeps every step on the
 * `.choice` shape defined in index.css, and one `<StepHeading>` keeps the
 * eyebrow / title / hint rhythm from drifting.
 */

interface ChoiceOption {
  /** Submitted value — these are read by emailService, so never rename them. */
  value: string;
  label: string;
  /** Optional second line for the fuller cards on the early steps. */
  detail?: string;
  /** Optional leading glyph, e.g. a lucide icon element. */
  icon?: React.ReactNode;
}

interface ChoicesProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: ChoiceOption[];
}

export const Choices: React.FC<ChoicesProps> = ({ name, value, onChange, options }) => (
  <RadioGroup value={value} onValueChange={onChange} className="gap-2.5">
    {options.map((opt) => {
      const id = `${name}-${opt.value}`;
      const selected = value === opt.value;
      return (
        <Label key={opt.value} htmlFor={id} className="choice" data-selected={selected}>
          <RadioGroupItem value={opt.value} id={id} className="mt-0.5 shrink-0" />
          <span className="min-w-0 flex-1">
            <span className="flex items-center gap-2">
              {opt.icon}
              <span className="text-[0.9375rem] font-medium leading-snug text-[color:var(--p-ink)]">
                {opt.label}
              </span>
            </span>
            {opt.detail && (
              <span className="mt-1 block text-sm leading-relaxed text-[color:var(--p-ink-muted)]">
                {opt.detail}
              </span>
            )}
          </span>
        </Label>
      );
    })}
  </RadioGroup>
);

interface StepHeadingProps {
  /** Mono micro-label, e.g. "VALIDATION". Replaces the old icon medallion. */
  eyebrow?: string;
  title: string;
  hint?: string;
}

export const StepHeading: React.FC<StepHeadingProps> = ({ eyebrow, title, hint }) => (
  <div className="mb-7">
    {eyebrow && <p className="paper-eyebrow mb-3">{eyebrow}</p>}
    <h3 className="paper-title text-[1.5rem] sm:text-[1.75rem]">{title}</h3>
    {hint && <p className="paper-hint mt-2.5 text-[0.9375rem] leading-relaxed">{hint}</p>}
  </div>
);

/** Wrapper that gives each step its single quiet entrance. */
export const Step: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="step-in">{children}</div>
);
