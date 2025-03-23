"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import { Button } from "@/components/ui/button"
import { Leaf, ArrowRight, Star, Shield, TrendingUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

function Hero() {
  const [isExploreHovered, setIsExploreHovered] = useState(false)
  const [isLearnHovered, setIsLearnHovered] = useState(false)
  
  return (
    <div className="relative overflow-hidden">
      {/* Hemp-inspired Background */}
      <div className="absolute inset-0 w-full h-full">
        {/* Gradient background with hemp-inspired colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-50 via-white to-green-50" />
        
        {/* Hemp-inspired pattern */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px]" />
        
        {/* Additional decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-green-200 mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute top-1/3 -right-24 w-96 h-96 rounded-full bg-green-300 mix-blend-multiply filter blur-3xl"></div>
          <div className="absolute -bottom-24 left-1/3 w-96 h-96 rounded-full bg-green-200 mix-blend-multiply filter blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-16 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Column */}
          <div className="relative z-10 flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge 
                className="mb-6 px-4 py-1 text-sm bg-white/80 backdrop-blur-sm border-green-200/50 text-green-700 flex items-center gap-2"
                variant="outline"
              >
                <Leaf className="w-4 h-4" />
                Premium Organic Hemp CBD
              </Badge>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-600 to-green-700"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Natural Wellness for
              <div className="mt-3">
                <TextRotate
                  texts={[
                    <span key="balance" className="text-green-600">Better Balance</span>,
                    <span key="harmony" className="text-green-600">Inner Harmony</span>,
                    <span key="vitality" className="text-green-600">Daily Vitality</span>
                  ]}
                  mainClassName="overflow-hidden h-[1.2em] flex items-center"
                  rotationInterval={3000}
                />
              </div>
            </motion.h1>

            <motion.p
              className="text-lg sm:text-xl mt-6 text-green-700 max-w-xl font-medium"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.4 }}
            >
              Experience the healing power of nature with our premium hemp-derived CBD products. Scientifically tested, organically grown.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              className="flex flex-wrap gap-6 mt-8"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm text-green-700">Lab Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-green-600" />
                <span className="text-sm text-green-700">5-Star Rated</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-600" />
                <span className="text-sm text-green-700">Sustainable Farming</span>
              </div>
            </motion.div>

            {/* Category Pills */}
            <motion.div
              className="flex flex-wrap justify-start gap-2 mt-8"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.5 }}
            >
              <Link href="/health">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-100 text-green-800 font-medium hover:bg-green-50 transition-colors">
                  Health & Wellness
                </div>
              </Link>
              <Link href="/sport">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-100 text-green-800 font-medium hover:bg-green-50 transition-colors">
                  Sport & Recovery
                </div>
              </Link>
              <Link href="/beauty">
                <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-100 text-green-800 font-medium hover:bg-green-50 transition-colors">
                  Beauty & Skincare
                </div>
              </Link>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10"
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              {/* Enhanced Explore CBD Products Button with hover effect */}
              <motion.div
                onMouseEnter={() => setIsExploreHovered(true)}
                onMouseLeave={() => setIsExploreHovered(false)}
                className="relative w-full sm:w-auto"
              >
                <Button 
                  className={cn(
                    "relative overflow-hidden text-base h-12 px-6 rounded-full w-full sm:w-auto border-2 transition-all duration-300 shadow-md",
                    isExploreHovered 
                      ? "bg-white text-green-700 border-green-700" 
                      : "bg-green-700 text-white border-white"
                  )}
                  size="lg"
                  asChild
                >
                  <Link href="/shop" className="flex items-center justify-center gap-2">
                    Shop Premium CBD
                    <motion.div
                      animate={{ x: isExploreHovered ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </Button>
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isExploreHovered ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(255, 255, 255, 0) 70%)" }}
                />
              </motion.div>

              {/* Enhanced Learn About Hemp Button with hover effect */}
              <motion.div
                onMouseEnter={() => setIsLearnHovered(true)}
                onMouseLeave={() => setIsLearnHovered(false)}
                className="relative w-full sm:w-auto"
              >
                <Button 
                  className={cn(
                    "relative overflow-hidden text-base h-12 px-6 rounded-full w-full sm:w-auto border-2 transition-all duration-300 shadow-md",
                    isLearnHovered 
                      ? "bg-green-700 text-white border-white" 
                      : "bg-white text-green-700 border-green-700"
                  )}
                  size="lg"
                  asChild
                >
                  <Link href="/learn" className="flex items-center justify-center gap-2">
                    Learn About CBD
                    <motion.div
                      animate={{ x: isLearnHovered ? 5 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </Button>
                <motion.div 
                  className="absolute inset-0 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isLearnHovered ? 0.1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ background: "radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, rgba(255, 255, 255, 0) 70%)" }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* Right Product Showcase Column */}
          <motion.div 
            className="relative z-10 hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative h-[500px] w-[500px]">
              {/* Main product image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="relative h-80 w-80">
                  <Image 
                    src="/images/tincture.png" 
                    alt="Premium CBD Oil" 
                    fill
                    className="object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
              
              {/* Floating product badges */}
              <motion.div 
                className="absolute top-[15%] left-[20%] z-30 bg-white px-4 py-2 rounded-xl shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              >
                <p className="text-green-800 font-semibold text-sm">Full Spectrum</p>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-[25%] right-[15%] z-30 bg-white px-4 py-2 rounded-xl shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 1 }}
              >
                <p className="text-green-800 font-semibold text-sm">Organic Grown</p>
              </motion.div>
              
              {/* Background circle */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-green-100 to-green-50 border border-green-200 shadow-inner z-10"></div>
              
              {/* Decorative elements */}
              <div className="absolute top-[10%] right-[30%] w-20 h-20 rounded-full bg-green-100 mix-blend-multiply filter blur-md z-0"></div>
              <div className="absolute bottom-[20%] left-[25%] w-16 h-16 rounded-full bg-green-200 mix-blend-multiply filter blur-md z-0"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export { Hero } 