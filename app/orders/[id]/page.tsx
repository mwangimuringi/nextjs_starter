import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const OrderDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const [order, setOrder] = useState(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    setTimeout(() => {
      const mockOrder = {
        id: parseInt(id),
        item: "Laptop",
        price: 1200,
        status: "Shipped",
      };

      setOrder(mockOrder);
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) {
    return (
      <p className="text-gray-500 text-center">Loading order details...</p>
    );
  }

  if (!order) {
    return <p className="text-red-500 text-center">Order not found.</p>;
  }

  return (
    <div>
      <h2>Order Details</h2>
      {order ? (
        <p>
          Order ID: {order.id}, Item: {order.item}, Price: ${order.price}
        </p>
      ) : (
        <p>Loading order...</p>
      )}
    </div>
  );
};

export default OrderDetailsPage;
