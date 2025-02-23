import { useState } from "react";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }  

export const useCart = () => {
  const [cart, setCart] = useState([]);
  const addToCart = (item: CartItem) => {
    setCart((prev) => [...prev, { ...item, quantity: 1 }]);
  };
  return { cart };

  
};
