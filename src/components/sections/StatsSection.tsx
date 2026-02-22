import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Globe, Brain, Radio, Wifi } from "lucide-react";
import { StatCard } from "@/components/ui/StatCard";

export const StatsSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      value: 2.5,
      label: t("stats.domainsIndexed"),
      suffix: "M+",
      icon: Globe,
    },
    { value: 150, label: t("stats.aiPredictions"), suffix: "K", icon: Brain },
    { value: 99.999, label: t("stats.uptimeSLA"), suffix: "%", icon: Radio },
    { value: 500, label: t("stats.edgeLocations"), suffix: "+", icon: Wifi },
  ];

  return (
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
            <StatCard
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              icon={stat.icon}
              index={i}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
