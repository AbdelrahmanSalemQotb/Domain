/**
 * Get navigation items with translations
 * @param t - Translation function
 * @returns Array of navigation item labels
 */
export const getNavItems = (t: (key: string) => string): string[] => [
  t("nav.domains"),
  t("nav.hosting"),
  t("nav.email"),
  t("nav.cloud"),
  t("nav.aiEngine"),
];
