import React from "react";

type OrderProps = {
    id: string;
    status: string;
    total: number;
  };
  
  const OrderCard: React.FC<OrderProps> = ({ id, status, total }) => {
    return (
      <div className="order-card">
        <p>Order ID: {id}</p>
        <p>Status: {status}</p>
        <p>Total: ${total.toFixed(2)}</p>
      </div>
    );
  };  

export default OrderCard;
