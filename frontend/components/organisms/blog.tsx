import { cn } from '@/lib/utils';
import { Article } from '@/types/types';
import { NavBlog } from '../molecules/nav-blog';
import { CardArticle } from '../molecules/card-article';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';

interface BlogProps {
  articles: Article[];
  className?: string;
}

export const Blog = ({ articles, className }: BlogProps) => {
  console.log('BlogComponent, articles:', articles);

  const availableArticleTitles = articles.map((article) => {
    return { title: article.title, slug: article.slug };
  });

  return (
    <section className={cn('py-32 px-2', className)}>
      <div className="container flex flex-col items-center gap-16 mx-auto w-full">
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
              imageUrl={article.multimedia[0].url}
            />
          ))}
        </div>
        <Separator className="my-4" />
        <div className="grid md:grid-cols-3 gap-16 ">
          {articles.slice(4).map((article, index) => (
            <CardArticle
              key={`${article.slug}-${index}`}
              slug={article.slug}
              title={article.title}
              summary={article.summary}
              author={article.author}
              published={article.published}
              imageUrl={article.multimedia[0].url}
              isSecondary
            />
          ))}
        </div>
        {articles.length > 4 && (
          <div className="flex items-center justify-center mt-16">
            <Button
              variant="outline"
              size="lg"
              // href="/blog"
              // className="text-sm font-semibold text-muted-foreground hover:underline"
            >
              Load more
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};
