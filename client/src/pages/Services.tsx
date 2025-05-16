import { Helmet } from "react-helmet";
import { Truck, Warehouse, Package, Container, Play, ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import { Link } from "wouter";
import Hero from "@/components/Hero";
import ContactBar from "@/components/ContactBar";
import CallToAction from "@/components/CallToAction";

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
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Services</h1>
            <div className="w-80 h-1 bg-red-600 mb-8"></div>
            
            <div className="mb-12">
              <p className="text-gray-700 mb-12 text-lg">
                At AMS Transportation, we deliver tailored transportation and logistics solutions designed to meet your unique needs. With a dedication to safety, reliability, and efficiency, we ensure your cargo reaches its destination seamlessly. Here's an overview of our core services:
              </p>
              
              {/* Services Image */}
              <div className="max-w-4xl mx-auto mb-16">
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <div className="aspect-w-16 aspect-h-9 relative">
                    <img 
                      src="/assets/ams-services-trucks.png" 
                      alt="AMS Transportation Services - Trucks on highway" 
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute bottom-8 left-0 right-0 text-white text-2xl font-bold z-10 text-center">
                      Why Choose AMS Transportation
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Flatbed Transportation */}
            <div className="mb-12 border-b border-gray-200 pb-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">Flatbed Transportation</h2>
                  <p className="text-gray-700 mb-4">
                    Our flatbed services are designed for transporting oversized, heavy, or specialized cargo that doesn't fit in standard vehicles. We handle:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span><span className="font-semibold">Loading and Unloading:</span> Expert assistance for heavy or bulky items.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span><span className="font-semibold">Heavy Hauling:</span> Perfect for machinery, construction equipment, or large-scale items.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span><span className="font-semibold">Oversized Freight:</span> Transport of materials like industrial equipment, prefabricated structures, and building supplies.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span><span className="font-semibold">Specialized Freight Transport:</span> Reliable handling of vehicles, boats, or agricultural equipment.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span><span className="font-semibold">Job Site Deliveries:</span> Direct delivery to construction sites or other job locations.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span><span className="font-semibold">Regional Coverage:</span> Serving the Southeast, including Florida, Georgia, South Carolina, North Carolina, Tennessee, Kentucky, and Mississippi.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span><span className="font-semibold">Tarps and Securement:</span> We provide tarps to protect your cargo and securement solutions to ensure safe transport.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700">
                    Whether you're in construction, manufacturing, or agriculture, our flatbed transportation services are built to support your industry's unique requirements.
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-center items-center h-full">
                    <img src="/assets/AMS-Truck-Photo.png" alt="AMS Flatbed Transportation" className="max-h-64 w-auto" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Van Transportation */}
            <div className="mb-12 border-b border-gray-200 pb-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 order-2 lg:order-1">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-center items-center h-full">
                    <Truck className="h-32 w-32 text-red-600" />
                  </div>
                </div>
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <h2 className="text-2xl font-bold mb-4">Van Transportation</h2>
                  <p className="text-gray-700 mb-4">
                    For your standard freight needs, our van transportation services are second to none.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We offer:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>Safe and secure transport of a wide variety of goods.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>Reliable and timely deliveries to keep your operations running smoothly.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>Clean, modern equipment designed to maintain the quality of your freight.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Warehouse Relocation */}
            <div className="mb-12 border-b border-gray-200 pb-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">Warehouse Relocation</h2>
                  <p className="text-gray-700 mb-4">
                    Relocating a warehouse is a complex task, and our team is here to make it simple.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We provide:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>Comprehensive logistics support for relocating operations efficiently.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>Assistance with inventory management and coordination.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>Expert guidance to ensure minimal downtime and disruption.</span>
                    </li>
                  </ul>
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-center items-center h-full">
                    <img src="/assets/AMS-Warehouse.png" alt="AMS Warehouse Relocation" className="max-h-64 w-auto" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Freight Management */}
            <div className="mb-12 border-b border-gray-200 pb-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1 order-2 lg:order-1">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-center items-center h-full">
                    <Package className="h-32 w-32 text-red-600" />
                  </div>
                </div>
                <div className="lg:col-span-2 order-1 lg:order-2">
                  <h2 className="text-2xl font-bold mb-4">Freight Management</h2>
                  <p className="text-gray-700 mb-4">
                    Streamline your shipping process with our freight management services.
                  </p>
                  <p className="text-gray-700 mb-4">
                    We handle:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span><span className="font-semibold">Planning and Execution:</span> From start to finish, we manage the details of your shipments.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span><span className="font-semibold">Tracking and Reporting:</span> Stay informed with real-time updates and detailed reports.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span>Optimized logistics to ensure timely and cost-effective delivery.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Storage Container Rental & Sales */}
            <div className="mb-12">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-bold mb-4">Storage Container Rental & Sales</h2>
                  <p className="text-gray-700 mb-4">
                    We provide secure and versatile storage container rental solutions for your short- or long-term needs. Our containers are ideal for:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span><span className="font-semibold">On-Site Storage:</span> Perfect for construction sites, retail operations, or personal projects requiring secure storage.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span><span className="font-semibold">Temporary Storage During Relocation:</span> Safeguard your inventory or equipment during transitions.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span><span className="font-semibold">Customizable Options:</span> Choose from various container sizes to match your storage requirements.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2 font-bold">•</span>
                      <span><span className="font-semibold">Weather-Resistant and Secure:</span> Our containers are built to protect your goods from the elements and unauthorized access.</span>
                    </li>
                  </ul>
                  <p className="text-gray-700 mb-6">
                    Whether you need extra space for your business or personal storage, our rental containers offer flexibility and peace of mind.
                  </p>
                </div>
                <div className="lg:col-span-1">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md flex justify-center items-center h-full">
                    <img src="/assets/Container.png" alt="AMS Storage Container" className="max-h-64 w-auto" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mb-12 text-center">
              <p className="text-gray-700 text-lg font-medium mb-8">
                AMS Transportation is your trusted partner for all your transportation and logistics needs. Contact us today to learn how we can help move your business forward.
              </p>
              
              <Link href="/contact">
                <div className="inline-flex items-center bg-red-600 text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition duration-300 cursor-pointer">
                  Contact Us Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default Services;
