'use client';

// app/page.tsx — Hero + landing
//
// Casual TH-first tone (Tone A from spec):
// "เภสัชกรที่หลงเข้าวงการเขียน code มาได้สักพัก..."
//
// Three sections only — keep the front door simple:
//   1. Hero (name + one-liner)
//   2. What's here (3 cards linking to subpages)
//   3. Currently shipping (DrugBox highlight)

import Link from 'next/link';
import { useLang } from '@/lib/lang';

export default function Home() {
  const { t } = useLang();

  return (
    <div>
      {/* Hero */}
      <section className="bg-dot-grid">
        <div className="max-w-3xl mx-auto px-5 pt-20 pb-24 text-center">
          <p className="text-xs font-bold tracking-widest text-teal-700 uppercase mb-4">
            {t({ th: 'สวัสดีครับ', en: 'hello' })}
          </p>
          {/* Hand-drawn cartoon by โจเตี๊ยว — replaces the placeholder
              emoji. Decision (2026-05-09): the drawing has more personality
              than the chick emoji and matches the casual tone we established.
              File lives in /public/kob-illustration.jpg; if you swap it,
              keep the same filename or update both this <img> and the alt
              text. Credit line below the image is REQUIRED — this is the
              artist's work, not mine. */}
          <h1 className="sr-only">kob</h1>
          <figure className="flex flex-col items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* Line-art version of the original photo, generated via
                Python+OpenCV (adaptive threshold → black lines, alpha
                channel for paper). Bottom of the source had a baked-in
                "เจ้าชายกบ" caption — that crop happens during the
                line-art conversion, not via CSS. PNG is transparent so
                the dot-grid behind shows through the lines, which makes
                the hero feel more integrated. To swap the source: replace
                /public/kob-illustration-line.png and keep the same path
                here. The original photo is still at /kob-illustration.jpg
                if you want to revert. */}
            <img
              src="/kob-illustration-line.png"
              alt="kob — drawn by โจเตี๊ยว"
              className="w-48 sm:w-64 h-auto select-none"
              draggable={false}
            />
            <figcaption className="mt-2 text-[11px] text-gray-400 italic">
              illustration by โจเตี๊ยว
            </figcaption>
          </figure>
          {/* Thai line-break fix: "มากกว่า" gets split as "มากก|ว่า" by
              Chrome's Thai word breaker (it sees the double ก and stops
              there). Wrapping the phrase in <span class=whitespace-nowrap>
              keeps "มากกว่าการจ่ายยา" together so the line break falls
              on the space before DrugBox instead. EN doesn't need this
              because spaces give natural break points already. */}
          <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
            {t({
              th: 'เข้าวงการเขียน code มาได้สักพัก (ตอนนี้ Vibe Coding เป็นหลัก) อยากทำอะไรที่',
              en: 'got into writing code a while back (mostly vibe-coding these days). wanted to do',
            })}
            <span className="whitespace-nowrap">
              {t({
                th: 'มากกว่าการจ่ายยา',
                en: ' more than just dispense',
              })}
            </span>
            {t({
              th: ' DrugBox เป็นแอพแรก และ MedSticker ที่กำลังทำอยู่',
              en: ' — DrugBox is the first app, MedSticker is the one i\u2019m building next.',
            })}
          </p>
          <p className="mt-4 text-base text-gray-500">
            {t({
              th: 'ที่นี่เป็นที่จดบันทึกสิ่งที่ทำ ที่คิด และอยากเล่าให้ฟัง',
              en: 'this is where i write down what i make, what i think, and what i feel like sharing.',
            })}
          </p>

          {/* Hero CTAs trimmed to a single button for the Facebook launch
              share (2026-05-13) — wanted visitors to land on /drugbox
              without competing options. The 'รู้จักผมก่อน' (about me)
              secondary pill is hidden, not removed, so it can come
              back once /about gets more content worth surfacing.
              Re-enable by un-commenting the second <Link> below. */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/drugbox"
              className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-colors"
            >
              {t({ th: 'ดู DrugBox', en: 'see DrugBox' })} →
            </Link>
            {/* <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 border border-stone-300 text-gray-700 px-5 py-2.5 rounded-full font-semibold text-sm transition-colors"
            >
              {t({ th: 'รู้จักผมก่อน', en: 'about me' })}
            </Link> */}
          </div>
        </div>
      </section>

      {/* "What's here" — hidden 2026-05-13 before the Facebook launch
          share. Plan is to bring it back once there are more rooms /
          fresher content to point at; the JSX + RoomCard usages below
          stay intact so re-enabling is a one-line uncomment.
          Wrapping with `{false && (...)}` rather than deleting keeps
          the diff tiny and the section trivially recoverable. */}
      {false && (
        <section className="max-w-5xl mx-auto px-5 pt-20 pb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
            {t({ th: 'ที่นี่มีอะไรบ้าง', en: 'what’s here' })}
          </h2>
          <p className="text-gray-500 text-sm mb-10">
            {t({
              th: 'หน้าหลักๆ 4 อย่าง — เลือกเปิดอ่านตามใจ',
              en: 'four main rooms. open whichever interests you.',
            })}
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <RoomCard
              href="/about"
              title={{ th: 'เกี่ยวกับผม', en: 'about me' }}
              blurb={{
                th: 'เส้นทางจากเภสัชสู่ dev — ทำไมเภสัชคนนึงถึงนั่งเขียน code ตอนตี 3',
                en: 'pharmacist → dev — why a pharmacy graduate ends up writing code at 3am.',
              }}
            />
            <RoomCard
              href="/pharmacy"
              title={{ th: 'มุมมองด้านยา', en: 'pharmacy thoughts' }}
              blurb={{
                th: 'งานเภสัชที่คนนอกวงการอาจไม่เคยเห็น + ทำไมยาในกล่องฉุกเฉินถึงน่าสนใจ',
                en: 'inside-pharmacy notes you don’t usually see, plus why an emergency drug box is more interesting than it sounds.',
              }}
            />
            <RoomCard
              href="/drugbox"
              title={{ th: 'DrugBox · คู่มือ', en: 'DrugBox · guide' }}
              blurb={{
                th: 'แอปจัดการกล่องยาฉุกเฉินที่ทำเอง — ใช้ยังไง + ทำไมต้องมี',
                en: 'the emergency drug box app i built — how to use it, and why it exists.',
              }}
            />
            <RoomCard
              href="/tech"
              title={{ th: 'เทคนิค', en: 'tech' }}
              blurb={{
                th: 'สำหรับ dev ด้วยกัน — stack, architecture, อะไรเวิร์ค อะไรไม่เวิร์ค',
                en: 'for fellow devs — stack, architecture, what worked, what didn’t.',
              }}
            />
          </div>
        </section>
      )}

      {/* Currently shipping */}
      <section className="max-w-5xl mx-auto px-5 py-12">
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 border border-teal-200 rounded-2xl p-8 sm:p-10">
          <p className="text-xs font-bold tracking-widest text-teal-700 uppercase mb-3">
            {t({ th: 'กำลัง ship อยู่', en: 'currently shipping' })}
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-3">
            DrugBox Care
          </h3>
          <p className="text-gray-700 leading-relaxed">
            {t({
              th: 'แอปจัดการกล่องยาฉุกเฉินสำหรับเภสัช รพ. ทำมาจากปัญหาจริงในห้องยาที่ตัวเองยืนอยู่ ตอนนี้กำลังขึ้น App Store + ใช้ผ่านเว็บได้แล้ว',
              en: 'an emergency drug-box management app for hospital pharmacists. built from problems i actually hit at my own counter. now on the App Store and on the web.',
            })}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://drugboxcare.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-teal-700 hover:text-teal-900 underline-offset-4 hover:underline"
            >
              drugboxcare.com →
            </a>
            <Link
              href="/drugbox"
              className="text-sm font-semibold text-teal-700 hover:text-teal-900 underline-offset-4 hover:underline"
            >
              {t({ th: 'อ่านคู่มือ', en: 'read the guide' })} →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function RoomCard({
  href,
  title,
  blurb,
}: {
  href: string;
  title: { th: string; en: string };
  blurb: { th: string; en: string };
}) {
  const { t } = useLang();
  return (
    <Link
      href={href}
      className="group block bg-white border border-stone-200 hover:border-teal-300 rounded-2xl p-6 transition-colors"
    >
      <h3 className="text-lg font-extrabold text-gray-900 group-hover:text-teal-700 mb-2 transition-colors">
        {t(title)} <span className="text-teal-600 group-hover:translate-x-1 inline-block transition-transform">→</span>
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{t(blurb)}</p>
    </Link>
  );
}
