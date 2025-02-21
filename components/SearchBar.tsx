// components/SearchBar.tsx
import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch("");
  };

  return (
    <div className="p-2 border rounded-md shadow-sm bg-white flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border rounded-md"
        value={searchTerm}
        onChange={handleSearch}
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
