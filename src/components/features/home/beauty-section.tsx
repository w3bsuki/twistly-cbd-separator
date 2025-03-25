'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Star, Sparkles, Check, Flower, Award, Shield, Smile, Droplet, ShoppingCart, Heart, Info, Users, Beaker, CheckCircle, Bot } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"
import { InfiniteSlider } from "@/components/common/ui/infinite-slider"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/ui/dialog"

// Updated with local image paths and more product details
const beautyProducts = [
  {
    name: "Anti-Aging CBD Serum",
    strength: "500mg CBD",
    image: "/images/tincture2.png",
    price: "$59.99",
    rating: 4.8,
    reviews: 132,
    description: "Rejuvenating serum with antioxidants to reduce fine lines",
    benefits: ["Reduces fine lines", "Firms skin", "Brightens complexion"],
    badgeColor: "bg-purple-600",
    featured: true
  },
  {
    name: "CBD Facial Cream",
    strength: "250mg CBD",
    image: "/images/tincture2.png",
    price: "$49.99",
    rating: 4.7,
    reviews: 108,
    description: "Hydrating daily moisturizer for all skin types.",
    benefits: ["24hr hydration", "Calms redness", "Non-greasy"],
    badgeColor: "bg-pink-600",
    featured: true
  },
  {
    name: "Night Recovery CBD Oil",
    strength: "750mg CBD",
    image: "/images/tincture2.png",
    price: "$69.99",
    rating: 4.9,
    reviews: 156,
    description: "Intensive overnight treatment for skin regeneration",
    benefits: ["Repairs overnight", "Reduces puffiness", "Smooths skin"],
    badgeColor: "bg-purple-700",
    featured: true
  },
  {
    name: "Radiance CBD Oil",
    strength: "1000mg CBD",
    image: "/images/tincture2.png",
    price: "$79.99",
    rating: 4.8,
    reviews: 94,
    description: "Brightening formula for a natural, healthy glow",
    benefits: ["Natural glow", "Even skin tone", "Reduces dark spots"],
    badgeColor: "bg-pink-500",
    featured: false
  },
  {
    name: "Beauty Elixir CBD",
    strength: "500mg CBD",
    image: "/images/tincture2.png",
    price: "$54.99",
    rating: 4.6,
    reviews: 87,
    description: "Multi-purpose beauty oil for face, hair and body",
    benefits: ["Multi-purpose", "Fast absorption", "Non-comedogenic"],
    badgeColor: "bg-purple-500",
    featured: false
  }
]

// CBD beauty benefits
const beautyBenefits = [
  {
    title: "Rejuvenating",
    description: "Our CBD beauty products help restore skin's natural glow and elasticity for a more youthful appearance.",
    icon: <Flower className="h-6 w-6 text-purple-600" />,
    color: "bg-purple-50 border-purple-100"
  },
  {
    title: "Anti-Inflammatory",
    description: "CBD's natural anti-inflammatory properties help reduce redness, puffiness, and skin irritation.",
    icon: <Shield className="h-6 w-6 text-pink-600" />,
    color: "bg-pink-50 border-pink-100"
  },
  {
    title: "Antioxidant Rich",
    description: "Packed with antioxidants to fight free radicals and prevent premature aging signs.",
    icon: <Sparkles className="h-6 w-6 text-purple-600" />,
    color: "bg-purple-50 border-purple-100"
  },
  {
    title: "Deeply Hydrating",
    description: "Our formulas provide lasting hydration without clogging pores for balanced, supple skin.",
    icon: <Droplet className="h-6 w-6 text-pink-600" />,
    color: "bg-pink-50 border-pink-100"
  }
]

// Testimonials
const testimonials = [
  {
    quote: "The Anti-Aging Serum has completely transformed my skin. Fine lines are visibly reduced, and my skin feels firmer after just 3 weeks!",
    author: "Sarah T.",
    role: "Verified Customer",
    image: "/images/tincture2.png",
    rating: 5
  },
  {
    quote: "I've tried dozens of moisturizers and the CBD Facial Cream is by far the best. It calms my rosacea flare-ups and keeps my skin hydrated all day.",
    author: "Michael K.",
    role: "Verified Customer",
    image: "/images/tincture2.png",
    rating: 5
  },
  {
    quote: "The Beauty Elixir is my go-to for everything! I use it on dry hair ends, cuticles, and as a facial oil. Worth every penny!",
    author: "Jessica M.",
    role: "Beauty Blogger",
    image: "/images/tincture2.png",
    rating: 4
  },
]

