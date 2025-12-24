import { Blog } from '@/components/organisms/blog';
import { getBlogPage, getArticles } from '@/lib/strapi';
import type { Label } from '@/types/types';

interface HomePageProps {
  searchParams: {
    label: string;
  };
}

export async function generateMetadata() {
  const blogPage = await getBlogPage();
  return {
    title: blogPage?.title || 'Blog',
    description: blogPage?.description || undefined,
  };
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { label } = await searchParams;
  const { articles, meta } = await getArticles({
    page: 1,
    label: label as Label,
  });

  // console.log(label);

  return (
    <>
      <Blog
        key={label}
        initialArticles={articles}
        initialMeta={meta}
        currentLabel={(label as Label) || 'Todos'}
      />
    </>
  );
}
