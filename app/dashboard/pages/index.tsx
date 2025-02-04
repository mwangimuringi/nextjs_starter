import { useEffect, useState } from "react";

const IndexPage = () => {
  const [orders, setOrders] = useState(recentOrders);

  useEffect(() => {
    // Simulating API call
    setTimeout(() => {
      setOrders([
        ...recentOrders,
        { id: "#1236", customer: "Mike Ross", total: "$75", status: "Shipped" },
      ]);
    }, 2000);
  }, []);

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
        <OrderList orders={orders} />
      </div>
    </Layout>
  );
};
