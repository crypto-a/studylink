// src/pages/dashboard/DashboardVisa.tsx
import React from "react";
import { visaInfo } from "../../../seed/seed";

const DashboardVisa = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-amber-900">Visa Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visaInfo.map((info) => (
          <div
            key={info.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h4 className="text-xl font-semibold text-amber-800 mb-2">
              {info.title}
            </h4>
            <p className="text-amber-700 mb-4">{info.description}</p>
            <a
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-600 hover:underline"
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardVisa;
