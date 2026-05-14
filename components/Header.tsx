'use client';

// components/Header.tsx
//
// Top bar — desktop shows nav inline, mobile shows hamburger that opens
// a left-side drawer with the same nav. Drawer closes when:
//   • user taps the backdrop
//   • user taps a link (auto-close on navigate)
//   • user taps the X button
//   • route changes (covered by the link-tap handler — no extra
//     useEffect needed because Next.js client navigation re-runs the
//     onClick before the route change settles)

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLang } from '@/lib/lang';
import LangToggle from './LangToggle';

export default function Header() {
  const pathname = usePathname();
  const { t } = useLang();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Lock body scroll while drawer is open so the underlying page
  // doesn't drift behind the overlay on iOS Safari.
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [drawerOpen]);

  // Close drawer when route changes — covers the case where someone
  // taps a link inside the drawer.
  useEffect(() => {
    setDrawerOpen(false);
  }, [pathname]);

  // 2026-05-13 (#156): Trimmed nav down to a single entry for the
  // Facebook launch share. Goal is to point everyone who lands here
  // straight at /drugbox without sidebar distractions. /about,
  // /pharmacy, /projects, /tech, /contact routes still exist (typed
  // URLs and footer links work); their nav entries will come back as
  // each room gets fresher content worth showing off. Re-enable by
  // un-commenting below.
  const links: { href: string; label: { th: string; en: string } }[] = [
    // { href: '/about', label: { th: 'เกี่ยวกับ', en: 'About' } },
    // { href: '/pharmacy', label: { th: 'ยา', en: 'Pharmacy' } },
    // { href: '/projects', label: { th: 'ผลงาน', en: 'Projects' } },
    { href: '/drugbox', label: { th: 'DrugBox', en: 'DrugBox' } },
    // { href: '/tech', label: { th: 'Tech', en: 'Tech' } },
    // { href: '/contact', label: { th: 'ติดต่อ', en: 'Contact' } },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-stone-50/80 border-b border-stone-200">
        <div className="max-w-5xl mx-auto px-5 py-3 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="font-extrabold text-lg text-teal-700 tracking-tight"
          >
            kob <span className="text-gray-400 font-normal">·</span>{' '}
            <span className="font-thai">กบ</span>
          </Link>

          {/* Desktop inline nav */}
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

          {/* Right side — lang toggle (always) + hamburger (mobile only) */}
          <div className="flex items-center gap-1">
            <LangToggle />
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:bg-teal-50 hover:text-teal-700 transition-colors"
              aria-label="Open menu"
              aria-expanded={drawerOpen}
            >
              {/* hamburger icon */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="3" y1="6" x2="17" y2="6" />
                <line x1="3" y1="10" x2="17" y2="10" />
                <line x1="3" y1="14" x2="17" y2="14" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer — left-side, slides in from off-screen */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${
          drawerOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        aria-hidden={!drawerOpen}
      >
        {/* Backdrop */}
        <div
          onClick={() => setDrawerOpen(false)}
          className={`absolute inset-0 bg-black/30 transition-opacity duration-200 ${
            drawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Panel */}
        <aside
          className={`absolute left-0 top-0 bottom-0 w-72 max-w-[80vw] bg-stone-50 border-r border-stone-200 shadow-xl transition-transform duration-200 ease-out ${
            drawerOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-stone-200">
            <span className="font-extrabold text-lg text-teal-700 tracking-tight">
              kob <span className="text-gray-400 font-normal">·</span>{' '}
              <span className="font-thai">กบ</span>
            </span>
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-stone-200 transition-colors"
              aria-label="Close menu"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <line x1="5" y1="5" x2="15" y2="15" />
                <line x1="15" y1="5" x2="5" y2="15" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-col py-3">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setDrawerOpen(false)}
                  className={`px-5 py-3 text-base transition-colors ${
                    active
                      ? 'text-teal-700 font-semibold bg-teal-50'
                      : 'text-gray-700 hover:text-teal-700 hover:bg-teal-50'
                  }`}
                >
                  {t(l.label)}
                </Link>
              );
            })}
          </nav>
        </aside>
      </div>
    </>
  );
}
