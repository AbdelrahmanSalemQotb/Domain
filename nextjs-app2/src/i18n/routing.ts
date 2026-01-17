import { defineRouting } from "next-intl/routing";

export const locales = [
  "en",
  "ar",
  "es",
  "fr",
  "de",
  "zh",
  "ja",
  "ko",
  "pt",
  "ru",
  "hi",
  "id",
  "it",
  "nl",
  "pl",
  "sv",
  "th",
  "tr",
  "ur",
  "vi",
] as const;

export type Locale = (typeof locales)[number];

export const routing = defineRouting({
  locales,
  defaultLocale: "en",
  localePrefix: "always", // Always show locale in URL (/en, /ar, etc.)
});
