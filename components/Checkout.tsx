import React, { useState } from "react";
import OrderSummary from "@/components/OrderSummary";

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
          {/* Order Summary Component */}
          <OrderSummary items={orderSummary} />

          <form className="mt-4 space-y-3" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
            />
            <input
              type="text"
              name="address"
              placeholder="Shipping Address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border rounded-md focus:ring focus:ring-blue-200"
            />
            <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              Proceed to Payment
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default Checkout;
