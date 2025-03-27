'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Activity, Timer, Clock, Zap, Star, RotateCcw, Flame, Bot, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { InfiniteSlider } from '@/components/common/ui/infinite-slider'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog'

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

// FAQ items
const faqItems = [
  {
    question: "Is CBD legal for athletes?",
    answer: "Yes, in 2018 the World Anti-Doping Agency (WADA) removed CBD from its list of prohibited substances. However, other cannabinoids like THC remain prohibited. Our sport-specific products are formulated with pure CBD isolate or broad-spectrum CBD that contains no detectable THC."
  },
  {
    question: "How can CBD help with exercise recovery?",
    answer: "CBD may help reduce exercise-induced inflammation and oxidative stress, which can speed up recovery between training sessions. Many athletes report that CBD helps manage soreness and improves sleep quality, both crucial factors in the recovery process."
  },
  {
    question: "When should I use CBD for training?",
    answer: "For general recovery, many athletes take CBD oil daily. For acute muscle soreness, topical CBD products like our Recovery Balm or Muscle Gel work best when applied directly after training. Pre-workout CBD may help reduce exercise anxiety without affecting performance."
  },
  {
    question: "Will CBD affect my athletic performance?",
    answer: "CBD doesn't appear to negatively impact performance metrics. Unlike THC, CBD doesn't cause intoxication or impairment. Some athletes report that CBD helps them maintain focus and manage pre-competition anxiety, potentially improving performance."
  }
];

