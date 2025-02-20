import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-amber-100 to-amber-200 min-h-[500px] flex items-center justify-center">
      <div className="text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-amber-900 mb-6">
          Connect with your fellow students who are studying in Canada
        </h1>
        <p className="text-xl text-amber-800 mb-8">
          Your journey to studying in Canada starts here
        </p>
        <button className="bg-amber-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-700 transition duration-300 shadow-md">
          Join Our Community
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
