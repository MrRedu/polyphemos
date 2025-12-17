import { Blog } from '@/components/organisms/blog-posts';
import { posts } from '@/lib/constants';

export default function HomePage() {
  return (
    <>
      <Blog posts={posts} />
    </>
  );
}
