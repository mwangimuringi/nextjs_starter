import React from "react";

type OrderProps = {
    id: string;
    status: string;
    total: number;
  };
  
  const OrderCard: React.FC<OrderProps> = ({ id, status, total }) => {
    return (
      <div className="order-card p-4 border rounded-lg shadow-md bg-white">
        <p className="text-gray-700 font-semibold">Order ID: {id}</p>
        <p className="text-sm text-blue-600">Status: {status}</p>
        <p className="text-lg font-bold text-green-700">Total: ${total.toFixed(2)}</p>
      </div>
    );
  };  

export default OrderCard;
