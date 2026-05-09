'use client';

// app/contact/page.tsx
//
// /contact — minimal. just direct links + a friendly invite.
// no form, no captcha, no spam-magnet. just email + GitHub.

import { useLang } from '@/lib/lang';

export default function Contact() {
  const { t } = useLang();

  return (
    <div className="max-w-xl mx-auto px-5 py-20 text-center">
      <p className="text-xs font-bold tracking-widest text-teal-700 uppercase mb-3">
        {t({ th: 'ติดต่อ', en: 'contact' })}
      </p>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-[1.1] tracking-tight mb-6">
        {t({
          th: 'มาคุยกัน',
          en: 'let’s talk',
        })}
      </h1>
      <p className="text-gray-600 leading-relaxed mb-10">
        {t({
          th: 'อยากใช้ DrugBox ใน รพ. ของตัวเอง / มีไอเดียอยากชวนคุย / อยากแลกเปลี่ยนเรื่องเภสัช + dev — ส่งอีเมลมาได้เลย ผมตอบทุกฉบับ (อาจช้า เพราะกลางวันยังต้องยืนหน้าห้องยา)',
          en: 'want to use DrugBox at your hospital / have an idea to chat about / want to swap notes on pharmacy + dev — drop an email. i reply to all of them (might be slow — i still stand at a counter during the day).',
        })}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="mailto:adisakrattanasongkram@gmail.com"
          className="inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold text-sm transition-colors"
        >
          ✉️ adisakrattanasongkram@gmail.com
        </a>
        <a
          href="https://github.com/Kobb-2514"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-white hover:bg-stone-100 border border-stone-300 text-gray-700 px-6 py-3 rounded-full font-semibold text-sm transition-colors"
        >
          GitHub · @Kobb-2514
        </a>
      </div>

      <p className="mt-12 text-sm text-gray-500 italic">
        {t({
          th: 'ปล. ไม่ใส่ form กับ recaptcha เพราะรำคาญ — email ตรงๆ ดีกว่า',
          en: 'p.s. no form, no captcha — direct email is the friendliest channel.',
        })}
      </p>
    </div>
  );
}
