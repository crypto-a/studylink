// src/pages/dashboard/DashboardLayout.tsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  FaPassport,
  FaBriefcase,
  FaHome,
  FaComments
} from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <div className="min-h-[60vh] bg-amber-50 pb-8">
      {/* Sub-Nav with icons */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex space-x-4 overflow-x-auto py-3">
            <NavLink
              to="visa-info"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-amber-100 transition 
                 ${isActive ? "text-amber-900 bg-amber-200" : "text-amber-700"}`
              }
            >
              <FaPassport className="mr-2" />
              Visa Info
            </NavLink>
            <NavLink
              to="job-board"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-amber-100 transition 
                 ${isActive ? "text-amber-900 bg-amber-200" : "text-amber-700"}`
              }
            >
              <FaBriefcase className="mr-2" />
              Job Board
            </NavLink>
            <NavLink
              to="housing"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-amber-100 transition 
                 ${isActive ? "text-amber-900 bg-amber-200" : "text-amber-700"}`
              }
            >
              <FaHome className="mr-2" />
              Housing
            </NavLink>
            <NavLink
              to="forum"
              className={({ isActive }) =>
                `flex items-center px-4 py-2 text-sm font-medium rounded hover:bg-amber-100 transition 
                 ${isActive ? "text-amber-900 bg-amber-200" : "text-amber-700"}`
              }
            >
              <FaComments className="mr-2" />
              Q&A Forum
            </NavLink>
          </nav>
        </div>
      </div>
      {/* Child Components Render Here */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
