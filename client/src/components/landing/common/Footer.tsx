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
              <li><a href="/landing/services/flatbed">Flatbed Trucking</a></li>
              <li><a href="/landing/services/van">Van Transportation</a></li>
              <li><a href="/landing/services/warehouse-relocation">Warehouse Relocation</a></li>
              <li><a href="/landing/services/freight-management">Freight Management</a></li>
              <li><a href="/landing/services/storage-containers">Storage Containers</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="/">Main Website</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact Us</a></li>
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