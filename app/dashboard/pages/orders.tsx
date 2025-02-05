import React from "react";

const orders = [
  { id: "#1234", customer: "John Doe", total: "$120", status: "Completed" },
  { id: "#1235", customer: "Jane Smith", total: "$85", status: "Pending" },
];

const OrdersPage = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Orders</h1>
      <ul className="mt-4 space-y-3">
        {orders.map((order) => (
          <li
            key={order.id}
            className="p-4 border rounded-lg shadow-md bg-gray-50 flex justify-between"
          >
            <p className="font-medium">
              {order.customer} - {order.total}
            </p>
            <span
              className={`text-sm font-semibold ${
                order.status === "Completed"
                  ? "text-green-600"
                  : "text-yellow-600"
              }`}
            >
              {order.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersPage;