export function Beauty() {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Badge className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-1 rounded-full text-sm mb-3">
              Beauty & Skincare
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-purple-600 to-pink-600 mb-3">
              CBD-Infused Radiant Beauty
            </h2>
            <p className="text-purple-700 text-base max-w-2xl text-center">
              Our beauty and skincare collection harnesses the power of CBD to nourish, rejuvenate, and enhance your natural beauty from the inside out.
            </p>
          </motion.div>
        </div>

        {/* Beauty Benefits Section - More compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {beautyBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={cn("border h-full transition-all hover:shadow-md", benefit.color)}>
                <CardContent className="pt-4 p-4">
                  <div className="rounded-full w-10 h-10 flex items-center justify-center bg-white border border-gray-100 shadow-sm mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5">{benefit.title}</h3>
                  <p className="text-gray-600 text-xs line-clamp-3">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Products Heading */}
        <div className="flex flex-col items-center justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-purple-800">Bestselling Beauty Products</h3>
            <p className="text-purple-600 mt-1">Discover our most loved CBD skincare formulations</p>
          </motion.div>
          
          <Link href="/beauty-and-skincare" className="text-purple-700 hover:text-purple-800 font-medium text-sm flex items-center gap-1 mt-2">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {beautyProducts.filter(p => p.featured).map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-md">
                <CardContent className="p-0">
                  <div className="relative">
                    <AspectRatio ratio={1/1} className="bg-gradient-to-b from-purple-50 to-white">
                      <div className="relative h-full w-full p-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-4 scale-75"
                        />
                      </div>
                      <div className="absolute top-2 right-2 z-10">
                        <Badge className={cn("text-white text-xs px-2 py-0.5", product.badgeColor)}>
                          {product.strength}
                        </Badge>
                      </div>
                    </AspectRatio>
                  </div>
                  
                  <div className="p-3 md:p-4 flex flex-col h-full">
                    <div>
                      <h3 className="font-semibold text-base text-gray-900 group-hover:text-purple-700 transition-colors">{product.name}</h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                      
                      {/* Benefits */}
                      <div className="mt-2 space-y-0.5">
                        {product.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-1">
                            <Check className="h-3 w-3 text-purple-500 mt-0.5" />
                            <span className="text-xs text-gray-600 leading-tight">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-2">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-sm text-purple-700">{product.price}</p>
                        <div className="flex items-center bg-purple-50 rounded-full px-2 py-0.5">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-3 w-3 ${i < Math.floor(product.rating) 
                                  ? "text-yellow-400 fill-yellow-400" 
                                  : "text-gray-200 fill-gray-200"}`} 
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center gap-1">
                        <Button 
                          size="sm" 
                          variant="default"
                          className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-3 h-7 rounded-lg transition-colors flex-1"
                        >
                          <ShoppingCart className="h-3 w-3 mr-1" /> Add to Cart
                        </Button>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="h-8 w-10 flex items-center justify-center text-purple-700 border-purple-200 hover:bg-purple-50 hover:text-purple-800 rounded-lg transition-colors"
                            >
                              <Info className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle className="text-purple-700 flex items-center gap-1.5">
                                <Flower className="h-5 w-5" />
                                {product.name} Benefits
                              </DialogTitle>
                            </DialogHeader>
                            <div className="mt-4">
                              <div className="flex items-center mb-3">
                                <Badge className={cn("mr-2", product.badgeColor)}>
                                  {product.strength}
                                </Badge>
                                <div className="flex">
                                  {[...Array(5)].map((_, i) => (
                                    <Star 
                                      key={i} 
                                      className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) 
                                        ? "text-yellow-400 fill-yellow-400" 
                                        : "text-gray-200 fill-gray-200"}`} 
                                    />
                                  ))}
                                  <span className="text-xs text-gray-500 ml-1.5">({product.reviews} reviews)</span>
                                </div>
                              </div>
                              
                              <p className="text-sm text-gray-700 mb-4">{product.description}</p>
                              
                              <h4 className="font-medium text-purple-700 mb-2 flex items-center">
                                <Sparkles className="h-4 w-4 mr-1.5" /> Key Benefits
                              </h4>
                              
                              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                                <ul className="space-y-3">
                                  {product.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <div className="bg-white rounded-full p-1 mt-0.5">
                                        <Check className="h-3.5 w-3.5 text-purple-600" />
                                      </div>
                                      <div>
                                        <p className="text-sm font-medium text-gray-800">{benefit}</p>
                                        <p className="text-xs text-gray-600">
                                          Supports {benefit.toLowerCase()} for enhanced beauty and skin health.
                                        </p>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <h4 className="font-medium text-purple-700 mb-2 flex items-center">
                                <Shield className="h-4 w-4 mr-1.5" /> Skin Benefits
                              </h4>
                              <p className="text-sm text-gray-700 mb-4">
                                This premium CBD beauty product nourishes skin deeply while helping reduce inflammation and signs of aging. Suitable for daily use in your beauty routine.
                              </p>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="h-8 w-10 flex items-center justify-center text-purple-700 border-purple-200 hover:bg-purple-50 hover:text-purple-800 rounded-lg transition-colors"
                            >
                              <Users className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle className="text-purple-700 flex items-center gap-1.5">
                                <Users className="h-5 w-5" />
                                Who is {product.name} for?
                              </DialogTitle>
                            </DialogHeader>
                            <div className="mt-4">
                              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                                <p className="text-sm text-gray-700">
                                  This product is ideal for beauty enthusiasts looking for high-performance skincare with the benefits of CBD. Perfect for those wanting to address specific skin concerns naturally.
                                </p>
                              </div>
                              
                              <h4 className="font-medium text-purple-700 mb-2 flex items-center">
                                <CheckCircle className="h-4 w-4 mr-1.5" /> Recommended For
                              </h4>
                              <ul className="space-y-2 mb-4">
                                <li className="flex items-start gap-2">
                                  <Check className="h-3.5 w-3.5 text-purple-600 mt-0.5" />
                                  <span className="text-sm text-gray-700">All skin types, especially sensitive or problem skin</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="h-3.5 w-3.5 text-purple-600 mt-0.5" />
                                  <span className="text-sm text-gray-700">Those concerned about signs of aging</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="h-3.5 w-3.5 text-purple-600 mt-0.5" />
                                  <span className="text-sm text-gray-700">People seeking natural, plant-based beauty solutions</span>
                                </li>
                              </ul>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="h-8 w-10 flex items-center justify-center text-purple-700 border-purple-200 hover:bg-purple-50 hover:text-purple-800 rounded-lg transition-colors"
                            >
                              <Beaker className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle className="text-purple-700 flex items-center gap-1.5">
                                <Beaker className="h-5 w-5" />
                                {product.name} Usage Guide
                              </DialogTitle>
                            </DialogHeader>
                            <div className="mt-4">
                              <div className="flex items-center mb-3">
                                <Badge className={cn("mr-2", product.badgeColor)}>
                                  {product.strength}
                                </Badge>
                                <p className="text-xs text-gray-600">Total CBD: {product.strength}</p>
                              </div>
                              
                              <p className="text-sm text-gray-700 mb-4">
                                This beauty product contains {product.strength} of high-quality CBD combined with premium skincare ingredients. For optimal results, follow the recommended application guidelines.
                              </p>
                              
                              <h4 className="font-medium text-purple-700 mb-2 flex items-center">
                                <Info className="h-4 w-4 mr-1.5" /> How to Use
                              </h4>
                              <p className="text-sm text-gray-700 mb-4">
                                Apply a small amount to clean skin, gently massaging until fully absorbed. Can be used morning and evening as part of your regular skincare routine.
                              </p>
                              
                              <div className="bg-purple-50 rounded-lg p-4">
                                <h5 className="font-medium text-purple-700 mb-2">Pro Tips:</h5>
                                <ul className="space-y-2">
                                  <li className="flex items-start gap-2">
                                    <Check className="h-3.5 w-3.5 text-purple-600 mt-0.5" />
                                    <span className="text-xs text-gray-700">
                                      For deeper hydration, apply after shower or bath when skin is still slightly damp
                                    </span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <Check className="h-3.5 w-3.5 text-purple-600 mt-0.5" />
                                    <span className="text-xs text-gray-700">
                                      Store in a cool, dry place to preserve the active ingredients
                                    </span>
                                  </li>
                                  <li className="flex items-start gap-2">
                                    <Check className="h-3.5 w-3.5 text-purple-600 mt-0.5" />
                                    <span className="text-xs text-gray-700">
                                      Use consistently for 4-6 weeks to see optimal results
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        
                        <Button 
                          size="sm"
                          variant="ghost"
                          className="h-8 w-10 flex items-center justify-center text-purple-600 hover:text-purple-700 hover:bg-purple-50 transition-colors"
                        >
                          <Heart className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Compact Infinite Slider */}
        <InfiniteSlider gap={12} className="w-full py-4 mb-6">
          {beautyProducts.map((product, index) => (
            <motion.div 
              key={`slider-${index}`} 
              className="relative group w-[180px]"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <AspectRatio ratio={1} className="bg-white rounded-xl border border-purple-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 scale-75"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-purple-800/20 to-transparent rounded-xl opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-left">
                  <p className="text-white text-xs font-medium leading-tight">{product.name}</p>
                  <Badge variant="outline" className="mt-1 text-[8px] bg-white/10 text-white border-white/20">
                    {product.strength}
                  </Badge>
                </div>
              </AspectRatio>
            </motion.div>
          ))}
        </InfiniteSlider>

        {/* Testimonials Section - More compact */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-purple-800 text-center">Customer Testimonials</h3>
            <p className="text-purple-600 mt-1 text-center">See why our customers love our CBD beauty products</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "h-3 w-3", 
                            i < testimonial.rating 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-200 fill-gray-200"
                          )} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm italic mb-4 line-clamp-4">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full bg-purple-100 overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-gray-900">{testimonial.author}</p>
                        <p className="text-[10px] text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Explore Button */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-3"
          >
            <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-6 transition-colors">
              <Link href="/beauty-and-cosmetics" className="flex items-center gap-2">
                <Image src="/images/2.png" width={24} height={24} alt="Twistly" className="h-5 w-5" />
                <Separator orientation="vertical" className="h-4 bg-purple-50/20" />
                Explore Beauty & Skincare
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-purple-600 text-purple-700 hover:bg-purple-50 rounded-full px-6 transition-colors"
            >
              <Link href="#cbd-doctor" className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                Ask AI
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 