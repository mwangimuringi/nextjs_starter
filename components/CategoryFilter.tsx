// components/CreateFilter.tsx
import React, { useState } from "react";

const CreateFilter: React.FC = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const resetFilters = () => {
    setSearch("");
    setCategory("");
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-100">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border rounded-md mb-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <select
        className="w-full p-2 border rounded-md mb-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
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
