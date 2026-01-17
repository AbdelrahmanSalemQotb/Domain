import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import * as fc from "fast-check";
import { useCart } from "./use-cart";

describe("useCart", () => {
  /**
   * Feature: nextjs-migration, Property 2: Cart Addition Preserves Domain
   *
   * For any domain string added to the cart, the cart array should contain
   * that exact domain string, and the cart length should increase by 1
   * (if domain was not already in cart).
   *
   * Validates: Requirements 5.4
   */
  it("Property 2: Cart Addition Preserves Domain", () => {
    fc.assert(
      fc.property(fc.string({ minLength: 1 }), (domain) => {
        const { result } = renderHook(() => useCart());

        const initialLength = result.current.cart.length;

        act(() => {
          result.current.addToCart(domain);
        });

        // Cart should contain the domain
        expect(result.current.cart).toContain(domain);

        // Cart length should increase by 1
        expect(result.current.cart.length).toBe(initialLength + 1);

        // Adding the same domain again should not increase length
        act(() => {
          result.current.addToCart(domain);
        });

        expect(result.current.cart.length).toBe(initialLength + 1);
      }),
      { numRuns: 100 },
    );
  });

  /**
   * Feature: nextjs-migration, Property 3: Cart Removal Removes Only Target Domain
   *
   * For any cart state and any domain to remove, after removal the cart
   * should not contain the removed domain, and all other domains should
   * remain unchanged.
   *
   * Validates: Requirements 5.4
   */
  it("Property 3: Cart Removal Removes Only Target Domain", () => {
    fc.assert(
      fc.property(
        fc.array(fc.string({ minLength: 1 }), { minLength: 1, maxLength: 10 }),
        fc.nat(),
        (domains, indexSeed) => {
          const { result } = renderHook(() => useCart());

          // Add all domains to cart
          act(() => {
            domains.forEach((domain) => {
              result.current.addToCart(domain);
            });
          });

          // The cart will contain unique domains only (due to addToCart logic)
          const cartBeforeRemoval = [...result.current.cart];

          // Pick a domain to remove from the actual cart
          if (cartBeforeRemoval.length === 0) return;

          const indexToRemove = indexSeed % cartBeforeRemoval.length;
          const domainToRemove = cartBeforeRemoval[indexToRemove];
          const otherDomains = cartBeforeRemoval.filter(
            (d) => d !== domainToRemove,
          );

          act(() => {
            result.current.removeFromCart(domainToRemove);
          });

          // Cart should not contain the removed domain
          expect(result.current.cart).not.toContain(domainToRemove);

          // All other domains should still be in the cart
          otherDomains.forEach((domain) => {
            expect(result.current.cart).toContain(domain);
          });

          // Cart length should be reduced by 1
          expect(result.current.cart.length).toBe(cartBeforeRemoval.length - 1);
        },
      ),
      { numRuns: 100 },
    );
  });
});
