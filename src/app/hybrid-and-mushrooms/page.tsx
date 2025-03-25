'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Bot, Leaf, Brain, Shield, Star, Sparkles, Beaker, Dumbbell, Clock, Heart, Activity, Table as TableIcon, Info } from 'lucide-react'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { InfiniteSlider } from '@/components/common/ui/infinite-slider'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/common/ui/table"

// Hybrid/Mushroom products data
const hybridProducts = [
  {
    name: "Mushroom & CBD Tincture",
    strength: "750mg CBD + 500mg Mushroom",
    image: "/images/tincture2.png",
    price: "$59.99",
    rating: 4.8,
    reviews: 86,
    description: "Our premium CBD-mushroom blend for cognitive support",
    benefits: ["Brain function", "Immunity", "Focus"],
    badgeColor: "bg-amber-800",
    featured: true
  },
  {
    name: "Lion's Mane CBD Capsules",
    strength: "600mg CBD + 1000mg Lion's Mane",
    image: "/images/tincture2.png",
    price: "$49.99",
    rating: 4.7,
    reviews: 64,
    description: "Cognitive enhancement with Lion's Mane and CBD",
    benefits: ["Mental clarity", "Memory", "Neuroprotection"],
    badgeColor: "bg-amber-700",
    featured: true
  },
  {
    name: "Reishi Calm Gummies",
    strength: "300mg CBD + 500mg Reishi",
    image: "/images/tincture2.png",
    price: "$39.99",
    rating: 4.9,
    reviews: 72,
    description: "Stress-relief gummies with adaptogenic Reishi mushroom",
    benefits: ["Stress relief", "Immune support", "Balance"],
    badgeColor: "bg-amber-600",
    featured: true
  },
  {
    name: "Chaga Immune Support",
    strength: "1000mg CBD + 800mg Chaga",
    image: "/images/tincture2.png",
    price: "$69.99",
    rating: 4.8,
    reviews: 48,
    description: "Powerful immune-boosting formula with Chaga mushroom",
    benefits: ["Immune defense", "Antioxidant", "Vitality"],
    badgeColor: "bg-amber-900",
    featured: false
  },
  {
    name: "Cordyceps Energy Blend",
    strength: "500mg CBD + 700mg Cordyceps",
    image: "/images/tincture2.png",
    price: "$54.99",
    rating: 4.6,
    reviews: 52,
    description: "Energy and stamina formula with Cordyceps mushroom",
    benefits: ["Energy", "Athletic performance", "Endurance"],
    badgeColor: "bg-amber-600",
    featured: false
  },
  {
    name: "Shiitake Wellness Drops",
    strength: "800mg CBD + 600mg Shiitake",
    image: "/images/tincture2.png",
    price: "$64.99",
    rating: 4.7,
    reviews: 45,
    description: "Whole-body wellness formula with powerful Shiitake mushroom",
    benefits: ["Immune health", "Cellular support", "Vitality"],
    badgeColor: "bg-amber-800",
    featured: false
  },
  {
    name: "Maitake Balance Capsules",
    strength: "750mg CBD + 500mg Maitake",
    image: "/images/tincture2.png",
    price: "$59.99",
    rating: 4.5,
    reviews: 38,
    description: "Metabolic support with Maitake's adaptive properties",
    benefits: ["Metabolic health", "Balance", "Adaptation"],
    badgeColor: "bg-amber-700",
    featured: false
  },
  {
    name: "Turkey Tail Defense Blend",
    strength: "900mg CBD + 700mg Turkey Tail",
    image: "/images/tincture2.png",
    price: "$79.99",
    rating: 4.8,
    reviews: 42,
    description: "Premium immune defense with powerful Turkey Tail mushroom",
    benefits: ["Immune strength", "Antioxidant", "Cellular health"],
    badgeColor: "bg-amber-900",
    featured: false
  }
];

