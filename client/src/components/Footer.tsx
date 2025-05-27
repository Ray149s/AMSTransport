import { Link } from "wouter";

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
              AMS Transportation is your trusted partner for all your transportation and logistics needs.
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
          
          {/* Location column */}
          <div className="md:col-span-4">
            <h3 className="text-lg font-bold mb-4 uppercase">LOCATION</h3>
            <address className="not-italic text-sm text-gray-300 mb-4">
              <p>
                AMS Transportation<br />
                1920 Railroad Street<br />
                Suite #5<br />
                Statham, GA 30666
              </p>
            </address>
          </div>
        </div>
        
        {/* Footer bottom */}
        <div className="border-t border-gray-900 pt-8 mt-8 text-sm text-gray-400 flex justify-between">
          <div className="flex items-center space-x-4">
            <p>©2006 - 2025 AMS Transportation</p>
            <Link href="/terms">
              <span className="hover:text-white transition cursor-pointer">Privacy Policy</span>
            </Link>
          </div>
          <div>
            <p>Powered The Social Gloo</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
