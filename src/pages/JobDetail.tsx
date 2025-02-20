// src/pages/JobDetail.tsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { jobs } from "../../seed/seed";
import { useAuth } from "../context/AuthContext";

const JobDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { isSubscribed } = useAuth();
  const job = jobs.find((j) => j.id === parseInt(id || "0"));

  if (!job || (!isSubscribed && job.premium)) {
    return (
      <section className="py-12 bg-amber-50 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Job Not Found</h2>
          <p className="text-amber-800 mb-6">
            This job may not exist or requires a premium subscription.
          </p>
          <Link
            to="/dashboard"
            className="bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
          >
            Back to Dashboard
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-amber-50 min-h-[60vh]">
      <div className="max-w-4xl mx-auto px-4">
        <Link
          to="/dashboard"
          className="text-amber-600 hover:underline mb-4 inline-block"
        >
          &larr; Back to Dashboard
        </Link>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">{job.title}</h2>
          <p className="text-amber-800 mb-2"><strong>Company:</strong> {job.company}</p>
          <p className="text-amber-800 mb-2"><strong>Location:</strong> {job.location}</p>
          <p className="text-amber-800 mb-2"><strong>Type:</strong> {job.type}</p>
          <p className="text-amber-800 mb-2"><strong>Salary:</strong> {job.salary}</p>
          <p className="text-amber-800 mb-4"><strong>Description:</strong> {job.description}</p>
          <p className="text-amber-800 mb-4"><strong>Contact:</strong> <a href={`mailto:${job.contact}`} className="text-amber-600 hover:underline">{job.contact}</a></p>
          <button
            onClick={() => alert(`Contact ${job.contact} to apply!`)}
            className="bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
          >
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobDetail;