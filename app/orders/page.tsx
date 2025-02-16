import { useEffect, useState } from "react";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    setTimeout(() => {
      setOrders([
        { id: 1, item: "Laptop", price: 1200, status: "Pending" },
        { id: 2, item: "Smartphone", price: 800, status: "Shipped" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter((order) => order.status === filter);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>
      <div className="mb-4 flex space-x-2">
        <button
          onClick={() => setFilter("All")}
          className={`px-3 py-1 rounded-lg transition ${
            filter === "All"
              ? "bg-gray-800 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("Pending")}
          className={`px-3 py-1 rounded-lg transition ${
            filter === "Pending"
              ? "bg-yellow-600 text-white"
              : "bg-yellow-200 hover:bg-yellow-300"
          }`}
        >
          Pending
        </button>
        <button
          onClick={() => setFilter("Shipped")}
          className={`px-3 py-1 rounded-lg transition ${
            filter === "Shipped"
              ? "bg-green-600 text-white"
              : "bg-green-200 hover:bg-green-300"
          }`}
        >
          Shipped
        </button>
      </div>
      {loading ? (
        <p className="text-gray-500">Loading orders...</p>
      ) : (
        <ul className="space-y-3">
          {filteredOrders.map((order) => (
            <li
              key={order.id}
              className="border p-4 rounded-lg shadow-md flex justify-between transition hover:shadow-lg"
            >
              <div>
                <p className="font-medium text-lg">{order.item}</p>
                <p className="text-gray-600">${order.price}</p>
              </div>
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-lg ${
                  order.status === "Shipped"
                    ? "bg-green-200 text-green-700"
                    : "bg-yellow-200 text-yellow-700"
                }`}
              >
                {order.status}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default OrdersPage;
