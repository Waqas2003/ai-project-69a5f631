import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="container mx-auto p-4 flex justify-center items-center">
        <Image
          src="https://source.unsplash.com/random/800x600"
          alt="Pak Wheels Hero Image"
          width={800}
          height={600}
          className="rounded-lg shadow-lg"
        />
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">
            Explore the world of cars with Pak Wheels
          </h1>
          <p className="text-lg text-gray-600">
            Find your dream car with our extensive collection
          </p>
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;