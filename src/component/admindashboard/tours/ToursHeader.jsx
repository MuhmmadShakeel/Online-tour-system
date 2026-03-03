import React from "react";
import { Plus, Map, CheckCircle, Clock } from "lucide-react";

const TourStat = ({ label, value, icon: Icon, color }) => (
  <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3 sm:gap-4">
    <div className={`p-2 sm:p-2.5 rounded-lg bg-${color}-50 text-${color}-600`}>
      <Icon size={18} className="sm:w-5 sm:h-5" />
    </div>
    <div>
      <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-tight">{label}</p>
      <p className="text-lg sm:text-xl font-bold text-slate-900">{value}</p>
    </div>
  </div>
);

const ToursHeader = ({ totalCount = 0, activeCount = 0, draftCount = 0 }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">Manage Tours</h1>
          <p className="text-slate-500 text-xs sm:text-sm font-medium">Create, edit, and track your tour packages</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 bg-[#237227] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#237227]/20 hover:bg-[#237227]/90 transition-all">
          <Plus size={18} />
          Add New Tour
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <TourStat label="Total Tours" value={totalCount} icon={Map} color="blue" />
        <TourStat label="Active Tours" value={activeCount} icon={CheckCircle} color="green" />
        <TourStat label="Drafts" value={draftCount} icon={Clock} color="yellow" />
      </div>
    </div>
  );
};

export default ToursHeader;
