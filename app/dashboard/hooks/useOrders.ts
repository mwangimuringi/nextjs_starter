import { useState } from "react";

const ORDER_STATUS = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  SHIPPED: "shipped",
};

const useOrder = () => {
  const [order, setOrder] = useState(null);

  const createOrder = (orderData: any) => {
    setOrder(orderData);
  };

  const updateOrder = (updatedData: any) => {
    setOrder((prevOrder) => ({ ...prevOrder, ...updatedData }));
  };

  const resetOrder = () => {
    setOrder(null);
  };

  const updateOrderStatus = (status: string) => {
    setOrder((prevOrder) => ({ ...prevOrder, status }));
  };

  return {
    order,
    setOrder,
    createOrder,
    updateOrder,
    resetOrder,
    updateOrderStatus,
    ORDER_STATUS,
  };
};

export default useOrder;
