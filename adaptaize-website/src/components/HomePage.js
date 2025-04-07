import React from 'react';
import { Link } from 'react-router-dom';
import heroGraph from '../assets/hero-graph.svg';
import TestimonialCarousel from './TestimonialCarousel';

function HomePage() {
  return (
    <main className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>AI-Powered Automation. Zero Upfront Cost.</h1>
            <p>We help small businesses save time and money by automating everyday tasks with AI. If we don't save you money, you don't pay.</p>
            <div className="hero-buttons">
              <Link to="/schedule" className="cta-button primary">Get Your Free Workflow Audit</Link>
              <button onClick={() => document.querySelector('#how-it-works').scrollIntoView({ behavior: 'smooth' })} className="cta-button secondary">How It Works</button>
            </div>
          </div>
          <div className="hero-image">
            <img src={heroGraph} alt="Business Growth with AdaptAIze" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="how-it-works">
        <h2>Here's How AdaptAIze Works</h2>
        <div className="steps-grid">
          {[
            {
              title: "We Audit Your Business Processes",
              desc: "We examine your workflows to find automation opportunities."
            },
            {
              title: "We Build Smart AI Automations",
              desc: "From emails to invoices, we automate the repetitive work."
            },
            {
              title: "You Only Pay When You Save",
              desc: "No savings? No payment. Simple as that."
            }
          ].map((step, i) => (
            <div key={i} className="step-card">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Busy Business Section */}
      <section className="busy-business">
        <div className="busy-business-content">
          <div className="busy-business-text">
            <h2>You're Too Busy to Optimize — That's Where We Come In.</h2>
            <p>Running a small business means juggling everything. Hiring. Invoicing. Customer support. Admin. AdaptAIze steps in to streamline your operations using smart AI workflows that free up your time — and your budget.</p>
            <p className="highlight-text">No tech team needed. No AI experience required. Just results.</p>
            <Link to="/contact" className="cta-button primary">Get Started</Link>
          </div>
          <div className="busy-business-image">
            <img src="/busy-business-illustration.svg" alt="Business owner being helped by AI automation" />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="testimonials">
        <h2>Real Results. Real Savings.</h2>
        <TestimonialCarousel />
      </section>

      {/* Final CTA */}
      <section id="contact" className="final-cta">
        <h2>Ready to Work Smarter — Without the Upfront Cost?</h2>
        <p>Get your free automation audit and start saving today.</p>
        <Link to="/schedule" className="cta-button">Get Your Free Audit</Link>
      </section>
    </main>
  );
}

export default HomePage; 