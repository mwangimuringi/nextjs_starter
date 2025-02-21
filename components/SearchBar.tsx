// components/SearchBar.tsx
import React, { useState, useEffect } from "react";
import { Search } from "lucide-react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(searchTerm);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, onSearch]);

  const clearSearch = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="p-3 border rounded-lg shadow-md bg-gray-50 flex items-center space-x-2">
      <Search className="text-gray-500" size={20} />
      <input
        type="text"
        placeholder="Search products..."
        className="w-full p-2 border rounded-md outline-none"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {searchTerm && (
        <button
          className="text-red-500 hover:text-red-700"
          onClick={clearSearch}
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default SearchBar;
