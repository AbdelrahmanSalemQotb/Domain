# وثيقة التصميم: ترقية Tailwind CSS من v3 إلى v4

## نظرة عامة

تهدف هذه الترقية إلى نقل المشروع من Tailwind CSS v3.4.17 إلى Tailwind CSS v4 باستخدام نهج CSS-first الجديد. التغيير الجوهري هو الانتقال من ملف إعداد JavaScript/TypeScript (`tailwind.config.ts`) إلى إعداد مبني بالكامل على CSS باستخدام توجيهات `@import` و `@theme`. كما يتم استبدال إعداد PostCSS بإضافة Vite أصلية (`@tailwindcss/vite`).

### أسباب الترقية

- توافق أفضل مع Pencil MCP للمزامنة ثنائية الاتجاه بين التصميم والكود
- أداء بناء أسرع مع إضافة Vite الأصلية
- إعداد أبسط بدون ملفات إعداد منفصلة
- دعم أفضل لمتغيرات CSS الأصلية

## الهندسة المعمارية

### قبل الترقية (v3)

```
package.json → tailwindcss v3, postcss, autoprefixer, tailwindcss-animate
postcss.config.js → tailwindcss plugin + autoprefixer
tailwind.config.ts → colors, animations, keyframes, fonts, plugins
vite.config.ts → (لا يعرف عن Tailwind)
src/index.css → @tailwind base/components/utilities + @layer + :root vars
```

### بعد الترقية (v4)

```
package.json → tailwindcss v4, @tailwindcss/vite, tw-animate-css
vite.config.ts → @tailwindcss/vite plugin
src/index.css → @import "tailwindcss" + @theme inline + @layer + :root vars
(postcss.config.js → محذوف)
(tailwind.config.ts → محذوف)
```

### مخطط التدفق

```mermaid
graph TD
    A[package.json] -->|تحديث الحزم| B[tailwindcss v4]
    A -->|إضافة| C[@tailwindcss/vite]
    A -->|استبدال| D[tw-animate-css]
    A -->|إزالة| E[postcss, autoprefixer]

    F[vite.config.ts] -->|إضافة plugin| C

    G[index.css] -->|تحويل| H["@import 'tailwindcss'"]
    G -->|تحويل| I["@theme inline { ... }"]
    G -->|الحفاظ على| J[":root CSS vars"]
    G -->|الحفاظ على| K["@layer components"]

    L[postcss.config.js] -->|حذف| M[❌]
    N[tailwind.config.ts] -->|حذف| O[❌]
```

## المكونات والواجهات

### 1. تحديث الحزم (package.json)

**الحزم المُزالة:**

- `tailwindcss` v3.4.17 (devDependency)
- `postcss` (devDependency)
- `autoprefixer` (devDependency)
- `tailwindcss-animate` (dependency)
- `@tailwindcss/typography` v0.5.x (devDependency)

**الحزم المُضافة:**

- `tailwindcss` v4 (devDependency)
- `@tailwindcss/vite` (devDependency)
- `tw-animate-css` (dependency) - بديل `tailwindcss-animate` المتوافق مع v4
- `@tailwindcss/typography` v0.5.x → يبقى كما هو (متوافق مع v4 عبر `@plugin`)

### 2. إعداد Vite (vite.config.ts)

```typescript
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ mode }) => ({
  // ... الإعدادات الحالية
  plugins: [
    tailwindcss(),
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
}));
```

### 3. تحويل ملف CSS (index.css)

#### البنية الجديدة:

```css
@import "tailwindcss";
@import "tw-animate-css";

@plugin "@tailwindcss/typography";

@custom-variant dark (&:is(.dark *));

@theme inline {
  /* الألوان */
  --color-background: hsl(var(--background));
  --color-foreground: hsl(var(--foreground));
  --color-primary: hsl(var(--primary));
  /* ... باقي الألوان */

  /* الرسوم المتحركة */
  --animate-accordion-down: accordion-down 0.2s ease-out;
  --animate-fade-in: fade-in 0.8s ease-out forwards;
  /* ... باقي الرسوم */

  /* الخطوط */
  --font-sans: 'Space Grotesk', sans-serif;

  /* نصف القطر */
  --radius-lg: var(--radius);
  --radius-md: calc(var(--radius) - 2px);
  --radius-sm: calc(var(--radius) - 4px);
}

/* متغيرات CSS في :root تبقى كما هي */
@layer base {
  :root {
    --background: 240 15% 3%;
    /* ... */
  }
}

/* @keyframes تبقى كما هي */
@keyframes accordion-down { ... }
@keyframes accordion-up { ... }

/* @layer components تبقى كما هي */
@layer components {
  .glass-ultra { ... }
  .btn-neon-ultra { ... }
  /* ... */
}

/* تحويل @layer utilities إلى @utility */
@utility text-balance {
  text-wrap: balance;
}
```

