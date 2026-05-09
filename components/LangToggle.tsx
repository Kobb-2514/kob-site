'use client';

import { useLang } from '@/lib/lang';

export default function LangToggle() {
  const { lang, setLang } = useLang();

  return (
    <button
      type="button"
      onClick={() => setLang(lang === 'th' ? 'en' : 'th')}
      className="text-xs font-semibold tracking-wider uppercase text-gray-500 hover:text-teal-700 transition-colors px-2 py-1 rounded-md hover:bg-teal-50"
      aria-label={`Switch to ${lang === 'th' ? 'English' : 'Thai'}`}
    >
      {lang === 'th' ? 'EN' : 'TH'}
    </button>
  );
}
