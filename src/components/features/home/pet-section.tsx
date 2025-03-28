'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Star, Sparkles, Check, PawPrint, Award, Shield, Heart, Droplet, ShoppingCart, Info, Users, Beaker, CheckCircle, Bot } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { cn } from "@/lib/utils"
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

// Pet CBD products
const petProducts = [
  {
    name: "Calming CBD Oil for Dogs",
    strength: "300mg CBD",
    image: "/images/tincture2.png",
    price: "$44.99",
    rating: 4.9,
    reviews: 145,
    description: "Soothing formula to reduce anxiety and promote relaxation in dogs",
    benefits: ["Reduces anxiety", "Calms hyperactivity", "Eases noise phobias"],
    badgeColor: "bg-amber-600",
    featured: true
  },
  {
    name: "Joint Support CBD Treats",
    strength: "5mg CBD/treat",
    image: "/images/tincture2.png",
    price: "$34.99",
    rating: 4.8,
    reviews: 117,
    description: "Delicious treats formulated for aging pets with joint discomfort",
    benefits: ["Supports mobility", "Eases joint pain", "Improves quality of life"],
    badgeColor: "bg-amber-600",
    featured: true
  },
  {
    name: "Multi-Pet CBD Spray",
    strength: "200mg CBD",
    image: "/images/tincture2.png",
    price: "$39.99",
    rating: 4.7,
    reviews: 98,
    description: "Easy-to-use spray for cats, dogs and other small pets",
    benefits: ["Versatile formula", "Easy application", "Fast absorption"],
    badgeColor: "bg-amber-700",
    featured: true
  },
  {
    name: "Feline Comfort CBD Drops",
    strength: "150mg CBD",
    image: "/images/tincture2.png",
    price: "$32.99",
    rating: 4.6,
    reviews: 84,
    description: "Specially formulated for cats with a mild flavor they love",
    benefits: ["Cat-specific", "Stress reduction", "Supports older cats"],
    badgeColor: "bg-amber-500",
    featured: false
  },
  {
    name: "Senior Pet Wellness CBD",
    strength: "500mg CBD",
    image: "/images/tincture2.png",
    price: "$54.99",
    rating: 4.8,
    reviews: 103,
    description: "Higher strength formula for aging pets with multiple needs",
    benefits: ["Comprehensive care", "Anti-inflammatory", "Supports vitality"],
    badgeColor: "bg-amber-800",
    featured: false
  }
]

// Pet CBD benefits
const petBenefits = [
  {
    title: "Anxiety Relief",
    description: "Helps pets stay calm during stressful situations like thunderstorms, travel, or separation.",
    icon: <Heart className="h-6 w-6 text-amber-600" />,
    color: "bg-amber-50 border-amber-100"
  },
  {
    title: "Pain Management",
    description: "Offers natural relief for aging pets suffering from joint pain, arthritis or post-surgery discomfort.",
    icon: <Shield className="h-6 w-6 text-amber-600" />,
    color: "bg-amber-50 border-amber-100"
  },
  {
    title: "Better Mobility",
    description: "Supports healthy joint function and improves mobility in senior pets or those with joint issues.",
    icon: <PawPrint className="h-6 w-6 text-amber-600" />,
    color: "bg-amber-50 border-amber-100"
  },
  {
    title: "Improved Well-Being",
    description: "Promotes overall wellness by supporting your pet's endocannabinoid system for better quality of life.",
    icon: <Sparkles className="h-6 w-6 text-amber-600" />,
    color: "bg-amber-50 border-amber-100"
  }
]

// Pet testimonials
const testimonials = [
  {
    quote: "Our 12-year-old Labrador was struggling with mobility until we tried the Joint Support CBD Treats. Within a week, he was moving so much better and seemed happier!",
    author: "Robert J.",
    role: "Dog Owner",
    image: "/images/tincture2.png",
    rating: 5
  },
  {
    quote: "My cat has severe anxiety during thunderstorms. The Feline Comfort CBD Drops have been a game-changer. She still notices the storms but stays calm throughout.",
    author: "Emma L.",
    role: "Cat Owner",
    image: "/images/tincture2.png",
    rating: 5
  },
  {
    quote: "The Multi-Pet CBD Spray is perfect for our small hobby farm. We use it for our dogs, cats, and even our mini-horse with great results for all of them.",
    author: "Michael T.",
    role: "Pet Enthusiast",
    image: "/images/tincture2.png",
    rating: 4
  },
]

