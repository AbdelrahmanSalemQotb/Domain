import { useState, useMemo } from "react";
import { domains } from "@/data/domains";
import { PortfolioHeader } from "@/components/sections/PortfolioHeader";
import { FilterBar } from "@/components/sections/FilterBar";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";

const Portfolio = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [priceRange] = useState<{ min: number; max: number }>({
    min: 0,
    max: 100000,
  });

  const categories = [
    "All",
    ...Array.from(new Set(domains.map((d) => d.category || "Uncategorized"))),
  ];

  const filteredDomains = useMemo(() => {
    return domains.filter((domain) => {
      const matchesSearch = domain.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || domain.category === selectedCategory;
      const lowestPrice =
        domain.listings.length > 0
          ? Math.min(...domain.listings.map((l) => l.price))
          : 0;
      const matchesPrice =
        lowestPrice >= priceRange.min && lowestPrice <= priceRange.max;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [searchQuery, selectedCategory, priceRange]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 matrix-bg pointer-events-none opacity-50" />
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background/90 to-blue-900/10 pointer-events-none" />

      <PortfolioHeader />

      <div className="container mx-auto px-6 pb-12 relative z-10">
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
        <PortfolioGrid domains={filteredDomains} />
      </div>
    </div>
  );
};

export default Portfolio;
