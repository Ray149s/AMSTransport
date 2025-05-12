import { Link } from "wouter";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Main footer columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Founded column */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-4 uppercase">FOUNDED IN 2006</h3>
            <p className="text-sm text-gray-300 mb-4 max-w-xs">
              AMS Transportation is your trusted partner for shipping and logistics needs.
            </p>
          </div>
          
          {/* Services column */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-4 uppercase">OUR SERVICES</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>- Flatbed Transportation</li>
              <li>- Van Transportation</li>
              <li>- Warehouse Relocation</li>
              <li>- Freight Management</li>
              <li>- Storage Containers</li>
            </ul>
          </div>
          
          {/* Contact column */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-4 uppercase">CONTACT US</h3>
            <address className="not-italic text-sm text-gray-300 mb-4">
              <p className="flex items-start mb-2">
                <MapPin className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  AMS Transportation<br />
                  1920 Railroad Street<br />
                  Suite #5<br />
                  Statham, GA 30666
                </span>
              </p>
              <p className="flex items-start mb-2">
                <Phone className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  <a href="tel:943-227-5246" className="hover:text-white">943-227-5246</a>
                </span>
              </p>
              <p className="flex items-start mb-2">
                <Mail className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                <span>
                  <a href="mailto:info@alwaysmovingsomething.com" className="hover:text-white">info@alwaysmovingsomething.com</a>
                </span>
              </p>
            </address>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="border-t border-gray-900 pt-8 mt-8 text-sm text-gray-400 grid grid-cols-1 md:grid-cols-3 gap-4">
          <p>©2006 - 2025 AMS Transportation</p>
          <div className="text-center">
            <Link href="/privacy">
              <span className="hover:text-white transition cursor-pointer">Privacy Policy</span>
            </Link>
          </div>
          <p className="text-right md:text-right">Powered by The Social Gloo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
