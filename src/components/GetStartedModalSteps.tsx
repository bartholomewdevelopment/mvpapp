import React from 'react';
import { Choices, StepHeading, Step } from './GetStartedModalUI';

interface StepProps {
  formData: any;
  setFormData: (data: any) => void;
}

/* Question values are unchanged from the previous version — emailService reads
   them, so only the presentation moved onto the .choice / StepHeading system. */

export const Step4: React.FC<StepProps> = ({ formData, setFormData }) => (
  <Step>
    <StepHeading
      title="Do you have any paying or active users yet?"
    />
    <Choices
      name="active_users"
      value={formData.active_users}
      onChange={(value) => setFormData({ ...formData, active_users: value })}
      options={[
        { value: 'no-users', label: 'No users yet — still validating the idea' },
        { value: 'waitlist', label: 'Small waitlist / email signups only' },
        { value: 'beta-users', label: 'Beta users testing the product' },
        { value: 'paying-early', label: 'Paying early customers' },
        { value: 'hundreds-paying', label: 'Hundreds of paying customers' },
      ]}
    />
  </Step>
);

export const Step5: React.FC<StepProps> = ({ formData, setFormData }) => (
  <Step>
    <StepHeading
      title="What's your approximate budget for this project?"
      hint="Ranges start at the $18,000 build floor."
    />
    {/* TODO(founder): brackets realigned to the $18,000 build floor — confirm these ranges. */}
    <Choices
      name="budget"
      value={formData.budget}
      onChange={(value) => setFormData({ ...formData, budget: value })}
      options={[
        { value: 'less-18k', label: 'Less than $18,000' },
        { value: '18k-30k', label: '$18,000–$30,000' },
        { value: '30k-50k', label: '$30,000–$50,000' },
        { value: '50k-100k', label: '$50,000–$100,000' },
        { value: '100k-plus', label: '$100,000+' },
      ]}
    />
  </Step>
);

export const Step6: React.FC<StepProps> = ({ formData, setFormData }) => (
  <Step>
    <StepHeading
      title="What is your main goal for building this software?"
    />
    <Choices
      name="main_goal"
      value={formData.main_goal}
      onChange={(value) => setFormData({ ...formData, main_goal: value })}
      options={[
        { value: 'validate-idea', label: 'Validate an idea before building' },
        { value: 'launch-product', label: 'Launch a full product for real customers' },
        { value: 'upgrade-system', label: 'Upgrade or replace an existing system' },
        { value: 'raise-funds', label: 'Raise funds with a working prototype' },
        { value: 'other', label: 'Other' },
      ]}
    />
  </Step>
);

export const Step7: React.FC<StepProps> = ({ formData, setFormData }) => (
  <Step>
    <StepHeading title="What best describes your role?" />
    <Choices
      name="role"
      value={formData.role}
      onChange={(value) => setFormData({ ...formData, role: value })}
      options={[
        { value: 'solo-founder', label: 'Solo founder' },
        { value: 'co-founder', label: 'Co-founder or partner team' },
        { value: 'product-manager', label: 'Product manager' },
        { value: 'technical-lead', label: 'Technical lead/CTO' },
        { value: 'investor', label: 'Investor or advisor' },
      ]}
    />
  </Step>
);

/* Not currently rendered by GetStartedModal — the flow jumps from role (step 9)
   straight to scheduling, so formData.timeline is never collected. Kept as-is. */
export const Step8: React.FC<StepProps> = ({ formData, setFormData }) => (
  <Step>
    <StepHeading title="How soon are you looking to get started?" />
    <Choices
      name="timeline"
      value={formData.timeline}
      onChange={(value) => setFormData({ ...formData, timeline: value })}
      options={[
        { value: 'immediately', label: 'Immediately — ready to start' },
        { value: 'within-1-month', label: 'Within 1 month' },
        { value: '1-3-months', label: '1–3 months from now' },
        { value: '3-6-months', label: '3–6 months from now' },
        { value: 'gathering-info', label: 'Just gathering info — not sure yet' },
      ]}
    />
  </Step>
);
