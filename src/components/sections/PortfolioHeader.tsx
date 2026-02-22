import { motion } from "framer-motion";

export const PortfolioHeader = () => {
  return (
    <div className="pt-32 pb-0 container mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-10 md:mb-16"
      >
        <span className="cyber-tag px-4 py-1.5 md:px-6 md:py-2 rounded-full inline-block mb-4 md:mb-6 text-xs md:text-sm">
          PREMIUM COLLECTION
        </span>
        <h1 className="text-3xl md:text-7xl font-bold font-display mb-4 md:mb-6">
          <span className="text-foreground">DOMAIN</span>{" "}
          <span className="holo-text">PORTFOLIO</span>
        </h1>
        <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto font-light px-4">
          Discover exclusive digital assets to elevate your brand.
        </p>
      </motion.div>
    </div>
  );
};
