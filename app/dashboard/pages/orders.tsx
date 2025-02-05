import { useEffect, useState } from "react";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setOrders([
        { id: "#1234", customer: "John Doe", total: "$120", status: "Completed" },
        { id: "#1235", customer: "Jane Smith", total: "$85", status: "Pending" },
      ]);
    }, 2000);
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Orders</h1>
      {orders.length === 0 ? <p>Loading orders...</p> : <OrderList orders={orders} />}
    </div>
  );
};
