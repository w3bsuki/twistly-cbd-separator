'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Heart, Brain, Moon, Droplet, Check, Sparkles } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"
import { InfiniteSlider } from "@/components/common/ui/infinite-slider"

// Updated with local image paths and more product details
const healthProducts = [
  {
    name: "Full Spectrum CBD Oil",
    strength: "1000mg CBD",
    image: "/images/tincture.png",
    price: "$49.99",
    rating: 4.8,
    reviews: 124,
    description: "Our premium full-spectrum CBD oil for daily wellness support",
    benefits: ["Stress relief", "Balance", "Wellness"],
    badgeColor: "bg-green-600",
    featured: true
  },
  {
    name: "Broad Spectrum CBD Oil",
    strength: "750mg CBD",
    image: "/images/tincture.png",
    price: "$39.99",
    rating: 4.7,
    reviews: 98,
    description: "THC-free broad spectrum formula for balanced wellness",
    benefits: ["THC-free", "Clarity", "Focus"],
    badgeColor: "bg-blue-600",
    featured: true
  },
  {
    name: "Sleep CBD Formula",
    strength: "1500mg CBD",
    image: "/images/tincture.png",
    price: "$59.99",
    rating: 4.9,
    reviews: 156,
    description: "Enhanced with melatonin and CBN for better sleep quality",
    benefits: ["Better sleep", "Relaxation", "Calmness"],
    badgeColor: "bg-indigo-600",
    featured: true
  },
  {
    name: "Wellness Plus CBD",
    strength: "2000mg CBD",
    image: "/images/tincture.png",
    price: "$79.99",
    rating: 4.8,
    reviews: 87,
    description: "Our highest potency formula for maximum therapeutic benefits",
    benefits: ["High potency", "Recovery", "Relief"],
    badgeColor: "bg-purple-600",
    featured: false
  },
  {
    name: "Daily Wellness CBD",
    strength: "500mg CBD",
    image: "/images/tincture.png",
    price: "$29.99",
    rating: 4.6,
    reviews: 112,
    description: "Perfect starter strength for CBD beginners",
    benefits: ["Gentle", "Entry level", "Daily use"],
    badgeColor: "bg-teal-600",
    featured: false
  }
]

// CBD benefits data
const cbdBenefits = [
  {
    title: "Stress Relief",
    description: "CBD works with your body's endocannabinoid system to help manage stress and promote a sense of calm.",
    icon: <Heart className="h-6 w-6 text-green-500" />,
    color: "bg-green-50 border-green-100"
  },
  {
    title: "Better Sleep",
    description: "Our specialized CBD formulas can help improve sleep quality and establish healthy sleep patterns.",
    icon: <Moon className="h-6 w-6 text-indigo-500" />,
    color: "bg-indigo-50 border-indigo-100"
  },
  {
    title: "Mental Clarity",
    description: "CBD may help promote focus and mental clarity while reducing brain fog and supporting cognitive function.",
    icon: <Brain className="h-6 w-6 text-purple-500" />,
    color: "bg-purple-50 border-purple-100"
  },
  {
    title: "Better Absorption",
    description: "Our water-soluble formulas provide up to 5x better absorption than standard CBD oils.",
    icon: <Droplet className="h-6 w-6 text-blue-500" />,
    color: "bg-blue-50 border-blue-100"
  }
]

// Health testimonials
const testimonials = [
  {
    quote: "I've been using the Full Spectrum CBD Oil for my anxiety and it has made a world of difference in my daily life. I feel calmer and more focused.",
    author: "Sarah M.",
    role: "Wellness Advocate",
    image: "/images/tincture.png",
    rating: 5
  },
  {
    quote: "The Sleep Formula has completely transformed my sleep routine. I fall asleep faster and wake up feeling refreshed without any grogginess.",
    author: "James K.",
    role: "Insomnia Sufferer",
    image: "/images/tincture.png",
    rating: 5
  },
  {
    quote: "As someone with chronic pain, the Broad Spectrum CBD Oil has been a game-changer. I can finally get through my day without constant discomfort.",
    author: "Lisa T.",
    role: "Chronic Pain Patient",
    image: "/images/tincture.png",
    rating: 4
  },
]

