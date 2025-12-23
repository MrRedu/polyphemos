import { Blog } from '@/components/organisms/blog';
import { getBlogPage, getArticles } from '@/lib/strapi';

export async function generateMetadata() {
  const blogPage = await getBlogPage();
  return {
    title: blogPage.title,
    description: blogPage.description,
  };
}

export default async function HomePage() {
  const { articles, meta } = await getArticles({ page: 1 });

  return (
    <>
      <Blog initialArticles={articles} initialMeta={meta} />
    </>
  );
}
