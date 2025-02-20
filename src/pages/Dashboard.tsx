// src/pages/Dashboard.tsx
import React from "react";
import { useAuth } from "../context/AuthContext";
import { jobs, housing } from "../../seed/seed";

const Dashboard = () => {
  const { userRole, isSubscribed } = useAuth();

  return (
    <section className="py-12 bg-amber-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Dashboard</h2>
        <p className="text-lg text-amber-800 mb-6 text-center">
          Welcome, <strong>{userRole || "Guest"}</strong>!
        </p>
        {isSubscribed ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Premium Jobs</h3>
              {jobs
                .filter((job) => job.premium)
                .map((job) => (
                  <div key={job.id} className="mb-4">
                    <p className="text-amber-800 font-semibold">{job.title}</p>
                    <p className="text-amber-700">{job.company} - {job.salary}</p>
                  </div>
                ))}
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-amber-900 mb-4">Premium Housing</h3>
              {housing
                .filter((h) => h.premium)
                .map((h) => (
                  <div key={h.id} className="mb-4">
                    <p className="text-amber-800 font-semibold">{h.title}</p>
                    <p className="text-amber-700">{h.rent}</p>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-amber-800 mb-4">
              Subscribe to access premium job listings and housing options!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Free Jobs</h3>
                {jobs
                  .filter((job) => !job.premium)
                  .map((job) => (
                    <div key={job.id} className="mb-4">
                      <p className="text-amber-800 font-semibold">{job.title}</p>
                      <p className="text-amber-700">{job.company}</p>
                    </div>
                  ))}
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-amber-900 mb-4">Free Housing</h3>
                {housing
                  .filter((h) => !h.premium)
                  .map((h) => (
                    <div key={h.id} className="mb-4">
                      <p className="text-amber-800 font-semibold">{h.title}</p>
                      <p className="text-amber-700">{h.rent}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Dashboard;