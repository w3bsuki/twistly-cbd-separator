'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface InfiniteSliderProps {
  children: React.ReactNode;
  gap?: number;
  duration?: number;
  reverse?: boolean;
  className?: string;
}

export function InfiniteSlider({
  children,
  gap = 16,
  duration = 25,
  reverse = false,
  className,
}: InfiniteSliderProps) {
  return (
    <div className={cn('overflow-hidden', className)}>
      <motion.div
        className="flex w-max"
        animate={{
          x: reverse ? [0, -50 + '%'] : [-50 + '%', 0],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          gap: `${gap}px`,
        }}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
} 