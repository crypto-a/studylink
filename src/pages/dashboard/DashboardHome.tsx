// src/pages/dashboard/DashboardHome.tsx
import React from "react";

const DashboardHome = () => {
  return (
    <div className="bg-white rounded-lg shadow p-6 min-h-[40vh]">
      <h2 className="text-2xl font-bold text-amber-900 mb-4">Welcome to Your Dashboard</h2>
      <p className="text-amber-800">
        Choose a section above to get started. Explore Visa Info, Job Listings, Housing, or our Q&A Forum!
      </p>
    </div>
  );
};

export default DashboardHome;
