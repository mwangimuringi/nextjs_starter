"use client";
import { useEffect, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
interface Product {
  id: number;
  name: string;
  price: number;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    // Here you can filter products based on category
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Products</h1>
      <SearchBar />
      <CategoryFilter
        categories={["Electronics", "Clothing", "Books"]}
        onSelectCategory={handleCategorySelect}
      />

      {loading ? (
        <p className="text-center mt-4">Loading products...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-center col-span-3">No products available.</p>
          )}
        </div>
      )}
    </div>
  );
}
