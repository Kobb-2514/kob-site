'use client';

// app/about/page.tsx
//
// /about — เส้นทางจากเภสัชสู่ dev. Casual, first-person ("ผม"),
// timeline-ish but more story than CV. CV-style facts go in /projects
// + /tech for recruiters who want them.

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
            th: 'ผมเป็นเภสัช ที่นั่งเขียน code',
            en: 'i’m a pharmacist who writes code',
          })}
        </h1>
      </header>

      <div className="prose prose-lg prose-gray max-w-none space-y-5 text-gray-700 leading-relaxed">
        {t({
          th: `ชื่อโกบครับ — เภสัชกรประจำโรงพยาบาล จบเภสัชศาสตร์มาตามทางสายปกติ ทำงานในห้องยาเหมือนเภสัชทั่วไป แต่มีอย่างนึงที่ทำให้ผมต่างจากเพื่อนร่วมรุ่นนิดหน่อย คือผมชอบนั่งแก้ปัญหาด้วย code`,
          en: `i’m kob — a hospital pharmacist with the standard pharmacy degree, working at a real counter like everyone else. one small difference: i like to solve problems by writing code.`,
        })
          .split('\n')
          .map((p, i) => (
            <p key={i}>{p}</p>
          ))}

        <p>
          {t({
            th: 'มันเริ่มจากเรื่องเล็กๆ เช่น Excel ที่ใช้นับยาทุกอาทิตย์มันช้าและพังบ่อย เลยลองหัด script ดู → ลองเขียน macro → พอลองเขียน webapp ดู → พอเขียน webapp ได้ก็คิดต่อว่า ถ้าเป็นแอปบนมือถือเลยล่ะ → จู่ๆ ก็มาอยู่ตรงนี้ ที่นั่งเขียน Swift ตอนตี 2',
            en: 'it started small — the Excel sheet we used to count drugs every week kept crashing, so i tried scripting. then macros. then a webapp. then i thought "what if it ran on a phone?" and somehow ended up here, writing Swift at 2am.',
          })}
        </p>

        <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3">
          {t({ th: 'ทำไมผมถึงเชื่อในแอปแบบที่ทำอยู่', en: 'why i believe in the apps i build' })}
        </h2>

        <p>
          {t({
            th: 'มี dev เก่งๆ เยอะแยะที่สร้าง healthcare app ออกมา แต่หลายตัวพังเพราะคนทำไม่เคยอยู่ในห้องยา ไม่เคยเจอเภสัชวิ่งหาขวดยาตอน CPR ไม่เคยต้องเช็ค expire ก่อนสิ้นเดือน — feature เลยตามจินตนาการ ไม่ตามความจริง',
            en: 'there are great devs out there building healthcare apps, but many fall flat because the makers have never stood at a pharmacy counter. they’ve never watched a pharmacist sprint for a drug during a code blue. so the features follow imagination, not reality.',
          })}
        </p>

        <p>
          {t({
            th: 'ผมโชคดีที่อยู่ทั้งสองฝั่ง — เป็นทั้งคนใช้งานและคนสร้าง การเข้าใจ pain ของผู้ใช้ (เพราะตัวเองคือผู้ใช้) ทำให้สร้าง software ที่ตรงจุดได้ DrugBox คือผลของความเชื่อนี้',
            en: 'i’m lucky to sit on both sides — i’m the user and the maker. understanding the pain (because i feel it myself) lets me build something that actually fits. DrugBox is the result of that belief.',
          })}
        </p>

        <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3">
          {t({ th: 'งานปัจจุบัน', en: 'right now' })}
        </h2>

        <ul className="space-y-2 list-disc list-inside marker:text-teal-600">
          <li>
            {t({
              th: 'เภสัชกรประจำโรงพยาบาล (งานหลัก)',
              en: 'hospital pharmacist (day job)',
            })}
          </li>
          <li>
            {t({
              th: 'maker ของ DrugBox Care — กำลัง pilot กับ รพ. หลายแห่ง',
              en: 'maker of DrugBox Care — currently piloting in multiple hospitals',
            })}
          </li>
          <li>
            {t({
              th: 'พยายามจะเอา 2 อย่างนี้มาเจอกันให้ได้บ่อยขึ้น',
              en: 'trying to bring those two worlds closer, more often',
            })}
          </li>
        </ul>

        <h2 className="text-xl font-extrabold text-gray-900 mt-10 mb-3">
          {t({ th: 'ที่อยากบอกอีกอย่าง', en: 'one more thing' })}
        </h2>
        <p>
          {t({
            th: 'งานเภสัชสอนผมว่า "พอใช้ได้" ในทางการแพทย์มันแปลว่า "อาจมีคนเจ็บ" — เพราะงั้นเวลาผมทำแอป ผมจะเก็บ standard นี้ไว้ ไม่ส่งของที่ตัวเองไม่อยากใช้',
            en: 'pharmacy taught me that "good enough" in clinical work usually means "someone might get hurt." i carry that bar into my software — i don’t ship things i wouldn’t use myself.',
          })}
        </p>
      </div>
    </article>
  );
}
