import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { housing } from "../../../seed/seed";

const HousingSection = () => {
  const { isSubscribed } = useAuth();

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-amber-900 mb-4">Housing</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {housing
          .filter((h) => isSubscribed || !h.premium)
          .map((h) => (
            <div
              key={h.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h4 className="text-xl font-semibold text-amber-800 mb-2">
                {h.title}
              </h4>
              <p className="text-amber-700">{h.rent}</p>
              <p className="text-amber-600 mt-2">{h.location}</p>
              <Link
                to={`/housing/${h.id}`}
                className="mt-4 inline-block bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
              >
                View Details
              </Link>
            </div>
          ))}
      </div>
      {!isSubscribed && (
        <p className="text-amber-800 mt-4 text-center">
          <Link to="/pricing" className="text-amber-600 hover:underline">
            Subscribe
          </Link>{" "}
          for premium housing options!
        </p>
      )}
    </div>
  );
};

export default HousingSection;
