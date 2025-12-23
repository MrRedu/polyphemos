'use client';
import { getTableOfContents } from '@/lib/utils';
import { type BlocksContent } from '@strapi/blocks-react-renderer';
import Link from 'next/link';
import { useMemo } from 'react';

interface NavArticleProps {
  content: BlocksContent;
}

export const NavArticle = ({ content }: NavArticleProps) => {
  const toc = useMemo(() => getTableOfContents(content), [content]);

  return (
    <aside className="w-64 ">
      <nav>
        <p className="text-xl leading-snug font-medium">Secciones</p>
        <ul className="flex flex-col gap-2 pt-2 pl-2">
          {toc?.map((item) => (
            <li
              key={item.id}
              style={{ marginLeft: `${(item.level - 1) * 12}px` }}
            >
              <Link
                href={`#${item.id}`}
                className="block text-sm leading-normal font-medium text-muted-foreground transition duration-300"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
