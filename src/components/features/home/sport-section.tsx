'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { InfiniteSlider } from "@/components/common/ui/infinite-slider"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ArrowRight, Star, Dumbbell, Activity, Clock, Medal, Check, Sparkles } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Updated with local image paths and more product details
const sportProducts = [
  {
    name: "Recovery Blend CBD Oil",
    strength: "2000mg CBD",
    image: "/images/tincture.png",
    price: "$69.99",
    rating: 4.9,
    reviews: 142,
    description: "Fast-acting formula designed for post-workout recovery",
    benefits: ["Accelerated recovery", "Reduces inflammation", "Muscle relief"],
    badgeColor: "bg-red-600",
    featured: true
  },
  {
    name: "Muscle Relief CBD Oil",
    strength: "1500mg CBD",
    image: "/images/tincture.png",
    price: "$59.99",
    rating: 4.8,
    reviews: 118,
    description: "Targeted relief for sore muscles and joint discomfort",
    benefits: ["Deep tissue relief", "Joint support", "Anti-inflammatory"],
    badgeColor: "bg-orange-600",
    featured: true
  },
  {
    name: "Performance CBD Oil",
    strength: "1000mg CBD",
    image: "/images/tincture.png",
    price: "$49.99",
    rating: 4.7,
    reviews: 96,
    description: "Balanced formula to support athletic performance and focus",
    benefits: ["Improved focus", "Endurance boost", "Stress relief"],
    badgeColor: "bg-blue-600",
    featured: true
  },
  {
    name: "Joint Support CBD Oil",
    strength: "750mg CBD",
    image: "/images/tincture.png",
    price: "$44.99",
    rating: 4.6,
    reviews: 87,
    description: "Enhanced with glucosamine for optimal joint health",
    benefits: ["Cartilage support", "Mobility improvement", "Pain relief"],
    badgeColor: "bg-purple-600",
    featured: false
  },
  {
    name: "Pre-Workout CBD Oil",
    strength: "500mg CBD",
    image: "/images/tincture.png",
    price: "$39.99",
    rating: 4.5,
    reviews: 74,
    description: "Energizing blend to prepare your body for intense workouts",
    benefits: ["Energy boost", "Mental clarity", "Improved focus"],
    badgeColor: "bg-yellow-600",
    featured: false
  }
]

// Sport benefits data
const sportBenefits = [
  {
    title: "Enhanced Recovery",
    description: "Our CBD formulations help reduce recovery time between workouts by supporting muscle repair and reducing inflammation.",
    icon: <Dumbbell className="h-6 w-6 text-red-500" />,
    color: "bg-red-50 border-red-100"
  },
  {
    title: "Improved Performance",
    description: "CBD may help enhance focus and endurance during workouts while reducing exercise-induced anxiety and stress.",
    icon: <Activity className="h-6 w-6 text-orange-500" />,
    color: "bg-orange-50 border-orange-100"
  },
  {
    title: "Better Sleep & Recovery",
    description: "Quality sleep is crucial for recovery and performance. Our CBD formulas help improve sleep quality for maximum results.",
    icon: <Clock className="h-6 w-6 text-blue-500" />,
    color: "bg-blue-50 border-blue-100"
  },
  {
    title: "Joint & Muscle Support",
    description: "Our targeted formulas provide relief to sore muscles and joints while supporting long-term mobility and flexibility.",
    icon: <Medal className="h-6 w-6 text-purple-500" />,
    color: "bg-purple-50 border-purple-100"
  }
]

// Testimonials
const testimonials = [
  {
    quote: "The Recovery Blend has been a game-changer for my marathon training. I'm recovering faster between long runs and feeling less soreness.",
    author: "Michael T.",
    role: "Marathon Runner",
    image: "/images/tincture.png",
    rating: 5
  },
  {
    quote: "As a personal trainer, I recommend the Muscle Relief oil to all my clients. It's made a huge difference in their recovery and performance.",
    author: "Jessica R.",
    role: "Personal Trainer",
    image: "/images/tincture.png",
    rating: 5
  },
  {
    quote: "I've tried many products for my joint pain from years of weightlifting. The Joint Support CBD oil is the only one that consistently works.",
    author: "David K.",
    role: "Competitive Weightlifter",
    image: "/images/tincture.png",
    rating: 4
  },
]

export function Sport() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Badge className="bg-red-600 text-white hover:bg-red-700 px-4 py-1 rounded-full text-sm mb-4">
              Sport & Recovery
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-800 via-red-600 to-red-700 mb-4">
              Performance & Recovery CBD
            </h2>
            <p className="text-red-700 text-lg max-w-3xl text-center">
              Our sport collection is specially formulated to support athletic performance, enhance recovery, and provide targeted relief for active lifestyles.
            </p>
          </motion.div>
        </div>

        {/* Sport Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sportBenefits.map((benefit, index) => (
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
          <h3 className="text-2xl md:text-3xl font-bold text-red-800">Featured Sport Products</h3>
          <p className="text-red-600 mt-2">Discover our most popular performance formulas</p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {sportProducts.filter(p => p.featured).map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative">
                    <AspectRatio ratio={4/3} className="bg-gradient-to-b from-red-50 to-white">
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
                    <h3 className="font-semibold text-xl text-gray-900 group-hover:text-red-700 transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
                    
                    {/* Benefits */}
                    <div className="mt-3 space-y-1">
                      {product.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-red-500" />
                          <span className="text-xs text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <p className="font-bold text-xl text-red-700">{product.price}</p>
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
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <InfiniteSlider gap={16} className="w-full py-6 mb-8">
          {sportProducts.map((product, index) => (
            <div key={`slider-${index}`} className="relative group w-[220px]">
              <AspectRatio ratio={1} className="bg-white rounded-xl border border-red-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-red-800/20 to-transparent rounded-xl opacity-80 transition-opacity duration-300" />
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
            <h3 className="text-2xl md:text-3xl font-bold text-red-800">Athlete Testimonials</h3>
            <p className="text-red-600 mt-2">See how our products are helping real athletes achieve their goals</p>
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
                <Card className="h-full border border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-md">
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
                      <div className="relative w-10 h-10 rounded-full bg-red-100 overflow-hidden">
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

        {/* Sport Quality Promise Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-8 mb-16 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Sparkles className="h-6 w-6" />
                Our Sport Performance Promise
              </h3>
              <p className="text-red-100 mb-4">
                Our sport collection is developed in partnership with athletes and sports medicine experts to ensure the highest quality and effectiveness for active individuals.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white">Athlete Tested</Badge>
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white">Fast-Acting</Badge>
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white">Performance Focused</Badge>
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white">Recovery Optimized</Badge>
              </div>
            </div>
            <Button asChild size="lg" className="bg-white text-red-700 hover:bg-red-50 px-6">
              <Link href="/sport-science">
                Learn More <ArrowRight className="w-4 h-4 ml-2" />
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
            <Button asChild size="lg" className="bg-red-700 hover:bg-red-800 text-white rounded-full px-8 py-6 shadow-md">
              <Link href="/sport">
                Explore All Sport Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 