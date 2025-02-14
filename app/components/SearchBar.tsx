import React, { useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Search for:', searchTerm);
    }
  };

  const handleReset = () => setSearchTerm('');

  return (
    <div className="flex items-center justify-center w-full max-w-md mx-auto mt-4">
      <form onSubmit={handleSearch} className="w-full">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="button"
          onClick={handleReset}
          className="ml-2 text-gray-500 hover:text-black"
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
