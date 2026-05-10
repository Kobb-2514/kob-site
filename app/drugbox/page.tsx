'use client';

// app/drugbox/page.tsx
//
// /drugbox — guide page for DrugBox Care.
//
// Audience: pharmacists / hospital admins thinking about using it.
// Tone: explainer, not pitch — show the workflow + diagrams, link out
// to drugboxcare.com for the actual signup. Keep marketing copy short
// because drugboxcare.com already has the marketing landing page.
//
// Diagrams used (must exist in /public/diagrams/):
//   02-box-movement-workflow.svg  — heart-of-app flow
//   04-notification-timeline.svg  — push schedule (Mon weekly + daily expiry)
//   05-first-login-org-concept.svg — first-time login + org creation

import { useLang } from '@/lib/lang';

export default function DrugBoxGuide() {
  const { t } = useLang();

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      {/* Header */}
      <header className="mb-12">
        <p className="text-xs font-bold tracking-widest text-teal-700 uppercase mb-3">
          {t({ th: 'คู่มือการใช้งาน', en: 'usage guide' })}
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
          DrugBox Care
        </h1>
        <p className="mt-4 text-lg text-gray-600 leading-relaxed">
          {t({
            th: 'แอปจัดการกล่องยาฉุกเฉินสำหรับเภสัช รพ. — ตัวจริงไม่ใช่แค่ Excel เปลี่ยนหน้าตา',
            en: 'an emergency drug-box management app for hospital pharmacists. not Excel with a new skin.',
          })}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="https://drugboxcare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full font-semibold text-sm transition-colors"
          >
            {t({ th: 'เปิดเว็บแอป', en: 'open web app' })} →
          </a>
          <a
            href="https://testflight.apple.com/join/AyW6s88K"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 border border-stone-300 text-gray-700 px-4 py-2 rounded-full font-semibold text-sm transition-colors"
          >
            iOS · TestFlight
          </a>
        </div>
      </header>

      {/* Section 1: Why */}
      <section className="mb-14">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t({ th: 'ทำไมต้องมี', en: 'why it exists' })}
        </h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            {t({
              th: 'รพ. ส่วนใหญ่จัดการกล่องยาฉุกเฉินด้วย Excel + กระดาษ + มีเภสัชที่รับผิดชอบไม่กี่คน พอคนนั้นย้ายงาน ระบบก็อาจพังตาม',
              en: 'most hospitals manage emergency drug boxes with Excel, paper, and one pharmacist’s memory. when that person leaves, the system falls apart.',
            })}
          </p>
          <p>
            {t({
              th: 'DrugBox แก้ตรงนี้ — ทุกการ swap, return, dispense ถูก log อัตโนมัติ ทุกคนในทีมเห็นสถานะเดียวกัน expire alert ส่งเองทุกเช้า ไม่ต้องนั่งกางปฏิทิน',
              en: 'DrugBox fixes that — every swap, return, dispense is auto-logged. everyone on the team sees the same status. expiry alerts go out every morning. no more flipping through a calendar.',
            })}
          </p>
        </div>
      </section>

      {/* Section 1.5: Pharmacist's view — diagram 01 (added 2026-05-10).
          Sits right after "why" and before the deeper dives because it
          frames the work from the user's perspective: a pharmacist
          who walks up to a box, opens the app, and sees the same
          state every teammate sees. */}
      <section className="mb-14">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t({ th: 'มุมมองของเภสัช · Pharmacist view', en: 'pharmacist\u2019s view' })}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {t({
            th: 'งานเภสัชประจำกล่องยา 4 อย่าง — เปิดดูสถานะ, สลับ/รับ/จ่าย, ตรวจรอบ, จัดการยาในกล่อง — ทำได้บนแอป iOS หรือเว็บ ทุกคนในทีมเห็นข้อมูลเดียวกันแบบ realtime',
            en: 'four routine pharmacist tasks around a drug box — viewing status, swap/receive/dispatch, inspection rounds, and managing items inside a box — all on iOS or web, with everyone seeing the same realtime state.',
          })}
        </p>
        <DiagramFrame
          src="/diagrams/01-pharmacist-view.svg"
          alt={t({
            th: 'แผนภาพมุมมองและงานหลักของเภสัชต่อกล่องยา',
            en: 'Pharmacist view — main tasks around a drug box',
          })}
        />
      </section>

      {/* Section 2: Box Movement (heart of app) — diagram 02 */}
      <section className="mb-14">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t({ th: 'หัวใจของแอป · Box Movement', en: 'heart of the app · Box Movement' })}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {t({
            th: 'การเคลื่อนย้ายกล่องระหว่างจุดต่างๆ (Pharmacy → Ward → ER → กลับ) คือสิ่งที่เกิดขึ้นบ่อยที่สุดในงานจริง — ทุก movement บันทึกได้ใน 3 รูปแบบ',
            en: 'moving boxes between locations (Pharmacy → Ward → ER → back) happens constantly in real work. each movement fits one of three modes.',
          })}
        </p>
        <DiagramFrame
          src="/diagrams/02-box-movement-workflow.svg"
          alt={t({
            th: 'แผนภาพขั้นตอน Box Movement 3 รูปแบบ',
            en: 'Box Movement 3-mode workflow diagram',
          })}
        />
      </section>

      {/* Section 3: First login — diagram 05 */}
      <section className="mb-14">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t({ th: 'เริ่มต้นใช้งานครั้งแรก', en: 'first time using it' })}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {t({
            th: 'เภสัชหัวหน้าสร้าง organization (รพ. หรือหน่วยงาน) → ทีมที่เหลือ join เข้ามาด้วยรหัส',
            en: 'a head pharmacist creates an organization (hospital or unit). the rest of the team joins with a code.',
          })}
        </p>
        <DiagramFrame
          src="/diagrams/05-first-login-org-concept.svg"
          alt={t({
            th: 'แผนภาพการสมัครครั้งแรก + concept ขององค์กร',
            en: 'first-login + org concept diagram',
          })}
        />
      </section>

      {/* Section 3.5: Adding boxes — diagram 07 (added 2026-05-10) */}
      <section className="mb-14">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t({ th: 'เพิ่มกล่องยา · 2 วิธี', en: 'adding boxes · two ways' })}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {t({
            th: 'หลัง join องค์กรแล้ว เริ่มเพิ่มกล่องได้ 2 ทาง — กรอกเองทีละกล่องสำหรับ รพ. ที่เพิ่งเริ่ม หรือ Import จาก CSV ถ้ามีข้อมูลใน Excel/Sheets อยู่แล้วและอยากย้ายเข้ามาแบบ bulk',
            en: 'after joining the org, there are two ways to add boxes — type them in one-by-one (good for fresh setups), or import from a CSV (faster if you already have data in Excel/Sheets).',
          })}
        </p>
        <DiagramFrame
          src="/diagrams/07-add-box-flows.svg"
          alt={t({
            th: 'แผนภาพการเพิ่มกล่องยา 2 วิธี: กรอกเอง vs Import CSV',
            en: 'Adding boxes diagram — manual entry vs CSV import',
          })}
        />
      </section>

      {/* Section 4: Notification timeline — diagram 04 */}
      <section className="mb-14">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t({ th: 'การแจ้งเตือนรายวัน', en: 'daily notifications' })}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {t({
            th: 'ทุก 8 โมงเช้าตามเวลาไทย DrugBox ส่ง push ตามตารางนี้ — จันทร์สรุปสัปดาห์เต็ม วันอื่นเงียบถ้าไม่มียาหมดอายุ',
            en: 'every 8am Bangkok time, DrugBox sends a push on this schedule. Mondays get the full weekly summary; other days stay quiet if nothing’s expiring.',
          })}
        </p>
        <DiagramFrame
          src="/diagrams/04-notification-timeline.svg"
          alt={t({
            th: 'ตารางเวลาการแจ้งเตือนรายวัน',
            en: 'notification timeline diagram',
          })}
        />
      </section>

      {/* Section 4.5: iOS + Web parity — diagram 03 (added 2026-05-10).
          Comes near the end as a reassurance: "you saw all those
          flows, btw they all work on both platforms with the same
          data". /tech page also uses this diagram, but the message
          there is dev-flavoured (parity-strategy) — here it's
          end-user-flavoured (one team, two devices). Same SVG, two
          framings; the duplication is intentional. */}
      <section className="mb-14">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t({ th: 'ใช้ได้ทั้ง iOS และเว็บ', en: 'works on iOS and the web' })}
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          {t({
            th: 'ทุก feature ทำงานเหมือนกันทั้งบนมือถือและคอม — เภสัชหัวหน้าใช้เว็บที่หน้าจอใหญ่, เภสัชเดินกล่องใช้ iOS ในมือ ข้อมูลที่เห็นคือชุดเดียวกัน sync ผ่าน Firestore',
            en: 'every feature works the same on both mobile and desktop — head pharmacists use the wider web view, while pharmacists out on rounds use iOS in hand. same data either way, synced through Firestore.',
          })}
        </p>
        <DiagramFrame
          src="/diagrams/03-ios-vs-web-parity.svg"
          alt={t({
            th: 'แผนภาพ feature parity ระหว่าง iOS กับเว็บ',
            en: 'iOS vs Web feature parity diagram',
          })}
        />
      </section>

      {/* Section 5: How to start */}
      <section className="mb-12">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-3">
          {t({ th: 'อยากลองใช้?', en: 'want to try it?' })}
        </h2>
        <ol className="space-y-3 text-gray-700 leading-relaxed list-decimal list-inside marker:text-teal-600 marker:font-bold">
          <li>
            {t({
              th: 'เปิด ',
              en: 'open ',
            })}
            <a
              href="https://drugboxcare.com"
              className="text-teal-700 font-semibold hover:underline"
            >
              drugboxcare.com
            </a>
            {t({
              th: ' บนคอม หรือมือถือ → กด Sign up',
              en: ' on desktop or phone, then tap Sign up',
            })}
          </li>
          <li>
            {t({
              th: 'สร้าง organization ของ รพ. ตัวเอง (เป็น admin คนแรกอัตโนมัติ)',
              en: 'create your hospital’s organization (you’re the first admin automatically)',
            })}
          </li>
          <li>
            {t({
              th: 'เพิ่มกล่องและรายการยาเข้าไป (มี CSV import ถ้ามีข้อมูลอยู่แล้ว)',
              en: 'add boxes and drug items (CSV import is available if you have existing data)',
            })}
          </li>
          <li>
            {t({
              th: 'ชวนเพื่อนร่วมทีมเข้ามา → ทุกคนเห็นข้อมูลตัวเดียวกัน sync แบบ realtime',
              en: 'invite teammates — everyone sees the same data in realtime',
            })}
          </li>
        </ol>
        <p className="mt-6 text-sm text-gray-500 italic">
          {t({
            th: 'ฟรีตลอดช่วง pilot — ติดต่อมาผ่านหน้า contact ได้ถ้ามีคำถาม',
            en: 'free during pilot — reach out via contact if you have questions.',
          })}
        </p>
      </section>
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
