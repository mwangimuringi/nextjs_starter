import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const OrderDetailsPage = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const [order, setOrder] = useState(null);

 

  return (
    <div>
      <h2>Order Details</h2>
      {order ? (
        <p>Order ID: {order.id}, Item: {order.item}, Price: ${order.price}</p>
      ) : (
        <p>Loading order...</p>
      )}
    </div>
  );
};

export default OrderDetailsPage;
