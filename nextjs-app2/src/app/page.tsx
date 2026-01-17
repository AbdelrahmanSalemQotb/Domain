"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import {
  Search,
  Globe,
  Shield,
  ArrowRight,
  Check,
  Sparkles,
  ChevronDown,
  Rocket,
  Lock,
  X,
  ShoppingCart,
  Star,
  Brain,
  Cpu,
  Network,
  Eye,
  Radio,
  Wifi,
  MessageCircle,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

// Data Stream Effect
const DataStreams = () => {
  const streams = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 2 + Math.random() * 3,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {streams.map((stream) => (
        <motion.div
          key={stream.id}
          className="absolute w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-20"
          style={{ left: stream.left, height: "150px" }}
          animate={{ y: ["-150px", "100vh"] }}
          transition={{
            duration: stream.duration,
            delay: stream.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Floating Particles
const FloatingParticles = () => {
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 10 + Math.random() * 20,
    delay: Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: `radial-gradient(circle, hsl(${200 + Math.random() * 30} 100% 60%) 0%, transparent 70%)`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Hexagon Grid Background
const HexGrid = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern
        id="hexagons"
        width="50"
        height="43.4"
        patternUnits="userSpaceOnUse"
        patternTransform="scale(2)"
      >
        <polygon
          points="25,0 50,12.5 50,37.5 25,50 0,37.5 0,12.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          className="text-primary"
        />
      </pattern>
    </defs>
    <rect
      width="100%"
      height="100%"
      fill="url(#hexagons)"
    />
  </svg>
);

// AI Neural Network Visual
const NeuralNetwork = () => {
  const nodes = [
    { x: 20, y: 30 },
    { x: 35, y: 20 },
    { x: 50, y: 35 },
    { x: 65, y: 25 },
    { x: 80, y: 30 },
    { x: 30, y: 50 },
    { x: 45, y: 60 },
    { x: 60, y: 55 },
    { x: 75, y: 65 },
    { x: 40, y: 80 },
    { x: 55, y: 75 },
    { x: 70, y: 85 },
  ];

  return (
    <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
      {nodes.map((node, i) =>
        nodes.slice(i + 1).map((target, j) => (
          <motion.line
            key={`${i}-${j}`}
            x1={`${node.x}%`}
            y1={`${node.y}%`}
            x2={`${target.x}%`}
            y2={`${target.y}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0.1, 0.5, 0.1] }}
            transition={{
              duration: 3,
              delay: i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )),
      )}
      {nodes.map((node, i) => (
        <motion.circle
          key={i}
          cx={`${node.x}%`}
          cy={`${node.y}%`}
          r="4"
          fill="hsl(210 100% 50%)"
          initial={{ scale: 0 }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      <defs>
        <linearGradient
          id="lineGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            stopColor="hsl(210 100% 50%)"
            stopOpacity="0.3"
          />
          <stop
            offset="50%"
            stopColor="hsl(220 100% 60%)"
            stopOpacity="0.6"
          />
          <stop
            offset="100%"
            stopColor="hsl(210 100% 50%)"
            stopOpacity="0.3"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

// Animated Counter
const AnimatedCounter = ({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2500;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// Typing Effect
const TypingEffect = ({ texts }: { texts: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts]);

  return <span className="holo-text cursor-blink">{displayText}</span>;
};

// Generate 180 domains for sale (3 pages × 60 domains)
const generateDomainsForSale = () => {
  const extensions = [
    ".com",
    ".io",
    ".ai",
    ".dev",
    ".app",
    ".tech",
    ".net",
    ".co",
    ".xyz",
    ".org",
  ];
  const prefixes = [
    "tech",
    "digital",
    "cloud",
    "ai",
    "data",
    "web",
    "app",
    "code",
    "dev",
    "net",
    "smart",
    "fast",
    "secure",
    "pro",
    "max",
    "ultra",
    "prime",
    "elite",
    "vip",
    "gold",
    "blue",
    "green",
    "red",
    "black",
    "white",
    "new",
    "best",
    "top",
    "super",
    "mega",
    "start",
    "build",
    "create",
    "make",
    "get",
    "buy",
    "sell",
    "trade",
    "market",
    "shop",
    "learn",
    "teach",
    "study",
    "work",
    "play",
    "game",
    "fun",
    "cool",
    "hot",
    "fire",
    "star",
    "moon",
    "sun",
    "earth",
    "space",
    "time",
    "life",
    "love",
    "hope",
    "dream",
    "power",
    "force",
    "energy",
    "light",
    "dark",
    "night",
    "day",
    "time",
    "now",
    "next",
    "first",
    "last",
    "big",
    "small",
    "new",
    "old",
    "good",
    "best",
    "top",
    "win",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];

  const domains: string[] = [];
  let count = 0;

  for (const prefix of prefixes) {
    for (const ext of extensions) {
      if (count >= 180) break;
      domains.push(`${prefix}${ext}`);
      count++;
    }
    if (count >= 180) break;
  }

  return domains;
};

export default function Home() {
  const t = useTranslations();
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"register" | "transfer">(
    "register",
  );
  const [showResults, setShowResults] = useState(false);
  const [cart, setCart] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const domainsForSale = generateDomainsForSale();
  const domainsPerPage = 60;
  const totalPages = Math.ceil(domainsForSale.length / domainsPerPage);
  const startIndex = (currentPage - 1) * domainsPerPage;
  const endIndex = startIndex + domainsPerPage;
  const currentDomains = domainsForSale.slice(startIndex, endIndex);

  const navItems = [
    t("nav.domains"),
    t("nav.hosting"),
    t("nav.email"),
    t("nav.cloud"),
    t("nav.aiEngine"),
  ];

  const domainResults = [
    {
      domain: `${searchQuery || "domainput"}.com`,
      available: true,
      price: 9.99,
      popular: true,
    },
    {
      domain: `${searchQuery || "domainput"}.io`,
      available: true,
      price: 34.99,
      popular: true,
    },
    {
      domain: `${searchQuery || "domainput"}.ai`,
      available: true,
      price: 79.99,
      popular: false,
    },
    {
      domain: `${searchQuery || "domainput"}.dev`,
      available: false,
      price: 14.99,
      popular: false,
    },
    {
      domain: `${searchQuery || "domainput"}.app`,
      available: true,
      price: 16.99,
      popular: false,
    },
    {
      domain: `${searchQuery || "domainput"}.tech`,
      available: true,
      price: 4.99,
      popular: false,
    },
    {
      domain: `${searchQuery || "domainput"}.co`,
      available: false,
      price: 29.99,
      popular: true,
    },
    {
      domain: `${searchQuery || "domainput"}.net`,
      available: true,
      price: 11.99,
      popular: false,
    },
  ];

  const features = [
    {
      icon: Brain,
      title: t("features.neuralDNS.title"),
      description: t("features.neuralDNS.description"),
      stats: "0.001ms",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: t("features.quantumShield.title"),
      description: t("features.quantumShield.description"),
      stats: "256-QBit",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Network,
      title: t("features.meshNetwork.title"),
      description: t("features.meshNetwork.description"),
      stats: "500+ Nodes",
      color: "from-blue-400 to-blue-500",
    },
    {
      icon: Cpu,
      title: t("features.edgeCompute.title"),
      description: t("features.edgeCompute.description"),
      stats: "< 1ms",
      color: "from-blue-500 to-blue-600",
    },
  ];

  const extensions = [
    { ext: ".com", price: 9.99, discount: "POPULAR", hot: true },
    { ext: ".io", price: 34.99, discount: null, hot: true },
    { ext: ".ai", price: 79.99, discount: "AI ERA", hot: true },
    { ext: ".dev", price: 14.99, discount: null, hot: false },
    { ext: ".app", price: 16.99, discount: null, hot: false },
    { ext: ".tech", price: 4.99, discount: "BEST", hot: false },
    { ext: ".xyz", price: 2.99, discount: null, hot: false },
    { ext: ".cloud", price: 12.99, discount: null, hot: false },
  ];

  const stats = [
    {
      value: 2500000,
      label: t("stats.domainsIndexed"),
      suffix: "+",
      icon: Globe,
    },
    { value: 150000, label: t("stats.aiPredictions"), suffix: "", icon: Brain },
    { value: 99.999, label: t("stats.uptimeSLA"), suffix: "%", icon: Radio },
    { value: 500, label: t("stats.edgeLocations"), suffix: "+", icon: Wifi },
  ];

  const typingTexts = [
    t("hero.typingTexts.text1"),
    t("hero.typingTexts.text2"),
    t("hero.typingTexts.text3"),
    t("hero.typingTexts.text4"),
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        setShowResults(true);
      }, 2000);
    }
  };

  const addToCart = (domain: string) => {
    if (!cart.includes(domain)) {
      setCart([...cart, domain]);
    }
  };

  const removeFromCart = (domain: string) => {
    setCart(cart.filter((d) => d !== domain));
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 matrix-bg" />
      <DataStreams />
      <FloatingParticles />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass-ultra"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center relative overflow-hidden shadow-lg"
                whileHover={{ boxShadow: "0 0 30px hsl(210 100% 50% / 0.6)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <span className="text-3xl font-black text-white relative z-10 tracking-tight">
                  D
                </span>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30"></div>
              </motion.div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-display text-foreground tracking-wide">
                  DOMAINPUT
                </span>
                <span className="text-[10px] text-muted-foreground tracking-wider">
                  AI DOMAIN ENGINE
                </span>
              </div>
            </motion.div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item, i) => (
                <motion.a
                  key={item}
                  href="#"
                  className="nav-ultra font-display"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              {cart.length > 0 && (
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="relative p-3 glass-ultra rounded-xl"
                  whileHover={{ scale: 1.1 }}
                >
                  <ShoppingCart className="w-5 h-5 text-primary" />
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-accent text-xs font-bold flex items-center justify-center font-display"
                  >
                    {cart.length}
                  </motion.span>
                </motion.button>
              )}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon-ultra px-8 py-3 rounded-xl text-sm font-bold text-primary-foreground font-display tracking-widest relative overflow-hidden"
              >
                <span className="relative z-10">{t("nav.initialize")}</span>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 cyber-grid overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(/hero-bg.jpg)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />

        {/* Hex Grid - Simplified */}
        <HexGrid />

        {/* Glowing Orbs - Simplified */}
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/20 blur-[150px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] rounded-full bg-primary/15 blur-[120px] pointer-events-none" />

        {/* Content */}
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
            <span className="cyber-tag px-3 py-1 rounded-full">
              {t("hero.version")}
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-4">
              <span className="text-foreground block">{t("hero.claim")}</span>
              <span className="holo-text block">{t("hero.theFuture")}</span>
            </h1>
          </motion.div>

          {/* Dynamic Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-14 font-light"
          >
            {t("hero.subtitlePart1")} <TypingEffect texts={typingTexts} />{" "}
            {t("hero.subtitlePart2")}
          </motion.p>

          {/* Tab Switcher */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="inline-flex items-center glass-ultra rounded-full p-1.5 mb-8"
          >
            {["register", "transfer"].map((tab) => (
              <motion.button
                key={tab}
                onClick={() => setActiveTab(tab as "register" | "transfer")}
                className={`px-10 py-4 rounded-full text-sm font-bold uppercase tracking-[0.2em] transition-all font-display ${
                  activeTab === tab
                    ? "btn-neon-ultra text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                whileHover={{ scale: activeTab === tab ? 1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(`hero.${tab}`)}
              </motion.button>
            ))}
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="search-ultra rounded-3xl p-3 flex items-center gap-4">
              <div className="flex-1 flex items-center gap-4 px-6">
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
                  className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-xl font-light tracking-wide"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSearch}
                disabled={isSearching}
                className="btn-neon-ultra px-12 py-5 rounded-2xl text-primary-foreground font-bold flex items-center gap-3 disabled:opacity-70 relative overflow-hidden"
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
                  <>
                    <span className="font-display tracking-widest relative z-10">
                      {t("hero.analyze")}
                    </span>
                    <ArrowRight className="w-5 h-5 relative z-10" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Extension Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-10"
          >
            {extensions.map((item, i) => (
              <motion.div
                key={item.ext}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className="ext-badge-ultra px-5 py-3 rounded-full flex items-center gap-3 cursor-pointer"
              >
                <Check className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-foreground font-display">
                  {item.ext}
                </span>
                <span className="text-sm text-muted-foreground">
                  ${item.price}
                </span>
                {item.discount && (
                  <span className="cyber-tag px-2 py-0.5 rounded text-[9px]">
                    {item.discount}
                  </span>
                )}
              </motion.div>
            ))}
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
                  <div className="grid gap-3">
                    {domainResults.map((result, i) => (
                      <motion.div
                        key={result.domain}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className={`domain-result-ultra ${result.available ? "available" : "taken"} rounded-2xl p-5 flex items-center justify-between`}
                      >
                        <div className="flex items-center gap-5">
                          <motion.div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              result.available
                                ? "bg-blue-500/20"
                                : "bg-blue-500/10"
                            }`}
                            animate={
                              result.available
                                ? {
                                    boxShadow: [
                                      "0 0 0px hsl(210 100% 50% / 0)",
                                      "0 0 20px hsl(210 100% 50% / 0.5)",
                                      "0 0 0px hsl(210 100% 50% / 0)",
                                    ],
                                  }
                                : {}
                            }
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            {result.available ? (
                              <Check className="w-6 h-6 text-blue-400" />
                            ) : (
                              <Lock className="w-6 h-6 text-blue-300" />
                            )}
                          </motion.div>
                          <div>
                            <p className="font-bold text-foreground text-lg font-display tracking-wide">
                              {result.domain}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {result.available
                                ? `✓ ${t("search.available")}`
                                : `✗ ${t("search.alreadyRegistered")}`}
                              {result.popular && ` • ${t("search.trending")}`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-5">
                          <div className="text-right">
                            <span className="font-display text-2xl font-bold holo-text">
                              ${result.price}
                            </span>
                            <p className="text-xs text-muted-foreground">
                              {t("search.year")}
                            </p>
                          </div>
                          {result.available && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => addToCart(result.domain)}
                              disabled={cart.includes(result.domain)}
                              className={`px-6 py-3 rounded-xl font-bold text-sm font-display tracking-wider ${
                                cart.includes(result.domain)
                                  ? "bg-muted text-muted-foreground"
                                  : "btn-neon-ultra text-primary-foreground"
                              }`}
                            >
                              {cart.includes(result.domain)
                                ? t("search.added")
                                : t("search.acquire")}
                            </motion.button>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
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
              className="absolute bottom-10 left-1/2 -translate-x-1/2"
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

      {/* Stats Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center glass-ultra p-8 rounded-2xl"
              >
                <motion.div
                  className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 10 }}
                >
                  <stat.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <p className="stat-value-ultra text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                  />
                </p>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-display">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        <HexGrid />

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.span
              className="cyber-tag px-6 py-2 rounded-full inline-block mb-6"
              animate={{
                boxShadow: [
                  "0 0 0px hsl(210 100% 50% / 0)",
                  "0 0 20px hsl(210 100% 50% / 0.5)",
                  "0 0 0px hsl(210 100% 50% / 0)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {t("features.sectionTitle")}
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
              <span className="text-foreground">{t("features.mainTitle")}</span>
              <br />
              <span className="holo-text">{t("features.subtitle")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
              {t("features.description")}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="card-holo p-8 rounded-3xl group"
              >
                <div className="flex items-start justify-between mb-8">
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <span className="font-display text-3xl font-bold holo-text">
                    {feature.stats}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 font-display tracking-wide">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extensions Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="cyber-tag px-6 py-2 rounded-full inline-block mb-6">
              {t("extensions.title")}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold font-display mb-6">
              <span className="text-foreground">{t("extensions.premium")}</span>{" "}
              <span className="holo-text">{t("extensions.tlds")}</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {extensions.map((item, i) => (
              <motion.div
                key={item.ext}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.1, y: -10 }}
                className="card-holo p-6 rounded-2xl text-center cursor-pointer relative overflow-hidden group"
              >
                {item.discount && (
                  <span className="absolute top-2 right-2 cyber-tag px-2 py-0.5 rounded text-[8px]">
                    {item.discount}
                  </span>
                )}
                <span className="text-3xl font-bold holo-text font-display block mb-2">
                  {item.ext}
                </span>
                <p className="text-sm text-muted-foreground">
                  ${item.price}/yr
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Domains for Sale Section */}
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

          {/* Domains Grid - 6 per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-12">
            {currentDomains.map((domain, i) => (
              <motion.div
                key={domain}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="card-holo p-4 rounded-2xl relative group"
              >
                {/* Domain Name */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold font-display holo-text text-center mb-4 break-all">
                    {domain}
                  </h3>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-center gap-2 flex-wrap">
                  {/* Afternic */}
                  <motion.a
                    href={`https://www.afternic.com/domain/${domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group/btn"
                    title="Buy on Afternic"
                  >
                    <div className="w-10 h-10 rounded-lg glass-ultra flex items-center justify-center border border-primary/20 hover:border-primary/50 transition-colors">
                      <span className="text-xs font-bold text-primary">AN</span>
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-background/95 rounded text-xs whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none">
                      Afternic
                    </div>
                  </motion.a>

                  {/* Spaceship */}
                  <motion.a
                    href={`https://spaceship.com/buy/${domain}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group/btn"
                    title="View on Spaceship"
                  >
                    <div className="w-10 h-10 rounded-lg glass-ultra flex items-center justify-center border border-primary/20 hover:border-primary/50 transition-colors">
                      <span className="text-xs font-bold text-primary">SS</span>
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-background/95 rounded text-xs whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none">
                      Spaceship
                    </div>
                  </motion.a>

                  {/* Buy Direct */}
                  <motion.a
                    href={`mailto:sales@domainput.com?subject=Buy Domain: ${domain}&body=I would like to purchase the domain: ${domain}`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group/btn"
                    title="Buy Direct"
                  >
                    <div className="w-10 h-10 rounded-lg glass-ultra flex items-center justify-center border border-primary/20 hover:border-primary/50 transition-colors">
                      <ShoppingBag className="w-4 h-4 text-primary" />
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-background/95 rounded text-xs whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none">
                      Buy Direct
                    </div>
                  </motion.a>

                  {/* Make Offer / Contact */}
                  <motion.button
                    onClick={() => router.push(`/contact?domain=${domain}`)}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group/btn"
                    title="Make Offer / Contact"
                  >
                    <div className="w-10 h-10 rounded-lg glass-ultra flex items-center justify-center border border-primary/20 hover:border-primary/50 transition-colors">
                      <MessageCircle className="w-4 h-4 text-primary" />
                    </div>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-background/95 rounded text-xs whitespace-nowrap opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none">
                      Make Offer
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-12">
              <motion.button
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
                whileHover={{ scale: currentPage > 1 ? 1.05 : 1 }}
                whileTap={{ scale: currentPage > 1 ? 0.95 : 1 }}
                className={`p-3 rounded-xl glass-ultra flex items-center gap-2 ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:border-primary/50"
                } transition-colors`}
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="font-display text-sm">Previous</span>
              </motion.button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <motion.button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-10 h-10 rounded-xl font-display text-sm transition-all ${
                        currentPage === page
                          ? "btn-neon-ultra text-primary-foreground"
                          : "glass-ultra hover:border-primary/50"
                      }`}
                    >
                      {page}
                    </motion.button>
                  ),
                )}
              </div>

              <motion.button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={currentPage === totalPages}
                whileHover={{ scale: currentPage < totalPages ? 1.05 : 1 }}
                whileTap={{ scale: currentPage < totalPages ? 0.95 : 1 }}
                className={`p-3 rounded-xl glass-ultra flex items-center gap-2 ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:border-primary/50"
                } transition-colors`}
              >
                <span className="font-display text-sm">Next</span>
                <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>
          )}

          <div className="text-center mt-8 text-sm text-muted-foreground">
            Showing {startIndex + 1}-{Math.min(endIndex, domainsForSale.length)}{" "}
            of {domainsForSale.length} domains
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

        <div className="relative z-10 container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="cyber-tag px-6 py-2 rounded-full inline-block mb-6">
              {t("testimonials.title")}
            </span>
            <h2 className="text-5xl md:text-7xl font-bold font-display">
              {t("testimonials.trustedBy")}{" "}
              <span className="holo-text">{t("testimonials.innovators")}</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: t("testimonials.testimonial1.name"),
                role: t("testimonials.testimonial1.role"),
                quote: t("testimonials.testimonial1.quote"),
                avatar: "🧠",
              },
              {
                name: t("testimonials.testimonial2.name"),
                role: t("testimonials.testimonial2.role"),
                quote: t("testimonials.testimonial2.quote"),
                avatar: "⚡",
              },
              {
                name: t("testimonials.testimonial3.name"),
                role: t("testimonials.testimonial3.role"),
                quote: t("testimonials.testimonial3.quote"),
                avatar: "🛡️",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -10 }}
                className="card-holo p-8 rounded-3xl"
              >
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + j * 0.1 }}
                    >
                      <Star className="w-5 h-5 fill-primary text-primary" />
                    </motion.div>
                  ))}
                </div>
                <p className="text-muted-foreground mb-8 text-lg leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-foreground font-display">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
        <NeuralNetwork />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-primary/20 blur-[200px] orb-float pointer-events-none" />

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="w-24 h-24 mx-auto mb-10 rounded-3xl btn-neon-ultra flex items-center justify-center"
              animate={{
                boxShadow: [
                  "0 0 40px hsl(210 100% 50% / 0.5)",
                  "0 0 80px hsl(210 100% 50% / 0.8)",
                  "0 0 40px hsl(210 100% 50% / 0.5)",
                ],
                scale: [1, 1.05, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Rocket className="w-12 h-12 text-primary-foreground" />
            </motion.div>

            <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display mb-8">
              <span className="text-foreground">{t("cta.readyTo")}</span>
              <br />
              <span className="holo-text">{t("cta.transcend")}</span>
              <span className="text-foreground">{t("cta.question")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-14 font-light">
              {t("cta.description")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon-ultra px-14 py-6 rounded-2xl text-primary-foreground font-bold text-xl font-display tracking-widest flex items-center gap-4 relative overflow-hidden"
              >
                <span className="relative z-10">{t("nav.initialize")}</span>
                <Sparkles className="w-6 h-6 relative z-10" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="glass-ultra px-14 py-6 rounded-2xl font-bold text-foreground font-display tracking-widest hover:border-primary/50 transition-colors"
              >
                {t("cta.contactTeam")}
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 border-t border-border/30">
        <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center relative overflow-hidden shadow-lg">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                  <span className="text-2xl font-black text-white relative z-10">
                    D
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30"></div>
                </div>
                <div>
                  <span className="text-lg font-bold font-display text-foreground">
                    DOMAINPUT
                  </span>
                  <p className="text-[9px] text-muted-foreground tracking-wider">
                    {t("footer.tagline")}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {t("footer.description")}
              </p>
            </div>

            {[
              {
                title: t("footer.products"),
                links: [
                  t("footer.domains"),
                  t("footer.aiEngine"),
                  t("footer.hosting"),
                  t("footer.ssl"),
                ],
              },
              {
                title: t("footer.company"),
                links: [
                  t("footer.about"),
                  t("footer.careers"),
                  t("footer.press"),
                  t("footer.partners"),
                ],
              },
              {
                title: t("footer.support"),
                links: [
                  t("footer.docs"),
                  t("footer.api"),
                  t("footer.status"),
                  t("footer.contact"),
                ],
              },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-display font-bold mb-6 text-foreground tracking-wider">
                  {section.title}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm tracking-wide"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground font-display tracking-wide">
              {t("footer.copyright")}
            </p>
            <div className="flex items-center gap-8">
              {[
                t("footer.privacy"),
                t("footer.terms"),
                t("footer.cookies"),
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {cart.length > 0 && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            className="fixed top-24 right-4 w-96 glass-ultra rounded-3xl p-6 z-40"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-lg tracking-wider holo-text">
                {t("cart.yourDomains")}
              </h3>
              <span className="cyber-tag px-3 py-1 rounded-full">
                {cart.length} {t("cart.items")}
              </span>
            </div>
            <div className="space-y-3 mb-6 max-h-[300px] overflow-auto">
              {cart.map((domain) => (
                <motion.div
                  key={domain}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="flex items-center justify-between p-4 bg-muted/30 rounded-xl"
                >
                  <span className="text-sm font-medium font-display">
                    {domain}
                  </span>
                  <motion.button
                    onClick={() => removeFromCart(domain)}
                    className="text-muted-foreground hover:text-accent transition-colors"
                    whileHover={{ scale: 1.2, rotate: 90 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full btn-neon-ultra py-4 rounded-xl font-bold text-primary-foreground font-display tracking-widest"
            >
              {t("cart.checkout")}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
