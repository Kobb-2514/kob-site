'use client';

import { useLang } from '@/lib/lang';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="border-t border-stone-200 mt-24 py-10">
      <div className="max-w-5xl mx-auto px-5 text-sm text-gray-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <p>
          © {new Date().getFullYear()} adisak (kob) ·{' '}
          {t({
            th: 'สร้างที่บ้านในห้องนอน',
            en: 'made at home, in pajamas',
          })}
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Kobb-2514"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-700 transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:adisakrattanasongkram@gmail.com"
            className="hover:text-teal-700 transition-colors"
          >
            Email
          </a>
          <a href="https://drugboxcare.com" className="hover:text-teal-700 transition-colors">
            DrugBox
          </a>
        </div>
      </div>
    </footer>
  );
}
