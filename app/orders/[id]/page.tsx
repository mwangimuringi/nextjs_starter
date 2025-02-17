import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const OrderDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const [order, setOrder] = useState(null);

  const getStatusClass = (status: string) => {
    switch (status) {
      case "Delivered":
        return "bg-green-200 text-green-700";
      case "Shipped":
        return "bg-blue-200 text-blue-700";
      default:
        return "bg-yellow-200 text-yellow-700";
    }
  };
  
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
      <div className="border p-4 rounded-lg shadow-lg bg-white">
        <p className="text-lg font-medium">{order.item}</p>
        <p className="text-gray-600">Price: ${order.price}</p>
        <span className={`text-sm font-semibold px-3 py-1 rounded-lg ${getStatusClass(order.status)}`}>
          {order.status}
        </span>
      </div>
    </div>
  );  
};

export default OrderDetailsPage;
