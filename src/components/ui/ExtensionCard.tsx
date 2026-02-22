import { motion } from "framer-motion";

export interface ExtensionCardProps {
  ext: string;
  price: number;
  discount: string | null;
  index: number;
}

export const ExtensionCard = ({
  ext,
  price,
  discount,
  index,
}: ExtensionCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ scale: 1.1, y: -10 }}
      className="card-holo p-6 rounded-2xl text-center cursor-pointer relative overflow-hidden group"
    >
      {discount && (
        <span className="absolute top-2 right-2 cyber-tag px-2 py-0.5 rounded text-[8px]">
          {discount}
        </span>
      )}
      <span className="text-3xl font-bold holo-text font-display block mb-2">
        {ext}
      </span>
      <p className="text-sm text-muted-foreground">${price}/yr</p>
    </motion.div>
  );
};
