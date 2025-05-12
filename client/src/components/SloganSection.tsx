const SloganSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Always Moving Something...</h2>
          <p className="text-xl text-gray-700 mb-8">
            At AMS Transportation, we take pride in being your reliable partner for all your logistics needs.
            From standard shipments to complex freight management, we handle it all with efficiency and care.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="w-full md:w-48 p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
              <div className="text-red-600 text-5xl font-bold">15+</div>
              <div className="text-gray-700 font-medium mt-2">Years Experience</div>
            </div>
            <div className="w-full md:w-48 p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
              <div className="text-red-600 text-5xl font-bold">1000+</div>
              <div className="text-gray-700 font-medium mt-2">Happy Clients</div>
            </div>
            <div className="w-full md:w-48 p-4 bg-white rounded-lg shadow-md flex flex-col items-center">
              <div className="text-red-600 text-5xl font-bold">24/7</div>
              <div className="text-gray-700 font-medium mt-2">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;