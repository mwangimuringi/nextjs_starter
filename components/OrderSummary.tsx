interface OrderItem {
  id: number;
  name: string;
  price: number;
}

interface OrderSummaryProps {
  items: OrderItem[];
}

const total = items.reduce((acc, item) => acc + item.price, 0);

return (
    <div className="mt-4 p-4 border rounded-md bg-gray-50">
      <h2 className="text-lg font-semibold">Order Summary</h2>
      <ul className="divide-y">
        {items.map((item) => (
          <li key={item.id} className="flex justify-between py-2">
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <p className="mt-2 font-bold text-lg">Total: ${total}</p>
    </div>
  );
  