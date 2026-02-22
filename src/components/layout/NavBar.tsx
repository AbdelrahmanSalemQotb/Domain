import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { MobileMenu } from "@/components/MobileMenu";

export const NavBar = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    t("nav.domains"),
    t("nav.hosting"),
    t("nav.email"),
    t("nav.cloud"),
    t("nav.aiEngine"),
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 glass-ultra"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
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
            </Link>

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
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-neon-ultra px-8 py-3 rounded-xl text-sm font-bold text-primary-foreground font-display tracking-widest relative overflow-hidden hidden md:block"
              >
                <span className="relative z-10">{t("nav.initialize")}</span>
              </motion.button>

              <button
                className="lg:hidden p-2 text-foreground hover:bg-white/10 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(true)}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        items={navItems}
      />
    </>
  );
};
