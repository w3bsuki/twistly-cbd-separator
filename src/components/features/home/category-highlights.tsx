'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Activity, Sparkles, PawPrint, Leaf, ShoppingBag, Star, Bot, MessageSquare, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Separator } from '@/components/ui/separator'
import { Container } from '@/components/ui/container'

// Category data with updated hrefs
const categories = [
  {
    title: "Health & Wellness",
    tagline: "Natural Balance",
    description: "Premium CBD solutions for stress relief, better sleep, and overall wellbeing.",
    image: "/images/3.png", // Using logo image instead of product
    href: "/health-and-wellness",
    productCount: 24,
    featured: {
      name: "Full Spectrum CBD Oil",
      rating: 4.9,
      reviews: 128,
      price: "$59.99"
    },
    theme: {
      gradient: "from-green-50 via-green-100/80 to-green-50/40",
      hoverGradient: "from-green-100 to-green-50",
      accent: "bg-green-600",
      accentLight: "bg-green-100",
      accentDark: "bg-green-700",
      text: "text-green-800",
      textLight: "text-green-600",
      border: "border-green-200",
      borderHover: "hover:border-green-300",
      shadow: "shadow-green-500/15",
      button: "bg-green-600 hover:bg-green-700",
      bgHover: "hover:bg-green-50"
    },
    icon: <Heart className="h-5 w-5" />
  },
  {
    title: "Sport & Recovery",
    tagline: "Peak Performance",
    description: "Specialized formulas for athletes and active lifestyles.",
    image: "/images/4.png", // Using logo image instead of product
    href: "/sport-and-recovery",
    productCount: 18,
    featured: {
      name: "Sport Recovery Gel",
      rating: 4.8,
      reviews: 96,
      price: "$49.99"
    },
    theme: {
      gradient: "from-blue-50 via-blue-100/80 to-blue-50/40",
      hoverGradient: "from-blue-100 to-blue-50",
      accent: "bg-blue-600",
      accentLight: "bg-blue-100",
      accentDark: "bg-blue-700",
      text: "text-blue-800",
      textLight: "text-blue-600",
      border: "border-blue-200",
      borderHover: "hover:border-blue-300",
      shadow: "shadow-blue-500/15",
      button: "bg-blue-600 hover:bg-blue-700",
      bgHover: "hover:bg-blue-50"
    },
    icon: <Activity className="h-5 w-5" />
  },
  {
    title: "Beauty & Cosmetics",
    tagline: "Radiant Glow",
    description: "CBD-infused skincare for natural beauty enhancement.",
    image: "/images/2.png", // Using logo image instead of product
    href: "/beauty-and-cosmetics",
    productCount: 21,
    featured: {
      name: "CBD Face Serum",
      rating: 4.9,
      reviews: 84,
      price: "$69.99"
    },
    theme: {
      gradient: "from-purple-50 via-purple-100/80 to-purple-50/40",
      hoverGradient: "from-purple-100 to-purple-50",
      accent: "bg-purple-600",
      accentLight: "bg-purple-100",
      accentDark: "bg-purple-700",
      text: "text-purple-800",
      textLight: "text-purple-600",
      border: "border-purple-200",
      borderHover: "hover:border-purple-300",
      shadow: "shadow-purple-500/15",
      button: "bg-purple-600 hover:bg-purple-700",
      bgHover: "hover:bg-purple-50"
    },
    icon: <Sparkles className="h-5 w-5" />
  },
  {
    title: "Pet CBD",
    tagline: "Support for Pets",
    description: "Specially formulated CBD products designed for pets' wellness needs.",
    image: "/images/4.png", // Using logo image instead of product
    href: "/pet-cbd",
    productCount: 15,
    featured: {
      name: "Calming CBD Oil for Dogs",
      rating: 4.8,
      reviews: 76,
      price: "$44.99"
    },
    theme: {
      gradient: "from-amber-50 via-amber-100/80 to-amber-50/40",
      hoverGradient: "from-amber-100 to-amber-50",
      accent: "bg-amber-600",
      accentLight: "bg-amber-100",
      accentDark: "bg-amber-700",
      text: "text-amber-800",
      textLight: "text-amber-600",
      border: "border-amber-200",
      borderHover: "hover:border-amber-300",
      shadow: "shadow-amber-500/15",
      button: "bg-amber-600 hover:bg-amber-700",
      bgHover: "hover:bg-amber-50"
    },
    icon: <PawPrint className="h-5 w-5" />
  },
  {
    title: "Hybrid & Mushrooms",
    tagline: "Synergy Blends",
    description: "Innovative blends combining CBD with functional mushrooms for enhanced benefits.",
    image: "/images/3.png", // Using logo image instead of product
    href: "/hybrid-and-mushrooms",
    productCount: 12,
    featured: {
      name: "Mushroom & CBD Tincture",
      rating: 4.7,
      reviews: 64,
      price: "$79.99"
    },
    theme: {
      gradient: "from-amber-50 via-amber-100/80 to-amber-50/40",
      hoverGradient: "from-amber-100 to-amber-50",
      accent: "bg-amber-800",
      accentLight: "bg-amber-100",
      accentDark: "bg-amber-900",
      text: "text-amber-900",
      textLight: "text-amber-700",
      border: "border-amber-200",
      borderHover: "hover:border-amber-300",
      shadow: "shadow-amber-800/15",
      button: "bg-amber-800 hover:bg-amber-900",
      bgHover: "hover:bg-amber-50"
    },
    icon: <Leaf className="h-5 w-5" />
  },
  {
    title: "AI Health Assistant",
    tagline: "Your CBD Guide",
    description: "Get personalized CBD recommendations from our advanced AI assistant.",
    image: "/images/2.png", // Using logo image instead of product
    href: "/ai-assistant",
    productCount: "24/7",
    featured: {
      name: "Twistly AI Doctor",
      rating: 4.9,
      reviews: 156,
      price: "Free"
    },
    theme: {
      gradient: "from-indigo-50 via-indigo-100/80 to-indigo-50/40",
      hoverGradient: "from-indigo-100 to-indigo-50",
      accent: "bg-indigo-600",
      accentLight: "bg-indigo-100",
      accentDark: "bg-indigo-700",
      text: "text-indigo-800",
      textLight: "text-indigo-600",
      border: "border-indigo-200",
      borderHover: "hover:border-indigo-300",
      shadow: "shadow-indigo-500/15",
      button: "bg-indigo-600 hover:bg-indigo-700",
      bgHover: "hover:bg-indigo-50"
    },
    icon: <Bot className="h-5 w-5" />
  }
]

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

