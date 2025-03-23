'use client';

import React from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends Omit<ImageProps, 'alt'> {
  alt: string;
  aspectRatio?: 'square' | '16:9' | '4:3' | '3:2' | '1:1';
  className?: string;
  wrapperClassName?: string;
  coverClassName?: string;
}

/**
 * OptimizedImage - A wrapper around Next.js Image component with best practices
 * for performance and responsive behavior.
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  aspectRatio = '1:1',
  className,
  wrapperClassName,
  coverClassName,
  fill = true,
  sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw',
  quality = 85,
  priority = false,
  ...props
}) => {
  // Calculate aspect ratio
  const getAspectRatioClass = () => {
    switch (aspectRatio) {
      case 'square':
      case '1:1':
        return 'aspect-square';
      case '16:9':
        return 'aspect-video';
      case '4:3':
        return 'aspect-4/3';
      case '3:2':
        return 'aspect-3/2';
      default:
        return 'aspect-square';
    }
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-gray-100 dark:bg-gray-800',
        getAspectRatioClass(),
        wrapperClassName
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        quality={quality}
        priority={priority}
        className={cn(
          'object-cover transition-all',
          coverClassName,
          className
        )}
        {...props}
      />
    </div>
  );
}; 