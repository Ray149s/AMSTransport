import { Play } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Founded in 2006</h2>
            <p className="mb-6">
              We handle everything from standard goods to oversized freight with finesse and precision.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-blue-600 rounded-lg overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 relative">
                {/* Video placeholder with play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white/20 rounded-full p-4">
                    <Play className="h-12 w-12 text-white" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
                <img 
                  src="/assets/AMS-Warehouse.png"
                  alt="AMS Transportation Warehouse"
                  className="object-cover w-full h-full"
                />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold">
                  Don't miss the Deadline!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
