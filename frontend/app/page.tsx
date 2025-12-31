import { Blog } from '@/components/organisms/blog'
import { getHomePage, getArticles } from '@/lib/strapi'
import type { Label } from '@/types/types'

interface HomePageProps {
  searchParams: {
    label: string
  }
}

export async function generateMetadata() {
  const homePage = await getHomePage()
  return {
    title: homePage?.title || 'Blog',
    description: homePage?.description,
  }
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { label } = await searchParams
  const { articles, meta } = await getArticles({
    page: 1,
    label: label as Label,
  })

  return (
    <>
      <Blog
        key={label}
        initialArticles={articles}
        initialMeta={meta}
        currentLabel={(label as Label) || 'Todos'}
      />
    </>
  )
}
