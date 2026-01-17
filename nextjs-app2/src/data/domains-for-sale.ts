/**
 * Generate 180 domains for sale (3 pages × 60 domains)
 * This function creates domain combinations from prefixes and extensions
 */
export const generateDomainsForSale = (): string[] => {
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
};
