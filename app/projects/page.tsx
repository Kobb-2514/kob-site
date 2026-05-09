'use client';

// app/projects/page.tsx
//
// /projects — what i've built. casual list, not portfolio-grid.
// DrugBox is the featured one, others are smaller / older.

import Link from 'next/link';
import { useLang } from '@/lib/lang';

type Project = {
  title: string;
  status: 'live' | 'pilot' | 'paused' | 'idea';
  href?: string;
  /** Optional screenshot/diagram. Path is resolved from /public. */
  image?: string;
  blurb: { th: string; en: string };
  tech: string[];
};

const projects: Project[] = [
  {
    title: 'DrugBox Care',
    status: 'live',
    href: 'https://drugboxcare.com',
    blurb: {
      th: 'ระบบจัดการกล่องยาฉุกเฉินสำหรับเภสัช รพ. — มี iOS + web ใช้งานพร้อมกัน sync ผ่าน Firestore. ตอนนี้รอ App Store review',
      en: 'emergency drug-box management for hospital pharmacists — iOS + web, synced via Firestore. currently in App Store review.',
    },
    tech: ['SwiftUI', 'Next.js', 'Firebase', 'Cloud Functions', 'TypeScript'],
  },
  {
    title: 'MedSticker',
    status: 'pilot',
    image: '/medsticker-login.png',
    blurb: {
      th: 'ระบบออกฉลากยาอัตโนมัติ — ตัวที่กำลังทำต่อจาก DrugBox อยู่ในช่วง pilot ใช้งานจริงในห้องยา',
      en: 'auto-print drug labels for pharmacy counters — the next thing i\u2019m building after DrugBox, currently piloting at a real counter.',
    },
    tech: ['SwiftUI', 'Firebase'],
  },
];

const statusBadge = (s: Project['status']) => {
  const map = {
    live: { label: 'live', cls: 'bg-emerald-100 text-emerald-800' },
    pilot: { label: 'pilot', cls: 'bg-amber-100 text-amber-800' },
    paused: { label: 'paused', cls: 'bg-stone-100 text-stone-700' },
    idea: { label: 'idea', cls: 'bg-purple-100 text-purple-800' },
  } as const;
  return map[s];
};

export default function Projects() {
  const { t } = useLang();

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <header className="mb-12">
        <p className="text-xs font-bold tracking-widest text-teal-700 uppercase mb-3">
          {t({ th: 'ผลงาน', en: 'projects' })}
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight">
          {t({
            th: 'ของที่ผมทำ',
            en: 'things i build',
          })}
        </h1>
        <p className="mt-4 text-gray-600 leading-relaxed">
          {t({
            th: 'ส่วนใหญ่เกิดจากปัญหาที่ตัวเองเจอแล้วทนไม่ไหว — ทั้งงานเภสัชและงานทั่วไป',
            en: 'most started from a problem i couldn’t stand any longer — both pharmacy and everyday stuff.',
          })}
        </p>
      </header>

      <div className="space-y-6">
        {projects.map((p) => {
          const badge = statusBadge(p.status);
          return (
            <article
              key={p.title}
              className="bg-white border border-stone-200 rounded-2xl overflow-hidden hover:border-teal-300 transition-colors"
            >
              {/* Optional screenshot — sits above the text, framed in
                  off-white so it reads as a diagram/preview rather than
                  a full-bleed banner. The phone-shape screenshot for
                  MedSticker uses object-contain so we don't crop the
                  device chrome. */}
              {p.image && (
                <div className="bg-stone-100 border-b border-stone-200 flex items-center justify-center py-6 px-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={`${p.title} screenshot`}
                    className="max-h-72 w-auto object-contain rounded-xl shadow-md"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="text-xl font-extrabold text-gray-900">{p.title}</h2>
                  <span
                    className={`text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full ${badge.cls}`}
                  >
                    {badge.label}
                  </span>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{t(p.blurb)}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {p.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-semibold text-gray-600 bg-stone-100 px-2 py-0.5 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {p.href && (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-teal-700 hover:text-teal-900 underline-offset-4 hover:underline"
                  >
                    {p.href.replace('https://', '')} →
                  </a>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-12 text-sm text-gray-500 italic">
        {t({
          th: 'ที่กำลังคิดจะทำต่อ — แอปจัดการ shift เภสัช, calculator dosage สำหรับ ER, อะไรอีกหลายอย่าง... ',
          en: 'on the drawing board — pharmacist shift scheduler, ER dosage calculator, plenty more...',
        })}
        <Link href="/contact" className="text-teal-700 hover:underline">
          {t({ th: 'มี idea? มาคุยกัน', en: 'have an idea? let’s talk' })}
        </Link>
      </p>
    </div>
  );
}
