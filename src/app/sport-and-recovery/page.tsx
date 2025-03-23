'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Activity, Timer, Clock, Zap, Star, RotateCcw, Flame } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { InfiniteSlider } from '@/components/common/ui/infinite-slider'

// Sport products
const sportProducts = [
  {
    name: "Recovery CBD Balm",
    strength: "1000mg CBD",
    image: "/images/tincture2.png",
    price: "$49.99",
    rating: 4.9,
    reviews: 134,
    description: "Fast-acting topical balm for muscle recovery and joint pain",
    benefits: ["Reduces inflammation", "Muscle recovery", "Joint support"],
    badgeColor: "bg-blue-600",
    featured: true
  },
  {
    name: "Sport CBD Oil",
    strength: "1500mg CBD",
    image: "/images/tincture2.png",
    price: "$59.99",
    rating: 4.8,
    reviews: 92,
    description: "High-strength CBD oil formulated for athletes and active lifestyles",
    benefits: ["Performance", "Endurance", "Recovery"],
    badgeColor: "bg-blue-600",
    featured: true
  },
  {
    name: "CBD Muscle Gel",
    strength: "750mg CBD",
    image: "/images/tincture2.png",
    price: "$39.99",
    rating: 4.7,
    reviews: 78,
    description: "Cooling gel with menthol and CBD for immediate muscle relief",
    benefits: ["Cooling effect", "Fast absorption", "Targeted relief"],
    badgeColor: "bg-blue-600",
    featured: true
  },
  {
    name: "CBD Sport Capsules",
    strength: "25mg x 30 caps",
    image: "/images/tincture2.png",
    price: "$44.99",
    rating: 4.6,
    reviews: 67,
    description: "Convenient daily CBD capsules with added nutrients for active individuals",
    benefits: ["Convenient", "Precise dosing", "Daily support"],
    badgeColor: "bg-blue-600",
    featured: false
  },
  {
    name: "CBD Protein Powder",
    strength: "500mg CBD",
    image: "/images/tincture2.png",
    price: "$54.99",
    rating: 4.5,
    reviews: 45,
    description: "Premium protein powder with added CBD for enhanced recovery",
    benefits: ["Muscle building", "Recovery", "20g protein per serving"],
    badgeColor: "bg-blue-600",
    featured: false
  }
]

// CBD sport benefits
const sportBenefits = [
  {
    title: "Faster Recovery",
    description: "CBD may help reduce exercise-induced inflammation and promote faster recovery between training sessions.",
    icon: <RotateCcw className="h-6 w-6 text-blue-500" />,
    color: "bg-blue-50 border-blue-100"
  },
  {
    title: "Reduced Inflammation",
    description: "Research suggests CBD has anti-inflammatory properties that may help manage pain and soreness after intense workouts.",
    icon: <Activity className="h-6 w-6 text-blue-500" />,
    color: "bg-blue-50 border-blue-100"
  },
  {
    title: "Better Sleep",
    description: "CBD may improve sleep quality, which is essential for muscle recovery and athletic performance.",
    icon: <Clock className="h-6 w-6 text-blue-500" />,
    color: "bg-blue-50 border-blue-100"
  },
  {
    title: "Improved Performance",
    description: "By promoting relaxation without sedation, CBD may help optimize your mental state for training and competition.",
    icon: <Zap className="h-6 w-6 text-blue-500" />,
    color: "bg-blue-50 border-blue-100"
  },
  {
    title: "Reduced Exercise-Induced Stress",
    description: "CBD interacts with your endocannabinoid system to help manage the physical stress response from intense training.",
    icon: <Timer className="h-6 w-6 text-blue-500" />,
    color: "bg-blue-50 border-blue-100"
  },
  {
    title: "Enhanced Endurance",
    description: "Some athletes report improved endurance and reduced exercise fatigue when incorporating CBD into their routine.",
    icon: <Flame className="h-6 w-6 text-blue-500" />,
    color: "bg-blue-50 border-blue-100"
  }
]

// Research and studies
const researchStudies = [
  {
    title: "CBD and Exercise-Induced Inflammation",
    description: "A 2020 study published in Sports Medicine found that CBD may help reduce inflammatory markers after intense exercise, potentially accelerating recovery times.",
    source: "Sports Medicine, 2020",
    link: "#"
  },
  {
    title: "CBD for Sports Recovery",
    description: "Research in the International Journal of Sports Physiology and Performance demonstrated CBD's potential to enhance recovery metrics in athletes following high-intensity training.",
    source: "International Journal of Sports Physiology and Performance, 2021",
    link: "#"
  },
  {
    title: "CBD and Athletic Performance",
    description: "A comprehensive review in Frontiers in Physiology suggested that CBD may help manage exercise-induced inflammation without negatively impacting athletic performance.",
    source: "Frontiers in Physiology, 2020",
    link: "#"
  },
  {
    title: "CBD for Sports-Related Pain",
    description: "Studies from the Journal of Pain Research showed that topical CBD application may help manage localized pain associated with sports injuries and intense training.",
    source: "Journal of Pain Research, 2019",
    link: "#"
  }
]

// Athlete testimonials
const testimonials = [
  {
    quote: "The Recovery CBD Balm is now a permanent part of my post-workout routine. It helps me bounce back faster after intense training sessions and keeps me performing at my best.",
    author: "Michael R.",
    role: "Professional Cyclist",
    image: "/images/tincture2.png",
    rating: 5
  },
  {
    quote: "As a marathon runner, recovery is everything. The Sport CBD Oil has made a noticeable difference in how quickly I recover between training runs. I'm a believer!",
    author: "Emma S.",
    role: "Marathon Runner",
    image: "/images/tincture2.png",
    rating: 5
  },
  {
    quote: "The Muscle Gel provides immediate relief after my CrossFit sessions. The cooling sensation combined with the CBD benefits is exactly what my muscles need.",
    author: "Jason T.",
    role: "CrossFit Athlete",
    image: "/images/tincture2.png",
    rating: 4
  },
]

