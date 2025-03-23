"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import { Button } from "@/components/ui/button"
import { Leaf, ArrowRight, Shield, Award, HeartPulse } from "lucide-react"
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

      <div className="container relative mx-auto px-4 py-12 md:py-20 lg:py-24 flex flex-col items-center z-10">
        {/* Central badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8"
        >
          <Badge 
            className="px-5 py-2 text-sm bg-white shadow-md border-green-200 text-green-700 flex items-center gap-2"
            variant="outline"
          >
            <Leaf className="w-4 h-4" />
            <span className="font-medium">Premium Organic Hemp CBD</span>
          </Badge>
        </motion.div>

        {/* Content - centered layout */}
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-[1.1] bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-600 to-green-700 text-center"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
          >
            Natural Wellness for
            <div className="mt-3">
              <TextRotate
                texts={[
                  <span key="balance" className="text-green-600">Better Balance</span>,
                  <span key="harmony" className="text-green-600">Inner Harmony</span>,
                  <span key="vitality" className="text-green-600">Daily Vitality</span>,
                  <span key="health" className="text-green-600">Complete Health</span>
                ]}
                mainClassName="overflow-hidden h-[1.2em] flex items-center justify-center"
                rotationInterval={3000}
              />
            </div>
          </motion.h1>

          {/* Product image (smaller, more subtle) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-10 mb-8 relative w-[280px] h-[280px]"
          >
            <Image 
              src="/images/tincture2.png" 
              alt="Premium CBD Oil" 
              fill
              className="object-contain drop-shadow-xl"
              priority
            />
            <div className="absolute inset-0 w-full h-full flex items-center justify-center -z-10">
              <div className="w-[220px] h-[220px] rounded-full bg-white/80 border border-green-100 shadow-inner" />
            </div>
          </motion.div>
          
          <motion.p
            className="text-sm md:text-md mb-6 text-green-600 max-w-2xl text-center italic"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.05 }}
          >
            Experience nature's power with our CBD products
          </motion.p>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-8"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">Lab Tested</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm">
              <Award className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-lg shadow-sm">
              <HeartPulse className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-700">Sustainable</span>
            </div>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 relative z-20"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <a href="/shop" className="block">
              <Button 
                className={cn(
                  "h-12 px-6 rounded-full text-base font-medium transition-all duration-300 shadow-md cursor-pointer",
                  "bg-green-700 text-white hover:bg-green-800"
                )}
                size="lg"
              >
                <span className="flex items-center gap-2">
                  Shop Premium CBD
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </a>
            
            <a href="/lab" className="block">
              <Button 
                className={cn(
                  "h-12 px-6 rounded-full text-base font-medium transition-all duration-300 shadow-md cursor-pointer",
                  "bg-white text-green-700 border border-green-200 hover:bg-green-50"
                )}
                size="lg"
              >
                <span className="flex items-center gap-2">
                  View Lab Results
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export { Hero } 