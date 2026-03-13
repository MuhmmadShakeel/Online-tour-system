import React, { useState, useEffect } from "react";
import {
  useGetAllUsersQuery,
  useDeleteUserMutation,
} from "../../../redux/api/AuthApi.js";

function AllUsers() {
  const { data, isLoading, isError, refetch } = useGetAllUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("All");

  // Sync API data
  useEffect(() => {
    if (data?.data) {
      setUsers(data.data);
    } else {
      setUsers([]);
    }
  }, [data]);

  // Filter logic
  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesRole = filterRole === "All" || user.role === filterRole;

    return matchesSearch && matchesRole;
  });

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      await deleteUser(id).unwrap();
      setUsers(users.filter((user) => user._id !== id));
    } catch (error) {
      console.error("Delete user error:", error);
    }
  };

  /* ================= LOADING ================= */

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-60">
        <p className="text-gray-500 text-lg">Loading users...</p>
      </div>
    );
  }

  /* ================= ERROR ================= */

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center h-60">
        <p className="text-red-500 text-lg mb-4">
          Failed to fetch users. Try again.
        </p>

        <button
          onClick={refetch}
          className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto mt-8 space-y-6 px-4 md:px-0">

      {/* ================= TOP SECTION ================= */}

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* TOTAL USERS CARD */}

        <div className="bg-white border shadow-sm rounded-xl px-6 py-4 flex items-center gap-4">

          <div className="bg-indigo-100 p-3 rounded-lg">
            <span className="text-indigo-700 font-bold text-lg">👤</span>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase">
              Total Users
            </p>

            <h3 className="text-2xl font-bold text-gray-800">
              {users.length}
            </h3>
          </div>

        </div>

        {/* SEARCH + FILTER */}

        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">

          <input
            type="text"
            placeholder="Search by name or email..."
            className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="w-full sm:w-40 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <option value="all">all roles</option>
            <option value="user">user</option>
            <option value="admin">admin</option>
          </select>

        </div>

      </div>

      {/* ================= DESKTOP TABLE ================= */}

      <div className="hidden md:block bg-white rounded-xl shadow border overflow-hidden">

        <div className="px-6 py-4 border-b bg-indigo-50 flex justify-between">
          <h2 className="text-lg font-semibold text-indigo-700">
            All Users
          </h2>

          <span className="text-sm text-gray-500">
            {filteredUsers.length} Results
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">

            <thead className="bg-indigo-50 text-indigo-700">
              <tr>
                <th className="px-6 py-3 text-left font-semibold">Name</th>
                <th className="px-6 py-3 text-left font-semibold">Email</th>
                <th className="px-6 py-3 text-left font-semibold">Role</th>
                <th className="px-6 py-3 text-left font-semibold">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y">

              {filteredUsers.length ? (
                filteredUsers.map((user) => (
                  <tr key={user._id} className="hover:bg-indigo-50">

                    <td className="px-6 py-4 font-medium text-gray-800">
                      {user.name}
                    </td>

                    <td className="px-6 py-4 text-gray-500">
                      {user.email}
                    </td>

                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          user.role === "Admin"
                            ? "bg-indigo-200 text-indigo-800"
                            : "bg-green-200 text-green-800"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>

                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="px-3 py-1 bg-red-500 hover:bg-red-400 text-white rounded-lg text-sm"
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="text-center py-6 text-gray-500">
                    No users found
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>
      </div>

      {/* ================= MOBILE CARDS ================= */}

      <div className="md:hidden space-y-4">

        {filteredUsers.length ? (
          filteredUsers.map((user) => (
            <div
              key={user._id}
              className="bg-white border shadow-sm rounded-xl p-4 space-y-2"
            >

              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {user.name}
                </p>

                <p className="text-xs text-gray-500">
                  {user.email}
                </p>
              </div>

              <div className="flex justify-between items-center">

                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    user.role === "Admin"
                      ? "bg-indigo-200 text-indigo-800"
                      : "bg-green-200 text-green-800"
                  }`}
                >
                  {user.role}
                </span>

                <button
                  onClick={() => handleDelete(user._id)}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg text-xs"
                >
                  Delete
                </button>

              </div>

            </div>
          ))
        ) : (
          <div className="text-center text-gray-500 py-6">
            No users found
          </div>
        )}

      </div>

    </div>
  );
}

export default AllUsers;