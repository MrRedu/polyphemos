'use client';
import { useState, useEffect } from 'react';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

import { MoveLeft, MoveRight, SearchIcon } from 'lucide-react';
import { Input } from '../ui/input';
import { Kbd } from '../ui/kbd';
import Link from 'next/link';

const LABELS = [
  {
    label: 'Development',
    href: '#development',
  },
  {
    label: 'IA',
    href: '#ia',
  },
  {
    label: 'Design',
    href: '#design',
  },
];

interface NavBlogProps {
  availableArticleTitles: { title: string; slug: string }[];
}

export const NavBlog = ({ availableArticleTitles }: NavBlogProps) => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  return (
    <>
      <nav className="w-full flex items-center justify-between">
        <ul className="flex gap-4 text-muted-foreground font-medium">
          <li>
            <a href="#all">All</a>
          </li>
          {LABELS.map((label) => (
            <li key={label.label}>
              <a href={label.href}>{label.label}</a>
            </li>
          ))}
        </ul>

        <div>
          <div className="relative w-full max-w-xs">
            <Input
              name="search"
              className="peer h-8 ps-8 pe-10 rounded-full"
              placeholder={'Search...'}
              type="search"
              onClick={() => setOpen(true)}
            />
            <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-2 peer-disabled:opacity-50">
              <SearchIcon size={16} />
            </div>
            <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-2">
              <Kbd>{'⌘K'}</Kbd>
            </div>
          </div>
        </div>
      </nav>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigation">
            {availableArticleTitles.map((article) => (
              <CommandItem key={article.slug}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="flex gap-2 items-center"
                >
                  <MoveRight size={14} />
                  <span className="ml-2">{article.title}</span>
                </Link>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};
