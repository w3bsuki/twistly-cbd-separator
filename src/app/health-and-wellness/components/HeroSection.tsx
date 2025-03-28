'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

interface HeroSectionProps {
  pageTheme: {
    colors: {
      primary: string;
      accent: string;
      border: string;
      light?: string;
      accentHover?: string;
    }
  }
}

export function HeroSection({ pageTheme }: HeroSectionProps) {
  return (
    <section className="py-10 relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-10 left-1/4 w-72 h-72 bg-emerald-50 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl shadow-md p-8 overflow-hidden">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex bg-gradient-to-br from-green-50/80 to-white rounded-full border border-green-200/40 shadow-sm p-1 mb-5">
                <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 font-medium">
                  <span>Health & Wellness</span>
                </div>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-4 leading-tight max-w-2xl mx-auto">
                Your Journey to <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-green-500">Natural Balance</span>
              </h1>
              
              <p className="text-gray-600 text-base md:text-lg mb-6 max-w-2xl mx-auto">
                Discover our premium CBD wellness collection crafted to restore balance, 
                reduce stress, improve sleep, and enhance your overall wellbeing.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center mt-2">
                <Button 
                  className="bg-green-600 hover:bg-green-700 text-white" 
                  size="lg" 
                  asChild
                >
                  <Link href="/shop/category/wellness">
                    Shop Wellness Products
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-green-200 text-green-700 hover:bg-green-50" 
                  size="lg"
                  asChild
                >
                  <Link href="/blog/cbd-for-wellness">
                    Learn About CBD Benefits
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}