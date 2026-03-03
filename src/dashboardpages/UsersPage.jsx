import React, { useState, useMemo } from "react";
import UsersHeader from "../component/admindashboard/users/UsersHeader";
import UserFilters from "../component/admindashboard/users/UserFilters";
import UsersTable from "../component/admindashboard/users/UsersTable";

const ALL_USERS = [
  {
    id: 1,
    name: "Ahmed Raza",
    initials: "AR",
    email: "ahmed.raza@example.com",
    role: "Admin",
    status: "Active",
    joinedDate: "12 Mar 2024"
  },
  {
    id: 2,
    name: "Sarah Khan",
    initials: "SK",
    email: "sarah.khan@example.com",
    role: "Editor",
    status: "Active",
    joinedDate: "15 Mar 2024"
  },
  {
    id: 3,
    name: "Bilal Hussain",
    initials: "BH",
    email: "bilal.hussain@example.com",
    role: "User",
    status: "Pending",
    joinedDate: "18 Mar 2024"
  },
  {
    id: 4,
    name: "Fatima Noor",
    initials: "FN",
    email: "fatima.noor@example.com",
    role: "User",
    status: "Inactive",
    joinedDate: "20 Mar 2024"
  },
  {
    id: 5,
    name: "Usman Ali",
    initials: "UA",
    email: "usman.ali@example.com",
    role: "Editor",
    status: "Active",
    joinedDate: "22 Mar 2024"
  }
];

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All Roles");
  const [statusFilter, setStatusFilter] = useState("All Status");

  const filteredUsers = useMemo(() => {
    return ALL_USERS.filter(user => {
      const matchesSearch = user.name.toLowerCase().includes(search.toLowerCase()) || 
                           user.email.toLowerCase().includes(search.toLowerCase());
      
      const matchesRole = roleFilter === "All Roles" || user.role === roleFilter;
      const matchesStatus = statusFilter === "All Status" || user.status === statusFilter;
      
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [search, roleFilter, statusFilter]);

  return (
    <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <UsersHeader 
        totalUsers={ALL_USERS.length} 
        activeUsers={ALL_USERS.filter(u => u.status === 'Active').length}
        pendingUsers={ALL_USERS.filter(u => u.status !== 'Active').length}
      />
      
      <UserFilters 
        search={search} 
        onSearchChange={setSearch}
        role={roleFilter}
        onRoleChange={setRoleFilter}
        status={statusFilter}
        onStatusChange={setStatusFilter}
      />

      <UsersTable users={filteredUsers} totalUsers={ALL_USERS.length} />
    </div>
  );
}
