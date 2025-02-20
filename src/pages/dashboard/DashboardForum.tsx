// src/pages/dashboard/DashboardForum.tsx

import React from "react";

const DashboardForum = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md min-h-[40vh]">
      <h2 className="text-3xl font-bold text-amber-900 mb-4">Q&A Forum</h2>
      <p className="text-amber-700">
        Q&A software is not available yet. If you subscribe, you will be contacted within
        3 business days of purchasing your subscription with an email address
        where you can reach our support team for questions. If you haven't received
        an email after 3 days, please reach out to{" "}
        <a href="mailto:info@studylink.com" className="text-amber-600 hover:underline">
          info@studylink.com
        </a>.
      </p>
    </div>
  );
};

export default DashboardForum;
