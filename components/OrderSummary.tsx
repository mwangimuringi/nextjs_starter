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
  <div>
    <h2>Order Summary</h2>
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
    <p>Total: ${total}</p>
  </div>
);

