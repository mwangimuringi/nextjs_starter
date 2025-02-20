// components/CreateFilter.tsx
import React, { useState } from "react";

interface CreateFilterProps {
  onFilterChange: (filters: { search: string; category: string }) => void;
}

const CreateFilter: React.FC<CreateFilterProps> = ({ onFilterChange }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const handleFilterChange = () => {
    onFilterChange({ search, category });
  };

  const resetFilters = () => {
    setSearch("");
    setCategory("");
    onFilterChange({ search: "", category: "" });
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-100">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border rounded-md mb-2"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          handleFilterChange();
        }}
      />
      <select
        className="w-full p-2 border rounded-md mb-2"
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
          handleFilterChange();
        }}
      >
        <option value="">Select Category</option>
        <option value="electronics">Electronics</option>
        <option value="fashion">Fashion</option>
      </select>
      <button
        className="w-full p-2 bg-red-500 text-white rounded-md"
        onClick={resetFilters}
      >
        Reset
      </button>
    </div>
  );
};

export default CreateFilter;
