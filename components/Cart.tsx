// components/Cart.tsx
...
return (
  <div className="p-4 border rounded-md">
    <h2 className="text-lg font-semibold">Shopping Cart</h2>
    {cartItems.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between">
              {item.name} - ${item.price}
              <button className="text-red-500" onClick={() => removeItem(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p className="mt-2 font-bold">Total: ${totalPrice}</p>
        <button className="mt-2 p-2 bg-blue-500 text-white rounded">Checkout</button>
      </>
    )}
  </div>
);
...
