import React from "react";
import { Shield, Trash2 } from "lucide-react";

const ProfileSidebar = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#FFAA00]/10 border border-[#FFAA00]/20 rounded-2xl p-6">
        <h3 className="text-[#237227] text-sm font-bold mb-2 flex items-center gap-2">
          <Shield size={16} />
          Account Status
        </h3>
        <p className="text-xs text-[#237227]/80 font-medium mb-4 leading-relaxed">
          Your account is currently verified and secure. Make sure to update your password every 90 days.
        </p>
        <div className="h-1.5 w-full bg-white/50 rounded-full overflow-hidden">
          <div className="h-full bg-[#237227] w-full" />
        </div>
      </div>

      <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
        <h3 className="text-slate-900 text-sm font-bold mb-4">Account Actions</h3>
        <div className="space-y-3">
          <button className="w-full py-2.5 bg-slate-50 text-slate-700 rounded-xl text-xs font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2">
            Download Data
          </button>
          <button className="w-full py-2.5 bg-red-50 text-red-600 rounded-xl text-xs font-bold hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
            <Trash2 size={16} />
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar;
