import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stats: string;
  color: string;
  index: number;
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  stats,
  color,
  index,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -15, scale: 1.02 }}
      className="card-holo p-8 rounded-3xl group"
    >
      <div className="flex items-start justify-between mb-8">
        <motion.div
          className={`w-16 h-16 rounded-2xl bg-linear-to-br ${color} flex items-center justify-center shadow-lg`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
        <span className="font-display text-3xl font-bold holo-text">
          {stats}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-4 font-display tracking-wide">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};
