import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Order = {
  id: number;
  item: string;
  price: number;
  status: "Pending" | "Shipped" | "Delivered";
};

const OrderDetailsPage = () => {
  const { id } = useParams();
  const orderId = parseInt(String(id), 10); 

  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!orderId) return;

    setTimeout(() => {
      const mockOrder: Order = {
        id: orderId,
        item: "Laptop",
        price: 1200,
        status: "Shipped",
      };
      setOrder(mockOrder);
      setLoading(false);
    }, 1000);
  }, [orderId]);

  if (loading) {
    return (
      <p className="text-gray-500 text-center">Loading order details...</p>
    );
  }

  if (!order) {
    return <p className="text-red-500 text-center">Order not found.</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Order Details</h2>
      <div className="border p-4 rounded-lg shadow-lg bg-white">
        <p className="text-lg font-medium">{order.item}</p>
        <p className="text-gray-600">Price: ${order.price}</p>
        <span
          className={`text-sm font-semibold px-3 py-1 rounded-lg bg-blue-200 text-blue-700`}
        >
          {order.status}
        </span>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
