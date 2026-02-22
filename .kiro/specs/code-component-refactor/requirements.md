# Requirements Document

## مقدمة

إعادة هيكلة الكود الحالي لموقع DOMAINPUT (React + Vite + Tailwind + Framer Motion + i18next) ليطابق بنية الـ Components المحددة في ملف التصميم `design/new.pen`. الهدف هو تحويل الكود من حالته الحالية (خصوصاً `Index.tsx` الذي يحتوي على 1400+ سطر بكل شيء inline) إلى بنية منظمة من Components قابلة لإعادة الاستخدام، بدون أي تغيير في الشكل أو الوظائف.

## المصطلحات (Glossary)

- **Refactoring_System**: النظام المسؤول عن إعادة هيكلة الكود إلى components منفصلة
- **NavBar**: شريط التنقل العلوي المشترك بين جميع الصفحات (لوجو، روابط، language switcher، زر CTA)
- **Footer**: ذيل الصفحة المشترك بين جميع الصفحات (4 أعمدة: brand، products، company، support)
- **HeroSection**: قسم البطل في الصفحة الرئيسية (badge، عنوان، بحث، tabs، extension pills، نتائج البحث)
- **StatsSection**: قسم الإحصائيات (4 بطاقات stat)
- **FeaturesSection**: قسم المميزات (عنوان + 4 بطاقات feature)
- **ExtensionsSection**: قسم الامتدادات (عنوان + 8 بطاقات extension)
- **DomainsForSaleSection**: قسم الدومينات المعروضة للبيع (عنوان + grid من DomainCards + زر Portfolio)
- **TestimonialsSection**: قسم الشهادات (عنوان + 3 بطاقات testimonial)
- **CTASection**: قسم الدعوة للعمل (أيقونة + عنوان + وصف + زرين)
- **StatCard**: بطاقة إحصائية (أيقونة + قيمة + تسمية)
- **FeatureCard**: بطاقة ميزة (أيقونة + إحصائية + عنوان + وصف)
- **TestimonialCard**: بطاقة شهادة (نجوم + اقتباس + معلومات المؤلف)
- **ExtensionCard**: بطاقة امتداد (اسم + سعر + tag خصم اختياري)
- **PortfolioHeader**: رأس صفحة Portfolio (tag + عنوان + وصف)
- **FilterBar**: شريط الفلترة (بحث + أزرار فئات)
- **PortfolioGrid**: شبكة عرض الدومينات في Portfolio
- **ContactFormSection**: قسم نموذج التواصل (زر رجوع + عنوان + حقول + textarea + زر إرسال)
- **CartSidebar**: الشريط الجانبي لسلة المشتريات
- **Utility_Components**: المكونات المساعدة (DataStreams، FloatingParticles، HexGrid، NeuralNetwork، AnimatedCounter، TypingEffect)

## المتطلبات

### المتطلب 1: استخراج NavBar كـ Component مشترك

**User Story:** كمطور، أريد أن يكون NavBar component مشترك ومستقل، حتى يُستخدم في جميع الصفحات بدون تكرار الكود.

#### معايير القبول

1. THE Refactoring_System SHALL extract the navigation bar from Index.tsx into a standalone `NavBar.tsx` component in `src/components/layout/`
2. THE NavBar component SHALL contain the logo, navigation links, LanguageSwitcher, cart button, CTA button, mobile menu toggle, and MobileMenu integration
3. WHEN the NavBar component is rendered on Index page, Portfolio page, or Contact page, THE NavBar SHALL produce identical visual output to the current implementation on each respective page
4. THE NavBar component SHALL accept props for cart state and navigation items to maintain current functionality

### المتطلب 2: استخراج Footer كـ Component مشترك

**User Story:** كمطور، أريد أن يكون Footer component مشترك ومستقل، حتى يُستخدم في جميع الصفحات بدون تكرار.

#### معايير القبول

1. THE Refactoring_System SHALL extract the footer from Index.tsx into a standalone `Footer.tsx` component in `src/components/layout/`
2. THE Footer component SHALL contain the 4-column layout (brand, products, company, support) and the bottom bar with copyright and legal links
3. WHEN the Footer component is rendered, THE Footer SHALL produce identical visual output to the current footer in Index.tsx
4. THE Footer component SHALL use i18n translations for all text content

### المتطلب 3: استخراج أقسام الصفحة الرئيسية إلى Components منفصلة

**User Story:** كمطور، أريد أن يكون كل قسم في الصفحة الرئيسية component مستقل بملف خاص، حتى يكون الكود منظم وسهل الصيانة.

#### معايير القبول

1. THE Refactoring_System SHALL extract HeroSection (AI badge, headline, subtitle, tabs, search bar, extension pills, search results) into `src/components/sections/HeroSection.tsx`
2. THE Refactoring_System SHALL extract StatsSection (grid of 4 stat cards) into `src/components/sections/StatsSection.tsx`
3. THE Refactoring_System SHALL extract FeaturesSection (header + grid of 4 feature cards) into `src/components/sections/FeaturesSection.tsx`
4. THE Refactoring_System SHALL extract ExtensionsSection (header + grid of 8 extension cards) into `src/components/sections/ExtensionsSection.tsx`
5. THE Refactoring_System SHALL extract DomainsForSaleSection (header + domain cards grid + portfolio button) into `src/components/sections/DomainsForSaleSection.tsx`
6. THE Refactoring_System SHALL extract TestimonialsSection (header + 3 testimonial cards) into `src/components/sections/TestimonialsSection.tsx`
7. THE Refactoring_System SHALL extract CTASection (icon + title + description + 2 buttons) into `src/components/sections/CTASection.tsx`
8. THE Refactoring_System SHALL extract CartSidebar into `src/components/sections/CartSidebar.tsx`

