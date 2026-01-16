import { useState } from "react";
import { Search, Globe, Shield, Zap, ArrowRight, Check, Sparkles, Server, Mail, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"register" | "transfer">("register");

  const navItems = ["Domains", "Hosting", "Email", "Security", "AI Tools"];
  
  const features = [
    {
      icon: Globe,
      title: "Domain Mastery",
      description: "Claim your digital territory with intelligent domain management powered by next-gen tools."
    },
    {
      icon: Shield,
      title: "Fortress Security",
      description: "Advanced protection protocols keep your domains safe from threats and unauthorized access."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Instant DNS propagation and blazing performance for your digital presence."
    }
  ];

  const extensions = [
    { ext: ".com", price: "$7.99" },
    { ext: ".io", price: "$29.99" },
    { ext: ".ai", price: "$49.99" },
    { ext: ".dev", price: "$12.99" },
    { ext: ".app", price: "$14.99" },
    { ext: ".tech", price: "$4.99" }
  ];

  const services = [
    {
      icon: Server,
      title: "Cloud Hosting",
      description: "Enterprise-grade infrastructure with 99.99% uptime guarantee",
      tag: "Popular"
    },
    {
      icon: Mail,
      title: "Professional Email",
      description: "Custom email addresses that match your domain identity",
      tag: "New"
    },
    {
      icon: Sparkles,
      title: "AI Website Builder",
      description: "Create stunning websites in minutes with AI assistance",
      tag: "Beta"
    }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg glow-button flex items-center justify-center">
                <Globe className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Domainput</span>
            </div>

            {/* Nav Links */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item} href="#" className="nav-link text-sm font-medium hover:text-foreground transition-colors">
                  {item}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4">
              <button className="nav-link text-sm font-medium hidden sm:block">Sign In</button>
              <button className="glow-button px-5 py-2.5 rounded-full text-sm font-semibold text-primary-foreground">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 hero-gradient opacity-80" />
        </div>

        {/* Glowing Orb Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-[150px] animate-glow-pulse pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Powered by AI • Next-Gen Domains</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="text-foreground">Your Domain</span>
            <br />
            <span className="gradient-text">Odyssey</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Claim your corner of the internet with intelligent domain management, 
            powered by cutting-edge AI technology.
          </p>

          {/* Tab Switcher */}
          <div className="inline-flex items-center glass-card rounded-full p-1 mb-6 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <button
              onClick={() => setActiveTab("register")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "register" ? "pill-button active" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Register
            </button>
            <button
              onClick={() => setActiveTab("transfer")}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === "transfer" ? "pill-button active" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Transfer
            </button>
          </div>

          {/* Search Bar */}
          <div className="max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="search-input rounded-2xl p-2 flex items-center gap-3">
              <div className="flex-1 flex items-center gap-3 px-4">
                <Search className="w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for your perfect domain..."
                  className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-lg"
                />
              </div>
              <button className="glow-button px-8 py-4 rounded-xl text-primary-foreground font-semibold flex items-center gap-2">
                <span>Search</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Price Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            {extensions.slice(0, 4).map((item) => (
              <div key={item.ext} className="price-tag px-4 py-2 rounded-full flex items-center gap-2">
                <Check className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{item.ext}</span>
                <span className="text-sm text-muted-foreground">from {item.price}</span>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-20">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Why Domainput</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              Domain Game, <span className="gradient-text">Elevated</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience next-generation domain management with tools designed for the future.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="feature-card p-8 rounded-2xl"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl glow-button flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extensions Grid */}
      <section className="relative py-32">
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Premium <span className="gradient-text">Extensions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose from hundreds of domain extensions at unbeatable prices.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {extensions.map((item) => (
              <div
                key={item.ext}
                className="feature-card p-6 rounded-xl text-center cursor-pointer group"
              >
                <span className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {item.ext}
                </span>
                <p className="text-sm text-muted-foreground mt-2">{item.price}/yr</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 hero-gradient" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Complete Suite</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-foreground">
              Beyond <span className="gradient-text">Domains</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build and scale your digital presence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="feature-card p-8 rounded-2xl relative overflow-hidden group"
              >
                {/* Tag */}
                <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium glow-button text-primary-foreground">
                  {service.tag}
                </div>

                <div className="w-14 h-14 rounded-xl glass-card border-primary/20 flex items-center justify-center mb-6 group-hover:border-primary/50 transition-colors">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                <button className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[120px] animate-glow-pulse pointer-events-none" />
        
        <div className="relative z-10 container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Ready to <span className="gradient-text">Launch</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Join thousands of visionaries who trust Domainput for their digital journey.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="glow-button px-8 py-4 rounded-full text-primary-foreground font-semibold text-lg flex items-center gap-2">
              <span>Start for Free</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="pill-button px-8 py-4 rounded-full font-semibold text-foreground">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 border-t border-border/50">
        <div className="absolute inset-0 hero-gradient opacity-50" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg glow-button flex items-center justify-center">
                <Globe className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold text-foreground">Domainput</span>
            </div>

            <div className="flex items-center gap-8">
              {["Privacy", "Terms", "Support", "Status"].map((item) => (
                <a key={item} href="#" className="nav-link text-sm">
                  {item}
                </a>
              ))}
            </div>

            <p className="text-sm text-muted-foreground">
              © 2026 Domainput. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
