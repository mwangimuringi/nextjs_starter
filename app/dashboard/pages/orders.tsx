import React from "react";

const orders = [
    { id: "#1234", customer: "John Doe", total: "$120", status: "Completed" },
    { id: "#1235", customer: "Jane Smith", total: "$85", status: "Pending" },
  ];
  
  const OrdersPage = () => {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Orders</h1>
        <ul className="mt-4">
          {orders.map((order) => (
            <li key={order.id} className="p-4 border rounded shadow">
              <p>{order.customer} - {order.total}</p>
              <span className="text-sm">{order.status}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default OrdersPage;
