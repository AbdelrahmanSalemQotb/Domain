import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
  index: number;
}

export const StatCard = ({
  value,
  suffix,
  label,
  icon: Icon,
  index,
}: StatCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className="text-center glass-ultra p-6 md:p-8 rounded-2xl overflow-visible"
    >
      <motion.div
        className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center"
        whileHover={{ scale: 1.1, rotate: 10 }}
      >
        <Icon className="w-7 h-7 text-primary" />
      </motion.div>
      <p className="stat-value-ultra text-3xl md:text-4xl font-bold mb-2 whitespace-nowrap overflow-visible">
        <AnimatedCounter
          value={value}
          suffix={suffix}
        />
      </p>
      <p className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-display">
        {label}
      </p>
    </motion.div>
  );
};
