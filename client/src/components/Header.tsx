import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location === path;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <header className="ams-header bg-white sticky top-0 z-40 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center py-2">
          <div className="flex items-center">
            <Link href="/">
              <div className="flex items-center cursor-pointer">
                <img src="/assets/Logo-Clear.png" alt="AMS Transportation Logo" className="w-auto h-12" />
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <a href="tel:943-227-5246" className="mr-6 flex items-center text-sm">
              <span className="mr-1">Call:</span> 
              <span className="font-bold text-red-600">943-227-5246</span>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200">
          <div className="container mx-auto px-4">
            <nav className="hidden md:block py-2">
              <ul className="flex justify-center space-x-12">
                <li>
                  <Link href="/">
                    <div className={`nav-link text-sm font-medium uppercase cursor-pointer ${isActive("/") ? "text-red-600 font-bold" : ""}`}>
                      HOME
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/about">
                    <div className={`nav-link text-sm font-medium uppercase cursor-pointer ${isActive("/about") ? "text-red-600 font-bold" : ""}`}>
                      ABOUT US
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <div className={`nav-link text-sm font-medium uppercase cursor-pointer ${isActive("/services") ? "text-red-600 font-bold" : ""}`}>
                      SERVICES
                    </div>
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    <div className={`nav-link text-sm font-medium uppercase cursor-pointer ${isActive("/contact") ? "text-red-600 font-bold" : ""}`}>
                      CONTACT US
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="md:hidden py-2 flex justify-end">
              <button 
                className="p-2 focus:outline-none focus:ring-2 focus:ring-red-600 rounded-md"
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>
      
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </>
  );
};

export default Header;
