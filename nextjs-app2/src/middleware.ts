import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale } from "./i18n/request";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Automatically detect the user's locale based on their browser settings
  localeDetection: true,

  // Prefix the default locale in the URL (e.g., /en/about)
  // Set to 'as-needed' to only prefix non-default locales
  localePrefix: "as-needed",
});

export const config = {
  // Match only internationalized pathnames
  matcher: [
    "/",
    "/(ar|es|fr|de|zh|ja|ko|pt|ru|hi|id|it|nl|pl|sv|th|tr|ur|vi)/:path*",
  ],
};
