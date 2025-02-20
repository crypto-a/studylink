// src/pages/dashboard/DashboardVisa.tsx
import React from "react";
import { useAuth } from "../../context/AuthContext";
import { visaInfo } from "../../../seed/seed";
import VisaResourceList from "../../components/dashboard/VisaResourceList";

const DashboardVisa = () => {
  const { isSubscribed } = useAuth();

  // If not subscribed, show only the first item (study permit)
  const displayedVisaInfo = isSubscribed ? visaInfo : visaInfo.slice(0, 1);

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-amber-900">Visa Information</h2>
      {!isSubscribed && (
        <p className="text-amber-800">
          Only basic Study Permit info is available on the free plan.{" "}
          <strong>Subscribe</strong> to unlock more!
        </p>
      )}
      <VisaResourceList visaData={displayedVisaInfo} />
    </div>
  );
};

export default DashboardVisa;
