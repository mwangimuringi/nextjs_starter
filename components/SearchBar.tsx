// components/SearchBar.tsx
import React from "react";

const SearchBar: React.FC = () => {
  return (
    <div className="p-2 border rounded-md shadow-sm bg-white">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border rounded-md"
      />
    </div>
  );
};

export default SearchBar;
