import { Helmet } from "react-helmet";
import { ReactNode } from "react";

interface LandingPageLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

const LandingPageLayout = ({ 
  children, 
  title, 
  description 
}: LandingPageLayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>{title} - AMS Transportation</title>
        <meta name="description" content={description} />
      </Helmet>
      
      {/* No Header component - only a minimal branding */}
      <div className="bg-black text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img 
                src="/Logo Red Clear.png" 
                alt="AMS Transportation" 
                className="h-12 mr-4" 
              />
              <span className="text-xl font-bold">AMS Transportation</span>
            </div>
            
            {/* Contact phone only */}
            <a 
              href="tel:943-227-5246" 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md transition duration-300"
            >
              Call Now: 943-227-5246
            </a>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Simplified footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p>© {new Date().getFullYear()} AMS Transportation. All rights reserved.</p>
            <p className="mt-2">
              <a href="mailto:joe@alwaysmovingsomething.com" className="text-red-500 hover:text-red-400">
                joe@alwaysmovingsomething.com
              </a> | <a href="tel:943-227-5246" className="text-red-500 hover:text-red-400">
                943-227-5246
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPageLayout;