import React, { useState } from "react";

type Order = {
  id: string;
  customer: string;
  status: "Processing" | "Completed" | "Cancelled";
  total: string;
};

type Props = {
  orders: Order[];
};

const DashboardOrdersTable: React.FC<Props> = ({ orders }) => {
  const [search, setSearch] = useState("");

  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold text-gray-800">Recent Orders</h2>
        <input
          type="text"
          placeholder="Search by customer"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded focus:outline-none focus:ring focus:ring-blue-200"
        />
      </div>
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
          {filteredOrders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3">{order.status}</td>
              <td className="p-3">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardOrdersTable;
