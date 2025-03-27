'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Heart, Droplet, Brain, Moon, Star, Shield, Leaf, ChevronDown, ChevronUp, ShoppingCart, Sparkles, Beaker, Bot } from 'lucide-react'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { InfiniteSlider } from '@/components/common/ui/infinite-slider'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { HealthAndWellness } from '@/components/features/home/health-section'

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
];

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
];

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
];

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
  }
];

// FAQ items
const faqItems = [
  {
    question: "How does CBD work for stress and anxiety?",
    answer: "CBD interacts with the endocannabinoid system (ECS) in your body, which helps regulate numerous physiological processes including stress response. CBD may help modulate cortisol levels and influence serotonin receptors, which are key in mood regulation. Many users report feeling a sense of calm without sedation, making it suitable for daytime use."
  },
  {
    question: "What's the difference between full-spectrum and broad-spectrum CBD?",
    answer: "Full-spectrum CBD contains all compounds naturally found in the hemp plant, including trace amounts of THC (less than 0.3%). Broad-spectrum CBD contains multiple cannabinoids and terpenes but has THC removed. Both offer the 'entourage effect' where compounds work together, but broad-spectrum is preferred by those who want to avoid THC completely."
  },
  {
    question: "How long does it take to feel the effects of CBD?",
    answer: "The onset time varies by consumption method. Sublingual oils typically take 15-30 minutes to feel initial effects, while edibles may take 1-2 hours. Vaping provides the fastest onset (within minutes) but effects don't last as long. Individual factors like metabolism, body weight, and the condition being addressed also influence how quickly you'll feel effects."
  },
  {
    question: "Can I take CBD with my medications?",
    answer: "CBD can interact with certain medications by affecting how your body processes them (similar to how grapefruit does). If you take medications with a 'grapefruit warning' or medications that are processed by the liver's cytochrome P450 enzyme system, consult your healthcare provider before using CBD products."
  }
];

// Health concerns
const healthConcerns = [
  {
    title: "Stress & Anxiety",
    description: "Formulas designed to promote calm and balance",
    icon: <Heart className="h-6 w-6 text-white" />,
    color: "bg-blue-600",
    textColor: "text-blue-700",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-100",
    products: ["Full Spectrum CBD Oil", "Broad Spectrum CBD Oil"]
  },
  {
    title: "Sleep & Insomnia",
    description: "Support better sleep quality and healthy sleep patterns",
    icon: <Moon className="h-6 w-6 text-white" />,
    color: "bg-indigo-600",
    textColor: "text-indigo-700",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-100",
    products: ["Sleep CBD Formula", "Full Spectrum CBD Oil"]
  },
  {
    title: "Focus & Clarity",
    description: "Enhance mental clarity and daytime cognitive function",
    icon: <Sparkles className="h-6 w-6 text-white" />,
    color: "bg-amber-600",
    textColor: "text-amber-700",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-100",
    products: ["Broad Spectrum CBD Oil", "Daily Wellness CBD"]
  },
  {
    title: "Mood Support",
    description: "Balance mood and promote overall emotional wellness",
    icon: <Heart className="h-6 w-6 text-white" />,
    color: "bg-rose-600",
    textColor: "text-rose-700",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-100",
    products: ["Full Spectrum CBD Oil", "Wellness Plus CBD"]
  }
];

export default function HealthAndWellnessPage() {
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
      "Based on your symptoms, our Full Spectrum CBD Oil might be beneficial. It contains the full range of cannabinoids that work together for enhanced effectiveness.",
      "For sleep issues, I recommend our Sleep CBD Formula with melatonin and CBN. These compounds work synergistically to promote better sleep quality and duration.",
      "If you're concerned about drug testing, our Broad Spectrum CBD Oil would be ideal as it contains 0.0% THC while still providing the benefits of multiple cannabinoids.",
      "For wellness beginners, our Daily Wellness CBD at 500mg is a perfect starting point. It provides a gentle introduction to CBD's benefits."
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
    <div className="bg-gradient-to-b from-green-50 to-white">
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
              <Badge className="bg-green-600 text-white hover:bg-green-700 px-3 py-0.5 rounded-full text-xs mb-3">
                Health & Wellness
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-600 to-green-700 mb-4">
                Natural Support for Your Wellness Journey
              </h1>
              <p className="text-green-700 text-sm md:text-base mb-6 max-w-xl mx-auto lg:mx-0">
                Discover our premium CBD products specifically formulated to support your health and wellness goals.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button className="bg-green-600 hover:bg-green-700 text-white text-sm">
                  Shop Health Products
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
                <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 text-sm">
                  Learn About CBD Benefits
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
                alt="CBD Health and Wellness Products"
                fill
                className="object-contain"
              />
              <div className="absolute -bottom-6 left-0 right-0 mx-auto w-[90%] h-20 bg-gradient-to-r from-green-100 to-green-50 blur-3xl rounded-full opacity-80"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Health and Wellness Section from Home Page */}
      <HealthAndWellness />

      {/* Shop by Concern Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-green-600 text-white hover:bg-green-700 px-3 py-0.5 rounded-full text-xs mb-3">
              Shop by Need
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Find Your Solution</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Browse our products by health concern to find the perfect CBD solution
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {healthConcerns.map((concern, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className={`group cursor-pointer border h-full transition-all hover:shadow hover:-translate-y-1 ${concern.borderColor} ${concern.bgColor}`}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`rounded-full w-10 h-10 flex items-center justify-center ${concern.color} shadow-sm`}>
                        {concern.icon}
                      </div>
                      <h3 className={`text-base font-semibold ${concern.textColor}`}>{concern.title}</h3>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">{concern.description}</p>
                    
                    <div className="mt-auto">
                      <h4 className="text-xs font-medium text-gray-800 mb-1">Recommended:</h4>
                      <ul>
                        {concern.products.slice(0, 1).map((product, idx) => (
                          <li key={idx} className="flex items-center gap-1 text-xs text-gray-600">
                            <Check className="h-3.5 w-3.5 text-green-500" />
                            {product}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                  <div className={`h-1 w-full ${concern.color} opacity-75 transition-all duration-300 group-hover:opacity-100`}></div>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 mb-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-md"
            >
              <Card className="border-green-200 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 relative">
                  <Badge className="absolute top-2 right-2 bg-white text-green-700 hover:bg-green-50">AI Powered</Badge>
                  <h3 className="text-white font-semibold text-lg">Need Personalized Help?</h3>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative h-20 w-20 flex-shrink-0">
                      <div className="absolute inset-0 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-200 shadow-md">
                        <Beaker className="h-10 w-10 text-green-600" />
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 text-lg mb-1">CBD Doctor</h4>
                      <p className="text-sm text-gray-600">Our CBD Doctor can help you find the perfect products for your specific health needs and concerns</p>
                    </div>
                  </div>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-base font-medium">
                        Ask Our Doctor
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          <Beaker className="h-5 w-5 text-green-600" />
                          <span>CBD Doctor</span>
                        </DialogTitle>
                      </DialogHeader>
                      <div className="bg-gray-50 p-4 rounded-md mb-4 max-h-[300px] overflow-y-auto">
                        {aiResponse ? (
                          <div className="text-gray-800">
                            {aiResponse}
                            {isAiTyping && <span className="inline-block w-1.5 h-4 ml-1 bg-green-600 animate-pulse" />}
                          </div>
                        ) : (
                          <div className="text-gray-500 italic">
                            Ask me any questions about CBD products for your health concerns...
                            {isAiTyping && <span className="inline-block w-1.5 h-4 ml-1 bg-green-600 animate-pulse" />}
                          </div>
                        )}
                      </div>
                      <form onSubmit={handleAskDoctor} className="flex gap-2">
                        <input
                          type="text"
                          value={userQuestion}
                          onChange={(e) => setUserQuestion(e.target.value)}
                          placeholder="What CBD product is best for sleep?"
                          className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                          disabled={isAiTyping}
                        />
                        <Button 
                          type="submit" 
                          className="bg-green-600 hover:bg-green-700 text-white"
                          disabled={isAiTyping}
                        >
                          Send
                        </Button>
                      </form>
                      <DialogFooter className="mt-4 flex justify-between items-center border-t pt-4">
                        <p className="text-xs text-gray-500">Powered by AI for personalized recommendations</p>
                        <DialogClose asChild>
                          <Button variant="outline" size="sm">Close</Button>
                        </DialogClose>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CBD Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-green-600 text-white hover:bg-green-700 px-4 py-1 rounded-full text-sm mb-3">
              Benefits
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">How CBD Supports Your Health</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              CBD interacts with your body's endocannabinoid system to regulate physiological processes
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {cbdBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`border h-full shadow-sm transition-all hover:shadow hover:border-green-200 ${benefit.color}`}>
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
      <section className="py-16 bg-green-50">
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
                  <div className="relative">
                    <AspectRatio ratio={1/1} className="bg-gradient-to-b from-green-50 to-white">
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
                    <h3 className="font-semibold text-base text-gray-900 group-hover:text-green-700 transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                    
                    {/* Benefits */}
                    <div className="mt-2 space-y-1">
                      {product.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <Check className="h-3.5 w-3.5 text-green-500" />
                          <span className="text-xs text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <p className="font-bold text-base text-green-700">{product.price}</p>
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
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white text-xs h-8 w-full">
                        <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                        Add to Cart
                      </Button>
                      <Button size="sm" variant="outline" className="border-green-600 text-green-700 hover:bg-green-50 text-xs h-8 w-full">
                        Read More
                      </Button>
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
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-green-600 text-white hover:bg-green-700 px-3 py-0.5 rounded-full text-xs mb-3">
              Research
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Backed by Science</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Our products are developed based on the latest scientific research on CBD benefits
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
                <Card className="border border-green-100 hover:border-green-200 transition-all hover:shadow-md h-full">
                  <CardContent className="p-5">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{study.description}</p>
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
        </div>
      </section>

      {/* How to Choose Guide */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-green-600 text-white hover:bg-green-700 px-3 py-0.5 rounded-full text-xs mb-3">
              Guide
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">How to Choose Your CBD</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Follow this simple guide to find the right CBD product for your health needs
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="w-full max-w-[280px]">
                <AspectRatio ratio={1/1} className="bg-gradient-to-b from-green-50 to-white rounded-lg overflow-hidden">
                  <div className="relative h-full w-full flex items-center justify-center p-6">
                    <Image
                      src="/images/tincture2.png"
                      alt="CBD Selection Guide"
                      fill
                      className="object-contain p-4"
                    />
                    <div className="absolute -bottom-6 left-0 right-0 mx-auto w-[90%] h-16 bg-gradient-to-r from-green-100 to-green-50 blur-3xl rounded-full opacity-60"></div>
                  </div>
                </AspectRatio>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-4">
                {[
                  {
                    number: 1,
                    title: "Identify Your Goal",
                    description: "Are you looking for help with sleep, stress management, daily wellness, or something else? Different formulations target different concerns."
                  },
                  {
                    number: 2,
                    title: "Consider Spectrum Type",
                    description: "Full-spectrum contains all hemp compounds including trace THC. Broad-spectrum offers entourage benefits without THC. CBD isolate is pure CBD only."
                  },
                  {
                    number: 3,
                    title: "Choose Your Potency",
                    description: "Start with lower potency if you're new to CBD (250-500mg products). For more experienced users or specific health concerns, higher potencies may be more effective."
                  },
                  {
                    number: 4,
                    title: "Consider Additional Ingredients",
                    description: "Some of our products contain supportive ingredients like melatonin for sleep, CBG for focus, or additional botanicals for specific benefits."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Card className="overflow-hidden border border-green-100 hover:border-green-200 transition-all hover:shadow-md">
                      <CardContent className="p-0">
                        <div className="flex items-start">
                          <div className="bg-green-600 text-white text-base font-bold h-full w-10 flex-shrink-0 flex items-center justify-center py-4">
                            {step.number}
                          </div>
                          <div className="p-4">
                            <h3 className="text-base font-semibold text-gray-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-gray-600">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            <Badge className="bg-green-600 text-white hover:bg-green-700 px-3 py-0.5 rounded-full text-xs mb-3">
              FAQ
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Common questions about our CBD wellness products
            </p>
          </motion.div>
          
          <div className="rounded-lg border border-green-100 shadow-sm overflow-hidden mb-8">
            <Accordion type="multiple" value={expandedFaqs.map(i => i.toString())}>
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={index.toString()}
                  className="border-b border-green-100 last:border-0"
                >
                  <AccordionTrigger 
                    onClick={() => toggleFaq(index)}
                    className={cn(
                      "hover:bg-green-50/50 px-4 py-3 text-left font-medium text-gray-900",
                      expandedFaqs.includes(index) ? "bg-green-50/60" : ""
                    )}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-sm text-gray-700 bg-green-50/30">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-16 h-16 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Still Have Questions?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our CBD wellness experts are ready to help you find the perfect product for your specific needs.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700 text-white">
                      Ask Our CBD Doctor
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Bot className="h-5 w-5 text-green-600" />
                        <span>Ask Our CBD Wellness Doctor</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="bg-gray-50 p-4 rounded-md mb-4 max-h-[300px] overflow-y-auto">
                      {aiResponse ? (
                        <div className="text-gray-800">
                          {aiResponse}
                          {isAiTyping && <span className="inline-block w-1.5 h-4 ml-1 bg-green-600 animate-pulse" />}
                        </div>
                      ) : (
                        <div className="text-gray-500 italic">
                          Ask us about which CBD wellness product might be right for your needs...
                        </div>
                      )}
                    </div>
                    <form onSubmit={handleAskDoctor} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={userQuestion}
                        onChange={(e) => setUserQuestion(e.target.value)}
                        placeholder="Type your question here..."
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-600/30"
                      />
                      <Button 
                        type="submit"
                        className="bg-green-600 hover:bg-green-700 text-white"
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

      {/* Testimonials */}
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
              Success Stories
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Customer Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Hear from our customers who have experienced the benefits of our CBD products
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
                <Card className="bg-white shadow-sm border border-green-100 h-full">
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

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-green-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-6 md:p-10 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Start Your Wellness Journey Today</h2>
                <p className="text-green-100 text-base mb-6">
                  Experience the natural benefits of our premium CBD products for your health and wellness needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button className="bg-white text-green-800 hover:bg-green-50 text-base py-2 px-6">
                    Shop Health Collection
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-green-700 text-base">
                    Ask AI
                    <Bot className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative h-[220px] w-[220px]">
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
  );
} 