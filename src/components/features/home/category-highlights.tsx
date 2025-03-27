'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { ArrowRight, Heart, Activity, Sparkles, PawPrint, Leaf, ChevronRight, ChevronLeft, Star, Users2 } from 'lucide-react'
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

// Add these helper functions at the top of the file after the recommendationsMap

// Helper function to get benefit descriptions
function getBenefitDescription(category: string, benefit: string): string {
  const descriptions = {
    "Health & Wellness": {
      "Sleep Support": "Improve sleep quality and duration naturally",
      "Stress Relief": "Reduce daily stress and promote relaxation",
      "Pain Management": "Ease discomfort and support long-term comfort",
      "Mental Clarity": "Enhance focus and mental performance"
    },
    "Sport & Recovery": {
      "Muscle Recovery": "Speed up post-workout muscle recovery",
      "Inflammation Reduction": "Naturally reduce exercise-induced inflammation",
      "Joint Support": "Maintain joint health and mobility",
      "Performance Enhancement": "Support optimal athletic performance"
    },
    "Beauty & Cosmetics": {
      "Anti-Aging": "Combat signs of aging for youthful skin",
      "Skin Hydration": "Deep hydration for radiant, healthy skin",
      "Acne Treatment": "Balance skin and reduce breakouts",
      "Complexion Enhancement": "Even skin tone and brighten complexion"
    },
    "Pet CBD": {
      "Anxiety Relief": "Calm nervous pets during stressful situations",
      "Joint Health": "Support mobility in aging pets",
      "Skin & Coat Care": "Promote healthy skin and shiny coat",
      "Digestive Support": "Aid pet digestive comfort and health"
    },
    "Hybrid & Mushrooms": {
      "Immune Support": "Strengthen natural immune defenses",
      "Cognitive Function": "Support brain health and mental sharpness",
      "Energy Enhancement": "Sustainable energy without caffeine crashes",
      "Stress Adaptation": "Help body adapt to physical and mental stress"
    }
  };
  
  return descriptions[category]?.[benefit] || "Experience the full benefits of premium CBD";
}

// Helper function to get recommendation descriptions
function getRecommendationDescription(category: string, index: number): string {
  const descriptions = {
    "Health & Wellness": [
      "Find natural calm during hectic days",
      "Get the restful sleep you deserve",
      "Support your body's natural healing",
      "Enhance your daily wellness routine"
    ],
    "Sport & Recovery": [
      "Optimize your training and recovery",
      "Support an active, energetic lifestyle",
      "Bounce back faster between workouts",
      "Maintain peak physical performance"
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
          className="mb-16 relative max-w-6xl mx-auto"
          onMouseEnter={() => setAutoplay(false)}
          onMouseLeave={() => setAutoplay(true)}
        >
          <div className="relative h-[360px] md:h-[380px] w-full overflow-hidden rounded-2xl shadow-xl border border-gray-100">
            {/* Category Slider Navigation */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 z-20">
              <Button
                size="icon"
                variant="outline"
                onClick={prevSlide}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white"
                aria-label="Previous category"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 right-4 z-20">
              <Button
                size="icon"
                variant="outline"
                onClick={nextSlide}
                className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-white"
                aria-label="Next category"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
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
                
                {/* Badge in top right corner */}
                <Badge className={cn(
                  "absolute top-3 right-3 z-20",
                  "bg-white/80 backdrop-blur-sm shadow-sm",
                  categories[activeIndex].theme.text
                )}>
                  {categories[activeIndex].productCount} Products
                </Badge>
                
                {/* Premium circular pattern in background */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full border border-white/10 opacity-10" />
                  <div className="absolute -right-10 -top-10 w-60 h-60 rounded-full border border-white/10 opacity-10" />
                  <div className="absolute right-10 top-20 w-20 h-20 rounded-full border-2 border-white/10 opacity-10" />
                </div>
                
                <div className="absolute inset-0 flex flex-col h-full">
                  {/* Centered headline */}
                  <div className="text-center pt-8 px-8 pb-3 relative z-10">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center shadow-lg mx-auto mb-2",
                      categories[activeIndex].theme.accent
                    )}>
                      {React.cloneElement(categories[activeIndex].icon, { 
                        className: "h-6 w-6 text-white" 
                      })}
                    </div>
                    <h3 className={cn(
                      "text-xl md:text-2xl font-bold mb-1",
                      categories[activeIndex].theme.text
                    )}>
                      {categories[activeIndex].title}
                    </h3>
                    <p className="text-gray-700 text-sm max-w-xl mx-auto">
                      {categories[activeIndex].description}
                    </p>
                  </div>
                  
                  {/* Two-card horizontal layout - MORE COMPACT */}
                  <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 px-4 md:px-8 pb-5 relative z-10">
                    {/* Left card: Key Benefits */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-white/70 shadow-sm flex flex-col h-full relative overflow-hidden">
                      <div className="flex items-start gap-2 mb-2">
                        <div className={cn(
                          "w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5",
                          categories[activeIndex].theme.accent
                        )}>
                          <span className="text-white text-xs font-bold">✓</span>
                        </div>
                        <h4 className={cn(
                          "text-sm font-semibold",
                          categories[activeIndex].theme.text
                        )}>
                          Key Benefits
                        </h4>
                      </div>
                      
                      <ul className="grid gap-1.5 flex-1 relative">
                        {categories[activeIndex].benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <div className={cn(
                              "w-4 h-4 rounded-full flex items-center justify-center flex-none mt-0.5",
                              categories[activeIndex].theme.accentLight
                            )}>
                              <span className={cn(
                                "text-[10px] font-bold",
                                categories[activeIndex].theme.text
                              )}>
                                {idx + 1}
                              </span>
                            </div>
                            <div>
                              <h5 className={cn(
                                "text-xs font-medium",
                                categories[activeIndex].theme.text
                              )}>
                                {benefit}
                              </h5>
                              <p className="text-[10px] text-gray-500 mt-0.5 line-clamp-1">
                                {getBenefitDescription(categories[activeIndex].title, benefit)}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-2 pt-2 border-t border-gray-100">
                        <div className="flex items-center gap-1.5">
                          <div className={cn(
                            "w-5 h-5 rounded-full flex items-center justify-center flex-none",
                            categories[activeIndex].theme.accent
                          )}>
                            <Star className="h-3 w-3 text-white fill-white" />
                          </div>
                          <div>
                            <div className="flex items-center">
                              <span className="text-[10px] font-medium text-gray-700">Bestseller:</span>
                              <span className={cn(
                                "text-xs font-medium ml-1",
                                categories[activeIndex].theme.text
                              )}>
                                {categories[activeIndex].featured.name}
                              </span>
                            </div>
                            <div className="flex items-center mt-0.5">
                              <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={cn(
                                      "w-2 h-2",
                                      i < Math.floor(categories[activeIndex].featured.rating)
                                        ? "text-yellow-400 fill-yellow-400"
                                        : "text-gray-200"
                                    )}
                                  />
                                ))}
                              </div>
                              <span className="ml-1 text-[9px] text-gray-500">
                                ({categories[activeIndex].featured.reviews})
                              </span>
                              <span className={cn(
                                "ml-auto text-[10px] font-semibold",
                                categories[activeIndex].theme.text
                              )}>
                                {categories[activeIndex].featured.price}
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
                          categories[activeIndex].theme.accent
                        )}>
                          <Users2 className="h-3.5 w-3.5 text-white" />
                        </div>
                        <h4 className={cn(
                          "text-sm font-semibold",
                          categories[activeIndex].theme.text
                        )}>
                          Perfect For
                        </h4>
                      </div>
                      
                      <ul className="grid gap-1.5 flex-1 relative">
                        {recommendationsMap[categories[activeIndex].title].slice(0, 4).map((rec, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <div className={cn(
                              "relative w-4 h-4 rounded-full flex items-center justify-center flex-none mt-0.5 overflow-hidden",
                              "before:absolute before:inset-0",
                              `before:bg-gradient-to-br before:from-${categories[activeIndex].theme.accent.replace('bg-', '')}/70 before:to-${categories[activeIndex].theme.accentDark.replace('bg-', '')}/70`
                            )}>
                              <span className="relative text-white font-medium text-[8px]">
                                {getInitial(rec)}
                              </span>
                            </div>
                            <span className="text-xs text-gray-700">{rec}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="mt-2 pt-2 border-t border-gray-100">
                        <Button 
                          asChild
                          className={cn(
                            "w-full",
                            categories[activeIndex].theme.button
                          )}
                          size="sm"
                        >
                          <Link href={categories[activeIndex].href} className="flex items-center justify-center gap-1.5">
                            <span>Explore Collection</span>
                            <ArrowRight className="h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Thumbnail indicators */}
          <div className="flex justify-center mt-4 gap-2">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={cn(
                  "relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden transition-all duration-300",
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
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mx-auto max-w-6xl overflow-x-auto px-2"
        >
          {categories.map((category, index) => (
            <div key={category.title} className="h-full overflow-visible py-3 px-1">
              <motion.div
                variants={itemVariants}
                initial="initial"
                animate="visible"
                whileHover="hover"
                className="h-full perspective-600"
              >
                <Link href={category.href} className="block h-full">
                  <motion.div 
                    className={cn(
                      "relative flex flex-col items-center h-full min-h-[260px] md:min-h-[280px] rounded-2xl bg-white shadow-sm overflow-hidden",
                    )}
                    variants={cardVariants}
                  >
                    {/* Card top gradient banner */}
                    <div className={cn(
                      "absolute top-0 left-0 right-0 h-24 w-full bg-gradient-to-br rounded-t-2xl",
                      `from-${category.theme.accentLight.replace('bg-', '')} to-white/20`
                    )}></div>
                    
                    {/* Icon in circle */}
                    <div className="relative z-10 mt-5 mb-3">
                      <motion.div 
                        className={cn(
                          "w-[80px] h-[80px] md:w-[90px] md:h-[90px] rounded-full relative overflow-hidden",
                          "shadow-md border-4 border-white bg-white p-1"
                        )}
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
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
                    <div className="relative z-10 flex flex-col items-center px-5 text-center">
                      <h3 className={cn(
                        "text-lg md:text-xl font-bold leading-tight mb-2",
                        category.theme.text
                      )}>
                        {category.title === "Pet CBD" ? (
                          <>
                            <Heart className="inline-block h-4 w-4 mr-1 text-red-500 fill-red-500" /> 
                            PET
                            <Heart className="inline-block h-4 w-4 ml-1 text-red-500 fill-red-500" />
                            <br/>
                            CBD
                          </>
                        ) : (
                          category.title
                        )}
                      </h3>
                      
                      <p className="text-sm text-gray-600 mb-auto">{category.description.split('.')[0] + '.'}</p>
                      
                      <div className="mt-auto pt-5 w-full pb-4">
                        <div className={cn(
                          "flex items-center justify-between py-2.5 px-5 rounded-full w-full",
                          "border border-gray-200 bg-white shadow-sm",
                          category.theme.text,
                          "font-medium text-sm"
                        )}>
                          <span>View</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            </div>
          ))}
        </motion.div>
        
        {/* View all categories link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-16"
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