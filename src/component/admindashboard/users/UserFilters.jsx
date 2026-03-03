import React from "react";
import { Search, ChevronDown } from "lucide-react";

const UserFilters = ({ search, onSearchChange, role, onRoleChange, status, onStatusChange }) => {
  return (
    <div className="bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl border border-slate-100 shadow-sm flex flex-col lg:flex-row gap-3 sm:gap-4 items-stretch lg:items-center justify-between">
      <div className="relative w-full lg:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search users by name, email..."
          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#237227]/20 focus:border-[#237227] outline-none transition-all"
        />
      </div>

      <div className="flex flex-row items-center gap-2 sm:gap-3 w-full lg:w-auto">
        <div className="relative w-full sm:w-40">
          <select 
            value={role}
            onChange={(e) => onRoleChange(e.target.value)}
            className="appearance-none w-full pl-3 sm:pl-4 pr-8 sm:pr-10 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-700 outline-none cursor-pointer focus:ring-2 focus:ring-[#237227]/20 transition-all"
          >
            <option>All Roles</option>
            <option>Admin</option>
            <option>Editor</option>
            <option>User</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
        </div>

        <div className="relative w-full sm:w-40">
          <select 
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="appearance-none w-full pl-3 sm:pl-4 pr-8 sm:pr-10 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-medium text-slate-700 outline-none cursor-pointer focus:ring-2 focus:ring-[#237227]/20 transition-all"
          >
            <option>All Status</option>
            <option>Active</option>
            <option>Inactive</option>
            <option>Pending</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
        </div>
      </div>
    </div>
  );
};

export default UserFilters;
