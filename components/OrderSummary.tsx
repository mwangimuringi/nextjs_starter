interface OrderItem {
    id: number;
    name: string;
    price: number;
  }
  
  interface OrderSummaryProps {
    items: OrderItem[];
  }
  
  const OrderSummary: React.FC<OrderSummaryProps> = ({ items }) => {
    return <div>Order Summary</div>;
  };
  