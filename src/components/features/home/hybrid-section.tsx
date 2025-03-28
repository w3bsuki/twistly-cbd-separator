'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Star, Heart, Brain, Flower2, Shield, Dumbbell, Activity, Check, Sparkles, ShoppingCart, Info, Leaf, Users, Clock, CheckCircle, XCircle, X, Beaker, Zap, CheckCircle as CheckCircleIcon, Bot } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

// Hybrid products data
const hybridProducts = [
  {
    name: "Mushroom & CBD Tincture",
    strength: "750mg CBD + 500mg Mushroom",
    image: "/images/tincture2.png",
    price: "$59.99",
    rating: 4.8,
    reviews: 86,
    description: "Our premium CBD-mushroom blend for cognitive support",
    benefits: ["Brain function", "Immunity", "Focus"],
    badgeColor: "bg-amber-800",
    featured: true
  },
  {
    name: "Lion's Mane CBD Capsules",
    strength: "600mg CBD + 1000mg Lion's Mane",
    image: "/images/tincture2.png",
    price: "$49.99",
    rating: 4.7,
    reviews: 64,
    description: "Cognitive enhancement with Lion's Mane and CBD",
    benefits: ["Mental clarity", "Memory", "Neuroprotection"],
    badgeColor: "bg-amber-700",
    featured: true
  },
  {
    name: "Reishi Calm Gummies",
    strength: "300mg CBD + 500mg Reishi",
    image: "/images/tincture2.png",
    price: "$39.99",
    rating: 4.9,
    reviews: 72,
    description: "Stress-relief gummies with adaptogenic Reishi mushroom",
    benefits: ["Stress relief", "Immune support", "Balance"],
    badgeColor: "bg-amber-600",
    featured: true
  },
  {
    name: "Chaga Immune Support",
    strength: "1000mg CBD + 800mg Chaga",
    image: "/images/tincture2.png",
    price: "$69.99",
    rating: 4.8,
    reviews: 48,
    description: "Powerful immune-boosting formula with Chaga mushroom",
    benefits: ["Immune defense", "Antioxidant", "Vitality"],
    badgeColor: "bg-amber-900",
    featured: false
  },
  {
    name: "Cordyceps Energy Blend",
    strength: "500mg CBD + 700mg Cordyceps",
    image: "/images/tincture2.png",
    price: "$54.99",
    rating: 4.6,
    reviews: 52,
    description: "Energy and stamina formula with Cordyceps mushroom",
    benefits: ["Energy", "Athletic performance", "Endurance"],
    badgeColor: "bg-amber-600",
    featured: false
  }
]

// Mushroom-CBD benefits data
const mushroomCBDBenefits = [
  {
    title: "Cognitive Enhancement",
    description: "Functional mushrooms like Lion's Mane combined with CBD support brain health and cognitive function.",
    icon: <Brain className="h-6 w-6 text-amber-800" />,
    color: "bg-amber-50/80 border-amber-200"
  },
  {
    title: "Immune Support",
    description: "Medicinal mushrooms provide powerful immune system support, complemented by CBD's anti-inflammatory properties.",
    icon: <Shield className="h-6 w-6 text-amber-800" />,
    color: "bg-amber-50/80 border-amber-200"
  },
  {
    title: "Adaptogenic Balance",
    description: "Mushroom and CBD combinations help the body adapt to stress and maintain homeostasis.",
    icon: <Leaf className="h-6 w-6 text-amber-800" />,
    color: "bg-amber-50/80 border-amber-200"
  },
  {
    title: "Synergistic Effect",
    description: "The entourage effect of combining mushrooms with CBD creates more powerful benefits than either alone.",
    icon: <Sparkles className="h-6 w-6 text-amber-800" />,
    color: "bg-amber-50/80 border-amber-200"
  }
]

export function HybridAndMushrooms() {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-amber-100/70 to-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Badge className="bg-amber-900 text-white hover:bg-amber-950 px-4 py-1 rounded-full text-sm mb-3">
              Hybrid & Mushrooms
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-950 via-amber-800 to-amber-900 mb-3">
              Advanced CBD-Mushroom Formulas
            </h2>
            <p className="text-amber-950 text-base max-w-2xl text-center">
              Experience the synergistic benefits of functional mushrooms combined with premium CBD in our innovative hybrid formulations.
            </p>
          </motion.div>
        </div>

        {/* CBD-Mushroom Benefits Section - More compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {mushroomCBDBenefits.map((benefit, index) => (
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
            <h3 className="text-2xl md:text-3xl font-bold text-amber-950">Featured Hybrid Products</h3>
            <p className="text-amber-800 mt-1">Discover our innovative CBD and functional mushroom blends</p>
          </motion.div>
          
          <Link href="/hybrid-and-mushrooms" className="text-amber-800 hover:text-amber-950 font-medium text-sm flex items-center gap-1 mt-2">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Products Grid - More compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {hybridProducts.filter(p => p.featured).map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-md">
                <CardContent className="p-0">
                  <div className="relative">
                    <AspectRatio ratio={1/1} className="bg-gradient-to-b from-amber-100/70 to-white">
                      <div className="relative h-full w-full p-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-1 scale-75 transition-transform duration-300 group-hover:scale-[0.85]"
                        />
                      </div>
                      <div className="absolute top-2 right-2 z-10">
                        <Badge className={cn("text-white text-xs px-2 py-0.5", product.badgeColor)}>
                          {product.strength}
                        </Badge>
                      </div>
                    </AspectRatio>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-sm text-gray-900 group-hover:text-amber-800 transition-colors">{product.name}</h3>
                      <p className="font-bold text-sm text-amber-800">{product.price}</p>
                    </div>
                    
                    <div className="flex items-center mb-1.5">
                      <div className="flex mr-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < Math.floor(product.rating) 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-200 fill-gray-200"}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.benefits.map((benefit, i) => (
                        <span key={i} className="bg-amber-50 text-[10px] text-amber-700 px-1.5 py-0.5 rounded-full flex items-center">
                          <Check className="h-2 w-2 mr-0.5" /> {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-3 pt-0 flex gap-1">
                  <Button size="sm" variant="default" className="bg-amber-800 hover:bg-amber-900 text-white text-xs px-3 h-7 rounded-lg transition-colors flex-1">
                    <ShoppingCart className="h-3 w-3 mr-1" /> Add to Cart
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 w-10 flex items-center justify-center text-amber-800 border-amber-200 hover:bg-amber-50 hover:text-amber-900 rounded-lg transition-colors"
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-amber-800 flex items-center gap-1.5">
                          <Zap className="h-5 w-5" />
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
                        
                        <h4 className="font-medium text-amber-800 mb-2 flex items-center">
                          <Sparkles className="h-4 w-4 mr-1.5" /> Key Benefits
                        </h4>
                        
                        <div className="bg-amber-50 rounded-lg p-4 mb-4">
                          <ul className="space-y-3">
                            {product.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="bg-white rounded-full p-1 mt-0.5">
                                  <Check className="h-3.5 w-3.5 text-amber-800" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-800">{benefit}</p>
                                  <p className="text-xs text-gray-600">
                                    Experience {benefit.toLowerCase()} with this specialized hybrid formula.
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <h4 className="font-medium text-amber-800 mb-2 flex items-center">
                          <Shield className="h-4 w-4 mr-1.5" /> Hybrid Formula Advantages
                        </h4>
                        <p className="text-sm text-gray-700 mb-4">
                          This hybrid CBD product combines the best of multiple categories, giving you comprehensive benefits including improved wellness, athletic recovery, and skin health.
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 w-10 flex items-center justify-center text-amber-800 border-amber-200 hover:bg-amber-50 hover:text-amber-900 rounded-lg transition-colors"
                      >
                        <Users className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-amber-800 flex items-center gap-1.5">
                          <Users className="h-5 w-5" />
                          Who is {product.name} for?
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="bg-amber-50 p-4 rounded-lg mb-4">
                          <p className="text-sm text-gray-700">
                            This hybrid product is perfect for individuals with multiple wellness goals who want a comprehensive solution. Ideal for those who need versatile benefits in one product.
                          </p>
                        </div>
                        
                        <h4 className="font-medium text-amber-800 mb-2 flex items-center">
                          <CheckCircleIcon className="h-4 w-4 mr-1.5" /> Recommended For
                        </h4>
                        <ul className="space-y-2 mb-4">
                          <li className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-amber-800 mt-0.5" />
                            <span className="text-sm text-gray-700">Active individuals who also value mental wellness</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-amber-800 mt-0.5" />
                            <span className="text-sm text-gray-700">Those seeking a multi-purpose CBD solution</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Check className="h-3.5 w-3.5 text-amber-800 mt-0.5" />
                            <span className="text-sm text-gray-700">People who want both internal and external benefits</span>
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
                        className="h-8 w-10 flex items-center justify-center text-amber-800 border-amber-200 hover:bg-amber-50 hover:text-amber-900 rounded-lg transition-colors"
                      >
                        <Beaker className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-amber-800 flex items-center gap-1.5">
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
                          This hybrid product contains {product.strength} of specially formulated CBD blend. Follow the recommended guidelines for optimal experience with this versatile product.
                        </p>
                        
                        <h4 className="font-medium text-amber-800 mb-2 flex items-center">
                          <Info className="h-4 w-4 mr-1.5" /> How to Use
                        </h4>
                        <p className="text-sm text-gray-700 mb-4">
                          Use as directed based on your specific needs. This hybrid formula can be applied topically, taken orally, or used in combination depending on your wellness goals.
                        </p>
                        
                        <div className="bg-amber-50 rounded-lg p-4">
                          <h5 className="font-medium text-amber-800 mb-2">Application Methods:</h5>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-amber-800 mt-0.5" />
                              <span className="text-xs text-gray-700">
                                For internal wellness: Follow oral dosing instructions on package
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-amber-800 mt-0.5" />
                              <span className="text-xs text-gray-700">
                                For skin benefits: Apply topically to target areas
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-amber-800 mt-0.5" />
                              <span className="text-xs text-gray-700">
                                For athletic recovery: Use before or after exercise as needed
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
                    className="h-8 w-10 flex items-center justify-center text-amber-800 hover:text-amber-900 hover:bg-amber-50 transition-colors"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Compact Infinite Slider */}
        <InfiniteSlider gap={12} className="w-full py-4 mb-6">
          {hybridProducts.map((product, index) => (
            <motion.div 
              key={`slider-${index}`} 
              className="relative group w-[180px]"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <AspectRatio ratio={1} className="bg-white rounded-xl border border-amber-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 scale-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-amber-900/20 to-transparent rounded-xl opacity-80 transition-opacity duration-300" />
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

        {/* What Makes Hybrid Special - More compact */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-amber-950">What Makes Our Hybrid Formulas Special</h3>
            <p className="text-amber-800 mt-1">The science behind our CBD and functional mushroom combinations</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="border border-amber-200 transition-all h-full">
                <CardContent className="p-4">
                  <Beaker className="h-8 w-8 text-amber-800 mb-3" />
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Scientific Formulation</h4>
                  <p className="text-xs text-gray-600 line-clamp-4">
                    Our hybrid formulas are developed by a team of experts in botanical medicine and cannabinoid science to ensure optimal ratios and synergistic effects between CBD and functional mushrooms.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="border border-amber-200 transition-all h-full">
                <CardContent className="p-4">
                  <Sparkles className="h-8 w-8 text-amber-800 mb-3" />
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Enhanced Bioavailability</h4>
                  <p className="text-xs text-gray-600 line-clamp-4">
                    Through our proprietary extraction methods, we enhance the bioavailability of both CBD and mushroom compounds, allowing for better absorption and more effective results.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="border border-amber-200 transition-all h-full">
                <CardContent className="p-4">
                  <Shield className="h-8 w-8 text-amber-800 mb-3" />
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Third-Party Testing</h4>
                  <p className="text-xs text-gray-600 line-clamp-4">
                    All our hybrid products undergo rigorous third-party testing to verify potency, purity, and the presence of beneficial compounds from both CBD and mushroom extracts.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
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
            <Button asChild size="lg" className="bg-amber-900 hover:bg-amber-950 text-white rounded-full px-6 transition-colors">
              <Link href="/hybrid-and-mushrooms" className="flex items-center gap-2">
                <Image src="/images/2.png" width={24} height={24} alt="Twistly" className="h-5 w-5" />
                <Separator orientation="vertical" className="h-4 bg-amber-50/20" />
                Explore Hybrid Collection
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-amber-900 text-amber-900 hover:bg-amber-50 rounded-full px-6 transition-colors"
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

// Helper functions for hybrid product dialogs
function getHybridBenefitDescription(benefit: string): string {
  const benefitDescriptions: {[key: string]: string} = {
    "Brain function": "Supports cognitive function, memory, focus and mental clarity with neurotropic mushrooms.",
    "Immunity": "Enhances immune system response with beta-glucans and other immunomodulating compounds.",
    "Focus": "Improves concentration and attention with natural nootropic compounds.",
    "Mental clarity": "Reduces brain fog and supports clear thinking and mental processing.",
    "Memory": "Supports both short-term and long-term memory formation and recall.",
    "Neuroprotection": "Protects neural cells from damage and may support nerve growth factor production.",
    "Stress relief": "Adaptogenic properties help the body respond better to physical and mental stressors.",
    "Immune support": "Strengthens immune system function for better resistance against pathogens.",
    "Balance": "Promotes homeostasis and overall system balance for improved wellbeing.",
    "Immune defense": "Bolsters immune cell activity and function for proactive health maintenance.",
    "Antioxidant": "Contains powerful compounds that neutralize free radicals and reduce oxidative stress.",
    "Vitality": "Improves overall energy, vitality and resilience at the cellular level.",
    "Energy": "Natural energy support without stimulants or caffeine for sustainable vitality.",
    "Athletic performance": "Supports oxygen utilization, energy production and physical stamina.",
    "Endurance": "Helps extend physical performance and reduce fatigue during activity."
  };
  
  return benefitDescriptions[benefit] || "Supports overall wellness through the synergistic effects of CBD and functional mushrooms.";
}

function getHybridMushroomProfile(productName: string): string {
  if (productName.includes("Lion's Mane")) {
    return "Lion's Mane (Hericium erinaceus) is renowned for its cognitive benefits. It may promote nerve growth factor production, supporting brain health, memory, and concentration. Combined with CBD, it creates a powerful nootropic effect.";
  } else if (productName.includes("Reishi")) {
    return "Reishi (Ganoderma lucidum) is known as the 'mushroom of immortality' for its longevity benefits. It's an adaptogen that helps the body cope with stress and supports immune function. The calming properties of Reishi complement CBD's balancing effects.";
  } else if (productName.includes("Chaga")) {
    return "Chaga (Inonotus obliquus) is a potent antioxidant powerhouse, supporting immune health and reducing inflammation. Its high melanin content provides natural DNA protection. When paired with CBD, it creates a comprehensive immune and stress support formula.";
  } else if (productName.includes("Cordyceps")) {
    return "Cordyceps (Cordyceps militaris) boosts energy, stamina, and athletic performance by improving oxygen utilization. It supports respiratory health and provides natural, sustainable energy. Combined with CBD's recovery benefits, it's ideal for active individuals.";
  } else {
    return "This formula features a proprietary blend of functional mushrooms, each selected for their unique benefits. When combined with CBD, these mushrooms create an entourage effect that amplifies the therapeutic potential of both ingredients.";
  }
}

function getHybridSynergy(productName: string): string {
  if (productName.includes("Lion's Mane")) {
    return "The combination of Lion's Mane and CBD creates a powerful neurological support system. While Lion's Mane promotes nerve growth and regeneration, CBD provides neuroprotection and reduces inflammation, resulting in enhanced cognitive function and mental clarity.";
  } else if (productName.includes("Reishi")) {
    return "Reishi and CBD work in tandem to create a comprehensive stress management solution. Reishi helps the body adapt to stress on a physiological level, while CBD works through the endocannabinoid system to promote balance and calm, creating deeper relaxation.";
  } else if (productName.includes("Chaga")) {
    return "Chaga's immune-boosting properties complement CBD's anti-inflammatory effects. Together, they create a two-pronged approach to immune health: strengthening immune response while simultaneously managing excessive inflammation for optimal health.";
  } else if (productName.includes("Cordyceps")) {
    return "Cordyceps increases energy production and oxygen utilization, while CBD helps manage exercise-induced inflammation and promotes faster recovery. This synergy creates an ideal pre- and post-workout combination for athletes and active individuals.";
  } else {
    return "Our carefully formulated mushroom-CBD blend leverages the entourage effect, where multiple natural compounds work together to create benefits greater than the sum of their parts. This synergistic relationship enhances bioavailability and therapeutic potential.";
  }
}

function getHybridIdealUsers(productName: string): string {
  if (productName.includes("Lion's Mane")) {
    return "This product is ideal for knowledge workers, students, creative professionals, and anyone seeking to enhance cognitive performance, memory, and mental clarity. It's particularly beneficial for those experiencing brain fog or cognitive decline.";
  } else if (productName.includes("Reishi")) {
    return "Perfect for individuals dealing with stress, anxiety, and sleep issues. Reishi Calm Gummies are particularly beneficial for professionals in high-pressure environments, those experiencing burnout, or anyone seeking natural stress management solutions.";
  } else if (productName.includes("Chaga")) {
    return "Designed for those looking to strengthen their immune system, particularly during seasonal changes or periods of increased stress. Ideal for frequent travelers, those exposed to environmental stressors, or anyone prioritizing preventative health.";
  } else if (productName.includes("Cordyceps")) {
    return "Created for athletes, fitness enthusiasts, and active individuals seeking natural performance enhancement and improved stamina. Also beneficial for those experiencing fatigue, low energy, or reduced physical performance.";
  } else {
    return "This hybrid formula is designed for wellness-oriented individuals looking to experience the combined benefits of CBD and functional mushrooms. Ideal for those seeking a comprehensive approach to health with both preventative and therapeutic benefits.";
  }
}

function getHybridRecommendedGroups(productName: string): string[] {
  if (productName.includes("Lion's Mane")) {
    return [
      "Students and professionals requiring mental focus",
      "Older adults concerned about cognitive health",
      "Creative professionals seeking mental clarity",
      "Those experiencing mild memory issues",
      "Anyone doing mentally demanding work"
    ];
  } else if (productName.includes("Reishi")) {
    return [
      "Individuals with high stress lifestyles",
      "Those with occasional sleep difficulties",
      "People seeking emotional balance",
      "Those looking for gentle immune support",
      "Anyone needing adaptogenic benefits"
    ];
  } else if (productName.includes("Chaga")) {
    return [
      "Those wanting to strengthen immune function",
      "People exposed to environmental stressors",
      "Individuals seeking antioxidant support",
      "Those with inflammatory concerns",
      "Anyone focused on preventative health"
    ];
  } else if (productName.includes("Cordyceps")) {
    return [
      "Athletes and fitness enthusiasts",
      "Those experiencing fatigue or low energy",
      "People seeking respiratory support",
      "Active individuals focused on recovery",
      "Anyone wanting natural performance enhancement"
    ];
  } else {
    return [
      "Health-conscious individuals seeking natural wellness support",
      "Those interested in plant-based supplements",
      "People looking for synergistic natural remedies",
      "Individuals seeking balanced, whole-body support",
      "Those new to functional mushrooms who want to experience their benefits"
    ];
  }
}

function getHybridNotRecommendedGroups(): string[] {
  return [
    "Pregnant or breastfeeding women (consult healthcare provider)",
    "Those taking blood-thinning medications",
    "Individuals with mushroom allergies",
    "Children under 18 years",
    "Those with certain autoimmune conditions (consult healthcare provider first)"
  ];
} 