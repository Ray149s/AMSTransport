import React from 'react';
import Header from '../../components/landing/common/Header';
import Footer from '../../components/landing/common/Footer';
import ContactForm from '../../components/landing/common/ContactForm';
import '../../styles/landing-pages.css';

const FlatbedService: React.FC = () => {
  return (
    <div className="landing-page">
      <Header />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">Professional Flatbed Trucking Services</h1>
            <p className="hero-text">
              AMS Transportation provides specialized flatbed transportation services for oversized 
              and non-standard freight across the continental United States. Our experienced team 
              ensures your cargo arrives safely and on time.
            </p>
            <a href="#contact" className="hero-cta">Get a Free Quote</a>
          </div>
        </div>
        <div 
          className="hero-image" 
          style={{ backgroundImage: 'url("/assets/flatbed-truck.png")' }}
        ></div>
      </section>
      
      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Our Flatbed Services</h2>
          <p className="section-subtitle">Comprehensive flatbed transportation solutions for your business</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🚚</div>
              <h3 className="feature-title">Standard Flatbed</h3>
              <p className="feature-text">
                48-53 ft. flatbed trailers for general freight with load capacities up to 48,000 lbs.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3 className="feature-title">Oversized Loads</h3>
              <p className="feature-text">
                Specialized equipment and permits for oversized and overweight cargo transportation.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3 className="feature-title">Secured Transport</h3>
              <p className="feature-text">
                Advanced cargo securing systems including straps, chains, and tarping for weather protection.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🛣️</div>
              <h3 className="feature-title">Step Deck Service</h3>
              <p className="feature-text">
                Step deck trailers for taller cargo with maximum legal height limitations.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🏢</div>
              <h3 className="feature-title">Construction Materials</h3>
              <p className="feature-text">
                Specialized transportation for construction materials, equipment, and machinery.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⏱️</div>
              <h3 className="feature-title">Expedited Service</h3>
              <p className="feature-text">
                Time-sensitive flatbed transportation with priority scheduling and routing.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Flatbed Services</h2>
          <p className="section-subtitle">Experience the AMS Transportation difference</p>
          
          <div className="benefits-container">
            <div className="benefits-content">
              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div className="benefit-text">
                  <h3 className="benefit-title">Experienced Drivers</h3>
                  <p className="benefit-description">
                    Our flatbed drivers have specialized training in cargo securing and oversized load management.
                  </p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div className="benefit-text">
                  <h3 className="benefit-title">Modern Equipment</h3>
                  <p className="benefit-description">
                    Well-maintained flatbed trailers with various configurations to accommodate different cargo types.
                  </p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div className="benefit-text">
                  <h3 className="benefit-title">Permit Management</h3>
                  <p className="benefit-description">
                    Complete handling of permits for oversized and overweight loads across all jurisdictions.
                  </p>
                </div>
              </div>
              
              <div className="benefit-item">
                <div className="benefit-icon">✓</div>
                <div className="benefit-text">
                  <h3 className="benefit-title">Real-time Tracking</h3>
                  <p className="benefit-description">
                    Advanced GPS tracking systems providing real-time updates on your shipment's location.
                  </p>
                </div>
              </div>
            </div>
            
            <div 
              className="benefits-image" 
              style={{ backgroundImage: 'url("/assets/hero-truck.png")' }}
            ></div>
          </div>
        </div>
      </section>
      
      {/* Industries Served Section */}
      <section className="features-section" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="container">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">Specialized flatbed solutions for diverse industry needs</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏗️</div>
              <h3 className="feature-title">Construction</h3>
              <p className="feature-text">
                Transportation of building materials, equipment, and prefabricated components.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🏭</div>
              <h3 className="feature-title">Manufacturing</h3>
              <p className="feature-text">
                Secure transport of machinery, raw materials, and finished products.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🌲</div>
              <h3 className="feature-title">Lumber & Building Supply</h3>
              <p className="feature-text">
                Specialized transport for lumber, drywall, and other building materials.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3 className="feature-title">Energy & Utilities</h3>
              <p className="feature-text">
                Transportation for transformers, utility poles, and energy equipment.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🚜</div>
              <h3 className="feature-title">Agriculture</h3>
              <p className="feature-text">
                Transportation of farming equipment, irrigation systems, and agricultural products.
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h3 className="feature-title">Industrial Machinery</h3>
              <p className="feature-text">
                Secure transport for heavy machinery, industrial equipment, and parts.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="contact-section" id="contact">
        <ContactForm 
          defaultService="flatbed"
          title="Request a Flatbed Service Quote"
          description="Tell us about your flatbed transportation needs, and our team will provide a customized quote."
        />
      </section>
      
      <Footer />
    </div>
  );
};

export default FlatbedService;