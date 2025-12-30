import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';
import PrivacyPolicyFooter from '@/components/PrivacyPolicyFooter';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header with back button */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <Link to="/">
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Header section */}
            <div className="bg-gradient-to-r from-gray-900 to-slate-800 px-8 py-12 text-center">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Cookies & Privacy Policy
              </h1>
              <p className="text-gray-300">
                Effective Date: June 24, 2025
              </p>
            </div>

            {/* Policy content */}
            <div className="p-8">
              <div className="prose prose-gray max-w-none">
                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
                  <p className="text-gray-600 mb-4">
                    Bartholomew Development LLC ("we," "our," or "us") is committed to protecting your privacy. 
                    This Cookies & Privacy Policy explains how we use cookies and how we collect, use, and protect 
                    your personal information when you visit our websites:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-600">
                    <li>https://bartdev.org</li>
                    <li>https://bartholomewdevelopment.com</li>
                    <li>https://mvpapp.org</li>
                  </ul>
                  <p className="text-gray-600">
                    By continuing to use our websites or services, you consent to the practices described in this policy.
                  </p>
                </section>

                <hr className="my-8 border-gray-200" />

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">2. What Are Cookies?</h2>
                  <p className="text-gray-600">
                    Cookies are small text files placed on your device by websites you visit. They help websites 
                    function properly, remember your preferences, analyze traffic, and personalize content.
                  </p>
                </section>

                <hr className="my-8 border-gray-200" />

                <section className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Types of Cookies We Use</h2>
                  <p className="text-gray-600 mb-4">We use the following types of cookies:</p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li><strong>Essential Cookies</strong> – Required for the website to function properly (e.g., session and login cookies).</li>
                    <li><strong>Performance Cookies</strong> – Help us understand how visitors interact with the website by collecting usage data (e.g., Google Analytics).</li>
                    <li><strong>Functional Cookies</strong> – Enable enhanced features like remembering preferences or past interactions.</li>
                    <li><strong>Marketing Cookies</strong> – May be used to deliver relevant ads and track the effectiveness of our campaigns (currently disabled by default).</li>
                  </ul>
                </section>

                <hr className="my-8 border-gray-200" />

                {/* Include the rest of the policy content */}
                <PrivacyPolicyContent />
                
                <hr className="my-8 border-gray-200" />
                
                <PrivacyPolicyFooter />
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simple footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Bartholomew Development LLC. All rights reserved.
          </p>
          <Link to="/" className="text-[#fd6a62] hover:text-[#fc5951] mt-2 inline-block">
            Return to MVP Applications
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
