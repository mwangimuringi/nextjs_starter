import { useState } from "react";

interface Order {
  id: number;
  items: string[];
  total: number;
  status: "pending" | "completed" | "canceled";
}

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  const addOrder = (newOrder: Order) => {
    setOrders((prev) => [...prev, newOrder]);
  };

  const updateOrderStatus = (
    id: number,
    status: "pending" | "completed" | "canceled"
  ) => {
    setOrders((prev) =>
      prev.map((order) => (order.id === id ? { ...order, status } : order))
    );
  };

  return { orders, addOrder, updateOrderStatus };
};