### 4. التغييرات الرئيسية في الصيغة

| العنصر | v3 | v4 |
| --- | --- | --- |
| استيراد | `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| إعداد الألوان | `tailwind.config.ts → theme.extend.colors` | `@theme inline { --color-* }` |
| إعداد الرسوم | `tailwind.config.ts → theme.extend.animation` | `@theme inline { --animate-* }` |
| إعداد الخطوط | `tailwind.config.ts → theme.extend.fontFamily` | `@theme inline { --font-* }` |
| إعداد نصف القطر | `tailwind.config.ts → theme.extend.borderRadius` | `@theme inline { --radius-* }` |
| الإضافات | `require("tailwindcss-animate")` | `@import "tw-animate-css"` |
| الأدوات المخصصة | `@layer utilities { .class {} }` | `@utility class-name { ... }` |
| الوضع المظلم | `darkMode: ["class"]` | `@custom-variant dark (&:is(.dark *))` |
| PostCSS | `postcss.config.js` | `@tailwindcss/vite` plugin |
| الحاوية | `theme.container` في config | `@utility container { ... }` |

### 5. تحديث components.json (shadcn/ui)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/index.css",
    "baseColor": "slate",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
}
```

### 6. الملفات المحذوفة

- `postcss.config.js`
- `tailwind.config.ts`

## نماذج البيانات

لا توجد نماذج بيانات جديدة. هذه الترقية تؤثر فقط على ملفات الإعداد والأنماط.

### خريطة تحويل الألوان

```
tailwind.config.ts colors → @theme inline CSS variables
─────────────────────────────────────────────────────
border → --color-border: hsl(var(--border))
input → --color-input: hsl(var(--input))
ring → --color-ring: hsl(var(--ring))
background → --color-background: hsl(var(--background))
foreground → --color-foreground: hsl(var(--foreground))
primary.DEFAULT → --color-primary: hsl(var(--primary))
primary.foreground → --color-primary-foreground: hsl(var(--primary-foreground))
secondary.DEFAULT → --color-secondary: hsl(var(--secondary))
secondary.foreground → --color-secondary-foreground: hsl(var(--secondary-foreground))
destructive.DEFAULT → --color-destructive: hsl(var(--destructive))
destructive.foreground → --color-destructive-foreground: hsl(var(--destructive-foreground))
muted.DEFAULT → --color-muted: hsl(var(--muted))
muted.foreground → --color-muted-foreground: hsl(var(--muted-foreground))
accent.DEFAULT → --color-accent: hsl(var(--accent))
accent.foreground → --color-accent-foreground: hsl(var(--accent-foreground))
popover.DEFAULT → --color-popover: hsl(var(--popover))
popover.foreground → --color-popover-foreground: hsl(var(--popover-foreground))
card.DEFAULT → --color-card: hsl(var(--card))
card.foreground → --color-card-foreground: hsl(var(--card-foreground))
sidebar.DEFAULT → --color-sidebar: hsl(var(--sidebar-background))
sidebar.foreground → --color-sidebar-foreground: hsl(var(--sidebar-foreground))
sidebar.primary → --color-sidebar-primary: hsl(var(--sidebar-primary))
sidebar.primary-foreground → --color-sidebar-primary-foreground: hsl(var(--sidebar-primary-foreground))
sidebar.accent → --color-sidebar-accent: hsl(var(--sidebar-accent))
sidebar.accent-foreground → --color-sidebar-accent-foreground: hsl(var(--sidebar-accent-foreground))
sidebar.border → --color-sidebar-border: hsl(var(--sidebar-border))
sidebar.ring → --color-sidebar-ring: hsl(var(--sidebar-ring))
```

### خريطة تحويل الرسوم المتحركة

```
tailwind.config.ts animation + keyframes → @theme inline + @keyframes
──────────────────────────────────────────────────────────────────────
animation.accordion-down → --animate-accordion-down: accordion-down 0.2s ease-out
animation.accordion-up → --animate-accordion-up: accordion-up 0.2s ease-out
animation.fade-in → --animate-fade-in: fade-in 0.8s ease-out forwards
animation.slide-up → --animate-slide-up: slide-up 0.8s ease-out forwards
animation.glow-pulse → --animate-glow-pulse: glow-pulse 3s ease-in-out infinite

@keyframes تبقى كما هي في ملف CSS (خارج @theme)
```

## خصائص الصحة (Correctness Properties)

_الخاصية هي سمة أو سلوك يجب أن يكون صحيحاً عبر جميع عمليات التنفيذ الصالحة للنظام - بمعنى آخر، بيان رسمي حول ما يجب أن يفعله النظام. تعمل الخصائص كجسر بين المواصفات القابلة للقراءة البشرية وضمانات الصحة القابلة للتحقق آلياً._

