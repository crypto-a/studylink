// src/components/home/CallToActionSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  return (
    <section className="bg-gradient-to-r from-amber-200 to-amber-400 py-12 text-center relative overflow-hidden">
      {/* Some futuristic background shapes (optional) */}
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
          Ready to Elevate Your Study Experience?
        </h2>
        <p className="text-lg text-amber-900 mb-8">
          Join thousands of international students benefiting from our premium advice and community support.
        </p>
        <Link
          to="/register"
          className="bg-amber-700 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-amber-800 transition duration-300"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
};

export default CallToActionSection;
