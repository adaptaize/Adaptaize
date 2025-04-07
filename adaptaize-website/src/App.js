import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import SchedulePage from './components/SchedulePage';
import HomePage from './components/HomePage';
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
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/contact" element={<Contact />} />
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
