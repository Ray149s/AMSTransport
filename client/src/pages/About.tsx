import { Helmet } from "react-helmet";
import { Link } from "wouter";
import Hero from "@/components/Hero";
import ContactBar from "@/components/ContactBar";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - AMS Transportation</title>
        <meta name="description" content="Learn about AMS Transportation's history, mission, and commitment to excellence in logistics and shipping services since 2006." />
      </Helmet>
      
      <Hero showContactButton={false} />
      <ContactBar />
      
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">About Us</h1>
            <div className="w-80 h-1 bg-red-600 mb-8"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <p className="text-gray-700 mb-6">
                  Welcome to AMS Transportation, where excellence meets reliability in shipping and logistics. Founded in 2006, we are dedicated to delivering seamless transportation solutions tailored to your specific needs. Whether you're moving standard freight, oversized cargo, or relocating a warehouse, AMS Transportation is your trusted partner.
                </p>
                
                <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
                <p className="text-gray-700 mb-6">
                  At AMS Transportation, our mission is simple: to provide exceptional service while ensuring your cargo reaches its destination safely, on time, and in optimal condition. We believe in building long-lasting relationships with our clients by consistently exceeding expectations.
                </p>
                
                <h2 className="text-2xl font-bold mb-3">What We Do</h2>
                <p className="text-gray-700 mb-4">
                  We specialize in a wide range of logistics services designed to streamline your operations and simplify the transportation process:
                </p>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-700">
                  <li><span className="font-bold">Flatbed Transportation</span>: Perfect for oversized or heavy loads requiring easy access and secure delivery.</li>
                  <li><span className="font-bold">Van Transportation</span>: Reliable solutions for standard freight, ensuring timely and safe arrivals.</li>
                  <li><span className="font-bold">Warehouse Relocation</span>: Expert coordination to minimize downtime and ensure a smooth transition for your operations.</li>
                  <li><span className="font-bold">Freight Management</span>: Comprehensive services from planning to delivery, including storage container rentals for added convenience.</li>
                  <li><span className="font-bold">Storage Container Rental & Sales</span>: Our durable, state-of-the-art storage containers deliver unmatched security and innovative solutions for safeguarding your equipment and materials.</li>
                </ul>
              </div>
              <div>
                <img src="/assets/AMS-Truck-Photo.png" alt="AMS Transportation Truck" className="rounded-lg shadow-lg mb-8 w-full" />
                <img src="/assets/AMS-Warehouse.png" alt="AMS Warehouse" className="rounded-lg shadow-lg w-full" />
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-3">Why Choose AMS Transportation?</h2>
              <ul className="list-disc pl-5 mb-6 space-y-3 text-gray-700">
                <li>
                  <span className="font-bold">Excellence</span>: With over 18 years in the industry, we bring a wealth of experience and knowledge to every shipment.
                </li>
                <li>
                  <span className="font-bold">Customer-Centric Approach</span>: Your satisfaction is our priority. We work closely with you to develop custom solutions that align with your goals.
                </li>
                <li>
                  <span className="font-bold">Efficiency and Reliability</span>: From pickup to delivery, we are committed to keeping your business moving without delays.
                </li>
              </ul>
              
              <p className="text-gray-700 font-medium">
                At AMS Transportation, we don't just move cargo—we move your business forward. Contact us today and experience the difference of a logistics partner who puts your needs first.
              </p>
            </div>
            
            <div className="text-center mt-10">
              <Link href="/contact">
                <div className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-md hover:bg-red-700 transition duration-300 cursor-pointer">
                  Contact Us Today
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
