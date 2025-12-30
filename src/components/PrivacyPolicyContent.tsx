import React from 'react';

const PrivacyPolicyContent: React.FC = () => {
  return (
    <div className="space-y-6 text-sm">
      <section>
        <h3 className="font-semibold text-lg mb-2">4. Cookie Consent and Control</h3>
        <p className="mb-2">When you first visit our websites, you'll see a cookie consent popup. You can:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Accept all cookies</li>
          <li>Reject all non-essential cookies</li>
          <li>Customize your preferences by selecting specific categories</li>
        </ul>
        <p className="mb-4">
          You can also manage or revoke your consent at any time by clearing your cookies or visiting 
          our site's cookie preferences (if applicable).
        </p>
        <p>
          Additionally, you can control or block cookies through your browser settings. Instructions 
          vary by browser and are available through your browser's help section.
        </p>
      </section>

      <hr className="my-6" />

      <section>
        <h3 className="font-semibold text-lg mb-2">5. Information We Collect</h3>
        <p className="mb-2">Through cookies and other means, we may collect:</p>
        <ul className="list-disc pl-6">
          <li><strong>Usage Data</strong> – IP address, browser type, referring pages, time spent on pages, and general user behavior</li>
          <li><strong>Device Information</strong> – Device type, operating system, screen resolution</li>
          <li><strong>Personal Information</strong> – Only if you submit it (e.g., via forms), such as your name, email address, or phone number</li>
        </ul>
      </section>

      <hr className="my-6" />

      <section>
        <h3 className="font-semibold text-lg mb-2">6. How We Use Your Information</h3>
        <p className="mb-2">We use your data to:</p>
        <ul className="list-disc pl-6">
          <li>Improve website performance and user experience</li>
          <li>Analyze traffic and usage trends</li>
          <li>Provide customer support and respond to inquiries</li>
          <li>Deliver relevant content and communicate with you if you've opted in</li>
        </ul>
      </section>

      <hr className="my-6" />

      <section>
        <h3 className="font-semibold text-lg mb-2">7. Sharing of Information</h3>
        <p className="mb-2">We do not sell, rent, or trade your personal data. We may share information with:</p>
        <ul className="list-disc pl-6">
          <li>Service providers (e.g., analytics platforms, email marketing tools) strictly for operational purposes</li>
          <li>Law enforcement or government agencies when legally required</li>
          <li>Successors in the event of a business merger or sale</li>
        </ul>
      </section>

      <hr className="my-6" />

      <section>
        <h3 className="font-semibold text-lg mb-2">8. Data Security</h3>
        <p>
          We implement reasonable safeguards to protect your data. However, no method of data 
          transmission or storage is 100% secure. Use of our services is at your own risk.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicyContent;