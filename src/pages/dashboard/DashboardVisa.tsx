import React from "react";
import VisaResourceList from "../../components/dashboard/VisaResourceList";

const DashboardVisa = () => {
  return (
    <section className="py-12 bg-amber-50 min-h-[60vh]">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold text-amber-900">Visa Information</h2>
        <p className="text-amber-800">
          Search and filter visa resources below. Click any item to read more
          details in a blog-style format.
        </p>

        <VisaResourceList />
      </div>
    </section>
  );
};

export default DashboardVisa;