// Mushroom-CBD benefits data
const mushroomCBDBenefits = [
  {
    title: "Cognitive Enhancement",
    description: "Functional mushrooms like Lion's Mane combined with CBD support brain health and cognitive function.",
    icon: <Brain className="h-6 w-6 text-amber-800" />,
    color: "bg-amber-50/80 border-amber-200"
  },
  {
    title: "Immune System Support",
    description: "Medicinal mushrooms provide powerful immune system support, complemented by CBD's anti-inflammatory properties.",
    icon: <Shield className="h-6 w-6 text-amber-800" />,
    color: "bg-amber-50/80 border-amber-200"
  },
  {
    title: "Adaptogenic Balance",
    description: "Mushroom and CBD combinations help the body adapt to stress and maintain homeostasis.",
    icon: <Leaf className="h-6 w-6 text-amber-800" />,
    color: "bg-amber-50/80 border-amber-200"
  },
  {
    title: "Enhanced Recovery",
    description: "The combination promotes faster recovery and reduced inflammation after physical exertion.",
    icon: <Activity className="h-6 w-6 text-amber-800" />,
    color: "bg-amber-50/80 border-amber-200"
  },
  {
    title: "Synergistic Effect",
    description: "The entourage effect of combining mushrooms with CBD creates more powerful benefits than either alone.",
    icon: <Sparkles className="h-6 w-6 text-amber-800" />,
    color: "bg-amber-50/80 border-amber-200"
  },
  {
    title: "Stress Reduction",
    description: "Both compounds work together to calm the nervous system and reduce the impact of daily stressors.",
    icon: <Heart className="h-6 w-6 text-amber-800" />,
    color: "bg-amber-50/80 border-amber-200"
  }
];

// Functional mushroom data for table
const functionalMushrooms = [
  {
    name: "Lion's Mane",
    scientificName: "Hericium erinaceus",
    benefits: ["Cognitive function", "Nerve regeneration", "Mental clarity"],
    description: "Known for its remarkable brain-boosting properties, Lion's Mane may stimulate nerve growth factor (NGF) production, supporting brain health and cognitive function.",
    cbdSynergy: "When combined with CBD, Lion's Mane creates a powerful nootropic effect, enhancing mental clarity while CBD reduces anxiety that can impair cognitive function."
  },
  {
    name: "Reishi",
    scientificName: "Ganoderma lucidum",
    benefits: ["Stress reduction", "Immune modulation", "Sleep support"],
    description: "Known as the 'mushroom of immortality', Reishi is a powerful adaptogen that helps the body cope with stress and supports immune function.",
    cbdSynergy: "CBD enhances Reishi's calming effects, creating a synergistic solution for stress management and improved sleep quality."
  },
  {
    name: "Chaga",
    scientificName: "Inonotus obliquus",
    benefits: ["Immune support", "Antioxidant", "Anti-inflammatory"],
    description: "A potent antioxidant powerhouse that supports immune health and reduces inflammation throughout the body.",
    cbdSynergy: "Combined with CBD's anti-inflammatory properties, Chaga creates a comprehensive approach to immune system support and inflammation management."
  },
  {
    name: "Cordyceps",
    scientificName: "Cordyceps militaris",
    benefits: ["Energy", "Endurance", "Respiratory support"],
    description: "Traditionally used to boost energy and athletic performance by improving oxygen utilization and cellular energy production.",
    cbdSynergy: "While Cordyceps enhances energy and performance, CBD helps manage exercise-induced inflammation for better recovery."
  },
  {
    name: "Shiitake",
    scientificName: "Lentinula edodes",
    benefits: ["Immune health", "Cardiovascular support", "Cellular health"],
    description: "Rich in polysaccharides that support immune function and overall cellular health with powerful antioxidant properties.",
    cbdSynergy: "The combination creates a whole-body wellness approach, supporting immune regulation while CBD adds stress-relief benefits."
  },
  {
    name: "Maitake",
    scientificName: "Grifola frondosa",
    benefits: ["Metabolic health", "Immune support", "Adaptogenic"],
    description: "Known as 'hen of the woods', Maitake contains unique beta-glucans that support metabolic health and immune function.",
    cbdSynergy: "CBD enhances Maitake's adaptogenic properties, helping to maintain homeostasis while supporting overall wellness."
  },
  {
    name: "Turkey Tail",
    scientificName: "Trametes versicolor",
    benefits: ["Immune defense", "Gut health", "Cellular support"],
    description: "One of the most researched medicinal mushrooms with powerful immunomodulating properties and prebiotic benefits.",
    cbdSynergy: "Together with CBD, Turkey Tail creates a powerful defense system, supporting both immune and gut health—the foundation of overall wellness."
  }
];

// Hybrid testimonials
const testimonials = [
  {
    quote: "The Lion's Mane CBD capsules have completely transformed my focus and mental clarity. I feel sharper throughout the workday without the jitters of caffeine.",
    author: "Michael R.",
    role: "Software Engineer",
    image: "/images/tincture2.png",
    rating: 5
  },
  {
    quote: "As an athlete, the Cordyceps Energy Blend has been a game-changer for my training. Better endurance and faster recovery without any stimulant crash.",
    author: "Tara L.",
    role: "Marathon Runner",
    image: "/images/tincture2.png",
    rating: 5
  },
  {
    quote: "I've tried many immune support supplements, but the Chaga Immune Support with CBD has been the most effective. I feel more resilient during the changing seasons.",
    author: "James K.",
    role: "Teacher",
    image: "/images/tincture2.png",
    rating: 4
  }
];

// FAQ items
const faqItems = [
  {
    question: "What makes mushroom and CBD combinations so effective?",
    answer: "The effectiveness comes from what scientists call the 'entourage effect.' Functional mushrooms contain a complex array of beneficial compounds like beta-glucans, triterpenes, and antioxidants, while CBD works through the endocannabinoid system. When combined, these natural ingredients work synergistically—enhancing each other's positive effects while mitigating potential side effects. This creates a more balanced, effective product than either ingredient alone."
  },
  {
    question: "Are these mushroom-CBD products psychoactive?",
    answer: "No, our mushroom-CBD products are not psychoactive. The functional mushrooms we use (like Lion's Mane, Reishi, Chaga, etc.) are completely different from psychedelic varieties. Additionally, our CBD is either broad-spectrum (0.0% THC) or contains less than the legal limit of 0.3% THC, which is not enough to cause psychoactive effects. Our products are designed to support wellness without altering your mental state."
  },
  {
    question: "How do I know which mushroom-CBD blend is right for me?",
    answer: "The right blend depends on your specific wellness goals. For cognitive support and focus, consider our Lion's Mane formulas. If stress relief and sleep are priorities, our Reishi blends may be ideal. For immune support, Chaga or Turkey Tail combinations are excellent choices. If you're an active person looking for energy and recovery support, our Cordyceps products are designed with you in mind. Our CBD Doctor can also provide personalized recommendations based on your specific needs."
  },
  {
    question: "Do these products have any side effects?",
    answer: "Functional mushroom and CBD combinations are generally well-tolerated. However, some people may experience mild digestive discomfort when first taking mushroom supplements. CBD may cause temporary drowsiness in some individuals, especially at higher doses. We recommend starting with a lower dose and gradually increasing as needed. As with any supplement, consult with your healthcare provider before starting, especially if you're pregnant, nursing, have a medical condition, or take medications."
  }
];

