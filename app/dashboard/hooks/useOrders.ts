import { useState } from "react";

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

  return { order, setOrder, createOrder, updateOrder, resetOrder };
};

export default useOrder;
