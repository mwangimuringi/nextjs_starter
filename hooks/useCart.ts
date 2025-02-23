import { useState } from "react";

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
  }  

export const useCart = () => {
  const [cart, setCart] = useState([]);
  return { cart };
};
