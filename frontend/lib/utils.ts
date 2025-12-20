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

export function calculateReadingMinutes(text: string): number {
  const wordsPerMinute = 225;
  const wordCount = text.trim().split(/\s+/).length;

  return Math.ceil(wordCount / wordsPerMinute);
}
