import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Domain } from "@/data/domains";
import { MarketplaceLogo } from "./MarketplaceLogo";

interface DomainCardProps {
  domain: Domain;
  index: number;
}

export const DomainCard = ({ domain, index }: DomainCardProps) => {
  const getLowestPrice = () => {
    if (!domain.listings || domain.listings.length === 0) return 0;
    return Math.min(...domain.listings.map((l) => l.price));
  };

  const lowestPrice = getLowestPrice();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="card-holo p-0 rounded-2xl relative group overflow-hidden flex flex-col h-full bg-card/40 backdrop-blur-xl border-white/5"
    >
      {/* Image or Fallback Header */}
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        {domain.image ? (
          <>
            <img
              src={domain.image}
              alt={domain.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-900/40 via-purple-900/20 to-background flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 cyber-grid opacity-30" />
            <span className="text-4xl font-black text-white/10 select-none absolute top-[-10px] left-[-10px] scale-[2]">
              {domain.name.substring(0, 2).toUpperCase()}
            </span>
          </div>
        )}

        {/* Check Availability Badge (simulated) */}
        <div className="absolute top-4 right-4 glass-ultra px-3 py-1 rounded-full flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-bold text-white tracking-widest">
            AVAILABLE
          </span>
        </div>

        {/* Domain Name Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-black font-display text-white tracking-tight drop-shadow-lg mb-1 truncate">
            {domain.name}
          </h3>
          {domain.description && (
            <p className="text-sm text-gray-300 font-light truncate">
              {domain.description}
            </p>
          )}
        </div>
      </div>

      {/* Listings Grid */}
      <div className="p-5 flex flex-col gap-3 grow">
        {domain.listings.map((listing) => {
          const isBestPrice = listing.price === lowestPrice;
          return (
            <motion.a
              key={listing.platform}
              href={listing.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between p-3 rounded-xl transition-all border ${
                isBestPrice
                  ? "bg-primary/10 border-primary/40 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                  : "bg-white/5 border-white/5 hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.02 }}
            >

              <div className="flex items-center gap-3">
                 <div className={`
                    h-8 flex items-center px-2 rounded-lg
                    ${listing.platform === 'Atom' ? 'text-indigo-400' : 
                      listing.platform === 'Sedo' ? 'text-orange-400' :
                      listing.platform === 'Afternic' ? 'text-blue-400' :
                      'text-foreground'}
                 `}>
                    <MarketplaceLogo platform={listing.platform} className="w-24 h-8" />
                 </div>
                 
                 {isBestPrice && (
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 tracking-wider">
                        BEST PRICE
                    </span>
                  )}
              </div>

              <div className="flex items-center gap-3">
                <span
                  className={`font-display font-bold text-lg ${isBestPrice ? "text-white" : "text-muted-foreground"}`}
                >
                  ${listing.price.toLocaleString()}
                </span>
                <ArrowRight
                  className={`w-4 h-4 ${isBestPrice ? "text-primary" : "text-gray-600"}`}
                />
              </div>
            </motion.a>
          );
        })}
      </div>
    </motion.div>
  );
};
