import React, { useState } from "react";
import { User, Shield, Bell } from "lucide-react";
import ProfileHeader from "../component/admindashboard/profile/ProfileHeader";
import { PersonalInfoTab, SecurityTab, NotificationTab } from "../component/admindashboard/profile/ProfileTabs";
import ProfileSidebar from "../component/admindashboard/profile/ProfileSidebar";

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("personal");

  const tabs = [
    { id: "personal", label: "Personal Info", icon: User },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
  ];

  return (
    <div className="max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <ProfileHeader />

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-8 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 py-4 text-sm font-bold transition-all relative ${
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

      {/* Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          {activeTab === "personal" && <PersonalInfoTab />}
          {activeTab === "security" && <SecurityTab />}
          {activeTab === "notifications" && <NotificationTab />}
        </div>

        {/* Sidebar Info */}
        <ProfileSidebar />
      </div>
    </div>
  );
}
