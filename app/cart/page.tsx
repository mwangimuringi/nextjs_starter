import { useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product A", price: 20, quantity: 1 },
    { id: 2, name: "Product B", price: 35, quantity: 1 },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li key={item.id} className="flex justify-between items-center border-b pb-2">
            <span>{item.name}</span>
            <div className="flex items-center gap-2">
              <button
                className="bg-gray-300 px-2 rounded"
                onClick={() => updateQuantity(item.id, -1)}
              >
                -
              </button>
              <span>{item.quantity}</span>
              <button
                className="bg-gray-300 px-2 rounded"
                onClick={() => updateQuantity(item.id, 1)}
              >
                +
              </button>
            </div>
            <span>${item.price * item.quantity}</span>
            <button
              className="bg-red-500 text-white px-2 rounded"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-xl font-bold">Total: ${totalPrice}</div>
    </div>
  );
};

export default CartPage;
