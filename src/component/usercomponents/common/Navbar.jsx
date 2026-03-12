import React, { useState, useEffect, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Globe,
  UserCircle,
  LogOut,
  Settings
} from "lucide-react";
import toast from "react-hot-toast";
import { useLogoutMutation } from "../../../redux/api/AuthApi";
import { ContextStore } from "../../../context/Context";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Tour", to: "/tour" },
  { label: "Contact", to: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { isLogin, setIsLogin, setUser } = useContext(ContextStore);

  const [logoutApi] = useLogoutMutation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  
  const handleLogout = async () => {
    try {
      await logoutApi().unwrap();

      localStorage.removeItem("token");
      localStorage.removeItem("user");

      setIsLogin(false);
      setUser(null);

      toast.success("Logged out successfully");

      navigate("/", { replace: true });
    } catch (error) {
      toast.error("Logout failed. Please try again.");
    }
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between h-16 items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-[#237227] flex items-center justify-center">
              <Globe size={18} className="text-white" />
            </div>

            <span className="text-xl font-extrabold tracking-tight">
              <span className="text-[#237227]">OT</span>
              <span className="text-[#FFAA00]">MS</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(({ label, to }) => {
              const isActive = location.pathname === to;

              return (
                <Link
                  key={label}
                  to={to}
                  className={`text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? "text-[#237227] border-b-2 border-[#FFAA00] pb-1"
                      : "text-[#237227] hover:text-[#FFAA00]"
                  }`}
                >
                  {label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center gap-4">

            {!isLogin ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 text-sm font-semibold text-[#237227] border-2 border-[#237227] rounded-full hover:bg-[#237227] hover:text-white transition"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="px-4 py-2 text-sm font-semibold text-white bg-[#FFAA00] rounded-full hover:opacity-90 transition"
                >
                  Signup
                </Link>
              </>
            ) : (
              <>
                {/* Manage Account */}
                <Link
                  to="/account"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-[#237227] rounded-full hover:opacity-90 transition"
                >
                  <Settings size={16} />
                  Manage Account
                </Link>

                {/* Profile */}
                <Link
                  to="/profile"
                  className="text-[#237227] hover:text-[#FFAA00] transition"
                >
                  <UserCircle size={28} />
                </Link>

                {/* Logout */}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-full hover:opacity-90 transition"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </>
            )}

          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#237227]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-[#237227]">

          <div className="px-4 py-4 space-y-4">

            {navLinks.map(({ label, to }) => (
              <Link
                key={label}
                to={to}
                className="block text-sm font-semibold text-[#237227] hover:text-[#FFAA00]"
              >
                {label}
              </Link>
            ))}

            {!isLogin ? (
              <>
                <Link
                  to="/login"
                  className="block text-sm font-semibold text-[#237227] border-2 border-[#237227] px-4 py-2 rounded-lg text-center"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="block text-sm font-semibold text-white bg-[#FFAA00] px-4 py-2 rounded-lg text-center"
                >
                  Signup
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/account"
                  className="block text-sm font-semibold text-white bg-[#237227] px-4 py-2 rounded-lg text-center"
                >
                  Manage Account
                </Link>

                <Link
                  to="/profile"
                  className="block text-sm font-semibold text-[#237227] text-center"
                >
                  Profile
                </Link>

                <button
                  onClick={handleLogout}
                  className="block w-full text-sm font-semibold text-white bg-red-500 px-4 py-2 rounded-lg text-center"
                >
                  Logout
                </button>
              </>
            )}

          </div>

        </div>
      )}
    </nav>
  );
}

export default Navbar;