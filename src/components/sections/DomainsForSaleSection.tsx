import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { domains } from "@/data/domains";
import { DomainCard } from "@/components/DomainCard";
import { HexGrid } from "@/components/effects/SvgBackgrounds";

const activeDomains = domains.filter((d) => d.highlight).slice(0, 6);

export const DomainsForSaleSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      <HexGrid />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="cyber-tag px-6 py-2 rounded-full inline-block mb-6">
            DOMAINS FOR SALE
          </span>
          <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
            <span className="text-foreground">PREMIUM</span>{" "}
            <span className="holo-text">DOMAINS</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            Browse our collection of premium domains available for purchase
          </p>
        </motion.div>

        {/* Domains Grid - Featured Only */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mb-12">
          {activeDomains.map((domain, i) => (
            <DomainCard
              key={domain.name}
              domain={domain}
              index={i}
            />
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link to="/portfolio">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-neon-ultra px-10 py-4 rounded-xl text-primary-foreground font-bold font-display tracking-widest flex items-center gap-3"
            >
              VIEW FULL PORTFOLIO <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
};
