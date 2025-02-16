import { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", price: 20, quantity: 1 },
    { id: 2, name: "Product B", price: 35, quantity: 1 },
  ]);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between border-b pb-2">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartPage;
