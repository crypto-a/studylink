import React from 'react'

const Pricing = () => {
  return (
    <section className="py-12 bg-amber-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 text-center mb-8">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-semibold text-amber-900 mb-4">Free Plan</h3>
            <p className="text-amber-800 mb-4 flex-grow">Access basic job search, housing listings, and community forums.</p>
            <div className="text-3xl font-bold text-amber-900 mb-4">$0/month</div>
            <button className="bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300">
              Get Started
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col border-4 border-amber-600">
            <h3 className="text-2xl font-semibold text-amber-900 mb-4">Premium Plan</h3>
            <p className="text-amber-800 mb-4 flex-grow">Unlock personalized advice, exclusive job listings, and priority support.</p>
            <div className="text-3xl font-bold text-amber-900 mb-4">$10/month</div>
            <button className="bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300">
              Upgrade Now
            </button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col">
            <h3 className="text-2xl font-semibold text-amber-900 mb-4">Enterprise</h3>
            <p className="text-amber-800 mb-4 flex-grow">Tailored solutions for educational institutions and large organizations.</p>
            <div className="text-3xl font-bold text-amber-900 mb-4">Contact Us</div>
            <button className="bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
