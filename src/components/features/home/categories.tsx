'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Heart, Activity, Sparkles, Leaf } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Main category data
const categories = [
  {
    title: "Health & Wellness",
    description: "Products designed to promote balance, relaxation, and overall wellbeing",
    src: "/images/2.png",
    href: "/health",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100/60",
    iconBg: "bg-green-600",
    textColor: "text-green-800",
    borderColor: "border-green-200",
    hoverBorderColor: "group-hover:border-green-300",
    hoverShadow: "hover:shadow-green-100/50",
    icon: <Heart className="w-5 h-5 text-white" />,
    tagline: "Balance your mind and body",
  },
  {
    title: "Sport & Recovery",
    description: "Active formulations to support performance, recovery, and mobility",
    src: "/images/2.png",
    href: "/sport",
    bgColor: "bg-gradient-to-br from-red-50 to-red-100/60",
    iconBg: "bg-red-600",
    textColor: "text-red-800",
    borderColor: "border-red-200",
    hoverBorderColor: "group-hover:border-red-300",
    hoverShadow: "hover:shadow-red-100/50",
    icon: <Activity className="w-5 h-5 text-white" />,
    tagline: "Enhance performance and recovery",
  },
  {
    title: "Beauty & Skincare",
    description: "CBD-infused formulas to enhance your natural glow and skin health",
    src: "/images/2.png",
    href: "/beauty",
    bgColor: "bg-gradient-to-br from-amber-50 to-amber-100/60",
    iconBg: "bg-amber-600",
    textColor: "text-amber-800",
    borderColor: "border-amber-200",
    hoverBorderColor: "group-hover:border-amber-300",
    hoverShadow: "hover:shadow-amber-100/50",
    icon: <Sparkles className="w-5 h-5 text-white" />,
    tagline: "Radiant skin from within",
  },
  {
    title: "Hybrid Solutions",
    description: "Innovative blends combining CBD with functional mushrooms and botanicals",
    src: "/images/2.png",
    href: "/hybrid",
    bgColor: "bg-gradient-to-br from-amber-800/10 to-amber-700/20",
    iconBg: "bg-amber-800",
    textColor: "text-amber-900",
    borderColor: "border-amber-300",
    hoverBorderColor: "group-hover:border-amber-400",
    hoverShadow: "hover:shadow-amber-100/50",
    icon: <Leaf className="w-5 h-5 text-white" />,
    tagline: "The best of both worlds",
  }
]

export function FeaturedProducts() {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-b from-green-50 via-white to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
      
      <div className="container mx-auto max-w-6xl px-4 relative">
        <div className="flex flex-col items-center gap-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="px-4 py-1 text-sm bg-white border-green-200 text-green-700 flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              Our Categories
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold md:text-5xl max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-600 to-green-700"
          >
            Find Your Perfect CBD Match
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mt-3 text-lg"
          >
            Explore our specialized categories to find products perfectly suited to your unique needs
          </motion.p>
        </div>

        {/* Grid of Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="w-full"
            >
              <Link href={category.href} className="block h-full">
                <Card className={cn(
                  "group relative overflow-hidden h-full transition-all duration-300 border",
                  category.borderColor,
                  category.bgColor,
                  `${category.hoverBorderColor} hover:shadow-md ${category.hoverShadow} hover:translate-y-[-3px]`
                )}>
                  <div className="p-6 flex flex-col h-full">
                    {/* Icon and Category - Centered */}
                    <div className="flex flex-col items-center text-center gap-3 mb-4">
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center",
                        category.iconBg
                      )}>
                        {category.icon}
                      </div>
                      <h3 className={cn("text-lg font-semibold", category.textColor)}>{category.title}</h3>
                    </div>
                    
                    {/* Product Image */}
                    <div className="relative w-full h-36 my-4 mx-auto group-hover:scale-105 transition-transform duration-300">
                      <Image
                        src={category.src}
                        alt={category.title}
                        fill
                        className="object-contain drop-shadow-md"
                      />
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-center text-gray-600 mb-4 line-clamp-2">{category.description}</p>
                    
                    {/* Tagline */}
                    <div className={cn("mt-auto text-center text-sm font-medium py-1", category.textColor)}>
                      {category.tagline} <ArrowRight className="inline ml-1 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Button */}
        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-7 py-3 h-auto shadow-md"
              asChild
            >
              <Link href="/shop" className="flex items-center gap-2.5">
                <div className="relative w-5 h-5">
                  <Image 
                    src="/images/2.png"
                    alt="Twistly Icon" 
                    fill
                    className="object-contain"
                  />
                </div>
                <Separator orientation="vertical" className="h-4 bg-white/30" />
                <span className="text-base font-medium">View All Products</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 