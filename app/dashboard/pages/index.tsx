import React from "react";
import { Layout } from "lucide-react";

const stats = [
  { label: "Total Orders", value: 120 },
  { label: "Revenue", value: "$45,000" },
];

const recentOrders = [
  { id: "#1234", customer: "John Doe", total: "$120", status: "Completed" },
  { id: "#1235", customer: "Jane Smith", total: "$85", status: "Pending" },
];

const IndexPage = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
        <p className="text-gray-600">
          Manage your orders and products efficiently.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {stats.map((stat, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <h2 className="text-lg font-semibold">{stat.label}</h2>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Recent Orders</h2>
          <ul className="mt-2">
            {recentOrders.map((order) => (
              <li
                key={order.id}
                className="flex justify-between p-4 border rounded-lg shadow-md bg-gray-50"
              >
                <span>{order.customer}</span>
                <span>{order.total}</span>
                <span className="text-sm text-gray-500">{order.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

const OrderList = ({ orders }: { orders: typeof recentOrders }) => (
  <div className="mt-6">
    <h2 className="text-lg font-semibold">Recent Orders</h2>
    <ul className="mt-2">
      {orders.map((order) => (
        <li key={order.id} className="flex justify-between p-4 border rounded-lg shadow-md bg-gray-50">
          <span>{order.customer}</span>
          <span>{order.total}</span>
          <span className="text-sm text-gray-500">{order.status}</span>
        </li>
      ))}
    </ul>
  </div>
);
