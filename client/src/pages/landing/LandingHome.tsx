import React from 'react';
import { Link } from 'wouter';
import Header from '../../components/landing/common/Header';
import Footer from '../../components/landing/common/Footer';
import ContactForm from '../../components/landing/common/ContactForm';
import '../../styles/landing-pages.css';

const LandingHome: React.FC = () => {
  return (
    <div className="landing-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Professional Transportation & Logistics Solutions</h1>
            <p className="hero-text">
              AMS Transportation delivers tailored transportation and logistics solutions designed for your specific needs. 
              From flatbed and van services to complete freight management and warehouse relocation.
            </p>
            <a href="#services" className="hero-cta">Explore Our Services</a>
          </div>
        </div>
        <div 
          className="hero-image" 
          style={{ backgroundImage: 'url("/assets/trucks-highway.png")' }}
        ></div>
      </section>
      
      {/* Services Section */}
      <section className="features-section" id="services">
        <div className="container">
          <h2 className="section-title">Our Specialized Services</h2>
          <p className="section-subtitle">Comprehensive transportation solutions tailored to your business needs</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3 className="feature-title">Flatbed Trucking</h3>
              <p className="feature-text">Specialized flatbed transportation for oversized and non-standard freight across the continental US.</p>
              <a href="/landing/services/flatbed" className="hero-cta" style={{ marginTop: '1rem', display: 'inline-block' }}>Learn More</a>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🚐</div>
              <h3 className="feature-title">Van Transportation</h3>
              <p className="feature-text">Secure and reliable van transportation for time-sensitive and valuable cargo.</p>
              <a href="/landing/services/van" className="hero-cta" style={{ marginTop: '1rem', display: 'inline-block' }}>Learn More</a>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🏭</div>
              <h3 className="feature-title">Warehouse Relocation</h3>
              <p className="feature-text">Complete warehouse moving solutions including inventory management and setup.</p>
              <a href="/landing/services/warehouse-relocation" className="hero-cta" style={{ marginTop: '1rem', display: 'inline-block' }}>Learn More</a>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">📦</div>
              <h3 className="feature-title">Freight Management</h3>
              <p className="feature-text">End-to-end freight management services including routing, scheduling, and tracking.</p>
              <a href="/landing/services/freight-management" className="hero-cta" style={{ marginTop: '1rem', display: 'inline-block' }}>Learn More</a>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🗄️</div>
              <h3 className="feature-title">Storage Containers</h3>
              <p className="feature-text">Flexible short and long-term storage solutions with secure transportation.</p>
              <a href="/landing/services/storage-containers" className="hero-cta" style={{ marginTop: '1rem', display: 'inline-block' }}>Learn More</a>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🛠️</div>
              <h3 className="feature-title">Custom Solutions</h3>
              <p className="feature-text">Tailored logistics solutions designed to meet your unique transportation challenges.</p>
              <a href="/contact" className="hero-cta" style={{ marginTop: '1rem', display: 'inline-block' }}>Contact Us</a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose AMS Transportation</h2>
          <p className="section-subtitle">Delivering excellence in transportation and logistics since 2003</p>
          
          <div className="benefits-container">
            <div className="benefits-content">
              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div className="benefit-text">
                  <h3 className="benefit-title">Experienced Team</h3>
                  <p className="benefit-description">Our team brings decades of combined experience in transportation and logistics management.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div className="benefit-text">
                  <h3 className="benefit-title">Nationwide Coverage</h3>
                  <p className="benefit-description">Comprehensive service across all 48 continental states with strategic partnerships for optimized routing.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div className="benefit-text">
                  <h3 className="benefit-title">Modern Fleet</h3>
                  <p className="benefit-description">Well-maintained, modern vehicles equipped with advanced tracking and safety features.</p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div className="benefit-text">
                  <h3 className="benefit-title">24/7 Support</h3>
                  <p className="benefit-description">Round-the-clock customer service and shipment tracking for complete peace of mind.</p>
                </div>
              </div>
            </div>
            
            <div 
              className="benefits-image" 
              style={{ backgroundImage: 'url("/assets/1AMSTruck.png")' }}
            ></div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="contact-section">
        <ContactForm 
          title="Request a Quote Today"
          description="Fill out the form below with your transportation needs, and our team will provide a customized quote."
        />
      </section>
      
      <Footer />
    </div>
  );
};

export default LandingHome;