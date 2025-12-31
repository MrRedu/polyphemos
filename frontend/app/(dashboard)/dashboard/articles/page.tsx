import { getArticles } from '@/lib/strapi'
import { Article } from '@/types/types'
import Link from 'next/link'

export default async function ArticlesPage() {
  const { articles, meta } = await getArticles({})

  return (
    <>
      <h2>{`</Page> ${JSON.stringify(meta, undefined, 2)}`}</h2>
      <ul>
        {articles.map((article: Article) => (
          <li key={article.slug}>
            <Link href={`/dashboard/articles/${article.slug}`}>
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
      {/* <pre className="overflow-scroll max-h-[400px] max-w-md p-8">
        {JSON.stringify(articles, null, 2)}
      </pre> */}
    </>
  )
}
