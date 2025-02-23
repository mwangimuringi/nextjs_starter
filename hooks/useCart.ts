import { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Add item to cart or update quantity if it already exists
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

  // Remove an item from the cart
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Clear the entire cart
  const clearCart = () => {
    setCart([]);
  };

  return { cart, addToCart, removeFromCart, clearCart };
};
