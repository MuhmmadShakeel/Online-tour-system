import React from "react";
import { TrendingUp } from "lucide-react";

const PerformanceCard = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
      <h2 className="text-lg font-bold text-slate-900 mb-6">Performance</h2>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-500 font-medium">Tour Completion</span>
            <span className="text-slate-900 font-bold">85%</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#237227] w-[85%] rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-500 font-medium">User Satisfaction</span>
            <span className="text-slate-900 font-bold">92%</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-[#FFAA00] w-[92%] rounded-full" />
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-slate-500 font-medium">System Uptime</span>
            <span className="text-slate-900 font-bold">99.9%</span>
          </div>
          <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 w-[99.9%] rounded-full" />
          </div>
        </div>

        <div className="pt-4 mt-4 border-t border-slate-50">
          <div className="bg-green-50 p-4 rounded-xl flex items-center gap-3">
            <div className="p-2 bg-white rounded-lg text-green-600">
              <TrendingUp size={20} />
            </div>
            <div>
              <p className="text-[10px] font-bold text-green-800 uppercase tracking-wider">Top Performing Tour</p>
              <p className="text-sm font-bold text-green-900">Skardu Valley Expedition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceCard;
