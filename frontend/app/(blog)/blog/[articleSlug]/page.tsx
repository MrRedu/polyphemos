import { getArticleById, STRAPI_BASE_URL } from '@/lib/strapi';
import { calculateReadingMinutes, cn, formatDate } from '@/lib/utils';
import { Article } from '@/types/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface ArticlePageProps {
  params: {
    articleSlug: string;
  };
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { articleSlug } = await params;
  const article = await getArticleById(articleSlug);

  return {
    title: article.title,
    description: article.summary,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { articleSlug } = await params;
  const article: Article = await getArticleById(articleSlug);
  const imageUrl = `${STRAPI_BASE_URL}${article?.multimedia?.[0]?.url}`;

  if (!article) return notFound();

  return (
    <div className="my-auto flex w-full justify-center">
      <section className="pb-32 w-full">
        {/* Hero */}
        <div
          className={cn(
            `bg-muted bg-cover bg-repeat py-20 relative`,
            "before:content-[''] before:absolute before:inset-0 before:bg-white/30 before:backdrop-blur-xs before:z-0"
          )}
          style={{ backgroundImage: `url('${imageUrl}')` }}
        >
          <div className="container relative z-10 flex flex-col items-start justify-start gap-16 py-20 lg:flex-row lg:items-end lg:justify-between mx-auto px-8">
            <div className="flex w-full flex-col items-center justify-center gap-12 ">
              <div className="flex w-full max-w-[42rem] flex-col items-center justify-center gap-8">
                <nav>
                  <Link href="#">{article.label}</Link>
                  {` / `}
                  <Link href="/blog">Blog</Link>
                </nav>
                <div className="flex w-full flex-col gap-5">
                  <div className="flex items-center justify-center gap-2.5 text-sm font-medium text-foreground/60">
                    {/* <div>10 min read</div> */}
                    <div>
                      {calculateReadingMinutes(article.content)} min read{' '}
                    </div>
                    <div>{` | `}</div>
                    {/* <div>May 18, 2025</div> */}
                    <div>{formatDate(article.published)}</div>
                  </div>
                  <h1 className="text-center text-[2.5rem] leading-[1.2] font-semibold md:text-5xl lg:text-6xl">
                    {article.title}
                  </h1>
                  <p className="text-center text-xl leading-[1.4] font-semibold text-foreground">
                    {article.summary}
                  </p>
                  <div className="flex items-center justify-center gap-2.5">
                    Redes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Content */}
        <div className="container pt-20 px-8 mx-auto">
          <div className="relative mx-auto w-full max-w-5xl items-start justify-between gap-20 lg:flex">
            {/* Navigation */}
            <div className="top-20 flex-1 bg-background pb-10 lg:sticky lg:pb-0">
              <div className="text-xl leading-snug font-medium">Chapters</div>
              <div className="flex flex-col gap-2 pt-2 pl-2">
                <a
                  href="#heading-1"
                  className="block text-sm leading-normal font-medium text-muted-foreground transition duration-300 lg:rounded-md lg:bg-muted lg:p-2 lg:font-bold lg:!text-primary"
                >
                  The Role of UI Components in Development
                </a>
                <a
                  href="#heading-2"
                  className="block text-sm leading-normal font-medium text-muted-foreground transition duration-300 text-muted-foreground"
                >
                  Core Types of UI Components
                </a>
                <a
                  href="#heading-3"
                  className="block text-sm leading-normal font-medium text-muted-foreground transition duration-300 text-muted-foreground"
                >
                  End Paragraph
                </a>
              </div>
            </div>
            {/* Content */}
            <div className="flex w-full max-w-[40rem] flex-col gap-10">
              <pre className="whitespace-pre-wrap">
                {JSON.stringify(article, null, 2)}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
