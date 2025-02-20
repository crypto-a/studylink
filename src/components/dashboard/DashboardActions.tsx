import React from "react";
import { Link } from "react-router-dom";

const DashboardActions = () => {
  return (
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
        Q&amp;A Forum
      </Link>
    </div>
  );
};

export default DashboardActions;
