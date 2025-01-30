import { useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([
    { id: "1", name: "Pepperoni Pizza", price: 12, quantity: 1 },
    { id: "2", name: "Margherita Pizza", price: 10, quantity: 2 },
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + change } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span>
              {item.name} - ${item.price} x {item.quantity}
            </span>
            <div>
              <button
                onClick={() => updateQuantity(item.id, 1)}
                className="px-2 py-1 bg-green-500 text-white rounded"
              >
                +
              </button>
              <button
                onClick={() => updateQuantity(item.id, -1)}
                className="px-2 py-1 bg-red-500 text-white rounded ml-2"
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-4 font-bold">Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
