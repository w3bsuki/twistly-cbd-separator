'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Sparkles, Droplet, Leaf, Sun, Shield, Star, Bot } from 'lucide-react'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { InfiniteSlider } from '@/components/common/ui/infinite-slider'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog'

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

// Beauty FAQ items
const faqItems = [
  {
    question: "How does CBD benefit the skin?",
    answer: "CBD has multiple benefits for skin health. It contains powerful antioxidants that help neutralize free radicals which can cause premature aging. CBD also has anti-inflammatory properties that can reduce redness, irritation, and conditions like acne and eczema. Additionally, it helps regulate oil production, making it suitable for both dry and oily skin types. Studies suggest CBD may also help support skin's natural healing process."
  },
  {
    question: "Will CBD beauty products make me feel high?",
    answer: "No, CBD beauty products will not make you feel high. CBD (cannabidiol) is a non-psychoactive compound extracted from hemp plants. Unlike THC (tetrahydrocannabinol), CBD doesn't produce any intoxicating effects. Our beauty products contain either broad-spectrum CBD (0.0% THC) or CBD isolate, ensuring they're completely non-psychoactive and safe for daily use."
  },
  {
    question: "How do I incorporate CBD products into my skincare routine?",
    answer: "For optimal results, integrate CBD products into your existing routine based on product type. CBD cleansers should be used as your first step, followed by CBD toners. CBD serums work best after cleansing and before moisturizing, while CBD facial creams and moisturizers should be the final step in your routine. For targeted concerns, CBD spot treatments can be applied directly to affected areas. We recommend introducing one CBD product at a time to see how your skin responds."
  },
  {
    question: "Are CBD beauty products suitable for sensitive skin?",
    answer: "CBD beauty products are often well-suited for sensitive skin due to CBD's natural anti-inflammatory and soothing properties. Our formulations are designed to be gentle and contain clean, minimal ingredients without harsh chemicals, synthetic fragrances, or common irritants. CBD may actually help calm skin sensitivity and reactivity. However, as with any skincare product, we recommend patch testing first if you have particularly sensitive skin or allergies."
  }
];

