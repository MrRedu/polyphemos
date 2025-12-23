'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { Article, Label, MetaResponse } from '@/types/types';
import { NavBlog } from '@/components/molecules/nav-blog';
import { CardArticle } from '@/components/molecules/card-article';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { getArticles } from '@/lib/strapi';
import { AnimatedGroup } from '@/components/ui/animated-group';

interface BlogProps {
  initialArticles: Article[];
  initialMeta: MetaResponse;
  currentLabel: Label;
  className?: string;
}

export const Blog = ({
  initialArticles,
  initialMeta,
  currentLabel,
  className,
}: BlogProps) => {
  const [articles, setArticles] = useState(initialArticles);
  const [pagination, setPagination] = useState(initialMeta);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    const nextPage = pagination.page + 1;
    setLoading(true);

    const { articles: newArticles, meta } = await getArticles({
      page: nextPage,
      label: currentLabel,
    });

    setArticles((prev) => [...prev, ...newArticles]);
    setPagination(meta);
    setLoading(false);
  };
  const availableArticleTitles = articles.map((article) => {
    return { title: article.title, slug: article.slug };
  });

  const hasMore = pagination.page < pagination.pageCount;

  return (
    <section className={cn('py-32 px-2', className)}>
      <div className="container flex flex-col items-center gap-8 mx-auto w-full">
        <NavBlog
          availableArticleTitles={availableArticleTitles}
          activeLabel={currentLabel}
        />
        <AnimatedGroup
          className="grid md:grid-cols-2 gap-16"
          preset="blur-slide"
        >
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
        </AnimatedGroup>
        <Separator className="my-4" />
        <AnimatedGroup
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 "
          preset="blur-slide"
        >
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
        </AnimatedGroup>
        {hasMore && (
          <div className="flex items-center justify-center mt-16">
            <Button
              variant="outline"
              size="lg"
              onClick={handleLoadMore}
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
