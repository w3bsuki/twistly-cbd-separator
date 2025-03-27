/**
 * FeaturedProducts Component (Optimized)
 * 
 * Enhanced version of the original FeaturedProducts component that maintains the same
 * visual design but uses our new hooks for improved performance and state management.
 */

"use client";

import React, { useState, useCallback, useMemo, memo } from "react";
import { ChevronRight, AlertCircle, ShoppingCart, Heart, Star, Eye, Info, Droplet, Check, ArrowRight, Sparkles, Package, BadgePercent, Award, Tag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/components/ui/use-toast";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "@/context/cart-context";
import { useProductData } from "@/hooks/use-product-data";
import { useAnimationConfig, fadeInUpVariants, staggerContainerVariants } from "@/hooks";

// Type for product categories
type ProductCategory = 'all' | 'health' | 'beauty' | 'sport' | 'hybrid';

// Get color for category - memoized utility function
const getCategoryColor = (category: string): string => {
  switch(category) {
    case 'health': return 'green';
    case 'beauty': return 'purple';
    case 'sport': return 'blue';
    case 'hybrid': return 'amber';
    default: return 'green';
  }
};

// Memoized section header component
const ProductsHeader = memo(function ProductsHeader({
  activeCategory,
  handleCategoryChange,
  animConfig
}: {
  activeCategory: ProductCategory,
  handleCategoryChange: (category: ProductCategory) => void,
  animConfig: ReturnType<typeof useAnimationConfig>
}) {
  return (
    <motion.div 
      {...animConfig.getMotionProps({
        initial: "hidden",
        whileInView: "visible",
        viewport: { once: true },
        variants: fadeInUpVariants,
      })}
      className="flex flex-col items-center text-center mb-16"
    >
      <Badge className="px-3.5 py-1.5 rounded-full text-sm bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center gap-1.5 mb-4 shadow-sm">
        <Sparkles className="w-3.5 h-3.5" />
        <span className="font-medium">Premium Selection</span>
      </Badge>
      
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-700 to-green-800">
        Featured Products
      </h2>
      
      <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
        Discover our curated selection of premium CBD products, ethically sourced and crafted for your wellness journey
      </p>
      
      {/* Category Tabs */}
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
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${activeCategory === 'all' 
                  ? 'bg-green-500 text-white shadow-sm' 
                  : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              All Products
            </TabsTrigger>
            
            <TabsTrigger 
              value="health"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${activeCategory === 'health' 
                  ? 'bg-green-500 text-white shadow-sm' 
                  : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              Health & Wellness
            </TabsTrigger>
            
            <TabsTrigger 
              value="beauty"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${activeCategory === 'beauty' 
                  ? 'bg-purple-500 text-white shadow-sm' 
                  : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              Beauty
            </TabsTrigger>
            
            <TabsTrigger 
              value="sport"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                ${activeCategory === 'sport' 
                  ? 'bg-blue-500 text-white shadow-sm' 
                  : 'text-gray-700 hover:bg-gray-50'
                }`}
            >
              Sports
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>
    </motion.div>
  );
});

// Product card item animations
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

// Memoized product card component for better performance
const ProductCard = memo(function ProductCard({
  product, 
  handleQuickView, 
  handleAddToCart,
  animConfig
}: {
  product: Product, 
  handleQuickView: (product: Product) => void, 
  handleAddToCart: (product: Product, event: React.MouseEvent) => void,
  animConfig: ReturnType<typeof useAnimationConfig>
}) {
  const categoryColor = getCategoryColor(product.category);
  
  return (
    <motion.div
      variants={animConfig.getVariants(itemVariants)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="h-full"
    >
      <Card 
        className={`group h-full overflow-hidden border-2 relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer
          border-${categoryColor}-100 hover:border-${categoryColor}-200 dark:border-${categoryColor}-900 dark:hover:border-${categoryColor}-800`}
        onClick={() => handleQuickView(product)}
      >
        {/* Product badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
          {product.bestSeller && (
            <Badge className="bg-amber-500 text-white px-2 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
              <Award className="h-3 w-3" />
              <span>Best Seller</span>
            </Badge>
          )}
          {product.new && (
            <Badge className="bg-blue-500 text-white px-2 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
              <Package className="h-3 w-3" />
              <span>New Arrival</span>
            </Badge>
          )}
          {product.discount && (
            <Badge className="bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
              <BadgePercent className="h-3 w-3" />
              <span>{product.discount}% Off</span>
            </Badge>
          )}
        </div>
        
        {/* Quick view button */}
        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button 
                  size="icon" 
                  variant="secondary" 
                  className="h-8 w-8 rounded-full shadow-md"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleQuickView(product);
                  }}
                  aria-label={`Quick view ${product.name}`}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Quick View</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        
        {/* Product image */}
        <div className={`relative overflow-hidden bg-gradient-to-b from-${categoryColor}-50 to-white dark:from-${categoryColor}-900/20 dark:to-gray-900 pt-3`}>
          <div className="relative h-48 sm:h-52 mx-auto transition-transform duration-500 group-hover:scale-110 group-hover:translate-y-1 p-3">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-contain"
              priority={product.bestSeller}
            />
          </div>
          
          {product.details?.concentration && (
            <div className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 z-10 px-3 py-1 rounded-full text-xs bg-white/80 backdrop-blur-sm shadow-sm border border-${categoryColor}-100 text-${categoryColor}-700`}>
              {product.details.concentration}
            </div>
          )}
        </div>
        
        <CardContent className="p-5 flex flex-col space-y-4">
          {/* Category badge */}
          <div className="flex justify-between items-start">
            <Badge 
              variant="outline" 
              className={`text-xs border-${categoryColor}-200 bg-${categoryColor}-50 text-${categoryColor}-700 dark:border-${categoryColor}-900 dark:bg-${categoryColor}-900/30 dark:text-${categoryColor}-400`}
            >
              {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
            </Badge>
            
            <div className="flex" aria-label={`Rated ${product.rating} out of 5 stars with ${product.reviewCount} reviews`}>
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={cn(
                    "h-3.5 w-3.5",
                    i < Math.floor(product.rating)
                      ? "text-yellow-400 fill-yellow-400"
                      : "text-gray-200 fill-gray-200"
                  )}
                  aria-hidden="true"
                />
              ))}
              <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
            </div>
          </div>
          
          {/* Product name and description */}
          <div>
            <h3 className={`font-semibold text-base text-gray-900 group-hover:text-${categoryColor}-700 transition-colors mb-1`}>
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
          </div>
          
          {/* Benefits */}
          <div className="space-y-1.5">
            {product.details?.benefits?.slice(0, 2).map((benefit, i) => (
              <div key={i} className="flex items-start gap-1.5">
                <div className={`rounded-full p-0.5 text-${categoryColor}-600 flex-shrink-0 mt-0.5`}>
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-xs text-gray-600">{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* Price and actions */}
          <div className="mt-auto pt-3 flex justify-between items-center border-t border-gray-100">
            <div className="flex flex-col">
              {product.discountPrice ? (
                <>
                  <span className="text-xs text-gray-500 line-through">${product.price.toFixed(2)}</span>
                  <span className={`font-bold text-${categoryColor}-700`}>${product.discountPrice.toFixed(2)}</span>
                </>
              ) : (
                <span className={`font-bold text-${categoryColor}-700`}>${product.price.toFixed(2)}</span>
              )}
            </div>
            
            <Button
              size="sm"
              className={`bg-${categoryColor}-600 hover:bg-${categoryColor}-700 text-white text-xs h-8`}
              onClick={(e) => handleAddToCart(product, e)}
              aria-label={`Add ${product.name} to cart`}
            >
              <ShoppingCart className="h-3.5 w-3.5 mr-1" />
              Add to Cart
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
});

// Main component
export function FeaturedProducts() {
  // State
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewOpen, setQuickViewOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  
  // Hooks
  const { toast } = useToast();
  const { addItem } = useCart();
  const animConfig = useAnimationConfig();
  
  // Use our custom hook for product data
  const { 
    products, 
    isLoading, 
    error: hasError, 
    updateFilters,
    refetch 
  } = useProductData({
    initialFilters: {},
    featured: true,
    limit: 8
  });

  // Handle category change
  const handleCategoryChange = useCallback((category: ProductCategory) => {
    setActiveCategory(category);
    if (category === 'all') {
      updateFilters({ category: undefined });
    } else {
      updateFilters({ category });
    }
  }, [updateFilters]);
  
  // Show quick view dialog for a product
  const handleQuickView = useCallback((product: Product) => {
    setSelectedProduct(product);
    setQuickViewOpen(true);
  }, []);
  
  // Add to cart handler
  const handleAddToCart = useCallback((product: Product, event: React.MouseEvent) => {
    event.stopPropagation();
    
    try {
      addItem(product, 1);
      
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
        variant: "success",
      });
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast({
        title: "Error",
        description: "There was a problem adding this item to your cart.",
        variant: "destructive",
      });
    }
  }, [addItem, toast]);

  // Get filtered products - now handled by the hook
  const filteredProducts = useMemo(() => {
    return products || [];
  }, [products]);

  if (isLoading) {
    return <FeaturedProductsSkeleton />;
  }

  if (hasError) {
    return (
      <section className="w-full py-12 md:py-16 bg-background" aria-labelledby="error-heading">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center p-8 border border-red-200 rounded-lg bg-red-50">
            <AlertCircle className="h-10 w-10 text-red-500 mb-4" aria-hidden="true" />
            <h2 id="error-heading" className="text-2xl font-semibold text-red-700 mb-2">
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
    <section className="w-full py-20 md:py-28 relative overflow-hidden" aria-labelledby="featured-products-heading">
      {/* Beautiful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-green-50/30" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#22c55e10_50%,transparent_100%)]" aria-hidden="true" />
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#22c55e_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5" aria-hidden="true" />
      <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-br from-green-100/10 to-blue-100/5 rounded-full blur-3xl" aria-hidden="true"></div>
      
      <div className="container px-4 md:px-6 mx-auto relative">
        {/* Using memoized header component */}
        <ProductsHeader 
          activeCategory={activeCategory}
          handleCategoryChange={handleCategoryChange}
          animConfig={animConfig}
        />

        {/* Products Grid with Animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={animConfig.shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={animConfig.shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={animConfig.getTransition(0.3)}
            variants={animConfig.getVariants(staggerContainerVariants)}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                handleQuickView={handleQuickView}
                handleAddToCart={handleAddToCart}
                animConfig={animConfig}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all link */}
        <motion.div
          {...animConfig.getMotionProps({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: 0.6 }
          })}
          className="flex justify-center mt-16"
        >
          <Link 
            href="/shop" 
            className="group relative overflow-hidden inline-flex items-center justify-center px-6 py-3.5 rounded-full shadow-md border border-green-200 hover:border-green-300 bg-white hover:bg-green-50/50 transition-all duration-300"
            aria-label="View our complete product collection"
          >
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="relative z-10 text-green-700 font-medium flex items-center group-hover:text-green-800">
              View Complete Collection
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </div>
      
      {/* Quick view dialog */}
      {selectedProduct && (
        <Dialog open={quickViewOpen} onOpenChange={setQuickViewOpen}>
          <DialogContent className="sm:max-w-[800px] p-0 overflow-hidden bg-white dark:bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Product image */}
              <div className={`relative bg-gradient-to-br from-${getCategoryColor(selectedProduct.category)}-50 to-white dark:from-${getCategoryColor(selectedProduct.category)}-900/30 dark:to-gray-900 p-8`}>
                <div className="relative h-[280px] w-full">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-contain"
                    priority
                  />
                </div>
                
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {selectedProduct.bestSeller && (
                    <Badge className="bg-amber-500 text-white">Best Seller</Badge>
                  )}
                  {selectedProduct.new && (
                    <Badge className="bg-blue-500 text-white">New</Badge>
                  )}
                </div>
              </div>
              
              {/* Product details */}
              <div className="p-6 flex flex-col h-full">
                <DialogHeader className="mb-4">
                  <div className="flex justify-between items-start">
                    <DialogTitle className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {selectedProduct.name}
                    </DialogTitle>
                    <Badge variant="outline" className={`border-${getCategoryColor(selectedProduct.category)}-200 bg-${getCategoryColor(selectedProduct.category)}-50 text-${getCategoryColor(selectedProduct.category)}-700`}>
                      {selectedProduct.category.charAt(0).toUpperCase() + selectedProduct.category.slice(1)}
                    </Badge>
                  </div>
                  <DialogDescription className="text-base mt-1 dark:text-gray-400">
                    {selectedProduct.description}
                  </DialogDescription>
                </DialogHeader>
                
                <div className="space-y-5 flex-1">
                  {/* Ratings */}
                  <div className="flex items-center" aria-label={`Rated ${selectedProduct.rating} out of 5 stars with ${selectedProduct.reviewCount} reviews`}>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "h-4 w-4",
                            i < Math.floor(selectedProduct.rating)
                              ? "text-yellow-400 fill-yellow-400"
                              : "text-gray-200 fill-gray-200 dark:text-gray-700 dark:fill-gray-700"
                          )}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                      {selectedProduct.rating} ({selectedProduct.reviewCount} reviews)
                    </span>
                  </div>
                  
                  {/* Price */}
                  <div className="flex items-center space-x-3">
                    {selectedProduct.discountPrice ? (
                      <>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">
                          ${selectedProduct.discountPrice.toFixed(2)}
                        </span>
                        <span className="text-lg text-gray-500 line-through">
                          ${selectedProduct.price.toFixed(2)}
                        </span>
                        <Badge variant="destructive">
                          {Math.round(((selectedProduct.price - selectedProduct.discountPrice) / selectedProduct.price) * 100)}% OFF
                        </Badge>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        ${selectedProduct.price.toFixed(2)}
                      </span>
                    )}
                  </div>
                  
                  {/* Benefits */}
                  {selectedProduct.details?.benefits && (
                    <div className="space-y-1.5">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">Key Benefits</h4>
                      <ul className="space-y-1.5">
                        {selectedProduct.details.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className={`rounded-full p-0.5 text-${getCategoryColor(selectedProduct.category)}-600 dark:text-${getCategoryColor(selectedProduct.category)}-400 flex-shrink-0 mt-0.5`}>
                              <Check className="h-4 w-4" />
                            </div>
                            <span className="text-sm text-gray-700 dark:text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Usage */}
                  {selectedProduct.details?.usage && (
                    <div>
                      <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">Recommended Usage</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                        {selectedProduct.details.usage}
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <Button 
                    className={`bg-${getCategoryColor(selectedProduct.category)}-600 hover:bg-${getCategoryColor(selectedProduct.category)}-700 text-white`}
                    onClick={(e) => {
                      handleAddToCart(selectedProduct, e);
                      setQuickViewOpen(false);
                    }}
                    aria-label={`Add ${selectedProduct.name} to cart`}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                  <Link href={`/shop/${selectedProduct.id}`}>
                    <Button variant="outline" className="w-full">
                      View Full Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
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
    <section className="w-full py-20 md:py-28 relative" aria-label="Loading featured products">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <Skeleton className="h-8 w-40 rounded-full mb-4" />
          <Skeleton className="h-12 w-64 rounded-lg mb-4" />
          <Skeleton className="h-4 w-full max-w-md mb-2" />
          <Skeleton className="h-4 w-full max-w-sm mb-8" />
          <Skeleton className="h-12 w-full max-w-xl rounded-lg" />
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="flex flex-col overflow-hidden rounded-lg border-2 border-gray-100 h-full">
              <Skeleton className="h-52 w-full" />
              <div className="p-5 space-y-4">
                <div className="flex justify-between">
                  <Skeleton className="h-4 w-16 rounded-md" />
                  <Skeleton className="h-4 w-20 rounded-md" />
                </div>
                <Skeleton className="h-5 w-full rounded-md" />
                <Skeleton className="h-4 w-full rounded-md" />
                <Skeleton className="h-4 w-3/4 rounded-md" />
                <div className="flex justify-between items-center pt-3">
                  <Skeleton className="h-5 w-16 rounded-md" />
                  <Skeleton className="h-8 w-24 rounded-md" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <Skeleton className="h-12 w-48 rounded-full" />
        </div>
      </div>
    </section>
  );
} 