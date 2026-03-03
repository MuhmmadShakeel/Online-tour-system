import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#237227] text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 font-bold text-xl">
            <Link to="/">OTMS</Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link
              to="/"
              className="hover:text-[#FFAA00] transition-colors duration-200"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-[#FFAA00] transition-colors duration-200"
            >
              About
            </Link>
            <Link
              to="/services"
              className="hover:text-[#FFAA00] transition-colors duration-200"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="hover:text-[#FFAA00] transition-colors duration-200"
            >
              Contact
            </Link>
            {/* Login / Signup Buttons */}
            <Link
              to="/login"
              className="bg-[#FFAA00] text-[#237227] px-4 py-1 rounded-md font-semibold hover:bg-yellow-400 transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="border border-[#FFAA00] px-4 py-1 rounded-md font-semibold hover:bg-[#FFAA00] hover:text-[#237227] transition-colors duration-200"
            >
              Signup
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#237227] px-2 pt-2 pb-4 space-y-1">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-[#FFAA00] hover:text-[#237227] transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-[#FFAA00] hover:text-[#237227] transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-[#FFAA00] hover:text-[#237227] transition-colors duration-200"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-[#FFAA00] hover:text-[#237227] transition-colors duration-200"
          >
            Contact
          </Link>
          <Link
            to="/tour"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md hover:bg-[#FFAA00] hover:text-[#237227] transition-colors duration-200"
          >
            Tours
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md bg-[#FFAA00] text-[#237227] font-semibold hover:bg-yellow-400 transition-colors duration-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md border border-[#FFAA00] font-semibold hover:bg-[#FFAA00] hover:text-[#237227] transition-colors duration-200"
          >
            Signup
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;