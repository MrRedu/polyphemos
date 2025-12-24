import { BlocksContent } from '@strapi/blocks-react-renderer';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Internacionalizar
export function formatDate(date: string): string | undefined {
  if (!date) return;

  return new Intl.DateTimeFormat('es', {
    weekday: 'short',
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  }).format(new Date(date));
}

export function calculateReadingMinutes(content: BlocksContent): number {
  const wordsPerMinute = 225;

  const plainText = extractPlainText(content);
  const wordCount = plainText?.trim().split(/\s+/).length;

  return Math.ceil(wordCount / wordsPerMinute);
}

function extractPlainText(blocks: BlocksContent): string {
  return blocks
    ?.map((block) => {
      if (block.children) {
        return block.children
          .map((child) => (child.type === 'text' && child.text) || '')
          .join(' ');
      }
      return '';
    })
    .join(' ');
}

export const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-');
};

export function getTableOfContents(content: BlocksContent) {
  return content
    ?.filter((node) => node.type === 'heading')
    .map((heading) => {
      // Extraemos el texto plano de los hijos del heading
      // 👀
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const text = heading.children.map((child: any) => child.text).join('');

      // Generamos el ID (slug)
      const id = slugify(text);

      return {
        id,
        text,
        level: heading.level, // 1, 2, 3, etc.
      };
    });
}
