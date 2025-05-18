import React from 'react';
import { Link } from 'wouter';
import '../../../styles/landing-pages.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="landing-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h3>AMS Transportation</h3>
            <p>Your trusted partner in transportation and logistics solutions across the United States.</p>
          </div>
          
          <div className="footer-column">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li><Link href="/landing/services/flatbed"><span>Flatbed Trucking</span></Link></li>
              <li><Link href="/landing/services/van"><span>Van Transportation</span></Link></li>
              <li><Link href="/landing/services/warehouse-relocation"><span>Warehouse Relocation</span></Link></li>
              <li><Link href="/landing/services/freight-management"><span>Freight Management</span></Link></li>
              <li><Link href="/landing/services/storage-containers"><span>Storage Containers</span></Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><Link href="/"><span>Main Website</span></Link></li>
              <li><Link href="/about"><span>About Us</span></Link></li>
              <li><Link href="/services"><span>Services</span></Link></li>
              <li><Link href="/contact"><span>Contact Us</span></Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Contact Information</h3>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📱</span>
              <span>Phone: (972) 767-8866</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <span>Email: joe@alwaysmovingsomething.com</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span>3225 Cumberland Blvd<br />Suite 100<br />Atlanta, GA 30339</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} AMS Transportation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;