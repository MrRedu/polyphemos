import type { Metadata } from 'next';
import { Cormorant, Raleway } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';

const cormorant = Cormorant({
  variable: '--font-cormorant',
  subsets: ['latin'],
});

const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Polyphemos',
    default: 'Polyphemos',
  },
  description:
    'Polyphemos es tu fuente definitiva para todo lo relacionado con la programación y el desarrollo web. En Polyphemos, nos apasiona explorar y aprender sobre el desarrollo de productos digitales innovadores, especialmente en el ámbito web.',
  keywords: [
    'desarrollo web',
    'programación web',
    'front-end development',
    'productos digitales',
    'desarrollo web innovador',
    'tutoriales desarrollo web front-end',
    'programación productos digitales web',
    'explorar programación web Polyphemos',
    'guías front-end productos innovadores',
    'Polyphemos desarrollo web',
    'innovación web front-end',
    'crear productos digitales web',
    'pasión desarrollo web',
  ],
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
    <html lang="en">
      <body className={`${cormorant.variable} ${raleway.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
