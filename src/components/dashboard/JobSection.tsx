import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { jobs } from "../../../seed/seed";

const JobSection = () => {
  const { isSubscribed } = useAuth();

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-amber-900 mb-4">Job Board</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {jobs
          .filter((job) => isSubscribed || !job.premium)
          .map((job) => (
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
        <p className="text-amber-800 mt-4 text-center">
          <Link to="/pricing" className="text-amber-600 hover:underline">
            Subscribe
          </Link>{" "}
          for premium job listings!
        </p>
      )}
    </div>
  );
};

export default JobSection;
