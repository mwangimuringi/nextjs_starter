...
return (
  <div className="p-4 border rounded-md bg-gray-50 shadow-md">
    <h2 className="text-lg font-semibold border-b pb-2">Shopping Cart</h2>
    {cartItems.length === 0 ? (
      <p className="text-gray-500">Your cart is empty.</p>
    ) : (
      <>
        <ul className="divide-y">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between py-2">
              <span>{item.name} - ${item.price}</span>
              <button className="text-red-500 hover:text-red-700" onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p className="mt-2 font-bold text-lg">Total: ${totalPrice}</p>
        <button className="mt-2 p-2 w-full bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Checkout</button>
      </>
    )}
  </div>
);
...
