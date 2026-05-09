import type { Metadata } from 'next';
import './globals.css';
import { LangProvider } from '@/lib/lang';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'kob — pharmacist who codes',
  description:
    'เภสัชกรที่หลงเข้าวงการเขียน code · maker of DrugBox Care · บันทึกเรื่องยา การเขียนแอป และความพยายามจะเอาสองอย่างมาเจอกัน',
  openGraph: {
    title: 'kob — pharmacist who codes',
    description:
      'เภสัชกรที่หลงเข้าวงการเขียน code · maker of DrugBox Care',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>
        <LangProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LangProvider>
      </body>
    </html>
  );
}
