# AMS Transportation Landing Pages
## React/Express Integration Guide

This guide explains how to implement the AMS Transportation landing pages into the alwaysmovingsomething.com React/Express application.

## Table of Contents
1. [Project Structure](#project-structure)
2. [React Components](#react-components)
3. [Express Backend](#express-backend)
4. [Styling Implementation](#styling-implementation)
5. [Asset Organization](#asset-organization)
6. [Integration Steps](#integration-steps)

## Project Structure

```
/src
  /components
    /landing
      /common
        Header.js
        Footer.js
        ServiceCard.js
        BenefitCard.js
        ContactForm.js
      MainLandingPage.js
      FlatbedPage.js
      VanPage.js
      WarehousePage.js
      FreightManagementPage.js
      StorageContainersPage.js
  /styles
    landing-pages.css
  /assets
    /images
      /landing
        /services
          logo.png
          flatbed-truck.png
          van.png
          warehouse-relocation.png
          freight-management.png
          storage-containers.png
  /routes
    index.js
/server
  /routes
    api.js
```

## React Components

### 1. Page Components

Each landing page should be developed as a standalone component that uses shared subcomponents. Each page should maintain the same structure but with service-specific content.

Example pattern for each page component:
```jsx
import React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import ContactForm from './common/ContactForm';
import '../styles/landing-pages.css';

const ServiceNamePage = () => {
  return (
    <div className="landing-page">
      <Header />
      
      {/* Hero Section with Service-Specific Content */}
      <section className="hero" id="hero">
        {/* Service-specific hero content */}
      </section>
      
      {/* Service-Specific Features Section */}
      <section className="features-section" id="features">
        {/* Service-specific features */}
      </section>
      
      {/* Service-Specific Benefits Section */}
      <section className="benefits-section" id="benefits">
        {/* Service-specific benefits */}
      </section>
      
      {/* Contact Form Section */}
      <section className="contact-section" id="contact">
        <ContactForm 
          defaultService="service-name"
          title="Request Service-Name Services"
          description="Service-specific form description"
        />
      </section>
      
      <Footer />
    </div>
  );
};

export default ServiceNamePage;
```

### 2. Shared Components

#### Header Component
```jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ links = [] }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll events for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <Link to="/landing/services">
              <img src="/assets/images/landing/logo.png" alt="AMS Transportation Logo" />
            </Link>
          </div>
          
          <nav className="nav-menu">
            <button 
              className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
            
            <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
              {links.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.url} 
                    className={link.type === 'cta' ? 'nav-cta' : ''}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
```

#### ContactForm Component
```jsx
import React, { useState } from 'react';

const ContactForm = ({ 
  onSubmit, 
  defaultService = '', 
  title = 'Get a Free Quote',
  description = 'Fill out the form below and we'll contact you shortly.'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    message: ''
  });
  const [formResponse, setFormResponse] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validate()) {
      try {
        const response = await fetch('/api/landing/services/submit-form', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
        
        const data = await response.json();
        setFormResponse(data);
        
        if (data.success) {
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: defaultService,
            message: ''
          });
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setFormResponse({
          success: false,
          message: 'An error occurred. Please try again later.'
        });
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
                rows="4"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Submit Request</button>
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
```

## Express Backend

Add this route to your Express backend to handle form submissions from the landing pages:

```javascript
// landing-routes.js

const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

// Form validation
const validateForm = [
  check('name').not().isEmpty().withMessage('Name is required'),
  check('email').isEmail().withMessage('Valid email is required'),
  check('phone').matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)
    .withMessage('Valid phone number is required'),
  check('service').not().isEmpty().withMessage('Service is required')
];

// Form submission endpoint
router.post('/landing/services/submit-form', validateForm, async (req, res) => {
  // Check for validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: 'Please correct the errors and try again',
      errors: errors.array()
    });
  }

  try {
    const { name, email, phone, service, message } = req.body;
    
    // Add your database storage logic here
    // Example: await db.collection('leads').insertOne({ name, email, phone, service, message });
    
    // Add your email notification logic here
    // Example: await sendEmail({ name, email, phone, service, message });
    
    return res.status(200).json({
      success: true,
      message: 'Thank you for your submission! We will contact you shortly.'
    });
  } catch (error) {
    console.error('Form submission error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong. Please try again later.'
    });
  }
});

module.exports = router;
```

## Styling Implementation

Use a CSS file (or CSS modules) to maintain the styling consistent with the existing design. Create a single CSS file (`landing-pages.css`) that contains all the styles for the landing pages.

## Asset Organization

1. Create an organization structure for the images:
```
/public
  /assets
    /images
      /landing
        logo.png
        hero-truck.png
        /services
          flatbed-truck.png
          van.png
          warehouse-relocation.png
          freight-management.png
          storage-containers.png
```

2. Update all image references in your components to use this structure.

## Integration Steps

1. **Setup Project Structure**
   - Create folders for components, assets, and styles
   
2. **Add Router Configuration**
   - Update your React Router configuration with the new routes:
   ```jsx
   // In your routes file
   import { Routes, Route } from 'react-router-dom';
   import MainLandingPage from '../components/landing/MainLandingPage';
   import FlatbedPage from '../components/landing/FlatbedPage';
   import VanPage from '../components/landing/VanPage';
   import WarehousePage from '../components/landing/WarehousePage';
   import FreightManagementPage from '../components/landing/FreightManagementPage';
   import StorageContainersPage from '../components/landing/StorageContainersPage';

   const AppRoutes = () => {
     return (
       <Routes>
         {/* Existing Routes */}
         
         {/* Landing Page Routes */}
         <Route path="/landing/services" element={<MainLandingPage />} />
         <Route path="/landing/services/flatbed" element={<FlatbedPage />} />
         <Route path="/landing/services/van" element={<VanPage />} />
         <Route path="/landing/services/warehouse-relocation" element={<WarehousePage />} />
         <Route path="/landing/services/freight-management" element={<FreightManagementPage />} />
         <Route path="/landing/services/storage-containers" element={<StorageContainersPage />} />
       </Routes>
     );
   };

   export default AppRoutes;
   ```
   
3. **Set Up Form Handling in Express**
   - Add the Express route handler for form submissions
   - Connect it to your database or email system
   
4. **Create Reusable Components**
   - Implement shared components like Header, Footer, ContactForm
   
5. **Implement Page Components**
   - Create each page component with service-specific content
   
6. **Add Styling**
   - Implement the CSS styling
   
7. **Testing**
   - Test all forms and navigation
   - Ensure responsive design works on all devices

## Additional Notes

1. **Fonts and Icons**
   - Use Font Awesome for icons
   - Use Roboto (or similar) as primary font

2. **Color Scheme**
   - Primary Red: #C41E3A
   - Primary Black: #000000
   - Primary White: #FFFFFF
   - Gray Shades: #F8F8F8, #333333

3. **Contact Information**
   - Primary Email: joe@alwaysmovingsomething.com
   - Business Address: 1920 Railroad Street, Suite #5, Statham, GA 30666
   - Phone Number: (404) 925-7529

4. **Performance Considerations**
   - Optimize images for web (compress and resize)
   - Use lazy loading for images
   - Consider code splitting for faster page loads