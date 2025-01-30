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

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
