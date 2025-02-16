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
      <h2 className="text-2xl font-semibold mb-4 text-center">Your Cart</h2>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center border-b pb-3 px-2"
          >
            <span className="font-medium">{item.name}</span>
            <div className="flex items-center gap-3">
              <button
                className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400 transition"
                onClick={() => updateQuantity(item.id, -1)}
              >
                -
              </button>
              <span className="text-lg">{item.quantity}</span>
              <button
                className="bg-gray-300 px-3 py-1 rounded-md hover:bg-gray-400 transition"
                onClick={() => updateQuantity(item.id, 1)}
              >
                +
              </button>
            </div>
            <span className="font-semibold text-lg">
              ${item.price * item.quantity}
            </span>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-xl font-bold text-center">
        Total: ${totalPrice}
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
        Checkout
      </button>
    </div>
  );
};

export default CartPage;
