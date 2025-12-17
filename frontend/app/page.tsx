import { HeroSection } from '@/components/landing/hero-section';
import { Blog } from '@/components/organisms/blog-posts';
import { getHomePage, STRAPI_BASE_URL } from '@/lib/strapi';

// export async function generateMetadata() {
//   const homePage = await getHomePage();
//   return {
//     title: homePage.title,
//     description: homePage.description,
//   };
// }

export default async function HomePage() {
  const homePage = await getHomePage();
  const blogSection = homePage.blogSection;
  const blogPosts = blogSection.CardPost.map((post) => {
    return {
      ...post,
      image: post.image.url.startsWith('http')
        ? post.image.url
        : `${STRAPI_BASE_URL}${post.image.url}`,
      url: `/posts/${post.id}`,
      tags: post.tags.split(','),
    };
  });

  return (
    <>
      <HeroSection />
      <Blog
        heading={blogSection.title}
        description={blogSection.description}
        posts={blogPosts}
        className="mx-auto max-w-7xl"
      />
    </>
  );
}
