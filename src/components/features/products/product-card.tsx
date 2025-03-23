import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/products';
import { cn } from '@/lib/utils';
import { OptimizedImage } from '@/components/ui/optimized-image';
import { ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
  className?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  featured = false,
  className,
}) => {
  const { id, name, price, rating, image, category, tags, discount } = product;
  
  const discountedPrice = discount ? price - (price * discount) / 100 : price;
  
  return (
    <div 
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-950",
        featured ? "h-full md:h-auto" : "h-full",
        className
      )}
    >
      <Link href={`/shop/${id}`} className="relative overflow-hidden bg-gray-100 dark:bg-gray-800">
        <OptimizedImage
          src={image}
          alt={name}
          aspectRatio="square"
          priority={featured}
          className="transition-transform duration-300 group-hover:scale-105"
        />
        {discount && (
          <div className="absolute left-2 top-2 rounded bg-red-500 px-2 py-1 text-xs font-medium text-white">
            {discount}% OFF
          </div>
        )}
      </Link>
      
      <div className="flex grow flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">{category}</span>
          <div className="flex items-center">
            <span className="mr-1 text-sm text-amber-500">★</span>
            <span className="text-xs text-gray-600 dark:text-gray-300">{rating}</span>
          </div>
        </div>
        
        <Link href={`/shop/${id}`} className="mb-2 grow">
          <h3 className="font-medium text-gray-900 transition-colors group-hover:text-blue-600 dark:text-gray-100 dark:group-hover:text-blue-400">
            {name}
          </h3>
        </Link>
        
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-center">
            {discount ? (
              <>
                <span className="text-lg font-semibold text-gray-900 dark:text-white">${discountedPrice.toFixed(2)}</span>
                <span className="ml-2 text-sm text-gray-500 line-through dark:text-gray-400">${price.toFixed(2)}</span>
              </>
            ) : (
              <span className="text-lg font-semibold text-gray-900 dark:text-white">${price.toFixed(2)}</span>
            )}
          </div>
          <Button size="sm" variant="outline" className="rounded-full">
            <ShoppingCart className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}; 