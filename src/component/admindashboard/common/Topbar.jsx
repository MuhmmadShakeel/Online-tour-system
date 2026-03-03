import { useState, useRef, useEffect } from "react";
import {
  Menu,
  Bell,
  Search,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function GlobalTopbar({
  onMenuClick,
  collapsed = false,
  searchPlaceholder,
  userProfile,
  dropdownItems,
  showNotifications = true,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 h-16 bg-white border-b border-gray-200 px-4 sm:px-8 flex items-center justify-between z-40 transition-all duration-300 ${
        collapsed ? "lg:left-20" : "lg:left-72"
      } left-0`}
    >
      {/* Left Section */}
      <div className="flex items-center gap-4">
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
            <Search size={18} className="text-[#1D3557]/60" />
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
        {showNotifications && (
          <button className="relative p-2 hover:bg-gray-100 rounded-full transition-all cursor-pointer">
            <Bell size={22} className="text-[#1D3557]" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-[#FFAA00] rounded-full"></span>
          </button>
        )}

        <div className="h-8 w-px bg-gray-200 hidden sm:block" />

        {/* Profile Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-3 p-1 pr-2 hover:bg-gray-100 rounded-full transition-all cursor-pointer"
          >
            <div className="w-9 h-9 rounded-full bg-[#1D3557] text-white flex items-center justify-center font-bold">
              {userProfile.initials}
            </div>

            <div className="hidden sm:block text-left">
              <p className="text-sm font-medium text-[#1D3557] leading-none">
                {userProfile.name}
              </p>
              {userProfile.subtext && (
                <div className="text-[10px] text-gray-400 mt-1 font-semibold">
                  {userProfile.subtext}
                </div>
              )}
            </div>

            <ChevronDown
              size={16}
              className={`text-gray-400 transition-transform duration-200 ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-1 animate-in fade-in slide-in-from-top-2">
              <div className="px-4 py-3 border-b border-gray-100 sm:hidden">
                <p className="text-sm font-medium text-[#1D3557]">{userProfile.name}</p>
                {userProfile.email && (
                  <p className="text-xs text-gray-500">{userProfile.email}</p>
                )}
              </div>
              
              {dropdownItems.map((item, index) => {
                const Icon = item.icon;
                const isDanger = item.variant === "danger";
                
                const content = (
                  <>
                    <Icon size={18} className={isDanger ? "text-[#237227]" : "text-[#1D3557]"} />
                    {item.label}
                  </>
                );

                const className = `w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  isDanger 
                    ? "text-[#237227] hover:bg-green-50 font-medium" 
                    : "text-[#1D3557] hover:bg-gray-50"
                }`;

                if (item.href) {
                  return (
                    <Link
                      key={index}
                      to={item.href}
                      className={className}
                      onClick={() => setDropdownOpen(false)}
                    >
                      {content}
                    </Link>
                  );
                }

                return (
                  <button
                    key={index}
                    className={className}
                    onClick={() => {
                      item.onClick?.();
                      setDropdownOpen(false);
                    }}
                  >
                    {content}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
