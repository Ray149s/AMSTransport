import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { X, Menu } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [location] = useLocation();
  
  // Close the menu when changing routes
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
  }, [location, isOpen, onClose]);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
      <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-lg flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">Menu</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        
        <nav className="flex-1 p-4">
          <ul className="space-y-6">
            <li>
              <Link href="/">
                <div className={`text-lg font-medium ${location === "/" ? "text-red-600 font-bold" : ""} cursor-pointer`}>
                  HOME
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className={`text-lg font-medium ${location === "/about" ? "text-red-600 font-bold" : ""} cursor-pointer`}>
                  ABOUT US
                </div>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <div className={`text-lg font-medium ${location === "/services" ? "text-red-600 font-bold" : ""} cursor-pointer`}>
                  SERVICES
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className={`text-lg font-medium ${location === "/contact" ? "text-red-600 font-bold" : ""} cursor-pointer`}>
                  CONTACT US
                </div>
              </Link>
            </li>
          </ul>
        </nav>
        
        <div className="p-4 border-t">
          <a 
            href="tel:943-227-5246"
            className="flex items-center text-red-600 font-medium"
          >
            <span className="mr-2">Call Us:</span>
            <span>943-227-5246</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;