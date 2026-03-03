import React from "react";
import { Users, Map, Star } from "lucide-react";

const ActivityItem = ({ title, time, status, type }) => {
  const getStatusColor = (s) => {
    switch (s) {
      case 'Completed': return 'bg-green-100 text-green-700';
      case 'Pending': return 'bg-yellow-100 text-yellow-700';
      case 'Cancelled': return 'bg-red-100 text-red-700';
      default: return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400">
          {type === 'user' ? <Users size={18} /> : type === 'tour' ? <Map size={18} /> : <Star size={18} />}
        </div>
        <div>
          <h4 className="text-sm font-bold text-slate-900">{title}</h4>
          <p className="text-xs text-slate-400">{time}</p>
        </div>
      </div>
      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${getStatusColor(status)}`}>
        {status}
      </span>
    </div>
  );
};

export default ActivityItem;
