import React from 'react';

const FeaturesSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto p-4 flex justify-center items-center">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Largest Car Collection
              </h2>
              <p className="text-lg text-gray-600">
                Browse through our extensive collection of cars from top brands
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Expert Car Reviews
              </h2>
              <p className="text-lg text-gray-600">
                Get expert reviews and ratings to help you make an informed decision
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6">
            <div className="bg-white rounded shadow-md p-4">
              <h2 className="text-2xl font-bold text-gray-900">
                Compare Cars
              </h2>
              <p className="text-lg text-gray-600">
                Compare features, prices, and reviews to find the best car for you
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;