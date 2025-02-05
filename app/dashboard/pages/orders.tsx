import { useState } from "react";
import OrderList from "./ordersList";


const OrdersPage = () => {
  const [search, setSearch] = useState("");
  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Orders</h1>
      <input
        type="text"
        placeholder="Search orders..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-4 p-2 border rounded w-full"
      />
      <OrderList orders={filteredOrders} />
    </div>
  );
};
