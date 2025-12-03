import React from 'react';

const Hero = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-4xl h-auto py-20 bg-gradient-to-b from-amber-600 to-amber-400 text-white rounded-xl">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">
        Welcome to AM-DEV
      </h1>
      <p className="text-md sm:text-lg md:text-xl mb-8 text-center">
        Your gateway to awesome web development resources
      </p>
      <button className="bg-white text-amber-600 font-semibold px-6 py-3 rounded shadow hover:bg-gray-200 transition">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
