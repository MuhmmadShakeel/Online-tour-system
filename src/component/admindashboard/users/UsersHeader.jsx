import React from "react";
import { UserPlus, Users, UserCheck, UserX } from "lucide-react";

const UserStat = ({ label, value, icon: Icon, color }) => (
  <div className="bg-white p-3 sm:p-4 rounded-xl border border-slate-100 shadow-sm flex items-center gap-3 sm:gap-4">
    <div className={`p-2 sm:p-2.5 rounded-lg bg-${color}-50 text-${color}-600`}>
      <Icon size={18} className="sm:w-5 sm:h-5" />
    </div>
    <div>
      <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-tight">{label}</p>
      <p className="text-lg sm:text-xl font-bold text-slate-900">{value}</p>
    </div>
  </div>
);

const UsersHeader = ({ totalUsers = 0, activeUsers = 0, pendingUsers = 0 }) => {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-slate-900">User Management</h1>
          <p className="text-slate-500 text-xs sm:text-sm font-medium">Manage user accounts, roles, and platform permissions</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-6 py-2.5 bg-[#237227] text-white rounded-xl text-sm font-bold shadow-lg shadow-[#237227]/20 hover:bg-[#237227]/90 transition-all">
          <UserPlus size={18} />
          Add New User
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        <UserStat label="Total Users" value={totalUsers} icon={Users} color="blue" />
        <UserStat label="Active Users" value={activeUsers} icon={UserCheck} color="green" />
        <UserStat label="Pending/Inactive" value={pendingUsers} icon={UserX} color="yellow" />
      </div>
    </div>
  );
};

export default UsersHeader;
