// src/pages/HousingDetail.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { housing } from "../../seed/seed";
import { useAuth } from "../context/AuthContext";

const HousingDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isSubscribed } = useAuth();
  const house = housing.find((h) => h.id === parseInt(id || "0"));

  if (!house || (!isSubscribed && house.premium)) {
    return (
      <section className="py-12 bg-amber-50 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Housing Not Found</h2>
          <p className="text-amber-800 mb-6">
            This listing may not exist or requires a premium subscription.
          </p>
          <Link
            to="/dashboard/housing"
            className="bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
          >
            Back to Housing
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-amber-50 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/dashboard/housing"
          className="text-amber-600 hover:underline mb-4 inline-block"
        >
          &larr; Back to Housing
        </Link>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">{house.title}</h2>
          <p className="text-amber-800 mb-2">
            <strong>Location:</strong> {house.location}
          </p>
          <p className="text-amber-800 mb-2">
            <strong>Rent:</strong> {house.rent}
          </p>
          <p className="text-amber-800 mb-4">
            <strong>Description:</strong> {house.description}
          </p>
          <p className="text-amber-800 mb-4">
            <strong>Contact:</strong>{" "}
            <a
              href={`mailto:${house.contact}`}
              className="text-amber-600 hover:underline"
            >
              {house.contact}
            </a>
          </p>
          <button
            onClick={() => alert(`Contact ${house.contact} to inquire!`)}
            className="bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
          >
            Contact Landlord
          </button>
        </div>
      </div>
    </section>
  );
};

export default HousingDetail;
