'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Sparkles, Droplets, Star, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Best sellers by category
const categoryBestSellers = [
  {
    title: "Health & Wellness",
    description: "Our top CBD oil for anxiety relief and better sleep",
    productName: "Premium CBD Oil",
    price: 59.99,
    rating: 4.9,
    reviewCount: 142,
    src: "/images/tincture2.png",
    href: "/shop/premium-cbd-oil",
    bgColor: "bg-gradient-to-br from-green-50 to-green-100/60",
    iconBg: "bg-green-600",
    textColor: "text-green-800",
    borderColor: "border-green-200",
    hoverBorderColor: "group-hover:border-green-300",
    hoverShadow: "hover:shadow-green-100/50",
    icon: <Heart className="w-6 h-6 text-white" />,
    tagline: "Mood & Calm",
    benefits: ["Anxiety relief", "Better sleep", "Overall wellness"]
  },
  {
    title: "Sport & Recovery",
    description: "Fast-acting muscle recovery formula for athletes",
    productName: "Recovery Muscle Balm",
    price: 49.99,
    rating: 4.8,
    reviewCount: 89,
    src: "/images/tincture2.png",
    href: "/shop/recovery-balm",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100/60",
    iconBg: "bg-blue-600",
    textColor: "text-blue-800",
    borderColor: "border-blue-200",
    hoverBorderColor: "group-hover:border-blue-300",
    hoverShadow: "hover:shadow-blue-100/50",
    icon: <Droplets className="w-6 h-6 text-white" />,
    tagline: "Fast Recovery",
    benefits: ["Muscle relief", "Reduces inflammation", "Joint support"]
  },
  {
    title: "Beauty & Skincare",
    description: "Luxurious facial serum for radiant, youthful skin",
    productName: "Radiance CBD Face Serum",
    price: 79.99,
    rating: 4.7,
    reviewCount: 76,
    src: "/images/tincture2.png",
    href: "/shop/face-serum",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100/60",
    iconBg: "bg-purple-600",
    textColor: "text-purple-800",
    borderColor: "border-purple-200",
    hoverBorderColor: "group-hover:border-purple-300",
    hoverShadow: "hover:shadow-purple-100/50",
    icon: <Sparkles className="w-6 h-6 text-white" />,
    tagline: "Youthful Glow",
    benefits: ["Anti-aging", "Skin hydration", "Reduces inflammation"]
  },
  {
    title: "Hybrid & Mushrooms",
    description: "Ultimate cognitive support with CBD and functional mushrooms",
    productName: "Cognitive Support Capsules",
    price: 69.99,
    rating: 4.8,
    reviewCount: 104,
    src: "/images/tincture2.png",
    href: "/shop/cognitive-capsules",
    bgColor: "bg-gradient-to-br from-amber-50 to-amber-100/60",
    iconBg: "bg-amber-600",
    textColor: "text-amber-800",
    borderColor: "border-amber-200",
    hoverBorderColor: "group-hover:border-amber-300",
    hoverShadow: "hover:shadow-amber-100/50",
    icon: <Droplets className="w-6 h-6 text-white" />,
    tagline: "Mental Clarity",
    benefits: ["Focus & clarity", "Stress relief", "Immune support"]
  },
  {
    title: "Pet CBD",
    description: "Calming CBD oil specially formulated for pets",
    productName: "Pet Calm CBD Oil",
    price: 44.99,
    rating: 4.9,
    reviewCount: 118,
    src: "/images/tincture2.png",
    href: "/shop/pet-cbd-oil",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100/60",
    iconBg: "bg-orange-500",
    textColor: "text-orange-700",
    borderColor: "border-orange-200",
    hoverBorderColor: "group-hover:border-orange-300",
    hoverShadow: "hover:shadow-orange-100/50",
    icon: <Star className="w-6 h-6 text-white" />,
    tagline: "Pet Wellness",
    benefits: ["Reduces anxiety", "Joint support", "Overall pet wellness"]
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
    <section className="py-14 md:py-20 bg-gradient-to-b from-white via-white to-green-50/30 relative overflow-hidden">
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
              <Star className="w-4 h-4" />
              Best Sellers
            </Badge>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl font-bold md:text-5xl max-w-3xl bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-600 to-green-700"
          >
            Top Products By Category
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 max-w-2xl mt-3 text-lg"
          >
            Our most popular products from each category, handpicked based on customer reviews
          </motion.p>
        </div>

        {/* Grid of Best Seller Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categoryBestSellers.map((product, index) => (
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
                    product.borderColor,
                    product.bgColor,
                    "shadow-sm hover:shadow-md"
                  )}
                  onClick={(e) => handleCardClick(product.href, e)}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/5 group-hover:to-white/0 transition-colors duration-500"></div>
                  <div className={cn(
                    "absolute bottom-0 h-1 left-0 w-0 group-hover:w-full transition-all duration-500",
                    product.iconBg
                  )}></div>
                  <div className="p-4 flex flex-col h-full justify-between relative z-20">
                    {/* Category Badge */}
                    <div className="flex justify-center mb-2">
                      <Badge className={cn(
                        "rounded-full px-3 py-1 text-xs font-medium",
                        product.iconBg,
                        "text-white"
                      )}>
                        {product.title}
                      </Badge>
                    </div>
                    
                    {/* Product Name */}
                    <h3 className={cn(
                      "text-center font-bold text-base mb-1", 
                      product.textColor
                    )}>
                      {product.productName}
                    </h3>
                    
                    {/* Tagline */}
                    <p className="text-xs text-center text-gray-600 mb-3">
                      {product.tagline}
                    </p>
                    
                    {/* Product Image */}
                    <div className="relative w-full h-28 my-2 mx-auto">
                      <Image
                        src={product.src}
                        alt={product.productName}
                        fill
                        className="object-contain drop-shadow-md"
                      />
                    </div>
                    
                    {/* Price and Rating */}
                    <div className="flex justify-between items-center my-2">
                      <div className="font-bold text-lg">
                        ${product.price}
                      </div>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={cn(
                                "h-3.5 w-3.5", 
                                i < Math.floor(product.rating) 
                                  ? "fill-amber-400 text-amber-400" 
                                  : "fill-gray-200 text-gray-200"
                              )}
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mt-1 mb-3">
                      <div className="space-y-1">
                        {product.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center text-xs text-gray-600">
                            <div className={cn(
                              "h-1.5 w-1.5 rounded-full mr-1.5", 
                              product.iconBg
                            )}></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Button 
                      className={cn(
                        "w-full rounded-full justify-center gap-1 mt-auto border",
                        product.iconBg,
                        "text-white",
                        "transition-all duration-300 hover:bg-white",
                        {
                          "hover:text-green-600 hover:border-green-600": product.title === "Health & Wellness",
                          "hover:text-blue-600 hover:border-blue-600": product.title === "Sport & Recovery",
                          "hover:text-purple-600 hover:border-purple-600": product.title === "Beauty & Skincare",
                          "hover:text-amber-600 hover:border-amber-600": product.title === "Hybrid & Mushrooms",
                          "hover:text-orange-500 hover:border-orange-500": product.title === "Pet CBD"
                        }
                      )}
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(product.href);
                      }}
                    >
                      <span className="font-medium text-sm">View Product</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </Button>
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
              <span className="text-base font-medium">Browse All Products</span>
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