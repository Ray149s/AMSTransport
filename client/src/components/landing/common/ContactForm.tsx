import React, { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import '../../../styles/landing-pages.css';

interface ContactFormProps {
  defaultService?: string;
  title?: string;
  description?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

interface FormResponse {
  success: boolean;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  defaultService = '',
  title = 'Get a Free Quote',
  description = 'Fill out the form below and we will contact you shortly.'
}) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: defaultService || 'flatbed',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formResponse, setFormResponse] = useState<FormResponse | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = () => {
    const newErrors: FormErrors = {};
    
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validate()) {
      setIsSubmitting(true);
      
      try {
        const response = await apiRequest('POST', '/api/landing/services/submit-form', formData);
        const data = await response.json();
        
        setFormResponse({
          success: data.success,
          message: data.message || 'Thank you for your submission!'
        });
        
        if (data.success) {
          // Reset form on successful submission
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: defaultService || 'flatbed',
            message: ''
          });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setFormResponse({
          success: false,
          message: 'An error occurred. Please try again later.'
        });
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="container">
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="section-title">{title}</h2>
          <p className="contact-text">{description}</p>
        </div>
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
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
                <option value="flatbed">Flatbed Trucking</option>
                <option value="van">Van Transportation</option>
                <option value="warehouse">Warehouse Relocation</option>
                <option value="freight">Freight Management</option>
                <option value="storage">Storage Containers</option>
                <option value="other">Other (Specify in Message)</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows={4}
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
          
          {formResponse && (
            <div 
              className={`form-response ${formResponse.success ? 'success' : 'error'}`}
            >
              {formResponse.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;