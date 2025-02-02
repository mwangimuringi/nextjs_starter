import React from "react";

type OrderProps = {
    id: string;
    status: string;
    total: number;
  };
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-500 text-white";
      case "Completed":
        return "bg-green-500 text-white";
      case "Cancelled":
        return "bg-red-500 text-white";
      default:
        return "bg-gray-400 text-white";
    }
  };
  
  const OrderCard: React.FC<OrderProps> = ({ id, status, total }) => {
    return (
      <div className="order-card p-4 border rounded-lg shadow-md bg-white">
        <p className="text-gray-700 font-semibold">Order ID: {id}</p>
        <span className={`px-2 py-1 rounded-md text-xs font-bold ${getStatusColor(status)}`}>
          {status}
        </span>
        <p className="text-lg font-bold text-green-700">Total: ${total.toFixed(2)}</p>
      </div>
    );
  };  

export default OrderCard;
