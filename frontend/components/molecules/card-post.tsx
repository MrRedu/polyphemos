import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

interface CardPostProps {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tags?: string[];
}

export const CardPost = ({
  title,
  summary,
  // label,
  author,
  published,
  url,
  image,
  tags,
}: CardPostProps) => {
  return (
    <Card className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2">
      <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-center md:gap-x-8 lg:gap-x-12">
        <div className="sm:col-span-5">
          <div className="mb-4 md:mb-6">
            <div className="flex flex-wrap gap-3 text-xs tracking-wider text-muted-foreground uppercase md:gap-5 lg:gap-6">
              {tags?.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
          <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            <a href={url} target="_blank" className="hover:underline">
              {title}
            </a>
          </h3>
          <p className="mt-4 text-muted-foreground md:mt-5">{summary}</p>
          <div className="mt-6 flex items-center space-x-4 text-sm md:mt-8">
            <span className="text-muted-foreground">{author}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">{published}</span>
          </div>
          <div className="mt-6 flex items-center space-x-2 md:mt-8">
            <a
              href={url}
              target="_blank"
              className="inline-flex items-center font-semibold hover:underline md:text-base"
            >
              <span>Read more</span>
              <ArrowRight className="ml-2 size-4 transition-transform" />
            </a>
          </div>
        </div>
        <div className="order-first sm:order-last sm:col-span-5">
          <a href={url} target="_blank" className="block">
            <div className="aspect-16/9 overflow-clip rounded-lg border border-border">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-opacity duration-200 fade-in hover:opacity-70"
              />
            </div>
          </a>
        </div>
      </div>
    </Card>
  );
};
