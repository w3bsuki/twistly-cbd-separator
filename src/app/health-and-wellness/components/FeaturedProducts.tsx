'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star, ShoppingCart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { healthProducts } from '../data/products'

interface FeaturedProductsProps {
  pageTheme: {
    colors: {
      accent: string;
      accentHover: string;
      border: string;
      borderHover: string;
      primary: string;
    };
  }
}

export function FeaturedProducts({ pageTheme }: FeaturedProductsProps) {
  return (
    <section className="py-6 relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Simple background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-60 h-60 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <Container>
        <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl shadow-md p-4 overflow-hidden">
          <div className="text-center mb-4">
            <div className="inline-flex bg-gradient-to-br from-green-50/80 to-white rounded-full border border-green-200/40 shadow-sm p-1">
              <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 font-medium">
                <ShoppingCart className="h-3.5 w-3.5" />
                <span>Featured Products</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-2">Premium Health & Wellness Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4 text-sm">
              Our curated selection of high-quality CBD formulas designed specifically for health and wellness
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50/70 to-white rounded-xl border border-green-200/40 shadow-sm p-3 mb-4 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {healthProducts.filter(product => product.featured || product.id === 'wellness-plus').map((product) => (
                <Link href={`/shop/${product.id}`} key={product.id} className="group">
                  <Card className={`h-full border ${pageTheme.colors.border} ${pageTheme.colors.borderHover} overflow-hidden bg-white transition-all duration-200 hover:shadow-md`}>
                    <div className={`relative pt-[70%] bg-gradient-to-b from-green-50 to-white`}>
                      <div className="absolute inset-0 p-4 transition-transform duration-300 group-hover:scale-103">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <Badge className="absolute top-2 right-2 bg-green-600 hover:bg-green-700 text-white text-xs">
                        {product.strength}
                      </Badge>
                    </div>
                    
                    <CardContent className="p-2.5">
                      <div className="flex justify-between items-start gap-1 mb-1">
                        <h3 className="font-medium text-gray-900 group-hover:text-green-700 transition-colors text-sm line-clamp-1">
                          {product.name}
                        </h3>
                        <span className="font-bold text-green-700 text-sm whitespace-nowrap">{product.price}</span>
                      </div>
                      
                      <p className="text-xs text-gray-500 mb-1.5 line-clamp-1">{product.description}</p>
                      
                      <div className="flex gap-1.5 mb-1.5 flex-wrap">
                        {product.benefits.slice(0, 2).map((benefit, i) => (
                          <Badge key={i} variant="outline" className="bg-green-50 text-green-700 text-xs border-green-100 px-1.5 py-0 rounded-full">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center pt-1 border-t border-gray-100">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={i < Math.floor(product.rating) ? "h-3 w-3 text-yellow-400 fill-yellow-400" : "h-3 w-3 text-gray-200 fill-gray-200"}
                            />
                          ))}
                          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                        </div>
                        <Button variant="ghost" size="sm" className="text-green-700 hover:text-green-800 hover:bg-green-50 h-7 w-7 p-0">
                          <ShoppingCart className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Product Carousel in Nested Container - More Compact */}
          <div className="mt-3 pt-3 border-t border-green-100">
            <div className="bg-gradient-to-br from-green-50/70 to-white rounded-xl border border-green-200/40 shadow-sm p-3 overflow-hidden">
              <InfiniteSlider gap={8} className="w-full py-1">
                {healthProducts.map((product, index) => (
                  <motion.div 
                    key={`slider-${index}`} 
                    className="relative group w-[140px]"
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  >
                    <AspectRatio ratio={1} className="bg-white rounded-lg border border-green-100 shadow-sm">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-2 scale-90"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-green-800/20 to-transparent rounded-lg opacity-80 transition-opacity duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-1.5 text-left">
                        <p className="text-white text-[10px] font-medium leading-tight">{product.name}</p>
                        <Badge variant="outline" className="mt-0.5 text-[7px] bg-white/10 text-white border-white/20 p-0 h-3">
                          {product.strength}
                        </Badge>
                      </div>
                    </AspectRatio>
                  </motion.div>
                ))}
              </InfiniteSlider>
              
              <div className="flex justify-center mt-3">
                <div className="bg-gradient-to-br from-green-50/80 to-white rounded-full border border-green-200/40 shadow-sm p-1 px-2 inline-block">
                  <Button variant="outline" className={`${pageTheme.colors.border} text-green-700 hover:bg-green-50 rounded-full h-7 text-xs px-2.5`} asChild>
                    <Link href="/shop/category/health">
                      View All Products
                      <ArrowRight className="ml-1.5 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 