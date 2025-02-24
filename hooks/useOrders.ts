// hooks/useOrders.ts
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

  const removeOrder = (id: number) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  const clearOrders = () => {
    setOrders([]);
  };

  return { orders, addOrder, updateOrderStatus, removeOrder, clearOrders };
};
