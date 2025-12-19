// import { HeroSection } from '@/components/landing/hero-section';
// import { Blog } from '@/components/organisms/blog-posts';
// import { posts } from '@/lib/constants';
// import { getHomePage } from '@/lib/strapi';

import Link from 'next/link';

export default async function HomePage() {
  // const homePage = await getHomePage();
  // const blogSection = homePage?.blogSection;

  return (
    <>
      {/* <HeroSection /> */}
      {/* <Blog
        heading={blogSection.title}
        description={blogSection.description}
        posts={posts}
        className="mx-auto max-w-7xl"
      /> */}
      <Link href={'blog'}>Blog</Link>
    </>
  );
}
