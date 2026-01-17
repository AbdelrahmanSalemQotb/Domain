import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Supported locales
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

export const defaultLocale: Locale = "en";

export default getRequestConfig(async ({ requestLocale }) => {
  // Get the locale from the request
  const locale = await requestLocale;

  // Validate that the incoming `locale` parameter is valid
  if (!locale || !locales.includes(locale as Locale)) {
    return {
      locale: defaultLocale,
      messages: (await import(`../messages/${defaultLocale}.json`)).default,
    };
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
