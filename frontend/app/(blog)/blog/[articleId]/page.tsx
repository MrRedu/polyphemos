import { getArticleById } from '@/lib/strapi';

interface ArticlePageProps {
  params: {
    articleId: string;
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articleId } = await params;
  const article = await getArticleById(articleId);

  return (
    <>
      <h2>{`Page ${articleId}`}</h2>
      <pre>{JSON.stringify(article, null, 2)}</pre>
    </>
  );
}
