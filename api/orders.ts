export type Order = {
    id: number;
    item: string;
    price: number;
    status: "Pending" | "Shipped" | "Delivered";
  };
  
  const orders: Order[] = [];
  
  orders.push(
    { id: 1, item: "Laptop", price: 1200, status: "Pending" },
    { id: 2, item: "Phone", price: 800, status: "Shipped" }
  );
  
  export const createOrder = (order: Order) => {
    orders.push(order);
    return order;
  };

  export const updateOrder = (id: number, updatedOrder: Partial<Order>) => {
    const orderIndex = orders.findIndex((order) => order.id === id);
    if (orderIndex === -1) return null;
    
    orders[orderIndex] = { ...orders[orderIndex], ...updatedOrder };
    return orders[orderIndex];
  };  
  
  export const deleteOrder = (id: number) => {
    const orderIndex = orders.findIndex((order) => order.id === id);
    if (orderIndex === -1) return false;
  
    orders.splice(orderIndex, 1);
    return true;
  };
  
  export const getOrderById = (id: number) => {
    const order = orders.find((order) => order.id === id);
    if (!order) throw new Error(`Order with ID ${id} not found`);
    return order;
  };
  
  export const getOrders = () => orders;
  