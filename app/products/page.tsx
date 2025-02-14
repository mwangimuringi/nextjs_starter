"use client";
import { useEffect, useState } from "react";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

async function fetchProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
  return res.json();
}

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold">Products</h1>
      <SearchBar />
      <CategoryFilter />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
