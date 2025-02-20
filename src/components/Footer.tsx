// src/components/Footer.tsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-amber-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-bold">StudyLink Canada</h3>
          <p className="text-sm">Supporting international students since 2025</p>
        </div>
        <ul className="flex flex-col md:flex-row gap-4">
          <li>
            <Link to="/" className="hover:text-amber-300 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-amber-300 transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="hover:text-amber-300 transition duration-300">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:text-amber-300 transition duration-300">
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center mt-4 text-sm">
        &copy; {new Date().getFullYear()} StudyLink Canada. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;