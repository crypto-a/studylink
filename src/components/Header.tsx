import React from 'react';

const Header = () => {
  return (
    <nav className="bg-amber-50 p-4 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-amber-900 font-sans">StudyLink Canada</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-amber-900 hover:text-amber-600 font-sans transition duration-300">Home</a></li>
            <li><a href="#" className="text-amber-900 hover:text-amber-600 font-sans transition duration-300">About</a></li>
            <li><a href="#" className="text-amber-900 hover:text-amber-600 font-sans transition duration-300">Pricing</a></li>
            <li><a href="#" className="text-amber-900 hover:text-amber-600 font-sans transition duration-300">Login</a></li>
            <li><a href="#" className="text-amber-900 hover:text-amber-600 font-sans transition duration-300">Register</a></li>
          </ul>
        </nav>
      </div>
    </nav>
  );
};

export default Header; 