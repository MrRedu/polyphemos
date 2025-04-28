interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  return (
    <>
      <h2>{`Article ${slug}`}</h2>
    </>
  )
}
