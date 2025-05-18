import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import '../../../styles/landing-pages.css';

interface HeaderProps {
  links?: Array<{ text: string; url: string; type?: 'normal' | 'cta' }>;
}

const Header: React.FC<HeaderProps> = ({ 
  links = [
    { text: 'Home', url: '/landing/services' },
    { text: 'Flatbed', url: '/landing/services/flatbed' },
    { text: 'Van', url: '/landing/services/van' },
    { text: 'Warehouse', url: '/landing/services/warehouse-relocation' },
    { text: 'Freight', url: '/landing/services/freight-management' },
    { text: 'Storage', url: '/landing/services/storage-containers' },
    { text: 'Contact Us', url: '/contact', type: 'cta' }
  ] 
}) => {
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
    <header className={`landing-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-inner">
          <div className="logo">
            <Link href="/landing/services">
              <img 
                src="/assets/logo.png" 
                alt="AMS Transportation Logo" 
              />
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
                  <Link href={link.url}>
                    <span 
                      className={link.type === 'cta' ? 'nav-cta' : ''}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.text}
                    </span>
                  </Link>
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