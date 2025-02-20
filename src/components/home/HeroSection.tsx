// src/components/home/HeroSection.tsx
import React from 'react';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-b from-amber-100 to-amber-200 min-h-[600px] flex items-center justify-center relative overflow-hidden">
      {/* Decorative shapes (optional, for a futuristic look) */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>

      <div className="text-center max-w-4xl mx-auto px-4 z-10">
        <h1 className="text-5xl font-bold text-amber-900 mb-6">
          Connect. Grow. Succeed.
        </h1>
        <p className="text-xl text-amber-800 mb-8">
          Your journey to studying in Canada starts here. Explore universities, find jobs, and build a community.
        </p>
        <button className="bg-amber-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-amber-700 transition duration-300 shadow-md">
          Join Our Community
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
