/**
 * Domain utility functions for validation and generation
 */

/**
 * Validates if a string is a valid domain name
 * @param domain - The domain string to validate
 * @returns true if the domain is valid, false otherwise
 */
export function isValidDomain(domain: string): boolean {
  if (!domain || typeof domain !== "string") {
    return false;
  }

  // Check if domain contains exactly one dot
  const dotCount = (domain.match(/\./g) || []).length;
  if (dotCount !== 1) {
    return false;
  }

  // Split into name and extension
  const parts = domain.split(".");
  if (parts.length !== 2) {
    return false;
  }

  const [name, ext] = parts;

  // Validate name part (non-empty)
  if (!name || name.length === 0) {
    return false;
  }

  // Validate extension part (non-empty and starts with letter)
  if (!ext || ext.length === 0) {
    return false;
  }

  return true;
}

/**
 * Extracts the TLD (top-level domain) from a domain string
 * @param domain - The domain string
 * @returns The TLD including the dot (e.g., ".com") or null if invalid
 */
export function extractTLD(domain: string): string | null {
  if (!isValidDomain(domain)) {
    return null;
  }

  const lastDotIndex = domain.lastIndexOf(".");
  return domain.substring(lastDotIndex);
}

/**
 * Generates a list of domains for sale
 * Creates 180 domains by combining prefixes with extensions
 * @returns Array of domain strings
 */
export function generateDomainsForSale(): string[] {
  const extensions = [
    ".com",
    ".io",
    ".ai",
    ".dev",
    ".app",
    ".tech",
    ".net",
    ".co",
    ".xyz",
    ".org",
  ];

  const prefixes = [
    "tech",
    "digital",
    "cloud",
    "ai",
    "data",
    "web",
    "app",
    "code",
    "dev",
    "net",
    "smart",
    "fast",
    "secure",
    "pro",
    "max",
    "ultra",
    "prime",
    "elite",
    "vip",
    "gold",
    "blue",
    "green",
    "red",
    "black",
    "white",
    "new",
    "best",
    "top",
    "super",
    "mega",
    "start",
    "build",
    "create",
    "make",
    "get",
    "buy",
    "sell",
    "trade",
    "market",
    "shop",
    "learn",
    "teach",
    "study",
    "work",
    "play",
    "game",
    "fun",
    "cool",
    "hot",
    "fire",
    "star",
    "moon",
    "sun",
    "earth",
    "space",
    "time",
    "life",
    "love",
    "hope",
    "dream",
    "power",
    "force",
    "energy",
    "light",
    "dark",
    "night",
    "day",
    "now",
    "next",
    "first",
    "last",
    "big",
    "small",
    "old",
    "good",
    "win",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];

  const domains: string[] = [];
  let count = 0;

  for (const prefix of prefixes) {
    for (const ext of extensions) {
      if (count >= 180) break;
      domains.push(`${prefix}${ext}`);
      count++;
    }
    if (count >= 180) break;
  }

  return domains;
}
