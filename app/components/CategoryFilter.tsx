import { useState } from "react";
import { FaFilter } from "react-icons/fa";

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

  const handleReset = () => {
    setSelectedCategory("All Categories");
    onSelectCategory("All Categories");
  };

  return (
    <div className="p-4 border rounded-md shadow-md flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2 transition-all duration-300">
      <FaFilter className="text-gray-600 animate-pulse" />
      <h2 className="text-lg font-semibold transition-colors hover:text-blue-500">
        Filter by Category
      </h2>
      <select
        className="w-full sm:w-auto p-2 border rounded-md transition-all focus:ring-2 focus:ring-blue-500"
        value={selectedCategory}
        onChange={handleChange}
        aria-label="Category Filter"
      >
        <option>All Categories</option>
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
      <button
        className="bg-red-500 text-white px-3 py-1 rounded-md w-full sm:w-auto transition-transform hover:scale-105"
        onClick={handleReset}
        aria-label="Reset Filter"
      >
        Reset
      </button>
    </div>
  );
}
