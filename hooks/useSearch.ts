import { useState, useEffect } from "react";

export const useSearch = () => {
  const [query, setQuery] = useState("");
  let debounceTimer: NodeJS.Timeout;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => setQuery(value), 300);
  };

  const clearSearch = () => {
    setQuery("");
  };

  return { query, handleSearch, clearSearch };
};
