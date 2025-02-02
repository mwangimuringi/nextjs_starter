import { useState } from "react";

const useOrder = () => {
    const [order, setOrder] = useState(null);
  
    const createOrder = (orderData: any) => {
      setOrder(orderData);
    };
  
    return { order, setOrder, createOrder };
  };  

export default useOrder;
