'use client';

// app/about/page.tsx
//
// /about — short, casual intro. The H1 is intentionally English-only
// (decided 2026-05-10) — "i'm a pharmacist" reads as a stylistic
// quote/headline regardless of which language the rest of the page
// is in. Body paragraphs still bilingual via `t()`.

import { useLang } from '@/lib/lang';

export default function About() {
  const { t } = useLang();

  return (
    <article className="max-w-2xl mx-auto px-5 py-16">
      <header className="mb-10">
        <p className="text-xs font-bold tracking-widest text-teal-700 uppercase mb-3">
          {t({ th: 'เกี่ยวกับ', en: 'about' })}
        </p>
        {/* H1 stays English in both lang modes — reads as a quote.
            If you want it bilingual again, wrap with t({ th, en }). */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
          i&rsquo;m a pharmacist
        </h1>
      </header>

      <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
        <p>
          {t({
            th: 'ชื่อกบครับ — เริ่มต้นจากเภสัชกรโรงพยาบาลเมื่อ 6-7 ปีก่อน ตอนนี้เป็นเภสัชกรร้านยาพาร์ทไทม์',
            en: 'i\u2019m kob — started out as a hospital pharmacist 6-7 years ago, now working part-time at a community pharmacy.',
          })}
        </p>

        <p>
          {t({
            th: 'ที่มาของ DrugBox มันเริ่มจาก Google sheet ที่ใช้บันทึกข้อมูลเกี่ยวกับยา แต่มันช้าและพังบ่อย เลยลองหัด script ดู → ลองทำ webapp → พอทำ webapp ได้ ก็คิดต่อว่าถ้าเป็นแอปบนมือถือเลย มันน่าจะสะดวก ลงข้อมูลง่าย ไม่ยุ่งยาก',
            en: 'DrugBox started from a Google Sheet we used for drug data — slow, kept breaking. so i tried scripting → then built a webapp → once i could ship that, i figured a phone app would be even better: easier to enter data, less fuss.',
          })}
        </p>

        <p>
          {t({
            th: 'เว็บนี้จะไว้สำหรับบันทึกสิ่งที่ทำหรือที่คิด และอยากเล่าให้ฟัง',
            en: 'this site is where i write down what i build or think about, and want to share.',
          })}
        </p>
      </div>
    </article>
  );
}
