# Implementation Plan: Next.js Migration

## Overview

This implementation plan covers the migration of the Domainput landing page from Vite/React to Next.js 15 with App Router. Tasks are organized to build incrementally, starting with project setup, then core infrastructure, followed by components and features.

## Tasks

- [x] 1. Cleanup current project
  - Identify and remove unused UI components from `src/components/ui/`
  - Keep only components that are actively imported
  - _Requirements: 1.1, 1.2, 1.3_

- [ ] 2. Initialize Next.js project
  - [ ] 2.1 Create Next.js 15 project in `nextjs-app2/` directory
    - Use `create-next-app` with TypeScript, Tailwind CSS, ESLint, App Router
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5_
  - [ ] 2.2 Install additional dependencies
    - Install framer-motion, lucide-react, next-intl, clsx, tailwind-merge
    - _Requirements: 2.6_
  - [ ] 2.3 Set up folder structure
    - Create `components/ui/`, `components/layout/`, `components/sections/`, `components/effects/`
    - Create `data/`, `hooks/`, `lib/`, `types/`, `messages/`
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [ ] 3. Set up styling system
  - [ ] 3.1 Configure Tailwind CSS
    - Copy and adapt tailwind.config.ts with custom colors, fonts, and utilities
    - _Requirements: 9.1_
  - [ ] 3.2 Create global CSS
    - Add custom CSS classes (glass-ultra, btn-neon-ultra, holo-text, cyber-tag, etc.)
    - Set up CSS variables for theming
    - _Requirements: 9.2, 9.3, 9.4_

- [ ] 4. Create TypeScript types
  - [ ] 4.1 Create domain types
    - Define DomainResult, DomainExtension interfaces in `types/domain.ts`
    - _Requirements: 10.3_
  - [ ] 4.2 Create feature and stat types
    - Define Feature, Stat interfaces in `types/feature.ts` and `types/stat.ts`
    - _Requirements: 10.3_
  - [ ] 4.3 Create testimonial types
    - Define Testimonial interface in `types/testimonial.ts`
    - _Requirements: 10.3_

- [ ] 5. Create static data files
  - [ ] 5.1 Create extensions data
    - Create `data/extensions.ts` with domain extension data
    - _Requirements: 10.3_
  - [ ] 5.2 Create features data
    - Create `data/features.ts` with feature cards data
    - _Requirements: 10.3_
  - [ ] 5.3 Create stats data
    - Create `data/stats.ts` with statistics data
    - _Requirements: 10.3_
  - [ ] 5.4 Create testimonials data
    - Create `data/testimonials.ts` with testimonial data
    - _Requirements: 10.3_
  - [ ] 5.5 Create domains for sale data
    - Create `data/domains-for-sale.ts` with domain generation function
    - _Requirements: 10.3, 3.6_
  - [ ] 5.6 Create nav items data
    - Create `data/nav-items.ts` with navigation items
    - _Requirements: 10.3_

- [ ] 6. Set up internationalization
  - [ ] 6.1 Configure next-intl
    - Set up i18n configuration in `i18n/` folder
    - Create middleware for locale handling
    - _Requirements: 6.1_
  - [ ] 6.2 Create English translation file
    - Copy and adapt translations to `messages/en.json`
    - _Requirements: 6.4_

- [ ] 7. Create custom hooks
  - [ ] 7.1 Create useCart hook
    - Implement cart state management in `hooks/use-cart.ts`
    - _Requirements: 5.4, 10.4_
  - [ ] 7.2 Write property tests for useCart hook
    - **Property 2: Cart Addition Preserves Domain**
    - **Property 3: Cart Removal Removes Only Target Domain**
    - **Validates: Requirements 5.4**
  - [ ] 7.3 Create useDomainSearch hook
    - Implement search state management in `hooks/use-domain-search.ts`
    - _Requirements: 5.1, 5.2, 10.4_
  - [ ] 7.4 Create usePagination hook
    - Implement pagination logic in `hooks/use-pagination.ts`
    - _Requirements: 3.6, 10.4_
  - [ ] 7.5 Write property tests for usePagination hook
    - **Property 5: Pagination Produces Correct Slices**
    - **Validates: Requirements 3.6**

