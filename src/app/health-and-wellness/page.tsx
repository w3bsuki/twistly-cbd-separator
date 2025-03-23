'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Heart, Droplet, Brain, Moon, Star, Shield, Leaf } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { InfiniteSlider } from '@/components/common/ui/infinite-slider'

// Health products
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
    description: "CBD interacts with your body's endocannabinoid system to help regulate stress responses and promote a sense of calm without feeling intoxicated.",
    icon: <Heart className="h-6 w-6 text-green-500" />,
    color: "bg-green-50 border-green-100"
  },
  {
    title: "Better Sleep",
    description: "Research suggests CBD may help improve sleep quality by addressing root causes like anxiety and pain that often interfere with restful sleep.",
    icon: <Moon className="h-6 w-6 text-green-500" />,
    color: "bg-green-50 border-green-100"
  },
  {
    title: "Mental Clarity",
    description: "CBD has been shown to support healthy brain function and may help improve focus, mental clarity, and cognitive performance.",
    icon: <Brain className="h-6 w-6 text-green-500" />,
    color: "bg-green-50 border-green-100"
  },
  {
    title: "Better Absorption",
    description: "Our water-soluble formulas provide up to 5x better absorption than standard CBD oils, meaning you get more benefits from every dose.",
    icon: <Droplet className="h-6 w-6 text-green-500" />,
    color: "bg-green-50 border-green-100"
  },
  {
    title: "Natural Support",
    description: "CBD offers a natural alternative to traditional wellness products, working with your body's own systems to promote balance.",
    icon: <Leaf className="h-6 w-6 text-green-500" />,
    color: "bg-green-50 border-green-100"
  },
  {
    title: "Immune Support",
    description: "Emerging research suggests CBD may have immunomodulatory properties that could help support a healthy immune system.",
    icon: <Shield className="h-6 w-6 text-green-500" />,
    color: "bg-green-50 border-green-100"
  }
]

