import { useEffect } from "react";
import { useRoute } from "wouter";
import LandingPageLayout from "@/components/LandingPageLayout";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import ContactForm from "./ContactForm";

// Define service data structure
interface ServiceFeature {
  text: string;
}

interface ServiceData {
  id: string;
  name: string;
  description: string;
  metaDescription: string;
  heroImage: string;
  features: ServiceFeature[];
  ctaText: string;
}

// Sample service data - you would expand this with real content
const servicesData: Record<string, ServiceData> = {
  "freight-management": {
    id: "freight-management",
    name: "Freight Management Solutions",
    description: "Professional freight management services tailored to your business needs.",
    metaDescription: "AMS Transportation offers comprehensive freight management solutions. Save time and money with our professional logistics services.",
    heroImage: "/assets/freight-management.png",
    features: [
      { text: "Dedicated account management" },
      { text: "Real-time shipment tracking" },
      { text: "Cost-effective shipping solutions" },
      { text: "Nationwide coverage" },
      { text: "Customs clearance assistance" },
      { text: "Insurance options available" }
    ],
    ctaText: "Get a custom freight management quote today"
  },
  "flatbed-trucking": {
    id: "flatbed-trucking",
    name: "Flatbed Trucking Services",
    description: "Reliable flatbed trucking services for oversized and specialty loads.",
    metaDescription: "AMS Transportation provides specialized flatbed trucking services for oversized and awkward loads. Safe, reliable, and on-time delivery guaranteed.",
    heroImage: "/assets/ams-flatbed-truck.png",
    features: [
      { text: "Specialized equipment for oversized loads" },
      { text: "Experienced drivers for safe transport" },
      { text: "Permits and escorts arranged" },
      { text: "Load securement expertise" },
      { text: "24/7 dispatch support" },
      { text: "Competitive pricing" }
    ],
    ctaText: "Request a flatbed trucking quote"
  },
  "warehouse-relocation": {
    id: "warehouse-relocation",
    name: "Warehouse Relocation",
    description: "Efficient warehouse relocation services with minimal downtime.",
    metaDescription: "AMS Transportation specializes in warehouse relocations with minimal business disruption. Our team ensures safe transport of your inventory and equipment.",
    heroImage: "/assets/warehouse-relocation.png",
    features: [
      { text: "Comprehensive relocation planning" },
      { text: "Inventory management systems" },
      { text: "Equipment disassembly and reassembly" },
      { text: "Specialized handling of sensitive items" },
      { text: "Timeline management to minimize downtime" },
      { text: "Post-move support" }
    ],
    ctaText: "Schedule a warehouse relocation consultation"
  },
  "van-transportation": {
    id: "van-transportation",
    name: "Van Transportation Services",
    description: "Efficient and reliable van transportation for your smaller shipments and deliveries.",
    metaDescription: "AMS Transportation provides professional van transportation services for small to medium-sized shipments with fast, secure delivery nationwide.",
    heroImage: "/assets/ams-van-transportation.png",
    features: [
      { text: "Fast delivery for time-sensitive shipments" },
      { text: "Ideal for smaller, high-value items" },
      { text: "Climate-controlled options available" },
      { text: "Door-to-door service" },
      { text: "Competitive rates for regular shipments" },
      { text: "Professional drivers and modern fleet" }
    ],
    ctaText: "Get a van transportation quote today"
  },
  "storage-containers": {
    id: "storage-containers",
    name: "Storage Container Solutions",
    description: "Secure, flexible storage container options for short and long-term needs.",
    metaDescription: "AMS Transportation offers versatile storage container solutions for businesses and individuals. On-site or off-site options with full security and accessibility.",
    heroImage: "/assets/Container.png",
    features: [
      { text: "Weather-resistant secure containers" },
      { text: "Flexible rental terms - daily, weekly, monthly" },
      { text: "Various sizes to fit your needs" },
      { text: "On-site placement options" },
      { text: "Temperature-controlled units available" },
      { text: "24/7 access to your belongings" }
    ],
    ctaText: "Reserve your storage container"
  }
};

const ServiceLanding = () => {
  const [, params] = useRoute("/landing/services/:serviceId");
  const serviceId = params?.serviceId || "";
  const serviceData = servicesData[serviceId];
  
  // For analytics tracking (you would implement this with your analytics provider)
  useEffect(() => {
    // Track page view
    console.log(`Landing page viewed: ${serviceId}`);
  }, [serviceId]);
  
  // If service doesn't exist in our data
  if (!serviceData) {
    return (
      <LandingPageLayout
        title="Service Not Found"
        description="The requested service information is not available."
      >
        <div className="py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-8">The service you're looking for is not available.</p>
          <Button 
            className="bg-red-600 hover:bg-red-700" 
            onClick={() => window.location.href = '/contact'}
          >
            Contact Us
          </Button>
        </div>
      </LandingPageLayout>
    );
  }

  return (
    <LandingPageLayout
      title={serviceData.name}
      description={serviceData.metaDescription}
    >
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{serviceData.name}</h1>
              <p className="text-xl mb-8">{serviceData.description}</p>
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-xl py-6 px-8"
                onClick={() => {
                  // Scroll to contact form
                  document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get Started Now
              </Button>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <img 
                src={serviceData.heroImage} 
                alt={serviceData.name} 
                className="w-full rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our {serviceData.name}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {serviceData.features.map((feature, index) => (
              <div key={index} className="flex items-start p-6 bg-white rounded-lg shadow-md">
                <div className="mr-4">
                  <div className="bg-red-600 text-white p-2 rounded-full">
                    <Check className="h-5 w-5" />
                  </div>
                </div>
                <div>
                  <p className="text-lg font-medium">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">{serviceData.ctaText}</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Our team of experts is ready to help with your specific needs. 
            Fill out the form below for a free, no-obligation quote.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-red-600 text-xl py-6 px-8"
            onClick={() => {
              // Scroll to contact form
              document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Get Your Quote
          </Button>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section id="contact-form" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Contact Us About {serviceData.name}</h2>
            
            {/* Using the reusable ContactForm component */}
            <ContactForm 
              serviceId={serviceData.id}
              serviceName={serviceData.name}
            />
          </div>
        </div>
      </section>
    </LandingPageLayout>
  );
};

export default ServiceLanding;