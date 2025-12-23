'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { Article, MetaResponse } from '@/types/types';
import { NavBlog } from '@/components/molecules/nav-blog';
import { CardArticle } from '@/components/molecules/card-article';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { getArticles } from '@/lib/strapi';

interface BlogProps {
  initialArticles: Article[];
  initialMeta: MetaResponse;
  className?: string;
}

export const Blog = ({
  initialArticles,
  initialMeta,
  className,
}: BlogProps) => {
  const [articles, setArticles] = useState(initialArticles);
  const [pagination, setPagination] = useState(initialMeta);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    const nextPage = pagination.page + 1;
    setLoading(true);

    try {
      const { articles: newArticles, meta } = await getArticles({
        page: nextPage,
      });

      // Concatenamos los artículos nuevos a los existentes
      setArticles((prev) => [...prev, ...newArticles]);
      setPagination(meta);
    } catch (error) {
      console.error('Error cargando más artículos', error);
    } finally {
      setLoading(false);
    }
  };

  const availableArticleTitles = articles.map((article) => {
    return { title: article.title, slug: article.slug };
  });

  const hasMore = pagination.page < pagination.pageCount;

  return (
    <section className={cn('py-32 px-2', className)}>
      <div className="container flex flex-col items-center gap-8 mx-auto w-full">
        <NavBlog availableArticleTitles={availableArticleTitles} />
        <div className="grid md:grid-cols-2 gap-16 ">
          {articles.slice(0, 4).map((article, index) => (
            <CardArticle
              key={`${article.slug}-${index}`}
              slug={article.slug}
              title={article.title}
              summary={article.summary}
              author={article.author}
              published={article.published}
              imageUrl={article.cover?.url}
            />
          ))}
        </div>
        <Separator className="my-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 ">
          {articles.slice(4).map((article, index) => (
            <CardArticle
              key={`${article.slug}-${index}`}
              slug={article.slug}
              title={article.title}
              summary={article.summary}
              author={article.author}
              published={article.published}
              imageUrl={article.cover?.url}
              isSecondary
            />
          ))}
        </div>
        {hasMore && (
          <div className="flex items-center justify-center mt-16">
            <Button
              variant="outline"
              size="lg"
              onClick={loadMore}
              disabled={loading}
            >
              {loading ? 'Cargando...' : 'Cargar más'}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
