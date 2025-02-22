import React from "react";

interface OrderItem {
  id: number;
  name: string;
  price: number;
}

interface OrderSummaryProps {
  items: OrderItem[];
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ items }) => {
  const total = items.reduce((acc, item) => acc + item.price, 0);

  if (items.length === 0) {
    return <p className="text-gray-500 text-center">No items in cart.</p>;
  }

  return (
    <div className="mt-4 p-4 border rounded-md bg-gray-50">
      <h2 className="text-lg font-semibold">Order Summary</h2>
      <ul className="divide-y">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between py-2">
            <span>{item.name}</span>
            <span>${item.price}</span>
          </li>
        ))}
      </ul>
      <p className="mt-2 font-bold text-lg text-right">Total: ${total}</p>
    </div>
  );
};

export default OrderSummary;