export default function BeautyAndCosmeticsPage() {
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
      "For anti-aging concerns, I recommend our CBD Face Serum with hyaluronic acid. The combination of CBD's antioxidant properties with hydrating hyaluronic acid helps reduce fine lines and improve skin elasticity.",
      "If you're dealing with acne-prone skin, our CBD Facial Cream would be ideal. It helps regulate oil production while reducing inflammation associated with breakouts.",
      "For sensitive skin that's easily irritated, try our gentle CBD Body Lotion. It's formulated without harsh chemicals and contains soothing botanical extracts that complement CBD's calming effects.",
      "To enhance your bath routine, our CBD Bath Bombs provide a luxurious experience. They combine CBD with essential oils to promote relaxation while nourishing your skin."
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
    <div className="bg-gradient-to-b from-purple-50 to-white">
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
              <Badge className="bg-purple-600 text-white hover:bg-purple-700 px-3 py-0.5 rounded-full text-xs mb-3">
                Beauty & Cosmetics
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-800 via-purple-600 to-purple-700 mb-4">
                Radiant Skin With CBD Beauty
              </h1>
              <p className="text-purple-700 text-sm md:text-base mb-6 max-w-xl mx-auto lg:mx-0">
                Discover our premium CBD-infused beauty and skincare products designed to nourish, protect, and rejuvenate your skin naturally.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button className="bg-purple-600 hover:bg-purple-700 text-white text-sm">
                  Shop Beauty Products
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
                <Button variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50 text-sm">
                  Learn About CBD Skincare
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
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-purple-600 text-white hover:bg-purple-700 px-3 py-0.5 rounded-full text-xs mb-3">
              Skincare Benefits
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Why CBD for Your Skin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              CBD offers unique benefits for your skin that traditional skincare ingredients can't match
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {beautyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`border h-full shadow-sm transition-all hover:shadow hover:border-purple-200 ${benefit.color}`}>
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="relative">
                    <AspectRatio ratio={1/1} className="bg-gradient-to-b from-purple-50 to-white">
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
                    <h3 className="font-semibold text-base text-gray-900 group-hover:text-purple-700 transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                    
                    {/* Benefits */}
                    <div className="mt-2 space-y-1">
                      {product.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <Check className="h-3.5 w-3.5 text-purple-500" />
                          <span className="text-xs text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <p className="font-bold text-base text-purple-700">{product.price}</p>
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
                      <Button size="sm" className="bg-purple-600 hover:bg-purple-700 text-white text-xs h-8 w-full">
                        <ArrowRight className="h-3.5 w-3.5 mr-1" />
                        Add to Cart
                      </Button>
                      <Button size="sm" variant="outline" className="border-purple-600 text-purple-700 hover:bg-purple-50 text-xs h-8 w-full">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white text-base px-8 py-6 relative overflow-hidden group"
              >
                <motion.span 
                  className="absolute inset-0 w-0 bg-purple-800 transition-all duration-300 group-hover:w-full"
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10 flex items-center font-medium">
                  Explore Beauty Collection
                  <motion.div 
                    className="ml-2 inline-flex"
                    whileHover={{ x: 3 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </span>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beauty Routine Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-purple-600 text-white hover:bg-purple-700 px-3 py-0.5 rounded-full text-xs mb-3">
              Skincare Routine
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Integrate CBD Into Your Beauty Routine</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Learn how to incorporate our CBD beauty products into your daily skincare regimen
            </p>
          </motion.div>

          <Tabs defaultValue="morning" className="w-full">
            <TabsList className="grid w-full md:w-[400px] mx-auto grid-cols-2 mb-6 bg-purple-100">
              <TabsTrigger 
                value="morning" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-400 data-[state=active]:to-purple-400 data-[state=active]:text-white"
              >
                <Sun className="h-4 w-4 mr-2" />
                Morning Routine
              </TabsTrigger>
              <TabsTrigger 
                value="evening" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-indigo-600 data-[state=active]:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 mr-2"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                Evening Routine
              </TabsTrigger>
            </TabsList>
            <TabsContent value="morning">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border-0 shadow-sm hover:shadow-md transition-all h-full bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-5 relative">
                        <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center bg-pink-100 rounded-bl-lg">
                          <span className="text-pink-600 font-semibold text-lg">1</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 text-pink-700">Cleanse</h3>
                        <p className="text-sm text-gray-600">Start with a gentle cleanser to remove overnight impurities and prepare your skin to absorb CBD products.</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Card className="border-0 shadow-sm hover:shadow-md transition-all h-full bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-5 relative">
                        <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center bg-pink-100 rounded-bl-lg">
                          <span className="text-pink-600 font-semibold text-lg">2</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 text-pink-700">CBD Face Serum</h3>
                        <p className="text-sm text-gray-600">Apply our CBD Face Serum while skin is still slightly damp for maximum absorption. CBD will help protect against environmental stressors throughout the day.</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Card className="border-0 shadow-sm hover:shadow-md transition-all h-full bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-5 relative">
                        <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center bg-pink-100 rounded-bl-lg">
                          <span className="text-pink-600 font-semibold text-lg">3</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 text-pink-700">CBD Facial Cream + SPF</h3>
                        <p className="text-sm text-gray-600">Finish with our CBD Facial Cream to lock in moisture, followed by your favorite SPF for sun protection.</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="evening">
              <div className="bg-gradient-to-br from-purple-100 to-indigo-50 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="border-0 shadow-sm hover:shadow-md transition-all h-full bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-5 relative">
                        <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center bg-purple-200 rounded-bl-lg">
                          <span className="text-purple-700 font-semibold text-lg">1</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 text-purple-700">Double Cleanse</h3>
                        <p className="text-sm text-gray-600">Remove makeup and daily pollutants with a thorough double cleanse to prepare your skin for CBD treatments.</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <Card className="border-0 shadow-sm hover:shadow-md transition-all h-full bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-5 relative">
                        <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center bg-purple-200 rounded-bl-lg">
                          <span className="text-purple-700 font-semibold text-lg">2</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 text-purple-700">CBD Face Serum</h3>
                        <p className="text-sm text-gray-600">Apply a generous amount of our CBD Face Serum to help repair daily damage and boost overnight regeneration.</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <Card className="border-0 shadow-sm hover:shadow-md transition-all h-full bg-white/80 backdrop-blur-sm">
                      <CardContent className="p-5 relative">
                        <div className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center bg-purple-200 rounded-bl-lg">
                          <span className="text-purple-700 font-semibold text-lg">3</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 text-purple-700">CBD Facial Cream</h3>
                        <p className="text-sm text-gray-600">Seal in the serum with our rich CBD Facial Cream, which works overnight to deeply nourish and hydrate your skin while you sleep.</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
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
              Customer Stories
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Beauty Transformations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Real results from real people using our CBD beauty products
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
                <Card className="bg-white shadow-sm border border-purple-100 h-full">
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

      {/* Add the FAQ Section after the existing Beauty Routine section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-purple-600 text-white hover:bg-purple-700 px-3 py-0.5 rounded-full text-xs mb-3">
              FAQ
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Common questions about CBD beauty and skincare products
            </p>
          </motion.div>
          
          <div className="rounded-lg border border-purple-100 shadow-sm overflow-hidden mb-8">
            <Accordion type="multiple" value={expandedFaqs.map(i => i.toString())}>
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={index.toString()}
                  className="border-b border-purple-100 last:border-0"
                >
                  <AccordionTrigger 
                    onClick={() => toggleFaq(index)}
                    className={cn(
                      "hover:bg-purple-50/50 px-4 py-3 text-left font-medium text-gray-900",
                      expandedFaqs.includes(index) ? "bg-purple-50/60" : ""
                    )}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-sm text-gray-700 bg-purple-50/30">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-16 h-16 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Still Have Questions?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our beauty and skincare experts are ready to help you find the perfect products for your skin type and concerns.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                      Ask Our Beauty Experts
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Bot className="h-5 w-5 text-purple-600" />
                        <span>Ask Our CBD Beauty Experts</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="bg-gray-50 p-4 rounded-md mb-4 max-h-[300px] overflow-y-auto">
                      {aiResponse ? (
                        <div className="text-gray-800">
                          {aiResponse}
                          {isAiTyping && <span className="inline-block w-1.5 h-4 ml-1 bg-purple-600 animate-pulse" />}
                        </div>
                      ) : (
                        <div className="text-gray-500 italic">
                          Ask us about which CBD beauty product might be right for your skin type and concerns...
                        </div>
                      )}
                    </div>
                    <form onSubmit={handleAskDoctor} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={userQuestion}
                        onChange={(e) => setUserQuestion(e.target.value)}
                        placeholder="Type your question here..."
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600/30"
                      />
                      <Button 
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white"
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

      {/* CTA Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg p-6 md:p-10 shadow-lg">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">Ready to Transform Your Beauty Routine?</h2>
                  <p className="text-purple-100 text-base mb-6 max-w-xl">
                    Discover our premium collection of CBD-infused beauty products and elevate your skincare regimen today.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <Button className="bg-white text-purple-800 hover:bg-purple-50 text-base py-2 px-6">
                      Shop Beauty Collection
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-purple-700 text-base">
                      Ask AI
                      <Bot className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <Image
                    src="/images/tincture2.png"
                    alt="CBD Beauty Collection"
                    width={180}
                    height={180}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 