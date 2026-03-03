import React from "react";
import { Save, Settings as SettingsIcon } from "lucide-react";

const SettingsHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="p-2.5 bg-[#237227]/10 text-[#237227] rounded-xl">
          <SettingsIcon size={24} />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">System Settings</h1>
          <p className="text-slate-500 text-sm font-medium">Manage your platform configuration and preferences</p>
        </div>
      </div>
      <button className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#237227] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#237227]/20 hover:bg-[#237227]/90 transition-all">
        <Save size={18} />
        Save Changes
      </button>
    </div>
  );
};

export default SettingsHeader;
