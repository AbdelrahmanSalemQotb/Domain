import { describe, it, expect } from "vitest";
import { renderHook, act } from "@testing-library/react";
import * as fc from "fast-check";
import { usePagination } from "./use-pagination";

describe("usePagination", () => {
  /**
   * Feature: nextjs-migration, Property 5: Pagination Produces Correct Slices
   *
   * For any array of items and any valid page number, the pagination hook
   * should return a slice of items where:
   * - The slice length is at most itemsPerPage
   * - The slice contains the correct items for that page
   * - startIndex and endIndex are correctly calculated
   *
   * Validates: Requirements 3.6
   */
  it("Property 5: Pagination Produces Correct Slices", () => {
    fc.assert(
      fc.property(
        fc.array(fc.integer(), { minLength: 0, maxLength: 100 }),
        fc.integer({ min: 1, max: 20 }),
        (items, itemsPerPage) => {
          const { result } = renderHook(() =>
            usePagination(items, itemsPerPage),
          );

          const totalPages = Math.ceil(items.length / itemsPerPage);

          // Test the initial page (page 1)
          const { currentItems, startIndex, endIndex, currentPage } =
            result.current;

          // Verify currentPage starts at 1
          expect(currentPage).toBe(1);

          // Verify slice length is at most itemsPerPage
          expect(currentItems.length).toBeLessThanOrEqual(itemsPerPage);

          // Verify startIndex is calculated correctly for page 1
          expect(startIndex).toBe(0);

          // Verify endIndex is calculated correctly for page 1
          expect(endIndex).toBe(itemsPerPage);

          // Verify the slice contains the correct items for page 1
          const expectedSlice = items.slice(0, itemsPerPage);
          expect(currentItems).toEqual(expectedSlice);

          // Test a random valid page if there are multiple pages
          if (totalPages > 1) {
            const randomPage = 1 + (Math.abs(items.length) % totalPages);

            act(() => {
              result.current.setCurrentPage(randomPage);
            });

            const expectedStartIndex = (randomPage - 1) * itemsPerPage;
            const expectedEndIndex = expectedStartIndex + itemsPerPage;
            const expectedItems = items.slice(
              expectedStartIndex,
              expectedEndIndex,
            );

            expect(result.current.currentPage).toBe(randomPage);
            expect(result.current.startIndex).toBe(expectedStartIndex);
            expect(result.current.endIndex).toBe(expectedEndIndex);
            expect(result.current.currentItems).toEqual(expectedItems);
            expect(result.current.currentItems.length).toBeLessThanOrEqual(
              itemsPerPage,
            );
          }
        },
      ),
      { numRuns: 100 },
    );
  });
});
