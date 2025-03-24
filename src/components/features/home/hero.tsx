"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Leaf, ArrowRight, Shield, Award, HeartPulse, Sparkles } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-green-50 via-white to-green-50 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-green-100/40 mix-blend-multiply filter blur-3xl" />
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full bg-green-200/30 mix-blend-multiply filter blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-green-100/30 mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4 pt-14 pb-12 md:pt-18 md:pb-16 lg:pt-20 lg:pb-20 flex flex-col items-center z-10">
        {/* Central badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <Badge 
            className="px-5 py-2 text-sm bg-white shadow-md border-green-200 text-green-700 flex items-center gap-2"
            variant="outline"
          >
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">100% Organic Full-Spectrum Hemp</span>
          </Badge>
        </motion.div>

        {/* Content - centered layout */}
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-5xl font-extrabold tracking-tight leading-[1.1] text-center"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-600 to-green-700">
              Rediscover Balance with
            </span>
            <div className="mt-3 md:mt-4">
              <TextRotate
                texts={[
                  <span key="nature" className="text-green-600">Nature's Power</span>,
                  <span key="purity" className="text-green-600">Pure Essentials</span>,
                  <span key="vitality" className="text-green-600">Daily Vitality</span>,
                  <span key="health" className="text-green-600">Holistic Wellness</span>
                ]}
                mainClassName="overflow-hidden h-[1.2em] flex items-center justify-center"
                rotationInterval={3000}
              />
            </div>
          </motion.h1>
          
          {/* Product image with improved styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-8 mb-8 relative w-[260px] h-[260px] sm:w-[280px] sm:h-[280px]"
          >
            <Image 
              src="/images/tincture2.png" 
              alt="Twistly CBD Oil" 
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
            <div className="absolute inset-0 w-full h-full flex items-center justify-center -z-10">
              <div className="w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] rounded-full bg-gradient-to-br from-white/90 to-green-50/90 border border-green-100 shadow-inner" />
            </div>
          </motion.div>
          
          {/* Trust indicators with improved styling */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm border border-green-50">
              <Shield className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">3rd Party Lab Tested</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm border border-green-50">
              <Award className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Premium Quality</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm border border-green-50">
              <HeartPulse className="w-4 h-4 text-green-600" />
              <span className="text-sm font-medium text-green-700">Sustainable Farming</span>
            </div>
          </motion.div>

          {/* CTA buttons with improved styling */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-3 relative z-20 mb-8"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a href="/shop" className="block">
              <Button 
                className={cn(
                  "h-12 px-7 rounded-full text-sm font-semibold transition-all duration-300 shadow-md cursor-pointer",
                  "bg-green-700 text-white hover:bg-green-800"
                )}
                size="default"
              >
                <span className="flex items-center gap-2">
                  <div className="relative w-6 h-6">
                    <Image 
                      src="/images/2.png"
                      alt="Twistly Icon" 
                      fill
                      className="object-contain"
                    />
                  </div>
                  <Separator orientation="vertical" className="h-5 bg-white/30" />
                  Explore Collection
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </a>
            
            <a href="/lab" className="block">
              <Button 
                className={cn(
                  "h-12 px-7 rounded-full text-sm font-semibold transition-all duration-300 shadow-md cursor-pointer",
                  "bg-white text-green-700 border border-green-200 hover:bg-green-50"
                )}
                size="default"
              >
                <span className="flex items-center gap-2">
                  View Lab Results
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </a>
          </motion.div>
          
          {/* Improved tagline with more engaging copy */}
          <motion.p
            className="text-sm md:text-base text-[#171717]/70 max-w-2xl text-center font-normal"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.35 }}
          >
            Expertly crafted with nature's finest ingredients to elevate your daily wellness journey
          </motion.p>
        </div>
      </div>
    </div>
  )
}

export { Hero } 