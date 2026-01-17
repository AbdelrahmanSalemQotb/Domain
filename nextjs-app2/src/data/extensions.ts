import { DomainExtension } from "@/types/domain";

export const extensions: DomainExtension[] = [
  { ext: ".com", price: 9.99, discount: "POPULAR", hot: true },
  { ext: ".io", price: 34.99, discount: null, hot: true },
  { ext: ".ai", price: 79.99, discount: "AI ERA", hot: true },
  { ext: ".dev", price: 14.99, discount: null, hot: false },
  { ext: ".app", price: 16.99, discount: null, hot: false },
  { ext: ".tech", price: 4.99, discount: "BEST", hot: false },
  { ext: ".xyz", price: 2.99, discount: null, hot: false },
  { ext: ".cloud", price: 12.99, discount: null, hot: false },
];
