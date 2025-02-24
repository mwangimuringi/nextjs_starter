import { useState } from "react";

export const useOrders = () => {
  const [orders, setOrders] = useState([]);

  return { orders };
};