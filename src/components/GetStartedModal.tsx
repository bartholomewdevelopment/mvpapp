import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Step4, Step5, Step6, Step7, Step8 } from './GetStartedModalSteps';
import { sendEmailNotification } from '@/lib/emailService';
import { AlertCircle, CheckCircle, ArrowRight, ArrowLeft, Sparkles, Mail, Target, Rocket, X } from 'lucide-react';

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

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

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-grad rounded-2xl mb-4 mx-auto shadow-lg shadow-[#fd6a62]/50">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-3">
                Let's Get Started!
              </h3>
              <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto">
                Enter your email to begin your journey toward a successful MVP launch.
              </p>
            </div>
            <div className="space-y-3">
              <Label htmlFor="email" className="text-base font-semibold text-gray-900">
                Email Address
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="email"
                  value={formData.user_email}
                  onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full h-14 px-4 text-base border-2 border-gray-200 focus:border-[#fd6a62] focus:ring-2 focus:ring-[#fd6a62]/20 rounded-xl transition-all duration-300"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-grad rounded-2xl mb-4 mx-auto shadow-lg shadow-[#fd6a62]/50">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Which option are you interested in?
              </h3>
              <p className="text-gray-600 text-sm">Choose the path that fits your current stage</p>
            </div>
            <RadioGroup value={formData.interested_in} onValueChange={(value) => setFormData({ ...formData, interested_in: value })}>
              <div className={`relative flex items-start p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 ${formData.interested_in === 'startup-lab' ? 'border-[#fd6a62] bg-[#fd6a62]/5 shadow-lg shadow-[#fd6a62]/20' : 'border-gray-200 hover:border-[#fd6a62]/50 bg-white'}`}>
                <RadioGroupItem value="startup-lab" id="startup-lab" className="mt-1" />
                <Label htmlFor="startup-lab" className="ml-4 cursor-pointer flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Target className="w-5 h-5 text-[#fd6a62]" />
                    <span className="font-bold text-gray-900">BartDev Startup Lab</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Validate my idea before building
                  </p>
                </Label>
              </div>
              <div className={`relative flex items-start p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 ${formData.interested_in === 'mvp-dev' ? 'border-[#fd6a62] bg-[#fd6a62]/5 shadow-lg shadow-[#fd6a62]/20' : 'border-gray-200 hover:border-[#fd6a62]/50 bg-white'}`}>
                <RadioGroupItem value="mvp-dev" id="mvp-dev" className="mt-1" />
                <Label htmlFor="mvp-dev" className="ml-4 cursor-pointer flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Rocket className="w-5 h-5 text-[#fd6a62]" />
                    <span className="font-bold text-gray-900">MVP Development</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    My idea is already validated
                  </p>
                </Label>
              </div>
              <div className={`relative flex items-start p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 ${formData.interested_in === 'not-sure' ? 'border-[#fd6a62] bg-[#fd6a62]/5 shadow-lg shadow-[#fd6a62]/20' : 'border-gray-200 hover:border-[#fd6a62]/50 bg-white'}`}>
                <RadioGroupItem value="not-sure" id="not-sure" className="mt-1" />
                <Label htmlFor="not-sure" className="ml-4 cursor-pointer flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <AlertCircle className="w-5 h-5 text-gray-600" />
                    <span className="font-bold text-gray-900">Not sure</span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Help me decide which path is right
                  </p>
                </Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="text-center mb-6">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                Have you validated your idea with real customers?
              </h3>
              <p className="text-sm text-gray-600">
                This helps us recommend the best path for you.
              </p>
            </div>
            <RadioGroup value={formData.validation_status} onValueChange={(value) => setFormData({ ...formData, validation_status: value })}>
              <div className={`relative flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${formData.validation_status === 'not-validated' ? 'border-[#fd6a62] bg-[#fd6a62]/5 shadow-lg shadow-[#fd6a62]/20' : 'border-gray-200 hover:border-[#fd6a62]/50 bg-white'}`}>
                <RadioGroupItem value="not-validated" id="not-validated" className="mt-1" />
                <Label htmlFor="not-validated" className="ml-4 cursor-pointer flex-1 text-sm leading-relaxed text-gray-700">
                  No - I haven't talked to potential customers yet
                </Label>
              </div>
              <div className={`relative flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${formData.validation_status === 'friends-family' ? 'border-[#fd6a62] bg-[#fd6a62]/5 shadow-lg shadow-[#fd6a62]/20' : 'border-gray-200 hover:border-[#fd6a62]/50 bg-white'}`}>
                <RadioGroupItem value="friends-family" id="friends-family" className="mt-1" />
                <Label htmlFor="friends-family" className="ml-4 cursor-pointer flex-1 text-sm leading-relaxed text-gray-700">
                  Only validated with friends/family
                </Label>
              </div>
              <div className={`relative flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${formData.validation_status === 'few-interviews' ? 'border-[#fd6a62] bg-[#fd6a62]/5 shadow-lg shadow-[#fd6a62]/20' : 'border-gray-200 hover:border-[#fd6a62]/50 bg-white'}`}>
                <RadioGroupItem value="few-interviews" id="few-interviews" className="mt-1" />
                <Label htmlFor="few-interviews" className="ml-4 cursor-pointer flex-1 text-sm leading-relaxed text-gray-700">
                  Did a few interviews (less than 15 strangers)
                </Label>
              </div>
              <div className={`relative flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${formData.validation_status === 'validated-committed' ? 'border-green-500 bg-green-50 shadow-lg shadow-green-500/20' : 'border-gray-200 hover:border-green-500/50 bg-white'}`}>
                <RadioGroupItem value="validated-committed" id="validated-committed" className="mt-1" />
                <Label htmlFor="validated-committed" className="ml-4 cursor-pointer flex-1 text-sm leading-relaxed text-gray-700">
                  15+ interviews with strangers + 5+ paying commitments
                </Label>
              </div>
              <div className={`relative flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${formData.validation_status === 'validated-paying' ? 'border-green-500 bg-green-50 shadow-lg shadow-green-500/20' : 'border-gray-200 hover:border-green-500/50 bg-white'}`}>
                <RadioGroupItem value="validated-paying" id="validated-paying" className="mt-1" />
                <Label htmlFor="validated-paying" className="ml-4 cursor-pointer flex-1 text-sm leading-relaxed text-gray-700">
                  15+ interviews + paying customers already using a prototype
                </Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 4:
        if (recommendedPath === 'startup-lab') {
          return (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="relative overflow-hidden bg-gradient-to-br from-[#fd6a62]/10 via-[#fc5951]/5 to-transparent border-2 border-[#fd6a62] rounded-2xl p-6 shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#fd6a62]/10 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-grad rounded-xl flex items-center justify-center shadow-lg shadow-[#fd6a62]/50">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        We Recommend: BartDev Startup Lab
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Based on your answers, your idea needs validation before building. This is the #1 way to avoid wasting $50K+ on something nobody wants.
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-3 mt-6">
                    <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-[#fd6a62] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">8-16 weeks of structured validation coaching</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-[#fd6a62] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Prove people will pay BEFORE you build</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-[#fd6a62] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">50% of coaching fees credited toward MVP build</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Continue to provide more details and book your consultation call
              </p>
            </div>
          );
        } else if (recommendedPath === 'mvp') {
          return (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="relative overflow-hidden bg-gradient-to-br from-green-50 via-emerald-50/50 to-transparent border-2 border-green-500 rounded-2xl p-6 shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"></div>
                <div className="relative">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/50">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        Great! You're Ready for MVP Development
                      </h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        Based on your validation work, you're ready to build. We'll help you launch a clean, scalable MVP.
                      </p>
                    </div>
                  </div>
                  <div className="grid gap-3 mt-6">
                    <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">6-12 weeks from discovery to launch</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Professional training & documentation included</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">100% code ownership + 30 days support</span>
                    </div>
                    <div className="flex items-start gap-3 bg-white/80 backdrop-blur-sm rounded-lg p-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">Investment: $6,000-$21,000 based on scope</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600 text-center">
                Continue to provide more details and book your consultation call
              </p>
            </div>
          );
        }
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">
              Where are you in the planning process?
            </h3>
            <RadioGroup value={formData.planning_stage} onValueChange={(value) => setFormData({ ...formData, planning_stage: value })}>
              <div className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.planning_stage === 'initial-concept' ? 'border-[#fd6a62] bg-[#fd6a62]/5' : 'border-gray-200 hover:border-[#fd6a62]/50'}`}>
                <RadioGroupItem value="initial-concept" id="initial-concept" className="mt-1" />
                <Label htmlFor="initial-concept" className="ml-4 cursor-pointer text-sm leading-relaxed">Just an initial concept — no clear plan yet</Label>
              </div>
              <div className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.planning_stage === 'problem-defined' ? 'border-[#fd6a62] bg-[#fd6a62]/5' : 'border-gray-200 hover:border-[#fd6a62]/50'}`}>
                <RadioGroupItem value="problem-defined" id="problem-defined" className="mt-1" />
                <Label htmlFor="problem-defined" className="ml-4 cursor-pointer text-sm leading-relaxed">Problem defined, but solution still in brainstorm</Label>
              </div>
              <div className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.planning_stage === 'solution-defined' ? 'border-[#fd6a62] bg-[#fd6a62]/5' : 'border-gray-200 hover:border-[#fd6a62]/50'}`}>
                <RadioGroupItem value="solution-defined" id="solution-defined" className="mt-1" />
                <Label htmlFor="solution-defined" className="ml-4 cursor-pointer text-sm leading-relaxed">Solution defined — working on feature list</Label>
              </div>
              <div className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.planning_stage === 'wireframes-created' ? 'border-[#fd6a62] bg-[#fd6a62]/5' : 'border-gray-200 hover:border-[#fd6a62]/50'}`}>
                <RadioGroupItem value="wireframes-created" id="wireframes-created" className="mt-1" />
                <Label htmlFor="wireframes-created" className="ml-4 cursor-pointer text-sm leading-relaxed">Wireframes or prototypes created</Label>
              </div>
              <div className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.planning_stage === 'requirements-complete' ? 'border-[#fd6a62] bg-[#fd6a62]/5' : 'border-gray-200 hover:border-[#fd6a62]/50'}`}>
                <RadioGroupItem value="requirements-complete" id="requirements-complete" className="mt-1" />
                <Label htmlFor="requirements-complete" className="ml-4 cursor-pointer text-sm leading-relaxed">Detailed requirements and user stories complete</Label>
              </div>
            </RadioGroup>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4">What's your current funding status?</h3>
            <RadioGroup value={formData.funding_status} onValueChange={(value) => setFormData({ ...formData, funding_status: value })}>
              <div className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.funding_status === 'idea-only' ? 'border-[#fd6a62] bg-[#fd6a62]/5' : 'border-gray-200 hover:border-[#fd6a62]/50'}`}>
                <RadioGroupItem value="idea-only" id="idea-only" className="mt-1" />
                <Label htmlFor="idea-only" className="ml-4 cursor-pointer text-sm leading-relaxed">Idea only — no funding yet</Label>
              </div>
              <div className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.funding_status === 'bootstrapped' ? 'border-[#fd6a62] bg-[#fd6a62]/5' : 'border-gray-200 hover:border-[#fd6a62]/50'}`}>
                <RadioGroupItem value="bootstrapped" id="bootstrapped" className="mt-1" />
                <Label htmlFor="bootstrapped" className="ml-4 cursor-pointer text-sm leading-relaxed">Bootstrapped (using personal savings/friends & family)</Label>
              </div>
              <div className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.funding_status === 'pre-seed' ? 'border-[#fd6a62] bg-[#fd6a62]/5' : 'border-gray-200 hover:border-[#fd6a62]/50'}`}>
                <RadioGroupItem value="pre-seed" id="pre-seed" className="mt-1" />
                <Label htmlFor="pre-seed" className="ml-4 cursor-pointer text-sm leading-relaxed">Pre-seed round in progress or secured (up to ~$250K)</Label>
              </div>
              <div className={`flex items-start p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.funding_status === 'seed' ? 'border-[#fd6a62] bg-[#fd6a62]/5' : 'border-gray-200 hover:border-[#fd6a62]/50'}`}>
                <RadioGroupItem value="seed" id="seed" className="mt-1" />
                <Label htmlFor="seed" className="ml-4 cursor-pointer text-sm leading-relaxed">Seed round or beyond ($250K+)</Label>
              </div>
            </RadioGroup>
          </div>
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
          <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500 relative">
            {/* Close button for Calendly step */}
            <button
              onClick={handleClose}
              className="absolute -top-4 right-0 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 border-2 border-gray-300 transition-all duration-300 group shadow-lg"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 text-gray-600 group-hover:text-gray-900 transition-colors" />
            </button>

            <div className="text-center mb-4 pr-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-grad rounded-2xl mb-4 mx-auto shadow-lg shadow-[#fd6a62]/50">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Schedule Your Discovery Call</h3>
              <p className="text-sm text-gray-600">Pick a time that works best for you. We'll review your answers and help you get started.</p>
            </div>

            {/* Calendly Embed */}
            <div
              className="calendly-inline-widget rounded-lg overflow-hidden border-2 border-gray-200"
              data-url={`https://calendly.com/joseph-bartholomewdevelopment/idea-sprint?name=${encodeURIComponent(formData.user_name || '')}&email=${encodeURIComponent(formData.user_email || '')}`}
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
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

  const progressPercentage = (step / 10) * 100;

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className={`${step === 10 ? 'sm:max-w-[900px]' : 'sm:max-w-[650px]'} max-w-[95vw] max-h-[90vh] overflow-hidden p-0 gap-0 bg-gradient-to-br from-white via-gray-50 to-white border-0 shadow-2xl`}>
        {/* Header with Progress */}
        {step < 10 && (
          <div className="relative bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 px-6 py-6 border-b border-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-[#fd6a62]/10 to-[#fc5951]/10 opacity-50"></div>

            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-20 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-all duration-300 group"
              aria-label="Close modal"
            >
              <X className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" />
            </button>

            <div className="relative">
              <div className="flex items-center justify-between mb-4 pr-8">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white">Get Started</h2>
                  <p className="text-sm text-gray-300 mt-1">Step {step} of 10</p>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Sparkles className="w-4 h-4 text-[#fd6a62]" />
                  <span className="text-sm font-semibold text-white">{Math.round(progressPercentage)}%</span>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                <div
                  className="absolute top-0 left-0 h-full bg-brand-grad rounded-full transition-all duration-500 ease-out shadow-lg shadow-[#fd6a62]/50"
                  style={{ width: `${progressPercentage}%` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className={`px-6 py-8 overflow-y-auto ${step === 10 ? 'max-h-[85vh]' : 'max-h-[calc(90vh-240px)]'}`}>
          {renderStep()}
        </div>

        {/* Footer */}
        {step < 10 && (
          <div className="bg-gradient-to-b from-gray-50 to-white px-6 py-6 border-t border-gray-200">
            <div className="flex justify-between gap-4">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={step === 1}
                className="flex items-center gap-2 px-6 h-12 border-2 border-gray-300 hover:border-gray-400 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-300 rounded-xl"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="font-semibold">Back</span>
              </Button>
              <Button
                onClick={handleNext}
                disabled={!canProceed()}
                className="group relative flex items-center gap-2 px-8 h-12 bg-brand-grad hover:from-[#fc5951] hover:to-[#fd6a62] text-white font-semibold disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-[#fd6a62]/30 hover:shadow-xl hover:shadow-[#fd6a62]/40 transition-all duration-300 rounded-xl overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
                <span className="relative">Next</span>
                <ArrowRight className="w-4 h-4 relative group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default GetStartedModal;
