import React from 'react';

const PrivacyPolicyFooter: React.FC = () => {
  return (
    <div className="space-y-6 text-sm">
      <section>
        <h3 className="font-semibold text-lg mb-2">9. Your Rights and Choices</h3>
        <ul className="list-disc pl-6">
          <li>Access, update, or delete your personal information by contacting us</li>
          <li>Opt-out of marketing communications at any time</li>
          <li>Control cookies via your browser or our consent popup</li>
          <li>Withdraw consent at any time by revisiting your cookie preferences</li>
        </ul>
      </section>

      <hr className="my-6" />

      <section>
        <h3 className="font-semibold text-lg mb-2">10. Third-Party Services and Links</h3>
        <p>
          Our websites may link to third-party sites or services (e.g., payment processors or social 
          media platforms). We are not responsible for their privacy practices. We recommend reviewing 
          their privacy policies separately.
        </p>
      </section>

      <hr className="my-6" />

      <section>
        <h3 className="font-semibold text-lg mb-2">11. Children's Privacy</h3>
        <p>
          Our services are not intended for users under age 13. We do not knowingly collect data from 
          children. If we learn that we have done so, we will delete it promptly.
        </p>
      </section>

      <hr className="my-6" />

      <section>
        <h3 className="font-semibold text-lg mb-2">12. Updates to This Policy</h3>
        <p>
          We may update this policy from time to time. Changes will be posted on this page with a 
          revised effective date. Continued use of our sites after changes means you accept the 
          updated policy.
        </p>
      </section>

      <hr className="my-6" />

      <section>
        <h3 className="font-semibold text-lg mb-2">13. Contact Us</h3>
        <p className="mb-2">
          If you have any questions about this policy or wish to exercise your privacy rights, contact:
        </p>
        <div className="pl-4">
          <p className="font-semibold">Bartholomew Development LLC</p>
          <p>📧 Email: info@bartholomewdevelopment.com</p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyFooter;