'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLang } from '@/lib/lang';
import LangToggle from './LangToggle';

export default function Header() {
  const pathname = usePathname();
  const { t } = useLang();

  const links: { href: string; label: { th: string; en: string } }[] = [
    { href: '/about', label: { th: 'เกี่ยวกับ', en: 'About' } },
    { href: '/pharmacy', label: { th: 'ยา', en: 'Pharmacy' } },
    { href: '/projects', label: { th: 'ผลงาน', en: 'Projects' } },
    { href: '/drugbox', label: { th: 'DrugBox', en: 'DrugBox' } },
    { href: '/tech', label: { th: 'เทคนิค', en: 'Tech' } },
    { href: '/contact', label: { th: 'ติดต่อ', en: 'Contact' } },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-stone-50/80 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="font-extrabold text-lg text-teal-700 tracking-tight">
          kob
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`px-3 py-1.5 rounded-md transition-colors ${
                  active
                    ? 'text-teal-700 font-semibold'
                    : 'text-gray-600 hover:text-teal-700 hover:bg-teal-50'
                }`}
              >
                {t(l.label)}
              </Link>
            );
          })}
        </nav>

        <LangToggle />
      </div>
    </header>
  );
}
