// src/pages/Home.tsx
import React from "react";
import HeroSection from "../components/HeroSection";
import { jobs, housing, visaInfo } from "../../seed/seed";

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="py-12 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Visa & Immigration</h3>
              <p className="text-amber-800 mb-4">{visaInfo[0].description}</p>
              <a href={visaInfo[0].link} className="text-amber-600 hover:underline">
                Learn More
              </a>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Job Search</h3>
              <p className="text-amber-800 mb-4">{jobs[0].description}</p>
              <span className="text-amber-600">Explore Jobs</span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Housing & Community</h3>
              <p className="text-amber-800 mb-4">{housing[0].description}</p>
              <span className="text-amber-600">Find Housing</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;