export default function SportAndRecoveryPage() {
  const [expandedFaqs, setExpandedFaqs] = React.useState<number[]>([]);
  const [aiResponse, setAiResponse] = React.useState<string>("");
  const [userQuestion, setUserQuestion] = React.useState<string>("");
  const [isAiTyping, setIsAiTyping] = React.useState<boolean>(false);
  
  const toggleFaq = (index: number) => {
    setExpandedFaqs(prevExpanded => 
      prevExpanded.includes(index)
        ? prevExpanded.filter(i => i !== index)
        : [...prevExpanded, index]
    );
  };

  const handleAskDoctor = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userQuestion.trim()) return;
    
    setIsAiTyping(true);
    setAiResponse("");
    
    // Simulate AI typing response
    const demoResponses = [
      "For post-workout recovery, our Recovery CBD Balm would be ideal. It contains 1000mg of CBD along with cooling menthol to provide targeted relief to sore muscles.",
      "Based on your training regimen, I would recommend our Sport CBD Oil. It's formulated with higher CBD concentration to support recovery between intense workout sessions.",
      "For pre-competition support, our CBD Sport Capsules would be perfect. They provide precise dosing and can help manage pre-event jitters without affecting performance.",
      "If you're looking for localized relief, our CBD Muscle Gel provides immediate cooling sensation with fast-absorbing CBD to target specific areas of discomfort."
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
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-0.5 rounded-full text-xs mb-3">
                Sport & Recovery
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-800 via-blue-600 to-blue-700 mb-4">
                Elevate Your Performance & Recovery
              </h1>
              <p className="text-blue-700 text-sm md:text-base mb-6 max-w-xl mx-auto lg:mx-0">
                Our sport-focused CBD products are formulated to help athletes and active individuals train harder, recover faster, and perform better.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white text-sm">
                  Shop Sport Products
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
                <Button variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50 text-sm">
                  Learn About CBD for Athletes
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[300px] lg:h-[400px] flex justify-center"
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
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-0.5 rounded-full text-xs mb-3">
              Benefits for Athletes
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Why Athletes Choose CBD</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              CBD offers natural support for athletic performance and recovery without the side effects of traditional methods
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {sportBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`border h-full shadow-sm transition-all hover:shadow hover:border-blue-200 ${benefit.color}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="rounded-full w-10 h-10 flex-shrink-0 flex items-center justify-center bg-white border border-gray-100 shadow-sm">
                        {benefit.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-sm text-gray-600 line-clamp-3">{benefit.description}</p>
                      </div>
                    </div>
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
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Our sport collection features CBD formulations designed specifically for athletes and active individuals.
            </p>
          </motion.div>
          
          {/* Compact Product Slider */}
          <div className="mb-8">
            <InfiniteSlider gap={12} className="w-full py-4">
              {sportProducts.map((product, index) => (
                <motion.div 
                  key={`slider-${index}`} 
                  className="relative group w-[180px]"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <AspectRatio ratio={1} className="bg-white rounded-xl border border-blue-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 scale-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-800/20 to-transparent rounded-xl opacity-80 transition-opacity duration-300" />
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
          </div>
          
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
                  <div className="relative">
                    <AspectRatio ratio={1/1} className="bg-gradient-to-b from-blue-50 to-white">
                      <div className="relative h-full w-full p-2">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-contain p-3 scale-75 group-hover:scale-85 transition-transform duration-500"
                        />
                      </div>
                      <div className="absolute top-2 right-2 z-10">
                        <Badge className={`text-white ${product.badgeColor} text-[10px] px-1.5 py-0.5`}>
                          {product.strength}
                        </Badge>
                      </div>
                    </AspectRatio>
                  </div>
                  <CardContent className="p-3">
                    <h3 className="font-semibold text-base text-gray-900 group-hover:text-blue-700 transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                    
                    {/* Benefits */}
                    <div className="mt-2 space-y-1">
                      {product.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <Check className="h-3.5 w-3.5 text-blue-500" />
                          <span className="text-xs text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <p className="font-bold text-base text-blue-700">{product.price}</p>
                      <div className="flex items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3.5 w-3.5 ${i < Math.floor(product.rating) 
                                ? "text-yellow-400 fill-yellow-400" 
                                : "text-gray-200 fill-gray-200"}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs h-8 w-full">
                        <ArrowRight className="h-3.5 w-3.5 mr-1" />
                        Add to Cart
                      </Button>
                      <Button size="sm" variant="outline" className="border-blue-600 text-blue-700 hover:bg-blue-50 text-xs h-8 w-full">
                        Read More
                      </Button>
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
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-0.5 rounded-full text-xs mb-3">
              Research
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Sports Science & CBD</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Our products are developed based on the latest scientific research on CBD for athletes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {researchStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="border border-blue-100 hover:border-blue-200 transition-all hover:shadow-md h-full">
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{study.description}</p>
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
        </div>
      </section>

      {/* Testimonials */}
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
              Athlete Stories
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Athlete Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Hear from athletes who have incorporated our CBD products into their training
            </p>
          </motion.div>

          <InfiniteSlider
            direction="right"
            speed="slow"
            pauseOnHover={true}
            className="py-3"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3 min-w-[280px] max-w-[350px]">
                <Card className="bg-white shadow-sm border border-blue-100 h-full">
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
      </section>

      {/* Quality Banner Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-green-50 to-white rounded-xl p-6 border border-green-100 shadow-sm"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold mb-2 flex items-center gap-2 text-green-800">
                  <Sparkles className="h-5 w-5 text-green-600" />
                  Performance-Grade Quality
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  Our sport CBD formulations are designed specifically for athletes and active individuals. Each batch is tested for banned substances and verified by third-party labs.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-white border-green-200 text-green-700 text-xs">Athlete-Approved</Badge>
                  <Badge variant="outline" className="bg-white border-green-200 text-green-700 text-xs">Lab Tested</Badge>
                  <Badge variant="outline" className="bg-white border-green-200 text-green-700 text-xs">No Banned Substances</Badge>
                  <Badge variant="outline" className="bg-white border-green-200 text-green-700 text-xs">Fast-Acting</Badge>
                </div>
              </div>
              <Button asChild size="sm" className="bg-green-600 text-white hover:bg-green-700 px-4 py-2">
                <Link href="/lab-results">
                  View Lab Tests <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-gradient-to-r from-green-50 to-white rounded-lg p-6 md:p-10 shadow-sm border border-green-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4">Level Up Your Training Today</h2>
                <p className="text-gray-600 text-base mb-6">
                  Enhance your performance and recovery with our premium CBD products designed specifically for athletes.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button className="bg-green-600 hover:bg-green-700 text-white text-base py-2 px-6">
                    Shop Sport Collection
                  </Button>
                  <Button variant="outline" className="border-green-200 text-green-700 hover:bg-green-50 text-base">
                    Ask AI
                    <Bot className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[180px] w-[180px]">
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

      {/* FAQ Section - Updated with improved design */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-blue-600 text-white hover:bg-blue-700 px-3 py-0.5 rounded-full text-xs mb-3">
              FAQ
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Common questions about CBD for athletes and active individuals
            </p>
          </motion.div>
          
          <div className="rounded-lg border border-blue-100 shadow-sm overflow-hidden mb-8">
            <Accordion type="multiple" value={expandedFaqs.map(i => i.toString())}>
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={index.toString()}
                  className="border-b border-blue-100 last:border-0"
                >
                  <AccordionTrigger 
                    onClick={() => toggleFaq(index)}
                    className={cn(
                      "hover:bg-blue-50/50 px-4 py-3 text-left font-medium text-gray-900",
                      expandedFaqs.includes(index) ? "bg-blue-50/60" : ""
                    )}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-sm text-gray-700 bg-blue-50/30">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Still Have Questions?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our sports recovery experts are ready to help you find the perfect product for your athletic needs.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Ask Our Sport Experts
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Bot className="h-5 w-5 text-blue-600" />
                        <span>Ask Our Sports Performance Experts</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="bg-gray-50 p-4 rounded-md mb-4 max-h-[300px] overflow-y-auto">
                      {aiResponse ? (
                        <div className="text-gray-800">
                          {aiResponse}
                          {isAiTyping && <span className="inline-block w-1.5 h-4 ml-1 bg-blue-600 animate-pulse" />}
                        </div>
                      ) : (
                        <div className="text-gray-500 italic">
                          Ask us about which CBD sport product might be right for your training needs...
                        </div>
                      )}
                    </div>
                    <form onSubmit={handleAskDoctor} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={userQuestion}
                        onChange={(e) => setUserQuestion(e.target.value)}
                        placeholder="Type your question here..."
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600/30"
                      />
                      <Button 
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={isAiTyping}
                      >
                        {isAiTyping ? "Thinking..." : "Ask"}
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 