'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { InfiniteSlider } from "@/components/common/ui/infinite-slider"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { ArrowRight, Star, Dumbbell, Activity, Clock, Medal, Check, Sparkles, ShoppingCart, Heart, Info, Users, CheckCircle, XCircle, X, Beaker } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/common/ui/dialog"

// Updated with local image paths and more product details
const sportProducts = [
  {
    name: "Recovery Blend CBD Oil",
    strength: "2000mg CBD",
    image: "/images/tincture2.png",
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
    image: "/images/tincture2.png",
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
    image: "/images/tincture2.png",
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
    image: "/images/tincture2.png",
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
    image: "/images/tincture2.png",
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
    icon: <Activity className="h-6 w-6 text-red-500" />,
    color: "bg-red-50 border-red-100"
  },
  {
    title: "Better Sleep & Recovery",
    description: "Quality sleep is crucial for recovery and performance. Our CBD formulas help improve sleep quality for maximum results.",
    icon: <Clock className="h-6 w-6 text-red-500" />,
    color: "bg-red-50 border-red-100"
  },
  {
    title: "Joint & Muscle Support",
    description: "Our targeted formulas provide relief to sore muscles and joints while supporting long-term mobility and flexibility.",
    icon: <Medal className="h-6 w-6 text-red-500" />,
    color: "bg-red-50 border-red-100"
  }
]

