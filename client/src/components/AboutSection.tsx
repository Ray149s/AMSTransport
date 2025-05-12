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
            <div className="rounded-lg overflow-hidden">
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
