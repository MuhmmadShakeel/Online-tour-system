import React from "react";
import { Globe, Shield, Cpu, Mail, Palette } from "lucide-react";

const SettingField = ({ label, description, children }) => (
  <div className="flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-slate-50 last:border-0 gap-4">
    <div className="max-w-md">
      <h4 className="text-sm font-bold text-slate-900 mb-1">{label}</h4>
      <p className="text-xs text-slate-400 font-medium leading-relaxed">{description}</p>
    </div>
    <div className="w-full md:w-64">
      {children}
    </div>
  </div>
);

export const GeneralTab = () => (
  <div className="space-y-2">
    <SettingField label="Site Name" description="The name of your platform displayed to users.">
      <input type="text" defaultValue="OTMS Platform" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#237227]/20 focus:border-[#237227] outline-none" />
    </SettingField>
    <SettingField label="Support Email" description="Used for system notifications and user support.">
      <input type="email" defaultValue="support@otms.com" className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#237227]/20 focus:border-[#237227] outline-none" />
    </SettingField>
    <SettingField label="Language" description="The primary language for the admin dashboard.">
      <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#237227]/20 outline-none">
        <option>English (US)</option>
        <option>Urdu</option>
        <option>Arabic</option>
      </select>
    </SettingField>
  </div>
);

export const SecurityTab = () => (
  <div className="space-y-2">
    <SettingField label="Session Timeout" description="Automatically log out users after inactivity.">
      <select className="w-full px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-[#237227]/20 outline-none">
        <option>30 Minutes</option>
        <option>1 Hour</option>
        <option>4 Hours</option>
      </select>
    </SettingField>
    <SettingField label="Two-Factor Auth" description="Require a second verification step for all admins.">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked />
        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#237227]"></div>
      </label>
    </SettingField>
  </div>
);

export const SystemTab = () => (
  <div className="space-y-2">
    <SettingField label="Maintenance Mode" description="Disable public access while performing updates.">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#237227]"></div>
      </label>
    </SettingField>
    <SettingField label="Error Logs" description="Keep a detailed history of system errors for debugging.">
      <label className="relative inline-flex items-center cursor-pointer">
        <input type="checkbox" className="sr-only peer" defaultChecked />
        <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#237227]"></div>
      </label>
    </SettingField>
  </div>
);

const SettingsTabs = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: "general", label: "General", icon: Globe },
    { id: "security", label: "Security", icon: Shield },
    { id: "system", label: "System", icon: Cpu },
  ];

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      <div className="flex border-b border-slate-100 px-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 py-4 px-4 text-sm font-bold transition-all relative ${
              activeTab === tab.id ? "text-[#237227]" : "text-slate-400 hover:text-slate-600"
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#237227] rounded-full" />
            )}
          </button>
        ))}
      </div>
      <div className="p-6">
        {activeTab === "general" && <GeneralTab />}
        {activeTab === "security" && <SecurityTab />}
        {activeTab === "system" && <SystemTab />}
      </div>
    </div>
  );
};

export default SettingsTabs;
