'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight, BadgeCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

const testimonials = [
  {
    id: 1,
    name: "Sarah T.",
    location: "Colorado",
    avatar: "/images/1.png",
    rating: 5,
    text: "I've struggled with anxiety for years. The CBD oil from Twistly has been a game-changer for me. I feel calmer and more focused throughout the day.",
    product: "Premium CBD Oil",
    verified: true,
    date: "March 15, 2024"
  },
  {
    id: 2,
    name: "Michael R.",
    location: "Oregon",
    avatar: "/images/2.png",
    rating: 5,
    text: "As an athlete, recovery is everything. The Sport Recovery balm has significantly reduced my muscle soreness after intense workouts. Highly recommend!",
    product: "Sport Recovery Balm",
    verified: true,
    date: "February 28, 2024"
  },
  {
    id: 3,
    name: "Jennifer L.",
    location: "California",
    avatar: "/images/3.png",
    rating: 4,
    text: "I've tried many CBD face serums, but this one truly stands out. My skin looks more radiant, and fine lines have visibly diminished after just a few weeks.",
    product: "CBD Face Serum",
    verified: true,
    date: "March 5, 2024"
  },
  {
    id: 4,
    name: "David W.",
    location: "Illinois",
    avatar: "/images/4.png",
    rating: 5,
    text: "My dog used to get really anxious during thunderstorms. The pet CBD oil has made a remarkable difference in his behavior. He's so much calmer now.",
    product: "Pet Calm CBD Oil",
    verified: true,
    date: "January 20, 2024"
  },
  {
    id: 5,
    name: "Emma S.",
    location: "New York",
    avatar: "/images/5.png",
    rating: 4,
    text: "The Cognitive Support capsules have improved my focus and mental clarity at work. I feel more productive and less mentally fatigued by the end of the day.",
    product: "Cognitive Support Capsules",
    verified: true,
    date: "March 12, 2024"
  },
  {
    id: 6,
    name: "Thomas K.",
    location: "Texas",
    avatar: "/images/2.png",
    rating: 5,
    text: "After struggling with sleep issues, I decided to try Twistly's CBD gummies. I'm now getting consistent, restful sleep for the first time in years.",
    product: "Sleep CBD Gummies",
    verified: true,
    date: "February 8, 2024"
  }
]

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  
  // Get indices for displayed testimonials
  const displayIndices = [];
  for (let i = 0; i < 3; i++) {
    displayIndices.push((activeIndex + i) % testimonials.length);
  }
  
  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };
  
  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px] opacity-5 pointer-events-none" />
      
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Badge className="px-3 py-1 rounded-full text-sm bg-gradient-to-r from-amber-500 to-amber-600 text-white flex items-center gap-1.5 mx-auto w-fit shadow-sm">
            <Star className="w-3 h-3 fill-white" />
            Customer Love
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-800 via-amber-700 to-amber-800">
            What Our Customers Say
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            Don't just take our word for it. Hear from real customers who have experienced the benefits of our premium CBD products.
          </p>
        </motion.div>
        
        {/* Featured testimonials carousel */}
        <div className="relative mb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayIndices.map((index, i) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <TestimonialCard testimonial={testimonials[index]} featured={i === 0} />
              </motion.div>
            ))}
          </div>
          
          {/* Navigation controls */}
          <div className="flex items-center justify-center mt-8 gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 border-amber-200 text-amber-700 hover:bg-amber-50"
              onClick={goToPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="flex gap-1.5">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2.5 h-2.5 rounded-full transition-all duration-300",
                    displayIndices.includes(index) 
                      ? "bg-amber-500" 
                      : "bg-amber-200"
                  )}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full h-10 w-10 border-amber-200 text-amber-700 hover:bg-amber-50"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </Container>
      
      {/* Marquee testimonials - automatically scrolling */}
      <div className="relative overflow-hidden py-6 bg-gradient-to-r from-amber-50 to-amber-100/30 border-y border-amber-100">
        <div className="marquee-container">
          <div className="marquee-content flex gap-4 animate-marquee">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card 
                key={`${testimonial.id}-${index}`} 
                className="min-w-[280px] border-amber-200 shadow-sm bg-white"
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                    <span className="text-sm font-medium text-amber-700">{testimonial.product}</span>
                  </div>
                  <p className="text-xs text-gray-600 line-clamp-2 italic">"{testimonial.text}"</p>
                  <div className="flex items-center mt-2 justify-between">
                    <span className="text-xs text-gray-500">{testimonial.name}</span>
                    {testimonial.verified && (
                      <Badge variant="outline" className="h-4 px-1 text-[10px] bg-amber-50 border-amber-200 text-amber-700 flex items-center">
                        <BadgeCheck className="h-2.5 w-2.5 mr-0.5" />
                        Verified
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial, featured = false }: { testimonial: typeof testimonials[0], featured?: boolean }) {
  return (
    <Card className={cn(
      "border-amber-200 shadow-sm hover:shadow-md transition-shadow bg-white h-full",
      featured && "border-amber-300 shadow-md"
    )}>
      <CardContent className={cn("p-5", featured && "p-6")}>
        {/* Header with avatar and user info */}
        <div className="flex items-center gap-3 mb-3">
          <Avatar className={cn(
            "border border-amber-100",
            featured ? "h-12 w-12" : "h-10 w-10"
          )}>
            <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
            <AvatarFallback className="bg-amber-100 text-amber-800">
              {testimonial.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          
          <div>
            <div className="flex items-center gap-2">
              <h4 className={cn(
                "font-medium text-gray-900",
                featured && "font-semibold"
              )}>
                {testimonial.name}
              </h4>
              {testimonial.verified && (
                <Badge variant="outline" className="h-5 px-1 text-[10px] bg-amber-50 border-amber-200 text-amber-700 flex items-center gap-0.5">
                  <BadgeCheck className="h-3 w-3" />
                  Verified
                </Badge>
              )}
            </div>
            <div className="flex items-center text-xs text-gray-500 gap-2">
              <span>{testimonial.location}</span>
              <span className="text-gray-300">•</span>
              <span>{testimonial.date}</span>
            </div>
          </div>
        </div>
        
        {/* Star rating */}
        <div className="flex mb-3">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i}
              className={cn(
                featured ? "h-5 w-5" : "h-4 w-4", 
                i < testimonial.rating 
                  ? "fill-amber-400 text-amber-400" 
                  : "fill-gray-200 text-gray-200"
              )}
            />
          ))}
        </div>
        
        {/* Review text */}
        <div className="relative mb-3">
          <Quote className={cn(
            "absolute top-0 left-0 text-amber-200 -translate-x-2 -translate-y-1 opacity-50",
            featured ? "h-6 w-6" : "h-5 w-5"
          )} />
          <p className={cn(
            "text-gray-600 pl-3 leading-relaxed",
            featured ? "text-base" : "text-sm"
          )}>
            {testimonial.text}
          </p>
        </div>
        
        {/* Product */}
        <div className={cn(
          "font-medium mt-3 flex items-center",
          featured ? "text-sm text-amber-800" : "text-xs text-amber-700"
        )}>
          <span className="bg-amber-50 px-2 py-1 rounded">{testimonial.product}</span>
        </div>
      </CardContent>
    </Card>
  )
}

// Add this to your global.css file if not already present
/*
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}

@media (hover: hover) {
  .hover\:pause-animation:hover .animate-marquee {
    animation-play-state: paused;
  }
}
*/ 