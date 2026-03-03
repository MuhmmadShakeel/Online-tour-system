import React from "react";
import { Camera, Save } from "lucide-react";

export const ProfileSection = ({ title, children, icon: Icon }) => (
  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden mb-6">
    <div className="px-6 py-4 border-b border-slate-50 bg-slate-50/50 flex items-center gap-2">
      {Icon && <Icon size={18} className="text-[#237227]" />}
      <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">{title}</h2>
    </div>
    <div className="p-6">
      {children}
    </div>
  </div>
);

export const InputField = ({ label, icon: Icon, type = "text", value, placeholder, disabled = false }) => (
  <div className="space-y-2">
    <label className="text-xs font-bold text-slate-500 uppercase tracking-tight">{label}</label>
    <div className="relative">
      {Icon && <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />}
      <input
        type={type}
        defaultValue={value}
        placeholder={placeholder}
        disabled={disabled}
        className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#237227]/20 focus:border-[#237227] outline-none transition-all disabled:opacity-60 disabled:cursor-not-allowed`}
      />
    </div>
  </div>
);

const ProfileHeader = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div className="flex items-center gap-6">
        <div className="relative group">
          <div className="w-24 h-24 rounded-2xl bg-[#237227] text-white flex items-center justify-center text-3xl font-bold shadow-lg shadow-[#237227]/20">
            OT
          </div>
          <button className="absolute -bottom-2 -right-2 p-2 bg-white rounded-xl shadow-md border border-slate-100 text-[#237227] hover:scale-110 transition-transform">
            <Camera size={16} />
          </button>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Admin Profile</h1>
          <p className="text-slate-500 text-sm font-medium">OTMS Manager • Since March 2024</p>
        </div>
      </div>
      <div className="flex gap-3">
        <button className="px-6 py-2.5 bg-[#237227] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#237227]/20 hover:bg-[#237227]/90 transition-all flex items-center gap-2">
          <Save size={18} />
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
