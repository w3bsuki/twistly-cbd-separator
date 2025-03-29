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

export function FeaturedProducts() {
  return (
    <section className="py-5 relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Background decoration - Adjusted colors/position */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-10 w-72 h-72 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-20 left-10 w-72 h-72 bg-emerald-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        {/* Restored main wrapper div */}
        <div className="bg-white/90 backdrop-blur-md border border-green-200 rounded-2xl shadow-lg p-6 overflow-hidden">
          {/* Restored header state */}
          <div className="text-center mb-4">
            <div className="inline-flex bg-gradient-to-br from-green-50/80 to-white rounded-full border border-green-200/40 shadow-sm p-1.5 mb-3">
              <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-2 rounded-full shadow-md flex items-center gap-2 font-medium">
                <ShoppingCart className="h-4 w-4" />
                <span>Featured Products</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Premium Health & Wellness Solutions</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Our curated selection of high-quality CBD formulas designed specifically for health and wellness
            </p>
          </div>
          
          {/* Restored featured grid container */}
          <div className="bg-gradient-to-br from-green-50/60 to-white rounded-xl border border-green-200/70 shadow-inner p-5 mb-4 overflow-hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {healthProducts.filter(product => product.featured || product.id === 'wellness-plus').slice(0, 4).map((product) => (
                <Link href={`/shop/${product.id}`} key={product.id} className="group block h-full">
                  <Card className={`h-full border border-green-200 hover:border-green-300 overflow-hidden bg-white transition-all duration-200 hover:shadow-lg flex flex-col`}>
                    {/* Restored previous AspectRatio/Image state */}
                    <AspectRatio ratio={16 / 9} className={`relative bg-gradient-to-b from-green-50 to-white flex-shrink-0 overflow-hidden group-hover:scale-103 transition-transform duration-300`}>
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill 
                        className="object-contain p-4"
                      />
                      <Badge className="absolute top-2.5 right-2.5 bg-green-600 hover:bg-green-700 text-white text-xs shadow-sm border border-white/30">
                        {product.strength}
                      </Badge>
                    </AspectRatio>
                    
                    <CardContent className="p-4 flex flex-col flex-grow">
                      <div className="flex justify-between items-start gap-1 mb-1.5 flex-shrink-0">
                        <h3 className="font-semibold text-gray-900 group-hover:text-green-700 transition-colors text-sm line-clamp-1">
                          {product.name}
                        </h3>
                        <span className="font-bold text-green-600 text-sm whitespace-nowrap flex-shrink-0">{product.price}</span>
                      </div>
                      
                      <p className="text-xs text-gray-500 mb-2 line-clamp-2 flex-grow">{product.description}</p>
                      
                      <div className="flex gap-1 mb-2 flex-wrap flex-shrink-0">
                        {product.benefits.slice(0, 2).map((benefit, i) => (
                          <Badge key={i} variant="outline" className="bg-green-50/80 text-green-700 text-[10px] font-medium border-green-200/80 px-1.5 py-0 rounded">
                            {benefit}
                          </Badge>
                        ))}
                      </div>
                      
                      <div className="flex justify-between items-center mt-auto pt-2 border-t border-slate-100 flex-shrink-0">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={i < Math.floor(product.rating) ? "h-3.5 w-3.5 text-yellow-400 fill-yellow-400" : "h-3.5 w-3.5 text-gray-300 fill-gray-300"}
                            />
                          ))}
                          <span className="text-xs text-gray-500 ml-1.5">({product.reviews})</span>
                        </div>
                        <Button variant="ghost" size="icon" className="text-green-600 hover:text-green-700 hover:bg-green-100 h-7 w-7 rounded-full">
                          <ShoppingCart className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Restored slider section */}
          <div className="mt-4 pt-4 border-t border-green-100">
            <h3 className="text-center text-lg font-semibold text-gray-800 mb-2">Discover More Wellness Products</h3>
            <div className="bg-gradient-to-br from-green-50/60 to-white rounded-xl border border-green-200/70 shadow-inner p-3 overflow-hidden">
              <InfiniteSlider gap={12} className="w-full py-2">
                {healthProducts.map((product, index) => (
                  <Link href={`/shop/${product.id}`} key={`slider-${index}`} className="block">
                    <motion.div 
                      className="relative group w-[150px]"
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                    >
                      <AspectRatio ratio={1} className="bg-white rounded-lg border border-green-100 shadow-sm overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-2 scale-95 transition-transform duration-300 group-hover:scale-100"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 via-black/30 to-transparent pointer-events-none">
                          <p className="text-white text-xs font-medium leading-tight line-clamp-2">{product.name}</p>
                          <Badge variant="outline" className="mt-1 text-[9px] bg-white/20 backdrop-blur-sm text-white border-white/30 px-1 py-0 h-4">
                            {product.strength}
                          </Badge>
                        </div>
                      </AspectRatio>
                    </motion.div>
                  </Link>
                ))}
              </InfiniteSlider>
            </div>
            
            {/* Restored button section */}
            <div className="flex justify-center mt-4">
              <Button variant="outline" className={`border-green-300 bg-white text-green-700 hover:bg-green-50 hover:border-green-400 rounded-full h-8 text-sm px-4 shadow-sm`} asChild>
                <Link href="/shop/category/health">
                  View All Health Products
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 