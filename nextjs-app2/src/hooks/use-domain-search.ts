"use client";

import { useState } from "react";

export function useDomainSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        setShowResults(true);
      }, 2000);
    }
  };

  return {
    searchQuery,
    setSearchQuery,
    isSearching,
    showResults,
    setShowResults,
    handleSearch,
  };
}
