import { Blog } from '@/components/organisms/blog';
import { getArticles, getBlogPage } from '@/lib/strapi';

export async function generateMetadata() {
  const blogPage = await getBlogPage();
  return {
    title: blogPage.title || 'Blog',
    description: blogPage.description,
  };
}

export default async function BlogPage() {
  const articles = await getArticles();

  return (
    <>
      <Blog articles={articles} />
    </>
  );
}
