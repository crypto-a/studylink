// src/pages/dashboard/DashboardJobs.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { jobs } from "../../../seed/seed";
import { useAuth } from "../../context/AuthContext";
import { FaSearch } from "react-icons/fa";

const DashboardJobs = () => {
  const { isSubscribed } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");

  const visibleJobs = isSubscribed
    ? jobs.filter((job) =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : jobs.filter((job) => !job.premium);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-amber-900">Job Board</h2>

      {/* Premium-Only Search */}
      {isSubscribed ? (
        <div className="relative max-w-sm mb-4">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-700" />
          <input
            type="text"
            placeholder="Search jobs..."
            className="w-full pl-10 p-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      ) : (
        <p className="text-amber-800">
          Subscribe to unlock job search and premium listings!
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h4 className="text-xl font-semibold text-amber-800 mb-2">
              {job.title}
            </h4>
            <p className="text-amber-700">
              {job.company} - {job.salary}
            </p>
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
        <p className="text-amber-800 mt-4">
          <Link to="/pricing" className="text-amber-600 hover:underline">
            Subscribe
          </Link>{" "}
          for premium job listings and search!
        </p>
      )}
    </div>
  );
};

export default DashboardJobs;
