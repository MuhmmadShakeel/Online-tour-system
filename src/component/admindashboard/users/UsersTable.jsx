import React from "react";
import { Edit2, Trash2, Eye, Shield, Mail, Calendar } from "lucide-react";

const UsersTable = ({ users = [], totalUsers = 0 }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
      {/* Mobile Card Layout */}
      <div className="md:hidden divide-y divide-slate-100">
        {users.length > 0 ? (
          users.map((user) => (
            <div key={user.id} className="p-4 space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-100 text-[#1D3557] flex items-center justify-center font-bold text-sm shrink-0">
                  {user.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="text-sm font-bold text-slate-900 truncate">{user.name}</h4>
                  <p className="text-xs text-slate-500 truncate">{user.email}</p>
                </div>
                <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full shrink-0 ${
                  user.status === 'Active' ? 'bg-green-100 text-green-700' : 
                  user.status === 'Inactive' ? 'bg-red-100 text-red-700' : 
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {user.status}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <Shield size={12} className={user.role === 'Admin' ? "text-[#237227]" : "text-slate-400"} />
                    <span className="text-slate-600 font-medium">{user.role}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar size={12} />
                    <span className="font-medium">{user.joinedDate}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 pt-1 border-t border-slate-50">
                <button className="p-2 text-slate-400 hover:text-[#237227] hover:bg-green-50 rounded-lg transition-all" title="View Profile">
                  <Eye size={16} />
                </button>
                <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Edit User">
                  <Edit2 size={16} />
                </button>
                <button className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete User">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="px-4 py-12 text-center text-slate-500 font-medium">
            No users found matching your search.
          </div>
        )}
      </div>

      {/* Desktop Table Layout */}
      <div className="hidden md:block overflow-x-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">User</th>
              <th className="px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
              <th className="px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Joined Date</th>
              <th className="px-4 lg:px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {users.length > 0 ? (
              users.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/30 transition-colors group">
                  <td className="px-4 lg:px-6 py-4">
                    <div className="flex items-center gap-3 lg:gap-4">
                      <div className="w-9 h-9 lg:w-10 lg:h-10 rounded-full bg-slate-100 text-[#1D3557] flex items-center justify-center font-bold text-sm">
                        {user.initials}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-900">{user.name}</h4>
                        <p className="text-xs text-slate-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 lg:px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Shield size={14} className={user.role === 'Admin' ? "text-[#237227]" : "text-slate-400"} />
                      <span className="text-sm text-slate-600 font-medium">{user.role}</span>
                    </div>
                  </td>
                  <td className="px-4 lg:px-6 py-4">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full ${
                      user.status === 'Active' ? 'bg-green-100 text-green-700' : 
                      user.status === 'Inactive' ? 'bg-red-100 text-red-700' : 
                      'bg-yellow-100 text-yellow-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 lg:px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Calendar size={14} />
                      <span className="text-sm font-medium">{user.joinedDate}</span>
                    </div>
                  </td>
                  <td className="px-4 lg:px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1 lg:gap-2">
                      <button className="p-1.5 lg:p-2 text-slate-400 hover:text-[#237227] hover:bg-green-50 rounded-lg transition-all" title="View Profile">
                        <Eye size={18} />
                      </button>
                      <button className="p-1.5 lg:p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all" title="Edit User">
                        <Edit2 size={18} />
                      </button>
                      <button className="p-1.5 lg:p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all" title="Delete User">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-12 text-center text-slate-500 font-medium">
                  No users found matching your search.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="px-4 sm:px-6 py-3 sm:py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
        <p className="text-[10px] sm:text-xs text-slate-500 font-medium">Showing {users.length} of {totalUsers} users</p>
        <div className="flex gap-2">
          <button className="px-2.5 sm:px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] sm:text-xs font-bold text-slate-600 hover:bg-slate-50">Previous</button>
          <button className="px-2.5 sm:px-3 py-1 bg-white border border-slate-200 rounded-lg text-[10px] sm:text-xs font-bold text-slate-600 hover:bg-slate-50">Next</button>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
