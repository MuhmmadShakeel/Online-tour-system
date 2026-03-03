import React from "react";
import { User, Mail, Globe, Phone, MapPin, Lock, Shield, Bell } from "lucide-react";
import { ProfileSection, InputField } from "./ProfileHeader";

export const PersonalInfoTab = () => {
  return (
    <>
      <ProfileSection title="Basic Information" icon={User}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InputField label="Full Name" value="Admin User" icon={User} />
          <InputField label="Username" value="admin_otms" icon={Globe} />
          <InputField label="Email Address" value="admin@otms.com" icon={Mail} />
          <InputField label="Phone Number" value="+92 300 1234567" icon={Phone} />
        </div>
      </ProfileSection>

      <ProfileSection title="Location & Address" icon={MapPin}>
        <div className="grid grid-cols-1 gap-6">
          <InputField label="Address" value="123 Main Street, Bahawalpur" icon={MapPin} />
          <div className="grid grid-cols-2 gap-6">
            <InputField label="City" value="Bahawalpur" />
            <InputField label="Country" value="Pakistan" />
          </div>
        </div>
      </ProfileSection>
    </>
  );
};

export const SecurityTab = () => {
  return (
    <>
      <ProfileSection title="Change Password" icon={Lock}>
        <div className="space-y-6 max-w-md">
          <InputField label="Current Password" type="password" icon={Lock} />
          <InputField label="New Password" type="password" icon={Lock} />
          <InputField label="Confirm New Password" type="password" icon={Lock} />
        </div>
      </ProfileSection>

      <ProfileSection title="Two-Factor Authentication" icon={Shield}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-bold text-slate-900 mb-1">Secure your account</h3>
            <p className="text-xs text-slate-500 font-medium">Add an extra layer of security to your account</p>
          </div>
          <button className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-xs font-bold hover:bg-slate-200 transition-colors">
            Enable 2FA
          </button>
        </div>
      </ProfileSection>
    </>
  );
};

export const NotificationTab = () => {
  return (
    <ProfileSection title="Notification Settings" icon={Bell}>
      <div className="space-y-4">
        {[
          { id: "n1", label: "Email Notifications", desc: "Receive email updates about account activity", active: true },
          { id: "n2", label: "Browser Notifications", desc: "Get push notifications for important alerts", active: false },
          { id: "n3", label: "Tour Updates", desc: "Notifications when a new tour is booked or modified", active: true },
          { id: "n4", label: "Review Alerts", desc: "Get notified when a new review is submitted", active: true },
        ].map((item) => (
          <div key={item.id} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <h3 className="text-sm font-bold text-slate-900 mb-0.5">{item.label}</h3>
              <p className="text-xs text-slate-500 font-medium">{item.desc}</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" className="sr-only peer" defaultChecked={item.active} />
              <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#237227]"></div>
            </label>
          </div>
        ))}
      </div>
    </ProfileSection>
  );
};
