"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";

interface HeaderProps {
  cart: string[];
  navItems: string[];
}

const Header = ({ cart, navItems }: HeaderProps) => {
  const t = useTranslations();

  return (
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
  );
};

export { Header };
