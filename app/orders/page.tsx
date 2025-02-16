import { useEffect, useState } from "react";

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOrders([
        { id: 1, item: "Laptop", price: 1200, status: "Pending" },
        { id: 2, item: "Smartphone", price: 800, status: "Shipped" },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Orders</h2>
      {loading ? (
        <p className="text-gray-500">Loading orders...</p>
      ) : (
        <ul className="space-y-3">
          {orders.map((order) => (
            <li key={order.id} className="border p-4 rounded-lg shadow-md flex justify-between">
              <div>
                <p className="font-medium text-lg">{order.item}</p>
                <p className="text-gray-600">${order.price}</p>
              </div>
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-lg ${
                  order.status === "Shipped" ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700"
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
