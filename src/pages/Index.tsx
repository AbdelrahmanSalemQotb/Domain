import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, Globe, Shield, Zap, ArrowRight, Check, Sparkles, Server, 
  Mail, ChevronDown, Rocket, Lock, BarChart3, X, ShoppingCart,
  Star, Users, Clock, TrendingUp
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

// Particle component for background effect
const Particles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="particles">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
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

// Animated counter
const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
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

  return <span>{count.toLocaleString()}{suffix}</span>;
};

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"register" | "transfer">("register");
  const [showResults, setShowResults] = useState(false);
  const [cart, setCart] = useState<string[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const navItems = ["Domains", "Hosting", "Email", "Cloud", "AI Tools"];
  
  // Dummy domain results
  const domainResults = [
    { domain: `${searchQuery || "domainput"}.com`, available: true, price: 9.99, popular: true },
    { domain: `${searchQuery || "domainput"}.io`, available: true, price: 34.99, popular: true },
    { domain: `${searchQuery || "domainput"}.ai`, available: true, price: 79.99, popular: false },
    { domain: `${searchQuery || "domainput"}.dev`, available: false, price: 14.99, popular: false },
    { domain: `${searchQuery || "domainput"}.app`, available: true, price: 16.99, popular: false },
    { domain: `${searchQuery || "domainput"}.tech`, available: true, price: 4.99, popular: false },
    { domain: `${searchQuery || "domainput"}.co`, available: false, price: 29.99, popular: true },
    { domain: `${searchQuery || "domainput"}.net`, available: true, price: 11.99, popular: false },
  ];

  const features = [
    {
      icon: Rocket,
      title: "Warp Speed DNS",
      description: "Instant propagation across 200+ global edge locations. Your domain goes live in milliseconds, not hours.",
      stats: "< 50ms"
    },
    {
      icon: Shield,
      title: "Quantum Security",
      description: "Military-grade encryption with AI-powered threat detection. DNSSEC, DDoS protection, and zero-trust architecture.",
      stats: "99.99%"
    },
    {
      icon: Zap,
      title: "Neural Automation",
      description: "Self-healing infrastructure with predictive maintenance. AI manages your domains while you focus on building.",
      stats: "24/7 AI"
    },
    {
      icon: BarChart3,
      title: "Deep Analytics",
      description: "Real-time insights into traffic patterns, threat vectors, and performance metrics across all your domains.",
      stats: "∞ Data"
    }
  ];

  const extensions = [
    { ext: ".com", price: 9.99, discount: "20% OFF", hot: true },
    { ext: ".io", price: 34.99, discount: null, hot: true },
    { ext: ".ai", price: 79.99, discount: "NEW", hot: false },
    { ext: ".dev", price: 14.99, discount: null, hot: false },
    { ext: ".app", price: 16.99, discount: null, hot: false },
    { ext: ".tech", price: 4.99, discount: "BEST VALUE", hot: false },
    { ext: ".xyz", price: 2.99, discount: null, hot: false },
    { ext: ".cloud", price: 12.99, discount: null, hot: false },
  ];

  const stats = [
    { value: 2500000, label: "Domains Managed", suffix: "+" },
    { value: 150000, label: "Happy Customers", suffix: "+" },
    { value: 99.99, label: "Uptime SLA", suffix: "%" },
    { value: 50, label: "Global Locations", suffix: "+" },
  ];

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsSearching(true);
      setTimeout(() => {
        setIsSearching(false);
        setShowResults(true);
      }, 1500);
    }
  };

  const addToCart = (domain: string) => {
    if (!cart.includes(domain)) {
      setCart([...cart, domain]);
    }
  };

  const removeFromCart = (domain: string) => {
    setCart(cart.filter(d => d !== domain));
  };

  return (
    <div className="min-h-screen overflow-hidden scan-line">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass-strong"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-12 h-12 rounded-xl btn-neon flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold font-display gradient-text-primary">DOMAINPUT</span>
            </motion.div>

            {/* Nav Links */}
            <div className="hidden lg:flex items-center gap-10">
              {navItems.map((item, i) => (
                <motion.a 
                  key={item} 
                  href="#" 
                  className="nav-futuristic text-sm font-medium"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              {cart.length > 0 && (
                <motion.button 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="relative p-3 glass rounded-xl"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-accent text-xs font-bold flex items-center justify-center">
                    {cart.length}
                  </span>
                </motion.button>
              )}
              <button className="nav-futuristic text-sm font-medium hidden sm:block">Sign In</button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon px-6 py-3 rounded-xl text-sm font-bold text-primary-foreground font-display tracking-wide"
              >
                LAUNCH
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 grid-pattern">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background" />
        
        {/* Particles */}
        <Particles />

        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/20 blur-[150px] animate-pulse-neon pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/15 blur-[120px] animate-float pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[180px] animate-float-delayed pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 glass px-5 py-2.5 rounded-full mb-8"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-secondary" />
            </motion.div>
            <span className="text-sm text-muted-foreground font-medium">AI-Powered • Next-Gen Infrastructure</span>
            <span className="cyber-tag px-2 py-0.5 rounded">BETA</span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 font-display tracking-tight"
          >
            <span className="text-foreground">YOUR DOMAIN</span>
            <br />
            <span className="gradient-text-primary">ODYSSEY</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          >
            Claim your corner of the digital universe with quantum-speed domain management, 
            powered by cutting-edge AI technology.
          </motion.p>

          {/* Tab Switcher */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex items-center glass rounded-full p-1.5 mb-6"
          >
            {["register", "transfer"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as "register" | "transfer")}
                className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab 
                    ? "btn-neon text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="search-futuristic rounded-2xl p-2 flex items-center gap-3">
              <div className="flex-1 flex items-center gap-4 px-6">
                <Search className="w-6 h-6 text-primary" />
                <input
                  ref={searchRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                  placeholder="Search for your perfect domain..."
                  className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg font-medium"
                />
              </div>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleSearch}
                disabled={isSearching}
                className="btn-neon px-10 py-5 rounded-xl text-primary-foreground font-bold flex items-center gap-3 disabled:opacity-70"
              >
                {isSearching ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <>
                    <span className="font-display tracking-wide">SEARCH</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Extension Pills */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-3 mt-8"
          >
            {extensions.slice(0, 6).map((item, i) => (
              <motion.div 
                key={item.ext}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="ext-badge px-4 py-2.5 rounded-full flex items-center gap-2 cursor-pointer"
              >
                <Check className="w-4 h-4 text-secondary" />
                <span className="text-sm font-bold text-foreground">{item.ext}</span>
                <span className="text-sm text-muted-foreground">${item.price}</span>
                {item.discount && (
                  <span className="cyber-tag px-1.5 py-0.5 rounded text-[10px]">{item.discount}</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Search Results */}
          <AnimatePresence>
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 20, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: 20, height: 0 }}
                className="mt-8 max-w-4xl mx-auto"
              >
                <div className="glass-strong rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display text-lg">
                      Results for "<span className="gradient-text-primary">{searchQuery}</span>"
                    </h3>
                    <button onClick={() => setShowResults(false)} className="p-2 hover:bg-muted rounded-lg transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="grid gap-3">
                    {domainResults.map((result, i) => (
                      <motion.div
                        key={result.domain}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`domain-result ${result.available ? 'available' : 'taken'} rounded-xl p-4 flex items-center justify-between`}
                      >
                        <div className="flex items-center gap-4">
                          {result.available ? (
                            <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                              <Check className="w-5 h-5 text-green-400" />
                            </div>
                          ) : (
                            <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                              <X className="w-5 h-5 text-red-400" />
                            </div>
                          )}
                          <div>
                            <p className="font-bold text-foreground">{result.domain}</p>
                            <p className="text-sm text-muted-foreground">
                              {result.available ? "Available" : "Taken"}
                              {result.popular && " • Popular"}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="font-display text-xl font-bold">${result.price}</span>
                          {result.available && (
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => addToCart(result.domain)}
                              disabled={cart.includes(result.domain)}
                              className={`px-6 py-2.5 rounded-xl font-bold text-sm ${
                                cart.includes(result.domain)
                                  ? "bg-muted text-muted-foreground"
                                  : "btn-neon text-primary-foreground"
                              }`}
                            >
                              {cart.includes(result.domain) ? "Added" : "Add to Cart"}
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
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ChevronDown className="w-8 h-8 text-primary" />
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <p className="stat-value text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <Particles />
        
        <div className="relative z-10 container mx-auto px-6">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="cyber-tag px-4 py-2 rounded-full">CAPABILITIES</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-6 font-display">
              DOMAIN GAME, <span className="gradient-text-primary">ELEVATED</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience next-generation domain management with tools designed for the future.
            </p>
          </motion.div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="card-futuristic p-8 rounded-2xl group"
              >
                <div className="flex items-start justify-between mb-6">
                  <motion.div 
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="w-14 h-14 rounded-xl btn-neon flex items-center justify-center"
                  >
                    <feature.icon className="w-6 h-6 text-primary-foreground" />
                  </motion.div>
                  <span className="font-display text-2xl font-bold text-secondary">{feature.stats}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-display">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extensions Grid */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="cyber-tag px-4 py-2 rounded-full">EXTENSIONS</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-6 font-display">
              PREMIUM <span className="gradient-text-accent">TLDs</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from hundreds of domain extensions at unbeatable prices.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 max-w-6xl mx-auto">
            {extensions.map((item, i) => (
              <motion.div
                key={item.ext}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08, y: -5 }}
                className="card-futuristic p-6 rounded-xl text-center cursor-pointer relative overflow-hidden group"
              >
                {item.discount && (
                  <span className="absolute top-2 right-2 cyber-tag px-1.5 py-0.5 rounded text-[9px]">
                    {item.discount}
                  </span>
                )}
                <span className="text-2xl font-bold gradient-text-primary font-display">
                  {item.ext}
                </span>
                <p className="text-sm text-muted-foreground mt-2">${item.price}/yr</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        
        <div className="relative z-10 container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="cyber-tag px-4 py-2 rounded-full">TESTIMONIALS</span>
            <h2 className="text-4xl md:text-6xl font-bold mt-6 mb-6 font-display">
              TRUSTED BY <span className="gradient-text-primary">PIONEERS</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Alex Chen", role: "Founder, TechStart", quote: "Domainput's AI-powered domain suggestions saved us hours of brainstorming. Found our perfect domain in seconds." },
              { name: "Sarah Williams", role: "CTO, CloudNine", quote: "The DNS propagation speed is unreal. We switched from our old provider and saw immediate improvements." },
              { name: "Marcus Johnson", role: "CEO, DigitalForge", quote: "Best domain management platform we've used. The security features alone are worth the switch." },
            ].map((testimonial, i) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card-futuristic p-8 rounded-2xl"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/15 blur-[150px] animate-pulse-neon pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-display">
              READY TO <span className="gradient-text-primary">LAUNCH</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
              Join the next generation of digital pioneers. Your perfect domain awaits.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon px-10 py-5 rounded-xl text-primary-foreground font-bold text-lg font-display flex items-center gap-3"
              >
                <span>START FOR FREE</span>
                <Rocket className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass px-10 py-5 rounded-xl font-bold text-foreground hover:bg-muted transition-colors"
              >
                Contact Sales
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 border-t border-border/30">
        <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg btn-neon flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold font-display gradient-text-primary">DOMAINPUT</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Next-generation domain management powered by AI and quantum-speed infrastructure.
              </p>
            </div>
            
            {[
              { title: "Products", links: ["Domains", "Hosting", "Email", "SSL Certificates"] },
              { title: "Company", links: ["About", "Careers", "Press", "Partners"] },
              { title: "Support", links: ["Help Center", "API Docs", "Status", "Contact"] },
            ].map((section) => (
              <div key={section.title}>
                <h4 className="font-display font-bold mb-4 text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-border/30">
            <p className="text-sm text-muted-foreground">
              © 2026 Domainput. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Privacy", "Terms", "Cookies"].map((item) => (
                <a key={item} href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
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
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed top-20 right-4 w-80 glass-strong rounded-2xl p-6 z-40"
          >
            <h3 className="font-display font-bold mb-4">Your Cart ({cart.length})</h3>
            <div className="space-y-3 mb-4">
              {cart.map((domain) => (
                <div key={domain} className="flex items-center justify-between p-3 bg-muted/50 rounded-xl">
                  <span className="text-sm font-medium">{domain}</span>
                  <button onClick={() => removeFromCart(domain)} className="text-muted-foreground hover:text-foreground">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
            <button className="w-full btn-neon py-3 rounded-xl font-bold text-primary-foreground">
              Checkout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
