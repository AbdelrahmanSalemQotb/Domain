import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Search, Filter, SlidersHorizontal, X } from "lucide-react";
import { domains } from "@/data/domains";
import { DomainCard } from "@/components/DomainCard";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Link } from "react-router-dom";

const Portfolio = () => {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 100000 });
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Extract unique categories
    const categories = ["All", ...Array.from(new Set(domains.map(d => d.category || "Uncategorized")))];

    // Filter Logic
    const filteredDomains = useMemo(() => {
        return domains.filter(domain => {
            const matchesSearch = domain.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategory === "All" || domain.category === selectedCategory;
            
            // Get lowest price for the domain to check against range
            const lowestPrice = domain.listings.length > 0 
                ? Math.min(...domain.listings.map(l => l.price)) 
                : 0;
            const matchesPrice = lowestPrice >= priceRange.min && lowestPrice <= priceRange.max;

            return matchesSearch && matchesCategory && matchesPrice;
        });
    }, [searchQuery, selectedCategory, priceRange]);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden">
            {/* Background Effects */}
            <div className="fixed inset-0 matrix-bg pointer-events-none opacity-50" />
            <div className="fixed inset-0 bg-gradient-to-br from-background via-background/90 to-blue-900/10 pointer-events-none" />

            {/* Navigation */}
             <nav className="fixed top-0 left-0 right-0 z-50 glass-ultra border-b border-white/5">
                <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 group">
                         <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                            <span className="text-xl font-black text-white">D</span>
                         </div>
                         <span className="text-lg font-bold font-display tracking-wide">DOMAINPUT</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <LanguageSwitcher />
                    </div>
                </div>
            </nav>

            {/* Header Section */}
            <div className="pt-32 pb-12 container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <span className="cyber-tag px-6 py-2 rounded-full inline-block mb-6">PREMIUM COLLECTION</span>
                    <h1 className="text-5xl md:text-7xl font-bold font-display mb-6">
                        <span className="text-foreground">DOMAIN</span> <span className="holo-text">PORTFOLIO</span>
                    </h1>
                     <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
                        Discover exclusive digital assets to elevate your brand.
                    </p>
                </motion.div>

                {/* Filters & Search Bar */}
                <div className="max-w-7xl mx-auto mb-12">
                    <div className="glass-ultra p-6 rounded-3xl flex flex-col md:flex-row gap-6 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-96 group">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input 
                                type="text" 
                                placeholder="Search domains..." 
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 focus:bg-white/10 transition-all font-display" 
                            />
                        </div>

                        {/* Filter Toggles */}
                        <div className="flex items-center gap-4 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
                            {categories.map(cat => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                                        selectedCategory === cat 
                                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                                        : "bg-surface hover:bg-white/10 text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>

                         {/* Advanced Filter Toggle (Mobile/Desktop) - Placeholder for now, simplistic implementation */}
                         {/* <button className="p-3 rounded-xl bg-surface hover:bg-white/10 transition-colors">
                             <SlidersHorizontal className="w-5 h-5 text-muted-foreground" />
                         </button> */}
                    </div>
                </div>

                {/* Results Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filteredDomains.length > 0 ? (
                            filteredDomains.map((domain, index) => (
                                <DomainCard key={domain.name} domain={domain} index={index} />
                            ))
                        ) : (
                             <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-20"
                             >
                                <div className="inline-flex p-6 rounded-full bg-white/5 mb-6">
                                    <Search className="w-12 h-12 text-muted-foreground opacity-50" />
                                </div>
                                <h3 className="text-2xl font-bold font-display text-muted-foreground">No domains found</h3>
                                <p className="text-muted-foreground/60 mt-2">Try adjusting your filters or search query.</p>
                             </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