بما أن هذه عملية ترقية/تحويل إعداد وليست ميزة برمجية جديدة، فإن معظم معايير القبول هي فحوصات محددة (examples) وليست خصائص عامة (properties). الخصائص التالية تغطي الجوانب القابلة للتحقق عبر مجموعات من القيم:

### Property 1: الحفاظ على متغيرات CSS في :root

_For any_ CSS variable defined in the original `:root` block of `index.css`, the migrated file shall contain the same variable with the same HSL value.

**Validates: Requirements 3.3**

### Property 2: تحويل جميع ألوان السمة إلى @theme inline

_For any_ color token defined in the original `tailwind.config.ts` (including primary, secondary, destructive, muted, accent, popover, card, sidebar and their foreground variants), the migrated `@theme inline` block shall contain a corresponding `--color-*` variable mapping to `hsl(var(--original-variable))`.

**Validates: Requirements 4.1, 4.3, 4.4**

### Property 3: تحويل جميع الرسوم المتحركة إلى @theme inline

_For any_ animation defined in the original `tailwind.config.ts` `theme.extend.animation`, the migrated `@theme inline` block shall contain a corresponding `--animate-*` variable with the same animation shorthand value.

**Validates: Requirements 3.4**

### Property 4: الحفاظ على جميع @keyframes

_For any_ `@keyframes` rule defined in the original `index.css` or referenced by `tailwind.config.ts`, the migrated file shall contain the same `@keyframes` rule with equivalent keyframe stops and properties.

**Validates: Requirements 5.5**

### Property 5: الحفاظ على جميع الأصناف المخصصة في @layer components

_For any_ CSS class defined within `@layer components` in the original `index.css`, the migrated file shall contain the same class name within `@layer components` with the same CSS properties.

**Validates: Requirements 5.1**

## معالجة الأخطاء

### أخطاء محتملة أثناء الترقية

1. **خطأ استيراد حزمة محذوفة**: إذا بقي أي ملف يستورد `postcss` أو `autoprefixer` أو `tailwindcss-animate`، سيفشل البناء. الحل: البحث في جميع الملفات عن هذه الاستيرادات وإزالتها.

2. **خطأ صيغة @tailwind**: إذا بقيت توجيهات `@tailwind base/components/utilities` في أي ملف CSS، سيفشل Tailwind v4. الحل: استبدالها بـ `@import "tailwindcss"`.

3. **خطأ ring-offset**: في v4، تغيرت طريقة عمل `ring-offset-background`. إذا استخدمت المكونات هذا الصنف، قد تحتاج لتحديث. الحل: مراجعة مكونات shadcn/ui.

4. **خطأ theme() function**: في v4، دالة `theme()` في CSS لا تزال مدعومة لكن بصيغة مختلفة. الحل: تحديث أي استخدام لـ `theme(spacing.4)` إلى المتغير المناسب.

5. **خطأ @layer utilities**: في v4، لا يمكن استخدام `@layer utilities` لتعريف أدوات مخصصة. الحل: استخدام `@utility` بدلاً منها.

## استراتيجية الاختبار

### نهج الاختبار المزدوج

#### اختبارات الوحدة (Unit Tests)

- التحقق من أن `package.json` يحتوي على الحزم الصحيحة
- التحقق من أن `vite.config.ts` يتضمن إضافة `@tailwindcss/vite`
- التحقق من عدم وجود ملفات `postcss.config.js` و `tailwind.config.ts`
- التحقق من أن `index.css` يحتوي على `@import "tailwindcss"` وليس `@tailwind`
- التحقق من أن `components.json` محدّث

#### اختبارات الخصائص (Property-Based Tests)

- مكتبة الاختبار: `fast-check` (مع `vitest`)
- الحد الأدنى: 100 تكرار لكل اختبار خاصية
- كل اختبار يُعلَّم بتعليق يشير إلى خاصية التصميم

**تنسيق العلامات:**

```
// Feature: tailwind-v4-upgrade, Property 1: CSS variables preservation
// Feature: tailwind-v4-upgrade, Property 2: Color tokens migration
```

#### اختبار البناء (Build Test)

- تنفيذ `npm run build` والتحقق من نجاحه بدون أخطاء
- هذا هو الاختبار الأهم لأنه يتحقق من أن جميع التحويلات صحيحة

### ملاحظة مهمة

بما أن هذه ترقية إعداد وليست ميزة برمجية، فإن اختبار البناء الناجح (`npm run build`) هو المؤشر الأساسي على نجاح الترقية. اختبارات الخصائص تكميلية للتحقق من اكتمال التحويل.
