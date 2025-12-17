import { cn } from '@/lib/utils';
import { CardPost } from '../molecules/card-post';

// Mover Post a otro lugar
type Post = {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tags?: string[];
};

interface BlogProps {
  heading?: string;
  description?: string;
  posts: Post[];
  className?: string;
}

export const Blog = ({
  heading = 'Blog Posts',
  description = 'Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.',
  posts,
  className,
}: BlogProps) => {
  return (
    <section className={cn('py-32', className)}>
      <div className="container flex flex-col items-center gap-16">
        <div className="text-center">
          <h2 className="mx-auto mb-6 text-3xl font-semibold text-pretty md:text-4xl lg:max-w-3xl">
            {heading}
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="grid gap-y-10 sm:grid-cols-12 sm:gap-y-12 md:gap-y-16 lg:gap-y-20">
          {posts.map((post) => (
            <CardPost key={post.id} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};
