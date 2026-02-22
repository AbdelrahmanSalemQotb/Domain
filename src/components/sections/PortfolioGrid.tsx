import { motion, AnimatePresence } from "framer-motion";
import { Search } from "lucide-react";
import { DomainCard } from "@/components/DomainCard";
import { Domain } from "@/data/domains";

interface PortfolioGridProps {
  domains: Domain[];
}

export const PortfolioGrid = ({ domains }: PortfolioGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
      <AnimatePresence>
        {domains.length > 0 ? (
          domains.map((domain, index) => (
            <DomainCard
              key={domain.name}
              domain={domain}
              index={index}
            />
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
            <h3 className="text-2xl font-bold font-display text-muted-foreground">
              No domains found
            </h3>
            <p className="text-muted-foreground/60 mt-2">
              Try adjusting your filters or search query.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
