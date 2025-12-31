'use client'

import React from 'react'
import { BlocksContent, BlocksRenderer } from '@strapi/blocks-react-renderer'
import { Typography } from '../ui/typography'
import Link from 'next/link'
import { slugify } from '@/lib/utils'
import Image from 'next/image'
import ShikiHighlighter from 'react-shiki/web'

export const BlockRendererClient = ({
  content,
}: {
  readonly content: BlocksContent
}) => {
  if (!content) return null

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        heading: ({ children, level }) => {
          // 👀
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const childrenArray = React.Children.toArray(children) as any[]
          const textContent = childrenArray[0]?.props?.text || ''
          const headingId = slugify(textContent)

          switch (level) {
            case 1:
              return (
                <Typography variant="h1" id={headingId}>
                  {children}
                </Typography>
              )
            case 2:
              return (
                <Typography variant="h2" id={headingId}>
                  {children}
                </Typography>
              )
            case 3:
              return (
                <Typography variant="h3" id={headingId}>
                  {children}
                </Typography>
              )
            case 4:
              return (
                <Typography variant="h4" id={headingId}>
                  {children}
                </Typography>
              )
            case 5:
              return (
                <Typography variant="h5" id={headingId}>
                  {children}
                </Typography>
              )
            case 6:
              return (
                <Typography variant="h6" id={headingId}>
                  {children}
                </Typography>
              )
            default:
              return (
                <Typography variant="h1" id={headingId}>
                  {children}
                </Typography>
              )
          }
        },
        paragraph: ({ children }) => (
          <Typography variant="p">{children}</Typography>
        ),
        quote: ({ children }) => (
          <Typography variant="blockquote">{children}</Typography>
        ),
        // 👀
        // @ts-expect-error Type 'string' is not assignable to type 'string | undefined'.
        code: ({ plainText, language }) => {
          return (
            <ShikiHighlighter
              language={language}
              theme={{
                light: 'github-light',
                dark: 'github-dark',
              }}
              defaultColor="dark"
              showLineNumbers
            >
              {plainText?.trim() as string}
            </ShikiHighlighter>
          )
        },
        image: ({ image }) => (
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.alternativeText || ''}
            className="w-full h-full min-h-full object-cover"
          />
        ),
        link: ({ children, url }) => (
          <Link
            href={url || '#'}
            target={'_blank'}
            rel={'noopener noreferrer'}
            className="underline font-medium"
          >
            {children}
          </Link>
        ),
        list: ({ children, format }) => {
          if (format === 'unordered')
            return <ul className="list-disc list-inside">{children}</ul>
          return <ol className="list-decimal list-inside">{children}</ol>
        },
        'list-item': ({ children }) => <li>{children}</li>,
      }}
      modifiers={{
        bold: ({ children }) => <span className="font-bold">{children}</span>,
        italic: ({ children }) => <span className="italic">{children}</span>,
        underline: ({ children }) => (
          <span className="underline">{children}</span>
        ),
        strikethrough: ({ children }) => (
          <span className="line-through">{children}</span>
        ),
        code: ({ children }) => (
          <Typography variant="code">{children}</Typography>
        ),
      }}
    />
  )
}
