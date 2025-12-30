import React from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

interface StepProps {
  formData: any;
  setFormData: (data: any) => void;
}

export const Step4: React.FC<StepProps> = ({ formData, setFormData }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">Do you have any paying or active users yet?</h3>
    <RadioGroup value={formData.active_users} onValueChange={(value) => setFormData({ ...formData, active_users: value })}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="no-users" id="no-users" />
        <Label htmlFor="no-users">No users yet — still validating the idea</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="waitlist" id="waitlist" />
        <Label htmlFor="waitlist">Small waitlist / email signups only</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="beta-users" id="beta-users" />
        <Label htmlFor="beta-users">Beta users testing the product</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="paying-early" id="paying-early" />
        <Label htmlFor="paying-early">Paying early customers</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="hundreds-paying" id="hundreds-paying" />
        <Label htmlFor="hundreds-paying">Hundreds of paying customers</Label>
      </div>
    </RadioGroup>
  </div>
);

export const Step5: React.FC<StepProps> = ({ formData, setFormData }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">What's your approximate budget for this project?</h3>
    <RadioGroup value={formData.budget} onValueChange={(value) => setFormData({ ...formData, budget: value })}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="less-5k" id="less-5k" />
        <Label htmlFor="less-5k">Less than $5,000</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="5k-15k" id="5k-15k" />
        <Label htmlFor="5k-15k">$5,000–$15,000</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="15k-50k" id="15k-50k" />
        <Label htmlFor="15k-50k">$15,000–$50,000</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="50k-100k" id="50k-100k" />
        <Label htmlFor="50k-100k">$50,000–$100,000</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="100k-plus" id="100k-plus" />
        <Label htmlFor="100k-plus">$100,000+</Label>
      </div>
    </RadioGroup>
  </div>
);

export const Step6: React.FC<StepProps> = ({ formData, setFormData }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">What is your main goal for building this software?</h3>
    <RadioGroup value={formData.main_goal} onValueChange={(value) => setFormData({ ...formData, main_goal: value })}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="validate-idea" id="validate-idea" />
        <Label htmlFor="validate-idea">Validate an idea (MVP only)</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="launch-product" id="launch-product" />
        <Label htmlFor="launch-product">Launch a full product for real customers</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="upgrade-system" id="upgrade-system" />
        <Label htmlFor="upgrade-system">Upgrade or replace an existing system</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="raise-funds" id="raise-funds" />
        <Label htmlFor="raise-funds">Raise funds with a working prototype</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="other" id="other" />
        <Label htmlFor="other">Other</Label>
      </div>
    </RadioGroup>
  </div>
);

export const Step7: React.FC<StepProps> = ({ formData, setFormData }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">What best describes your role?</h3>
    <RadioGroup value={formData.role} onValueChange={(value) => setFormData({ ...formData, role: value })}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="solo-founder" id="solo-founder" />
        <Label htmlFor="solo-founder">Solo founder</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="co-founder" id="co-founder" />
        <Label htmlFor="co-founder">Co-founder or partner team</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="product-manager" id="product-manager" />
        <Label htmlFor="product-manager">Product manager</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="technical-lead" id="technical-lead" />
        <Label htmlFor="technical-lead">Technical lead/CTO</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="investor" id="investor" />
        <Label htmlFor="investor">Investor or advisor</Label>
      </div>
    </RadioGroup>
  </div>
);

export const Step8: React.FC<StepProps> = ({ formData, setFormData }) => (
  <div className="space-y-6">
    <h3 className="text-xl font-semibold text-gray-900 mb-4">How soon are you looking to get started?</h3>
    <RadioGroup value={formData.timeline} onValueChange={(value) => setFormData({ ...formData, timeline: value })}>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="immediately" id="immediately" />
        <Label htmlFor="immediately">Immediately — ready to start</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="within-1-month" id="within-1-month" />
        <Label htmlFor="within-1-month">Within 1 month</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="1-3-months" id="1-3-months" />
        <Label htmlFor="1-3-months">1–3 months from now</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="3-6-months" id="3-6-months" />
        <Label htmlFor="3-6-months">3–6 months from now</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="gathering-info" id="gathering-info" />
        <Label htmlFor="gathering-info">Just gathering info — not sure yet</Label>
      </div>
    </RadioGroup>
  </div>
);