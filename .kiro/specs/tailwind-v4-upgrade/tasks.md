# خطة التنفيذ: ترقية Tailwind CSS من v3 إلى v4

## نظرة عامة

ترقية تدريجية من Tailwind CSS v3 إلى v4 مع الحفاظ على جميع الوظائف الحالية. يتم تنفيذ التغييرات بترتيب يضمن عدم كسر البناء في كل خطوة.

## المهام

- [x] 1. تحديث الحزم والاعتماديات في package.json
  - إزالة `tailwindcss` v3، `postcss`، `autoprefixer`، `tailwindcss-animate` من الاعتماديات
  - إضافة `tailwindcss` v4 و `@tailwindcss/vite` كـ devDependencies
  - إضافة `tw-animate-css` كـ dependency (بديل tailwindcss-animate)
  - الإبقاء على `@tailwindcss/typography`
  - تشغيل `npm install` لتثبيت الحزم الجديدة
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 2. تحديث إعداد Vite وحذف ملفات الإعداد القديمة
  - [x] 2.1 تحديث `vite.config.ts` لإضافة `@tailwindcss/vite` plugin
    - استيراد `tailwindcss` من `@tailwindcss/vite`
    - إضافة `tailwindcss()` كأول إضافة في قائمة plugins
    - _Requirements: 2.1_
  - [x] 2.2 حذف `postcss.config.js`
    - _Requirements: 2.2_
  - [x] 2.3 حذف `tailwind.config.ts`
    - _Requirements: 2.3_

- [x] 3. تحويل ملف `src/index.css` إلى صيغة Tailwind v4
  - [x] 3.1 استبدال توجيهات الاستيراد وإضافة @theme inline
    - استبدال `@tailwind base; @tailwind components; @tailwind utilities;` بـ `@import "tailwindcss";`
    - إضافة `@import "tw-animate-css";`
    - إضافة `@plugin "@tailwindcss/typography";`
    - إضافة `@custom-variant dark (&:is(.dark *));`
    - _Requirements: 3.1, 6.4_
  - [x] 3.2 إنشاء كتلة `@theme inline` مع جميع الألوان المخصصة
    - نقل جميع ألوان tailwind.config.ts إلى `--color-*` variables
    - تضمين: border, input, ring, background, foreground, primary, secondary, destructive, muted, accent, popover, card, sidebar (مع جميع المتغيرات الفرعية)
    - _Requirements: 3.2, 4.1, 4.3, 4.4_
  - [x] 3.3 إضافة الرسوم المتحركة والخطوط ونصف القطر إلى `@theme inline`
    - نقل animations إلى `--animate-*` variables
    - نقل fontFamily إلى `--font-sans`
    - نقل borderRadius إلى `--radius-lg`, `--radius-md`, `--radius-sm`
    - _Requirements: 3.4, 3.5, 3.6_
  - [x] 3.4 الحفاظ على متغيرات `:root` و `@layer base` و `@keyframes` و `@layer components`
    - التأكد من بقاء جميع متغيرات CSS في `:root` بنفس القيم
    - التأكد من بقاء جميع `@keyframes` (accordion-down/up, fade-in, slide-up, glow-pulse, holo-shift, glitch, glitch-1, glitch-2, rotate-shine, brain-pulse, float-orb, search-line, blink, data-stream)
    - التأكد من بقاء جميع أصناف `@layer components` (glass-ultra, btn-neon-ultra, holo-text, holo-gradient, cyber-grid, perspective-grid, card-holo, search-ultra, إلخ)
    - _Requirements: 3.3, 5.1, 5.2, 5.3, 5.4, 5.5_
  - [x] 3.5 تحويل `@layer utilities` إلى صيغة `@utility`
    - تحويل `.text-balance` من `@layer utilities` إلى `@utility text-balance`
    - ملاحظة: `text-balance` مدعوم أصلاً في v4، يمكن حذف التعريف المخصص إذا كان مكرراً
    - _Requirements: 5.6, 7.3_

- [x] 4. نقطة تفتيش - التحقق من البناء
  - تشغيل `npm run build` والتأكد من نجاحه بدون أخطاء
  - مراجعة أي تحذيرات أو أخطاء وإصلاحها
  - التأكد من أن جميع الأنماط تعمل بشكل صحيح
  - Ensure all tests pass, ask the user if questions arise.
  - _Requirements: 8.1_

- [x] 5. تحديث ملفات الإعداد المساعدة
  - [x] 5.1 تحديث `components.json` لـ shadcn/ui
    - إزالة أو تفريغ حقل `tailwind.config`
    - التأكد من أن باقي الإعدادات صحيحة
    - _Requirements: 6.3_
  - [x] 5.2 مراجعة وتحديث مكونات shadcn/ui إذا لزم الأمر
    - التحقق من أن `ring-offset-background` يعمل بشكل صحيح في v4
    - التحقق من أن `theme(spacing.4)` في sidebar.tsx يعمل أو تحديثه
    - مراجعة أي أصناف Tailwind متغيرة الصيغة في المكونات
    - _Requirements: 6.1, 6.2, 7.1, 7.2_

- [ ]\* 5.3 كتابة اختبار خاصية للحفاظ على متغيرات CSS
  - **Property 1: الحفاظ على متغيرات CSS في :root**
  - **Validates: Requirements 3.3**

- [ ]\* 5.4 كتابة اختبار خاصية لتحويل ألوان السمة
  - **Property 2: تحويل جميع ألوان السمة إلى @theme inline**
  - **Validates: Requirements 4.1, 4.3, 4.4**

- [ ]\* 5.5 كتابة اختبار خاصية لتحويل الرسوم المتحركة
  - **Property 3: تحويل جميع الرسوم المتحركة إلى @theme inline**
  - **Validates: Requirements 3.4**

- [ ]\* 5.6 كتابة اختبار خاصية للحفاظ على @keyframes
  - **Property 4: الحفاظ على جميع @keyframes**
  - **Validates: Requirements 5.5**

- [ ]\* 5.7 كتابة اختبار خاصية للحفاظ على الأصناف المخصصة
  - **Property 5: الحفاظ على جميع الأصناف المخصصة في @layer components**
  - **Validates: Requirements 5.1**

- [x] 6. نقطة تفتيش نهائية
  - تشغيل `npm run build` والتأكد من نجاحه
  - تشغيل `npm run test` والتأكد من نجاح جميع الاختبارات
  - Ensure all tests pass, ask the user if questions arise.
  - _Requirements: 8.1, 8.2_

## ملاحظات

- المهام المعلّمة بـ `*` اختيارية ويمكن تخطيها للوصول لنسخة أولية أسرع
- كل مهمة تشير إلى متطلبات محددة لتتبع التغطية
- نقاط التفتيش تضمن التحقق التدريجي من صحة الترقية
- اختبار البناء الناجح هو المؤشر الأساسي على نجاح الترقية
