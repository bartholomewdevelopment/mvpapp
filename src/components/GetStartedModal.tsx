import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Step4, Step5, Step6, Step7, Step8 } from './GetStartedModalSteps';
import { sendEmailNotification } from '@/lib/emailService';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [emailSent, setEmailSent] = useState(false);
  const [formData, setFormData] = useState({
    user_email: '',
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

  const handleNext = () => {
    if (step === 1 && formData.user_email && !emailSent && formData.user_email.includes('@')) {
      sendEmailNotification({ user_email: formData.user_email }, 'initial');
      setEmailSent(true);
    }
    
    if (step < 9) {
      setStep(step + 1);
    } else {
      sendEmailNotification(formData, 'progress');
      window.location.href = '/calendly';
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleClose = () => {
    if (step > 1 && formData.user_email) {
      sendEmailNotification(formData, 'progress');
    }
    setStep(1);
    setEmailSent(false);
    setFormData({
      user_email: '',
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

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Let's Get Started!</h3>
              <p className="text-gray-600 text-sm sm:text-base">Enter your email address to begin the process.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                value={formData.user_email}
                onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                placeholder="your@email.com"
                className="w-full"
              />
            </div>
          </div>
        );
      
      case 2:
        return (
          <div className="space-y-6">
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                We love working with founders at every stage. This quick form helps us understand your vision, where you're at, and how we can help you move forward. Please answer honestly so we can see if we're a good fit to work together!
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Where are you in the idea and planning process?</h3>
            </div>
            <RadioGroup value={formData.planning_stage} onValueChange={(value) => setFormData({ ...formData, planning_stage: value })}>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="initial-concept" id="initial-concept" className="mt-1" />
                <Label htmlFor="initial-concept" className="text-sm leading-relaxed">Just an initial concept — no clear plan yet</Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="problem-defined" id="problem-defined" className="mt-1" />
                <Label htmlFor="problem-defined" className="text-sm leading-relaxed">Problem defined, but solution still in brainstorm</Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="solution-defined" id="solution-defined" className="mt-1" />
                <Label htmlFor="solution-defined" className="text-sm leading-relaxed">Solution defined — working on feature list</Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="wireframes-created" id="wireframes-created" className="mt-1" />
                <Label htmlFor="wireframes-created" className="text-sm leading-relaxed">Wireframes or prototypes created</Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="requirements-complete" id="requirements-complete" className="mt-1" />
                <Label htmlFor="requirements-complete" className="text-sm leading-relaxed">Detailed requirements and user stories complete</Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">What best describes your startup's current funding status?</h3>
            <RadioGroup value={formData.funding_status} onValueChange={(value) => setFormData({ ...formData, funding_status: value })}>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="idea-only" id="idea-only" className="mt-1" />
                <Label htmlFor="idea-only" className="text-sm leading-relaxed">Idea only — no funding yet</Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="bootstrapped" id="bootstrapped" className="mt-1" />
                <Label htmlFor="bootstrapped" className="text-sm leading-relaxed">Bootstrapped (using personal savings/friends & family) ($7000 - $15000)</Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="bootstrapped-plus" id="bootstrapped-plus" className="mt-1" />
                <Label htmlFor="bootstrapped-plus" className="text-sm leading-relaxed">Bootstrapped PLUS ($15000 - $100,000)</Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="pre-seed" id="pre-seed" className="mt-1" />
                <Label htmlFor="pre-seed" className="text-sm leading-relaxed">Pre-seed round in progress or secured (up to ~$250K)</Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="seed" id="seed" className="mt-1" />
                <Label htmlFor="seed" className="text-sm leading-relaxed">Seed round in progress or secured ($250K–$2M)</Label>
              </div>
              <div className="flex items-start space-x-2">
                <RadioGroupItem value="series-a" id="series-a" className="mt-1" />
                <Label htmlFor="series-a" className="text-sm leading-relaxed">Series A or beyond ($2M+)</Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 4:
        return <Step4 formData={formData} setFormData={setFormData} />;
      case 5:
        return <Step5 formData={formData} setFormData={setFormData} />;
      case 6:
        return <Step6 formData={formData} setFormData={setFormData} />;
      case 7:
        return <Step7 formData={formData} setFormData={setFormData} />;
      case 8:
        return <Step8 formData={formData} setFormData={setFormData} />;
      case 9:
        return (
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  type="text"
                  value={formData.user_name}
                  onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                  placeholder="Your full name"
                  className="w-full"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cell">Cell Phone</Label>
                <Input
                  id="cell"
                  type="tel"
                  value={formData.user_phone}
                  onChange={(e) => setFormData({ ...formData, user_phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return formData.user_email.trim() !== '';
      case 2: return formData.planning_stage !== '';
      case 3: return formData.funding_status !== '';
      case 4: return formData.active_users !== '';
      case 5: return formData.budget !== '';
      case 6: return formData.main_goal !== '';
      case 7: return formData.role !== '';
      case 8: return formData.timeline !== '';
      case 9: return formData.user_name.trim() !== '' && formData.user_phone.trim() !== '';
      default: return true;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[600px] max-w-[95vw] max-h-[90vh] overflow-y-auto mx-4">
        <DialogHeader>
          <DialogTitle className="text-lg sm:text-2xl font-bold text-gray-900 pr-4">
            Get Started - Step {step} of 9
          </DialogTitle>
        </DialogHeader>
        
        <div className="py-4 sm:py-6">
          {renderStep()}
        </div>
        
        <div className="flex justify-between pt-4 sm:pt-6 border-t gap-4">
          <Button 
            variant="outline" 
            onClick={handleBack}
            disabled={step === 1}
            className="flex-1 sm:flex-none"
          >
            Back
          </Button>
          <Button 
            onClick={handleNext}
            disabled={!canProceed()}
            className="bg-[#fd6a62] hover:bg-[#fc5951] text-white flex-1 sm:flex-none"
          >
            {step === 9 ? 'Book Your Call' : 'Next'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedModal;