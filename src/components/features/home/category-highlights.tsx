'use client'

import React, { useState, useRef, useEffect, memo, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import { ArrowRight, Heart, Activity, Sparkles, PawPrint, Leaf, ChevronRight, ChevronLeft, Star, Users2, CheckCircle, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Separator } from '@/components/ui/separator'
import { Container } from '@/components/ui/container'
import { useAnimationConfig } from '@/hooks'

// Category data with updated details - Moved to memo to prevent re-creation on render
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
];

// Add the recommendations map at the top of the file after categories
const recommendationsMap = {
  "Health & Wellness": [
    "People experiencing stress and anxiety",
    "Those with sleep difficulties",
    "Individuals with chronic discomfort",
    "Anyone seeking natural wellness solutions"
  ],
  "Sport & Recovery": [
    "Athletes and fitness enthusiasts",
    "People with active lifestyles",
    "Those experiencing muscle fatigue",
    "Anyone seeking faster recovery times"
  ],
  "Beauty & Cosmetics": [
    "Skincare enthusiasts",
    "Those concerned about aging",
    "People with problem skin conditions",
    "Anyone seeking natural beauty solutions"
  ],
  "Pet CBD": [
    "Pets with anxiety or nervousness",
    "Older pets with joint discomfort",
    "Animals with sensitive skin",
    "Pets with appetite or digestive issues"
  ],
  "Hybrid & Mushrooms": [
    "Those seeking enhanced benefits",
    "People interested in immune support",
    "Individuals seeking mental clarity",
    "Anyone wanting synergistic wellness effects"
  ]
};

// Optimized animation variants - memo to prevent recreation on render
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

const cardVariants = {
  initial: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  },
  hover: { 
    scale: 1.03, 
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    transition: { type: "spring", stiffness: 400, damping: 25 }
  }
};

// Helper function to get benefit descriptions
function getBenefitDescription(category: string, benefit: string): string {
  const descriptions = {
    "Health & Wellness": {
      "Sleep Support": "Improve sleep quality and duration naturally",
      "Stress Relief": "Reduce anxiety and promote relaxation",
      "Pain Management": "Alleviate discomfort and inflammation",
      "Mental Clarity": "Enhance focus and cognitive function"
    },
    "Sport & Recovery": {
      "Muscle Recovery": "Accelerate post-workout recovery time",
      "Joint Support": "Maintain healthy, flexible joints",
      "Inflammation Reduction": "Combat exercise-induced inflammation",
      "Performance Enhancement": "Support endurance and training goals"
    },
    "Beauty & Cosmetics": {
      "Anti-Aging": "Reduce appearance of fine lines and wrinkles",
      "Skin Hydration": "Deeply moisturize and rejuvenate skin",
      "Acne Treatment": "Balance oil production and reduce breakouts",
      "Complexion Enhancement": "Even skin tone and promote radiance"
    },
    "Pet CBD": {
      "Anxiety Relief": "Keep pets calm during stressful situations",
      "Joint Health": "Support mobility in aging pets",
      "Skin & Coat Care": "Promote healthy skin and lustrous coat",
      "Digestive Support": "Help maintain healthy digestion"
    },
    "Hybrid & Mushrooms": {
      "Immune Support": "Fortify body's natural defense systems",
      "Cognitive Function": "Enhance mental clarity and focus",
      "Energy Enhancement": "Support sustainable natural energy",
      "Stress Adaptation": "Help body respond to environmental stresses"
    }
  };
  
  return descriptions[category]?.[benefit] || "Experience premium CBD benefits";
}

