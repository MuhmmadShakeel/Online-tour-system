import React from "react";
import { Database, HardDrive, Info, RefreshCw } from "lucide-react";

const StatusItem = ({ label, value, color }) => (
  <div className="flex items-center justify-between py-3">
    <span className="text-xs font-bold text-slate-500 uppercase">{label}</span>
    <span className={`text-xs font-bold text-${color}-600 bg-${color}-50 px-2 py-1 rounded-lg`}>{value}</span>
  </div>
);

const SettingsSidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
          <Info size={18} className="text-blue-500" />
          Platform Status
        </h3>
        <div className="divide-y divide-slate-50">
          <StatusItem label="Version" value="v2.4.0" color="blue" />
          <StatusItem label="Database" value="Healthy" color="green" />
          <StatusItem label="API Status" value="Online" color="green" />
        </div>
      </div>

      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <h3 className="text-sm font-bold text-slate-900 mb-4 flex items-center gap-2">
          <HardDrive size={18} className="text-purple-500" />
          Storage Info
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-1 uppercase tracking-wider">
              <span>Disk Usage</span>
              <span>45% Used</span>
            </div>
            <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div className="h-full bg-purple-500 w-[45%]" />
            </div>
          </div>
          <button className="w-full py-2 bg-slate-50 text-slate-600 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
            <Database size={14} />
            Clean Cache
          </button>
        </div>
      </div>

      <div className="bg-[#FFAA00]/10 border border-[#FFAA00]/20 rounded-2xl p-6">
        <h3 className="text-[#237227] text-sm font-bold mb-2 flex items-center gap-2">
          <RefreshCw size={16} />
          Auto Backups
        </h3>
        <p className="text-xs text-[#237227]/80 font-medium leading-relaxed mb-4">
          Last backup was performed yesterday at 11:45 PM. 
        </p>
        <button className="text-xs font-bold text-[#237227] hover:underline">
          Run Backup Now
        </button>
      </div>
    </div>
  );
};

export default SettingsSidebar;
