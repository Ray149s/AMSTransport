import React, { useState } from 'react';

const ContactForm = ({ onSubmit, formResponse, serviceOptions }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: serviceOptions[0].value,
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      await onSubmit(formData);
      
      // Reset form if submission was successful
      if (formResponse && formResponse.success) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: serviceOptions[0].value,
          message: ''
        });
      }
    }
  };

  return (
    <div className="contact-form-wrapper">
      <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <div className="error-message">{errors.name}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <div className="error-message">{errors.email}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
            placeholder="(123) 456-7890"
          />
          {errors.phone && <div className="error-message">{errors.phone}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="service">Service Needed</label>
          <select 
            id="service" 
            name="service" 
            value={formData.service}
            onChange={handleChange}
          >
            {serviceOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        
        <button type="submit" className="submit-button">Submit Request</button>
      </form>
      
      {formResponse && (
        <div 
          id="formResponse" 
          className={`form-response ${formResponse.success ? 'success' : 'error'}`}
        >
          {formResponse.message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;