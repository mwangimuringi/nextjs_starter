// components/SearchBar.tsx
import React from "react";

const SearchBar: React.FC = () => {
  return (
    <input
      type="text"
      placeholder="Search..."
      className="w-full p-2 border rounded-md"
    />
  );
};

export default SearchBar;
