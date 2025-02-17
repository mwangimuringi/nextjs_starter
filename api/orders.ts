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
  
  export const getOrders = () => orders;
  export const getOrderById = (id: number) => orders.find((order) => order.id === id);
  