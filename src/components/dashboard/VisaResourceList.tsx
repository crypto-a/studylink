// src/components/dashboard/VisaResourceList.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { visaInfo } from "../../../seed/seed";
import { FaLink, FaSearch } from "react-icons/fa";

const universities = [
  "General",
  "University of Toronto",
  "University of British Columbia",
  "McGill University",
  "University of Alberta",
];

const VisaResourceList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("General");
  const [showRequestForm, setShowRequestForm] = useState(false);
  const [requestTitle, setRequestTitle] = useState("");
  const [requestUniversity, setRequestUniversity] = useState("");

  const filteredResources = visaInfo.filter((info) => {
    const matchesSearch = info.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          info.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesUniversity = selectedUniversity === "General" || info.university === selectedUniversity;
    return matchesSearch && matchesUniversity;
  });

  const handleRequestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (requestTitle.trim()) {
      alert(`Request submitted: "${requestTitle}" for ${requestUniversity || "General"}`);
      setRequestTitle("");
      setRequestUniversity("");
      setShowRequestForm(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-700" />
          <input
            type="text"
            placeholder="Search visa resources..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 p-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
          />
        </div>
        <select
          value={selectedUniversity}
          onChange={(e) => setSelectedUniversity(e.target.value)}
          className="p-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
        >
          {universities.map((uni) => (
            <option key={uni} value={uni}>{uni}</option>
          ))}
        </select>
      </div>

      {/* Resource List */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((info) => (
            <div key={info.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h4 className="text-xl font-semibold text-amber-800 mb-2">{info.title}</h4>
              <p className="text-amber-700 mb-4">{info.description}</p>
              <div className="flex items-center justify-between">
                <Link
                  to={`/dashboard/visa-info/${info.id}`}
                  className="flex items-center text-amber-600 hover:underline"
                >
                  <FaLink className="mr-2" /> Read More
                </Link>
                <span className="text-amber-600">Rating: {info.rating.average}/5 ({info.rating.likes} likes)</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-amber-800">
          <p>No resources found. Want to request one?</p>
          <button
            onClick={() => setShowRequestForm(true)}
            className="mt-2 bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
          >
            Request Content
          </button>
        </div>
      )}

      {/* Request Form */}
      {showRequestForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold text-amber-900 mb-4">Request New Content</h3>
            <form onSubmit={handleRequestSubmit}>
              <div className="mb-4">
                <label className="block text-amber-900 mb-2" htmlFor="requestTitle">
                  Topic/Title
                </label>
                <input
                  type="text"
                  id="requestTitle"
                  value={requestTitle}
                  onChange={(e) => setRequestTitle(e.target.value)}
                  className="w-full p-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-amber-900 mb-2" htmlFor="requestUniversity">
                  University (optional)
                </label>
                <input
                  type="text"
                  id="requestUniversity"
                  value={requestUniversity}
                  onChange={(e) => setRequestUniversity(e.target.value)}
                  className="w-full p-2 border border-amber-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-600"
                  placeholder="e.g., University of Ottawa"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="bg-amber-600 text-white font-bold py-2 px-4 rounded hover:bg-amber-700 transition duration-300"
                >
                  Submit Request
                </button>
                <button
                  type="button"
                  onClick={() => setShowRequestForm(false)}
                  className="bg-gray-600 text-white font-bold py-2 px-4 rounded hover:bg-gray-700 transition duration-300"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaResourceList;