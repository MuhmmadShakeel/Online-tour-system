import React from "react";
import { Menu, Bell } from "lucide-react";
import { useGetUserQuery } from "../../../redux/api/UserApi";

export default function GlobalTopbar({ onMenuClick, collapsed = false, searchPlaceholder }) {
  // Fetch the logged-in user
  const { data, isLoading } = useGetUserQuery();

  const user = data?.user;

  return (
    <header
      className={`fixed top-0 right-0 h-16 bg-white border-b border-gray-200 px-4 sm:px-8 flex items-center justify-between z-40 transition-all duration-300 ${
        collapsed ? "lg:left-20" : "lg:left-72"
      } left-0`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Menu button for mobile */}
        <button
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
          aria-label="Open Menu"
        >
          <Menu size={24} className="text-[#1D3557]" />
        </button>

        {/* Search */}
        {searchPlaceholder && (
          <div className="hidden md:flex items-center bg-gray-100 border border-gray-200 rounded-full px-4 py-1.5 focus-within:ring-2 focus-within:ring-[#237227]/40 transition-all">
            <input
              type="text"
              placeholder={searchPlaceholder}
              className="bg-transparent border-none focus:ring-0 text-sm text-[#1D3557] placeholder:text-gray-400 ml-2 w-48 lg:w-64 outline-none"
            />
          </div>
        )}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-3 sm:gap-5">
        {/* Notifications */}
        <button className="relative p-2 hover:bg-gray-100 rounded-full transition-all cursor-pointer">
          <Bell size={22} className="text-[#1D3557]" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#FFAA00] rounded-full"></span>
        </button>

        <div className="h-8 w-px bg-gray-200 hidden sm:block" />

        {/* User Profile */}
        {isLoading ? (
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gray-300 animate-pulse" />
            <div className="hidden sm:flex flex-col gap-1">
              <div className="w-20 h-3 bg-gray-300 animate-pulse rounded" />
              <div className="w-14 h-2 bg-gray-200 animate-pulse rounded" />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-3 p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
            {/* Profile Image */}
            <img
              src={user?.profileImage?.url || "https://i.pravatar.cc/300"}
              alt="Profile"
              className="w-9 h-9 rounded-full object-cover border-2 border-indigo-500"
            />

            {/* Name & Role */}
            <div className="hidden sm:flex flex-col">
              <p className="text-sm font-medium text-[#1D3557]">{user?.name || "Admin"}</p>
              <span className="text-xs text-gray-400">{user?.role || "Administrator"}</span>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}