export function CategoryHighlights() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Enhanced background with more subtle patterns and gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-green-50/20" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#22c55e10_50%,transparent_100%)]" />
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#22c55e_0.5px,transparent_0.5px)] [background-size:20px_20px] opacity-5" />
      
      {/* Decorative Elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-gradient-to-br from-green-100/10 to-blue-100/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-gradient-to-bl from-purple-100/5 to-green-100/10 rounded-full blur-3xl" />
      
      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <Badge 
            className="px-3.5 py-1.5 rounded-full text-sm bg-gradient-to-r from-green-500 to-green-600 text-white flex items-center gap-1.5 mx-auto w-fit shadow-sm mb-4"
          >
            <Leaf className="w-3.5 h-3.5" />
            <span className="font-medium">Discover Our Collections</span>
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-700 to-green-800">
            Shop by Category
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Explore our curated collections of premium CBD products designed for your specific wellness needs
          </p>
        </motion.div>

        {/* Categories Grid with improved layout and animations */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="h-full"
            >
              <Link href={category.href} className="block h-full">
                <Card className={cn(
                  "group relative h-full overflow-hidden transition-all duration-300",
                  "hover:shadow-xl hover:-translate-y-1",
                  "border-2",
                  category.theme.border,
                  category.theme.borderHover,
                  "bg-white dark:bg-gray-900",
                  category.theme.shadow
                )}>
                  {/* Category accent bar at top */}
                  <div className={cn(
                    "absolute top-0 left-0 right-0 h-1.5",
                    category.theme.accent
                  )} />
                  
                  {/* Background gradient overlay */}
                  <div className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br",
                    category.theme.hoverGradient
                  )} />
                  
                  <CardContent className="p-6 md:p-8 relative z-10">
                    <div className="flex flex-col h-full">
                      {/* Category Header with Logo */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex flex-col">
                          <div className="flex items-center gap-2 mb-2">
                            <div className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center",
                              category.theme.accent
                            )}>
                              {React.cloneElement(category.icon, { 
                                className: "h-5 w-5 text-white" 
                              })}
                            </div>
                            <div className={cn(
                              "text-sm font-medium px-2.5 py-0.5 rounded-full",
                              category.theme.accentLight,
                              category.theme.textLight
                            )}>
                              {category.productCount} Products
                            </div>
                          </div>
                          
                          <h3 className={cn(
                            "text-xl font-bold",
                            category.theme.text
                          )}>
                            {category.title}
                          </h3>
                          
                          <p className="text-sm text-gray-500 mt-1">{category.tagline}</p>
                        </div>
                        
                        {/* Category Logo */}
                        <div className="relative w-16 h-16 overflow-hidden bg-white rounded-full p-1 shadow-sm">
                          <Image
                            src={category.image}
                            alt={category.title}
                            fill
                            className="object-contain p-1.5 opacity-85 group-hover:opacity-100 transition-opacity"
                          />
                        </div>
                      </div>
                      
                      {/* Category Description */}
                      <p className="text-base text-gray-600 dark:text-gray-300 mb-6">
                        {category.description}
                      </p>
                      
                      {/* Featured Product Preview */}
                      <div className="mt-auto">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className={cn(
                            "text-sm font-semibold",
                            category.theme.textLight
                          )}>
                            Featured Product
                          </h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={cn(
                                  "h-3.5 w-3.5",
                                  i < Math.floor(category.featured.rating)
                                    ? "text-yellow-400 fill-yellow-400"
                                    : "text-gray-200 fill-gray-200 dark:text-gray-700"
                                )}
                              />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">({category.featured.reviews})</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{category.featured.name}</p>
                          <p className={cn(
                            "text-base font-bold",
                            category.theme.text
                          )}>{category.featured.price}</p>
                        </div>
                      </div>
                      
                      {/* Action button */}
                      <div className={cn(
                        "mt-6 flex items-center justify-between p-3 rounded-lg transition-colors",
                        category.theme.accentLight,
                        category.theme.bgHover
                      )}>
                        <span className={cn(
                          "text-sm font-medium",
                          category.theme.text
                        )}>View Collection</span>
                        <div className={cn(
                          "w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1",
                          category.theme.accent
                        )}>
                          <ArrowRight className="h-3.5 w-3.5 text-white" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View all categories link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link 
            href="/shop" 
            className="group relative overflow-hidden inline-flex items-center justify-center px-6 py-3.5 rounded-full shadow-md border border-green-200 hover:border-green-300 bg-white hover:bg-green-50/50 transition-all duration-300"
          >
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="relative z-10 text-green-700 font-medium flex items-center group-hover:text-green-800">
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
} 