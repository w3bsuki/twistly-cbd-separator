'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Check, 
  Heart, 
  Droplet, 
  Brain, 
  Moon, 
  Star, 
  Shield, 
  Leaf, 
  Bot 
} from 'lucide-react'
import { cn } from '@/lib/utils'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Accordion, 
  AccordionItem, 
  AccordionTrigger, 
  AccordionContent 
} from '@/components/ui/accordion'
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger, 
  DialogFooter, 
  DialogClose 
} from '@/components/ui/dialog'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { AspectRatio } from '@/components/ui/aspect-ratio'

// Import our standardized components
import { BenefitsGrid } from '@/components/features/shared/benefits-grid'
import { CTASection } from '@/components/features/shared/cta-section'
import { FAQSection } from '@/components/features/shared/faq-section'
import { ProductGrid } from '@/components/features/products/product-grid'

// Health products
const healthProducts = [
  {
    id: "health-1",
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
    id: "health-2",
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
    id: "health-3",
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
    id: "health-4",
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
    id: "health-5",
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

// Research and studies for table
const researchStudies = [
  {
    title: "CBD for Anxiety and Stress",
    results: "79.2% of patients showed reduced anxiety",
    description: "A 2019 study published in The Permanente Journal found that CBD could help reduce anxiety in 79.2% of patients and improve sleep in 66.7% of patients.",
    source: "The Permanente Journal, 2019",
    link: "#",
    cbdType: "Full Spectrum CBD Oil"
  },
  {
    title: "CBD and Sleep Quality",
    results: "Increased total sleep time",
    description: "Research published in the Journal of Clinical Pharmacology demonstrated that CBD may increase total sleep time and reduce insomnia symptoms.",
    source: "Journal of Clinical Pharmacology, 2021",
    link: "#",
    cbdType: "Sleep CBD Formula"
  },
  {
    title: "Neurological Benefits of CBD",
    results: "Anti-inflammatory and neuroprotective properties",
    description: "A comprehensive review in Neurotherapeutics found evidence that CBD may help manage neurological conditions through its anti-inflammatory and neuroprotective properties.",
    source: "Neurotherapeutics, 2020",
    link: "#",
    cbdType: "Wellness Plus CBD"
  },
  {
    title: "CBD for Pain Management",
    results: "Reduced pain and inflammation",
    description: "Studies published in the European Journal of Pain show that CBD applied topically could help lower pain and inflammation due to arthritis.",
    source: "European Journal of Pain, 2018",
    link: "#",
    cbdType: "Full Spectrum CBD Oil"
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

// Usage guide steps
const usageGuideSteps = [
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
];

export default function HealthAndWellnessPage() {
  const [expandedFaqs, setExpandedFaqs] = React.useState<number[]>([]);
  const [aiResponse, setAiResponse] = React.useState<string>("");
  const [userQuestion, setUserQuestion] = React.useState<string>("");
  const [isAiTyping, setIsAiTyping] = React.useState<boolean>(false);
  const [selectedStudy, setSelectedStudy] = React.useState<string>("");
  
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
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-green-600 text-white hover:bg-green-700 px-3 py-0.5 rounded-full text-xs mb-3">
                Health & Wellness
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-600 to-green-700 mb-4">
                Natural Support for Your Wellness Journey
              </h1>
              <p className="text-green-700 text-sm md:text-base mb-6 max-w-2xl mx-auto">
                Discover our premium CBD products specifically formulated to support your health and wellness goals.
                Our carefully crafted formulas help promote balance, calm, and overall wellbeing.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Button className="bg-green-600 hover:bg-green-700 text-white">
                  Shop Health Products
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </Button>
                <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                  Learn About CBD Benefits
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Using our standardized component */}
      <BenefitsGrid
        benefits={cbdBenefits.map(benefit => ({
          title: benefit.title,
          description: benefit.description,
          icon: benefit.icon
        }))}
        title="How CBD Supports Your Health"
        subtitle="Benefits"
        colorScheme="green"
        animate={true}
        columns={3}
        className="py-12"
      />
      
      {/* Products Section - Using our standardized component */}
      <ProductGrid
        products={healthProducts.map(product => ({
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          rating: product.rating,
          reviews: product.reviews,
          image: product.image,
          strength: product.strength,
          featured: product.featured,
          slug: product.id,
          badgeColor: product.badgeColor
        }))}
        title="Wellness-Focused CBD Products"
        subtitle="Products"
        colorScheme="green"
        limit={4}
        animate={true}
        className="py-12 bg-green-50"
      />

      {/* Research Section with Table - Similar to Hybrid page */}
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
          
          <div className="bg-green-50 rounded-lg p-4 mb-8 overflow-x-auto">
            <Table>
              <TableCaption>Comprehensive research on CBD for health and wellness</TableCaption>
              <TableHeader>
                <TableRow className="bg-green-100/60">
                  <TableHead className="text-green-900 font-semibold">Study Focus</TableHead>
                  <TableHead className="text-green-900 font-semibold">Key Results</TableHead>
                  <TableHead className="text-green-900 font-semibold">Description</TableHead>
                  <TableHead className="text-green-900 font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {researchStudies.map((study, index) => (
                  <TableRow 
                    key={index}
                    className={cn(
                      "transition-colors hover:bg-green-100/30",
                      selectedStudy === study.title ? "bg-green-100/40" : ""
                    )}
                  >
                    <TableCell className="font-medium whitespace-nowrap">
                      <div className="flex flex-col">
                        <span className="text-green-900">{study.title}</span>
                        <span className="text-xs italic text-gray-500">{study.source}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-gray-700">{study.results}</span>
                    </TableCell>
                    <TableCell className="text-sm text-gray-700 max-w-[300px]">
                      {study.description}
                    </TableCell>
                    <TableCell>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="border-green-600 text-green-700 hover:bg-green-50 text-xs"
                            onClick={() => setSelectedStudy(study.title)}
                          >
                            <Shield className="h-3.5 w-3.5 mr-1" />
                            Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle className="flex items-center gap-2 text-green-900">
                              <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-800">
                                <Shield className="h-3.5 w-3.5" />
                              </div>
                              <span>{study.title}</span>
                            </DialogTitle>
                          </DialogHeader>
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-sm font-medium text-green-800 mb-1">Source</h4>
                              <p className="text-sm italic text-gray-600">{study.source}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-green-800 mb-1">Key Results</h4>
                              <p className="text-sm text-gray-700">{study.results}</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-green-800 mb-1">Description</h4>
                              <p className="text-sm text-gray-700">{study.description}</p>
                            </div>
                            <div className="bg-green-50 p-3 rounded-md">
                              <h4 className="text-sm font-medium text-green-800 mb-1 flex items-center gap-1">
                                <Leaf className="h-3.5 w-3.5" />
                                Recommended Product
                              </h4>
                              <p className="text-sm text-gray-700">{study.cbdType}</p>
                            </div>
                            <div className="flex justify-end">
                              <Button 
                                size="sm" 
                                className="bg-green-600 hover:bg-green-700 text-white text-xs"
                              >
                                Shop {study.cbdType}
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
        </div>
      </section>

      {/* How to Choose Guide - Similar to original page but improved styling */}
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
                {usageGuideSteps.map((step, index) => (
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

      {/* Testimonials - Using InfiniteSlider for a nice effect */}
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

      {/* FAQ Section - Using our standardized component */}
      <FAQSection
        faqs={faqItems.map(item => ({
          question: item.question,
          answer: item.answer
        }))}
        title="Frequently Asked Questions"
        subtitle="FAQ"
        colorScheme="green"
        animate={true}
        maxWidth="lg"
        className="py-12"
      />

      {/* CTA Section - Using our standardized component */}
      <CTASection
        title="Start Your Wellness Journey Today"
        description="Experience the natural benefits of our premium CBD products for your health and wellness needs."
        buttonText="Shop Health Collection"
        buttonHref="#"
        colorScheme="green"
        withBackground={true}
        size="lg"
        centered={true}
        withArrow={true}
        className="py-12"
      />
    </div>
  );
} 