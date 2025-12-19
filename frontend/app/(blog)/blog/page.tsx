import { Blog } from '@/components/organisms/blog';
import { getBlogPage } from '@/lib/strapi';

export async function generateMetadata() {
  const blogPage = await getBlogPage();
  return {
    title: blogPage.title || 'Blog',
    description: blogPage.description,
  };
}

export default async function BlogPage() {
  // props: BlogPageProps
  const blogPage = await getBlogPage();
  console.log(blogPage);

  return (
    <>
      <Blog articles={blogPage.articles} />
    </>
  );
}
