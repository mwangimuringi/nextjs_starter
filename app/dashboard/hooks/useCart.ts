import { useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const useCart = () => {
    const [cart, setCart] = useState<CartItem[]>([]);
  
    const addToCart = (item: CartItem) => {
      setCart((prevCart) => {
        const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
  
        if (existingItem) {
          return prevCart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
              : cartItem
          );
        }
        return [...prevCart, item];
      });
    };
  
    const removeFromCart = (id: number) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };
  
    return { cart, addToCart, removeFromCart };
  };
  
  export default useCart;  
