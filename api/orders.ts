import { v4 as uuidv4 } from "uuid"; 

export type Order = {
  id: string;
  item: string;
  price: number;
  status: "Pending" | "Shipped" | "Delivered";
};

const orders: Order[] = [
  { id: uuidv4(), item: "Laptop", price: 1200, status: "Pending" },
  { id: uuidv4(), item: "Phone", price: 800, status: "Shipped" },
];

/**
 * Get all orders
 */
export const getOrders = (): Order[] => orders;

/**
 * Get an order by ID
 */
export const getOrderById = (id: string): Order | never => {
  const order = orders.find((order) => order.id === id);
  if (!order) throw new Error(`Order with ID ${id} not found`);
  return order;
};

/**
 * Create a new order
 */
export const createOrder = (order: Omit<Order, "id">): Order => {
  const newOrder: Order = { ...order, id: uuidv4() };
  orders.push(newOrder);
  return newOrder;
};

/**
 * Update an existing order
 */
export const updateOrder = (
  id: string,
  updatedOrder: Partial<Order>
): Order | null => {
  const orderIndex = orders.findIndex((order) => order.id === id);
  if (orderIndex === -1) return null;

  orders[orderIndex] = { ...orders[orderIndex], ...updatedOrder };
  return orders[orderIndex];
};

/**
 * Delete an order by ID
 */
export const deleteOrder = (id: string): boolean => {
  const orderIndex = orders.findIndex((order) => order.id === id);
  if (orderIndex === -1) return false;

  orders.splice(orderIndex, 1);
  return true;
};
