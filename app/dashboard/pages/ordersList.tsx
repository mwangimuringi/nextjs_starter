const OrderList = ({ orders }: { orders: typeof orders }) => (
    <ul className="mt-4 space-y-3">
      {orders.map((order) => (
        <li key={order.id} className="p-4 border rounded-lg shadow-md bg-gray-50 flex justify-between">
          <p className="font-medium">{order.customer} - {order.total}</p>
          <span className={`text-sm font-semibold ${order.status === "Completed" ? "text-green-600" : "text-yellow-600"}`}>
            {order.status}
          </span>
        </li>
      ))}
    </ul>
  );
  