import { NavArticle } from '@/components/molecules/nav-article'
import { BlockRendererClient } from '@/components/organisms/block-renderer-client'
import { getArticleById } from '@/lib/strapi'
import {
  calculateReadingMinutes,
  formatDate,
  getStrapiMedia,
  pluralizeWord,
} from '@/lib/utils'
import { Article } from '@/types/types'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface ArticlePageProps {
  params: {
    articleSlug: string
  }
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { articleSlug } = await params
  const article = await getArticleById(articleSlug)

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [
        {
          url: article.cover?.url,
          width: 800,
          height: 600,
          alt: article.title,
        },
        {
          url: article.cover?.url,
          width: 1800,
          height: 1600,
          alt: article.title,
        },
      ],
      siteName: 'Polyphemos',
      type: 'website',
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articleSlug } = await params
  const article: Article = await getArticleById(articleSlug)
  const imageUrl = getStrapiMedia(article.cover?.url || '')
  const readingMinutes = calculateReadingMinutes(article.content)

  if (!article) return notFound()

  return (
    <div className="my-auto flex w-full justify-center">
      <section className="pb-32 w-full">
        {/* Hero */}
        <div
          className={`
            bg-muted bg-cover bg-repeat py-4 relative min-h-svh grid items-center
            before:content-[''] before:absolute before:inset-0 before:bg-white/30 dark:before:bg-black/60 before:backdrop-blur-xs before:z-0
            `}
          style={{
            backgroundImage: `url('${
              imageUrl || '/placeholder/placeholder-1920x1080.webp'
            }')`,
          }}
        >
          <div className="container relative z-10 flex flex-col items-start justify-start gap-16 py-20 lg:flex-row lg:items-end lg:justify-between mx-auto px-8">
            <div className="flex w-full flex-col items-center justify-center gap-12 ">
              <div className="flex w-full max-w-[42rem] flex-col items-center justify-center gap-6">
                <nav className="text-sm font-medium text-foreground/60">
                  <Link
                    href={`/?label=${article.label}`}
                    className="hover:underline"
                  >
                    {article.label}
                  </Link>
                  {` / `}
                  <Link href="/" className="hover:underline">
                    Blog
                  </Link>
                </nav>
                <div className="flex w-full flex-col gap-5">
                  <div className="flex items-center justify-center gap-2.5 text-sm font-medium text-foreground/60">
                    <div>
                      {readingMinutes}{' '}
                      {pluralizeWord(readingMinutes, 'minuto', 'minutos')} de
                      lectura
                    </div>
                    <div>{` | `}</div>
                    {/* <div>May 18, 2025</div> */}
                    <div>{formatDate(article.published)}</div>
                  </div>
                  <h1 className="text-primary text-center text-[2.5rem] leading-[1.2] font-semibold md:text-5xl lg:text-6xl">
                    {article.title}
                  </h1>
                  <p className="text-center text-xl leading-[1.4] font-semibold text-foreground/60">
                    {article.summary}
                  </p>
                  {/* <div className="flex items-center justify-center gap-2.5">
                    Redes
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Article content */}
        <div className="container pt-20 px-8 mx-auto">
          <div className="relative mx-auto w-full max-w-5xl items-start justify-between gap-20 lg:flex">
            {/* Navigation */}
            <div className="top-20 flex-1 pb-10 lg:sticky lg:pb-0">
              <NavArticle content={article?.content} />
            </div>
            {/* Content */}
            <div className="flex w-full max-w-[40rem] flex-col gap-10 min-h-[50vh]">
              <div className="">
                <BlockRendererClient content={article?.content} />
              </div>
              {/* <pre className="whitespace-pre-wrap">
                {JSON.stringify(article, null, 2)}
              </pre> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
