# وثيقة المتطلبات: ترقية Tailwind CSS من v3 إلى v4

## المقدمة

ترقية مشروع React + TypeScript + Vite من Tailwind CSS v3.4.17 إلى Tailwind CSS v4 لتحسين التوافق مع Pencil MCP للمزامنة ثنائية الاتجاه بين التصميم والكود. تشمل الترقية تحويل ملفات الإعداد، وتحديث صيغة CSS، والحفاظ على جميع الوظائف الحالية بما في ذلك مكونات shadcn/ui والأنماط المخصصة والسمات.

## المصطلحات

- **Tailwind_V4**: الإصدار الرابع من إطار عمل Tailwind CSS الذي يستخدم نهج CSS-first بدلاً من ملف إعداد JavaScript/TypeScript
- **CSS_Config**: نظام الإعداد الجديد في Tailwind v4 الذي يستخدم توجيهات `@theme` و `@import` داخل ملف CSS بدلاً من `tailwind.config.ts`
- **PostCSS_Pipeline**: سلسلة معالجة CSS التي تستخدم PostCSS مع إضافات Tailwind
- **Vite_Plugin**: إضافة `@tailwindcss/vite` الجديدة التي تحل محل إعداد PostCSS التقليدي في Tailwind v4
- **Theme_Variables**: متغيرات CSS المخصصة بصيغة HSL المستخدمة لنظام السمات (الألوان، نصف القطر، إلخ)
- **Custom_Components**: الأصناف المخصصة المعرّفة في `@layer components` مثل `.glass-ultra` و `.btn-neon-ultra` و `.holo-text`
- **shadcn_UI**: مكتبة مكونات واجهة المستخدم المبنية على Radix UI التي تعتمد على متغيرات CSS ونظام ألوان Tailwind
- **Pencil_MCP**: أداة مزامنة التصميم والكود التي تتطلب توافقاً مع Tailwind v4

## المتطلبات

### المتطلب 1: تحديث الحزم والاعتماديات

**قصة المستخدم:** بصفتي مطوراً، أريد تحديث جميع حزم Tailwind CSS إلى الإصدار الرابع، حتى أتمكن من استخدام الميزات الجديدة والتوافق مع Pencil MCP.

#### معايير القبول

1. WHEN تُنفَّذ عملية الترقية، THE نظام_البناء SHALL يستبدل حزمة `tailwindcss` v3 بحزمة `tailwindcss` v4
2. WHEN تُنفَّذ عملية الترقية، THE نظام_البناء SHALL يُثبِّت حزمة `@tailwindcss/vite` كإضافة Vite
3. WHEN تُنفَّذ عملية الترقية، THE نظام_البناء SHALL يُزيل حزم `postcss` و `autoprefixer` من الاعتماديات لأنها لم تعد مطلوبة مع Tailwind v4
4. WHEN تُنفَّذ عملية الترقية، THE نظام_البناء SHALL يستبدل إضافة `tailwindcss-animate` بحزمة `tw-animate-css` المتوافقة مع v4
5. WHEN تُنفَّذ عملية الترقية، THE نظام_البناء SHALL يُحدِّث حزمة `@tailwindcss/typography` إلى الإصدار المتوافق مع v4

### المتطلب 2: تحويل إعداد Vite

**قصة المستخدم:** بصفتي مطوراً، أريد تحويل إعداد البناء لاستخدام إضافة Tailwind v4 الأصلية لـ Vite، حتى يكون البناء أسرع وأبسط.

#### معايير القبول

1. WHEN يُحدَّث إعداد Vite، THE ملف_vite.config.ts SHALL يتضمن إضافة `@tailwindcss/vite` في قائمة الإضافات
2. WHEN يُحدَّث إعداد البناء، THE ملف_postcss.config.js SHALL يُحذَف لأن Tailwind v4 يستخدم إضافة Vite بدلاً من PostCSS
3. WHEN يُحدَّث إعداد البناء، THE ملف_tailwind.config.ts SHALL يُحذَف لأن الإعداد ينتقل إلى ملف CSS

### المتطلب 3: تحويل ملف CSS الرئيسي

**قصة المستخدم:** بصفتي مطوراً، أريد تحويل ملف `index.css` من صيغة Tailwind v3 إلى صيغة v4، حتى يعمل نظام الأنماط بشكل صحيح مع الإصدار الجديد.

#### معايير القبول

1. WHEN يُحوَّل ملف CSS، THE ملف_index.css SHALL يستبدل توجيهات `@tailwind base/components/utilities` بتوجيه `@import "tailwindcss"` الموحد
2. WHEN يُحوَّل ملف CSS، THE ملف_index.css SHALL يستخدم توجيه `@theme inline` لتعريف جميع قيم السمة المخصصة (الألوان، الرسوم المتحركة، الخطوط، نصف القطر)
3. WHEN يُحوَّل ملف CSS، THE ملف_index.css SHALL يحتفظ بجميع متغيرات CSS في `:root` بنفس القيم الحالية بصيغة HSL
4. WHEN يُحوَّل ملف CSS، THE ملف_index.css SHALL يُحوِّل جميع الرسوم المتحركة المخصصة (accordion-down, accordion-up, fade-in, slide-up, glow-pulse) إلى صيغة `@theme`
5. WHEN يُحوَّل ملف CSS، THE ملف_index.css SHALL يُحوِّل إعدادات الخطوط المخصصة (Space Grotesk) إلى صيغة `@theme`
6. WHEN يُحوَّل ملف CSS، THE ملف_index.css SHALL يُحوِّل إعدادات نصف القطر المخصصة إلى صيغة `@theme`

