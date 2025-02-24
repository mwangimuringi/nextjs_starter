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

  return { orders };
};
