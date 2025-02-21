// components/SearchBar.tsx
import React, { useState } from "react";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="p-2 border rounded-md shadow-sm bg-white">
      <input
        type="text"
        placeholder="Search..."
        className="w-full p-2 border rounded-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
