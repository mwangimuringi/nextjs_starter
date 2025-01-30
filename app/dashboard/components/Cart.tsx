import { useState } from "react";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

const Cart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  return <div>Shopping Cart ({cart.length} items)</div>;
};

export default Cart;
