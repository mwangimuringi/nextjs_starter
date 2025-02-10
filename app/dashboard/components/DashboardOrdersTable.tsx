import React, { useState } from "react";

type Order = {
  id: string;
  customer: string;
  status: "Processing" | "Completed" | "Cancelled";
  total: number;
};

type Props = {
  orders: Order[];
};

const DashboardOrdersTable: React.FC<Props> = ({ orders }) => {
  const [sortBy, setSortBy] = useState<"total" | "status" | null>(null);
  const [ascending, setAscending] = useState(true);

  const sortOrders = (orders: Order[]) => {
    if (!sortBy) return orders;
    return [...orders].sort((a, b) => {
      if (sortBy === "total") {
        return ascending ? a.total - b.total : b.total - a.total;
      } else if (sortBy === "status") {
        return ascending ? a.status.localeCompare(b.status) : b.status.localeCompare(a.status);
      }
      return 0;
    });
  };

  const handleSort = (key: "total" | "status") => {
    if (sortBy === key) {
      setAscending(!ascending);
    } else {
      setSortBy(key);
      setAscending(true);
    }
  };

  const sortedOrders = sortOrders(orders);

  return (
    <div className="bg-white p-6 shadow rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Orders</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-3 text-left">Order ID</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left cursor-pointer" onClick={() => handleSort("status")}>
              Status {sortBy === "status" ? (ascending ? "↑" : "↓") : ""}
            </th>
            <th className="p-3 text-left cursor-pointer" onClick={() => handleSort("total")}>
              Total {sortBy === "total" ? (ascending ? "↑" : "↓") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders.map((order) => (
            <tr key={order.id} className="border-b">
              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3">{order.status}</td>
              <td className="p-3">${order.total.toFixed(2)}</td>
            </tr>
          ))}
          <tr className="border-b">
            <td className="p-3 text-center" colSpan={4}>
              {sortedOrders.length === 0 && "No orders found"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DashboardOrdersTable;
