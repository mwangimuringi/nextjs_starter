"use client";
import { useEffect, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    let filtered = products;
    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (category) {
      filtered = filtered.filter((p) => p.category === category);
    }
    setFilteredProducts(filtered);
  }, [searchTerm, category, products]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Products</h1>
      <SearchBar onSearch={setSearchTerm} />
      <CategoryFilter selectedCategory={category} onSelect={setCategory} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
