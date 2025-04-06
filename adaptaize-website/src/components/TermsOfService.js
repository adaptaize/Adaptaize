import React from 'react';
import './Policy.css';

const TermsOfService = () => {
  return (
    <div className="policy-page">
      <div className="policy-container">
        <h1>Terms of Service</h1>
        <p className="last-updated">Last Updated: {new Date().toLocaleDateString()}</p>

        <section>
          <h2>1. Introduction</h2>
          <p>Welcome to AdaptAIze. These Terms of Service ("Terms") govern your access to and use of the AdaptAIze website and services. Please read these Terms carefully before using our services.</p>
        </section>

        <section>
          <h2>2. Acceptance of Terms</h2>
          <p>By accessing or using our services, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the service.</p>
        </section>

        <section>
          <h2>3. Description of Service</h2>
          <p>AdaptAIze provides AI-powered automation services for small businesses. Our service includes workflow audits, automation implementation, and ongoing support.</p>
        </section>

        <section>
          <h2>4. User Accounts</h2>
          <p>When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account.</p>
        </section>

        <section>
          <h2>5. Intellectual Property</h2>
          <p>The Service and its original content, features, and functionality are and will remain the exclusive property of AdaptAIze and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries.</p>
        </section>

        <section>
          <h2>6. Links to Other Websites</h2>
          <p>Our Service may contain links to third-party web sites or services that are not owned or controlled by AdaptAIze. AdaptAIze has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services.</p>
        </section>

        <section>
          <h2>7. Termination</h2>
          <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
        </section>

        <section>
          <h2>8. Limitation of Liability</h2>
          <p>In no event shall AdaptAIze, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
        </section>

        <section>
          <h2>9. Disclaimer</h2>
          <p>Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.</p>
        </section>

        <section>
          <h2>10. Governing Law</h2>
          <p>These Terms shall be governed and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>
        </section>

        <section>
          <h2>11. Changes to Terms</h2>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.</p>
        </section>

        <section>
          <h2>12. Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us:</p>
          <ul>
            <li>By email: legal@adaptaize.com</li>
            <li>By visiting the contact page on our website</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService; 