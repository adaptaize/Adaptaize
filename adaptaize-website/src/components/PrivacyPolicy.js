import React from 'react';
import './PageLayout.css';

function PrivacyPolicy() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Privacy Policy</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Introduction</h2>
        <p>At AdaptAIze, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.</p>

        <h2>2. Information We Collect</h2>
        <ul>
          <li>Personal information (name, email, phone number)</li>
          <li>Business information (company name, industry, size)</li>
          <li>Usage data and analytics</li>
          <li>Communication preferences</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use the collected information to:</p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Process your automation requests</li>
          <li>Send you important updates and notifications</li>
          <li>Analyze and optimize our service performance</li>
        </ul>

        <h2>4. Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>

        <h2>5. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Email: privacy@adaptaize.com</p>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 