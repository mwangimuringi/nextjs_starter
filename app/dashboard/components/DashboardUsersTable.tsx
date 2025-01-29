import { Props } from "next/script";
import React, { useState } from "react";

const getRoleColor = (role: string) => {
    switch (role) {
      case "Admin":
        return "bg-red-500 text-white";
      case "Manager":
        return "bg-blue-500 text-white";
      case "User":
        return "bg-gray-500 text-white";
      default:
        return "bg-gray-300 text-black";
    }
  };
  
const DashboardUsersTable: React.FC<Props> = ({ users }) => {
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">User Management</h2>
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">User ID</th>
            <th className="p-3 text-left">Name</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id} className="border-b">
              <td className="p-3">{user.id}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">
                <span className={`px-2 py-1 text-sm rounded ${getRoleColor(user.role)}`}>
                  {user.role}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
