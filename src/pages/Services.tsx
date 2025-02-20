// src/pages/Services.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const services = [
  { id: 1, name: "Writing Review", price: "$15", description: "Get feedback on your academic writing." },
  { id: 2, name: "Resume Review", price: "$20", description: "Professional review to boost your job applications." },
  { id: 3, name: "Online Consultation", price: "$30", description: "1-on-1 session with an expert." },
];

const Services = () => {
  const { isSubscribed } = useAuth();
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const handleBook = (serviceId: number) => {
    setSelectedService(serviceId);
    alert(`Booking ${services.find(s => s.id === serviceId)?.name} - Please proceed to payment (simulated).`);
    // In a real app, integrate payment gateway here
  };

  return (
    <section className="py-12 bg-amber-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4">
        <Link
          to="/dashboard"
          className="text-amber-600 hover:underline mb-4 inline-block"
        >
          &larr; Back to Dashboard
        </Link>
        <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Book Our Services</h2>
        <p className="text-amber-800 mb-8 text-center">
          Enhance your experience with our premium services. {isSubscribed ? "Enjoy a 10% discount as a subscriber!" : "Subscribe for discounts!"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">{service.name}</h3>
              <p className="text-amber-800 mb-2">{service.description}</p>
              <p className="text-amber-700 mb-4">
                <strong>Price:</strong> {isSubscribed ? `${parseFloat(service.price.slice(1)) * 0.9}` : service.price}
              </p>
              <button
                onClick={() => handleBook(service.id)}
                className="w-full bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;