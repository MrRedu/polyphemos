import { Blog } from '@/components/organisms/blog';
import { getArticles, getBlogPage } from '@/lib/strapi';

export async function generateMetadata() {
  const blogPage = await getBlogPage();
  return {
    title: {
      default: blogPage.title,
      template: `%s | ${blogPage.title}`,
    },
    description: blogPage.description,
  };
}

export default async function HomePage() {
  const articles = await getArticles();

  return (
    <>
      <Blog articles={articles} />
    </>
  );
}
