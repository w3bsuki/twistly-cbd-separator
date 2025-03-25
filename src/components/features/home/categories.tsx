'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
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
    icon: <Heart className="w-6 h-6 text-white" />,
    tagline: "Balance your mind and body",
  },
  {
    title: "Sport & Recovery",
    description: "Active formulations to support performance, recovery, and mobility",
    src: "/images/2.png",
    href: "/sport",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100/60",
    iconBg: "bg-blue-600",
    textColor: "text-blue-800",
    borderColor: "border-blue-200",
    hoverBorderColor: "group-hover:border-blue-300",
    hoverShadow: "hover:shadow-blue-100/50",
    icon: <Activity className="w-6 h-6 text-white" />,
    tagline: "Enhance performance and recovery",
  },
  {
    title: "Beauty & Skincare",
    description: "CBD-infused formulas to enhance your natural glow and skin health",
    src: "/images/2.png",
    href: "/beauty",
    bgColor: "bg-gradient-to-br from-purple-50 to-pink-100/60",
    iconBg: "bg-purple-600",
    textColor: "text-purple-800",
    borderColor: "border-purple-200",
    hoverBorderColor: "group-hover:border-purple-300",
    hoverShadow: "hover:shadow-purple-100/50",
    icon: <Sparkles className="w-6 h-6 text-white" />,
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
    icon: <Leaf className="w-6 h-6 text-white" />,
    tagline: "The best of both worlds",
  }
]

export function FeaturedProducts() {
  const router = useRouter();
  
  const handleCardClick = (href: string, event: React.MouseEvent) => {
    // Prevent navigation if clicking on a button or link inside the card
    if (
      event.target instanceof HTMLButtonElement ||
      event.target instanceof HTMLAnchorElement ||
      (event.target instanceof HTMLElement && 
       (event.target.closest('button') || event.target.closest('a')))
    ) {
      return;
    }
    
    router.push(href);
  };
  
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
              <div className="block h-full">
                <Card 
                  className={cn(
                    "group relative overflow-hidden h-full transition-all duration-300 border cursor-pointer",
                    category.borderColor,
                    category.bgColor,
                    "shadow-sm hover:shadow-md"
                  )}
                  onClick={(e) => handleCardClick(category.href, e)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/5 group-hover:to-white/0 transition-colors duration-500"></div>
                  <div className={cn(
                    "absolute bottom-0 h-1 left-0 w-0 group-hover:w-full transition-all duration-500",
                    category.iconBg
                  )}></div>
                  <div className="p-6 flex flex-col h-full justify-between relative z-20">
                    {/* Icon and Category - Centered */}
                    <div className="flex flex-col items-center text-center gap-3 mb-2">
                      <div className={cn(
                        "w-12 h-12 rounded-full flex items-center justify-center shadow-md transition-transform duration-300",
                        category.iconBg
                      )}>
                        {category.icon}
                      </div>
                      <h3 className={cn("text-xl md:text-2xl font-bold", category.textColor)}>{category.title}</h3>
                    </div>
                    
                    {/* Product Image */}
                    <div className="relative w-full h-36 my-4 mx-auto">
                      <Image
                        src={category.src}
                        alt={category.title}
                        fill
                        className="object-contain drop-shadow-md"
                      />
                    </div>
                    
                    {/* Description */}
                    <p className="text-sm text-center text-gray-600 mb-5 line-clamp-2">{category.description}</p>
                    
                    {/* CTA Button */}
                    <div className="mt-4 pt-4 border-t">
                      <Button 
                        className={cn(
                          "w-full rounded-full justify-center gap-1 border",
                          category.iconBg,
                          "text-white",
                          "transition-all duration-300",
                          {
                            "hover:bg-white hover:text-green-600 hover:border-green-600": category.title === "Health & Wellness",
                            "hover:bg-white hover:text-blue-600 hover:border-blue-600": category.title === "Sport & Recovery",
                            "hover:bg-white hover:text-purple-600 hover:border-purple-600": category.title === "Beauty & Skincare",
                            "hover:bg-white hover:text-amber-800 hover:border-amber-800": category.title === "Hybrid Solutions"
                          }
                        )}
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(category.href);
                        }}
                      >
                        <span className="font-medium">Explore</span>
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
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
          <Button 
            className="bg-green-600 hover:bg-white hover:text-green-700 text-white border border-green-600 rounded-full px-7 py-6 h-auto shadow-sm transition-colors duration-300"
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
              <Separator orientation="vertical" className="h-4 bg-white/30 group-hover:bg-green-200/50" />
              <span className="text-base font-medium">View All Products</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export function FeaturedCollection({ title, category, href }: FeaturedCollectionProps) {
  // Create simplified product data for the carousel
  const productTypes = [
    { name: "Full Spectrum", concentration: "1000mg CBD" },
    { name: "Broad Spectrum", concentration: "750mg CBD" },
    { name: "Sleep CBD", concentration: "500mg CBD" },
    { name: "Wellness Plus", concentration: "500mg CBD" },
    { name: "Daily Wellness", concentration: "250mg CBD" },
    { name: "Full Spectrum", concentration: "1000mg CBD" },
    { name: "Broad Spectrum", concentration: "750mg CBD" },
    { name: "Sleep CBD", concentration: "500mg CBD" }
  ]
} 