// Research and studies
const researchStudies = [
  {
    title: "CBD for Anxiety and Stress",
    description: "A 2019 study published in The Permanente Journal found that CBD could help reduce anxiety in 79.2% of patients and improve sleep in 66.7% of patients.",
    source: "The Permanente Journal, 2019",
    link: "#"
  },
  {
    title: "CBD and Sleep Quality",
    description: "Research published in the Journal of Clinical Pharmacology demonstrated that CBD may increase total sleep time and reduce insomnia symptoms.",
    source: "Journal of Clinical Pharmacology, 2021",
    link: "#"
  },
  {
    title: "Neurological Benefits of CBD",
    description: "A comprehensive review in Neurotherapeutics found evidence that CBD may help manage neurological conditions through its anti-inflammatory and neuroprotective properties.",
    source: "Neurotherapeutics, 2020",
    link: "#"
  },
  {
    title: "CBD for Pain Management",
    description: "Studies published in the European Journal of Pain show that CBD applied topically could help lower pain and inflammation due to arthritis.",
    source: "European Journal of Pain, 2018",
    link: "#"
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

export default function HealthAndWellnessPage() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-green-600 text-white hover:bg-green-700 px-4 py-1 rounded-full text-sm mb-6">
                Health & Wellness
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-600 to-green-700 mb-6">
                Natural Support for Your Wellness Journey
              </h1>
              <p className="text-green-700 text-lg mb-8 max-w-xl">
                Discover our premium CBD products specifically formulated to support your health and wellness goals, from stress relief to better sleep and mental clarity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                  Shop Health Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                  Learn About CBD Benefits
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
                alt="CBD Health and Wellness Products"
                fill
                className="object-contain"
              />
              <div className="absolute -bottom-6 left-0 right-0 mx-auto w-[90%] h-20 bg-gradient-to-r from-green-100 to-green-50 blur-3xl rounded-full opacity-80"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CBD Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="bg-green-600 text-white hover:bg-green-700 px-4 py-1 rounded-full text-sm mb-4">
              Benefits
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How CBD Supports Your Health</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              CBD interacts with your body's endocannabinoid system, which plays a crucial role in regulating many physiological processes. Here's how CBD can benefit your wellness routine:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cbdBenefits.map((benefit, index) => (
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
      <section className="py-12 bg-green-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-green-600 text-white hover:bg-green-700 px-3 py-0.5 rounded-full text-xs mb-3">
              Products
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Wellness-Focused CBD Products</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm">
              Our health and wellness collection features premium CBD formulations designed to address specific wellness needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {healthProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <CardContent className="p-0">
                    <div className="relative">
                      <AspectRatio ratio={16/10} className="bg-gradient-to-b from-green-50 to-white">
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
                      <h3 className="font-semibold text-sm text-gray-900 group-hover:text-green-700 transition-colors">{product.name}</h3>
                      <p className="text-xs text-gray-600 mt-1 line-clamp-1">{product.description}</p>
                      
                      {/* Benefits */}
                      <div className="mt-1.5 space-y-0.5">
                        {product.benefits.slice(0, 2).map((benefit, i) => (
                          <div key={i} className="flex items-center gap-1">
                            <Check className="h-2.5 w-2.5 text-green-500" />
                            <span className="text-[10px] text-gray-600">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <p className="font-bold text-sm text-green-700">{product.price}</p>
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
            <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-sm">
              View All Health Products
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
            <Badge className="bg-green-600 text-white hover:bg-green-700 px-4 py-1 rounded-full text-sm mb-4">
              Research
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Backed by Science</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our products are developed based on the latest scientific research on CBD and its potential benefits for wellness.
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
                    <Card className="border border-green-100 hover:border-green-200 transition-all hover:shadow-md">
                      <CardContent className="pt-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500">{study.source}</span>
                          <Link href={study.link} className="text-green-600 text-sm font-medium hover:text-green-700">
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
                <Card className="border border-green-100 hover:border-green-200 transition-all hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How does CBD work for wellness?</h3>
                    <p className="text-gray-600">CBD interacts with your body's endocannabinoid system (ECS), which is responsible for maintaining homeostasis or balance. The ECS regulates functions like sleep, mood, pain perception, immune response, and more. By supporting this system, CBD may help promote overall wellness and balance.</p>
                  </CardContent>
                </Card>
                <Card className="border border-green-100 hover:border-green-200 transition-all hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Will CBD make me feel high?</h3>
                    <p className="text-gray-600">No, CBD does not produce the intoxicating effects associated with THC. Our wellness products are focused on providing therapeutic benefits without any psychoactive effects, making them suitable for daily use.</p>
                  </CardContent>
                </Card>
                <Card className="border border-green-100 hover:border-green-200 transition-all hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I choose the right CBD product for my needs?</h3>
                    <p className="text-gray-600">If you're looking for overall wellness support, our standard CBD oils are a great starting point. For sleep issues, our Sleep Formula with melatonin may be more helpful. Everyone's body responds differently to CBD, so you might need to try different products to find what works best for you.</p>
                  </CardContent>
                </Card>
                <Card className="border border-green-100 hover:border-green-200 transition-all hover:shadow-md">
                  <CardContent className="pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">How long does it take to feel the effects?</h3>
                    <p className="text-gray-600">The timing varies based on the consumption method and individual factors. Sublingual CBD oils typically take 15-30 minutes to feel effects, while edibles may take 1-2 hours. For some wellness benefits like stress relief, consistent daily use for 2-4 weeks may be needed to experience the full effects.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <Badge className="bg-green-600 text-white hover:bg-green-700 px-4 py-1 rounded-full text-sm mb-4">
              Success Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Customer Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Hear from our customers who have experienced the benefits of our CBD health and wellness products.
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
                <Card className="bg-white shadow-sm border border-green-100 h-full">
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
      <section className="py-16 md:py-20 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 md:p-12 shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Wellness Journey Today</h2>
                <p className="text-green-100 mb-6">
                  Experience the natural benefits of our premium CBD products for your health and wellness needs.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-white hover:bg-gray-100 text-green-700">
                    Shop Health Collection
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-green-600">
                    Contact Us
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[250px] w-[250px]">
                  <Image
                    src="/images/tincture2.png"
                    alt="CBD Wellness Products"
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