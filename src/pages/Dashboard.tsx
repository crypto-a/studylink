import React from "react";
import { useAuth } from "../context/AuthContext";
import VisaSection from "../../components/dashboard/VisaSection";
import JobSection from "../../components/dashboard/JobSection";
import HousingSection from "../../components/dashboard/HousingSection";
import DashboardActions from "../../components/dashboard/DashboardActions";

const Dashboard = () => {
  const { userRole } = useAuth();

  return (
    <section className="py-12 bg-amber-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">
          Dashboard
        </h2>
        <p className="text-lg text-amber-800 mb-8 text-center">
          Welcome, <strong>{userRole || "Guest"}</strong>!
        </p>

        {/* Visa Info Section */}
        <VisaSection />

        {/* Job Board Section */}
        <JobSection />

        {/* Housing Section */}
        <HousingSection />

        {/* Navigation to Services and Forum */}
        <DashboardActions />
      </div>
    </section>
  );
};

export default Dashboard;
