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

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="p-4 border rounded-md bg-gray-50 shadow-md">
      <h2 className="text-lg font-semibold border-b pb-2">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500">
          <p>Your cart is empty.</p>
          <img
            src="/empty-cart.svg"
            alt="Empty cart"
            className="w-40 mx-auto mt-2"
          />
        </div>
      ) : (
        <>
          <ul className="divide-y">
            {cartItems.map((item) => (
              <li key={item.id} className="flex justify-between py-2">
                <span>
                  {item.name} - ${item.price}
                </span>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="mt-2 font-bold text-lg">Total: ${totalPrice}</p>
          <button className="mt-2 p-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Checkout
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
