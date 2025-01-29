import React from "react";

type Order = {
  id: string;
  customer: string;
  status: string;
  total: string;
};

type Props = {
  orders: Order[];
};

const DashboardOrdersTable: React.FC<Props> = ({ orders }) => {
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
          {orders.map((order) => (
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
