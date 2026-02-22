import { motion } from "framer-motion";
import { Star } from "lucide-react";

export interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  avatar: string;
  index: number;
}

export const TestimonialCard = ({
  name,
  role,
  quote,
  avatar,
  index,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -10 }}
      className="card-holo p-8 rounded-3xl"
    >
      <div className="flex items-center gap-2 mb-6">
        {[...Array(5)].map((_, j) => (
          <motion.div
            key={j}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 + j * 0.1 }}
          >
            <Star className="w-5 h-5 fill-primary text-primary" />
          </motion.div>
        ))}
      </div>
      <p className="text-muted-foreground mb-8 text-lg leading-relaxed italic">
        "{quote}"
      </p>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
          {avatar}
        </div>
        <div>
          <p className="font-bold text-foreground font-display">{name}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};
