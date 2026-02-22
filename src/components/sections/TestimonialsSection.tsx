import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

export const TestimonialsSection = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: t("testimonials.testimonial1.name"),
      role: t("testimonials.testimonial1.role"),
      quote: t("testimonials.testimonial1.quote"),
      avatar: "🧠",
    },
    {
      name: t("testimonials.testimonial2.name"),
      role: t("testimonials.testimonial2.role"),
      quote: t("testimonials.testimonial2.quote"),
      avatar: "⚡",
    },
    {
      name: t("testimonials.testimonial3.name"),
      role: t("testimonials.testimonial3.role"),
      quote: t("testimonials.testimonial3.quote"),
      avatar: "🛡️",
    },
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="relative z-10 container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="cyber-tag px-6 py-2 rounded-full inline-block mb-6">
            {t("testimonials.title")}
          </span>
          <h2 className="text-5xl md:text-7xl font-bold font-display">
            {t("testimonials.trustedBy")}{" "}
            <span className="holo-text">{t("testimonials.innovators")}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              quote={testimonial.quote}
              avatar={testimonial.avatar}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
