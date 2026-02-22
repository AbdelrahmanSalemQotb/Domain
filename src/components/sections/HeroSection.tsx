import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Search,
  ChevronDown,
  Brain,
  Cpu,
  Eye,
  X,
  ExternalLink,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { HexGrid } from "@/components/effects/SvgBackgrounds";
import { TypingEffect } from "@/components/ui/TypingEffect";
import { domains, Domain } from "@/data/domains";

export const HeroSection = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<Domain[]>([]);

  const typingTexts = [
    t("hero.typingTexts.text1"),
    t("hero.typingTexts.text2"),
    t("hero.typingTexts.text3"),
    t("hero.typingTexts.text4"),
  ];

  const handleSearch = () => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return;
    setIsSearching(true);
    setTimeout(() => {
      const filtered = domains.filter((d) => d.name.toLowerCase().includes(q));
      setResults(filtered);
      setIsSearching(false);
      setShowResults(true);
    }, 800);
  };

  const lowestPrice = (domain: Domain) =>
    Math.min(...domain.listings.map((l) => l.price));

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-32 cyber-grid overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <HexGrid />
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* AI Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="inline-flex items-center gap-4 glass-ultra px-6 py-3 rounded-full mb-10"
        >
          <motion.div
            className="ai-pulse"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Brain className="w-5 h-5 text-primary" />
          </motion.div>
          <span className="text-sm text-muted-foreground font-medium tracking-wide">
            {t("hero.aiStatus")}
          </span>
          <motion.div
            className="w-2 h-2 rounded-full bg-blue-400"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
          <span className="cyber-tag px-3 py-1 rounded-full text-xs md:text-sm">
            {t("hero.version")}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-display tracking-tight mb-4 leading-tight">
            <span className="text-foreground block">{t("hero.claim")}</span>
            <span className="holo-text block">{t("hero.theFuture")}</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="max-w-3xl mx-auto mb-10 md:mb-14 px-4"
        >
          <p className="text-base md:text-2xl text-muted-foreground font-light">
            <span className="block">
              {t("hero.subtitle").split("{{text}}")[0]}
              <TypingEffect texts={typingTexts} />
              {t("hero.subtitle").split("{{text}}")[1]}
            </span>
            <span className="block">{t("hero.subtitleLine2")}</span>
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-4xl mx-auto"
        >
          <div className="search-ultra rounded-2xl md:rounded-3xl p-2 md:p-3 flex flex-col md:flex-row items-center gap-3 md:gap-4">
            <div className="w-full md:flex-1 flex items-center gap-3 md:gap-4 px-4 md:px-6 py-2 md:py-0">
              <motion.div
                animate={{ rotate: isSearching ? 360 : 0 }}
                transition={{
                  duration: 1,
                  repeat: isSearching ? Infinity : 0,
                  ease: "linear",
                }}
              >
                <Search className="w-6 h-6 text-primary" />
              </motion.div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                placeholder={t("hero.searchPlaceholder")}
                className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg md:text-xl font-light tracking-wide py-2 md:py-0"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSearch}
              disabled={isSearching}
              className="w-full md:w-auto btn-neon-ultra px-6 py-4 md:px-12 md:py-5 rounded-xl md:rounded-2xl text-primary-foreground font-bold flex items-center justify-center gap-3 disabled:opacity-70"
            >
              {isSearching ? (
                <motion.div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Cpu className="w-5 h-5" />
                  </motion.div>
                  <span className="font-display tracking-widest">
                    {t("hero.scanning")}
                  </span>
                </motion.div>
              ) : (
                <span className="font-display tracking-widest">
                  {t("hero.analyze")}
                </span>
              )}
            </motion.button>
          </div>
        </motion.div>

        {/* Search Results */}
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="mt-10 max-w-4xl mx-auto"
            >
              <div className="glass-ultra rounded-3xl p-8">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Eye className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="font-display text-xl tracking-wide">
                      {t("search.aiAnalysis")}: "
                      <span className="holo-text">{searchQuery}</span>"
                    </h3>
                  </div>
                  <motion.button
                    onClick={() => setShowResults(false)}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                    whileHover={{ scale: 1.1, rotate: 90 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                {results.length === 0 ? (
                  <p className="text-muted-foreground text-center py-8 font-display tracking-wide">
                    No domains found for "{searchQuery}"
                  </p>
                ) : (
                  <div className="grid gap-3">
                    {results.map((domain, i) => (
                      <motion.div
                        key={domain.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="domain-result-ultra available rounded-2xl p-5 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-5">
                          <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center text-xl">
                            {domain.image ? (
                              <img
                                src={domain.image}
                                alt={domain.name}
                                className="w-full h-full object-cover rounded-xl"
                              />
                            ) : (
                              "🌐"
                            )}
                          </div>
                          <div className="text-left">
                            <p className="font-bold text-foreground text-lg font-display tracking-wide">
                              {domain.name}
                            </p>
                            {domain.description && (
                              <p className="text-sm text-muted-foreground">
                                {domain.description}
                              </p>
                            )}
                            {domain.category && (
                              <span className="cyber-tag px-2 py-0.5 rounded text-[9px] mt-1 inline-block">
                                {domain.category}
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <span className="font-display text-2xl font-bold holo-text">
                              ${lowestPrice(domain).toLocaleString()}
                            </span>
                            <p className="text-xs text-muted-foreground">
                              {domain.listings.length} platform
                              {domain.listings.length > 1 ? "s" : ""}
                            </p>
                          </div>
                          {domain.listings[0]?.url &&
                            domain.listings[0].url !== "#" && (
                              <motion.a
                                href={domain.listings[0].url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="btn-neon-ultra px-5 py-3 rounded-xl font-bold text-sm font-display tracking-wider text-primary-foreground flex items-center gap-2"
                              >
                                <ExternalLink className="w-4 h-4" />
                                View
                              </motion.a>
                            )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Indicator */}
        {!showResults && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-12 md:mt-16"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-muted-foreground font-display tracking-widest">
                {t("hero.explore")}
              </span>
              <ChevronDown className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
