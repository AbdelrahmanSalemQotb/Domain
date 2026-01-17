import { Testimonial } from "@/types/testimonial";

export const getTestimonials = (t: (key: string) => string): Testimonial[] => [
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
