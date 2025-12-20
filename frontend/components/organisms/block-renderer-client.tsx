'use client';
import Image from 'next/image';

import {
  BlocksRenderer,
  type BlocksContent,
} from '@strapi/blocks-react-renderer';
import Link from 'next/link';
import { Typography } from '../ui/typography';
import { relative } from 'path';

export const BlockRendererClient = ({
  content,
}: {
  readonly content: BlocksContent;
}) => {
  if (!content) return null;

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        heading: ({ children, level }) => {
          switch (level) {
            case 1:
              return <Typography variant="h1">{children}</Typography>;
            case 2:
              return <Typography variant="h2">{children}</Typography>;
            case 3:
              return <Typography variant="h3">{children}</Typography>;
            case 4:
              return <Typography variant="h4">{children}</Typography>;
            case 5:
              return <Typography variant="h5">{children}</Typography>;
            case 6:
              return <Typography variant="h6">{children}</Typography>;
            default:
              return <Typography variant="h1">{children}</Typography>;
          }
        },
        paragraph: ({ children }) => (
          <Typography variant="p">{children}</Typography>
        ),
        quote: ({ children }) => (
          <Typography variant="blockquote">{children}</Typography>
        ),
        code: ({ children }) => (
          <Typography variant="code">{children}</Typography>
        ),
        image: ({ image }) => {
          // console.log(image);
          return (
            // <Image
            //   src={image.url}
            //   width={image.width}
            //   height={image.height}
            //   alt={image.alternativeText || ''}
            // />
            <img src={image.url} alt={image.alternativeText || ''} />
          );
        },
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
      }}
    />
  );
};
