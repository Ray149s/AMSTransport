import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">FOUNDED IN 2006</h3>
            <p className="text-sm text-gray-300 mb-4">
              AMS Transportation is your trusted partner for all your shipping and logistics needs.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">OUR SERVICES</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>- Flatbed Transportation</li>
              <li>- Van Transportation</li>
              <li>- Warehouse Relocation</li>
              <li>- Freight Management</li>
              <li>- Storage Containers</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 uppercase">LOCATION</h3>
            <address className="not-italic text-sm text-gray-300 mb-4">
              <p className="flex items-start mb-2">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  AMS Transportation<br />
                  1900 Railroad Street<br />
                  Suite 100<br />
                  Stodium, GA 30066
                </span>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>©2006 - 2025 AMS Transportation</p>
          <Link href="/privacy">
            <a className="hover:text-white transition">Privacy Policy</a>
          </Link>
          <p>Powered The Social Gloo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
