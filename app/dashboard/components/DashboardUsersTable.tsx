import React, { useState } from "react";

type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

type Props = {
  users: User[];
};

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
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState<"name" | "role" | null>(null);
  const [ascending, setAscending] = useState(true);
  const itemsPerPage = 5;

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortUsers = (users: User[]) => {
    if (!sortBy) return users;
    return [...users].sort((a, b) => {
      if (sortBy === "name") {
        return ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
      } else if (sortBy === "role") {
        return ascending ? a.role.localeCompare(b.role) : b.role.localeCompare(a.role);
      }
      return 0;
    });
  };

  const sortedUsers = sortUsers(filteredUsers);
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const paginatedUsers = sortedUsers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSort = (key: "name" | "role") => {
    if (sortBy === key) {
      setAscending(!ascending);
    } else {
      setSortBy(key);
      setAscending(true);
    }
  };

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
            <th
              className="p-3 text-left cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name {sortBy === "name" ? (ascending ? "↑" : "↓") : ""}
            </th>
            <th className="p-3 text-left">Email</th>
            <th
              className="p-3 text-left cursor-pointer"
              onClick={() => handleSort("role")}
            >
              Role {sortBy === "role" ? (ascending ? "↑" : "↓") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user) => (
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

export default DashboardUsersTable;
