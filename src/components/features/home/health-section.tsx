'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Star, Heart, Brain, Moon, Droplet, Check, Sparkles, ShoppingCart, Info, Leaf, Users, Clock, CheckCircle, XCircle, X, Beaker, Bot } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"
import { InfiniteSlider } from "@/components/common/ui/infinite-slider"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/ui/dialog"

// Updated with local image paths and more product details
const healthProducts = [
  {
    name: "Full Spectrum CBD Oil",
    strength: "1000mg CBD",
    image: "/images/tincture2.png",
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
    image: "/images/tincture2.png",
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
    image: "/images/tincture2.png",
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
    image: "/images/tincture2.png",
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
    image: "/images/tincture2.png",
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
    icon: <Moon className="h-6 w-6 text-green-500" />,
    color: "bg-green-50 border-green-100"
  },
  {
    title: "Mental Clarity",
    description: "CBD may help promote focus and mental clarity while reducing brain fog and supporting cognitive function.",
    icon: <Brain className="h-6 w-6 text-green-500" />,
    color: "bg-green-50 border-green-100"
  },
  {
    title: "Better Absorption",
    description: "Our water-soluble formulas provide up to 5x better absorption than standard CBD oils.",
    icon: <Droplet className="h-6 w-6 text-green-500" />,
    color: "bg-green-50 border-green-100"
  }
]

// Health testimonials
const testimonials = [
  {
    quote: "I've been using the Full Spectrum CBD Oil for my anxiety and it has made a world of difference in my daily life. I feel calmer and more focused.",
    author: "Sarah M.",
    role: "Wellness Advocate",
    image: "/images/tincture2.png",
    rating: 5
  },
  {
    quote: "The Sleep Formula has completely transformed my sleep routine. I fall asleep faster and wake up feeling refreshed without any grogginess.",
    author: "James K.",
    role: "Insomnia Sufferer",
    image: "/images/tincture2.png",
    rating: 5
  },
  {
    quote: "As someone with chronic pain, the Broad Spectrum CBD Oil has been a game-changer. I can finally get through my day without constant discomfort.",
    author: "Lisa T.",
    role: "Chronic Pain Patient",
    image: "/images/tincture2.png",
    rating: 4
  },
]