- [ ] 8. Create utility functions
  - [ ] 8.1 Create cn utility
    - Create `lib/utils.ts` with className merge utility
    - _Requirements: 10.5_
  - [ ] 8.2 Create domain utilities
    - Create `lib/domain.ts` with domain validation and generation helpers
    - _Requirements: 10.5_
  - [ ] 8.3 Write property tests for domain utilities
    - **Property 6: Domain Generation Produces Valid Domains**
    - **Validates: Requirements 3.6**

- [ ] 9. Checkpoint - Verify foundation
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 10. Create UI primitives
  - [ ] 10.1 Create Button component
    - Implement `components/ui/button.tsx` with variants
    - _Requirements: 10.2, 10.6_
  - [ ] 10.2 Create Input component
    - Implement `components/ui/input.tsx`
    - _Requirements: 10.2, 10.6_
  - [ ] 10.3 Create Badge component
    - Implement `components/ui/badge.tsx` with cyber variant
    - _Requirements: 10.2, 10.6_
  - [ ] 10.4 Create Card component
    - Implement `components/ui/card.tsx` with holo and glass variants
    - _Requirements: 10.2, 10.6_

- [ ] 11. Create effect components
  - [ ] 11.1 Create DataStreams effect
    - Implement `components/effects/data-streams.tsx` as Client Component
    - _Requirements: 4.1, 4.7_
  - [ ] 11.2 Create FloatingParticles effect
    - Implement `components/effects/floating-particles.tsx` as Client Component
    - _Requirements: 4.2, 4.7_
  - [ ] 11.3 Create HexGrid effect
    - Implement `components/effects/hex-grid.tsx` as Server Component (static SVG)
    - _Requirements: 4.3_
  - [ ] 11.4 Create NeuralNetwork effect
    - Implement `components/effects/neural-network.tsx` as Client Component
    - _Requirements: 4.4, 4.7_
  - [ ] 11.5 Create AnimatedCounter component
    - Implement `components/effects/animated-counter.tsx` as Client Component
    - _Requirements: 4.5, 4.7_
  - [ ] 11.6 Create TypingEffect component
    - Implement `components/effects/typing-effect.tsx` as Client Component
    - _Requirements: 4.6, 4.7_
  - [ ] 11.7 Create BackgroundEffects wrapper
    - Implement `components/effects/background-effects.tsx` combining DataStreams and FloatingParticles
    - _Requirements: 4.1, 4.2_

- [ ] 12. Create layout components
  - [ ] 12.1 Create Header component
    - Implement `components/layout/header.tsx` as Server Component wrapper
    - Create `components/layout/header-client.tsx` for interactive parts
    - _Requirements: 3.1, 7.3, 7.8_
  - [ ] 12.2 Create LanguageSwitcher component
    - Implement `components/layout/language-switcher.tsx` as Client Component
    - _Requirements: 6.2_
  - [ ] 12.3 Create Footer component
    - Implement `components/layout/footer.tsx` as Server Component
    - _Requirements: 3.9, 7.1_
  - [ ] 12.4 Create Container component
    - Implement `components/layout/container.tsx`
    - _Requirements: 10.2_

- [ ] 13. Checkpoint - Verify components
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 14. Create section components - Part 1
  - [ ] 14.1 Create HeroSection
    - Implement `components/sections/hero-section.tsx` as Server wrapper
    - Create SearchBar, SearchResults, ExtensionPills as Client Components
    - _Requirements: 3.2, 5.1, 5.2, 5.3, 7.3, 7.8_
  - [ ] 14.2 Write property tests for search results
    - **Property 1: Search Results Contain Valid Domain Data**
    - **Validates: Requirements 5.2, 5.3**
  - [ ] 14.3 Create StatsSection
    - Implement `components/sections/stats-section.tsx` as Server wrapper
    - Create StatCard as Client Component for AnimatedCounter
    - _Requirements: 3.3, 7.3, 7.8_
  - [ ] 14.4 Create FeaturesSection
    - Implement `components/sections/features-section.tsx` as Server wrapper
    - Create FeatureCard as Client Component for hover animations
    - _Requirements: 3.4, 7.3, 7.8_

