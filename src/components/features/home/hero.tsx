"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Leaf, ArrowRight, Shield, Award, HeartPulse, Sparkles, Bot } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'

function Hero() {
  const [aiResponse, setAiResponse] = React.useState<string>("");
  const [userQuestion, setUserQuestion] = React.useState<string>("");
  const [isAiTyping, setIsAiTyping] = React.useState<boolean>(false);
  
  const handleAskAI = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;
    
    setIsAiTyping(true);
    setAiResponse("");
    
    // Simulate AI typing response
    const demoResponses = [
      "Based on your interest, I recommend our Full Spectrum CBD Oil which contains a balanced profile of cannabinoids that work together through the entourage effect.",
      "For sleep issues, our Sleep CBD Formula with added melatonin and CBN might be most beneficial. It's specifically formulated to support healthy sleep cycles.",
      "If you're looking for topical relief, our CBD Recovery Balm provides targeted application for sore muscles and joints with cooling menthol.",
      "Our CBD Beauty Serum would be perfect for your skincare concerns, combining the anti-inflammatory properties of CBD with hyaluronic acid for hydration."
    ];
    
    const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)];
    let displayText = "";
    
    const typeWriter = (text: string, i: number = 0) => {
      if (i < text.length) {
        displayText += text.charAt(i);
        setAiResponse(displayText);
        setTimeout(() => typeWriter(text, i + 1), 30);
      } else {
        setIsAiTyping(false);
      }
    };
    
    setTimeout(() => typeWriter(randomResponse), 1000);
    setUserQuestion("");
  };

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
          
          {/* Product images showing different categories */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mt-8 mb-8 relative flex justify-center gap-6 md:gap-8"
          >
            {/* Product 1 - CBD Oil */}
            <div className="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] group">
              <Image 
                src="/images/tincture2.png" 
                alt="Twistly CBD Oil" 
                fill
                className="object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 w-full h-full flex items-center justify-center -z-10">
                <div className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] rounded-full bg-gradient-to-br from-white/90 to-green-50/90 border border-green-100 shadow-inner" />
              </div>
            </div>
            
            {/* Product 2 - Gummies */}
            <div className="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] group">
              <Image 
                src="/images/tincture2.png" 
                alt="Twistly CBD Gummies" 
                fill
                className="object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 w-full h-full flex items-center justify-center -z-10">
                <div className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] rounded-full bg-gradient-to-br from-white/90 to-green-100/90 border border-green-100 shadow-inner" />
              </div>
            </div>
            
            {/* Product 3 - Topicals */}
            <div className="relative w-[200px] h-[200px] sm:w-[220px] sm:h-[220px] group">
              <Image 
                src="/images/tincture2.png" 
                alt="Twistly CBD Topicals" 
                fill
                className="object-contain drop-shadow-xl transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 w-full h-full flex items-center justify-center -z-10">
                <div className="w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] rounded-full bg-gradient-to-br from-white/90 to-green-200/90 border border-green-100 shadow-inner" />
              </div>
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
            
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  className={cn(
                    "h-12 px-7 rounded-full text-sm font-semibold transition-all duration-300 shadow-md cursor-pointer",
                    "bg-white text-green-700 border border-green-200 hover:bg-green-50"
                  )}
                  size="default"
                >
                  <span className="flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    Consult with AI
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5 text-green-600" />
                    <span>Ask Our CBD Expert AI</span>
                  </DialogTitle>
                </DialogHeader>
                <div className="bg-gray-50 p-4 rounded-md mb-4 max-h-[300px] overflow-y-auto">
                  {aiResponse ? (
                    <div className="text-gray-800">
                      {aiResponse}
                      {isAiTyping && <span className="inline-block w-1.5 h-4 ml-1 bg-green-600 animate-pulse" />}
                    </div>
                  ) : (
                    <div className="text-gray-500 italic">
                      Ask about our CBD products, usage recommendations, or which product might be right for your needs...
                    </div>
                  )}
                </div>
                <form onSubmit={handleAskAI} className="flex items-center gap-2">
                  <input
                    type="text"
                    value={userQuestion}
                    onChange={(e) => setUserQuestion(e.target.value)}
                    placeholder="Type your question here..."
                    className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30"
                  />
                  <Button 
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white"
                    disabled={isAiTyping}
                  >
                    {isAiTyping ? "Thinking..." : "Ask"}
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
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