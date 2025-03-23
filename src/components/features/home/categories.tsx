'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight, Leaf, Heart, Activity, Sparkles, Check } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Use local images instead of Unsplash URLs for better reliability
const categoryCards = [
  {
    title: "Health & Wellness",
    description: "Premium CBD oils and supplements",
    src: "/images/tincture.png",
    href: "/health",
    bgColor: "bg-gradient-to-br from-green-50 to-emerald-50",
    iconColor: "bg-gradient-to-br from-green-600 to-emerald-500",
    borderColor: "border-green-200",
    textColor: "text-green-800",
    descColor: "text-green-600",
    hoverBg: "group-hover:bg-green-700",
    hoverBorder: "group-hover:border-green-700",
    hoverShadow: "hover:shadow-green-100",
    icon: <Heart className="w-5 h-5 text-white" />,
    benefits: [
      "Stress & anxiety relief",
      "Sleep improvement",
      "Mood balance"
    ]
  },
  {
    title: "Sport & Recovery",
    description: "High-performance CBD solutions",
    src: "/images/tincture.png",
    href: "/sport",
    bgColor: "bg-gradient-to-br from-red-50 to-rose-50",
    iconColor: "bg-gradient-to-br from-red-600 to-red-500",
    borderColor: "border-red-200",
    textColor: "text-red-800",
    descColor: "text-red-600",
    hoverBg: "group-hover:bg-red-700",
    hoverBorder: "group-hover:border-red-700",
    hoverShadow: "hover:shadow-red-100",
    icon: <Activity className="w-5 h-5 text-white" />,
    benefits: [
      "Muscle recovery",
      "Joint support",
      "Performance focus"
    ]
  },
  {
    title: "Beauty & Skincare",
    description: "CBD-infused beauty products",
    src: "/images/tincture.png",
    href: "/beauty",
    bgColor: "bg-gradient-to-br from-amber-50 to-yellow-50",
    iconColor: "bg-gradient-to-br from-amber-500 to-yellow-500",
    borderColor: "border-amber-200",
    textColor: "text-amber-800",
    descColor: "text-amber-600",
    hoverBg: "group-hover:bg-amber-600",
    hoverBorder: "group-hover:border-amber-600",
    hoverShadow: "hover:shadow-amber-100",
    icon: <Sparkles className="w-5 h-5 text-white" />,
    benefits: [
      "Skin hydration",
      "Redness reduction",
      "Anti-aging properties"
    ]
  },
  {
    title: "Hybrid Solutions",
    description: "Innovative CBD blends",
    src: "/images/tincture.png",
    href: "/hybrid",
    bgColor: "bg-gradient-to-br from-stone-50 to-amber-50",
    iconColor: "bg-gradient-to-br from-stone-600 to-amber-700",
    borderColor: "border-stone-200",
    textColor: "text-stone-800",
    descColor: "text-stone-600",
    hoverBg: "group-hover:bg-stone-700",
    hoverBorder: "group-hover:border-stone-700",
    hoverShadow: "hover:shadow-stone-100",
    icon: <Leaf className="w-5 h-5 text-white" />,
    benefits: [
      "All-in-one formulas",
      "Comprehensive benefits",
      "Simplified routines"
    ]
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-green-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
      
      {/* Additional decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-green-200 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-green-300 mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-green-200 mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="px-4 py-1 text-sm bg-white/80 backdrop-blur-sm border-green-200/50 text-green-700 flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              Explore Our Categories
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl font-bold md:text-4xl lg:text-5xl max-w-3xl bg-clip-text text-transparent bg-gradient-to-b from-green-800 to-green-600"
          >
            Premium CBD Products for Every Lifestyle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-green-700 max-w-2xl mt-4 text-lg"
          >
            Discover our carefully crafted CBD collections designed to enhance your wellbeing in every aspect of life
          </motion.p>
        </div>

        {/* Grid of Larger Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoryCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="w-full"
            >
              <Link href={card.href} className="block h-full">
                <Card className={cn(
                  "group relative overflow-hidden border h-full transition-all duration-300",
                  card.borderColor,
                  card.bgColor,
                  `hover:shadow-lg ${card.hoverShadow} hover:translate-y-[-3px]`
                )}>
                  <div className="p-6 flex flex-col items-center text-center h-full">
                    {/* Icon */}
                    <div className={cn(
                      "w-14 h-14 rounded-full flex items-center justify-center mb-4 shadow-sm",
                      card.iconColor
                    )}>
                      {card.icon}
                    </div>
                    
                    {/* Product Image */}
                    <div className="relative w-24 h-24 mb-4">
                      <Image
                        src={card.src}
                        alt={card.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="mb-4">
                      <h3 className={cn("text-lg font-semibold", card.textColor)}>{card.title}</h3>
                      <p className={cn("text-sm mt-1", card.descColor)}>{card.description}</p>
                    </div>
                    
                    {/* Benefits */}
                    <div className="w-full mb-4">
                      <div className="border-t border-dashed pt-3 mb-2 border-gray-200 w-3/4 mx-auto"></div>
                      <ul className="text-left space-y-1">
                        {card.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className={`w-4 h-4 flex-shrink-0 ${card.descColor}`} />
                            <span className={`text-xs ${card.descColor}`}>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Arrow Button */}
                    <div className="mt-auto">
                      <div className={cn(
                        "w-10 h-10 rounded-full bg-white border flex items-center justify-center mx-auto transition-colors duration-300",
                        card.borderColor,
                        card.hoverBg,
                        card.hoverBorder
                      )}>
                        <ChevronRight className={cn("w-5 h-5 group-hover:text-white transition-colors duration-300", card.descColor)} />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Products Button */}
        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link href="/shop">
            <Button size="lg" className="rounded-full px-8 bg-green-700 text-white hover:bg-green-800 border-2 border-white shadow-md">
              View All Products
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 