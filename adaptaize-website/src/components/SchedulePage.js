import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SchedulePage = () => {
  const navigate = useNavigate();
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
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
          Schedule your free automation audit below. We'll analyze your business processes 
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
            <div className="form-group calendar-embed-container">
              <label>Schedule Your Consultation</label>
              <div className="calendar-embed">
                {/* Google Calendar Appointment Scheduling begin */}
                <iframe 
                  src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3th_l62VzVeuwq-ChUTZdY3Q8VXdgcIgtkPugiIPxhF1grekEPzkqwdQHgLh5AEgkSz803gRYJ?gv=true" 
                  style={{ border: 0 }} 
                  width="100%" 
                  height="600" 
                  frameBorder="0"
                  title="Google Calendar Scheduler"
                ></iframe>
                {/* end Google Calendar Appointment Scheduling */}
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SchedulePage; 