// Helper function to get recommendation descriptions
function getRecommendationDescription(category: string, index: number): string {
  const descriptions = {
    "Health & Wellness": [
      "Relief from everyday stress and anxiety",
      "Support for better sleep and restfulness",
      "Management of discomfort and recovery",
      "Enhance your daily wellness routine"
    ],
    "Sport & Recovery": [
      "Optimize your training and performance",
      "Support for active bodies and lifestyles",
      "Accelerate recovery between workouts",
      "Maintain peak physical condition"
    ],
    "Beauty & Cosmetics": [
      "Achieve that natural, healthy glow",
      "Combat signs of aging effectively",
      "Address problem skin conditions",
      "Incorporate CBD into your beauty routine"
    ],
    "Pet CBD": [
      "Help pets stay calm and comfortable",
      "Support aging pets' mobility and comfort",
      "Address skin irritations and coat health",
      "Support overall pet wellness naturally"
    ],
    "Hybrid & Mushrooms": [
      "Experience enhanced wellness benefits",
      "Support your body's natural defenses",
      "Achieve mental clarity and focus",
      "Benefit from nature's powerful synergy"
    ]
  };
  
  return descriptions[category]?.[index] || "Perfect match for your wellness needs";
}

// Helper to get initials for recommendation icons
function getInitial(text: string): string {
  return text.split(' ')[0][0] + (text.split(' ')[1]?.[0] || '');
}

// Memoized section header component for better performance
const SectionHeader = memo(function SectionHeader() {
  const animConfig = useAnimationConfig();
  
  return (
    <motion.div
      {...animConfig.getMotionProps({
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
      })}
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
  );
});

