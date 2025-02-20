import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="bg-amber-50 p-4 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <Link to="/">
          <h1 className="text-2xl font-bold text-amber-900 font-sans">StudyLink Canada</h1>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-amber-900 hover:text-amber-600 font-sans transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-amber-900 hover:text-amber-600 font-sans transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="text-amber-900 hover:text-amber-600 font-sans transition duration-300">
              Pricing
            </Link>
          </li>
          <li>
            <Link to="/login" className="text-amber-900 hover:text-amber-600 font-sans transition duration-300">
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" className="text-amber-900 hover:text-amber-600 font-sans transition duration-300">
              Register
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Header