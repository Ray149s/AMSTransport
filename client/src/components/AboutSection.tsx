import { useState, useRef } from "react";
import ThreeTrucks1Van from "@/assets/3Turcks1Van.png"; // Adjust the import path as necessary

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
                {/* Replace video with image */}
                <img 
                  src={ThreeTrucks1Van} // Use the imported image
                  alt="AMS Transportation warehouse facility"
                  className="w-full h-full object-cover"
                />
                
                {/* Keep the overlay text */}
                <div className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold z-10">
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