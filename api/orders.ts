export type Order = {
    id: number;
    item: string;
    price: number;
    status: "Pending" | "Shipped" | "Delivered";
  };
  
  const orders: Order[] = [];
  
  export const createOrder = (order: Order) => {
    orders.push(order);
    return order;
  };
  
  export const getOrders = () => orders;
  export const getOrderById = (id: number) => orders.find((order) => order.id === id);
  