### المتطلب 4: الحفاظ على نظام الألوان والسمات

**قصة المستخدم:** بصفتي مطوراً، أريد أن يعمل نظام الألوان والسمات الحالي بدون تغيير بعد الترقية، حتى لا تتأثر واجهة المستخدم.

#### معايير القبول

1. THE نظام_الألوان SHALL يحتفظ بجميع ألوان السمة المخصصة (primary, secondary, destructive, muted, accent, popover, card, sidebar) بنفس القيم
2. WHEN يُستخدَم لون مخصص في مكون، THE نظام_الألوان SHALL يُنتِج نفس اللون المرئي كما في الإصدار السابق
3. THE نظام_الألوان SHALL يُعرِّف جميع الألوان المخصصة داخل كتلة `@theme inline` باستخدام صيغة `hsl(var(--variable))`
4. WHEN تُستخدَم ألوان sidebar، THE نظام_الألوان SHALL يحتفظ بجميع المتغيرات الفرعية (background, foreground, primary, accent, border, ring)

### المتطلب 5: الحفاظ على الأصناف المخصصة

**قصة المستخدم:** بصفتي مطوراً، أريد أن تعمل جميع الأصناف المخصصة (glass-ultra, btn-neon-ultra, holo-text, إلخ) بعد الترقية، حتى لا يتغير المظهر البصري للموقع.

#### معايير القبول

1. THE الأصناف_المخصصة SHALL تحتفظ بجميع أصناف `@layer components` الحالية بنفس الأنماط البصرية
2. WHEN يُستخدَم صنف `.glass-ultra`، THE الأصناف_المخصصة SHALL تُنتِج نفس تأثير الزجاج الشفاف
3. WHEN يُستخدَم صنف `.btn-neon-ultra`، THE الأصناف_المخصصة SHALL تُنتِج نفس تأثير النيون المتوهج
4. WHEN يُستخدَم صنف `.holo-text`، THE الأصناف_المخصصة SHALL تُنتِج نفس تأثير النص الهولوغرافي
5. THE الأصناف_المخصصة SHALL تحتفظ بجميع الرسوم المتحركة المخصصة (@keyframes) بنفس السلوك
6. WHEN تُستخدَم توجيهات `@layer` في Tailwind v4، THE الأصناف_المخصصة SHALL تستخدم صيغة `@utility` للأدوات المخصصة و `@layer components` للمكونات حسب متطلبات v4

### المتطلب 6: توافق مكونات shadcn/ui

**قصة المستخدم:** بصفتي مطوراً، أريد أن تعمل جميع مكونات shadcn/ui بشكل صحيح بعد الترقية، حتى لا تتعطل واجهة المستخدم.

#### معايير القبول

1. THE مكونات_shadcn SHALL تعمل بشكل صحيح مع جميع متغيرات CSS المطلوبة (border, input, ring, background, foreground, إلخ)
2. WHEN يُستخدَم مكون Button، THE مكونات_shadcn SHALL تُطبِّق الأنماط الصحيحة باستخدام class-variance-authority
3. WHEN يُحدَّث ملف `components.json`، THE مكونات_shadcn SHALL يُحدَّث ليعكس إعداد Tailwind v4 الجديد
4. THE مكونات_shadcn SHALL تحتفظ بدعم الوضع المظلم عبر صنف `dark` على عنصر HTML

### المتطلب 7: تحديث صيغ أصناف Tailwind المتغيرة

**قصة المستخدم:** بصفتي مطوراً، أريد تحديث أي أصناف Tailwind تغيرت صيغتها في v4، حتى تعمل جميع الأنماط بشكل صحيح.

#### معايير القبول

1. WHEN تُستخدَم أصناف ظل الحاوية (shadow, ring)، THE ملفات_المكونات SHALL تستخدم الصيغة المتوافقة مع v4
2. WHEN تُستخدَم أصناف الحاوية (container)، THE ملفات_المكونات SHALL تُعرِّف إعدادات الحاوية في `@theme` بدلاً من `tailwind.config.ts`
3. WHEN يُستخدَم صنف `text-balance`، THE ملفات_المكونات SHALL تستخدم الصيغة المتوافقة مع v4

### المتطلب 8: بناء المشروع بنجاح

**قصة المستخدم:** بصفتي مطوراً، أريد أن يُبنى المشروع بنجاح بعد الترقية بدون أخطاء، حتى أتمكن من نشره.

#### معايير القبول

1. WHEN يُنفَّذ أمر `npm run build`، THE نظام_البناء SHALL يُكمِل البناء بدون أخطاء
2. WHEN يُنفَّذ أمر `npm run dev`، THE نظام_البناء SHALL يُشغِّل خادم التطوير بدون أخطاء
3. IF حدث خطأ في استيراد حزمة محذوفة، THEN THE نظام_البناء SHALL يُبلِّغ عن الخطأ بوضوح مع اسم الحزمة المفقودة
