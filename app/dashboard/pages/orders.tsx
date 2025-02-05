const OrdersPage = () => {
    const [orders, setOrders] = useState<typeof ordersData>([]);
    const [filter, setFilter] = useState("All");
  
    useEffect(() => {
      setTimeout(() => {
        setOrders([
          ...ordersData,
          { id: "#1236", customer: "Mike Ross", total: "$75", status: "Shipped" },
        ]);
      }, 2000);
    }, []);
  
    const filteredOrders = filter === "All" ? orders : orders.filter(order => order.status === filter);
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Orders</h1>
        <div className="flex flex-wrap gap-4 my-4">
          {["All", "Completed", "Pending", "Shipped"].map((status) => (
            <button
              key={status}
              className={`px-4 py-2 rounded focus:outline-none focus:ring-2 ${
                filter === status ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
              onClick={() => setFilter(status)}
              aria-label={`Filter by ${status} orders`}
            >
              {status}
            </button>
          ))}
        </div>
        <OrderList orders={filteredOrders} />
      </div>
    );
  };
  