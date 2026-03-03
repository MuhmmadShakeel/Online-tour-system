import React, { useEffect } from "react";
import { User, Mail, Lock, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Signup() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      <div 
        data-aos="fade-up"
        className="w-full max-w-md bg-white rounded-2xl shadow-xl p-6 sm:p-8 border border-gray-100"
      >
        <div className="text-center space-y-4 mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#FFAA00]/10 text-[#FFAA00] mb-2">
            <span className="text-xl font-bold">OT</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Get Started
          </h2>
          <p className="text-sm text-gray-500">
            Create your account now to start your journey.
          </p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-[#FFAA00] focus:border-transparent outline-none transition-all duration-200"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-[#FFAA00] focus:border-transparent outline-none transition-all duration-200"
                placeholder="name@company.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700 block">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-2 focus:ring-[#FFAA00] focus:border-transparent outline-none transition-all duration-200"
                placeholder="Create a password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center py-3 px-4 rounded-xl text-sm font-semibold text-white bg-[#FFAA00] hover:bg-[#e69900] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFAA00] transition-all duration-200 shadow-md hover:shadow-lg transform active:scale-[0.98]"
          >
            Create Account <UserPlus className="ml-2 h-4 w-4" />
          </button>

          <p className="text-center text-sm text-gray-500 pt-2">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-[#FFAA00] hover:text-[#e69900] transition-colors">
              Sign in here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
