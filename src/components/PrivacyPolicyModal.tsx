import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { ScrollArea } from './ui/scroll-area';
import PrivacyPolicyContent from './PrivacyPolicyContent';
import PrivacyPolicyFooter from './PrivacyPolicyFooter';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PrivacyPolicyModal: React.FC<PrivacyPolicyModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle>Cookies & Privacy Policy</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[60vh] pr-4">
          <div className="space-y-6 text-sm">
            <p className="font-semibold">Effective Date: June 24, 2025</p>
            
            <section>
              <h3 className="font-semibold text-lg mb-2">1. Introduction</h3>
              <p className="mb-4">
                Bartholomew Development LLC ("we," "our," or "us") is committed to protecting your privacy. 
                This Cookies & Privacy Policy explains how we use cookies and how we collect, use, and protect 
                your personal information when you visit our websites:
              </p>
              <ul className="list-disc pl-6 mb-4">
                <li>https://bartdev.org</li>
                <li>https://bartholomewdevelopment.com</li>
                <li>https://mvpapp.org</li>
              </ul>
              <p>By continuing to use our websites or services, you consent to the practices described in this policy.</p>
            </section>

            <hr className="my-6" />

            <section>
              <h3 className="font-semibold text-lg mb-2">2. What Are Cookies?</h3>
              <p>
                Cookies are small text files placed on your device by websites you visit. They help websites 
                function properly, remember your preferences, analyze traffic, and personalize content.
              </p>
            </section>

            <hr className="my-6" />

            <section>
              <h3 className="font-semibold text-lg mb-2">3. Types of Cookies We Use</h3>
              <p className="mb-2">We use the following types of cookies:</p>
              <ul className="list-disc pl-6">
                <li><strong>Essential Cookies</strong> – Required for the website to function properly (e.g., session and login cookies).</li>
                <li><strong>Performance Cookies</strong> – Help us understand how visitors interact with the website by collecting usage data (e.g., Google Analytics).</li>
                <li><strong>Functional Cookies</strong> – Enable enhanced features like remembering preferences or past interactions.</li>
                <li><strong>Marketing Cookies</strong> – May be used to deliver relevant ads and track the effectiveness of our campaigns (currently disabled by default).</li>
              </ul>
            </section>

            <hr className="my-6" />

            <PrivacyPolicyContent />
            
            <hr className="my-6" />
            
            <PrivacyPolicyFooter />
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default PrivacyPolicyModal;