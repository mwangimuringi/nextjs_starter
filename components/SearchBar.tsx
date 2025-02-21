// components/SearchBar.tsx
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="p-2 border rounded-md shadow-sm bg-white flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border rounded-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button className="ml-2 text-red-500" onClick={clearSearch}>
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;
