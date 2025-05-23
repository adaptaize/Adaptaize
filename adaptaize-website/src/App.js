import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import SchedulePage from './components/SchedulePage';
import './components/SchedulePage.css';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Contact from './components/Contact';
import logo from './assets/logo.svg';
import heroGraph from './assets/hero-graph.svg';

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: section } });
    } else {
      document.querySelector(`#${section}`).scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="nav">
      <Link to="/" className="logo">
        <img src={logo} alt="AdaptAIze" height="40" />
      </Link>
      <div className="nav-links">
        <button className="nav-button" onClick={() => handleNavigation('how-it-works')}>How It Works</button>
        <button className="nav-button" onClick={() => handleNavigation('testimonials')}>Testimonials</button>
        <Link to="/contact" className="nav-button">Contact Us</Link>
        <Link to="/schedule" className="cta-button primary">Schedule Audit</Link>
      </div>
    </nav>
  );
}

function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
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
    },
    {
      name: "Sarah M.",
      role: "Real Estate Agent",
      quote: "The AI automation for document processing has been a game-changer. We're handling twice the number of properties with the same team."
    },
    {
      name: "David K.",
      role: "Restaurant Owner",
      quote: "From inventory management to customer feedback, AdaptAIze automated everything we needed. The ROI was clear within the first month."
    }
  ];

  // Number of testimonials to show at once
  const testimonialsPerView = 3;
  
  // Calculate the total number of slides
  const totalSlides = Math.ceil(testimonials.length / testimonialsPerView);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(timer);
  }, [totalSlides]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  // Get the testimonials for the current slide
  const getCurrentTestimonials = () => {
    const startIndex = currentIndex * testimonialsPerView;
    return testimonials.slice(startIndex, startIndex + testimonialsPerView);
  };

  return (
    <div className="testimonial-carousel">
      <button className="carousel-button prev" onClick={prevTestimonial}>
        <span className="arrow">←</span>
      </button>
      <div className="testimonial-content">
        {getCurrentTestimonials().map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p className="quote">"{testimonial.quote}"</p>
            <p className="name">{testimonial.name}</p>
            <p className="role">{testimonial.role}</p>
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={nextTestimonial}>
        <span className="arrow">→</span>
      </button>
      <div className="carousel-dots">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <Navigation />
        </header>

        <ScrollToSection />

        <Routes>
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={
            <main className="bg-gray-50 text-gray-800">
              {/* Hero Section */}
              <section id="home" className="hero">
                <div className="hero-content">
                  <div className="hero-text">
                    <h1><b>Adapt</b> Your Business To <b>AI</b> Era — <b>Ze</b>ro Upfront Cost.</h1>
                    <p>We help businesses save time and money by automating everyday tasks with AI. If we don't save you money, you don't pay.</p>
                    <div className="hero-buttons">
                      <Link to="/schedule" className="cta-button primary">Get Your Free Audit</Link>
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
                    <a href="/schedule" className="cta-button primary">Get Started</a>
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
          } />
        </Routes>

        <footer className="footer">
          <div className="footer-content">
            <p>&copy; {new Date().getFullYear()} AdaptAIze. All rights reserved.</p>
            <div className="footer-links">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
