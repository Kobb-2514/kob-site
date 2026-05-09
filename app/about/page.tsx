'use client';

// app/about/page.tsx
//
// /about — short, casual intro. Two paragraphs only for now —
// removed the longer "why i believe / right now / one more thing"
// sections (2026-05-09) so the page reads quickly. Bring those back
// later as separate posts under /pharmacy if they earn their place.

import { useLang } from '@/lib/lang';

export default function About() {
  const { t } = useLang();

  return (
    <article className="max-w-2xl mx-auto px-5 py-16">
      <header className="mb-10">
        <p className="text-xs font-bold tracking-widest text-teal-700 uppercase mb-3">
          {t({ th: 'เกี่ยวกับ', en: 'about' })}
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
          {t({
            th: 'ผมเป็นเภสัช',
            en: 'i\u2019m a pharmacist',
          })}
        </h1>
      </header>

      <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
        <p>
          {t({
            th: 'ชื่อกบครับ — เริ่มต้นจากเภสัชกรโรงพยาบาลเมื่อ 6-7 ปีก่อน ตอนนี้เป็นเภสัชกรร้านยา',
            en: 'i\u2019m kob — started out as a hospital pharmacist 6-7 years ago, now working at a community pharmacy.',
          })}
        </p>

        <p>
          {t({
            th: 'มันเริ่มจากเรื่องเล็กๆ เช่น Google sheet ที่ใช้บันทึกข้อมูลเกี่ยวกับยา มันช้าและพังบ่อย เลยลองหัด script ดู → ลองเขียน webapp ดู → พอเขียน webapp ได้ก็คิดต่อว่า ถ้าเป็นแอปบนมือถือเลยล่ะ → จู่ๆ ก็มาอยู่ตรงนี้ ที่นั่งเขียน Swift ตอนตี 2 :)',
            en: 'started from small things — a Google Sheet we used for drug data kept being slow and breaking, so i tried scripting → then a webapp → once i could ship a webapp, i thought "what if it ran on a phone?" → somehow ended up here, writing Swift at 2am :)',
          })}
        </p>
      </div>
    </article>
  );
}
