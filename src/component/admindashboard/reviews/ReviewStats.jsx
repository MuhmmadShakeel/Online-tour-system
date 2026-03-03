import React from "react";
import { Star, MessageSquare, ThumbsUp, TrendingUp } from "lucide-react";

const StatCard = ({ label, value, icon: Icon, color, subtext }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl bg-${color}-50 text-${color}-600`}>
        <Icon size={24} />
      </div>
      <div className="flex items-center gap-1 text-xs font-bold text-green-600">
        <TrendingUp size={14} />
        +12%
      </div>
    </div>
    <p className="text-xs font-bold text-slate-500 uppercase tracking-tight mb-1">{label}</p>
    <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
    <p className="text-[10px] text-slate-400 font-medium mt-1">{subtext}</p>
  </div>
);

const ReviewStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatCard label="Total Reviews" value="1,284" icon={MessageSquare} color="blue" subtext="Across all tour packages" />
      <StatCard label="Average Rating" value="4.8" icon={Star} color="yellow" subtext="Based on latest feedback" />
      <StatCard label="Response Rate" value="96%" icon={ThumbsUp} color="green" subtext="Reviews replied to" />
      <StatCard label="Pending Approval" value="12" icon={Clock} color="purple" subtext="Needs your attention" />
    </div>
  );
};

// Re-importing Clock because it was missing in the destructuring
import { Clock } from "lucide-react";

export default ReviewStats;
