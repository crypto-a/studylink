import React from "react";
import { Link } from "react-router-dom";

const DashboardHomeContent = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 min-h-[40vh]">
      <h2 className="text-2xl font-bold text-amber-900 mb-4">
        Welcome to Your Dashboard
      </h2>

      {/* Example embedded video */}
      <div className="mb-4">
        <iframe
          src="https://www.youtube.com/embed/VIDEO_ID"
          title="Dashboard Introduction"
          className="w-full h-64 md:h-80"
          allowFullScreen
        />
      </div>

      <p className="text-amber-800 mb-4">
        Explore Visa Info, Job Listings, Housing, or our Q&A Forum. We’re here to
        support your journey as an international student in Canada.
      </p>

      <Link
        to="/contact"
        className="inline-block bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
      >
        Contact Us for Help &amp; Support
      </Link>
    </div>
  );
};

export default DashboardHomeContent;
