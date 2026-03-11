import React from "react";
import { NavLink } from "react-router-dom";
import { Briefcase, Map } from "lucide-react";

function AccountBar() {
  return (
    <div className="bg-white shadow-lg rounded-xl border border-[#237227]/20 mt-6 py-14">
      <div className="max-w-4xl mx-auto flex justify-center gap-12">
        {/* Booked Tours */}
        <NavLink
          to="/account/booked-tours"   // ✅ Absolute path
          className={({ isActive }) =>
            `flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "text-[#237227] border-b-2 border-[#237227] pb-1"
                : "text-gray-500 hover:text-[#237227]"
            }`
          }
        >
          <Briefcase size={18} />
          Booked Tours
        </NavLink>

        {/* Created Tours */}
        <NavLink
          to="/account/created-tours"  // ✅ Absolute path
          className={({ isActive }) =>
            `flex items-center gap-2 text-sm font-semibold transition-all duration-300 ${
              isActive
                ? "text-[#FFAA00] border-b-2 border-[#FFAA00] pb-1"
                : "text-gray-500 hover:text-[#FFAA00]"
            }`
          }
        >
          <Map size={18} />
          Created Tours
        </NavLink>
      </div>
    </div>
  );
}
export default AccountBar;