import { type BlocksContent } from '@strapi/blocks-react-renderer'

type Cover = {
  url: string
  name: string
  alternativeText: string
  width: number
  height: number
}

export type Label = 'Todos' | 'Desarrollo' | 'IA' | 'Diseño'

export type Article = {
  slug: string
  title: string
  content: BlocksContent
  summary: string
  label: Label
  author: string
  published: string
  cover: Cover
}

export type MetaResponse = {
  page: number
  pageSize: number
  pageCount: number
  total: number
}
