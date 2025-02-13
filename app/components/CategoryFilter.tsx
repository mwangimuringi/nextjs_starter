import { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  onSelectCategory,
}: CategoryFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
    onSelectCategory(e.target.value);
  };

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold">Filter by Category</h2>
      <select
        className="mt-2 p-2 border rounded-md"
        value={selectedCategory}
        onChange={handleChange}
      >
        <option>All Categories</option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
}
