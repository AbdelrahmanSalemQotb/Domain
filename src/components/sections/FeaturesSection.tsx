import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Brain, Shield, Network, Cpu } from "lucide-react";
import { FeatureCard } from "@/components/ui/FeatureCard";
import { HexGrid } from "@/components/effects/SvgBackgrounds";

export const FeaturesSection = () => {
  const { t } = useTranslation();

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

  return (
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

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              stats={feature.stats}
              color={feature.color}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