export function HealthAndWellness() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Badge className="bg-green-600 text-white hover:bg-green-700 px-4 py-1 rounded-full text-sm mb-4">
              Health & Wellness
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-600 to-green-700 mb-4">
              Premium CBD for Daily Wellness
            </h2>
            <p className="text-green-700 text-lg max-w-3xl text-center">
              Our health and wellness collection features premium CBD oils designed to support your daily wellness routine and promote balance in body and mind.
            </p>
          </motion.div>
        </div>

        {/* CBD Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {cbdBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={cn("border h-full transition-all hover:shadow-md", benefit.color)}>
                <CardContent className="pt-6">
                  <div className="rounded-full w-12 h-12 flex items-center justify-center bg-white border border-gray-100 shadow-sm mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Products Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-green-800">Featured CBD Products</h3>
          <p className="text-green-600 mt-2">Discover our most popular wellness formulas</p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {healthProducts.filter(p => p.featured).map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative">
                    <AspectRatio ratio={4/3} className="bg-gradient-to-b from-green-50 to-white">
                      <div className="relative h-full w-full p-6">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute top-3 right-3 z-10">
                        <Badge className={cn("text-white", product.badgeColor)}>
                          {product.strength}
                        </Badge>
                      </div>
                    </AspectRatio>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-xl text-gray-900 group-hover:text-green-700 transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
                    
                    {/* Benefits */}
                    <div className="mt-3 space-y-1">
                      {product.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-xs text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <p className="font-bold text-xl text-green-700">{product.price}</p>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={cn(
                                "h-4 w-4", 
                                i < Math.floor(product.rating) 
                                  ? "text-yellow-400 fill-yellow-400" 
                                  : "text-gray-200 fill-gray-200"
                              )} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 pb-5">
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <InfiniteSlider gap={16} className="w-full py-6 mb-8">
          {healthProducts.map((product, index) => (
            <div key={`slider-${index}`} className="relative group w-[220px]">
              <AspectRatio ratio={1} className="bg-white rounded-xl border border-green-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-green-800/20 to-transparent rounded-xl opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                  <p className="text-white text-sm font-medium leading-tight">{product.name}</p>
                  <Badge variant="outline" className="mt-1 text-[10px] bg-white/10 text-white border-white/20">
                    {product.strength}
                  </Badge>
                </div>
              </AspectRatio>
            </div>
          ))}
        </InfiniteSlider>

        {/* Testimonials Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-10"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-800">Customer Testimonials</h3>
            <p className="text-green-600 mt-2">Real stories from people whose health has improved with our products</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "h-4 w-4", 
                            i < testimonial.rating 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-200 fill-gray-200"
                          )} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full bg-green-100 overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-xs text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CBD Quality Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-8 mb-16 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Sparkles className="h-6 w-6" />
                Our CBD Quality Promise
              </h3>
              <p className="text-green-100 mb-4">
                We source only the finest organic hemp plants and use advanced CO2 extraction methods to ensure the highest quality CBD products. Every batch is third-party tested for purity and potency.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white">Organic Hemp</Badge>
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white">CO2 Extracted</Badge>
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white">Lab Tested</Badge>
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white">Non-GMO</Badge>
              </div>
            </div>
            <Button asChild size="lg" className="bg-white text-green-700 hover:bg-green-50 px-6">
              <Link href="/lab-results">
                View Lab Results <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </motion.div>

        {/* Explore Button */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button asChild size="lg" className="bg-green-700 hover:bg-green-800 text-white rounded-full px-8 py-6 shadow-md">
              <Link href="/health">
                Explore All Wellness Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 