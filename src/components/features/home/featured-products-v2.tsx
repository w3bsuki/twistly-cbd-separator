/**
 * FeaturedProducts Component
 * 
 * Displays a curated selection of featured products with category filtering,
 * animations, and optimized rendering.
 */

"use client";

import React, { useState, useCallback, useMemo } from "react";
import { Sparkles, AlertCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  getFeaturedProducts, 
  getBestSellerProducts, 
  Product 
} from "@/lib/products";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/features/products/product-card-v2";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogFooter 
} from "@/components/ui/dialog";
import { useProductData } from "@/hooks/use-product-data";

// Category type
type ProductCategory = 'all' | 'health' | 'beauty' | 'sport' | 'hybrid';

/**
 * FeaturedProducts - Component that displays featured products with filtering
 * 
 * @example
 * ```tsx
 * <FeaturedProducts />
 * ```
 */
export function FeaturedProducts() {
  // State for quick view modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  
  // Use our custom hook for product data
  const { 
    products, 
    isLoading, 
    error: hasError, 
    filters, 
    updateFilters,
    refetch 
  } = useProductData({
    initialFilters: {},
    featured: true,
    limit: 8
  });
  
  // State for active category filtering
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  };

  /**
   * Get category-specific styling
   */
  const getCategoryStyles = useCallback((category: ProductCategory): { bgColor: string, textColor: string } => {
    switch(category) {
      case 'health': 
        return { bgColor: 'bg-green-500', textColor: 'text-green-500' };
      case 'beauty': 
        return { bgColor: 'bg-purple-500', textColor: 'text-purple-500' };
      case 'sport': 
        return { bgColor: 'bg-blue-500', textColor: 'text-blue-500' };
      case 'hybrid': 
        return { bgColor: 'bg-amber-500', textColor: 'text-amber-500' };
      default: 
        return { bgColor: 'bg-green-500', textColor: 'text-green-500' };
    }
  }, []);

  /**
   * Handle category change
   */
  const handleCategoryChange = useCallback((category: ProductCategory) => {
    setActiveCategory(category);
    if (category === 'all') {
      updateFilters({ category: undefined });
    } else {
      updateFilters({ category });
    }
  }, [updateFilters]);

  /**
   * Handle opening the quick view for a product
   */
  const handleQuickView = useCallback((product: Product) => {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  }, []);

  // Filter products by active category
  const filteredProducts = useMemo(() => {
    if (!products) return [];
    if (activeCategory === 'all') return products;
    return products.filter(product => product.category === activeCategory);
  }, [products, activeCategory]);

  // If loading, show skeleton
  if (isLoading) {
    return <FeaturedProductsSkeleton />;
  }

  // If error, show error message
  if (hasError) {
    return (
      <section className="w-full py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center p-8 border border-red-200 rounded-lg bg-red-50">
            <AlertCircle className="h-10 w-10 text-red-500 mb-4" />
            <h2 className="text-2xl font-semibold text-red-700 mb-2">
              Unable to Load Products
            </h2>
            <p className="text-gray-600 mb-4">
              We're having trouble loading our featured products. Please try again later.
            </p>
            <Button 
              onClick={() => refetch()}
              className="bg-red-600 hover:bg-red-700"
            >
              Retry
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-green-50/30" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#22c55e10_50%,transparent_100%)]" />
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#22c55e_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5" />
      <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-br from-green-100/10 to-blue-100/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-bl from-purple-100/5 to-green-100/10 rounded-full blur-3xl"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <Badge 
            className="px-3.5 py-1.5 rounded-full text-sm bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center gap-1.5 mb-4 shadow-sm"
            aria-label="Premium Selection"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span className="font-medium">Premium Selection</span>
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-700 to-green-800">
            Featured Products
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Discover our curated selection of premium CBD products, ethically sourced and crafted for your wellness journey
          </p>
          
          {/* Category filter tabs */}
          <Tabs 
            defaultValue="all" 
            value={activeCategory}
            onValueChange={(value) => handleCategoryChange(value as ProductCategory)}
            className="w-full max-w-2xl mx-auto"
          >
            <div className="flex justify-center">
              <TabsList className="bg-white/80 backdrop-blur-sm border border-gray-100 p-1.5 rounded-xl shadow-sm">
                <TabsTrigger 
                  value="all"
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    activeCategory === 'all' 
                      ? 'bg-green-500 text-white shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  All Products
                </TabsTrigger>
                
                <TabsTrigger 
                  value="health"
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    activeCategory === 'health' 
                      ? 'bg-green-500 text-white shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  Health & Wellness
                </TabsTrigger>
                
                <TabsTrigger 
                  value="beauty"
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    activeCategory === 'beauty' 
                      ? 'bg-purple-500 text-white shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  Beauty
                </TabsTrigger>
                
                <TabsTrigger 
                  value="sport"
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                    activeCategory === 'sport' 
                      ? 'bg-blue-500 text-white shadow-sm' 
                      : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  Sports
                </TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </motion.div>

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={containerVariants}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard 
                  product={product}
                  onClick={handleQuickView}
                  data-testid={`product-card-${product.id}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* "View All" call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link href="/shop">
            <Button 
              variant="outline" 
              size="lg"
              className="group gap-1 border-green-100 bg-white/70 backdrop-blur-sm hover:bg-white"
            >
              View All Products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Quick view dialog */}
      {selectedProduct && (
        <Dialog open={quickViewOpen} onOpenChange={setQuickViewOpen}>
          <DialogContent className="sm:max-w-3xl overflow-auto max-h-[90vh]">
            <DialogHeader>
              <DialogTitle>{selectedProduct.name}</DialogTitle>
            </DialogHeader>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
              {/* Product image */}
              <div className="bg-gray-100 rounded-lg overflow-hidden aspect-square relative">
                <img 
                  src={selectedProduct.image || selectedProduct.images?.[0] || '/images/products/placeholder.png'} 
                  alt={selectedProduct.name}
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Product details */}
              <div className="flex flex-col">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-xs font-medium uppercase tracking-wider text-indigo-600">
                    {selectedProduct.category}
                  </span>
                  {selectedProduct.new && (
                    <Badge variant="default" className="bg-blue-600">
                      NEW
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-2xl font-semibold mb-2">
                  {selectedProduct.name}
                </h3>
                
                <div className="flex items-baseline gap-2 mb-4">
                  {selectedProduct.discount ? (
                    <>
                      <span className="text-2xl font-semibold text-gray-900">
                        ${(selectedProduct.price - (selectedProduct.price * (selectedProduct.discount / 100))).toFixed(2)}
                      </span>
                      <span className="text-sm text-gray-500 line-through">
                        ${selectedProduct.price.toFixed(2)}
                      </span>
                    </>
                  ) : (
                    <span className="text-2xl font-semibold text-gray-900">
                      ${selectedProduct.price.toFixed(2)}
                    </span>
                  )}
                </div>
                
                <p className="text-gray-700 mb-4">
                  {selectedProduct.description}
                </p>
                
                <div className="space-y-4 mb-4">
                  {selectedProduct.details && (
                    <>
                      {selectedProduct.details.benefits && (
                        <div>
                          <h4 className="font-medium mb-2">Benefits</h4>
                          <ul className="list-disc list-inside space-y-1 text-gray-700">
                            {selectedProduct.details.benefits.map((benefit, index) => (
                              <li key={index}>{benefit}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {selectedProduct.details.usage && (
                        <div>
                          <h4 className="font-medium mb-2">Usage</h4>
                          <p className="text-gray-700">{selectedProduct.details.usage}</p>
                        </div>
                      )}
                    </>
                  )}
                </div>
                
                <div className="mt-auto">
                  <Link href={`/shop/${selectedProduct.id}`}>
                    <Button className="w-full">
                      View Full Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button 
                variant="outline" 
                onClick={() => setQuickViewOpen(false)}
              >
                Close
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
}

/**
 * Loading skeleton for the FeaturedProducts component
 */
function FeaturedProductsSkeleton() {
  return (
    <section className="w-full py-20 md:py-28 relative">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <Skeleton className="h-8 w-40 rounded-full mb-4" />
          <Skeleton className="h-12 w-64 rounded-lg mb-4" />
          <Skeleton className="h-4 w-full max-w-md mb-2" />
          <Skeleton className="h-4 w-full max-w-sm mb-8" />
          <Skeleton className="h-12 w-full max-w-xl rounded-lg" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white">
              <Skeleton className="aspect-square w-full" />
              <div className="p-5">
                <Skeleton className="h-4 w-20 mb-2" />
                <Skeleton className="h-6 w-full mb-4" />
                <Skeleton className="h-4 w-16 mb-4" />
                <Skeleton className="h-4 w-40 mb-5" />
                <div className="flex justify-between items-center">
                  <Skeleton className="h-6 w-20" />
                  <Skeleton className="h-10 w-20 rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Skeleton className="h-12 w-40 rounded-md" />
        </div>
      </div>
    </section>
  );
} 