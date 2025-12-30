import React from 'react';
import AppLayout from '@/components/AppLayout';
import PrivacyPolicyContent from '@/components/PrivacyPolicyContent';
import PrivacyPolicyFooter from '@/components/PrivacyPolicyFooter';

const PrivacyPolicy: React.FC = () => {
  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Cookies & Privacy Policy
            </h1>
            <PrivacyPolicyContent />
            <PrivacyPolicyFooter />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default PrivacyPolicy;