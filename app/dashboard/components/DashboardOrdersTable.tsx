import React from "react";

const DashboardOrdersTable: React.FC = () => {
  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Status</th>
            <th className="p-3 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b">
            <td className="p-3">#1001</td>
            <td className="p-3">John Doe</td>
            <td className="p-3">Processing</td>
            <td className="p-3">$25.99</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardOrdersTable;
