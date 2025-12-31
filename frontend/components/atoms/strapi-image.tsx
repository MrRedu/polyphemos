import { cn, getStrapiMedia } from '@/lib/utils';
import Image from 'next/image';

interface StrapiImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function StrapiImage({
  src,
  alt,
  width,
  height,
  className,
  ...props
}: StrapiImageProps) {
  const imageUrl = getStrapiMedia(src);

  return (
    <Image
      src={imageUrl || '/placeholder/placeholder-1920x1080.webp'}
      alt={alt || 'Imagen'}
      width={width || 800}
      height={height || 450}
      className={cn('w-full h-full min-h-full object-cover', className)}
      {...props}
    />
  );
}
