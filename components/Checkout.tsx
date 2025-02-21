// pages/checkout.tsx
import React, { useState } from "react";

interface OrderItem {
  id: number;
  name: string;
  price: number;
}

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const orderSummary: OrderItem[] = [
    { id: 1, name: "Product 1", price: 20 },
    { id: 2, name: "Product 2", price: 35 },
  ];

  const total = orderSummary.reduce((acc, item) => acc + item.price, 0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="max-w-lg mx-auto p-6 border rounded-md shadow-md bg-white">
      <h1 className="text-2xl font-bold border-b pb-2">Checkout</h1>

      {submitted ? (
        <p className="text-green-600 font-semibold mt-4">Order placed successfully!</p>
      ) : (
        <>
          <div className="mt-4 p-4 border rounded-md bg-gray-50">
            <h2 className="text-lg font-semibold">Order Summary</h2>
            <ul className="divide-y">
              {orderSummary.map((item) => (
                <li key={item.id} className="flex justify-between py-2">
                  {item.name} - ${item.price}
                </li>
              ))}
            </ul>
            <p className="mt-2 font-bold text-lg">Total: ${total}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Checkout;
