'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles, Droplet, Leaf, Sun, Shield, Star } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { InfiniteSlider } from '@/components/common/ui/infinite-slider'

// Beauty products
const beautyProducts = [
  {
    name: "CBD Face Serum",
    strength: "500mg CBD",
    image: "/images/tincture2.png",
    price: "$59.99",
    rating: 4.9,
    reviews: 104,
    description: "Anti-aging face serum with CBD and hyaluronic acid",
    benefits: ["Anti-aging", "Hydration", "Radiance"],
    badgeColor: "bg-purple-600",
    featured: true
  },
  {
    name: "CBD Facial Cream",
    strength: "300mg CBD",
    image: "/images/tincture2.png",
    price: "$49.99",
    rating: 4.8,
    reviews: 87,
    description: "Nourishing facial cream with CBD and botanical extracts",
    benefits: ["Nourishing", "Calming", "Even tone"],
    badgeColor: "bg-purple-600",
    featured: true
  },
  {
    name: "CBD Body Lotion",
    strength: "750mg CBD",
    image: "/images/tincture2.png",
    price: "$44.99",
    rating: 4.7,
    reviews: 76,
    description: "Full-body moisturizing lotion with CBD and essential oils",
    benefits: ["Full-body", "Moisturizing", "Soothing"],
    badgeColor: "bg-purple-600",
    featured: true
  },
  {
    name: "CBD Lip Balm",
    strength: "50mg CBD",
    image: "/images/tincture2.png",
    price: "$12.99",
    rating: 4.6,
    reviews: 112,
    description: "Hydrating lip balm with CBD and vitamin E",
    benefits: ["Hydrating", "Protective", "Healing"],
    badgeColor: "bg-purple-600",
    featured: false
  },
  {
    name: "CBD Bath Bombs",
    strength: "100mg CBD/bomb",
    image: "/images/tincture2.png",
    price: "$24.99",
    rating: 4.8,
    reviews: 65,
    description: "Relaxing bath bombs with CBD and lavender",
    benefits: ["Relaxing", "Skin softening", "Aromatherapy"],
    badgeColor: "bg-purple-600",
    featured: false
  }
]

// CBD beauty benefits
const beautyBenefits = [
  {
    title: "Anti-Aging Properties",
    description: "CBD's antioxidant properties may help combat free radicals that cause signs of aging like fine lines and wrinkles.",
    icon: <Sparkles className="h-6 w-6 text-purple-500" />,
    color: "bg-purple-50 border-purple-100"
  },
  {
    title: "Balanced Hydration",
    description: "CBD may help regulate oil production, making it beneficial for both dry and oily skin types.",
    icon: <Droplet className="h-6 w-6 text-purple-500" />,
    color: "bg-purple-50 border-purple-100"
  },
  {
    title: "Reduced Inflammation",
    description: "The anti-inflammatory properties of CBD can help calm redness, irritation, and conditions like acne and eczema.",
    icon: <Shield className="h-6 w-6 text-purple-500" />,
    color: "bg-purple-50 border-purple-100"
  },
  {
    title: "UV Protection",
    description: "When combined with SPF, CBD may provide additional protection against environmental damage and UV rays.",
    icon: <Sun className="h-6 w-6 text-purple-500" />,
    color: "bg-purple-50 border-purple-100"
  },
  {
    title: "Natural Ingredients",
    description: "Our CBD beauty products are formulated with clean, natural ingredients without harsh chemicals or synthetic fragrances.",
    icon: <Leaf className="h-6 w-6 text-purple-500" />,
    color: "bg-purple-50 border-purple-100"
  }
]