export function HealthAndWellness() {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Badge className="bg-green-600 text-white hover:bg-green-700 px-4 py-1 rounded-full text-sm mb-3">
              Health & Wellness
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-600 to-green-700 mb-3">
              Premium CBD for Daily Wellness
            </h2>
            <p className="text-[#171717] text-base max-w-2xl text-center font-normal">
              Our health and wellness collection features premium CBD oils designed to support your daily wellness routine and promote balance in body and mind.
            </p>
          </motion.div>
        </div>

        {/* CBD Benefits Section - More compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {cbdBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className={cn("border h-full transition-all hover:shadow-md", benefit.color)}>
                <CardContent className="pt-4 p-4">
                  <div className="rounded-full w-10 h-10 flex items-center justify-center bg-white border border-gray-100 shadow-sm mb-3">
                    {benefit.icon}
                  </div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1.5">{benefit.title}</h3>
                  <p className="text-gray-600 text-xs line-clamp-3">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Featured Products Heading */}
        <div className="flex flex-col items-center justify-center mb-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-800">Featured CBD Products</h3>
            <p className="text-green-600 mt-1 font-normal">Discover our most popular wellness formulas</p>
          </motion.div>
          
          <Link href="/health-and-wellness" className="text-green-700 hover:text-green-800 font-medium text-sm flex items-center gap-1 mt-2">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Products Grid - More compact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {healthProducts.filter(p => p.featured).map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-md">
                <CardContent className="p-0">
                  <div className="relative">
                    <AspectRatio ratio={1/1} className="bg-gradient-to-b from-green-50 to-white">
                      <div className="relative h-full w-full p-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-1 scale-75 transition-transform duration-300 group-hover:scale-[0.85]"
                        />
                      </div>
                      <div className="absolute top-2 right-2 z-10">
                        <Badge className={cn("text-white text-xs px-2 py-0.5", product.badgeColor)}>
                          {product.strength}
                        </Badge>
                      </div>
                    </AspectRatio>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-sm text-gray-900 group-hover:text-green-700 transition-colors">{product.name}</h3>
                      <p className="font-bold text-sm text-green-700">{product.price}</p>
                    </div>
                    
                    <div className="flex items-center mb-1.5">
                      <div className="flex mr-1.5">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-3 w-3 ${i < Math.floor(product.rating) 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-200 fill-gray-200"}`} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">({product.reviews})</span>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-2">
                      {product.benefits.map((benefit, i) => (
                        <span key={i} className="bg-green-50 text-[10px] text-green-700 px-1.5 py-0.5 rounded-full flex items-center">
                          <Check className="h-2 w-2 mr-0.5" /> {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-3 pt-0 flex gap-1">
                  <Button size="sm" variant="default" className="bg-green-600 hover:bg-green-700 text-white text-xs px-3 h-7 rounded-lg transition-colors flex-1">
                    <ShoppingCart className="h-3 w-3 mr-1" /> Add to Cart
                  </Button>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 w-10 flex items-center justify-center text-green-700 border-green-200 hover:bg-green-50 hover:text-green-800 rounded-lg transition-colors"
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-green-700 flex items-center gap-1.5">
                          <Leaf className="h-5 w-5" />
                          {product.name} Benefits
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="flex items-center mb-3">
                          <Badge className={cn("mr-2", product.badgeColor)}>
                            {product.strength}
                          </Badge>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) 
                                  ? "text-yellow-400 fill-yellow-400" 
                                  : "text-gray-200 fill-gray-200"}`} 
                              />
                            ))}
                            <span className="text-xs text-gray-500 ml-1.5">({product.reviews} reviews)</span>
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-4">{product.description}</p>
                        
                        <h4 className="font-medium text-green-700 mb-2 flex items-center">
                          <Sparkles className="h-4 w-4 mr-1.5" /> Key Benefits
                        </h4>
                        
                        <div className="bg-green-50 rounded-lg p-4 mb-4">
                          <ul className="space-y-3">
                            {product.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="bg-white rounded-full p-1 mt-0.5">
                                  <Check className="h-3.5 w-3.5 text-green-600" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-800">{benefit}</p>
                                  <p className="text-xs text-gray-600">
                                    {getBenefitDescription(benefit)}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <h4 className="font-medium text-green-700 mb-2 flex items-center">
                          <Users className="h-4 w-4 mr-1.5" /> Ideal For
                        </h4>
                        <p className="text-sm text-gray-700 mb-4">
                          {getIdealUsers(product.name)}
                        </p>
                        
                        <h4 className="font-medium text-green-700 mb-2 flex items-center">
                          <Clock className="h-4 w-4 mr-1.5" /> Recommended Usage
                        </h4>
                        <p className="text-sm text-gray-700">
                          {getUsageInstructions(product.name)}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 w-10 flex items-center justify-center text-green-700 border-green-200 hover:bg-green-50 hover:text-green-800 rounded-lg transition-colors"
                      >
                        <Users className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-green-700 flex items-center gap-1.5">
                          <Users className="h-5 w-5" />
                          Who is {product.name} for?
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="bg-green-50 p-4 rounded-lg mb-4">
                          <p className="text-sm text-gray-700">
                            {getIdealUsers(product.name)}
                          </p>
                        </div>
                        
                        <h4 className="font-medium text-green-700 mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1.5" /> Recommended For
                        </h4>
                        <ul className="space-y-2 mb-4">
                          {getRecommendedGroups(product.name).map((group, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-green-600 mt-0.5" />
                              <span className="text-sm text-gray-700">{group}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="font-medium text-green-700 mb-2 flex items-center">
                          <XCircle className="h-4 w-4 mr-1.5" /> Not Recommended For
                        </h4>
                        <ul className="space-y-2">
                          {getNotRecommendedGroups().map((group, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <X className="h-3.5 w-3.5 text-red-500 mt-0.5" />
                              <span className="text-sm text-gray-700">{group}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
 
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 w-10 flex items-center justify-center text-green-700 border-green-200 hover:bg-green-50 hover:text-green-800 rounded-lg transition-colors"
                      >
                        <Beaker className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-green-700 flex items-center gap-1.5">
                          <Beaker className="h-5 w-5" />
                          {product.name} Dosage Guide
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="flex items-center mb-3">
                          <Badge className={cn("mr-2", product.badgeColor)}>
                            {product.strength}
                          </Badge>
                          <p className="text-xs text-gray-600">Total CBD: {product.strength}</p>
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-4">
                          This {product.name} contains {product.strength} of high-quality CBD. Proper dosage depends on your individual needs and condition severity.
                        </p>
                        
                        <h4 className="font-medium text-green-700 mb-2 flex items-center">
                          <Info className="h-4 w-4 mr-1.5" /> Understanding Dosage
                        </h4>
                        <p className="text-sm text-gray-700 mb-4">
                          CBD affects everyone differently based on factors like body weight, metabolism, and the condition being addressed. We recommend starting with a low dose and gradually increasing until you find your optimal dose.
                        </p>
                        
                        <div className="bg-green-50 rounded-lg p-4 mb-4">
                          <h5 className="font-medium text-green-700 mb-2">Recommended Starting Doses:</h5>
                          <ul className="space-y-3">
                            <li className="grid grid-cols-2 gap-2">
                              <div className="flex items-start gap-1.5">
                                <Badge variant="outline" className="h-5 border-green-200 text-green-700">Mild</Badge>
                              </div>
                              <p className="text-xs text-gray-700">
                                5-10mg CBD daily<br />
                                <span className="text-gray-500">For general wellness, mild stress</span>
                              </p>
                            </li>
                            <li className="grid grid-cols-2 gap-2">
                              <div className="flex items-start gap-1.5">
                                <Badge variant="outline" className="h-5 border-green-200 text-green-700">Moderate</Badge>
                              </div>
                              <p className="text-xs text-gray-700">
                                15-30mg CBD daily<br />
                                <span className="text-gray-500">For sleep issues, moderate anxiety</span>
                              </p>
                            </li>
                            <li className="grid grid-cols-2 gap-2">
                              <div className="flex items-start gap-1.5">
                                <Badge variant="outline" className="h-5 border-green-200 text-green-700">Severe</Badge>
                              </div>
                              <p className="text-xs text-gray-700">
                                40-60mg CBD daily<br />
                                <span className="text-gray-500">For chronic pain, severe conditions</span>
                              </p>
                            </li>
                            <li className="grid grid-cols-2 gap-2">
                              <div className="flex items-start gap-1.5">
                                <Badge variant="outline" className="h-5 border-green-200 text-green-700">Therapeutic</Badge>
                              </div>
                              <p className="text-xs text-gray-700">
                                80-200mg+ CBD daily<br />
                                <span className="text-gray-500">For serious health concerns (consult healthcare provider)</span>
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    size="sm"
                    variant="ghost"
                    className="h-8 w-10 flex items-center justify-center text-green-600 hover:text-green-700 hover:bg-green-50 transition-colors"
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Compact Infinite Slider */}
        <InfiniteSlider gap={12} className="w-full py-4 mb-6">
          {healthProducts.map((product, index) => (
            <motion.div 
              key={`slider-${index}`} 
              className="relative group w-[180px]"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <AspectRatio ratio={1} className="bg-white rounded-xl border border-green-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4 scale-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-green-800/20 to-transparent rounded-xl opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-2 text-left">
                  <p className="text-white text-xs font-medium leading-tight">{product.name}</p>
                  <Badge variant="outline" className="mt-1 text-[8px] bg-white/10 text-white border-white/20">
                    {product.strength}
                  </Badge>
                </div>
              </AspectRatio>
            </motion.div>
          ))}
        </InfiniteSlider>

        {/* Testimonials Section - More compact */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-green-800 text-center">Customer Testimonials</h3>
            <p className="text-green-600 mt-1 text-center">Real stories from people whose health has improved with our products</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={cn(
                            "h-3 w-3", 
                            i < testimonial.rating 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-200 fill-gray-200"
                          )} 
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm italic mb-4 line-clamp-4">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8 rounded-full bg-green-100 overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-xs text-gray-900">{testimonial.author}</p>
                        <p className="text-[10px] text-gray-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CBD Quality Banner - More compact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-6 mb-12 text-white"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
                <Sparkles className="h-5 w-5" />
                Our CBD Quality Promise
              </h3>
              <p className="text-green-100 text-sm mb-3">
                We source only the finest organic hemp plants and use advanced CO2 extraction methods to ensure the highest quality CBD products. Every batch is third-party tested for purity and potency.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white text-xs">Organic Hemp</Badge>
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white text-xs">CO2 Extracted</Badge>
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white text-xs">Lab Tested</Badge>
                <Badge variant="outline" className="bg-white/10 border-white/20 text-white text-xs">Non-GMO</Badge>
              </div>
            </div>
            <Button asChild size="sm" className="bg-white text-green-700 hover:bg-green-50 px-4 py-2">
              <Link href="/lab-results">
                View Lab Results <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
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
            className="flex gap-3"
          >
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 transition-colors">
              <Link href="/health-and-wellness" className="flex items-center gap-2">
                <Image src="/images/2.png" width={24} height={24} alt="Twistly" className="h-5 w-5" />
                <Separator orientation="vertical" className="h-4 bg-green-50/20" />
                Explore Health & Wellness
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              variant="outline" 
              className="border-green-600 text-green-700 hover:bg-green-50 rounded-full px-6 transition-colors"
            >
              <Link href="#cbd-doctor" className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                Ask AI
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

// Helper functions for product benefits dialog
function getBenefitDescription(benefit: string): string {
  const benefitDescriptions: {[key: string]: string} = {
    "Reduces anxiety": "CBD interacts with serotonin receptors in the brain that regulate mood and stress responses.",
    "Promotes relaxation": "The calming properties help ease tension and promote a sense of peace and well-being.",
    "Improves sleep": "Helps regulate sleep patterns and promotes deeper, more restful sleep cycles.",
    "Anti-inflammatory": "Reduces inflammation throughout the body, helping with various health conditions.",
    "Pain relief": "Interacts with endocannabinoid receptors to reduce pain perception and sensitivity.",
    "Balances mood": "Helps regulate emotional responses and stabilize mood fluctuations.",
    "Improves focus": "Reduces distracting thoughts and helps maintain mental clarity.",
    "Natural ingredients": "Free from synthetic chemicals and made with organic hemp extracts.",
    "Non-addictive": "Provides relief without creating dependency or harmful side effects.",
    "Fast-acting": "Specially formulated for quick absorption and rapid relief.",
    "Long-lasting": "Extended release formula provides all-day benefits with a single dose.",
    "Non-psychoactive": "All the benefits of hemp without the high - contains no THC."
  };
  
  return benefitDescriptions[benefit] || "Supports overall wellness and balance in the body.";
}

function getIdealUsers(productName: string): string {
  if (productName.includes("Sleep")) {
    return "Individuals with sleep difficulties, those with busy minds at bedtime, and anyone looking to improve their sleep quality and duration.";
  } else if (productName.includes("Relief")) {
    return "Those experiencing discomfort, active individuals, and anyone looking for natural alternatives to traditional pain management.";
  } else if (productName.includes("Calm") || productName.includes("Stress")) {
    return "People dealing with daily stress, those in high-pressure environments, and individuals seeking emotional balance.";
  } else if (productName.includes("Focus")) {
    return "Students, professionals, and anyone needing improved concentration, mental clarity, and cognitive performance.";
  } else {
    return "Anyone seeking to improve their overall wellness, balance their endocannabinoid system, and support natural body functions.";
  }
}

function getUsageInstructions(productName: string): string {
  if (productName.includes("Oil") || productName.includes("Tincture")) {
    return "Place desired amount under tongue and hold for 60-90 seconds before swallowing. Start with 0.5ml and adjust as needed. Take 1-2 times daily.";
  } else if (productName.includes("Gummies") || productName.includes("Edible")) {
    return "Take 1 gummy daily, preferably with food. Allow 45-60 minutes for effects. Can be taken morning or evening depending on desired effects.";
  } else if (productName.includes("Capsule")) {
    return "Take 1 capsule daily with water and food. Best taken at the same time each day for consistent results.";
  } else {
    return "Use as directed on package. Start with the smallest recommended amount and gradually increase as needed. Consistency is key for best results.";
  }
}

function getRecommendedGroups(productName: string): string[] {
  if (productName.includes("Sleep")) {
    return [
      "People with occasional sleep difficulties",
      "Those with busy minds at bedtime",
      "Adults seeking to improve sleep quality",
      "People with disrupted sleep schedules"
    ];
  } else if (productName.includes("Relief") || productName.includes("Pain")) {
    return [
      "Active individuals with exercise-induced discomfort",
      "People experiencing occasional aches",
      "Those seeking natural alternatives for physical comfort",
      "Adults with physically demanding lifestyles"
    ];
  } else if (productName.includes("Calm") || productName.includes("Stress")) {
    return [
      "People in high-pressure environments",
      "Those experiencing occasional stress",
      "Adults seeking emotional balance",
      "Individuals with busy modern lifestyles"
    ];
  } else if (productName.includes("Focus")) {
    return [
      "Professionals needing mental clarity",
      "Students during study periods",
      "Adults seeking improved concentration",
      "Creative workers needing to maintain attention"
    ];
  } else {
    return [
      "Adults seeking overall wellness support",
      "People looking to supplement their healthy lifestyle",
      "Those interested in natural wellness products",
      "Health-conscious individuals"
    ];
  }
}

function getNotRecommendedGroups(): string[] {
  return [
    "Pregnant or nursing women",
    "Children under 18 years of age",
    "Individuals with certain medical conditions (consult doctor)",
    "Those taking medications with potential interactions",
    "People with known allergies to hemp or cannabis products"
  ];
} 