### المتطلب 4: استخراج بطاقات UI إلى Components قابلة لإعادة الاستخدام

**User Story:** كمطور، أريد أن تكون البطاقات (cards) components مستقلة قابلة لإعادة الاستخدام، حتى تطابق بنية التصميم.

#### معايير القبول

1. THE Refactoring_System SHALL extract StatCard (icon wrap + animated value + label) into `src/components/ui/StatCard.tsx`
2. THE Refactoring_System SHALL extract FeatureCard (icon + stats badge + title + description) into `src/components/ui/FeatureCard.tsx`
3. THE Refactoring_System SHALL extract TestimonialCard (stars + quote + author info) into `src/components/ui/TestimonialCard.tsx`
4. THE Refactoring_System SHALL extract ExtensionCard (extension name + price + optional discount tag) into `src/components/ui/ExtensionCard.tsx`
5. WHEN any card component is rendered with the same data, THE card component SHALL produce identical visual output to the current inline implementation

### المتطلب 5: نقل Utility Components إلى ملفات مناسبة

**User Story:** كمطور، أريد أن تكون المكونات المساعدة (animations, counters, effects) في ملفات منفصلة، حتى لا تكون مدفونة داخل Index.tsx.

#### معايير القبول

1. THE Refactoring_System SHALL move DataStreams and FloatingParticles into `src/components/effects/BackgroundEffects.tsx`
2. THE Refactoring_System SHALL move HexGrid and NeuralNetwork into `src/components/effects/SvgBackgrounds.tsx`
3. THE Refactoring_System SHALL move AnimatedCounter into `src/components/ui/AnimatedCounter.tsx`
4. THE Refactoring_System SHALL move TypingEffect into `src/components/ui/TypingEffect.tsx`
5. WHEN any utility component is rendered, THE utility component SHALL produce identical visual and animation behavior to the current implementation

### المتطلب 6: إعادة هيكلة صفحة Index لتكون تجميع Components فقط

**User Story:** كمطور، أريد أن تكون صفحة Index.tsx مجرد تجميع (composition) للـ components، بدون أي كود inline.

#### معايير القبول

1. THE Refactoring_System SHALL reduce Index.tsx to a composition of imported section components (NavBar, HeroSection, StatsSection, FeaturesSection, ExtensionsSection, DomainsForSaleSection, TestimonialsSection, CTASection, Footer, CartSidebar)
2. THE Refactoring_System SHALL keep cart state management in Index.tsx and pass it as props to child components that need it (NavBar, HeroSection, CartSidebar)
3. WHEN the refactored Index page is rendered, THE Index page SHALL produce identical visual output and functionality to the current 1400+ line implementation

### المتطلب 7: إعادة هيكلة صفحة Portfolio لاستخدام Components المشتركة

**User Story:** كمطور، أريد أن تستخدم صفحة Portfolio الـ NavBar و Footer المشتركين بدلاً من الكود المكرر.

#### معايير القبول

1. THE Refactoring_System SHALL refactor Portfolio.tsx to use the shared NavBar component instead of its inline navigation
2. THE Refactoring_System SHALL refactor Portfolio.tsx to use the shared Footer component
3. THE Refactoring_System SHALL extract the portfolio header into a PortfolioHeader component in `src/components/sections/PortfolioHeader.tsx`
4. THE Refactoring_System SHALL extract the filter bar into a FilterBar component in `src/components/sections/FilterBar.tsx`
5. THE Refactoring_System SHALL extract the portfolio grid into a PortfolioGrid component in `src/components/sections/PortfolioGrid.tsx`
6. WHEN the refactored Portfolio page is rendered, THE Portfolio page SHALL produce identical visual output and functionality to the current implementation

### المتطلب 8: إعادة هيكلة صفحة Contact لاستخدام Components المشتركة

**User Story:** كمطور، أريد أن تستخدم صفحة Contact الـ NavBar و Footer المشتركين وتكون منظمة.

#### معايير القبول

1. THE Refactoring_System SHALL refactor Contact.tsx to use the shared NavBar component
2. THE Refactoring_System SHALL refactor Contact.tsx to use the shared Footer component
3. THE Refactoring_System SHALL extract the contact form into a ContactFormSection component in `src/components/sections/ContactFormSection.tsx`
4. WHEN the refactored Contact page is rendered, THE Contact page SHALL produce identical visual output and functionality to the current implementation

### المتطلب 9: الحفاظ على جميع الوظائف والتكاملات الحالية

**User Story:** كمطور، أريد أن تبقى جميع الوظائف الحالية تعمل بشكل مطابق بعد إعادة الهيكلة.

#### معايير القبول

1. THE Refactoring_System SHALL preserve all framer-motion animations in their exact current behavior across all components
2. THE Refactoring_System SHALL preserve all i18n translation calls (useTranslation) working correctly in all extracted components
3. THE Refactoring_System SHALL preserve all react-router-dom routing and navigation (Link, useNavigate) working correctly
4. THE Refactoring_System SHALL preserve the existing DomainCard component without modification
5. THE Refactoring_System SHALL preserve all CSS classes, Tailwind utilities, and custom styles without changes
6. IF any import path changes due to file relocation, THEN THE Refactoring_System SHALL update all affected import statements to maintain correct module resolution