- [ ] 15. Create section components - Part 2
  - [ ] 15.1 Create ExtensionsSection
    - Implement `components/sections/extensions-section.tsx` as Server wrapper
    - Create ExtensionCard as Client Component for hover animations
    - _Requirements: 3.5, 7.3, 7.8_
  - [ ] 15.2 Create DomainsForSaleSection
    - Implement `components/sections/domains-for-sale-section.tsx` as Server wrapper
    - Create DomainsGrid as Client Component with pagination
    - _Requirements: 3.6, 7.3, 7.8_
  - [ ] 15.3 Create TestimonialsSection
    - Implement `components/sections/testimonials-section.tsx` as Server wrapper
    - Create TestimonialCard as Client Component for animations
    - _Requirements: 3.7, 7.3, 7.8_
  - [ ] 15.4 Create CTASection
    - Implement `components/sections/cta-section.tsx` as Server wrapper
    - Create CTAAnimations as Client Component
    - _Requirements: 3.8, 7.3, 7.8_
  - [ ] 15.5 Create CartSidebar
    - Implement `components/sections/cart-sidebar.tsx` as Client Component
    - _Requirements: 5.5_

- [ ] 16. Create root layout and page
  - [ ] 16.1 Create root layout
    - Implement `app/layout.tsx` with providers, fonts, and metadata
    - _Requirements: 7.1, 7.6_
  - [ ] 16.2 Create home page
    - Implement `app/page.tsx` composing all sections
    - Wire up cart state and pass to components
    - _Requirements: 3.1-3.9_

- [ ] 17. Checkpoint - Verify full page
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 18. Responsive design verification
  - [ ] 18.1 Verify mobile responsiveness
    - Test and fix any layout issues on mobile (< 768px)
    - _Requirements: 8.1_
  - [ ] 18.2 Verify tablet responsiveness
    - Test and fix any layout issues on tablet (768px - 1024px)
    - _Requirements: 8.2_
  - [ ] 18.3 Verify desktop responsiveness
    - Test and fix any layout issues on desktop (> 1024px)
    - _Requirements: 8.3_

- [ ] 19. Final integration and polish
  - [ ] 19.1 Copy assets
    - Copy hero-bg.jpg and other assets to `public/` folder
    - _Requirements: 7.7_
  - [ ] 19.2 Verify all animations work
    - Test all framer-motion animations are working correctly
    - _Requirements: 4.1-4.7_
  - [ ] 19.3 Verify i18n works
    - Test language switching functionality
    - _Requirements: 6.1, 6.2, 6.3_
  - [ ] 19.4 Write property tests for translations
    - **Property 4: Translation Keys Resolve to Non-Empty Strings**
    - **Validates: Requirements 6.3**

- [ ] 20. Final checkpoint - Complete verification
  - Ensure all tests pass, ask the user if questions arise.
  - Verify visual parity with original design
  - Verify all functionality works as expected

- [ ] 21. Code organization review and refactoring
  - [ ] 21.1 Review component responsibilities
    - Audit all components to ensure each has a single, clear responsibility
    - Identify any components that handle multiple concerns
    - _Requirements: 11.1, 11.2, 11.10_
  - [ ] 21.2 Refactor oversized components
    - Split any components exceeding 150 lines into smaller, focused components
    - Extract helper functions to utility files
    - Extract business logic to custom hooks
    - _Requirements: 11.9_
  - [ ] 21.3 Review component props
    - Ensure no component has more than 7 props
    - Refactor components with excessive props by grouping related props or splitting responsibilities
    - _Requirements: 11.6_
  - [ ] 21.4 Verify separation of concerns
    - Ensure presentation logic is separated from business logic
    - Ensure static content is in Server Components
    - Ensure interactive elements are isolated in small Client Components
    - _Requirements: 11.3, 11.4_
  - [ ] 21.5 Write property tests for component organization
    - **Property 7: Component Files Follow Size Guidelines**
    - **Property 8: Components Have Limited Props**
    - **Validates: Requirements 11.6, 11.9**

## Notes

- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties
- Server/Client component split follows the granular approach defined in design
- Task 21 ensures all components follow Single Responsibility Principle
