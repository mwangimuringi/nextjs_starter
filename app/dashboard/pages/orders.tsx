import { useEffect, useState } from "react";
import OrderList from "./ordersList";

// Define the Order type explicitly
type Order = {
  id: string;
  customer: string;
  total: string;
  status: "Completed" | "Pending" | "Shipped";
};

// Define ordersData with correct typing
const ordersData: Order[] = [
  { id: "#1234", customer: "John Doe", total: "$100", status: "Completed" },
  { id: "#1235", customer: "Jane Smith", total: "$50", status: "Pending" },
];

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filter, setFilter] = useState<"All" | "Completed" | "Pending" | "Shipped">("All");

  useEffect(() => {
    setTimeout(() => {
      setOrders((prevOrders) => [
        ...prevOrders,
        { id: "#1236", customer: "Mike Ross", total: "$75", status: "Shipped" },
      ]);
    }, 2000);
  }, []);

  const filteredOrders = filter === "All" ? orders : orders.filter((order) => order.status === filter);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Orders</h1>
      <div className="flex flex-wrap gap-4 my-4">
        {["All", "Completed", "Pending", "Shipped"].map((status) => (
          <button
            key={status}
            className={`px-4 py-2 rounded focus:outline-none focus:ring-2 ${
              filter === status ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setFilter(status as "All" | "Completed" | "Pending" | "Shipped")}
            aria-label={`Filter by ${status} orders`}
          >
            {status}
          </button>
        ))}
      </div>
      <OrderList orders={filteredOrders} />
    </div>
  );
};

export default OrdersPage;
