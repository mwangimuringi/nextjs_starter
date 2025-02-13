import { useState } from "react";

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Filter by Category</h2>
      <select
        className="mt-2 p-2 border rounded-md"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option>All Categories</option>
        <option>Electronics</option>
        <option>Fashion</option>
        <option>Home & Garden</option>
      </select>
    </div>
  );
}
