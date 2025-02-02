import { useState } from "react";

type Order = {
  id: string;
  status: string;
  [key: string]: any;
} | null;

const ORDER_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  SHIPPED: "shipped",
} as const;

const useOrder = () => {
  const [order, setOrder] = useState<Order>(null);
  const [error, setError] = useState<string | null>(null);

  const createOrder = (orderData: Order) => {
    if (!orderData) {
      setError("Invalid order data");
      return;
    }
    setOrder(orderData);
    setError(null);
  };

  const updateOrder = (updatedData: Partial<Order>) => {
    if (!order) {
      setError("No order to update");
      return;
    }
    setOrder({ ...order, ...updatedData });
    setError(null);
  };

  const resetOrder = () => {
    setOrder(null);
    setError(null);
  };

  const updateOrderStatus = (status: string) => {
    if (!Object.values(ORDER_STATUS).includes(status as any)) {
      setError("Invalid status");
      return;
    }
    setOrder((prevOrder) => (prevOrder ? { ...prevOrder, status } : prevOrder));
    setError(null);
  };

  return {
    order,
    createOrder,
    updateOrder,
    resetOrder,
    updateOrderStatus,
    ORDER_STATUS,
    error,
  };
};

export default useOrder;
