import type { Article } from '@/types/types';
import { cn, formatDate } from '@/lib/utils';
import { MoveRight } from 'lucide-react';
import Link from 'next/link';

interface CardArticleProps
  extends Pick<Article, 'slug' | 'title' | 'summary' | 'author' | 'published'> {
  imageUrl: Article['cover']['url'];
  isSecondary?: boolean;
}

export const CardArticle = ({
  slug,
  title,
  summary,
  author,
  published,
  imageUrl,
  isSecondary,
}: CardArticleProps) => {
  return (
    <Link href={`/blog/${slug}`} className="relative rounded-sm group">
      <div
        className={cn(
          'overflow-hidden rounded-sm group-hover:shadow-lg w-full h-[260px]',
          {
            'h-[160px]': isSecondary,
          }
        )}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full min-h-full object-cover group-hover:scale-102 duration-200 ease-in"
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center justify-between">
          <span className="text-muted-foreground text-sm">
            {author}
            <span className="inline-block mx-1">{` · `}</span>
            {formatDate(published)}
          </span>
          <MoveRight className="size-4 opacity-0 -translate-x-2  group-hover:translate-x-0 group-hover:opacity-100 duration-300 ease-in" />
        </div>
        <h3
          className={cn('text-xl font-semibold', {
            'text-base': isSecondary,
          })}
        >
          {title}
        </h3>
        {!isSecondary && (
          <span className="text-muted-foreground text-pretty">{summary}</span>
        )}
      </div>
    </Link>
  );
};
