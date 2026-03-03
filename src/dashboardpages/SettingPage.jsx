import React, { useState } from "react";
import SettingsHeader from "../component/admindashboard/settings/SettingsHeader";
import SettingsTabs from "../component/admindashboard/settings/SettingsTabs";
import SettingsSidebar from "../component/admindashboard/settings/SettingsSidebar";

export default function SettingPage() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <SettingsHeader />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Settings Tabs */}
        <div className="lg:col-span-2 space-y-6">
          <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>

        {/* Sidebar Status and Info */}
        <SettingsSidebar />
      </div>
    </div>
  );
}
