'use client';

// app/tech/page.tsx
//
// /tech — for fellow devs. lighter on stories, heavier on diagrams +
// stack rationale. uses the architecture diagrams from DrugBox.
//
// Diagrams used:
//   03-ios-vs-web-parity.svg      — feature parity strategy
//   06-architecture-overview.svg  — Firebase stack overview

import { useLang } from '@/lib/lang';

export default function Tech() {
  const { t } = useLang();

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <header className="mb-12">
        <p className="text-xs font-bold tracking-widest text-teal-700 uppercase mb-3">
          {t({ th: 'เทคนิค', en: 'tech' })}
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
          {t({
            th: 'ของในห้องเครื่อง',
            en: 'under the hood',
          })}
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          {t({
            th: 'สำหรับ dev ด้วยกัน — DrugBox สร้างยังไง stack อะไร อะไรเวิร์ค อะไรไม่เวิร์ค',
            en: 'for fellow devs — how DrugBox is built, what stack, what worked, what didn’t.',
          })}
        </p>
      </header>

      {/* Stack at a glance */}
      <section className="mb-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t({ th: 'Stack', en: 'stack' })}
        </h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <StackCard label="Frontend · iOS" stack={['SwiftUI', 'iOS 18 deployment target', 'native push via APNs']} />
          <StackCard label="Frontend · Web" stack={['Next.js 16 App Router', 'Tailwind CSS', 'TypeScript', 'PWA install on Android/desktop']} />
          <StackCard label="Backend" stack={['Firebase Auth (email + Apple + Google)', 'Cloud Firestore', 'Cloud Functions v2 (Node)', 'Cloud Messaging (FCM)']} />
          <StackCard label="Hosting" stack={['Firebase App Hosting (web auto-deploy from git)', 'App Store + TestFlight (iOS)', 'Cloudflare DNS for drugboxcare.com']} />
        </div>
      </section>

      {/* Architecture diagram */}
      <section className="mb-14">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t({ th: 'Architecture overview', en: 'architecture overview' })}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {t({
            th: 'iOS + web ใช้ Firestore เป็น single source of truth — schema เดียว clients 2 ตัวอ่าน/เขียนตรงกัน Cloud Functions ทำงาน server-side ที่ต้อง trust (เช่น Apple revoke token, log audit)',
            en: 'iOS and web both use Firestore as the single source of truth — same schema, two clients, both read/write directly. Cloud Functions handle server-side trust (Apple revoke token, audit log triggers).',
          })}
        </p>
        <DiagramFrame
          src="/diagrams/06-architecture-overview.svg"
          alt={t({
            th: 'แผนภาพ architecture overview',
            en: 'architecture overview diagram',
          })}
        />
      </section>

      {/* Parity diagram */}
      <section className="mb-14">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t({ th: 'iOS + Web parity', en: 'iOS + web parity' })}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {t({
            th: 'ปัญหาที่หนักสุดของการทำ 2 platforms คือ feature drift — iOS มี feature ที่ web ไม่มี แล้ว user สับสน เลือก strategy คือ schema-first: ทุก feature เริ่มจาก Firestore schema → แล้ว implement ทั้งสอง platforms ในรอบเดียวกัน',
            en: 'the hardest part of 2 platforms is feature drift — iOS has X, web doesn’t, users get confused. our strategy is schema-first: every feature starts from a Firestore schema, then both platforms ship in the same cycle.',
          })}
        </p>
        <DiagramFrame
          src="/diagrams/03-ios-vs-web-parity.svg"
          alt={t({
            th: 'แผนภาพ iOS vs Web feature parity',
            en: 'iOS vs Web feature parity diagram',
          })}
        />
      </section>

      {/* Lessons learned */}
      <section className="mb-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t({ th: 'สิ่งที่ได้เรียน', en: 'what i learned' })}
        </h2>
        <ul className="space-y-4 text-gray-700 leading-relaxed">
          <li>
            <strong className="text-gray-900">
              {t({ th: 'Schema-first คุ้มมาก. ', en: 'Schema-first paid off. ' })}
            </strong>
            {t({
              th: 'ใช้เวลาวาด Firestore schema ก่อนเขียน code 1 บ่ายเต็ม — แล้วได้กลับคืนมาเป็นเวลาที่ไม่ต้อง refactor ตอนหลังหลายเท่า',
              en: 'spending one full afternoon drawing the Firestore schema before writing code saved a lot of refactor pain later.',
            })}
          </li>
          <li>
            <strong className="text-gray-900">
              {t({
                th: 'Apple review เข้มกว่าที่คิด ไม่เท่าที่กลัว. ',
                en: 'Apple review is stricter than expected, less scary than feared. ',
              })}
            </strong>
            {t({
              th: 'เตรียม metadata + screenshots + privacy + delete account flow ครบจบในรอบเดียว ผ่าน Apple ได้โดยไม่ต้อง resubmit',
              en: 'with metadata, screenshots, privacy, and a real delete-account flow ready, it can pass on the first submit.',
            })}
          </li>
          <li>
            <strong className="text-gray-900">
              {t({
                th: 'ทำ web + iOS พร้อมกัน เร็วกว่าทำทีละตัว. ',
                en: 'Web + iOS in parallel is faster than sequential. ',
              })}
            </strong>
            {t({
              th: 'context-switch ระหว่างสอง platform ดูเหมือนจะเสียเวลา แต่จริงๆ คือทำให้ schema ผิดพลาดน้อยลง เพราะถ้า bug มันไปทั้งสองที่พร้อมกัน',
              en: 'switching contexts feels wasteful but actually catches schema bugs faster — if a mistake breaks both platforms at once, you find it immediately.',
            })}
          </li>
          <li>
            <strong className="text-gray-900">
              {t({
                th: 'AI pairing ช่วยเยอะ. ',
                en: 'AI pairing helps a lot. ',
              })}
            </strong>
            {t({
              th: 'ส่วนใหญ่ของ DrugBox เกิดจากการ pair กับ Claude — ผมคิด feature, AI ช่วย implement, ผมรีวิวและตัดสินใจ ผลคือทำคนเดียวได้เร็วกว่าเดิมมาก',
              en: 'most of DrugBox was paired with Claude — i think up features, AI helps implement, i review and decide. solo dev with this loop is much faster than the old way.',
            })}
          </li>
        </ul>
      </section>
    </div>
  );
}

function StackCard({ label, stack }: { label: string; stack: string[] }) {
  return (
    <div className="bg-white border border-stone-200 rounded-xl p-4">
      <p className="text-[10px] font-bold tracking-widest text-stone-500 uppercase mb-2">
        {label}
      </p>
      <ul className="space-y-1">
        {stack.map((s) => (
          <li key={s} className="text-sm text-gray-700">
            · {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

function DiagramFrame({ src, alt }: { src: string; alt: string }) {
  return (
    <figure className="bg-white border border-stone-200 rounded-2xl p-3 sm:p-5 overflow-hidden">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} className="w-full h-auto block" />
    </figure>
  );
}
