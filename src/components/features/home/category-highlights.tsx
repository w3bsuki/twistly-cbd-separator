'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowRight, Heart, Activity, Sparkles, PawPrint, Leaf, ChevronRight, ChevronLeft, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Separator } from '@/components/ui/separator'
import { Container } from '@/components/ui/container'

// Category data with updated details
const categories = [
  {
    title: "Health & Wellness",
    tagline: "Natural Balance",
    description: "Premium CBD solutions for stress relief, better sleep, and overall wellbeing.",
    image: "/images/tincture2.png", 
    moreImages: ["/images/tincture2.png", "/images/tincture2.png"],
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
    benefits: ["Sleep Support", "Stress Relief", "Pain Management", "Mental Clarity"],
    icon: <Heart className="h-5 w-5" />
  },
  {
    title: "Sport & Recovery",
    tagline: "Peak Performance",
    description: "Specialized formulas for athletes and active lifestyles.",
    image: "/images/tincture2.png",
    moreImages: ["/images/tincture2.png", "/images/tincture2.png"],
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
    benefits: ["Muscle Recovery", "Inflammation Reduction", "Joint Support", "Performance Enhancement"],
    icon: <Activity className="h-5 w-5" />
  },
  {
    title: "Beauty & Cosmetics",
    tagline: "Radiant Glow",
    description: "CBD-infused skincare for natural beauty enhancement.",
    image: "/images/tincture2.png",
    moreImages: ["/images/tincture2.png", "/images/tincture2.png"],
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
    benefits: ["Anti-Aging", "Skin Hydration", "Acne Treatment", "Complexion Enhancement"],
    icon: <Sparkles className="h-5 w-5" />
  },
  {
    title: "Pet CBD",
    tagline: "Support for Pets",
    description: "Specially formulated CBD products designed for pets' wellness needs.",
    image: "/images/tincture2.png",
    moreImages: ["/images/tincture2.png", "/images/tincture2.png"],
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
    benefits: ["Anxiety Relief", "Joint Health", "Skin & Coat Care", "Digestive Support"],
    icon: <PawPrint className="h-5 w-5" />
  },
  {
    title: "Hybrid & Mushrooms",
    tagline: "Synergy Blends",
    description: "Innovative blends combining CBD with functional mushrooms for enhanced benefits.",
    image: "/images/tincture2.png",
    moreImages: ["/images/tincture2.png", "/images/tincture2.png"],
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
    benefits: ["Immune Support", "Cognitive Function", "Energy Enhancement", "Stress Adaptation"],
    icon: <Leaf className="h-5 w-5" />
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const sliderRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sliderRef, { once: false, amount: 0.2 });
  
  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % categories.length);
  };
  
  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };
  
  // Set autoplay timer
  useEffect(() => {
    if (!autoplay || !isInView) return;
    
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [activeIndex, autoplay, isInView]);

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-green-50/30">
      {/* Enhanced background with subtle patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#22c55e08_50%,transparent_100%)]" />
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#22c55e_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 md:left-20 w-64 h-64 bg-green-100/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 right-10 md:right-20 w-80 h-80 bg-blue-100/10 rounded-full blur-3xl" />
      
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
            className="px-3.5 py-1.5 rounded-full text-sm bg-gradient-to-r from-green-500 to-green-600 text-white shadow-sm mb-4 flex items-center gap-1.5 mx-auto w-fit"
          >
            <Leaf className="h-3.5 w-3.5" />
            <span className="font-medium">Explore Our Collections</span>
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-700 to-green-800">
            Find Your Perfect CBD Match
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our specialized collections tailored to your specific wellness needs and lifestyle
          </p>
        </motion.div>

        {/* Featured Category Slider */}
        <div 
          ref={sliderRef}
          className="mb-16 relative"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="relative h-[500px] md:h-[420px] lg:h-[480px] w-full overflow-hidden rounded-2xl shadow-xl border border-gray-100">
            {/* Category Slider Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-700 hover:text-gray-900 border border-gray-200"
                aria-label="Previous category"
              >
                <ChevronLeft className="h-5 w-5" />
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center text-gray-700 hover:text-gray-900 border border-gray-200"
                aria-label="Next category"
              >
                <ChevronRight className="h-5 w-5" />
              </motion.button>
            </div>
            
            {/* Slider content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br",
                  categories[activeIndex].theme.gradient
                )} />
                
                <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 h-full">
                  {/* Left side content */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <div className="flex items-center gap-3 mb-6">
                        <div className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center",
                          categories[activeIndex].theme.accent
                        )}>
                          {React.cloneElement(categories[activeIndex].icon, { 
                            className: "h-6 w-6 text-white" 
                          })}
                        </div>
                        <div>
                          <h3 className={cn(
                            "text-2xl font-bold",
                            categories[activeIndex].theme.text
                          )}>
                            {categories[activeIndex].title}
                          </h3>
                          <p className="text-gray-600 text-sm">{categories[activeIndex].tagline}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                        {categories[activeIndex].description}
                      </p>
                      
                      <div className="mb-8">
                        <h4 className={cn(
                          "text-sm font-semibold uppercase tracking-wider mb-4",
                          categories[activeIndex].theme.textLight
                        )}>
                          Key Benefits
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {categories[activeIndex].benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center gap-2">
                              <div className={cn(
                                "w-6 h-6 rounded-full flex items-center justify-center",
                                categories[activeIndex].theme.accentLight
                              )}>
                                <svg className={cn("h-3.5 w-3.5", categories[activeIndex].theme.textLight)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <span className="text-gray-700 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <Link 
                        href={categories[activeIndex].href} 
                        className={cn(
                          "inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium text-white shadow-md transition-all duration-300 hover:shadow-lg",
                          categories[activeIndex].theme.button
                        )}
                      >
                        Explore Collection
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  </div>
                  
                  {/* Right side image and featured product */}
                  <div className="p-8 flex flex-col items-center justify-center relative">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                      className="relative w-full h-full flex items-center justify-center"
                    >
                      <div className="absolute w-64 h-64 md:w-80 md:h-80 bg-white rounded-full shadow-xl flex items-center justify-center">
                        <motion.div
                          animate={{ 
                            y: [0, -15, 0],
                            rotate: [0, 2, 0, -2, 0],
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 6,
                            ease: "easeInOut"
                          }}
                          className="relative w-48 h-48 md:w-60 md:h-60"
                        >
                          <Image
                            src={categories[activeIndex].image}
                            alt={categories[activeIndex].title}
                            fill
                            className="object-contain"
                          />
                        </motion.div>
                      </div>
                      
                      {/* Mini product images */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="absolute -bottom-4 right-4 md:-bottom-10 md:right-10 w-16 h-16 md:w-24 md:h-24 bg-white rounded-full shadow-lg p-1.5"
                      >
                        <div className="relative w-full h-full">
                          <Image 
                            src={categories[activeIndex].moreImages[0]} 
                            alt="Product" 
                            fill 
                            className="object-contain"
                          />
                        </div>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="absolute bottom-4 left-4 md:bottom-10 md:left-10 w-16 h-16 md:w-20 md:h-20 bg-white rounded-full shadow-lg p-1.5"
                      >
                        <div className="relative w-full h-full">
                          <Image 
                            src={categories[activeIndex].moreImages[1]} 
                            alt="Product" 
                            fill 
                            className="object-contain"
                          />
                        </div>
                      </motion.div>
                      
                      {/* Featured product card */}
                      <div className="absolute -bottom-4 md:-bottom-10 left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-lg p-4 w-64 border border-gray-100">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="text-sm font-semibold text-gray-900">
                              {categories[activeIndex].featured.name}
                            </h4>
                            <div className="flex items-center mt-1">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={cn(
                                      "w-3 h-3",
                                      i < Math.floor(categories[activeIndex].featured.rating)
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-200"
                                    )}
                                  />
                                ))}
                              </div>
                              <span className="ml-1 text-xs text-gray-500">
                                ({categories[activeIndex].featured.reviews})
                              </span>
                            </div>
                          </div>
                          <span className={cn(
                            "text-sm font-bold",
                            categories[activeIndex].theme.text
                          )}>
                            {categories[activeIndex].featured.price}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Thumbnail indicators */}
          <div className="flex justify-center mt-6 gap-3">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "relative w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden transition-all duration-300",
                  activeIndex === idx 
                    ? `border-2 ${category.theme.border} shadow-md` 
                    : "border border-gray-200 opacity-70 hover:opacity-100"
                )}
              >
                <div className="relative w-full h-full p-2 bg-white">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Categories Grid - Mini Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-4 md:gap-6 mx-auto max-w-5xl"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Link href={category.href}>
                <div className={cn(
                  "flex flex-col items-center p-4 md:p-5 rounded-xl border-2 h-full bg-white transition-all duration-300",
                  category.theme.border,
                  category.theme.borderHover,
                  category.theme.shadow,
                  "hover:shadow-lg"
                )}>
                  <div className={cn(
                    "w-12 h-12 md:w-16 md:h-16 rounded-full relative mb-4",
                    category.theme.accentLight,
                    "p-2"
                  )}>
                    <Image
                      src={category.image}
                      alt={category.title}
                      fill
                      className="object-contain p-1.5"
                    />
                  </div>
                  
                  <h3 className={cn(
                    "text-sm md:text-base font-semibold text-center",
                    category.theme.text,
                    "mb-1"
                  )}>
                    {category.title}
                  </h3>
                  
                  <p className="text-xs text-gray-500 mb-3 text-center">{category.tagline}</p>
                  
                  <div className={cn(
                    "mt-auto text-xs font-medium inline-flex items-center",
                    category.theme.textLight
                  )}>
                    View Products
                    <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
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
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              variant="outlineGreen"
              rounded="full"
              asChild
            >
              <Link href="/shop" className="flex items-center gap-2 px-6 py-3">
                View All Categories
                <ArrowRight className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
} 