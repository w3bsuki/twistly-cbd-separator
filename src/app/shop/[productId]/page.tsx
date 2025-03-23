'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Minus, Plus, Heart, ShoppingCart, Check, Info } from 'lucide-react'
import { getProductById, getBestSellerProducts, Product } from '@/lib/products'
import { ProductCard } from '@/components/common/ui/product-card'
import { Button } from '@/components/common/ui/button'
import { Badge } from '@/components/common/ui/badge'
import { Separator } from '@/components/common/ui/separator'
import { AspectRatio } from '@/components/common/ui/aspect-ratio'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/common/ui/tabs'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/common/ui/accordion'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/common/ui/tooltip'

export default function ProductPage({ params }: { params: { productId: string } }) {
  const product = getProductById(params.productId)
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const relatedProducts = getBestSellerProducts().filter(p => p.id !== params.productId).slice(0, 4)
  
  if (!product) {
    return (
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="mb-8">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/shop">Back to Shop</Link>
        </Button>
      </div>
    )
  }
  
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  
  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1)
    }
  }
  
  const addToCart = () => {
    // Implement cart functionality here
    console.log(`Added ${quantity} of ${product.name} to cart`)
  }
  
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/shop" className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4 overflow-hidden rounded-lg border bg-white">
              <AspectRatio ratio={1}>
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
            
            {/* Thumbnail gallery */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`overflow-hidden rounded-md border ${
                    selectedImage === index ? 'ring-2 ring-primary' : ''
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <AspectRatio ratio={1}>
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="h-full w-full object-cover"
                    />
                  </AspectRatio>
                </button>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div>
            {/* Product badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              {product.bestSeller && (
                <Badge className="bg-amber-500 hover:bg-amber-600">Best Seller</Badge>
              )}
              {product.new && (
                <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>
              )}
              {product.discountPrice && (
                <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>
              )}
            </div>
            
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            
            {/* Ratings */}
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? "fill-amber-500 text-amber-500"
                      : "fill-muted text-muted"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {product.rating} ({product.reviewCount} reviews)
              </span>
            </div>
            
            {/* Price */}
            <div className="flex items-center gap-2 mb-6">
              {product.discountPrice ? (
                <>
                  <span className="text-2xl font-bold">${product.discountPrice.toFixed(2)}</span>
                  <span className="text-lg text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                  <Badge variant="outline" className="ml-2 text-red-500 border-red-200">
                    Save ${(product.price - product.discountPrice).toFixed(2)}
                  </Badge>
                </>
              ) : (
                <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
              )}
            </div>
            
            {/* Short description */}
            <p className="text-muted-foreground mb-6">
              {product.description}
            </p>
            
            {/* Product details */}
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="font-medium">Size:</span>
                <span>{product.details.size}</span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="font-medium">Concentration:</span>
                <span>{product.details.concentration}</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="h-4 w-4 text-muted-foreground cursor-help" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        CBD concentration refers to the amount of cannabidiol in the product.
                        Higher concentrations typically provide stronger effects.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="font-medium">Stock:</span>
                <span className={product.stock > 10 ? "text-green-600" : "text-amber-600"}>
                  {product.stock > 10 ? "In Stock" : `Only ${product.stock} left`}
                </span>
              </div>
            </div>
            
            {/* Add to cart */}
            <div className="flex flex-col space-y-4">
              <div className="flex items-center">
                <div className="flex items-center border rounded-l-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={decreaseQuantity}
                    disabled={quantity <= 1}
                    className="h-10 w-10 rounded-none"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={increaseQuantity}
                    disabled={quantity >= product.stock}
                    className="h-10 w-10 rounded-none"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button 
                  className="flex-1 rounded-l-none" 
                  onClick={addToCart}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
              
              <Button variant="outline">
                <Heart className="mr-2 h-4 w-4" />
                Add to Wishlist
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details">
            <TabsList className="w-full justify-start border-b rounded-none">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
              <TabsTrigger value="usage">How to Use</TabsTrigger>
              <TabsTrigger value="benefits">Benefits</TabsTrigger>
            </TabsList>
            <TabsContent value="details" className="py-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium mb-4">Product Details</h3>
                  <p className="text-muted-foreground mb-4">
                    {product.description}
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Size: {product.details.size}</li>
                    <li>Concentration: {product.details.concentration}</li>
                    <li>Category: {product.category.charAt(0).toUpperCase() + product.category.slice(1)}</li>
                    <li>Tags: {product.tags.join(', ')}</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-4">Why Choose Our CBD</h3>
                  <ul className="space-y-3">
                    {[
                      "Organically grown hemp from US farms",
                      "Third-party lab tested for purity and potency",
                      "Full transparency with batch-specific lab results",
                      "CO2 extraction for the purest CBD oil",
                      "Free from pesticides, heavy metals, and solvents"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="ingredients" className="py-6">
              <h3 className="text-lg font-medium mb-4">Ingredients</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                {product.details.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="usage" className="py-6">
              <h3 className="text-lg font-medium mb-4">How to Use</h3>
              <p className="text-muted-foreground mb-4">
                {product.details.usage}
              </p>
              <div className="bg-muted p-4 rounded-md mt-4">
                <h4 className="font-medium mb-2">Pro Tips</h4>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>For best results, use consistently at the same time each day</li>
                  <li>Start with a lower dose and gradually increase as needed</li>
                  <li>Store in a cool, dry place away from direct sunlight</li>
                  <li>Consult with a healthcare professional before use if you have any medical conditions</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="benefits" className="py-6">
              <h3 className="text-lg font-medium mb-4">Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.details.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is CBD?</AccordionTrigger>
              <AccordionContent>
                CBD (cannabidiol) is a naturally occurring compound found in the hemp plant. Unlike THC, CBD is non-psychoactive, meaning it won't get you "high." CBD interacts with your body's endocannabinoid system, which helps regulate various functions like sleep, mood, and pain.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How long does it take to feel the effects?</AccordionTrigger>
              <AccordionContent>
                The time it takes to feel the effects of CBD varies depending on the method of consumption. Sublingual products (oils and tinctures) typically take 15-30 minutes, while edibles and capsules may take 1-2 hours as they need to pass through your digestive system. Topical products work locally and effects can be felt within minutes.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Will CBD show up on a drug test?</AccordionTrigger>
              <AccordionContent>
                Most standard drug tests look for THC, not CBD. Our products contain less than 0.3% THC (the legal limit), which is typically not enough to trigger a positive result. However, we cannot guarantee that you will pass a drug test after using our products, as individual test sensitivities vary.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What's the difference between Full Spectrum, Broad Spectrum, and Isolate?</AccordionTrigger>
              <AccordionContent>
                Full Spectrum CBD contains all cannabinoids naturally found in the hemp plant, including trace amounts of THC (less than 0.3%). Broad Spectrum CBD contains multiple cannabinoids but has THC removed. CBD Isolate is pure CBD with all other compounds removed. Full Spectrum products offer the "entourage effect," where compounds work together for enhanced benefits.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>How should I store my CBD products?</AccordionTrigger>
              <AccordionContent>
                Store your CBD products in a cool, dry place away from direct sunlight. Excessive heat and light can degrade the quality of CBD. Some products, like certain edibles, may require refrigeration after opening. Always check the product packaging for specific storage instructions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <motion.div
                  key={relatedProduct.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ProductCard product={relatedProduct} />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 