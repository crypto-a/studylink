// src/pages/Dashboard.tsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { visaInfo, jobs, housing } from "../../seed/seed";

const Dashboard = () => {
  const { userRole, isSubscribed } = useAuth();

  return (
    <section className="py-12 bg-amber-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Dashboard</h2>
        <p className="text-lg text-amber-800 mb-8 text-center">
          Welcome, <strong>{userRole || "Guest"}</strong>!
        </p>

        {/* Visa Info Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-amber-900 mb-4">Visa Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visaInfo.map((info) => (
              <div key={info.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                <h4 className="text-xl font-semibold text-amber-800 mb-2">{info.title}</h4>
                <p className="text-amber-700 mb-4">{info.description}</p>
                <a href={info.link} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Job Board Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-amber-900 mb-4">Job Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs
              .filter((job) => isSubscribed || !job.premium)
              .map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h4 className="text-xl font-semibold text-amber-800 mb-2">{job.title}</h4>
                  <p className="text-amber-700">{job.company} - {job.salary}</p>
                  <p className="text-amber-600 mt-2">{job.type}</p>
                  <Link
                    to={`/job/${job.id}`}
                    className="mt-4 inline-block bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              ))}
          </div>
          {!isSubscribed && (
            <p className="text-amber-800 mt-4 text-center">
              <Link to="/pricing" className="text-amber-600 hover:underline">Subscribe</Link> for premium job listings!
            </p>
          )}
        </div>

        {/* Housing Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-amber-900 mb-4">Housing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {housing
              .filter((h) => isSubscribed || !h.premium)
              .map((h) => (
                <div key={h.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                  <h4 className="text-xl font-semibold text-amber-800 mb-2">{h.title}</h4>
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
              <Link to="/pricing" className="text-amber-600 hover:underline">Subscribe</Link> for premium housing options!
            </p>
          )}
        </div>

        {/* Navigation to Services and Forum */}
        <div className="text-center">
          <Link
            to="/services"
            className="inline-block bg-amber-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-700 transition duration-300 mr-4"
          >
            Book Services
          </Link>
          <Link
            to="/forum"
            className="inline-block bg-amber-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-700 transition duration-300"
          >
            Q&A Forum
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;