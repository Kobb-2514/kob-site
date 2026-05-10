'use client';

// components/Comments.tsx
//
// Giscus-based comment thread, dropped at the bottom of any page that
// wants discussion. Each page maps to its own GitHub Discussion via
// `mapping="pathname"` so /pharmacy, /tech, etc. have separate threads.
//
// IDs below are hardcoded — they're not secrets (giscus surfaces them
// publicly in the iframe URL) and hardcoding saves the per-environment
// env-var setup. Get fresh IDs from giscus.app if the repo or category
// changes.
//
// Setup checklist (one-time, on the GitHub side):
//   1. github.com/Kobb-2514/kob-site → Settings → Features → ✓ Discussions
//   2. Install the giscus GitHub App on the repo
//   3. Create a "Comments" category (Announcement type) in Discussions
//   4. Visit giscus.app → grab repoId + categoryId → paste below

import Giscus from '@giscus/react';
import { useLang } from '@/lib/lang';

const REPO = 'Kobb-2514/kob-site';
const REPO_ID = 'R_kgDOSYg80Q';
const CATEGORY = 'Comments';
const CATEGORY_ID = 'DIC_kwDOSYg80c4C8tuZ';

export default function Comments() {
  const { lang, t } = useLang();

  return (
    <section className="border-t border-stone-200 mt-16 pt-10">
      <h2 className="text-lg font-extrabold text-gray-900 mb-4">
        {t({ th: 'คอมเมนต์', en: 'comments' })}
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        {t({
          th: 'ใช้ GitHub account เพื่อ comment — markdown ใช้ได้, reaction ก็ได้',
          en: 'sign in with GitHub to comment — markdown supported, reactions too',
        })}
      </p>
      <Giscus
        id="comments"
        repo={REPO as `${string}/${string}`}
        repoId={REPO_ID}
        category={CATEGORY}
        categoryId={CATEGORY_ID}
        mapping="pathname"
        strict="0"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="light"
        lang={lang === 'th' ? 'th' : 'en'}
        loading="lazy"
      />
    </section>
  );
}
