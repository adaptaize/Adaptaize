import React from 'react';
import './PageLayout.css';

function TermsOfService() {
  return (
    <div className="page-container">
      <div className="page-content">
        <h1>Terms of Service</h1>
        <p>Last updated: {new Date().toLocaleDateString()}</p>

        <h2>1. Agreement to Terms</h2>
        <p>By accessing or using AdaptAIze's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.</p>

        <h2>2. Service Description</h2>
        <p>AdaptAIze provides AI-powered automation solutions for small businesses, including:</p>
        <ul>
          <li>Business process automation</li>
          <li>Lead generation assistance</li>
          <li>Workflow optimization</li>
          <li>Performance analytics</li>
        </ul>

        <h2>3. Payment Terms</h2>
        <p>Our services are provided on a pay-for-performance basis:</p>
        <ul>
          <li>No upfront costs</li>
          <li>Payment only after measurable results</li>
          <li>Transparent pricing structure</li>
          <li>Flexible payment options</li>
        </ul>

        <h2>4. User Responsibilities</h2>
        <p>As a user of our services, you agree to:</p>
        <ul>
          <li>Provide accurate information</li>
          <li>Maintain the security of your account</li>
          <li>Use the service in compliance with laws</li>
          <li>Not misuse or abuse our services</li>
        </ul>

        <h2>5. Contact Information</h2>
        <p>For any questions about these Terms of Service, please contact us at:</p>
        <p>Email: legal@adaptaize.com</p>
      </div>
    </div>
  );
}

export default TermsOfService; 