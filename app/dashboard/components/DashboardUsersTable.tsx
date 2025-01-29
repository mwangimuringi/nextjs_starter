import React from "react";

const DashboardUsersTable: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">User Management</h2>
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
          <tr className="border-b">
            <td className="p-3">#U1001</td>
            <td className="p-3">Alice Johnson</td>
            <td className="p-3">alice@example.com</td>
            <td className="p-3">Admin</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardUsersTable;