// Beauty testimonials
const testimonials = [
  {
    quote: "The CBD Face Serum has completely transformed my skin. After a month of use, my fine lines are visibly reduced and my skin looks more radiant than ever.",
    author: "Rebecca L.",
    role: "Beauty Enthusiast",
    image: "/images/tincture2.png",
    rating: 5
  },
  {
    quote: "I've struggled with sensitive skin for years. The CBD Facial Cream is the first product that hasn't caused irritation while still providing deep hydration.",
    author: "Daniel T.",
    role: "Skincare Minimalist",
    image: "/images/tincture2.png",
    rating: 5
  },
  {
    quote: "The CBD Body Lotion has been a game-changer for my dry skin. It absorbs quickly without feeling greasy and keeps my skin hydrated all day.",
    author: "Sophia K.",
    role: "Holistic Beauty Advocate",
    image: "/images/tincture2.png",
    rating: 4
  },
]

export default function BeautyAndCosmeticsPage() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-1 rounded-full text-sm mb-6">
                Beauty & Cosmetics
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-purple-600 to-purple-700 mb-6">
                Radiant Skin With CBD Beauty
              </h1>
              <p className="text-purple-700 text-lg mb-8 max-w-xl">
                Discover our premium CBD-infused beauty and skincare products designed to nourish, protect, and rejuvenate your skin naturally.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Shop Beauty Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50">
                  Learn About CBD Skincare
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <Image
                src="/images/tincture2.png"
                alt="CBD Beauty and Cosmetics Products"
                fill
                className="object-contain"
              />
              <div className="absolute -bottom-6 left-0 right-0 mx-auto w-[90%] h-20 bg-gradient-to-r from-purple-100 to-purple-50 blur-3xl rounded-full opacity-80"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CBD Beauty Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-1 rounded-full text-sm mb-4">
              Skincare Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why CBD for Your Skin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CBD offers unique benefits for your skin that traditional skincare ingredients can't match. Here's how CBD can enhance your beauty routine:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {beautyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`border h-full transition-all hover:shadow-md ${benefit.color}`}>
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
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 bg-purple-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-purple-600 text-white hover:bg-purple-700 px-3 py-0.5 rounded-full text-xs mb-3">
              Products
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Premium CBD Beauty Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Our beauty collection features CBD-infused skincare designed to enhance your natural beauty and promote healthy skin.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {beautyProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ 
                  opacity: 1, 
                  scale: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: index * 0.08
                  }
                }}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <Card className="group overflow-hidden border border-purple-100 hover:border-purple-300 transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-0">
                    <div className="relative">
                      <AspectRatio ratio={3/2} className="bg-gradient-to-b from-purple-50 to-white">
                        <div className="relative h-full w-full p-3">
                          <motion.div
                            className="w-full h-full"
                            whileHover={{ scale: 1.08 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          >
                            <Image
                              src={product.image}
                              alt={product.name}
                              fill
                              className="object-contain"
                              priority={index < 4}
                            />
                          </motion.div>
                        </div>
                        <motion.div 
                          className="absolute top-2 right-2 z-10"
                          initial={{ opacity: 0, x: 10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + index * 0.08 }}
                        >
                          <Badge className={`text-white ${product.badgeColor} text-xs px-2 py-0.5`}>
                            {product.strength}
                          </Badge>
                        </motion.div>
                      </AspectRatio>
                    </div>
                    <div className="p-3">
                      <h3 className="font-semibold text-base text-gray-900 group-hover:text-purple-700 transition-colors">{product.name}</h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                      
                      {/* Benefits */}
                      <div className="mt-2 space-y-0.5">
                        {product.benefits.map((benefit, i) => (
                          <motion.div 
                            key={i} 
                            className="flex items-center gap-1.5"
                            initial={{ opacity: 0, x: -5 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + (i * 0.1) }}
                            viewport={{ once: true }}
                          >
                            <Check className="h-3 w-3 text-purple-500" />
                            <span className="text-xs text-gray-600">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <motion.p 
                          className="font-bold text-base text-purple-700"
                          whileHover={{ scale: 1.05 }}
                          transition={{ type: "spring", stiffness: 500 }}
                        >
                          {product.price}
                        </motion.p>
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + (i * 0.05) }}
                                viewport={{ once: true }}
                              >
                                <Star 
                                  className={`h-3 w-3 ${i < Math.floor(product.rating) 
                                    ? "text-yellow-400 fill-yellow-400" 
                                    : "text-gray-200 fill-gray-200"}`} 
                                />
                              </motion.div>
                            ))}
                          </div>
                          <span className="text-[10px] text-gray-500 ml-1">({product.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="flex justify-center mt-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Button 
              size="sm" 
              className="bg-purple-600 hover:bg-purple-700 text-white text-sm relative overflow-hidden group"
            >
              <motion.span 
                className="absolute inset-0 w-0 bg-purple-800 transition-all duration-300 group-hover:w-full"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center">
                View All Beauty Products
                <motion.div 
                  className="ml-1.5 inline-flex"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="h-3.5 w-3.5" />
                </motion.div>
              </span>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Beauty Routine Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-1 rounded-full text-sm mb-4">
              Skincare Routine
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Integrate CBD Into Your Beauty Routine</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn how to incorporate our CBD beauty products into your daily skincare regimen for optimal results.
            </p>
          </motion.div>

          <Tabs defaultValue="morning" className="w-full">
            <TabsList className="grid w-full md:w-[400px] mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="morning">Morning Routine</TabsTrigger>
              <TabsTrigger value="evening">Evening Routine</TabsTrigger>
            </TabsList>
            <TabsContent value="morning">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border border-purple-100 hover:border-purple-200 transition-all hover:shadow-md h-full">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Cleanse</h3>
                      <p className="text-gray-600 text-sm mb-4">Start with a gentle cleanser to remove overnight impurities and prepare your skin to absorb CBD products.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="border border-purple-100 hover:border-purple-200 transition-all hover:shadow-md h-full">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: CBD Face Serum</h3>
                      <p className="text-gray-600 text-sm mb-4">Apply our CBD Face Serum while skin is still slightly damp for maximum absorption. CBD will help protect against environmental stressors throughout the day.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="border border-purple-100 hover:border-purple-200 transition-all hover:shadow-md h-full">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: CBD Facial Cream + SPF</h3>
                      <p className="text-gray-600 text-sm mb-4">Finish with our CBD Facial Cream to lock in moisture, followed by your favorite SPF for sun protection.</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
            <TabsContent value="evening">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border border-purple-100 hover:border-purple-200 transition-all hover:shadow-md h-full">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 1: Double Cleanse</h3>
                      <p className="text-gray-600 text-sm mb-4">Remove makeup and daily pollutants with a thorough double cleanse to prepare your skin for CBD treatments.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <Card className="border border-purple-100 hover:border-purple-200 transition-all hover:shadow-md h-full">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 2: CBD Face Serum</h3>
                      <p className="text-gray-600 text-sm mb-4">Apply a generous amount of our CBD Face Serum to help repair daily damage and boost overnight regeneration.</p>
                    </CardContent>
                  </Card>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Card className="border border-purple-100 hover:border-purple-200 transition-all hover:shadow-md h-full">
                    <CardContent className="pt-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Step 3: CBD Facial Cream</h3>
                      <p className="text-gray-600 text-sm mb-4">Seal in the serum with our rich CBD Facial Cream, which works overnight to deeply nourish and hydrate your skin while you sleep.</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="bg-purple-600 text-white hover:bg-purple-700 px-4 py-1 rounded-full text-sm mb-4">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Beauty Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our customers who have experienced the transformative benefits of our CBD beauty products.
            </p>
          </motion.div>

          <InfiniteSlider
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="py-4"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4 min-w-[350px] max-w-[450px]">
                <Card className="bg-white shadow-sm border border-purple-100 h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          fill={i < testimonial.rating ? "currentColor" : "none"}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                    <div className="flex items-center">
                      <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-100 mr-4 flex items-center justify-center">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </InfiniteSlider>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-purple-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Elevate Your Skincare Routine</h2>
                <p className="text-purple-100 mb-6">
                  Experience the natural benefits of CBD for your skin with our premium beauty products.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-purple-700">
                    Shop Beauty Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-purple-600">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[250px] w-[250px]">
                  <Image
                    src="/images/tincture2.png"
                    alt="CBD Beauty Products"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 