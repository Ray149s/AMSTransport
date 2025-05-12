const AboutSection = () => {
  return (
    <section className="py-16 bg-red-600 text-white">
      <div className="container mx-auto px-4">
        <div className="md:flex items-center">
          <div className="md:w-1/2 pr-8 mb-8 md:mb-0">
            <div className="flex items-center mb-6">
              <div className="mr-4">
                <img 
                  src="/trucks-highway.png" 
                  alt="AMS Transportation Fleet" 
                  className="w-20 h-20 object-cover rounded-full border-4 border-white"
                />
              </div>
              <h2 className="text-3xl font-bold">Founded in 2006</h2>
            </div>
            <p className="mb-6 text-lg">
              We handle everything from standard goods to oversized freight with finesse and precision.
            </p>
            <p className="text-lg">
              For almost two decades, AMS Transportation has been a leader in the logistics industry, 
              providing reliable transportation solutions for businesses of all sizes.
            </p>
          </div>
          
          <div className="md:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img 
                  src="/trucks-highway.png" 
                  alt="AMS Transportation trucks on highway" 
                  className="w-full h-full object-cover rounded-lg"
                />
                <div className="absolute bottom-4 left-4 right-4 text-white text-xl font-bold z-10 bg-black/30 p-2 rounded">
                  Delivering Excellence Every Mile
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
