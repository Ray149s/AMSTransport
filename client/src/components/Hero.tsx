import { Link } from "wouter";
import { Button } from "@/components/ui/button";

interface HeroProps {
  showContactButton?: boolean;
}

const Hero = ({ showContactButton = true }: HeroProps) => {
  return (
    <div 
      className="hero-section bg-gray-800 relative overflow-hidden"
      style={{ 
        backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/Homepage-Image.jpg')"
      }}
    >
      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="flex flex-col items-center text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">AMS</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-red-500 italic">TRANSPORTATION</h2>
          <p className="text-xl mb-8 max-w-2xl">
            Driven by Innovation, Fueled by Success
          </p>
          
          {showContactButton && (
            <Link href="/contact">
              <Button variant="ams" size="lg" className="font-bold px-8 py-4 rounded-md">
                Contact Us Today
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
