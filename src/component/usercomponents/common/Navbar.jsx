import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Tour", to: "/tour" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-[#237227] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
              <Globe size={18} className="text-white" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900">
              OTMS
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, to }) => {
              const isActive = location.pathname === to;
              return (
                <Link
                  key={label}
                  to={to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                    isActive
                      ? "text-[#237227] bg-green-50"
                      : "text-slate-600 hover:text-[#237227] hover:bg-green-50/50"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full bg-[#237227]" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-5 py-2 text-sm font-semibold text-white bg-[#237227] rounded-full hover:bg-green-700 transition-all duration-300 shadow-sm shadow-green-200"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors duration-200"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-5 bg-white border-t border-slate-100 space-y-1">
          {navLinks.map(({ label, to }) => {
            const isActive = location.pathname === to;
            return (
              <Link
                key={label}
                to={to}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "text-[#237227] bg-green-50"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                {label}
                <ChevronRight
                  size={16}
                  className={`transition-colors ${
                    isActive ? "text-[#237227]" : "text-slate-300"
                  }`}
                />
              </Link>
            );
          })}
          <div className="pt-3 flex flex-col gap-2">
            <Link
              to="/login"
              className="w-full text-center px-4 py-2.5 text-sm font-semibold text-white bg-[#237227] rounded-xl hover:bg-green-700 transition-all duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;