// components/SearchBar.tsx

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm.trim()) {
      // Simulating search logic
      setSearchResults(['Product 1', 'Product 2', 'Product 3']);
    } else {
      setSearchResults([]);
    }
  }, [debouncedTerm]);

  const handleClick = (product: string) => {
    router.push(`/products/${product}`);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto mt-4">
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {searchResults.length > 0 && (
        <ul className="mt-2 w-full p-2 border bg-white rounded-lg shadow-lg">
          {searchResults.map((result, index) => (
            <li
              key={index}
              className="py-1 cursor-pointer hover:bg-gray-200"
              onClick={() => handleClick(result)}
            >
              {result}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
