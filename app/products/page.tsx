const products = [
    { id: 1, name: "iPhone 14", price: 999 },
    { id: 2, name: "MacBook Pro", price: 1999 },
];

export default function ProductsPage() {
    return (
        <div className="p-6">
            <h1 className="text-2xl font-semibold">Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                {products.map((product) => (
                    <div key={product.id} className="border p-4 rounded-md">
                        <h2 className="text-lg font-medium">{product.name}</h2>
                        <p className="text-gray-600">${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
