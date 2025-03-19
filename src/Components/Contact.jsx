import React, { useState } from 'react';
import './Contact.css';

// Bubbles component for floating bubbles effect
const Bubbles = () => (
  <div className="bubbles">
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
    <div className="bubble"></div>
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setError(''); // Clear error message when user starts typing
    setSuccessMessage(''); // Clear success message
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!formData.fullName || !formData.email || !formData.message) {
      setError('Please fill in all fields.');
      return;
    }

    // Simulate sending email by just clearing the form and showing success message
    setSuccessMessage('Message Sent Successfully!');
    setFormData({ fullName: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      {/* Bubbles Background */}
      <Bubbles />

      <div className="contact-section">
        {/* Left: Image Section */}
        <div className="contact-image">
        <img src="/image/mail.jpg"/>
        </div>


        {/* Right: Form Section */}
        <div className="contact-form-section">
          <h2 className="text-center">Get in Touch</h2>

          {/* Show error message if there are any empty fields */}
          {error && <p className="error-message">{error}</p>}

          {/* Show success message if the form is submitted successfully */}
          {successMessage && <p className="success-message">{successMessage}</p>}

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-row">
              <label>
                Full Name:
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="input-field"
                />
              </label>
            </div>

            <div className="contact-form-row">
              <label>
                Email Address:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                />
              </label>
            </div>

            <div className="contact-form-row full-width">
              <label>
                Your Message:
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="input-field"
                />
              </label>
            </div>

            <div className="submit-box">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
  