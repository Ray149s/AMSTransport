import { Helmet } from "react-helmet";
import { Truck, Warehouse, Package, Container, Play } from "lucide-react";
import { useState, useRef } from "react";
import Hero from "@/components/Hero";
import ContactBar from "@/components/ContactBar";

const Services = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (!isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <Helmet>
        <title>Our Services - AMS Transportation</title>
        <meta name="description" content="Explore AMS Transportation's comprehensive services including transportation, warehouse relocation, freight management, and storage container solutions." />
      </Helmet>
      
      <Hero showContactButton={false} />
      <ContactBar />
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h1 className="text-3xl font-bold mb-4">Our Services</h1>
            <p className="text-gray-600">
              AMS Transportation offers a comprehensive range of logistics and transportation services designed to meet your specific needs with efficiency and reliability.
            </p>
          </div>

          {/* Promotional Video */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="relative rounded-lg overflow-hidden bg-gray-800">
              <div className="aspect-w-16 aspect-h-9 relative">
                {!isPlaying && (
                  <div 
                    className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
                    onClick={handlePlayVideo}
                  >
                    <div className="bg-white/20 rounded-full p-4">
                      <Play className="h-16 w-16 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-black/30"></div>
                  </div>
                )}
                
                <video 
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  src="/assets/videos/why-ams-transportation.mp4"
                  poster="/assets/Facebook-Group-Cover.jpg"
                  onClick={handlePlayVideo}
                  onEnded={() => setIsPlaying(false)}
                  controls={isPlaying}
                />
                {!isPlaying && (
                  <div className="absolute bottom-8 left-0 right-0 text-white text-2xl font-bold z-10 text-center">
                    Why Choose AMS Transportation
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="space-y-16">
            {/* Transportation Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-100 p-8 rounded-lg flex justify-center">
                <img src="/assets/AMS-Truck-Photo.png" alt="AMS Transportation Truck" className="h-40 w-auto" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Transportation</h2>
                <p className="text-gray-600 mb-4">
                  Our transportation services cover a wide range of needs, from standard deliveries to specialized cargo handling.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Flatbed services for oversized or heavy items</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Van transportation for standard freight</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Refrigerated transport for temperature-sensitive goods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Expedited shipping options for time-sensitive deliveries</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Warehouse Relocation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2 bg-gray-100 p-8 rounded-lg flex justify-center">
                <img src="/assets/AMS-Warehouse.png" alt="AMS Warehouse" className="h-40 w-auto" />
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-4">Warehouse Relocation</h2>
                <p className="text-gray-600 mb-4">
                  Moving your warehouse or distribution center requires careful planning and execution. Our team specializes in seamless transitions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Comprehensive relocation planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Inventory management during transition</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Equipment disassembly and reassembly</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Minimal disruption to your operations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Freight Management */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-gray-100 p-8 rounded-lg flex justify-center">
                <Package className="h-32 w-32 text-red-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Freight Management</h2>
                <p className="text-gray-600 mb-4">
                  Our freight management services provide end-to-end solutions to optimize your shipping operations.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Strategic planning and route optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Real-time tracking and monitoring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Detailed reporting and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Cost-effective shipping solutions</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Storage Containers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-1 md:order-2 bg-gray-100 p-8 rounded-lg flex justify-center">
                <img src="/assets/Container.png" alt="AMS Storage Container" className="h-40 w-auto" />
              </div>
              <div className="order-2 md:order-1">
                <h2 className="text-2xl font-bold mb-4">Storage Containers</h2>
                <p className="text-gray-600 mb-4">
                  Our secure storage containers provide flexible solutions for your temporary or long-term storage needs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Weather-resistant and secure containers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Various sizes to accommodate different needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>On-site delivery and pickup</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">•</span>
                    <span>Climate-controlled options available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
