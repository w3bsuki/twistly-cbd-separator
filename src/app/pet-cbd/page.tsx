'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Sparkles, Check, PawPrint, Award, Shield, Heart, Droplet, ShoppingCart, Info, Users, Beaker, CheckCircle, Bot } from "lucide-react"
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { InfiniteSlider } from '@/components/common/ui/infinite-slider'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'

// Import Pet section data directly to maintain consistency
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

// FAQ items
const faqItems = [
  {
    question: "Is CBD safe for pets?",
    answer: "Yes, CBD is generally considered safe for pets. Our pet CBD products are specifically formulated with appropriate dosages for animals. They contain no THC, which is toxic to pets. Always start with a low dose and monitor your pet's response."
  },
  {
    question: "How do I determine the right dosage for my pet?",
    answer: "The general guideline is 1-2mg of CBD per 10 pounds of body weight. Start with the lower end of the range and adjust based on your pet's response. Our product packaging includes specific dosing instructions based on weight ranges."
  },
  {
    question: "How long does it take to see results in pets?",
    answer: "For acute issues like anxiety, you may notice effects within 30-60 minutes. For chronic conditions like joint pain or inflammation, it may take 2-4 weeks of consistent use to see significant improvement. Every pet is different, so patience and consistency are key."
  },
  {
    question: "Can I give CBD to my pet along with other medications?",
    answer: "CBD may interact with certain medications by affecting liver enzymes that metabolize drugs. If your pet is on medication, particularly for seizures, blood thinning, or liver/kidney issues, consult with your veterinarian before adding CBD to their regimen."
  }
];

// Research and studies
const researchStudies = [
  {
    title: "CBD for Canine Osteoarthritis",
    description: "A 2018 study from Cornell University showed that 2mg/kg of CBD oil twice daily helped increase comfort and activity in dogs with osteoarthritis.",
    source: "Journal of the American Veterinary Medical Association, 2018",
    link: "#"
  },
  {
    title: "CBD for Canine Epilepsy",
    description: "Research from Colorado State University found that 89% of dogs with epilepsy had reduced seizure frequency when treated with CBD.",
    source: "Journal of the American Veterinary Medical Association, 2019",
    link: "#"
  },
  {
    title: "Safety Profile of CBD in Dogs",
    description: "A pharmacokinetic study demonstrated that CBD was well-tolerated in dogs with minimal side effects even at higher dosages.",
    source: "Frontiers in Veterinary Science, 2020",
    link: "#"
  },
  {
    title: "CBD for Anxiety in Shelter Dogs",
    description: "A preliminary study showed reduced cortisol levels and observable decreases in stress behaviors in shelter dogs treated with CBD.",
    source: "Applied Animal Behaviour Science, 2021",
    link: "#"
  }
];

