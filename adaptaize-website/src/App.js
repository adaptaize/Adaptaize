import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import SchedulePage from './components/SchedulePage';
import './components/SchedulePage.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <nav className="nav">
            <div className="logo">
              <Link to="/">AdaptAIze</Link>
            </div>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <a href="#how-it-works">How It Works</a>
              <a href="#testimonials">Testimonials</a>
              <Link to="/schedule">Schedule Audit</Link>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/" element={
            <main className="bg-gray-50 text-gray-800">
              {/* Hero Section */}
              <section id="home" className="hero">
                <div className="hero-content">
                  <div className="hero-text">
                    <h1>AI-Powered Automation. Zero Upfront Cost.</h1>
                    <p>We help small businesses save time and money by automating everyday tasks with AI. If we don't save you money, you don't pay.</p>
                    <div className="hero-buttons">
                      <Link to="/schedule" className="cta-button primary">Get Your Free Workflow Audit</Link>
                      <a href="#how-it-works" className="cta-button secondary">How It Works</a>
                    </div>
                  </div>
                  <div className="hero-image">
                    <img src="/graph-automation-illustration.png" alt="Business Growth" />
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

              {/* Testimonials Section */}
              <section id="testimonials" className="testimonials">
                <h2>Real Results. Real Savings.</h2>
                <div className="testimonials-grid">
                  {[
                    {
                      name: "Linda R.",
                      role: "Boutique Agency Owner",
                      quote: "AdaptAIze helped us cut down 40% of admin time — and we didn't pay a cent until we saw the savings."
                    },
                    {
                      name: "Marcus J.",
                      role: "E-commerce Store Owner",
                      quote: "Their automations saved me hours every week. Super easy process and incredible value."
                    },
                    {
                      name: "Priya D.",
                      role: "Consultant",
                      quote: "I was skeptical, but they proved their worth in just 2 weeks. Zero upfront cost made it a no-brainer."
                    }
                  ].map((testimonial, i) => (
                    <div key={i} className="testimonial-card">
                      <p className="quote">"{testimonial.quote}"</p>
                      <p className="name">{testimonial.name}</p>
                      <p className="role">{testimonial.role}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Final CTA */}
              <section id="contact" className="final-cta">
                <h2>Ready to Work Smarter — Without the Upfront Cost?</h2>
                <p>Get your free automation audit and start saving today.</p>
                <Link to="/schedule" className="cta-button">Get Your Free Audit</Link>
              </section>
            </main>
          } />
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} AdaptAIze. All rights reserved.</p>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <Link to="/schedule">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
