import { Truck, Warehouse, Package } from "lucide-react";
import flatbedTruckImage from "../assets/flatbed-truck.png";
import warehouseRelocationImage from "../assets/warehouse-relocation.png";
import freightManagementImage from "../assets/freight-management.png";

const ServiceSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">OFFERING YOU THE BEST SOLUTION</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            At AMS Transportation, we pride ourselves on delivering the best solutions for your shipping and logistics needs by combining experience, innovation, and customer-centric service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Transportation Service */}
          <div className="flex flex-col items-center text-center p-6">
            <img src={flatbedTruckImage} alt="AMS Flatbed Truck" className="h-24 w-auto mb-4" />
            <h3 className="text-lg font-bold mb-4 uppercase">TRANSPORTATION</h3>
            <p className="text-gray-600">
              We offer dependable transportation solutions, including flatbed services for oversized or heavy cargo that requires easy loading and unloading, and van transportation for standard freight. With a focus on safety and reliability, we ensure all goods are securely transported and delivered on time, every time.
            </p>
          </div>

          {/* Warehouse Relocation */}
          <div className="flex flex-col items-center text-center p-6">
            <img src={warehouseRelocationImage} alt="AMS Warehouse Relocation" className="h-24 w-auto mb-4" />
            <h3 className="text-lg font-bold mb-4 uppercase">WAREHOUSE RELOCATION</h3>
            <p className="text-gray-600">
              Whether you're moving your warehouse or streamlining inventory management, our expert team is here to ensure a seamless transition. We handle every detail of the logistics, so you can focus on your business while we make your relocation smooth, efficient, and stress-free.
            </p>
          </div>

          {/* Freight Management */}
          <div className="flex flex-col items-center text-center p-6">
            <img src={freightManagementImage} alt="AMS Freight Management" className="h-24 w-auto mb-4" />
            <h3 className="text-lg font-bold mb-4 uppercase">FREIGHT MANAGEMENT</h3>
            <p className="text-gray-600">
              Our freight management services take the hassle out of shipping, offering expert guidance every step of the way. From strategic planning to flawless execution to real-time tracking and detailed reporting, we ensure your freight moves seamlessly and reaches its destination with precision and efficiency.
            </p>
          </div>

          {/* Storage Containers */}
          <div className="flex flex-col items-center text-center p-6">
            <img src="/assets/Container.png" alt="AMS Storage Container" className="h-24 w-auto mb-4" />
            <h3 className="text-lg font-bold mb-4 uppercase">STORAGE CONTAINERS</h3>
            <p className="text-gray-600">
              Our durable, state-of-the-art storage containers deliver unmatched security and innovative solutions for safeguarding your equipment and materials. Designed for convenience and reliability, they offer easy access and robust protection for projects of any scale.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
