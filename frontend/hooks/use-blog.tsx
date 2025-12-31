import { useState } from 'react';
import { getArticles } from '@/lib/strapi';
import { Article, Label, MetaResponse } from '@/types/types';

interface useBlogProps {
  initialArticles: Article[];
  initialMeta: MetaResponse;
  currentLabel: Label;
}

export function useBlog({
  initialArticles,
  initialMeta,
  currentLabel,
}: useBlogProps) {
  const [articles, setArticles] = useState(initialArticles);
  const [pagination, setPagination] = useState(initialMeta);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = async () => {
    setLoading(true);

    try {
      const nextPage = pagination.page + 1;
      const { articles: newArticles, meta } = await getArticles({
        page: nextPage,
        label: currentLabel,
      });

      setArticles((prev) => [...prev, ...newArticles]);
      setPagination(meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const availableArticleTitles = articles.map((article) => {
    return { title: article.title, slug: article.slug };
  });
  const hasMore = pagination.page < pagination.pageCount;

  return {
    articles,
    pagination,
    loading,
    handleLoadMore,
    availableArticleTitles,
    hasMore,
  };
}
