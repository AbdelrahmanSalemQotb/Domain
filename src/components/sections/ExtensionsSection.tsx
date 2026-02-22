import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExtensionCard } from "@/components/ui/ExtensionCard";

const extensions = [
  { ext: ".com", price: 9.99, discount: "POPULAR" as string | null },
  { ext: ".io", price: 34.99, discount: null },
  { ext: ".ai", price: 79.99, discount: "AI ERA" as string | null },
  { ext: ".dev", price: 14.99, discount: null },
  { ext: ".app", price: 16.99, discount: null },
  { ext: ".tech", price: 4.99, discount: "BEST" as string | null },
  { ext: ".xyz", price: 2.99, discount: null },
  { ext: ".cloud", price: 12.99, discount: null },
];

export const ExtensionsSection = () => {
  const { t } = useTranslation();

  return (
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
            <ExtensionCard
              key={item.ext}
              ext={item.ext}
              price={item.price}
              discount={item.discount}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
