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
  const wordCount = plainText.trim().split(/\s+/).length;

  return Math.ceil(wordCount / wordsPerMinute);
}

function extractPlainText(blocks: BlocksContent): string {
  return blocks
    .map((block) => {
      if (block.children) {
        return block.children
          .map((child) => (child.type === 'text' && child.text) || '')
          .join(' ');
      }
      return '';
    })
    .join(' ');
}
