import React from "react";
import { visaInfo } from "../../../seed/seed";

const VisaSection = () => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-amber-900 mb-4">
        Visa Information
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visaInfo.slice(0, 4).map((info) => (
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

export default VisaSection;