export function Pet() {
  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Badge className="bg-amber-600 text-white hover:bg-amber-700 px-4 py-1 rounded-full text-sm mb-3">
              Pet Wellness
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-amber-800 via-amber-600 to-amber-700 mb-3">
              CBD For Your Furry Friends
            </h2>
            <p className="text-amber-700 text-base max-w-2xl text-center">
              Support your pet's health and happiness with our specially formulated CBD products designed specifically for animals of all sizes.
            </p>
          </motion.div>
        </div>

        {/* Pet Benefits Section - More compact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {petBenefits.map((benefit, index) => (
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
            <h3 className="text-2xl md:text-3xl font-bold text-amber-800">Bestselling Pet Products</h3>
            <p className="text-amber-600 mt-1">Specially formulated CBD for your pets' health and happiness</p>
          </motion.div>
          
          <Link href="/pet-cbd" className="text-amber-700 hover:text-amber-800 font-medium text-sm flex items-center gap-1 mt-2">
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {petProducts.filter(p => p.featured).map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border border-amber-100 hover:border-amber-200 transition-all duration-300 hover:shadow-md">
                <CardContent className="p-0">
                  <div className="relative">
                    <AspectRatio ratio={1/1} className="bg-gradient-to-b from-amber-50 to-white">
                      <div className="relative h-full w-full p-3">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-4 scale-75"
                        />
                      </div>
                      <div className="absolute top-2 right-2 z-10">
                        <Badge className={cn("text-white text-xs px-2 py-0.5", product.badgeColor)}>
                          {product.strength}
                        </Badge>
                      </div>
                    </AspectRatio>
                  </div>
                  
                  <div className="p-3 md:p-4 flex flex-col h-full">
                    <div>
                      <h3 className="font-semibold text-base text-gray-900 group-hover:text-amber-700 transition-colors">{product.name}</h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                      
                      {/* Benefits */}
                      <div className="mt-2 space-y-0.5">
                        {product.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-1">
                            <Check className="h-3 w-3 text-amber-500 mt-0.5" />
                            <span className="text-xs text-gray-600 leading-tight">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-auto pt-2">
                      <div className="flex items-center justify-between">
                        <p className="font-bold text-sm text-amber-700">{product.price}</p>
                        <div className="flex items-center bg-amber-50 rounded-full px-2 py-0.5">
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star 
                                key={i} 
                                className={`h-3 w-3 ${i < Math.floor(product.rating) 
                                  ? "text-yellow-400 fill-yellow-400" 
                                  : "text-gray-200 fill-gray-200"}`} 
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                        </div>
                      </div>
                      <div className="mt-2 flex items-center gap-1">
                        <Button 
                          size="sm" 
                          variant="default"
                          className="bg-amber-600 hover:bg-amber-700 text-white text-xs px-3 h-7 rounded-lg transition-colors flex-1"
                        >
                          <ShoppingCart className="h-3 w-3 mr-1" /> Add to Cart
                        </Button>
                        
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="h-8 w-10 flex items-center justify-center text-amber-700 border-amber-200 hover:bg-amber-50 hover:text-amber-800 rounded-lg transition-colors"
                            >
                              <Info className="h-4 w-4" />
                            </Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle className="text-amber-700 flex items-center gap-1.5">
                                <PawPrint className="h-5 w-5" />
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
                              
                              <h4 className="font-medium text-amber-700 mb-2 flex items-center">
                                <Sparkles className="h-4 w-4 mr-1.5" /> Key Benefits
                              </h4>
                              
                              <div className="bg-amber-50 rounded-lg p-4 mb-4">
                                <ul className="space-y-3">
                                  {product.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <div className="bg-white rounded-full p-1 mt-0.5">
                                        <Check className="h-3.5 w-3.5 text-amber-600" />
                                      </div>
                                      <div>
                                        <p className="text-sm font-medium text-gray-800">{benefit}</p>
                                        <p className="text-xs text-gray-600">
                                          Helps your pet with {benefit.toLowerCase()} for enhanced comfort and wellbeing.
                                        </p>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              
                              <h4 className="font-medium text-amber-700 mb-2 flex items-center">
                                <Shield className="h-4 w-4 mr-1.5" /> Safety First
                              </h4>
                              <p className="text-sm text-gray-700 mb-4">
                                This premium pet CBD product is specially formulated for animal consumption with pet-safe ingredients. Always start with the recommended dosage based on your pet's weight.
                              </p>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Testimonials Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="text-center mb-6">
            <Badge className="bg-amber-600 text-white hover:bg-amber-700 px-3 py-0.5 rounded-full text-xs mb-3">
              Pet Owner Experiences
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Happy Pets, Happy Owners</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Hear from pet owners who have seen the difference our CBD products make in their pets' lives
            </p>
          </div>
          
          <div className="relative">
            <InfiniteSlider speed={35} className="-mx-4 md:mx-0">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-3 min-w-[280px] max-w-[350px]">
                  <Card className="bg-white shadow-sm border border-amber-100 h-full">
                    <CardContent className="p-5">
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                            className={`h-4 w-4 ${
                              i < testimonial.rating ? "text-yellow-400" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-gray-700 italic mb-4">"{testimonial.quote}"</p>
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-100 mr-3 flex items-center justify-center">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-gray-900">{testimonial.author}</p>
                          <p className="text-xs text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </InfiniteSlider>
          </div>
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-amber-600 to-amber-700 rounded-xl p-6 md:p-8 text-white"
        >
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-2/3">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <PawPrint className="h-5 w-5" />
                Ask Our Veterinary Experts
              </h3>
              <p className="text-amber-100 text-sm mb-4">
                Not sure which CBD product is right for your pet? Our experts can help you choose the perfect solution based on your pet's species, age, size, and specific needs.
              </p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white text-amber-700 hover:bg-amber-100">
                    <Bot className="mr-2 h-4 w-4" />
                    Get Personalized Recommendations
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Bot className="h-5 w-5 text-amber-600" />
                      <span>Pet CBD Recommendation Tool</span>
                    </DialogTitle>
                  </DialogHeader>
                  <div className="py-4">
                    <p className="text-sm text-gray-700 mb-4">
                      Tell us about your pet to get personalized CBD product recommendations:
                    </p>
                    <div className="space-y-3">
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Pet Type</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                          <option>Dog</option>
                          <option>Cat</option>
                          <option>Small Animal</option>
                          <option>Horse</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Pet Size</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                          <option>Small (under 20 lbs)</option>
                          <option>Medium (20-50 lbs)</option>
                          <option>Large (50-100 lbs)</option>
                          <option>Extra Large (over 100 lbs)</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700 block mb-1">Primary Concern</label>
                        <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
                          <option>Anxiety/Stress</option>
                          <option>Joint/Mobility Issues</option>
                          <option>Aging Support</option>
                          <option>General Wellness</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700 text-white">
                      Get Recommendations
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative w-[150px] h-[150px] md:w-[180px] md:h-[180px]">
                <Image 
                  src="/images/tincture2.png" 
                  alt="Pet CBD Products" 
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 