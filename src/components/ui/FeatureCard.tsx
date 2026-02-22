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
      <div className="flex items-center gap-4 mb-6">
        <motion.div
          className={`w-14 h-14 rounded-2xl bg-linear-to-br ${color} flex items-center justify-center shadow-lg shrink-0`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Icon className="w-7 h-7 text-white" />
        </motion.div>
        <span className="font-display text-2xl font-bold holo-text">
          {stats}
        </span>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3 font-display tracking-wide">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </motion.div>
  );
};
