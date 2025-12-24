import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { Header, Footer } from '@/components/landing';
import { DashboardAccessFab } from '@/components/molecules/dashboard-access-fab';
import { Suspense } from 'react';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Polyphemos',
    default: 'Polyphemos',
  },
  description:
    'Polyphemos es tu fuente definitiva para todo lo relacionado con la programación y el desarrollo web. En Polyphemos, nos apasiona explorar y aprender sobre el desarrollo de productos digitales innovadores, especialmente en el ámbito web.',
  keywords: ['desarrollo web', 'programación web', 'front-end'],
  authors: [{ name: 'Eduardo', url: 'https://github.com/MrRedu' }],
  creator: 'Eduardo',
  category: 'technology',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} antialiased 
      bg-[#f7f7f7] dark:bg-[#121212]
      `}
      >
        {/* Background dots */}
        <div
          className="
        fixed inset-0 bg-size-[16px_16px] -z-10
        bg-[radial-gradient(circle,#73737350_1px,transparent_1px)] 
        "
        />
        <Providers>
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          {children}
          <DashboardAccessFab />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