// Memoized slider content component to reduce re-renders
const SliderContent = memo(function SliderContent({ 
  category, 
  isReducedMotion 
}: { 
  category: typeof categories[0],
  isReducedMotion: boolean
}) {
  return (
    <div className="absolute inset-0 flex flex-col h-full">
      {/* Centered headline */}
      <div className="text-center pt-8 px-8 pb-3 relative z-10">
        <div className={cn(
          "w-12 h-12 rounded-full flex items-center justify-center shadow-lg mx-auto mb-2",
          category.theme.accent
        )}>
          {React.cloneElement(category.icon, { 
            className: "h-6 w-6 text-white" 
          })}
        </div>
        <h3 className={cn(
          "text-xl md:text-2xl font-bold mb-1",
          category.theme.text
        )}>
          {category.title}
        </h3>
        <p className="text-gray-700 text-sm max-w-xl mx-auto">
          {category.description}
        </p>
      </div>
      
      {/* Two-card horizontal layout - MORE COMPACT */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 px-4 md:px-8 pb-5 relative z-10">
        {/* Left card: Key Benefits */}
        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/70 shadow-sm flex flex-col h-full relative overflow-hidden">
          <div className="flex items-start gap-2 mb-2">
            <div className={cn(
              "w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5",
              category.theme.accent
            )}>
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <h4 className={cn(
              "text-sm font-semibold",
              category.theme.text
            )}>
              Key Benefits
            </h4>
          </div>
          
          <ul className="grid gap-1.5 flex-1 relative">
            {category.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <div className={cn(
                  "w-4 h-4 rounded-full flex items-center justify-center flex-none mt-0.5",
                  category.theme.accentLight
                )}>
                  <span className={cn(
                    "text-[10px] font-bold",
                    category.theme.text
                  )}>
                    {idx + 1}
                  </span>
                </div>
                <div>
                  <h5 className={cn(
                    "text-xs font-medium",
                    category.theme.text
                  )}>
                    {benefit}
                  </h5>
                  <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">
                    {getBenefitDescription(category.title, benefit)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-2 pt-2 border-t border-gray-100">
            <div className="flex items-center gap-1.5">
              <div className={cn(
                "w-5 h-5 rounded-full flex items-center justify-center flex-none",
                category.theme.accent
              )}>
                <Star className="h-3 w-3 text-white fill-white" />
              </div>
              <div>
                <div className="flex items-center">
                  <span className="text-[10px] font-medium text-gray-700">Bestseller:</span>
                  <span className={cn(
                    "text-xs font-medium ml-1",
                    category.theme.text
                  )}>
                    {category.featured.name}
                  </span>
                </div>
                <div className="flex items-center mt-0.5">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "w-2 h-2",
                          i < Math.floor(category.featured.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-200"
                        )}
                      />
                    ))}
                  </div>
                  <span className="text-[10px] text-gray-500 ml-1">
                    ({category.featured.reviews})
                  </span>
                  <span className="text-[10px] font-medium ml-1.5">
                    {category.featured.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right card: Recommended For */}
        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/70 shadow-sm flex flex-col h-full relative overflow-hidden">
          <div className="flex items-start gap-2 mb-2">
            <div className={cn(
              "w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5",
              category.theme.accent
            )}>
              <Users2 className="h-4 w-4 text-white" />
            </div>
            <h4 className={cn(
              "text-sm font-semibold",
              category.theme.text
            )}>
              Recommended For
            </h4>
          </div>
          
          <ul className="grid gap-1.5 flex-1 relative">
            {recommendationsMap[category.title].map((person, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <div className={cn(
                  "w-5 h-5 rounded-full flex items-center justify-center flex-none mt-0.5 text-xs font-medium",
                  category.theme.accent,
                  "text-white"
                )}>
                  {getInitial(person)}
                </div>
                <div>
                  <h5 className="text-xs font-medium text-gray-800">
                    {person}
                  </h5>
                  <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">
                    {getRecommendationDescription(category.title, idx)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="mt-2 pt-2 border-t border-gray-100">
            <Button 
              asChild
              className={cn(
                "w-full",
                category.theme.button
              )}
              size="sm"
            >
              <Link href={category.href} className="flex items-center justify-center gap-1.5">
                <span>Explore Collection</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

// Memoized CategoryCard component for better performance
const CategoryCard = memo(function CategoryCard({ 
  category, 
  isReducedMotion 
}: { 
  category: typeof categories[0],
  isReducedMotion: boolean
}) {
  const animConfig = useAnimationConfig();
  
  return (
    <Link href={category.href} className="block h-full group">
      <motion.div 
        className={cn(
          "relative flex flex-col items-center h-full rounded-2xl bg-white shadow-sm overflow-hidden",
          "aspect-[3/4] sm:aspect-auto"
        )}
        variants={animConfig.getVariants(cardVariants)}
        whileHover={isReducedMotion ? {} : "hover"}
        suppressHydrationWarning
      >
        {/* Card top gradient banner */}
        <div className={cn(
          "absolute top-0 left-0 right-0 h-24 sm:h-28 md:h-32 w-full bg-gradient-to-br rounded-t-2xl",
          `from-${category.theme.accentLight.replace('bg-', '')} to-white/20`
        )}></div>
        
        {/* Icon in circle */}
        <div className="relative z-10 mt-5 sm:mt-6 mb-3 sm:mb-4">
          <motion.div 
            className={cn(
              "w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full relative overflow-hidden",
              "shadow-md border-4 border-white bg-white p-1"
            )}
            whileHover={{ scale: isReducedMotion ? 1 : 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            suppressHydrationWarning
          >
            <div className={cn(
              "w-full h-full rounded-full flex items-center justify-center",
              category.theme.accentLight
            )}>
              <div className={cn(
                "w-12 h-12 rounded-full flex items-center justify-center",
                category.theme.accent
              )}>
                {React.cloneElement(category.icon, { 
                  className: "h-6 w-6 text-white" 
                })}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Content */}
        <div className="px-4 text-center flex flex-col flex-1 justify-between">
          <div>
            <h3 className={cn(
              "text-lg sm:text-xl md:text-2xl font-bold leading-tight mb-2 sm:mb-3",
              category.theme.text
            )}>
              {category.title === "Pet CBD" ? (
                "Pet CBD"
              ) : (
                category.title
              )}
            </h3>
            
            <p className="text-sm md:text-base text-gray-600 line-clamp-2">{category.description}</p>
          </div>
          
          <div className="w-full pb-4 sm:pb-5 mt-4 sm:mt-5">
            <div className={cn(
              "flex items-center justify-between py-2.5 sm:py-3 px-4 sm:px-6 rounded-full w-full",
              "border border-gray-200 bg-white shadow-sm",
              category.theme.text,
              "font-medium text-sm md:text-base"
            )}>
              <span>View Collection</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
});

// Main component
export function CategoryHighlights() {
  const animConfig = useAnimationConfig();
  const prefersReducedMotion = useReducedMotion();

  // Custom formula card data
  const customCard = {
    title: "Custom Formula",
    description: "Personalized CBD solutions tailored specifically to your unique wellness needs.",
    href: "/custom",
    theme: {
      gradient: "from-teal-50 via-teal-100/80 to-teal-50/40",
      hoverGradient: "from-teal-100 to-teal-50",
      accent: "bg-teal-600",
      accentLight: "bg-teal-100",
      accentDark: "bg-teal-700",
      text: "text-teal-800",
      textLight: "text-teal-600",
      border: "border-teal-200",
      borderHover: "hover:border-teal-300",
      shadow: "shadow-teal-500/15",
      button: "bg-teal-600 hover:bg-teal-700",
      bgHover: "hover:bg-teal-50"
    },
    icon: <Sparkles className="h-5 w-5" />
  };

  return (
    <section className="py-20 md:py-24 relative overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-green-50/30">
      {/* Enhanced background with subtle patterns */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#22c55e08_50%,transparent_100%)]" />
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#22c55e_0.5px,transparent_0.5px)] [background-size:24px_24px] opacity-5" />
      
      {/* Decorative elements - Reduced for better performance */}
      <div className="absolute top-40 left-10 md:left-20 w-64 h-64 bg-green-100/10 rounded-full blur-3xl" />
      
      <Container className="relative z-10">
        {/* Section Header - Now memoized */}
        <SectionHeader />

        {/* First row - Three cards */}
        <div className="mb-8">
          <motion.div
            variants={animConfig.getVariants(containerVariants)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl px-2"
            suppressHydrationWarning
          >
            {categories.slice(0, 3).map((category, index) => (
              <div key={category.title} className="overflow-visible">
                <motion.div
                  variants={animConfig.getVariants(itemVariants)}
                  className="perspective-600"
                  suppressHydrationWarning
                >
                  <Link href={category.href} className="block h-full group">
                    <motion.div 
                      className={cn(
                        "relative flex flex-col items-center h-full rounded-2xl bg-white shadow-lg overflow-hidden",
                        "min-h-[360px] sm:min-h-[380px] sm:max-w-[400px] mx-auto w-full",
                        "border-[1px] border-transparent"
                      )}
                      whileHover={prefersReducedMotion ? {} : {
                        scale: 1.05,
                        border: `3px solid ${category.theme.accent.replace('bg-', 'rgba(').replace('600', '600, 0.9)')}`,
                        boxShadow: `0 10px 30px ${category.theme.accent.replace('bg-', 'rgba(').replace('600', '600, 0.25)')}`,
                        y: -8,
                        zIndex: 10
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 400, 
                        damping: 25 
                      }}
                    >
                      {/* Card top gradient banner */}
                      <div className={cn(
                        "absolute top-0 left-0 right-0 h-28 w-full bg-gradient-to-br rounded-t-2xl",
                        `from-${category.theme.accentLight.replace('bg-', '')} to-white/20`
                      )}></div>
                      
                      {/* Icon in circle */}
                      <div className="relative z-10 mt-6 mb-3">
                        <div 
                          className={cn(
                            "w-[90px] h-[90px] rounded-full relative overflow-hidden",
                            "shadow-md border-4 border-white bg-white p-1"
                          )}
                        >
                          <div className={cn(
                            "w-full h-full rounded-full flex items-center justify-center",
                            category.theme.accentLight
                          )}>
                            <div className={cn(
                              "w-12 h-12 rounded-full flex items-center justify-center",
                              category.theme.accent
                            )}>
                              {React.cloneElement(category.icon, { 
                                className: "h-6 w-6 text-white" 
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="px-5 text-center flex flex-col flex-1 justify-between w-full">
                        <div>
                          <h3 className={cn(
                            "text-xl font-bold leading-tight mb-2",
                            category.theme.text
                          )}>
                            {category.title === "Pet CBD" ? (
                              "Pet CBD"
                            ) : (
                              category.title
                            )}
                          </h3>
                          
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{category.description}</p>
                          
                          <div className="mb-4">
                            <ul className="space-y-1.5">
                              {category.benefits.slice(0, 3).map((benefit, idx) => (
                                <li key={idx} className="flex items-center justify-center gap-2">
                                  <div className={cn("w-1.5 h-1.5 rounded-full", category.theme.accent)} />
                                  <span className="text-xs sm:text-sm text-gray-700">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        <div className="w-full pb-5 mt-auto">
                          <Button
                            className={cn(
                              "w-full py-2.5 text-white h-10 rounded-lg",
                              category.theme.accent
                            )}
                          >
                            <span className="flex items-center justify-center gap-2">
                              Explore Collection
                              <ArrowRight className="h-4 w-4" />
                            </span>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Second row - Two category cards + Custom Formula */}
        <motion.div
          variants={animConfig.getVariants(containerVariants)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-6xl px-2"
          suppressHydrationWarning
        >
          {categories.slice(3, 5).map((category, index) => (
            <div key={category.title} className="overflow-visible">
              <motion.div
                variants={animConfig.getVariants(itemVariants)}
                className="perspective-600"
                suppressHydrationWarning
              >
                <Link href={category.href} className="block h-full group">
                  <motion.div 
                    className={cn(
                      "relative flex flex-col items-center h-full rounded-2xl bg-white shadow-lg overflow-hidden",
                      "min-h-[360px] sm:min-h-[380px] sm:max-w-[400px] mx-auto w-full",
                      "border-[1px] border-transparent"
                    )}
                    whileHover={prefersReducedMotion ? {} : {
                      scale: 1.05,
                      border: `3px solid ${category.theme.accent.replace('bg-', 'rgba(').replace('600', '600, 0.9)')}`,
                      boxShadow: `0 10px 30px ${category.theme.accent.replace('bg-', 'rgba(').replace('600', '600, 0.25)')}`,
                      y: -8,
                      zIndex: 10
                    }}
                    transition={{ 
                      type: "spring", 
                      stiffness: 400, 
                      damping: 25 
                    }}
                  >
                    {/* Card top gradient banner */}
                    <div className={cn(
                      "absolute top-0 left-0 right-0 h-28 w-full bg-gradient-to-br rounded-t-2xl",
                      `from-${category.theme.accentLight.replace('bg-', '')} to-white/20`
                    )}></div>
                    
                    {/* Icon in circle */}
                    <div className="relative z-10 mt-6 mb-3">
                      <div 
                        className={cn(
                          "w-[90px] h-[90px] rounded-full relative overflow-hidden",
                          "shadow-md border-4 border-white bg-white p-1"
                        )}
                      >
                        <div className={cn(
                          "w-full h-full rounded-full flex items-center justify-center",
                          category.theme.accentLight
                        )}>
                          <div className={cn(
                            "w-12 h-12 rounded-full flex items-center justify-center",
                            category.theme.accent
                          )}>
                            {React.cloneElement(category.icon, { 
                              className: "h-6 w-6 text-white" 
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="px-5 text-center flex flex-col flex-1 justify-between w-full">
                      <div>
                        <h3 className={cn(
                          "text-xl font-bold leading-tight mb-2",
                          category.theme.text
                        )}>
                          {category.title === "Pet CBD" ? (
                            "Pet CBD"
                          ) : (
                            category.title
                          )}
                        </h3>
                        
                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{category.description}</p>
                        
                        <div className="mb-4">
                          <ul className="space-y-1.5">
                            {category.benefits.slice(0, 3).map((benefit, idx) => (
                              <li key={idx} className="flex items-center justify-center gap-2">
                                <div className={cn("w-1.5 h-1.5 rounded-full", category.theme.accent)} />
                                <span className="text-xs sm:text-sm text-gray-700">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      <div className="w-full pb-5 mt-auto">
                        <Button
                          className={cn(
                            "w-full py-2.5 text-white h-10 rounded-lg",
                            category.theme.accent
                          )}
                        >
                          <span className="flex items-center justify-center gap-2">
                            Explore Collection
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          ))}

          {/* Custom Formula Card */}
          <div className="overflow-visible">
            <motion.div
              variants={animConfig.getVariants(itemVariants)}
              className="perspective-600"
              suppressHydrationWarning
            >
              <Link href={customCard.href} className="block h-full group">
                <motion.div 
                  className={cn(
                    "relative flex flex-col items-center h-full rounded-2xl bg-white shadow-lg overflow-hidden",
                    "min-h-[360px] sm:min-h-[380px] sm:max-w-[400px] mx-auto w-full",
                    "border-2 border-dashed border-teal-200/40"
                  )}
                  whileHover={prefersReducedMotion ? {} : {
                    scale: 1.05,
                    borderColor: "rgba(20, 184, 166, 0.9)",
                    borderStyle: "solid",
                    borderWidth: "3px",
                    boxShadow: "0 10px 30px rgba(20, 184, 166, 0.25)",
                    y: -8,
                    zIndex: 10
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 25 
                  }}
                >
                  {/* Card top gradient banner */}
                  <div className={cn(
                    "absolute top-0 left-0 right-0 h-28 w-full bg-gradient-to-br rounded-t-2xl",
                    "from-teal-100 to-white/20"
                  )}></div>
                  
                  {/* Icon in circle */}
                  <div className="relative z-10 mt-6 mb-3">
                    <div 
                      className={cn(
                        "w-[90px] h-[90px] rounded-full relative overflow-hidden",
                        "shadow-md border-4 border-white bg-white p-1"
                      )}
                    >
                      <div className="w-full h-full rounded-full flex items-center justify-center bg-teal-100">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-teal-600">
                          <Sparkles className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="px-5 text-center flex flex-col flex-1 justify-between w-full">
                    <div>
                      <h3 className="text-xl font-bold leading-tight mb-2 text-teal-800">
                        {customCard.title}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{customCard.description}</p>
                      
                      <div className="mb-4">
                        <ul className="space-y-1.5 text-left">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-700">Tailored to your specific needs</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-700">Expert consultation included</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-teal-600 mt-0.5 flex-shrink-0" />
                            <span className="text-xs sm:text-sm text-gray-700">Unique blend just for you</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="w-full pb-5 mt-auto">
                      <Button
                        className="w-full py-2.5 text-white bg-teal-600 hover:bg-teal-700 h-10 rounded-lg"
                      >
                        <span className="flex items-center justify-center gap-2">
                          Create Your Formula
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </motion.div>
        
        {/* View all categories link */}
        <motion.div
          {...animConfig.getMotionProps({
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { duration: 0.5, delay: 0.4 }
          })}
          className="flex flex-col items-center mt-16 space-y-3"
        >
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <motion.div
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
              suppressHydrationWarning
            >
              <Button
                variant="primary"
                rounded="full"
                asChild
                className="px-8 py-3 text-base"
              >
                <Link href="/shop" className="flex items-center gap-2 h-12">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "linear",
                      repeatType: "loop"
                    }}
                    className="w-6 h-6 mr-1"
                  >
                    <Image 
                      src="/images/2.png" 
                      alt="Twistly" 
                      width={24} 
                      height={24} 
                      className="object-contain"
                    />
                  </motion.div>
                  Shop All Products
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: prefersReducedMotion ? 1 : 1.02 }}
              whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
              suppressHydrationWarning
            >
              <Button
                variant="outlineGreen"
                rounded="full"
                asChild
                className="px-8 py-3 text-base"
              >
                <Link href="/chat" className="flex items-center gap-2 h-12">
                  <MessageSquare className="w-6 h-6 mr-1" />
                  Chat with Dr. Twistly
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
} 