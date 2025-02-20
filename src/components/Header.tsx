// src/components/Header.tsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";

const Header = () => {
  const { isAuthenticated, userRole, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/");
  };

  return (
    <nav className="bg-amber-50 p-4 shadow-sm sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-amber-900 font-sans tracking-wide">
            StudyLink Canada
          </h1>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center space-x-6">
          <li>
            <Link
              to="/about"
              className="text-amber-900 hover:text-amber-600 font-sans transition duration-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              className="text-amber-900 hover:text-amber-600 font-sans transition duration-300"
            >
              Pricing
            </Link>
          </li>

          {!isAuthenticated ? (
            <>
              <li>
                <Link
                  to="/login"
                  className="text-amber-900 hover:text-amber-600 font-sans transition duration-300"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="text-amber-900 hover:text-amber-600 font-sans transition duration-300"
                >
                  Register
                </Link>
              </li>
            </>
          ) : (
            <li className="relative">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center text-amber-900 hover:text-amber-600 transition duration-300"
              >
                <FaUserCircle className="text-2xl mr-1" />
                <span className="capitalize">{userRole || "User"}</span>
              </button>

              {/* Dropdown */}
              {dropdownOpen && (
                <ul className="absolute right-0 mt-2 w-40 bg-white border border-amber-100 rounded shadow-md">
                  <li>
                    <Link
                      to="/dashboard"
                      className="block px-4 py-2 hover:bg-amber-50"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/settings"
                      className="block px-4 py-2 hover:bg-amber-50"
                      onClick={() => setDropdownOpen(false)}
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 hover:bg-amber-50"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
