// src/pages/dashboard/DashboardVisa.tsx
import React from "react";
import VisaResourceList from "../../components/dashboard/VisaResourceList";

const DashboardVisa = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-amber-900">Visa Information</h2>
      <p className="text-amber-800">
        Explore our curated articles on visas and permits. Search by topic or filter by university to find tailored advice. Premium users can chat with authors for personalized support!
      </p>
      <VisaResourceList />
    </div>
  );
};

export default DashboardVisa;