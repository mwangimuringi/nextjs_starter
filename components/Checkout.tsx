import React, { useState } from "react";

const Checkout = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="address"
          placeholder="Shipping Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
      </form>
    </div>
  );
};

export default Checkout;
