import React from "react";
import { Search, ChevronDown, Filter } from "lucide-react";

const ReviewFilters = ({ search, onSearchChange, rating, onRatingChange, status, onStatusChange }) => {
  return (
    <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="relative w-full md:w-96">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search reviews by user or tour..."
          className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#237227]/20 focus:border-[#237227] outline-none transition-all"
        />
      </div>

      <div className="flex items-center gap-3 w-full md:w-auto">
        <div className="relative flex-1 md:flex-none">
          <select 
            value={rating}
            onChange={(e) => onRatingChange(e.target.value)}
            className="appearance-none w-full md:w-40 pl-4 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 outline-none cursor-pointer focus:ring-2 focus:ring-[#237227]/20 transition-all"
          >
            <option>All Ratings</option>
            <option>5 Stars</option>
            <option>4 Stars</option>
            <option>3 Stars & Below</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
        </div>

        <div className="relative flex-1 md:flex-none">
          <select 
            value={status}
            onChange={(e) => onStatusChange(e.target.value)}
            className="appearance-none w-full md:w-40 pl-4 pr-10 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-700 outline-none cursor-pointer focus:ring-2 focus:ring-[#237227]/20 transition-all"
          >
            <option>All Status</option>
            <option>Approved</option>
            <option>Pending</option>
            <option>Hidden</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={16} />
        </div>
      </div>
    </div>
  );
};

export default ReviewFilters;
