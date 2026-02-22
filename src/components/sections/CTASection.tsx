import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Sparkles, Rocket } from "lucide-react";
import { NeuralNetwork } from "@/components/effects/SvgBackgrounds";
import { Link } from "react-router-dom";

export const CTASection = () => {
  const { t } = useTranslation();

  return (
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
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="glass-ultra px-14 py-6 rounded-2xl font-bold text-foreground font-display tracking-widest hover:border-primary/50 transition-colors"
              >
                {t("cta.contactTeam")}
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
