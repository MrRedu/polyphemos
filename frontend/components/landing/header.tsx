'use client';

import { NAV_LABELS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import { Button } from '../ui/button';

export const Header = () => {
  const pathname = usePathname(); // "/" | "/blog/<articleSlug>"
  const searchParams = useSearchParams();
  const activeLabel = searchParams.get('label'); // ?label=<value> | ?label=Desarrollo
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const sharedStyles =
    'fixed z-50 top-3 flex items-center justify-between gap-6 py-6 px-8 shadow-xs bg-white dark:bg-black/30 dark:backdrop-blur-lg max-h-[4.5rem]';

  return (
    <header>
      <div className={`${sharedStyles} rounded-r-full left-0`}>
        <Link href={'/'} className="font-bold" title="Go to home page">
          <h1>Polyphemos</h1>
        </Link>
      </div>
      <div
        className={`rounded-l-full right-0 ${sharedStyles} text-muted-foreground`}
      >
        {pathname === '/' && (
          <nav>
            <ul className="flex space-x-6 font-medium">
              {NAV_LABELS.map((label) => (
                <li key={label.label}>
                  <Link
                    href={label.href}
                    className={cn('', {
                      'font-bold': activeLabel === label.label,
                    })}
                  >
                    {label.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
        <div>
          <Button type="button" onClick={toggleTheme} variant="ghost">
            <Sun className="size-4 " />
          </Button>
        </div>
        <div className="font-medium">
          <Link href={'#'} className="underline font-bold">
            ES
          </Link>
          <span>{' / '}</span>
          <Link href={'#'}>EN</Link>
        </div>
      </div>
    </header>
  );
};
