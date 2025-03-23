'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Sparkles, Check, Flower, Award, Shield, Smile, Droplet } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"
import { InfiniteSlider } from "@/components/common/ui/infinite-slider"

// Updated with local image paths and more product details
const beautyProducts = [
  {
    name: "Anti-Aging CBD Serum",
    strength: "500mg CBD",
    image: "/images/tincture.png",
    price: "$59.99",
    rating: 4.8,
    reviews: 132,
    description: "Rejuvenating serum with antioxidants to reduce fine lines",
    benefits: ["Reduces fine lines", "Firms skin", "Brightens complexion"],
    badgeColor: "bg-amber-600",
    featured: true
  },
  {
    name: "CBD Facial Cream",
    strength: "250mg CBD",
    image: "/images/tincture.png",
    price: "$49.99",
    rating: 4.7,
    reviews: 108,
    description: "Hydrating daily moisturizer for all skin types",
    benefits: ["24hr hydration", "Calms redness", "Non-greasy"],
    badgeColor: "bg-yellow-600",
    featured: true
  },
  {
    name: "Night Recovery CBD Oil",
    strength: "750mg CBD",
    image: "/images/tincture.png",
    price: "$69.99",
    rating: 4.9,
    reviews: 156,
    description: "Intensive overnight treatment for skin regeneration",
    benefits: ["Repairs overnight", "Reduces puffiness", "Smooths skin"],
    badgeColor: "bg-purple-600",
    featured: true
  },
  {
    name: "Radiance CBD Oil",
    strength: "1000mg CBD",
    image: "/images/tincture.png",
    price: "$79.99",
    rating: 4.8,
    reviews: 94,
    description: "Brightening formula for a natural, healthy glow",
    benefits: ["Natural glow", "Even skin tone", "Reduces dark spots"],
    badgeColor: "bg-orange-600",
    featured: false
  },
  {
    name: "Beauty Elixir CBD",
    strength: "500mg CBD",
    image: "/images/tincture.png",
    price: "$54.99",
    rating: 4.6,
    reviews: 87,
    description: "Multi-purpose beauty oil for face, hair and body",
    benefits: ["Multi-purpose", "Fast absorption", "Non-comedogenic"],
    badgeColor: "bg-pink-600",
    featured: false
  }
]

// CBD beauty benefits
const beautyBenefits = [
  {
    title: "Rejuvenating",
    description: "Our CBD beauty products help restore skin's natural glow and elasticity for a more youthful appearance.",
    icon: <Flower className="h-6 w-6 text-amber-500" />,
    color: "bg-amber-50 border-amber-100"
  },
  {
    title: "Anti-Inflammatory",
    description: "CBD's natural anti-inflammatory properties help reduce redness, puffiness, and skin irritation.",
    icon: <Shield className="h-6 w-6 text-amber-600" />,
    color: "bg-amber-50 border-amber-100"
  },
  {
    title: "Antioxidant Rich",
    description: "Packed with antioxidants to fight free radicals and prevent premature aging signs.",
    icon: <Sparkles className="h-6 w-6 text-amber-500" />,
    color: "bg-amber-50 border-amber-100"
  },
  {
    title: "Deeply Hydrating",
    description: "Our formulas provide lasting hydration without clogging pores for balanced, supple skin.",
    icon: <Droplet className="h-6 w-6 text-amber-600" />,
    color: "bg-amber-50 border-amber-100"
  }
]

// Testimonials
const testimonials = [
  {
    quote: "The Anti-Aging Serum has completely transformed my skin. Fine lines are visibly reduced, and my skin feels firmer after just 3 weeks!",
    author: "Sarah T.",
    role: "Verified Customer",
    image: "/images/tincture.png",
    rating: 5
  },
  {
    quote: "I've tried dozens of moisturizers and the CBD Facial Cream is by far the best. It calms my rosacea flare-ups and keeps my skin hydrated all day.",
    author: "Michael K.",
    role: "Verified Customer",
    image: "/images/tincture.png",
    rating: 5
  },
  {
    quote: "The Beauty Elixir is my go-to for everything! I use it on dry hair ends, cuticles, and as a facial oil. Worth every penny!",
    author: "Jessica M.",
    role: "Beauty Blogger",
    image: "/images/tincture.png",
    rating: 4
  },
]

export function Beauty() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Badge className="bg-amber-600 text-white hover:bg-amber-700 px-4 py-1 rounded-full text-sm mb-4">
              Beauty & Skincare
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-800 via-amber-600 to-yellow-600 mb-4">
              CBD-Infused Radiant Beauty
            </h2>
            <p className="text-amber-700 text-lg max-w-3xl text-center">
              Our beauty and skincare collection harnesses the power of CBD to nourish, rejuvenate, and enhance your natural beauty from the inside out.
            </p>
          </motion.div>
        </div>

        {/* Beauty Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {beautyBenefits.map((benefit, index) => (
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
          <h3 className="text-2xl md:text-3xl font-bold text-amber-800">Bestselling Beauty Products</h3>
          <p className="text-amber-600 mt-2">Discover our most loved CBD skincare formulations</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {beautyProducts.filter(p => p.featured).map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border border-amber-100 hover:border-amber-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    {/* Product Image */}
                    <div className="relative md:w-2/5">
                      <AspectRatio ratio={1} className="bg-gradient-to-b from-amber-50 to-white">
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
                    
                    {/* Product Details */}
                    <div className="p-5 md:p-6 md:w-3/5">
                      <h3 className="font-semibold text-xl text-gray-900 group-hover:text-amber-700 transition-colors">{product.name}</h3>
                      <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                      
                      {/* Benefits */}
                      <div className="mt-3 space-y-1">
                        {product.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-amber-500" />
                            <span className="text-xs text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mt-4">
                        <p className="font-bold text-xl text-amber-700">{product.price}</p>
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
                      
                      <div className="mt-4">
                        <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <InfiniteSlider gap={16} className="w-full py-6 mb-8" reverse={true}>
          {beautyProducts.map((product, index) => (
            <div key={`slider-${index}`} className="relative group w-[220px]">
              <AspectRatio ratio={1} className="bg-white rounded-xl border border-amber-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-amber-800/20 to-transparent rounded-xl opacity-80 transition-opacity duration-300" />
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
            <h3 className="text-2xl md:text-3xl font-bold text-amber-800">Customer Experiences</h3>
            <p className="text-amber-600 mt-2">Real results from real people using our CBD beauty products</p>
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
                <Card className="h-full border border-amber-100 hover:border-amber-200 transition-all duration-300 hover:shadow-md">
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
                      <div className="relative w-10 h-10 rounded-full bg-amber-100 overflow-hidden">
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

        {/* Beauty Quality Promise Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-8 mb-16 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="md:w-2/3">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Sparkles className="h-6 w-6" />
                Our Beauty Promise
              </h3>
              <p className="text-amber-100 mb-4">
                Every product in our beauty collection is formulated with care using premium ingredients. Our CBD is ethically sourced and combined with botanical actives for visible results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white">Cruelty-Free</Badge>
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white">Paraben-Free</Badge>
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white">Dermatologist Tested</Badge>
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white">Natural Ingredients</Badge>
              </div>
            </div>
            <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-amber-50 px-6">
              <Link href="/our-ingredients">
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
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6 shadow-md">
              <Link href="/beauty">
                Explore All Beauty Products
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 