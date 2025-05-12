import { Link, useLocation } from "wouter";
import { Phone } from "lucide-react";

const Header = () => {
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

  return (
    <header className="ams-header bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center py-4">
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center cursor-pointer">
              <img src="/assets/Logo-Red-Clear.png" alt="AMS Transportation Logo" className="w-auto h-12" />
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex items-center">
          <a href="tel:943-227-5246" className="mr-6 flex items-center text-sm">
            <span className="mr-1">Call:</span>
            <Phone className="h-4 w-4 mr-1" />
            <span className="font-bold">943-227-5246</span>
          </a>
        </div>

        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <li>
              <Link href="/">
                <div className={`nav-link text-sm font-medium uppercase cursor-pointer ${isActive("/") ? "text-primary font-bold" : ""}`}>
                  HOME
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className={`nav-link text-sm font-medium uppercase cursor-pointer ${isActive("/about") ? "text-primary font-bold" : ""}`}>
                  ABOUT US
                </div>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <div className={`nav-link text-sm font-medium uppercase cursor-pointer ${isActive("/services") ? "text-primary font-bold" : ""}`}>
                  SERVICES
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className={`nav-link text-sm font-medium uppercase cursor-pointer ${isActive("/contact") ? "text-primary font-bold" : ""}`}>
                  CONTACT US
                </div>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="md:hidden">
          <button className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
