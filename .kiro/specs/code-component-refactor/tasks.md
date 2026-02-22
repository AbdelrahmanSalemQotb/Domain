# Implementation Plan: Code Component Refactor

## نظرة عامة

إعادة هيكلة الكود تدريجياً من Index.tsx (1400+ سطر) إلى components منفصلة تطابق بنية التصميم. كل خطوة تبني على السابقة، مع التأكد من أن البناء يعمل بعد كل خطوة.

## Tasks

- [x] 1. إنشاء هيكل المجلدات واستخراج Effect و Utility Components
  - [x] 1.1 Create directories `src/components/layout/`, `src/components/sections/`, `src/components/effects/` and extract `DataStreams` and `FloatingParticles` from Index.tsx into `src/components/effects/BackgroundEffects.tsx` as named exports
    - Move the exact code from Index.tsx lines 38-107 (DataStreams and FloatingParticles components)
    - Export both as named exports
    - _Requirements: 5.1_
  - [x] 1.2 Extract `HexGrid` and `NeuralNetwork` from Index.tsx into `src/components/effects/SvgBackgrounds.tsx` as named exports
    - Move the exact code from Index.tsx lines 109-227 (HexGrid and NeuralNetwork components)
    - _Requirements: 5.2_
  - [x] 1.3 Extract `AnimatedCounter` from Index.tsx into `src/components/ui/AnimatedCounter.tsx`
    - Move the exact code from Index.tsx lines 229-264
    - Export as named export with its interface
    - _Requirements: 5.3_
  - [x] 1.4 Extract `TypingEffect` from Index.tsx into `src/components/ui/TypingEffect.tsx`
    - Move the exact code from Index.tsx lines 266-300
    - Export as named export with its interface
    - _Requirements: 5.4_

- [x] 2. استخراج UI Card Components
  - [x] 2.1 Create `src/components/ui/StatCard.tsx` — extract the stat card markup from the StatsSection in Index.tsx into a reusable component
    - Accept props: `{ value, suffix, label, icon, index }` matching the stats array shape
    - Use AnimatedCounter from the new location
    - Include all framer-motion animations from the original
    - _Requirements: 4.1_
  - [x] 2.2 Create `src/components/ui/FeatureCard.tsx` — extract the feature card markup from FeaturesSection in Index.tsx
    - Accept props: `{ icon, title, description, stats, color, index }`
    - Include all framer-motion hover/view animations
    - _Requirements: 4.2_
  - [x] 2.3 Create `src/components/ui/TestimonialCard.tsx` — extract the testimonial card markup from TestimonialsSection in Index.tsx
    - Accept props: `{ name, role, quote, avatar, index }`
    - Include star rating animation and all framer-motion effects
    - _Requirements: 4.3_
  - [x] 2.4 Create `src/components/ui/ExtensionCard.tsx` — extract the extension card markup from ExtensionsSection in Index.tsx
    - Accept props: `{ ext, price, discount, index }`
    - Include hover animation and discount tag
    - _Requirements: 4.4_

- [x] 3. Checkpoint — التأكد من أن البناء يعمل
  - Ensure all tests pass, ask the user if questions arise.
  - Run `tsc --noEmit` to verify no type errors

- [x] 4. استخراج Layout Components (NavBar و Footer و Layout)
  - [x] 4.1 Create `src/components/layout/NavBar.tsx` — extract the full navigation bar from Index.tsx
    - Accept props: `{ cart?: string[] }`
    - Include logo, nav links (from useTranslation), LanguageSwitcher, cart button with count, CTA button, mobile menu toggle
    - Import and use existing MobileMenu component
    - Include all framer-motion animations from original
    - _Requirements: 1.1, 1.2, 1.3, 1.4_
  - [x] 4.2 Create `src/components/layout/Footer.tsx` — extract the full footer from Index.tsx
    - No props needed — uses useTranslation internally
    - Include 4-column layout (brand, products, company, support) and bottom bar
    - Include all existing styles and structure
    - _Requirements: 2.1, 2.2, 2.3, 2.4_
  - [x] 4.3 Create `src/layouts/UserLayout.tsx` — shared layout wrapper that includes NavBar and Footer
    - Accept props: `{ children: React.ReactNode, cart?: string[] }`
    - Render NavBar at top, `{children}` in middle, Footer at bottom
    - Pass cart prop to NavBar
    - _Requirements: 1.1, 2.1_
  - [x] 4.4 Update `src/App.tsx` to wrap Routes with the UserLayout component
    - Import UserLayout from `@/layouts/UserLayout`
    - Wrap the Routes inside UserLayout so NavBar and Footer appear on all pages automatically
    - Cart state will need to be lifted to App.tsx or managed via context (simplest: keep in UserLayout for now, or lift to App)
    - _Requirements: 7.1, 7.2, 8.1, 8.2_

