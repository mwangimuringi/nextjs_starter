// components/Cart.tsx
import React, { useState } from "react";

interface CartItem {
  id: number;
  name: string;
  price: number;
}

const Cart: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 35 },
  ]);

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-lg font-semibold">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between">
              {item.name} - ${item.price}
              <button className="text-red-500" onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
