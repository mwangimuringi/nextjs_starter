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
    setCart((prev) => {
      const existingItem = prev.find((i) => i.id === item.id);
      if (existingItem) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };
  
  return { cart };
  
};