export default function HybridAndMushroomsPage() {
  const [expandedFaqs, setExpandedFaqs] = React.useState<number[]>([]);
  const [aiResponse, setAiResponse] = React.useState<string>("");
  const [userQuestion, setUserQuestion] = React.useState<string>("");
  const [isAiTyping, setIsAiTyping] = React.useState<boolean>(false);
  const [selectedMushroom, setSelectedMushroom] = React.useState<string | null>(null);
  
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
      "Based on your interest in cognitive support, I recommend our Lion's Mane CBD Capsules which combine the neurotropic benefits of Lion's Mane mushroom with the balancing effects of CBD.",
      "For immune system support, our Chaga Immune Support formula would be ideal. It combines the powerful antioxidant properties of Chaga mushroom with CBD's anti-inflammatory benefits.",
      "If you're looking for help with stress management, our Reishi Calm Gummies would be perfect. Reishi is known as the 'mushroom of immortality' for its adaptogenic properties.",
      "For energy and performance support, I'd suggest our Cordyceps Energy Blend. Cordyceps is traditionally used by athletes to improve stamina and oxygen utilization."
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
    <div className="bg-gradient-to-b from-amber-50 to-white">
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
              <Badge className="bg-amber-800 text-white hover:bg-amber-900 px-3 py-0.5 rounded-full text-xs mb-3">
                Hybrid & Mushrooms
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-900 via-amber-800 to-amber-700 mb-4">
                Advanced CBD & Mushroom Synergy
              </h1>
              <p className="text-amber-800 text-sm md:text-base mb-6 max-w-xl mx-auto lg:mx-0">
                Experience the enhanced benefits of CBD combined with powerful functional mushrooms for complete mind and body wellness.
              </p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Button className="bg-amber-800 hover:bg-amber-900 text-white text-sm">
                  Shop Hybrid Products
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
                <Button variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50 text-sm">
                  Learn About Mushrooms
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
                alt="CBD and Mushroom Products"
                fill
                className="object-contain"
              />
              <div className="absolute -bottom-6 left-0 right-0 mx-auto w-[90%] h-20 bg-gradient-to-r from-amber-100 to-amber-50 blur-3xl rounded-full opacity-80"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-amber-800 text-white hover:bg-amber-900 px-3 py-0.5 rounded-full text-xs mb-3">
              Synergistic Benefits
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Why CBD + Mushrooms?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Discover how the combination of CBD and functional mushrooms creates a powerful synergy
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mushroomCBDBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`border h-full shadow-sm transition-all hover:shadow hover:-translate-y-1 ${benefit.color}`}>
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
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-amber-800 text-white hover:bg-amber-900 px-3 py-0.5 rounded-full text-xs mb-3">
              Products
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">CBD & Mushroom Formulations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Our innovative products combine the benefits of CBD with powerful functional mushrooms
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {hybridProducts.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border border-amber-200 hover:border-amber-300 transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                  <div className="relative">
                    <AspectRatio ratio={1/1} className="bg-gradient-to-b from-amber-50 to-white">
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
                    <h3 className="font-semibold text-base text-gray-900 group-hover:text-amber-800 transition-colors">{product.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.description}</p>
                    
                    {/* Benefits */}
                    <div className="mt-2 space-y-1">
                      {product.benefits.slice(0, 2).map((benefit, i) => (
                        <div key={i} className="flex items-center gap-1">
                          <Check className="h-3.5 w-3.5 text-amber-600" />
                          <span className="text-xs text-gray-600">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between mt-2">
                      <p className="font-bold text-base text-amber-800">{product.price}</p>
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
                      <Button size="sm" className="bg-amber-800 hover:bg-amber-900 text-white text-xs h-8 w-full">
                        <ArrowRight className="h-3.5 w-3.5 mr-1" />
                        Add to Cart
                      </Button>
                      <Button size="sm" variant="outline" className="border-amber-800 text-amber-800 hover:bg-amber-50 text-xs h-8 w-full">
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="flex justify-center mt-6">
            <Button size="sm" className="bg-amber-800 hover:bg-amber-900 text-white text-sm">
              View All Hybrid Products
              <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Functional Mushroom Guide Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-amber-800 text-white hover:bg-amber-900 px-3 py-0.5 rounded-full text-xs mb-3">
              Functional Mushrooms
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">The Power of Mushrooms</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Learn about the remarkable benefits of the functional mushrooms in our formulations
            </p>
          </motion.div>
          
          <div className="bg-amber-50 rounded-lg p-4 mb-8 overflow-x-auto">
            <Table>
              <TableCaption>Comprehensive guide to functional mushrooms in our products</TableCaption>
              <TableHeader>
                <TableRow className="bg-amber-100/60">
                  <TableHead className="text-amber-900 font-semibold">Mushroom</TableHead>
                  <TableHead className="text-amber-900 font-semibold">Key Benefits</TableHead>
                  <TableHead className="text-amber-900 font-semibold">Description</TableHead>
                  <TableHead className="text-amber-900 font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {functionalMushrooms.map((mushroom, index) => (
                  <TableRow 
                    key={index}
                    className={cn(
                      "transition-colors hover:bg-amber-100/30",
                      selectedMushroom === mushroom.name ? "bg-amber-100/40" : ""
                    )}
                  >
                    <TableCell className="font-medium whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-amber-900">{mushroom.name}</span>
                        <span className="text-xs italic text-gray-500">{mushroom.scientificName}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc list-inside">
                        {mushroom.benefits.map((benefit, i) => (
                          <li key={i} className="text-sm text-gray-700">{benefit}</li>
                        ))}
                      </ul>
                    </TableCell>
                    <TableCell className="text-sm text-gray-700 max-w-[300px]">
                      {mushroom.description}
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-amber-800 text-amber-800 hover:bg-amber-50 text-xs"
                            onClick={() => setSelectedMushroom(mushroom.name)}
                          >
                            <Info className="h-3.5 w-3.5 mr-1" />
                            Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2 text-amber-900">
                              <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-800">
                                <Leaf className="h-3.5 w-3.5" />
                              </div>
                              <span>{mushroom.name}</span>
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium text-amber-800 mb-1">Scientific Name</h4>
                              <p className="text-sm italic text-gray-600">{mushroom.scientificName}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-amber-800 mb-1">Key Benefits</h4>
                              <ul className="list-disc list-inside space-y-1">
                                {mushroom.benefits.map((benefit, i) => (
                                  <li key={i} className="text-sm text-gray-700">{benefit}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-amber-800 mb-1">Description</h4>
                              <p className="text-sm text-gray-700">{mushroom.description}</p>
                            </div>
                            <div className="bg-amber-50 p-3 rounded-md">
                              <h4 className="text-sm font-medium text-amber-800 mb-1 flex items-center gap-1">
                                <Sparkles className="h-3.5 w-3.5" />
                                Synergy with CBD
                              </h4>
                              <p className="text-sm text-gray-700">{mushroom.cbdSynergy}</p>
                            </div>
                            <div className="flex justify-end">
                              <Button 
                                size="sm" 
                                className="bg-amber-800 hover:bg-amber-900 text-white text-xs"
                              >
                                Shop {mushroom.name} Products
                                <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                              </Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="bg-gradient-to-r from-amber-700 to-amber-800 rounded-lg p-6 text-white shadow-md">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                <Beaker className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2 text-center md:text-left">The Science of Synergy</h3>
                <p className="text-amber-100 text-sm mb-4">
                  The combination of CBD and medicinal mushrooms creates a synergistic effect known as the "entourage effect." This means that when used together, their beneficial properties are enhanced beyond what either could achieve alone. CBD works primarily through the endocannabinoid system, while functional mushrooms contain a complex array of beta-glucans, triterpenes, and antioxidant compounds that support different body systems.
                </p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge variant="outline" className="bg-white/10 border-white/20 text-white text-xs">Enhanced Bioavailability</Badge>
                  <Badge variant="outline" className="bg-white/10 border-white/20 text-white text-xs">Complementary Actions</Badge>
                  <Badge variant="outline" className="bg-white/10 border-white/20 text-white text-xs">Balanced Effects</Badge>
                  <Badge variant="outline" className="bg-white/10 border-white/20 text-white text-xs">Multiple Pathways</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto max-w-6xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-amber-800 text-white hover:bg-amber-900 px-3 py-0.5 rounded-full text-xs mb-3">
              Customer Stories
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Transformative Results</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Hear from our customers who have experienced the power of our mushroom-CBD combinations
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
      </section>

      {/* FAQ Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8"
          >
            <Badge className="bg-amber-800 text-white hover:bg-amber-900 px-3 py-0.5 rounded-full text-xs mb-3">
              FAQ
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
              Common questions about our CBD and mushroom products
            </p>
          </motion.div>
          
          <div className="rounded-lg border border-amber-100 shadow-sm overflow-hidden mb-8">
            <Accordion type="multiple" value={expandedFaqs.map(i => i.toString())}>
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={index.toString()}
                  className="border-b border-amber-100 last:border-0"
                >
                  <AccordionTrigger 
                    onClick={() => toggleFaq(index)}
                    className={cn(
                      "hover:bg-amber-50/50 px-4 py-3 text-left font-medium text-gray-900",
                      expandedFaqs.includes(index) ? "bg-amber-50/60" : ""
                    )}
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3 text-sm text-gray-700 bg-amber-50/30">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          
          <div className="bg-amber-50 rounded-lg p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
              <div className="w-16 h-16 rounded-full bg-amber-800 flex items-center justify-center flex-shrink-0">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Still Have Questions?</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Our CBD & Mushroom experts are ready to help you find the perfect product for your specific needs.
                </p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-amber-800 hover:bg-amber-900 text-white">
                      Ask Our Experts
                      <ArrowRight className="ml-1.5 h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Bot className="h-5 w-5 text-amber-800" />
                        <span>Ask Our Mushroom & CBD Experts</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="bg-gray-50 p-4 rounded-md mb-4 max-h-[300px] overflow-y-auto">
                      {aiResponse ? (
                        <div className="text-gray-800">
                          {aiResponse}
                          {isAiTyping && <span className="inline-block w-1.5 h-4 ml-1 bg-amber-600 animate-pulse" />}
                        </div>
                      ) : (
                        <div className="text-gray-500 italic">
                          Ask us about which mushroom-CBD combination is right for your needs...
                        </div>
                      )}
                    </div>
                    <form onSubmit={handleAskDoctor} className="flex items-center gap-2">
                      <input
                        type="text"
                        value={userQuestion}
                        onChange={(e) => setUserQuestion(e.target.value)}
                        placeholder="Type your question here..."
                        className="flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-amber-800/30"
                      />
                      <Button 
                        type="submit"
                        className="bg-amber-800 hover:bg-amber-900 text-white"
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
          <div className="bg-gradient-to-r from-amber-800 to-amber-700 rounded-lg p-6 md:p-10 shadow-lg">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-2/3">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 text-center md:text-left">Experience the CBD & Mushroom Difference</h2>
                <p className="text-amber-100 text-base mb-6 max-w-xl text-center md:text-left">
                  Discover how our innovative formulations can support your wellness journey. Harness the power of nature's most potent ingredients.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button className="bg-white text-amber-800 hover:bg-amber-50 text-base py-2 px-6">
                    Shop Hybrid Collection
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-amber-700 text-base">
                    Ask AI
                    <Bot className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="flex-shrink-0">
                <Image
                  src="/images/tincture2.png"
                  alt="CBD Mushroom Collection"
                  width={180}
                  height={180}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 