import { useState } from "react";

type CartItem = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

const useCart = () => {
  const [cart, _setCart] = useState<CartItem[]>([]);

  return { cart };
};

export default useCart;