- [x] 5. استخراج Section Components للصفحة الرئيسية
  - [x] 5.1 Create `src/components/sections/HeroSection.tsx` — hero section with domain search
    - No props — self-contained
    - Search filters real domains from `src/data/domains.ts` by name (case-insensitive)
    - Shows domain name, description, category, lowest price, and external link per result
    - Removed: cart/add-to-cart, tab switcher (register/transfer), fake extension pills, fake domainResults
    - _Requirements: 3.1_
  - [x] 5.2 Create `src/components/sections/StatsSection.tsx` — extract the stats section from Index.tsx
    - No props — define stats array internally with useTranslation
    - Use StatCard component for each stat
    - _Requirements: 3.2_
  - [x] 5.3 Create `src/components/sections/FeaturesSection.tsx` — extract the features section from Index.tsx
    - No props — define features array internally with useTranslation
    - Use FeatureCard component and HexGrid background
    - _Requirements: 3.3_
  - [x] 5.4 Create `src/components/sections/ExtensionsSection.tsx` — extract the extensions section from Index.tsx
    - No props — define extensions array internally
    - Use ExtensionCard component
    - _Requirements: 3.4_
  - [x] 5.5 Create `src/components/sections/DomainsForSaleSection.tsx` — extract the domains for sale section from Index.tsx
    - No props — imports domains data and filters highlighted ones
    - Use existing DomainCard component and HexGrid background
    - Include "View Portfolio" Link button
    - _Requirements: 3.5_
  - [x] 5.6 Create `src/components/sections/TestimonialsSection.tsx` — extract the testimonials section from Index.tsx
    - No props — define testimonials array internally with useTranslation
    - Use TestimonialCard component
    - _Requirements: 3.6_
  - [x] 5.7 Create `src/components/sections/CTASection.tsx` — extract the CTA section from Index.tsx
    - No props — uses useTranslation internally
    - Import NeuralNetwork from effects
    - _Requirements: 3.7_
  - [x] 5.8 ~~CartSidebar~~ — removed (no cart functionality)

- [x] 6. إعادة كتابة Index.tsx كـ composition
  - [x] 6.1 Rewrite `src/pages/Index.tsx` to import and compose all extracted components
    - No cart state — removed entirely
    - Import and render: BackgroundEffects (DataStreams, FloatingParticles), HeroSection, StatsSection, FeaturesSection, ExtensionsSection, DomainsForSaleSection, TestimonialsSection, CTASection
    - NavBar and Footer handled by UserLayout in App.tsx
    - _Requirements: 6.1, 6.3_

- [~] 7. Checkpoint — التأكد من أن الصفحة الرئيسية تعمل
  - Ensure all tests pass, ask the user if questions arise.
  - Run `tsc --noEmit` to verify no type errors

- [x] 8. إعادة هيكلة صفحة Portfolio
  - [x] 8.1 Create `src/components/sections/PortfolioHeader.tsx` — extract the header section from Portfolio.tsx
    - No props needed
    - _Requirements: 7.3_
  - [x] 8.2 Create `src/components/sections/FilterBar.tsx` — extract the filter/search bar from Portfolio.tsx
    - Accept props: `{ searchQuery, onSearchChange, categories, selectedCategory, onCategoryChange }`
    - _Requirements: 7.4_
  - [x] 8.3 Create `src/components/sections/PortfolioGrid.tsx` — extract the domain grid from Portfolio.tsx
    - Accept props: `{ domains: Domain[] }`
    - Include "no results" empty state
    - _Requirements: 7.5_
  - [x] 8.4 Rewrite `src/pages/Portfolio.tsx` to use extracted section components
    - Keep filter state (searchQuery, selectedCategory, priceRange) and filtering logic in Portfolio.tsx
    - Import and compose: PortfolioHeader, FilterBar, PortfolioGrid
    - NavBar and Footer are handled by the shared Layout in App.tsx — remove inline navigation code
    - _Requirements: 7.1, 7.2, 7.6_

- [x] 9. إعادة هيكلة صفحة Contact
  - [x] 9.1 Create `src/components/sections/ContactFormSection.tsx` — extract the contact form from Contact.tsx
    - Keep form state and submission logic inside this component
    - Include back button, form header, all input fields, textarea, submit button, and success state
    - _Requirements: 8.3_
  - [x] 9.2 Rewrite `src/pages/Contact.tsx` to use ContactFormSection
    - Import and compose: ContactFormSection
    - NavBar and Footer are handled by the shared Layout in App.tsx
    - _Requirements: 8.1, 8.2, 8.4_

- [x] 10. التحقق النهائي وتنظيف الـ imports
  - [x] 10.1 Verify all import paths are correct across the entire project and remove any unused imports from all modified files
    - Run `tsc --noEmit` to catch any import or type errors
    - Verify no duplicate component definitions remain in page files
    - _Requirements: 9.6_
  - [ ]\* 10.2 Write snapshot tests for key extracted components (NavBar, Footer, StatCard, FeatureCard)
    - Create test files in `src/test/` using vitest and @testing-library/react
    - Snapshot test each component with representative props
    - _Requirements: 4.5, 5.5_
  - [ ]\* 10.3 ~~Write property test for cart state round-trip~~ — removed (no cart)
  - [ ]\* 10.4 Write property test for FilterBar search filtering consistency
    - **Property 3: FilterBar search filtering is consistent**
    - **Validates: Requirements 7.6**

- [~] 11. Final checkpoint — التأكد من أن كل شيء يعمل
  - Ensure all tests pass, ask the user if questions arise.
  - Run `tsc --noEmit` and `vite build` to verify the full build succeeds

## ملاحظات

- المهام المعلّمة بـ `*` اختيارية ويمكن تخطيها للوصول لـ MVP أسرع
- كل مهمة تشير إلى المتطلبات المحددة لتتبع التغطية
- الـ Checkpoints تضمن التحقق التدريجي بعد كل مرحلة
- أهم اختبار هو TypeScript compilation — إذا نجح البناء فإن الـ imports والـ types صحيحة
- الـ DomainCard الموجود لا يتغير أبداً (Requirements 9.4)