export default function PetCBDPage() {
  // State for toggling FAQ items
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Function to toggle FAQ items
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  
  // Doctor chatbot state and handler
  const [doctorQuestion, setDoctorQuestion] = useState('');
  const [doctorResponse, setDoctorResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAskDoctor = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setDoctorResponse('');
    
    // Simulate API response
    setTimeout(() => {
      const response = "Based on my knowledge of CBD for pets, I recommend starting with a low dose and gradually increasing as needed. For your pet's specific condition, our Calming CBD Oil for Dogs would be a good option to try. Start with half the recommended dose for the first week to see how your pet responds. Remember that consistency is key for best results.";
      
      // Simulate typing effect
      let i = 0;
      setIsLoading(false);
      
      const typeWriter = (text: string, i: number = 0) => {
        if (i < text.length) {
          setDoctorResponse(text.substring(0, i + 1));
          setTimeout(() => {
            typeWriter(text, i + 1);
          }, 10);
        }
      };
      
      typeWriter(response);
    }, 1500);
  };
  
  return (
    <section className="py-10 md:py-14 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto max-w-6xl px-4">
        {/* Hero Section */}
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

        {/* Pet Benefits Section */}
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

        {/* Featured Products */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-amber-800">Pet CBD Products</h3>
            <p className="text-amber-600 mt-1">Specially formulated CBD for your pets' health and happiness</p>
          </motion.div>
          
          {/* Product Slider */}
          <div className="mb-8">
            <InfiniteSlider speed={35} className="w-full py-4">
              {petProducts.map((product, index) => (
                <motion.div 
                  key={`slider-${index}`} 
                  className="relative group w-[180px]"
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <AspectRatio ratio={1} className="bg-white rounded-xl border border-amber-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-4 scale-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-amber-800/20 to-transparent rounded-xl opacity-80 transition-opacity duration-300" />
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {petProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full border hover:shadow-lg transition-all">
                  <div className="relative">
                    <AspectRatio ratio={1/1} className="bg-amber-50">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge className={cn(product.badgeColor, "text-white")}>{product.strength}</Badge>
                      </div>
                    </AspectRatio>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                      <div className="flex items-center mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={cn(
                              "w-3 h-3", 
                              i < Math.floor(product.rating) 
                                ? "text-amber-500 fill-amber-500" 
                                : "text-gray-300"
                            )} 
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-600">({product.reviews})</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-xs text-gray-600">
                          <Check className="w-3 h-3 mr-1 text-amber-600" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-amber-700">{product.price}</span>
                      <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white">
                        <ShoppingCart className="h-4 w-4 mr-1" /> Add to Cart
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16 bg-amber-50 p-8 rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-amber-800">Pet Owner Success Stories</h3>
            <p className="text-amber-600 mt-1">See how our CBD products have helped pets live healthier, happier lives</p>
          </motion.div>
          
          <InfiniteSlider speed={35} pauseOnHover={true} className="py-4">
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
        
        {/* Research & Studies */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-amber-800">Research & Studies</h3>
            <p className="text-amber-600 mt-1">Scientific evidence supporting CBD benefits for pets</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="h-full border hover:border-amber-200 transition-all">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-amber-800 mb-2">{study.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{study.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">{study.source}</span>
                      <Button variant="link" size="sm" className="text-amber-700 p-0">
                        View Study <ArrowRight className="h-3 w-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-amber-800">Frequently Asked Questions</h3>
            <p className="text-amber-600 mt-1">Common questions about CBD for pets</p>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-gray-900 hover:text-amber-800">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
        
        {/* Ask the CBD Doctor */}
        <div className="mb-16 bg-gradient-to-r from-amber-50 to-amber-100/50 p-8 rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-amber-600 text-white hover:bg-amber-700 px-4 py-1 rounded-full text-sm mb-3">
              Expert Advice
            </Badge>
            <h3 className="text-2xl md:text-3xl font-bold text-amber-800">Ask Our Pet CBD Expert</h3>
            <p className="text-amber-600 mt-1">Get personalized recommendations for your pet's specific needs</p>
          </motion.div>
          
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-1/3">
              <Image 
                src="/images/tincture2.png"
                alt="CBD Doctor"
                width={300}
                height={300}
                className="rounded-lg mx-auto"
              />
            </div>
            <div className="w-full md:w-2/3">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    <Bot className="h-4 w-4 mr-2" /> Ask About Pet CBD
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Ask Our Pet CBD Expert</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleAskDoctor}>
                    <div className="grid gap-4 py-4">
                      <div className="grid gap-2">
                        <label htmlFor="question" className="text-sm font-medium">
                          What would you like to know about CBD for your pet?
                        </label>
                        <textarea
                          id="question"
                          className="min-h-20 p-2 border rounded-md"
                          placeholder="e.g., What CBD product would be best for my elderly dog with arthritis?"
                          value={doctorQuestion}
                          onChange={(e) => setDoctorQuestion(e.target.value)}
                          required
                        />
                      </div>
                      <div className="bg-gray-50 p-4 rounded-md min-h-24">
                        {isLoading ? (
                          <div className="flex items-center justify-center h-full">
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-amber-700"></div>
                          </div>
                        ) : doctorResponse ? (
                          <p className="text-gray-800">{doctorResponse}</p>
                        ) : (
                          <p className="text-gray-400 text-center">Your answer will appear here</p>
                        )}
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-amber-600 hover:bg-amber-700">
                        {isLoading ? (
                          <>
                            <span className="animate-pulse">Thinking</span>
                            <span className="animate-pulse delay-300">.</span>
                            <span className="animate-pulse delay-600">.</span>
                            <span className="animate-pulse delay-900">.</span>
                          </>
                        ) : (
                          "Get Answer"
                        )}
                      </Button>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
              
              <div className="mt-4 flex flex-col gap-3">
                <div className="flex items-start">
                  <PawPrint className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Dosage Guidance:</span> Get advice on the right amount of CBD for your pet's size and condition.
                  </p>
                </div>
                <div className="flex items-start">
                  <Shield className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Product Recommendations:</span> Find the perfect CBD product for your pet's specific needs.
                  </p>
                </div>
                <div className="flex items-start">
                  <Bot className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">Personalized Advice:</span> Our CBD expert can address your pet's unique health challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-amber-800 mb-4">Ready to Support Your Pet's Wellness?</h3>
          <p className="text-amber-700 max-w-2xl mx-auto mb-6">
            Discover the natural benefits of CBD for your furry family members. Our pet-safe formulations are designed with their unique needs in mind.
          </p>
          <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
            Shop Pet CBD Products <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 