export default function SportAndRecoveryPage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-1 rounded-full text-sm mb-6">
                Sport & Recovery
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-blue-700 mb-6">
                Elevate Your Performance & Recovery
              </h1>
              <p className="text-blue-700 text-lg mb-8 max-w-xl">
                Our sport-focused CBD products are formulated to help athletes and active individuals train harder, recover faster, and perform better.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Shop Sport Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50">
                  Learn About CBD for Athletes
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
                alt="CBD Sport and Recovery Products"
                fill
                className="object-contain"
              />
              <div className="absolute -bottom-6 left-0 right-0 mx-auto w-[90%] h-20 bg-gradient-to-r from-blue-100 to-blue-50 blur-3xl rounded-full opacity-80"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CBD Sports Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-1 rounded-full text-sm mb-4">
              Benefits for Athletes
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Athletes Choose CBD</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CBD offers natural support for athletic performance and recovery without the side effects of traditional methods. Here's how CBD can enhance your active lifestyle:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sportBenefits.map((benefit, index) => (
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
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-0.5 rounded-full text-xs mb-3">
              Products
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Sport-Focused CBD Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Our sport collection features CBD formulations designed specifically for athletes and active individuals.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {sportProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative">
                      <AspectRatio ratio={16/10} className="bg-gradient-to-b from-blue-50 to-white">
                        <div className="relative h-full w-full p-2">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <div className="absolute top-1 right-1 z-10">
                          <Badge className={`text-white ${product.badgeColor} text-[10px] px-1.5 py-0.5`}>
                            {product.strength}
                          </Badge>
                        </div>
                      </AspectRatio>
                    </div>
                    <div className="p-2">
                      <h3 className="font-semibold text-sm text-gray-900 group-hover:text-blue-700 transition-colors">{product.name}</h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-1">{product.description}</p>
                      
                      {/* Benefits */}
                      <div className="mt-1.5 space-y-0.5">
                        {product.benefits.slice(0, 2).map((benefit, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <Check className="h-2.5 w-2.5 text-blue-500" />
                            <span className="text-[10px] text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-bold text-sm text-blue-700">{product.price}</p>
                        <div className="flex items-center">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-2.5 w-2.5 ${i < Math.floor(product.rating) 
                                  ? "text-yellow-400 fill-yellow-400" 
                                  : "text-gray-200 fill-gray-200"}`} 
                              />
                            ))}
                          </div>
                          <span className="text-[8px] text-gray-500 ml-1">({product.reviews})</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-sm">
              View All Sport Products
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Research and Education Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-1 rounded-full text-sm mb-4">
              Research
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Sports Science & CBD</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our products are developed based on the latest scientific research on CBD and its potential benefits for athletes.
            </p>
          </motion.div>

          <Tabs defaultValue="studies" className="w-full">
            <TabsList className="grid w-full md:w-[400px] mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="studies">Research Studies</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
            </TabsList>
            <TabsContent value="studies">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {researchStudies.map((study, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="border border-blue-100 hover:border-blue-200 transition-all hover:shadow-md">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{study.source}</span>
                          <Link href={study.link} className="text-blue-600 text-sm font-medium hover:text-blue-700">
                            Read More
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="faq">
              <div className="space-y-6 max-w-3xl mx-auto">
                <Card className="border border-blue-100 hover:border-blue-200 transition-all hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Is CBD legal for athletes?</h3>
                    <p className="text-gray-600">Yes, in 2018 the World Anti-Doping Agency (WADA) removed CBD from its list of prohibited substances. However, other cannabinoids like THC remain prohibited. Our sport-specific products are formulated with pure CBD isolate or broad-spectrum CBD that contains no detectable THC.</p>
                  </CardContent>
                </Card>
                <Card className="border border-blue-100 hover:border-blue-200 transition-all hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How can CBD help with exercise recovery?</h3>
                    <p className="text-gray-600">CBD may help reduce exercise-induced inflammation and oxidative stress, which can speed up recovery between training sessions. Many athletes report that CBD helps manage soreness and improves sleep quality, both crucial factors in the recovery process.</p>
                  </CardContent>
                </Card>
                <Card className="border border-blue-100 hover:border-blue-200 transition-all hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">When should I use CBD for training?</h3>
                    <p className="text-gray-600">For general recovery, many athletes take CBD oil daily. For acute muscle soreness, topical CBD products like our Recovery Balm or Muscle Gel work best when applied directly after training. Pre-workout CBD may help reduce exercise anxiety without affecting performance.</p>
                  </CardContent>
                </Card>
                <Card className="border border-blue-100 hover:border-blue-200 transition-all hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Will CBD affect my athletic performance?</h3>
                    <p className="text-gray-600">CBD doesn't appear to negatively impact performance metrics. Unlike THC, CBD doesn't cause intoxication or impairment. Some athletes report that CBD helps them maintain focus and manage pre-competition anxiety, potentially improving performance.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-1 rounded-full text-sm mb-4">
              Athlete Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Athlete Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from athletes who have incorporated our CBD products into their training and recovery routines.
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
                <Card className="bg-white shadow-sm border border-blue-100 h-full">
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
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Level Up Your Training Today</h2>
                <p className="text-blue-100 mb-6">
                  Enhance your performance and recovery with our premium CBD products designed specifically for athletes.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-blue-700">
                    Shop Sport Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-600">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[250px] w-[250px]">
                  <Image
                    src="/images/tincture2.png"
                    alt="CBD Sport Products"
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