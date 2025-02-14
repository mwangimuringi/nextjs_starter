"use client";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    name: string;
    price: number;
}

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, []);

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
