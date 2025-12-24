import { FOOTER_LINKS } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="py-16 w-full">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="rounded-lg p-8 md:p-16">
          <div className="mb-6 border-b border-border pb-6 text-left md:mb-8 md:pb-8 md:text-center">
            <h3 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl">
              Polyphemos
            </h3>
          </div>
          <div className="mb-12 flex flex-col gap-8 md:mb-16 lg:flex-row lg:justify-between lg:gap-4 xl:gap-8">
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-sm font-medium tracking-wide text-primary uppercase">
                Email
              </h3>
              <Link
                href="mailto:mr.redu.dev@gmail.com"
                className="flex items-center gap-2 text-base text-muted-foreground transition-colors hover:text-primary md:text-lg"
              >
                {`mr.redu.dev@gmail.com`}
                <ArrowUpRight size={16} />
              </Link>
            </div>

            <div className="flex flex-col items-start gap-4">
              <h3 className="text-sm font-medium tracking-wide text-primary uppercase">
                GitHub
              </h3>
              <a
                href="https://github.com/MrRedu/"
                className="flex items-center gap-2 text-base text-muted-foreground transition-colors hover:text-primary md:text-lg"
              >
                {`@MrRedu`}
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 py-6 md:flex-row md:items-center md:justify-between md:py-4">
          <nav className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            {FOOTER_LINKS.map((link, index) => (
              <Link
                key={`${link.href}-${index}`}
                href={link.href}
                target={link.target || undefined}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="text-sm text-muted-foreground md:text-right md:text-xs">
            Made with <strong>❤️</strong>
          </div>
        </div>
      </div>
    </footer>
  );
};
