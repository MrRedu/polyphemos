import { getArticleById } from '@/lib/strapi'

interface ArticlePageProps {
  params: {
    articleSlug: string
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articleSlug } = await params
  const article = await getArticleById(articleSlug)

  return (
    <>
      <h2>{`</Page> ${articleSlug}`}</h2>
      <pre>{JSON.stringify(article, null, 2)}</pre>
    </>
  )
}
