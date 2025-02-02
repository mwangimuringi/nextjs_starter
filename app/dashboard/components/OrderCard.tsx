import React from "react";

type OrderProps = {
    id: string;
    status: string;
    total: number;
    date: string;
    customer: string;
    onViewDetails: (id: string) => void;
  };
  
  const OrderCard: React.FC<OrderProps> = ({ id, status, total, date, customer, onViewDetails }) => {
    return (
      <div className="order-card p-4 border rounded-lg shadow-md bg-white">
        <p className="text-gray-700 font-semibold">Order ID: {id}</p>
        <p className="text-sm text-gray-500">Customer: {customer}</p>
        <p className="text-sm text-gray-500">Date: {date}</p>
        <span className={`px-2 py-1 rounded-md text-xs font-bold ${getStatusColor(status)}`}>
          {status}
        </span>
        <p className="text-lg font-bold text-green-700">Total: ${total.toFixed(2)}</p>
        <button
          onClick={() => onViewDetails(id)}
          className="mt-2 text-sm text-blue-500 underline"
        >
          View Details
        </button>
      </div>
    );
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

export default OrderCard;
