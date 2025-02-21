// pages/checkout.tsx
import React from "react";

const Checkout = () => {
const orderSummary = [
  { id: 1, name: "Product 1", price: 20 },
  { id: 2, name: "Product 2", price: 35 },
];

const total = orderSummary.reduce((acc, item) => acc + item.price, 0);

return (
  <div className="p-6">
    <h1 className="text-2xl font-bold">Checkout</h1>
    <div className="mt-4 p-4 border rounded-md bg-gray-50">
      <h2 className="text-lg font-semibold">Order Summary</h2>
      <ul>
        {orderSummary.map((item) => (
          <li key={item.id} className="flex justify-between">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p className="mt-2 font-bold">Total: ${total}</p>
    </div>
  <form className="mt-4 space-y-3">
  <input type="text" placeholder="Full Name" className="w-full p-2 border rounded-md" />
  <input type="email" placeholder="Email Address" className="w-full p-2 border rounded-md" />
  <input type="text" placeholder="Shipping Address" className="w-full p-2 border rounded-md" />
</form>
  </div>
);
};

export default Checkout;
