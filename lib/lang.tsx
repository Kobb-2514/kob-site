// lib/lang.tsx
//
// Tiny client-side language toggle. Default is EN (decided 2026-05-09)
// because the nav reads cleaner without TH/EN mixed labels, and
// international visitors / recruiters land on something familiar.
// Returning Thai users keep their pick because we persist to
// localStorage. No router param, no SSR shenanigans; pages are static.

'use client';

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react';

export type Lang = 'th' | 'en';

type LangContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: <T extends Record<Lang, string>>(translations: T) => string;
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = 'kob-site-lang';

export function LangProvider({ children }: { children: ReactNode }) {
  // SSR-safe: start with EN (default), hydrate from localStorage on mount.
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'th' || stored === 'en') {
        setLangState(stored);
      }
    } catch {
      // localStorage blocked — keep default
    }
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      // ignore
    }
  }, []);

  const t = useCallback(
    <T extends Record<Lang, string>>(translations: T): string => translations[lang],
    [lang],
  );

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
