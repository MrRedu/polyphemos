import { STRAPI_BASE_URL } from '@/lib/strapi';
import { cn } from '@/lib/utils';
import { Article } from '@/types/types';
import { ArrowRight, MoveRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogProps {
  articles: Article[];
  className?: string;
}

export const Blog = ({ articles, className }: BlogProps) => {
  return (
    <section className={cn('py-32', className)}>
      <div className="container flex flex-col items-center gap-16 mx-auto w-full">
        <nav className="flex gap-2">
          <p>hihi</p>
          <p>hihi</p>
          <p>hihi</p>
          <p>hihi</p>
          <p>hihi</p>
        </nav>
        <div className="grid md:grid-cols-2 gap-16">
          {articles.map((article, index) => (
            <Link
              key={`${article.title}-${index}`}
              href={`/blog/${article.title.toLowerCase().replace(/ /g, '-')}`}
              className="relative rounded-sm group"
            >
              <div className="overflow-hidden rounded-sm">
                <img
                  src={`${STRAPI_BASE_URL}${article.multimedia[0].url}`}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-102 duration-100 ease-in"
                  // width={400}
                  // height={400}
                  // quality={100}
                  // priority
                />
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground text-sm">
                    {article.author}
                    <span className="inline-block mx-1">{` · `}</span>
                    {article.published}
                  </span>
                  <MoveRight className="size-4 opacity-0 -translate-x-2  group-hover:translate-x-0 group-hover:opacity-100 duration-300 ease-in" />
                </div>
                <h3 className="text-xl font-semibold ">{article.title}</h3>
                {/* <span>{article.label}</span> */}
                {/* <span>{article.tags}</span> */}
                <span className="text-muted-foreground text-pretty">
                  {article.summary}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
