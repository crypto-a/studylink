// src/components/dashboard/VisaResourceList.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaLink, FaSearch } from "react-icons/fa";
import type { FC } from "react";
import { useAuth } from "../../context/AuthContext";
import type { 
  // Type definitions for an item
  // Adjust as needed if you want stronger typing
} from "../../../seed/seed";

interface VisaItem {
  id: number;
  title: string;
  description: string;
  link: string;
  rating?: { likes: number; average: number };
}

interface VisaResourceListProps {
  visaData: VisaItem[];
}

const universities = [
  "General",
  "University of Toronto",
  "University of British Columbia",
  "McGill University",
  "University of Alberta",
];

const VisaResourceList: FC<VisaResourceListProps> = ({ visaData }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUniversity, setSelectedUniversity] = useState("All");

  const { isSubscribed } = useAuth();

  const filteredResources = visaData.filter((info) => {
    const matchesSearch =
      info.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      info.description.toLowerCase().includes(searchTerm.toLowerCase());

    // "All" means no filter
    if (selectedUniversity === "All") return matchesSearch;

    // Otherwise match the info's 'university' (if we had it in the object)
    // This example might need you to add the field or skip if not relevant
    // We'll assume the item might have "university" in the real data
    return matchesSearch; // or add additional logic if you pass in "university"
  });

  return (
    <div className="space-y-6">
      {/* If we have more than one resource, let them filter. If only one resource (unsubscribed), we can hide search */}
      {visaData.length > 1 && isSubscribed && (
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
            <option value="All">All Universities</option>
            {universities.map((uni) => (
              <option key={uni} value={uni}>
                {uni}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Resource List */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredResources.map((info) => (
            <div
              key={info.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h4 className="text-xl font-semibold text-amber-800 mb-2">
                {info.title}
              </h4>
              <p className="text-amber-700 mb-4">{info.description}</p>
              <div className="flex items-center justify-between">
                <Link
                  to={`/dashboard/visa-info/${info.id}`}
                  className="flex items-center text-amber-600 hover:underline"
                >
                  <FaLink className="mr-2" /> Read More
                </Link>
                {info.rating && (
                  <span className="text-amber-600">
                    Rating: {info.rating.average}/5 ({info.rating.likes} likes)
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-amber-800">
          <p>No resources found.</p>
        </div>
      )}
    </div>
  );
};

export default VisaResourceList;
