"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import { Button } from "@/components/ui/button"
import { Leaf, ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

function Hero() {
  const [isExploreHovered, setIsExploreHovered] = useState(false)
  const [isLearnHovered, setIsLearnHovered] = useState(false)
  
  return (
    <>
      <div className="min-h-[calc(100vh-4rem)] relative flex items-center justify-center overflow-hidden">
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
        
        {/* Background Pattern */}
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)] opacity-30" />

        <div className="container mx-auto max-w-7xl px-4 py-24 md:py-32">
          <div className="relative w-full">
            {/* Central Content */}
            <div className="relative z-10 flex flex-col items-center justify-center max-w-[900px] mx-auto text-center">
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
                  Organic Hemp-Derived CBD
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1] font-bold bg-clip-text text-transparent bg-gradient-to-b from-green-800 to-green-600"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <span className="block mb-4">NATURAL WELLNESS</span>
                <TextRotate
                  texts={[
                    <span key="balance" className="text-green-600">BALANCE</span>,
                    <span key="harmony" className="text-green-600">HARMONY</span>,
                    <span key="vitality" className="text-green-600">VITALITY</span>
                  ]}
                  mainClassName="overflow-hidden h-[1.2em] flex items-center justify-center"
                  rotationInterval={3000}
                />
              </motion.h1>

              <motion.p
                className="text-lg sm:text-xl md:text-2xl mt-6 md:mt-8 text-green-700 max-w-2xl font-light"
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Experience the healing power of nature with our premium hemp-derived CBD products, carefully crafted from organic botanicals for your holistic wellness journey.
              </motion.p>

              {/* Category Pills */}
              <motion.div
                className="flex flex-wrap justify-center gap-2 mt-8"
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
                <Link href="/organic">
                  <div className="bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-green-100 text-green-800 font-medium hover:bg-green-50 transition-colors">
                    Organic Hemp
                  </div>
                </Link>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-10 md:mt-12 w-full sm:w-auto"
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
                      "relative overflow-hidden text-lg h-14 px-8 rounded-full w-full sm:w-auto border-2 transition-all duration-300 shadow-md",
                      isExploreHovered 
                        ? "bg-white text-green-700 border-green-700" 
                        : "bg-green-700 text-white border-white"
                    )}
                    size="lg"
                    asChild
                  >
                    <Link href="/shop" className="flex items-center justify-center gap-2">
                      Explore CBD Products
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
                      "relative overflow-hidden text-lg h-14 px-8 rounded-full w-full sm:w-auto border-2 transition-all duration-300 shadow-md",
                      isLearnHovered 
                        ? "bg-green-700 text-white border-white" 
                        : "bg-white text-green-700 border-green-700"
                    )}
                    size="lg"
                    asChild
                  >
                    <Link href="/learn" className="flex items-center justify-center gap-2">
                      Learn About Hemp
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
          </div>
        </div>
      </div>
    </>
  )
}

export { Hero } 