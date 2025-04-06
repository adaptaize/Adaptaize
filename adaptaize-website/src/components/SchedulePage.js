import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SchedulePage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    businessSize: '',
    automationNeeds: '',
    preferredDate: '',
    preferredTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Redirect to home page after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="schedule-page">
      <div className="schedule-container">
        <h1>Schedule Your Free Workflow Audit</h1>
        <p className="schedule-intro">
          Fill out the form below to schedule your free automation audit. We'll analyze your business processes 
          and identify opportunities for AI-powered automation.
        </p>
        
        {submitSuccess ? (
          <div className="success-message">
            <h2>Thank You!</h2>
            <p>Your appointment request has been submitted successfully.</p>
            <p>We'll contact you shortly to confirm your free workflow audit.</p>
            <p>Redirecting you to the homepage...</p>
          </div>
        ) : (
          <form className="schedule-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="businessSize">Business Size</label>
              <select
                id="businessSize"
                name="businessSize"
                value={formData.businessSize}
                onChange={handleChange}
              >
                <option value="">Select an option</option>
                <option value="1-5">1-5 employees</option>
                <option value="6-20">6-20 employees</option>
                <option value="21-50">21-50 employees</option>
                <option value="51-200">51-200 employees</option>
                <option value="201+">201+ employees</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="automationNeeds">What areas would you like to automate?</label>
              <textarea
                id="automationNeeds"
                name="automationNeeds"
                value={formData.automationNeeds}
                onChange={handleChange}
                rows="4"
                placeholder="e.g., Email management, invoice processing, customer support..."
              ></textarea>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="preferredDate">Preferred Date</label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="preferredTime">Preferred Time</label>
                <select
                  id="preferredTime"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                >
                  <option value="">Select a time</option>
                  <option value="morning">Morning (9am-12pm)</option>
                  <option value="afternoon">Afternoon (12pm-3pm)</option>
                  <option value="evening">Evening (3pm-6pm)</option>
                </select>
              </div>
            </div>
            
            <div className="form-footer">
              <p className="required-note">* Required fields</p>
              <button 
                type="submit" 
                className="submit-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Schedule My Free Audit'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SchedulePage; 