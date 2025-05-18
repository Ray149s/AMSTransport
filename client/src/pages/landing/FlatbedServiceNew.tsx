import React, { useState } from 'react';
import { apiRequest } from '@/lib/queryClient';
import '../../styles/landing-pages-new.css';

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

const FlatbedServiceNew: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'flatbed',
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
            service: 'flatbed',
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

  const currentYear = new Date().getFullYear();

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="landing-header">
        <div className="container">
          <div className="header-inner">
            <div className="logo">
              <a href="/landing/services">
                <img src="/assets/logo.png" alt="AMS Transportation Logo" />
              </a>
            </div>
            
            <nav className="nav-menu">
              <ul className="nav-list">
                <li className="nav-item">
                  <a href="/landing/services" className="nav-link">Home</a>
                </li>
                <li className="nav-item">
                  <a href="#features" className="nav-link">Features</a>
                </li>
                <li className="nav-item">
                  <a href="#benefits" className="nav-link">Benefits</a>
                </li>
                <li className="nav-item">
                  <a href="#contact" className="nav-cta">GET A QUOTE</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-bg" style={{ backgroundImage: 'url("/assets/hero-truck.png")' }}></div>
        <div className="hero-overlay">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                FLATBED<br />
                TRUCKING<br />
                <span className="highlight">SERVICES</span>
              </h1>
              <p className="hero-subtitle">Specialized Transport for Oversized and Irregular Loads</p>
              <a href="#contact" className="hero-btn">REQUEST A FREE QUOTE</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section section-light">
        <div className="container">
          <h2 className="section-title">Flatbed Service Features</h2>
          <span className="title-underline"></span>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/truck-icon.svg" alt="Truck Icon" />
                🚚
              </div>
              <h3 className="feature-title">Open-Deck Loading</h3>
              <p className="feature-text">
                Our flatbed trailers provide easy access for loading and unloading of cargo from any angle, making them ideal for oversized and irregularly shaped freight.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/measure-icon.svg" alt="Measure Icon" />
                📏
              </div>
              <h3 className="feature-title">Versatile Dimensions</h3>
              <p className="feature-text">
                Standard 48-53 foot trailers with weight capacities up to 48,000 pounds, accommodating a wide range of cargo dimensions and specifications.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/shield-icon.svg" alt="Shield Icon" />
                🛡️
              </div>
              <h3 className="feature-title">Secure Transport</h3>
              <p className="feature-text">
                Professional load securement with tarps, straps, chains, and edge protectors to ensure your cargo arrives safely and in perfect condition.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="section section-gray">
        <div className="container">
          <h2 className="section-title">Why Choose Our Flatbed Services</h2>
          <span className="title-underline"></span>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/gear-icon.svg" alt="Gear Icon" />
                ⚙️
              </div>
              <h3 className="feature-title">Specialized Equipment</h3>
              <p className="feature-text">
                Modern fleet of flatbed trailers equipped with the latest technology and safety features for efficient cargo handling.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/certificate-icon.svg" alt="Certificate Icon" />
                🏆
              </div>
              <h3 className="feature-title">Certified Operators</h3>
              <p className="feature-text">
                Experienced drivers specially trained in flatbed operations, load securement, and oversized cargo transport regulations.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/map-icon.svg" alt="Map Icon" />
                🗺️
              </div>
              <h3 className="feature-title">Multi-State Coverage</h3>
              <p className="feature-text">
                Comprehensive flatbed services throughout the Southeast region with permits and route planning for oversized loads.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cargo Types Section */}
      <section className="section section-light">
        <div className="container">
          <h2 className="section-title">Common Flatbed Cargo Types</h2>
          <span className="title-underline"></span>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/building-icon.svg" alt="Building Icon" />
                🏗️
              </div>
              <h3 className="feature-title">Construction Materials</h3>
              <p className="feature-text">
                Lumber, steel beams, concrete forms, pipes, and other building materials that require open-deck loading.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/machinery-icon.svg" alt="Machinery Icon" />
                🚜
              </div>
              <h3 className="feature-title">Heavy Machinery</h3>
              <p className="feature-text">
                Agricultural equipment, construction machinery, industrial systems, and other heavy oversized equipment.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <img src="/assets/pallet-icon.svg" alt="Pallet Icon" />
                📦
              </div>
              <h3 className="feature-title">Palletized Goods</h3>
              <p className="feature-text">
                Large pallets of materials that require side loading or overhead crane placement onto an open trailer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact" className="section section-gray">
        <div className="container">
          <div className="form-section">
            <div className="form-content">
              <h2 className="form-title">Request Flatbed Services</h2>
              <span className="title-underline" style={{ margin: '0 0 20px 0' }}></span>
              <p className="form-text">
                Fill out the form below and we'll contact you with a customized quote for your flatbed shipping needs.
              </p>
            </div>
            
            <div className="form-container">
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    className="form-control" 
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {errors.name && <div className="error-message">{errors.name}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    className="form-control" 
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="form-control" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && <div className="error-message">{errors.phone}</div>}
                </div>
                
                <div className="form-group">
                  <label htmlFor="service">Service Needed</label>
                  <select 
                    id="service" 
                    name="service" 
                    className="form-control" 
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="flatbed">Flatbed</option>
                    <option value="van">Van</option>
                    <option value="warehouse">Warehouse</option>
                    <option value="freight">Freight</option>
                    <option value="storage">Storage</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message (Include cargo details, dimensions, weight if known)</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    className="form-control" 
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'SUBMITTING...' : 'SUBMIT REQUEST'}
                </button>
                
                {formResponse && (
                  <div className={`form-response ${formResponse.success ? 'success' : 'error'}`}>
                    {formResponse.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <img src="/assets/logo.png" alt="AMS Transportation Logo" />
              </div>
              
              <h3 className="footer-title">Contact Us</h3>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  1920 Railroad Street, Suite #5, Statham, GA 30666
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <div>(404) 925-7529</div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <div>joe@alwaysmovingsomething.com</div>
              </div>
            </div>
            
            <div>
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><a href="/landing/services">Home</a></li>
                <li><a href="#features">Service Features</a></li>
                <li><a href="#benefits">Benefits</a></li>
                <li><a href="#contact">Get a Quote</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="footer-title">Connect With Us</h3>
              <div className="social-icons">
                <a href="#" className="social-icon" aria-label="Facebook">f</a>
                <a href="#" className="social-icon" aria-label="LinkedIn">in</a>
                <a href="#" className="social-icon" aria-label="Twitter">t</a>
                <a href="#" className="social-icon" aria-label="Instagram">ig</a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; {currentYear} AMS Transportation. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FlatbedServiceNew;