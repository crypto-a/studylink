import React, { useState } from "react";
import { Link } from "react-router-dom";
import { visaInfo } from "../../../seed/seed";

// Example list of universities
const universities = [
  { value: "", label: "All Universities" },
  { value: "UofT", label: "University of Toronto" },
  { value: "UAlberta", label: "University of Alberta" },
  // Add more if needed
];

const VisaResourceList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUni, setSelectedUni] = useState("");

  const filteredVisaInfo = visaInfo.filter((info) => {
    const matchesSearch =
      info.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      info.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUniversity =
      !selectedUni || selectedUni === "" || info.university === selectedUni;

    return matchesSearch && matchesUniversity;
  });

  return (
    <div className="space-y-8">
      {/* Search & Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border border-amber-300 rounded p-2 w-full md:w-1/2"
        />
        <select
          value={selectedUni}
          onChange={(e) => setSelectedUni(e.target.value)}
          className="border border-amber-300 rounded p-2 w-full md:w-1/2"
        >
          {universities.map((uni) => (
            <option key={uni.value} value={uni.value}>
              {uni.label}
            </option>
          ))}
        </select>
      </div>

      {/* Visa Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredVisaInfo.map((info) => (
          <div
            key={info.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h4 className="text-xl font-semibold text-amber-800 mb-2">
              {info.title}
            </h4>
            <p className="text-amber-700 mb-4">{info.description}</p>
            {/* Link to detail page */}
            <Link
              to={`/visa-info/${info.id}`}
              className="text-amber-600 hover:underline"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VisaResourceList;
