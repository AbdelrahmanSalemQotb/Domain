import { describe, it, expect } from "vitest";
import * as fc from "fast-check";
import { generateDomainsForSale, isValidDomain, extractTLD } from "./domain";

describe("domain utilities", () => {
  /**
   * Feature: nextjs-migration, Property 6: Domain Generation Produces Valid Domains
   *
   * For any call to generateDomainsForSale, all generated domains should:
   * - Be non-empty strings
   * - Contain exactly one dot
   * - Have a valid TLD extension
   *
   * Validates: Requirements 3.6
   */
  it("Property 6: Domain Generation Produces Valid Domains", () => {
    // Generate domains multiple times to ensure consistency
    fc.assert(
      fc.property(fc.constant(null), () => {
        const domains = generateDomainsForSale();

        // Verify we get the expected number of domains
        expect(domains.length).toBe(180);

        // Verify each domain meets the requirements
        domains.forEach((domain) => {
          // Should be non-empty string
          expect(domain).toBeTruthy();
          expect(typeof domain).toBe("string");
          expect(domain.length).toBeGreaterThan(0);

          // Should contain exactly one dot
          const dotCount = (domain.match(/\./g) || []).length;
          expect(dotCount).toBe(1);

          // Should have a valid TLD extension
          const tld = extractTLD(domain);
          expect(tld).toBeTruthy();
          expect(tld).toMatch(/^\.[a-z]+$/);

          // Should be a valid domain according to our validator
          expect(isValidDomain(domain)).toBe(true);
        });

        // Verify all domains are unique
        const uniqueDomains = new Set(domains);
        expect(uniqueDomains.size).toBe(domains.length);
      }),
      { numRuns: 100 },
    );
  });

  describe("isValidDomain", () => {
    it("should validate domains with exactly one dot", () => {
      fc.assert(
        fc.property(
          fc.array(fc.constantFrom("a", "b", "c", "1", "2", "3"), {
            minLength: 1,
            maxLength: 10,
          }),
          fc.array(fc.constantFrom("a", "b", "c"), {
            minLength: 1,
            maxLength: 5,
          }),
          (nameChars, extChars) => {
            const name = nameChars.join("");
            const ext = extChars.join("");
            const domain = `${name}.${ext}`;
            expect(isValidDomain(domain)).toBe(true);
          },
        ),
        { numRuns: 100 },
      );
    });

    it("should reject domains with no dots", () => {
      fc.assert(
        fc.property(
          fc
            .string({ minLength: 1, maxLength: 20 })
            .filter((s) => !s.includes(".")),
          (domain) => {
            expect(isValidDomain(domain)).toBe(false);
          },
        ),
        { numRuns: 100 },
      );
    });

    it("should reject domains with multiple dots", () => {
      fc.assert(
        fc.property(
          fc
            .array(fc.constantFrom("a", "b", "c", "."), {
              minLength: 3,
              maxLength: 20,
            })
            .map((chars) => chars.join(""))
            .filter((s) => (s.match(/\./g) || []).length > 1),
          (domain) => {
            expect(isValidDomain(domain)).toBe(false);
          },
        ),
        { numRuns: 100 },
      );
    });

    it("should reject empty strings and null values", () => {
      expect(isValidDomain("")).toBe(false);
      expect(isValidDomain(null as any)).toBe(false);
      expect(isValidDomain(undefined as any)).toBe(false);
    });
  });

  describe("extractTLD", () => {
    it("should extract TLD from valid domains", () => {
      fc.assert(
        fc.property(
          fc.array(fc.constantFrom("a", "b", "c", "1", "2", "3"), {
            minLength: 1,
            maxLength: 10,
          }),
          fc.constantFrom("com", "io", "ai", "dev", "net", "org"),
          (nameChars, ext) => {
            const name = nameChars.join("");
            const domain = `${name}.${ext}`;
            const tld = extractTLD(domain);
            expect(tld).toBe(`.${ext}`);
          },
        ),
        { numRuns: 100 },
      );
    });

    it("should return null for invalid domains", () => {
      fc.assert(
        fc.property(
          fc
            .string({ minLength: 0, maxLength: 20 })
            .filter((s) => !isValidDomain(s)),
          (invalidDomain) => {
            expect(extractTLD(invalidDomain)).toBe(null);
          },
        ),
        { numRuns: 100 },
      );
    });
  });
});
