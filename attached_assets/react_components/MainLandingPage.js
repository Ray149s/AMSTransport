import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ServiceCard from './components/ServiceCard';
import BenefitCard from './components/BenefitCard';
import ContactForm from './components/ContactForm';
import './LandingPages.css';

const MainLandingPage = () => {
  const [formResponse, setFormResponse] = useState(null);
  
  // Handle form submission
  const handleFormSubmit = async (formData) => {
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
      return data;
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormResponse({
        success: false,
        message: 'An error occurred. Please try again later.'
      });
    }
  };
  
  // Animation for elements on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.benefit-card, .service-card, .contact-form-container');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (position < windowHeight - 100) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    };
    
    // Set initial styles
    document.querySelectorAll('.benefit-card, .service-card, .contact-form-container').forEach(element => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="landing-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="hero-content">
          <h1>Transportation Services for Every Business Need</h1>
          <p>Reliable, on-time delivery solutions from a trusted partner in logistics</p>
          <a href="#contact" className="cta-button">Get a Quote</a>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <h2 className="section-title">Our Transportation Services</h2>
          <p className="section-subtitle">Comprehensive logistics solutions customized for your business</p>
          
          <div className="service-grid">
            <ServiceCard 
              title="Flatbed Trucking" 
              description="Open deck transportation for oversized and specialty freight." 
              image="/images/landing/services/flatbed-truck.png"
              link="#"
            />
            <ServiceCard 
              title="Van Transportation" 
              description="Secure, enclosed transportation for your valuable cargo." 
              image="/images/landing/services/van.png"
              link="#"
            />
            <ServiceCard 
              title="Warehouse Relocation" 
              description="Complete logistics solutions for warehouse moves and transitions." 
              image="/images/landing/services/warehouse-relocation.png"
              link="#"
            />
            <ServiceCard 
              title="Freight Management" 
              description="End-to-end freight management services from a single source." 
              image="/images/landing/services/freight-management.png"
              link="#"
            />
            <ServiceCard 
              title="Storage Containers" 
              description="Versatile storage solutions for businesses of all sizes." 
              image="/images/landing/services/storage-containers.png"
              link="#"
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us Section */}
      <section className="benefits-section" id="why-us">
        <div className="container">
          <h2 className="section-title">Why Choose AMS Transportation</h2>
          <p className="section-subtitle">Experience the difference with our premium transportation services</p>
          
          <div className="benefits-grid">
            <BenefitCard 
              icon="clock" 
              title="On-Time Delivery" 
              description="Our drivers and dispatchers work together to ensure your freight arrives exactly when expected."
            />
            <BenefitCard 
              icon="shield" 
              title="Safety First" 
              description="Rigorous safety protocols and well-maintained equipment for secure transportation."
            />
            <BenefitCard 
              icon="users" 
              title="Experienced Team" 
              description="Our professional staff brings decades of combined experience in transportation logistics."
            />
            <BenefitCard 
              icon="truck" 
              title="Modern Fleet" 
              description="Late-model vehicles equipped with advanced GPS tracking and communication technology."
            />
            <BenefitCard 
              icon="headset" 
              title="24/7 Support" 
              description="Around-the-clock customer service to address any questions or concerns."
            />
            <BenefitCard 
              icon="chart-line" 
              title="Competitive Rates" 
              description="Cost-effective transportation solutions without compromising on quality or reliability."
            />
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-container">
            <div className="contact-content">
              <h2 className="section-title">Get a Free Quote</h2>
              <p className="contact-text">Fill out the form below and we'll contact you with pricing information for your specific transportation needs.</p>
            </div>
            <div className="contact-form-container">
              <ContactForm 
                onSubmit={handleFormSubmit} 
                formResponse={formResponse}
                serviceOptions={[
                  { value: "flatbed", label: "Flatbed Trucking" },
                  { value: "van", label: "Van Transportation" },
                  { value: "warehouse", label: "Warehouse Relocation" },
                  { value: "freight", label: "Freight Management" },
                  { value: "storage", label: "Storage Containers" },
                  { value: "other", label: "Other (Specify in Message)" }
                ]}
              />
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MainLandingPage;