// Testimonials
const testimonials = [
  {
    quote: "The Recovery Blend has been a game-changer for my marathon training. I'm recovering faster between long runs and feeling less soreness.",
    author: "Michael T.",
    role: "Marathon Runner",
    image: "/images/tincture2.png",
    rating: 5
  },
  {
    quote: "As a personal trainer, I recommend the Muscle Relief oil to all my clients. It's made a huge difference in their recovery and performance.",
    author: "Jessica R.",
    role: "Personal Trainer",
    image: "/images/tincture2.png",
    rating: 5
  },
  {
    quote: "I've tried many products for my joint pain from years of weightlifting. The Joint Support CBD oil is the only one that consistently works.",
    author: "David K.",
    role: "Competitive Weightlifter",
    image: "/images/tincture2.png",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {sportProducts.filter(p => p.featured).map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border border-red-100 hover:border-red-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="relative">
                    <AspectRatio ratio={16/9} className="bg-gradient-to-b from-red-50 to-white">
                      <div className="relative h-full w-full p-4">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute top-2 right-2 z-10">
                        <Badge className={cn("text-white text-xs px-2 py-0.5", product.badgeColor)}>
                          {product.strength}
                        </Badge>
                      </div>
                    </AspectRatio>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-semibold text-base text-gray-900 group-hover:text-red-700 transition-colors">{product.name}</h3>
                      <p className="font-bold text-base text-red-700">{product.price}</p>
                    </div>
                    
                    <div className="flex items-center mb-2">
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
                      <span className="text-xs text-gray-500">({product.reviews} verified reviews)</span>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-2.5">{product.description}</p>
                    
                    <div className="bg-red-50 p-2 rounded-md mb-2.5">
                      <p className="text-xs text-red-800 font-medium">Sport Formula</p>
                      <p className="text-xs text-gray-600">Enhanced with BCAAs, menthol for recovery</p>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-2">
                      <p className="text-xs font-medium text-gray-700 mb-1.5">Athletic Benefits:</p>
                      <div className="grid grid-cols-3 gap-1.5">
                        {product.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center bg-red-50 rounded-md px-1.5 py-1">
                            <Check className="h-3 w-3 text-red-500 flex-shrink-0" />
                            <span className="text-xs text-gray-600 ml-1 truncate">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-red-50 pt-2 text-xs text-gray-500">
                      <span>Athlete Tested • No THC</span>
                      <span>Fast-Acting Formula</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-4 py-3 border-t border-red-50 flex gap-1 flex-wrap">
                  <Button size="sm" variant="default" className="bg-red-600 hover:bg-red-700 text-white text-xs px-3 h-8 rounded-lg">
                    <ShoppingCart className="h-3.5 w-3.5 mr-1.5" /> Add to Cart
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 px-3 text-xs text-red-700 border-red-200 hover:bg-red-50 hover:text-red-800 rounded-lg"
                      >
                        <Info className="h-3.5 w-3.5 mr-1.5" /> Benefits
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-red-700 flex items-center gap-1.5">
                          <Activity className="h-5 w-5" />
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
                        
                        <h4 className="font-medium text-red-700 mb-2 flex items-center">
                          <Sparkles className="h-4 w-4 mr-1.5" /> Key Benefits
                        </h4>
                        
                        <div className="bg-red-50 rounded-lg p-4 mb-4">
                          <ul className="space-y-3">
                            {product.benefits.map((benefit, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <div className="bg-white rounded-full p-1 mt-0.5">
                                  <Check className="h-3.5 w-3.5 text-red-600" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-gray-800">{benefit}</p>
                                  <p className="text-xs text-gray-600">
                                    {getSportBenefitDescription(benefit)}
                                  </p>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <h4 className="font-medium text-red-700 mb-2 flex items-center">
                          <Users className="h-4 w-4 mr-1.5" /> Ideal For
                        </h4>
                        <p className="text-sm text-gray-700 mb-4">
                          {getSportIdealUsers(product.name)}
                        </p>
                        
                        <h4 className="font-medium text-red-700 mb-2 flex items-center">
                          <Clock className="h-4 w-4 mr-1.5" /> Recommended Usage
                        </h4>
                        <p className="text-sm text-gray-700">
                          {getSportUsageInstructions(product.name)}
                        </p>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="h-8 px-3 text-xs text-red-700 border-red-200 hover:bg-red-50 hover:text-red-800 rounded-lg"
                      >
                        <Users className="h-3.5 w-3.5 mr-1.5" /> For Who?
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-red-700 flex items-center gap-1.5">
                          <Users className="h-5 w-5" />
                          Who is {product.name} for?
                        </DialogTitle>
                      </DialogHeader>
                      <div className="mt-4">
                        <div className="bg-red-50 p-4 rounded-lg mb-4">
                          <p className="text-sm text-gray-700">
                            {getSportIdealUsers(product.name)}
                          </p>
                        </div>
                        
                        <h4 className="font-medium text-red-700 mb-2 flex items-center">
                          <CheckCircle className="h-4 w-4 mr-1.5" /> Recommended For
                        </h4>
                        <ul className="space-y-2 mb-4">
                          {getSportRecommendedGroups(product.name).map((group, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <Check className="h-3.5 w-3.5 text-red-600 mt-0.5" />
                              <span className="text-sm text-gray-700">{group}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <h4 className="font-medium text-red-700 mb-2 flex items-center">
                          <XCircle className="h-4 w-4 mr-1.5" /> Not Recommended For
                        </h4>
                        <ul className="space-y-2">
                          {getSportNotRecommendedGroups().map((group, i) => (
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
                        className="h-8 px-3 text-xs text-red-700 border-red-200 hover:bg-red-50 hover:text-red-800 rounded-lg"
                      >
                        <Beaker className="h-3.5 w-3.5 mr-1.5" /> Dosage
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-red-700 flex items-center gap-1.5">
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
                          This sport-focused {product.name} contains {product.strength} of high-quality CBD. Athletic dosage needs may differ based on training intensity and recovery goals.
                        </p>
                        
                        <h4 className="font-medium text-red-700 mb-2 flex items-center">
                          <Info className="h-4 w-4 mr-1.5" /> Athletic Dosage Guidelines
                        </h4>
                        <p className="text-sm text-gray-700 mb-4">
                          For athletes and active individuals, CBD dosage may need to be adjusted based on training intensity, body weight, and recovery needs. We recommend a personalized approach.
                        </p>
                        
                        <div className="bg-red-50 rounded-lg p-4 mb-4">
                          <h5 className="font-medium text-red-700 mb-2">Recommended Doses for Athletes:</h5>
                          <ul className="space-y-3">
                            <li className="grid grid-cols-2 gap-2">
                              <div className="flex items-start gap-1.5">
                                <Badge variant="outline" className="h-5 border-red-200 text-red-700">Light Training</Badge>
                              </div>
                              <p className="text-xs text-gray-700">
                                10-15mg CBD daily<br />
                                <span className="text-gray-500">For light workouts, general recovery</span>
                              </p>
                            </li>
                            <li className="grid grid-cols-2 gap-2">
                              <div className="flex items-start gap-1.5">
                                <Badge variant="outline" className="h-5 border-red-200 text-red-700">Moderate Training</Badge>
                              </div>
                              <p className="text-xs text-gray-700">
                                20-40mg CBD daily<br />
                                <span className="text-gray-500">For regular training, muscle recovery</span>
                              </p>
                            </li>
                            <li className="grid grid-cols-2 gap-2">
                              <div className="flex items-start gap-1.5">
                                <Badge variant="outline" className="h-5 border-red-200 text-red-700">Intense Training</Badge>
                              </div>
                              <p className="text-xs text-gray-700">
                                50-80mg CBD daily<br />
                                <span className="text-gray-500">For high-intensity training, competition prep</span>
                              </p>
                            </li>
                            <li className="grid grid-cols-2 gap-2">
                              <div className="flex items-start gap-1.5">
                                <Badge variant="outline" className="h-5 border-red-200 text-red-700">Recovery Focus</Badge>
                              </div>
                              <p className="text-xs text-gray-700">
                                60-100mg+ CBD daily<br />
                                <span className="text-gray-500">For injury recovery, significant soreness</span>
                              </p>
                            </li>
                          </ul>
                        </div>
                        
                        <h4 className="font-medium text-red-700 mb-2 flex items-center">
                          <Clock className="h-4 w-4 mr-1.5" /> Timing Recommendations
                        </h4>
                        <p className="text-sm text-gray-700 mb-2">
                          For this {product.strength} product:
                        </p>
                        <ul className="space-y-1 mb-4 text-sm text-gray-700">
                          <li>• <span className="font-medium">Pre-workout:</span> 30-60 minutes before training (focus on smaller doses)</li>
                          <li>• <span className="font-medium">Post-workout:</span> Within 30 minutes after training (may use higher doses)</li>
                          <li>• <span className="font-medium">Before bed:</span> For overnight recovery, 1 hour before sleep</li>
                          <li>• <span className="font-medium">Calculation:</span> Each full dropper provides approximately {Number(product.strength.replace(/[^0-9]/g, ''))/30}mg of CBD</li>
                        </ul>
                        
                        <div className="p-3 border border-yellow-200 bg-yellow-50 rounded-lg mb-4">
                          <p className="text-xs text-yellow-800 flex items-start">
                            <Info className="h-3.5 w-3.5 mr-1.5 flex-shrink-0 mt-0.5" />
                            Athletes subject to drug testing should ensure the CBD product is THC-free or contains THC below detectable limits. Always consult with a sports medicine professional.
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button size="sm" variant="ghost" className="ml-auto px-2 h-8 hover:bg-transparent hover:text-red-700">
                    <Heart className="h-3.5 w-3.5" />
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
              <Link href="/sport-and-recovery">
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

// Helper functions for product benefits dialog
function getSportBenefitDescription(benefit: string): string {
  const benefitDescriptions: {[key: string]: string} = {
    "Reduces inflammation": "Helps minimize exercise-induced inflammation for faster recovery between workouts.",
    "Eases muscle soreness": "Interacts with CB2 receptors in muscle tissue to reduce post-workout discomfort.",
    "Speeds recovery": "Supports cellular repair processes to help you bounce back faster after intense training.",
    "Improves sleep": "Enhances sleep quality, which is essential for muscle recovery and performance gains.",
    "Joint support": "Helps maintain joint health and comfort during high-impact activities.",
    "Stress reduction": "Lowers cortisol levels which can interfere with recovery and muscle growth.",
    "Increases endurance": "May help improve stamina by supporting cardiovascular function and oxygen utilization.",
    "Enhanced focus": "Improves mind-muscle connection and training intensity without stimulants.",
    "All natural": "No banned substances or synthetic ingredients - safe for competitive athletes.",
    "Fast-acting": "Rapid absorption formula designed to work quickly when you need it most.",
    "Long-lasting": "Extended release technology provides benefits throughout your training session or recovery period.",
    "Non-psychoactive": "All the performance benefits without the high - THC-free formula."
  };
  
  return benefitDescriptions[benefit] || "Supports athletic performance and physical wellbeing.";
}

function getSportIdealUsers(productName: string): string {
  if (productName.includes("Recovery")) {
    return "Athletes engaged in high-intensity training, individuals experiencing post-workout soreness, and anyone looking to optimize their recovery between sessions.";
  } else if (productName.includes("Relief") || productName.includes("Pain")) {
    return "Active individuals dealing with exercise-induced discomfort, athletes with joint stress, and those needing targeted relief for specific areas.";
  } else if (productName.includes("Performance")) {
    return "Competitive athletes, fitness enthusiasts looking to maximize their potential, and individuals preparing for athletic events or challenges.";
  } else if (productName.includes("Focus") || productName.includes("Energy")) {
    return "Athletes needing mental clarity during training or competition, those seeking non-stimulant energy support, and individuals wanting to enhance their mind-body connection.";
  } else {
    return "Active individuals of all levels looking to support their physical performance, recovery, and overall athletic wellness naturally.";
  }
}

function getSportUsageInstructions(productName: string): string {
  if (productName.includes("Oil") || productName.includes("Tincture")) {
    return "Take 1ml about 30 minutes before activity for performance, or post-workout for recovery. Hold under tongue for 60 seconds before swallowing for fastest absorption.";
  } else if (productName.includes("Topical") || productName.includes("Balm") || productName.includes("Cream")) {
    return "Apply directly to affected areas before and after activity. Massage gently until absorbed. Can be reapplied as needed for targeted relief.";
  } else if (productName.includes("Capsule")) {
    return "Take 1 capsule with water about 45-60 minutes before activity, or immediately after for recovery support. Best taken with food for optimal absorption.";
  } else {
    return "Follow package directions for optimal dosing. For best results, use consistently as part of your training regimen rather than sporadically.";
  }
}

function getSportRecommendedGroups(productName: string): string[] {
  if (productName.includes("Recovery")) {
    return [
      "Athletes after intense training sessions",
      "Fitness enthusiasts seeking faster muscle recovery",
      "Active individuals with post-workout soreness",
      "People with demanding physical routines"
    ];
  } else if (productName.includes("Performance")) {
    return [
      "Competitive athletes seeking natural support",
      "Active individuals looking to optimize workouts",
      "Sports enthusiasts preparing for events",
      "Fitness-focused professionals"
    ];
  } else if (productName.includes("Relief") || productName.includes("Pain")) {
    return [
      "Athletes with exercise-induced discomfort",
      "Active people with joint stress",
      "Individuals with physically demanding jobs",
      "Sports participants seeking targeted relief"
    ];
  } else if (productName.includes("Focus") || productName.includes("Energy")) {
    return [
      "Athletes needing mental clarity during competition",
      "Individuals seeking improved mind-body connection",
      "People wanting non-stimulant energy support",
      "Sports enthusiasts requiring sustained attention"
    ];
  } else {
    return [
      "Active individuals of all levels",
      "Health-conscious fitness enthusiasts",
      "People with regular physical activity habits",
      "Athletes looking for natural wellness support"
    ];
  }
}

function getSportNotRecommendedGroups(): string[] {
  return [
    "Pregnant or nursing women",
    "Athletes subject to drug testing without verification",
    "Children under 18 years of age",
    "Individuals with certain health conditions (consult doctor)",
    "Those taking medications with potential interactions"
  ];
} 