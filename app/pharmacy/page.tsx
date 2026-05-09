'use client';

// app/pharmacy/page.tsx
//
// /pharmacy — short pieces about the pharmacy world.
//
// First commit ships an empty-state with one hand-written intro post,
// to set tone. Real posts come later. The page can grow into a proper
// blog (MDX, frontmatter, list) once 3+ posts exist.

import Link from 'next/link';
import { useLang } from '@/lib/lang';

export default function Pharmacy() {
  const { t } = useLang();

  return (
    <div className="max-w-2xl mx-auto px-5 py-16">
      <header className="mb-10">
        <p className="text-xs font-bold tracking-widest text-teal-700 uppercase mb-3">
          {t({ th: 'มุมมองด้านยา', en: 'pharmacy thoughts' })}
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
          {t({
            th: 'เรื่องเล่าจากห้องยา',
            en: 'tales from the pharmacy counter',
          })}
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          {t({
            th: 'งานเภสัชหน้าห้องยาเป็นอะไรที่คนนอกวงการมองไม่เห็น — ที่นี่ผมจะเล่าเรื่องที่คิดว่าน่าสนใจ บางทีเป็นเทคนิค บางทีเป็นเรื่องคนล้วนๆ',
            en: 'a lot of pharmacy work is invisible from outside. i’ll write about what i find interesting — sometimes technical, sometimes just human.',
          })}
        </p>
      </header>

      {/* Featured / first post */}
      <article className="bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 mb-6">
        <p className="text-[11px] font-semibold tracking-widest text-stone-500 uppercase mb-2">
          {t({ th: 'โพสต์แรก · 2026', en: 'first post · 2026' })}
        </p>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t({
            th: 'ทำไมกล่องยาฉุกเฉินถึงน่าสนใจ',
            en: 'why an emergency drug box is more interesting than it sounds',
          })}
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            {t({
              th: 'พูดคำว่า "กล่องยา" ฟังดูธรรมดา — แค่กล่องๆ ที่ใส่ยาไว้รอใช้ในเหตุฉุกเฉิน แต่ความจริงคือ ในกล่องเดียวมียาที่ราคาต่างกันตั้งแต่หลักสิบถึงหลักหมื่น มียาบางตัวที่ใช้ครั้งเดียวอาจชี้ความเป็น-ตายของคนไข้ มียาที่ถ้าหมดอายุแล้วยังใช้อยู่อาจสร้างปัญหาใหญ่กว่าไม่มียาเสียอีก',
              en: 'the words "drug box" sound mundane — just a box with drugs ready for emergencies. but inside that box are drugs ranging from a few baht to thousands, drugs that decide life-or-death in one dose, and drugs that are worse than useless if they’ve quietly expired.',
            })}
          </p>
          <p>
            {t({
              th: 'แล้วเราจัดการกล่องเหล่านี้ยังไง? คำตอบของ รพ. ส่วนใหญ่คือ "เภสัชคนเก่งคนนึงรู้หมด" ซึ่งเป็นคำตอบที่น่ากลัว เพราะคนคนเดียวลาออกได้ ลืมได้ เจ็บป่วยได้',
              en: 'how do we manage these boxes? at most hospitals, the answer is "one experienced pharmacist knows everything." which is a scary answer — because one person can quit, forget, get sick.',
            })}
          </p>
          <p>
            {t({
              th: 'นี่คือเหตุผลที่ DrugBox เกิดขึ้นมา — ไม่ใช่แค่ tool, แต่เป็นความพยายามจะกระจาย knowledge ให้ทุกคนในทีมเภสัชเห็นเท่ากัน',
              en: 'that’s why DrugBox exists — not just a tool, but an attempt to spread the knowledge so the whole pharmacy team sees the same picture.',
            })}
          </p>
        </div>
        <p className="mt-6 text-sm">
          <Link
            href="/drugbox"
            className="text-teal-700 font-semibold hover:underline"
          >
            {t({ th: 'อ่านคู่มือ DrugBox', en: 'read the DrugBox guide' })} →
          </Link>
        </p>
      </article>

      {/* Coming soon stub */}
      <div className="bg-stone-100 border border-dashed border-stone-300 rounded-2xl p-6 text-center">
        <p className="text-sm text-gray-500">
          {t({
            th: 'มีโพสต์ใหม่กำลังจะเขียน — เรื่อง medication error, การตรวจกล่อง, การคุยกับหมอเรื่องยา…',
            en: 'more posts coming — medication errors, inspection rounds, awkward conversations with doctors about drugs…',
          })}
        </p>
      </div>
    </div>
  );
}
