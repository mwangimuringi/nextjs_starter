import Layout from "@/app/layout";
import { useEffect, useState } from "react";

const recentOrders = [
  { id: "#1234", customer: "John Doe", total: "$120", status: "Completed" },
  { id: "#1235", customer: "Jane Smith", total: "$85", status: "Pending" },
];

const statusData = [
  { label: "Total Orders", value: 120 },
  { label: "Completed Orders", value: 90 },
  { label: "Pending Orders", value: 30 },
];

const OrderList = ({ orders }: { orders: typeof recentOrders }) => (
  <ul className="mt-4">
    {orders.map((order) => (
      <li key={order.id} className="p-4 border rounded shadow">
        <p>{order.customer} - {order.total}</p>
        <span className="text-sm">{order.status}</span>
      </li>
    ))}
  </ul>
);

const IndexPage = () => {
  const [orders, setOrders] = useState(recentOrders);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setOrders((prevOrders) => [
        ...prevOrders,
        { id: "#1236", customer: "Mike Ross", total: "$75", status: "Shipped" },
      ]);
    }, 2000);
  }, []);

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
        <p className="text-gray-600">Manage your orders and products efficiently.</p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {statusData.map((stat, index) => (
            <div key={index} className="p-4 bg-white rounded shadow">
              <h2 className="text-lg font-semibold">{stat.label}</h2>
              <p className="text-xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>
        <h2 className="mt-6 text-lg font-semibold">Recent Orders</h2>
        <OrderList orders={orders} />
      </div>
    </Layout>
  );
};

export default IndexPage;
