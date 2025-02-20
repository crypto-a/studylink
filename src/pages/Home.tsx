import React from 'react'
import HeroSection from '../components/HeroSection'

const Home = () => {
  return (
    <>
      <HeroSection />
      <section className="py-12 bg-amber-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Visa & Immigration</h3>
              <p className="text-amber-800">Get the latest information and guidance on study permits and immigration policies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Job Search</h3>
              <p className="text-amber-800">Explore part-time, internship, and full-time opportunities tailored for international students.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Housing & Community</h3>
              <p className="text-amber-800">Find affordable housing options and connect with a community of fellow students.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
