// lib/lang.ts
//
// Tiny client-side language toggle. Site is TH-first, EN secondary —
// so we default to TH and persist the user's choice in localStorage.
// No router param, no SSR shenanigans; pages are static.

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
  // SSR-safe: start with TH, hydrate from localStorage on mount.
  const [lang, setLangState] = useState<Lang>('th');

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
