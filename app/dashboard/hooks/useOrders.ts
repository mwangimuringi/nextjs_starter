import { useState } from "react";

const useOrder = () => {
    const [order, setOrder] = useState(null);
    const [error, setError] = useState<string | null>(null);
  
    const createOrder = (orderData: any) => {
      if (!orderData) {
        setError("Invalid order data");
        return;
      }
      setOrder(orderData);
      setError(null);
    };
  
    const updateOrder = (updatedData: any) => {
      if (!order) {
        setError("No order to update");
        return;
      }
      setOrder((prevOrder) => ({ ...prevOrder, ...updatedData }));
      setError(null);
    };
  
    const resetOrder = () => {
      setOrder(null);
      setError(null);
    };
  
    const ORDER_STATUS = {
      PENDING: "pending",
      CONFIRMED: "confirmed",
      SHIPPED: "shipped",
    };
  
    const updateOrderStatus = (status: string) => {
      if (!ORDER_STATUS[status.toUpperCase() as keyof typeof ORDER_STATUS]) {
        setError("Invalid status");
        return;
      }
      setOrder((prevOrder) => ({ ...prevOrder, status }));
      setError(null);
    };
  
    return {
      order,
      setOrder,
      createOrder,
      updateOrder,
      resetOrder,
      updateOrderStatus,
      ORDER_STATUS,
      error,
    };
  };
  
  export default useOrder;  
