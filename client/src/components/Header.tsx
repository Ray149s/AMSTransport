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
            <a className="flex items-center">
              <svg className="w-auto h-10" viewBox="0 0 200 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 10 L50 40 L10 40 Z" fill="#e01e1e" />
                <path d="M60 15 L80 15 L80 40 L60 40 Z" fill="#e01e1e" />
                <path d="M90 15 L110 15 L120 30 L110 40 L90 40 Z" fill="#e01e1e" />
                <path d="M130 15 L160 15 L150 40 L130 40 Z" fill="#e01e1e" />
                <rect x="160" y="10" width="30" height="5" fill="#444" />
                <rect x="160" y="18" width="30" height="5" fill="#444" />
                <rect x="160" y="26" width="30" height="5" fill="#444" />
                <rect x="160" y="34" width="30" height="5" fill="#444" />
              </svg>
            </a>
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
                <a className={`nav-link text-sm font-medium uppercase ${isActive("/") ? "text-primary font-bold" : ""}`}>
                  HOME
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={`nav-link text-sm font-medium uppercase ${isActive("/about") ? "text-primary font-bold" : ""}`}>
                  ABOUT US
                </a>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <a className={`nav-link text-sm font-medium uppercase ${isActive("/services") ? "text-primary font-bold" : ""}`}>
                  SERVICES
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className={`nav-link text-sm font-medium uppercase ${isActive("/contact") ? "text-primary font-bold" : ""}`}>
                  CONTACT US
                </a>
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
