'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Brain, 
  Heart, 
  Award, 
  Leaf, 
  Activity, 
  Bot, 
  MessageSquare, 
  DropletIcon, 
  Sparkles, 
  ShieldCheck, 
  Star,
  PawPrint,
  Plus,
  Minus,
  Moon,
  Zap,
  PanelBottomClose,
  ArrowUpRight,
  CheckCircle2,
  ScrollText,
  Microscope,
  ExternalLink,
  Info,
  PlusCircle,
  MinusCircle,
  ChevronRight,
  LucideProps,
  ShoppingCart,
  Check
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from '@/components/ui/dialog'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from '@/lib/utils'

// Category-specific use cases
const categories = [
  {
    id: "wellness",
    name: "Health & Wellness",
    icon: <Heart className="h-5 w-5" />,
    color: "green",
    benefits: [
      "Reduce everyday stress and anxiety",
      "Support healthy sleep patterns",
      "Promote overall mind-body balance",
      "Aid in managing daily discomfort",
      "Support immune system function",
      "Enhance mental clarity and focus",
      "Promote a sense of calm and wellbeing",
      "Support cardiovascular health"
    ]
  },
  {
    id: "sport",
    name: "Sport & Recovery",
    icon: <Activity className="h-5 w-5" />,
    color: "blue",
    benefits: [
      "Accelerate post-workout recovery",
      "Soothe exercise-induced inflammation",
      "Support joint health and flexibility",
      "Enhance focus during training",
      "Improve muscle recovery time",
      "Reduce exercise-related soreness",
      "Support better mobility and range of motion",
      "Promote better endurance and stamina"
    ]
  },
  {
    id: "beauty",
    name: "Beauty & Cosmetics",
    icon: <Sparkles className="h-5 w-5" />,
    color: "purple",
    benefits: [
      "Reduce skin inflammation and redness",
      "Support natural collagen production",
      "Balance oil production for clearer skin",
      "Help protect against environmental damage",
      "Improve skin hydration and elasticity",
      "Minimize appearance of fine lines and wrinkles",
      "Support skin barrier function",
      "Promote a more even skin tone"
    ]
  },
  {
    id: "hybrid",
    name: "Hybrid & Mushrooms",
    icon: <DropletIcon className="h-5 w-5" />,
    color: "amber",
    benefits: [
      "Support cognitive function and clarity",
      "Enhance immune system response",
      "Promote cellular health and vitality",
      "Aid in stress adaptation and resilience",
      "Support long-term brain health",
      "Improve energy and natural vitality",
      "Promote better stress management",
      "Support memory and focus"
    ]
  },
  {
    id: "pet",
    name: "Pet CBD",
    icon: <PawPrint className="h-5 w-5" />,
    color: "orange",
    benefits: [
      "Ease anxiety during stressful situations",
      "Support joint health in aging pets",
      "Help promote calm behavior",
      "Maintain overall pet wellness",
      "Reduce age-related discomfort",
      "Support healthy skin and coat",
      "Aid in noise sensitivity and phobias",
      "Promote better digestive health"
    ]
  }
]

// Updated Science of CBD conditions
const cbdConditions = [
  {
    id: "anxiety",
    title: "Anxiety & Stress",
    icon: <Brain />,
    shortDesc: "May regulate mood and reduce anxiety symptoms",
    content: "CBD may interact with serotonin receptors in the brain, potentially helping to regulate mood and reduce symptoms of anxiety and stress. Studies have shown CBD might positively impact how your brain's receptors respond to serotonin.",
    color: "green",
    imageUrl: "/images/benefits/anxiety.jpg",
    pillars: ["Calming effect", "Stress reduction", "Mental clarity", "Improved relaxation", "Better stress response"]
  },
  {
    id: "pain",
    title: "Pain & Inflammation",
    icon: <Activity />,
    shortDesc: "Anti-inflammatory properties for pain relief",
    content: "CBD has anti-inflammatory properties and may influence endocannabinoid receptor activity, potentially reducing inflammation and interacting with neurotransmitters to alleviate chronic pain. This could be beneficial for conditions like arthritis and multiple sclerosis.",
    color: "blue",
    imageUrl: "/images/benefits/pain.jpg",
    pillars: ["Inflammation reduction", "Pain management", "Joint support", "Muscle recovery", "Nerve comfort"]
  },
  {
    id: "sleep",
    title: "Sleep & Insomnia",
    icon: <Moon />,
    shortDesc: "May improve sleep quality and duration",
    content: "By addressing underlying causes of sleep issues like anxiety or pain, CBD may help improve sleep quality and duration. Some studies suggest CBD might affect sleep cycles directly, potentially increasing overall sleep time and improving insomnia symptoms.",
    color: "purple",
    imageUrl: "/images/benefits/sleep.jpg",
    pillars: ["Better sleep quality", "Easier to fall asleep", "More restful nights", "Consistent sleep cycles", "Wake feeling refreshed"]
  },
  {
    id: "focus",
    title: "Focus & Cognitive Function",
    icon: <Zap />,
    shortDesc: "Potential neuroprotective properties",
    content: "Research suggests CBD may have neuroprotective properties that could support brain health and cognitive function. By reducing inflammation and oxidative stress in the brain, CBD might help improve focus and clarity.",
    color: "amber",
    imageUrl: "/images/benefits/focus.jpg",
    pillars: ["Mental clarity", "Brain health", "Better focus", "Improved concentration", "Cognitive support"]
  },
  {
    id: "mood",
    title: "Depression & Mood",
    icon: <Heart />,
    shortDesc: "Potential antidepressant-like effects",
    content: "CBD may influence how your brain's chemical receptors respond to serotonin that's already present in your system. Some studies indicate CBD could have antidepressant-like effects, potentially helping to stabilize mood and improve overall well-being.",
    color: "orange",
    imageUrl: "/images/benefits/mood.jpg",
    pillars: ["Mood stabilization", "Emotional balance", "Sense of well-being", "Improved outlook", "Stress resilience"]
  },
  {
    id: "digestive",
    title: "Digestive Health",
    icon: <ShieldCheck />,
    shortDesc: "May support gut health and reduce inflammation",
    content: "CBD may help support digestive health by interacting with cannabinoid receptors in the digestive tract. Studies suggest it could reduce inflammation in the gut, potentially easing symptoms of digestive disorders and supporting a healthy gut microbiome.",
    color: "green",
    imageUrl: "/images/benefits/digestive.jpg",
    pillars: ["Gut health", "Reduced irritation", "Better digestion", "Appetite regulation", "Microbiome support"]
  },
  {
    id: "skin",
    title: "Skin & Topical Benefits",
    icon: <Sparkles />,
    shortDesc: "Anti-inflammatory and antioxidant properties",
    content: "When applied topically, CBD can work with the endocannabinoid receptors in your skin to help reduce inflammation, balance oil production, and support skin health. Research indicates CBD's antioxidant properties may also help protect against environmental damage and support collagen production.",
    color: "purple",
    imageUrl: "/images/benefits/skin.jpg",
    pillars: ["Anti-Aging", "Acne Control", "Skin Recovery", "Radiant Glow", "Balanced Oil Production"]
  },
  {
    id: "pet",
    title: "Pet Health & Wellness",
    icon: <PawPrint />,
    shortDesc: "Support for pets' overall wellbeing",
    content: "CBD interacts with pets' endocannabinoid systems similarly to humans. Research suggests it may help manage anxiety, reduce discomfort, and support mobility in aging pets. The non-psychoactive nature of CBD makes it safe for pets when properly dosed.",
    color: "orange",
    imageUrl: "/images/benefits/pet.jpg",
    pillars: ["Anxiety relief", "Joint support", "Calm behavior", "Overall wellness", "Improved comfort"]
  },
  {
    id: "recovery",
    title: "Recovery & Muscle Relief",
    icon: <Activity />,
    shortDesc: "May aid post-workout recovery",
    content: "CBD may help accelerate recovery by reducing inflammation in muscles and joints after intense physical activity. Its potential anti-inflammatory properties could help minimize soreness and speed up the body's natural healing process.",
    color: "blue",
    imageUrl: "/images/benefits/recovery.jpg",
    pillars: ["Faster recovery", "Reduced soreness", "Better mobility", "Post-workout support", "Inflammation control"]
  },
  {
    id: "performance",
    title: "Performance & Endurance",
    icon: <Zap />,
    shortDesc: "May support athletic performance",
    content: "By potentially reducing performance anxiety and helping manage pre-competition stress, CBD might contribute to better sports performance. Some athletes report improved focus and endurance when using CBD as part of their training regimen.",
    color: "blue",
    imageUrl: "/images/benefits/performance.jpg",
    pillars: ["Better focus", "Stress management", "Improved endurance", "Pre-workout support", "Mental clarity"]
  },
  {
    id: "anti-aging",
    title: "Anti-Aging & Longevity",
    icon: <Sparkles />,
    shortDesc: "Antioxidant and nourishing properties",
    content: "CBD's antioxidant properties may help combat free radicals that contribute to skin aging. When incorporated into skincare, it may help reduce the appearance of fine lines and support skin elasticity and firmness for a more youthful appearance.",
    color: "purple",
    imageUrl: "/images/benefits/anti-aging.jpg",
    pillars: ["Wrinkle reduction", "Skin elasticity", "Collagen support", "Antioxidant protection", "Radiant complexion"]
  },
  {
    id: "hair-scalp",
    title: "Hair & Scalp Health",
    icon: <Sparkles />,
    shortDesc: "May support scalp health and hair growth",
    content: "CBD may help create a healthier environment for hair growth by soothing the scalp, reducing inflammation, and balancing oil production. Its moisturizing properties can help strengthen hair follicles and potentially reduce hair loss related to inflammation.",
    color: "purple",
    imageUrl: "/images/benefits/hair-scalp.jpg",
    pillars: ["Scalp soothing", "Hair strengthening", "Oil balance", "Reduced irritation", "Healthier follicles"]
  },
  {
    id: "immunity",
    title: "Immune Support",
    icon: <ShieldCheck />,
    shortDesc: "May help regulate immune response",
    content: "Research suggests CBD may have immunomodulatory effects that could help balance the immune system. By potentially reducing excessive inflammation, CBD might contribute to a more balanced immune response and overall immune health.",
    color: "amber",
    imageUrl: "/images/benefits/immunity.jpg",
    pillars: ["Balanced response", "Inflammation control", "Stress reduction", "Cellular support", "Antioxidant properties"]
  },
  {
    id: "energy",
    title: "Energy & Vitality",
    icon: <Zap />,
    shortDesc: "May support natural energy levels",
    content: "By potentially improving sleep quality and reducing anxiety, CBD might indirectly support better natural energy levels throughout the day. Some users report feeling more balanced energy without the crashes associated with stimulants.",
    color: "amber",
    imageUrl: "/images/benefits/energy.jpg",
    pillars: ["Sustainable energy", "Better focus", "Reduced fatigue", "Natural balance", "Mental clarity"]
  },
  {
    id: "pet-anxiety",
    title: "Pet Anxiety & Stress",
    icon: <PawPrint />,
    shortDesc: "May help calm nervous pets",
    content: "CBD may help manage anxiety in pets during stressful situations like thunderstorms, fireworks, or separation. It interacts with their endocannabinoid system to potentially promote a sense of calm without sedating effects.",
    color: "orange",
    imageUrl: "/images/benefits/pet-anxiety.jpg",
    pillars: ["Noise sensitivity help", "Calmer behavior", "Reduced stress", "Travel comfort", "Separation support"]
  },
  {
    id: "pet-mobility",
    title: "Pet Mobility & Joints",
    icon: <PawPrint />,
    shortDesc: "May support aging pets' joint health",
    content: "As pets age, CBD may help support better mobility and comfort by potentially reducing joint inflammation and discomfort. Many pet owners report their senior pets show improved activity levels and comfort when using CBD products.",
    color: "orange",
    imageUrl: "/images/benefits/pet-mobility.jpg",
    pillars: ["Joint support", "Easier movement", "Senior pet care", "Active lifestyle", "Comfort improvement"]
  },
  {
    id: "pet-wellness",
    title: "Pet Overall Wellness",
    icon: <PawPrint />,
    shortDesc: "Support for pets' general health",
    content: "CBD may contribute to your pet's overall wellness by supporting multiple body systems simultaneously. From healthy skin and coat to digestive comfort and immune function, CBD's balancing properties may benefit pets of all ages.",
    color: "orange",
    imageUrl: "/images/benefits/pet-wellness.jpg",
    pillars: ["Digestive support", "Skin & coat health", "Balanced behavior", "General vitality", "Overall comfort"]
  },
  {
    id: "pet-digestion",
    title: "Pet Digestive Health",
    icon: <PawPrint />,
    shortDesc: "Support for pet digestive comfort",
    content: "CBD may help support your pet's digestive system by interacting with cannabinoid receptors in their gut. Many pet owners report improvements in digestive issues, including reduced upset stomach and better overall digestive comfort.",
    color: "orange",
    imageUrl: "/images/benefits/pet-digestion.jpg",
    pillars: ["Digestive comfort", "Reduced sensitivity", "Better appetite", "Regular function", "Less digestive upset"]
  }
]

// Core facts about CBD
const cbdFacts = [
  {
    title: "Endocannabinoid System",
    icon: <Microscope className="h-5 w-5" />,
    description: "CBD works with your body's endocannabinoid system, which helps regulate many vital functions including sleep, mood, pain, and immune response."
  },
  {
    title: "Non-Psychoactive",
    icon: <Brain className="h-5 w-5" />,
    description: "Unlike THC, CBD doesn't cause a 'high' or alter your mental state, making it ideal for daily wellness without impairing function."
  },
  {
    title: "Natural Source",
    icon: <Leaf className="h-5 w-5" />,
    description: "Our CBD is extracted from premium hemp plants using clean CO2 extraction methods to preserve natural compounds and terpenes."
  },
  {
    title: "Third-Party Tested",
    icon: <Award className="h-5 w-5" />,
    description: "All our products undergo rigorous third-party lab testing to ensure purity, potency, and safety, with results available to view."
  }
]

// Custom icon component with color control
const BenefitIcon = ({ icon, className, color }: { icon: React.ReactNode, className?: string, color: string }) => {
  const colorClasses = {
    green: "bg-gradient-to-br from-green-500 to-green-600",
    blue: "bg-gradient-to-br from-blue-500 to-blue-600",
    purple: "bg-gradient-to-br from-purple-500 to-purple-600",
    amber: "bg-gradient-to-br from-amber-600 to-amber-700",
    orange: "bg-gradient-to-br from-orange-500 to-orange-600",
  }
  
  return (
    <div className={cn(
      "rounded-full p-2 text-white shadow-md flex items-center justify-center", 
      colorClasses[color as keyof typeof colorClasses],
      className
    )}>
      {React.cloneElement(icon as React.ReactElement, { className: "h-5 w-5" })}
    </div>
  )
}

// Add product recommendations based on conditions
const conditionProducts = {
  anxiety: {
    id: "cbd-calm-capsules",
    name: "CBD Calm Capsules",
    description: "Our CBD Calm Capsules deliver a precise dose of CBD combined with calming adaptogens to help you manage stress and maintain focus throughout your day.",
    price: 64.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Promotes calm without drowsiness", "Supports mental clarity", "Helps manage stress", "Supports mood balance"],
    rating: 4.6,
    reviewCount: 84
  },
  pain: {
    id: "cbd-recovery-balm",
    name: "CBD Recovery Balm",
    description: "This powerful recovery balm delivers targeted relief to sore muscles and joints with a potent combination of CBD, arnica, and menthol for cooling comfort.",
    price: 54.99,
    discountPrice: 49.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Targets muscle soreness", "Soothes joint discomfort", "Cooling sensation", "Absorbs quickly"],
    rating: 4.9,
    reviewCount: 156
  },
  sleep: {
    id: "cbd-sleep-gummies",
    name: "CBD Sleep Gummies",
    description: "Our CBD Sleep Gummies combine premium CBD with melatonin and calming herbs to promote restful sleep and help you wake up refreshed.",
    price: 49.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Promotes faster sleep onset", "Supports deeper sleep", "Helps regulate sleep cycles", "Non-habit forming"],
    rating: 4.7,
    reviewCount: 203
  },
  focus: {
    id: "cbd-sport-drops",
    name: "CBD Sport Performance Drops",
    description: "Formulated specifically for athletes, our Sport Performance Drops combine CBD with BCAAs and electrolytes to support recovery, endurance and optimal performance.",
    price: 74.99,
    discountPrice: 64.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Supports muscle recovery", "Enhances endurance", "Helps maintain focus", "Promotes joint mobility"],
    rating: 4.7,
    reviewCount: 118
  },
  mood: {
    id: "cbd-wellness-drops",
    name: "CBD Wellness Drops",
    description: "Our CBD Wellness Drops combine premium CBD with essential vitamins and adaptogens for a daily wellness boost that supports your body's natural balance.",
    price: 69.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Supports overall wellness", "Enhances daily energy", "Promotes immune function", "Helps maintain mental clarity"],
    rating: 4.6,
    reviewCount: 89
  },
  digestive: {
    id: "cbd-oil-full-spectrum",
    name: "Full Spectrum CBD Oil",
    description: "Our premium full-spectrum CBD oil is crafted from organically grown hemp plants, providing a complete profile of beneficial cannabinoids for maximum effectiveness.",
    price: 89.99,
    discountPrice: 79.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Promotes relaxation", "Supports healthy digestion", "Helps manage discomfort", "Supports overall wellness"],
    rating: 4.8,
    reviewCount: 124
  },
  skin: {
    id: "cbd-face-serum",
    name: "CBD Radiance Face Serum",
    description: "This luxurious face serum combines the power of CBD with hyaluronic acid and vitamin C to hydrate, brighten and rejuvenate your skin for a radiant complexion.",
    price: 79.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Hydrates and plumps skin", "Brightens complexion", "Reduces fine lines", "Calms redness and irritation"],
    rating: 4.8,
    reviewCount: 97
  },
  pet: {
    id: "cbd-pet-tincture",
    name: "CBD Pet Tincture",
    description: "Our specially formulated pet CBD tincture is designed with your furry friends in mind, providing gentle support for anxiety, joint discomfort, and overall wellness.",
    price: 59.99,
    discountPrice: 49.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Eases anxiety", "Supports joint health", "Promotes calm", "Easy to administer"],
    rating: 4.8,
    reviewCount: 112
  },
  recovery: {
    id: "cbd-recovery-cream",
    name: "CBD Muscle Recovery Cream",
    description: "This fast-absorbing recovery cream combines CBD with arnica, menthol and MSM to deliver targeted relief to sore muscles after intense workouts.",
    price: 59.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Fast-acting relief", "Cooling sensation", "Targets sore muscles", "No greasy residue"],
    rating: 4.8,
    reviewCount: 136
  },
  performance: {
    id: "cbd-performance-drops",
    name: "CBD Performance Drops",
    description: "Our specially formulated Performance Drops combine premium CBD with adaptogenic herbs to support focus, endurance and optimal athletic performance.",
    price: 79.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Pre-workout focus", "Improved stamina", "Clear thinking", "Fast absorption"],
    rating: 4.7,
    reviewCount: 89
  },
  "anti-aging": {
    id: "cbd-anti-aging-cream",
    name: "CBD Anti-Aging Cream",
    description: "This luxurious anti-aging formula harnesses the power of CBD with peptides and hyaluronic acid to reduce fine lines and restore skin's youthful appearance.",
    price: 89.99,
    discountPrice: 74.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Reduces fine lines", "Improves elasticity", "Deep hydration", "Brightens complexion"],
    rating: 4.9,
    reviewCount: 112
  },
  "hair-scalp": {
    id: "cbd-scalp-treatment",
    name: "CBD Scalp Treatment",
    description: "Our nourishing scalp treatment uses CBD to soothe irritation, balance oil production and create the optimal environment for healthy hair growth.",
    price: 64.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Soothes irritation", "Balances oil", "Strengthens follicles", "Promotes growth"],
    rating: 4.6,
    reviewCount: 74
  },
  immunity: {
    id: "cbd-immunity-drops",
    name: "CBD Immunity Drops",
    description: "Fortify your immune system with our potent blend of CBD, elderberry, zinc and vitamin C designed to support your body's natural defenses year-round.",
    price: 69.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Immune support", "Antioxidant rich", "Daily defense", "Natural ingredients"],
    rating: 4.7,
    reviewCount: 93
  },
  energy: {
    id: "cbd-energy-capsules",
    name: "CBD Energy Capsules",
    description: "Our innovative Energy Capsules combine CBD with B vitamins, adaptogens and natural caffeine for sustained energy without the crash or jitters.",
    price: 54.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Sustained energy", "No jitters", "Mental clarity", "Stress management"],
    rating: 4.8,
    reviewCount: 106
  },
  "pet-anxiety": {
    id: "pet-calming-treats",
    name: "Pet Calming Treats",
    description: "These delicious CBD-infused treats help pets stay calm during stressful situations like thunderstorms, fireworks, travel or separation anxiety.",
    price: 39.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Stress reduction", "Easy to administer", "No sedation", "Tasty formula"],
    rating: 4.9,
    reviewCount: 145
  },
  "pet-mobility": {
    id: "pet-joint-chews",
    name: "Pet Joint & Mobility Chews",
    description: "Support your aging pet's mobility with these CBD-infused soft chews containing glucosamine, chondroitin and MSM for comprehensive joint support.",
    price: 44.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Joint comfort", "Improved mobility", "Senior pet support", "Soft texture"],
    rating: 4.8,
    reviewCount: 128
  },
  "pet-wellness": {
    id: "pet-wellness-oil",
    name: "Pet Wellness CBD Oil",
    description: "Our premium pet wellness oil delivers the perfect daily dose of CBD to support your pet's overall health, from skin and coat to digestive comfort.",
    price: 54.99,
    discountPrice: 49.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Overall wellness", "Skin & coat health", "Digestive support", "All ages"],
    rating: 4.7,
    reviewCount: 116
  },
  "pet-digestion": {
    id: "pet-digest-support",
    name: "Pet Digestive Support Drops",
    description: "Our specialized CBD digestive formula helps maintain your pet's digestive health with a gentle blend of CBD, prebiotics, and digestive enzymes for optimal gut function.",
    price: 49.99,
    image: "/images/products/placeholder.jpg",
    benefits: ["Soothes digestive discomfort", "Promotes healthy digestion", "Supports microbiome", "Easy to administer"],
    rating: 4.7,
    reviewCount: 84
  }
}

// Organize conditions by category
const categoryConditions = {
  health: [
    "anxiety",
    "mood", 
    "sleep",
    "digestive",
    "pain"
  ],
  sport: [
    "pain", 
    "focus",
    "recovery",
    "performance",
    "energy"
  ],
  beauty: [
    "skin",
    "anti-aging",
    "hair-scalp",
    "immunity",
    "mood"
  ],
  hybrid: [
    "focus",
    "mood",
    "immunity",
    "energy",
    "sleep"
  ],
  pet: [
    "pet",
    "pet-anxiety",
    "pet-mobility",
    "pet-wellness",
    "pet-digestion"
  ]
}

// Map categories to display names and icons
const categoryInfo = {
  health: {
    name: "Health",
    icon: <Heart className="h-4 w-4" />,
    color: "green"
  },
  sport: {
    name: "Sport",
    icon: <Activity className="h-4 w-4" />,
    color: "blue"
  },
  beauty: {
    name: "Beauty",
    icon: <Sparkles className="h-4 w-4" />,
    color: "purple"
  },
  hybrid: {
    name: "Hybrid",
    icon: <DropletIcon className="h-4 w-4" />,
    color: "amber"
  },
  pet: {
    name: "Pet",
    icon: <PawPrint className="h-4 w-4" />,
    color: "orange"
  }
}

// Update the getCategoryStyle function with border-based styling
function getCategoryStyle(category: string) {
  switch (category) {
    case 'health':
      return 'border-2 border-green-500 text-green-600 hover:bg-green-50 data-[state=active]:bg-green-500 data-[state=active]:text-white';
    case 'sport':
      return 'border-2 border-blue-500 text-blue-600 hover:bg-blue-50 data-[state=active]:bg-blue-500 data-[state=active]:text-white';
    case 'beauty':
      return 'border-2 border-purple-500 text-purple-600 hover:bg-purple-50 data-[state=active]:bg-purple-500 data-[state=active]:text-white';
    case 'hybrid':
      return 'border-2 border-amber-600 text-amber-600 hover:bg-amber-50 data-[state=active]:bg-amber-600 data-[state=active]:text-white';
    case 'pet':
      return 'border-2 border-orange-500 text-orange-600 hover:bg-orange-50 data-[state=active]:bg-orange-500 data-[state=active]:text-white';
    default:
      return 'border-2 border-green-500 text-green-600 hover:bg-green-50 data-[state=active]:bg-green-500 data-[state=active]:text-white';
  }
}

export function CBDBenefits() {
  const [activeCategory, setActiveCategory] = useState<string>("wellness")
  const [selectedBenefit, setSelectedBenefit] = useState<{category: string, benefit: string, index: number} | null>(null)
  
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 }
    }
  }

  // Get current category data
  const currentCategory = categories.find(cat => cat.id === activeCategory) || categories[0]
  
  // Function to get a relevant condition for a benefit
  const getRelevantCondition = (categoryId: string, benefitText: string) => {
    // Find conditions that match this category
    const relevantConditionIds = categoryConditions[categoryId as keyof typeof categoryConditions] || [];
    const conditions = relevantConditionIds.map(id => cbdConditions.find(c => c.id === id)).filter(Boolean);
    
    // Simple keyword matching to find most relevant condition
    const keywords = benefitText.toLowerCase().split(' ');
    
    let bestMatch = conditions[0];
    let bestScore = 0;
    
    conditions.forEach(condition => {
      if (!condition) return;
      
      let score = 0;
      // Check title
      keywords.forEach(word => {
        if (condition.title.toLowerCase().includes(word)) score += 2;
        if (condition.shortDesc.toLowerCase().includes(word)) score += 1;
        // Check pillars for matches
        condition.pillars.forEach(pillar => {
          if (pillar.toLowerCase().includes(word)) score += 1;
        });
      });
      
      if (score > bestScore) {
        bestScore = score;
        bestMatch = condition;
      }
    });
    
    return bestMatch;
  };

  return (
    <section className="relative overflow-hidden py-16">
      {/* Emerald gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-emerald-100/40 to-emerald-50/90" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,#10b98120_50%,transparent_100%)]" />
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#10b981_0.5px,transparent_0.5px)] [background-size:18px_18px] opacity-10" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-emerald-400/5 to-emerald-300/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-bl from-emerald-400/10 to-emerald-300/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 max-w-3xl mx-auto"
        >
          <Badge className="px-3.5 py-1.5 rounded-full text-sm bg-gradient-to-r from-emerald-500 to-emerald-600 text-white flex items-center gap-1.5 mx-auto w-fit shadow-md">
            <Leaf className="w-3.5 h-3.5" />
            <span className="font-medium">CBD Benefits</span>
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4 bg-clip-text text-transparent bg-gradient-to-br from-emerald-800 via-emerald-600 to-emerald-800">
            Experience Natural Wellness
          </h2>
          
          <p className="text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
            Discover how our premium CBD products can enhance your daily wellness routine
            with targeted benefits for every aspect of your health and lifestyle.
          </p>
        </motion.div>
        
        {/* Category tabs */}
        <Tabs 
          defaultValue={activeCategory} 
          onValueChange={setActiveCategory}
          className="w-full max-w-4xl mx-auto mb-20"
        >
          <div className="flex justify-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-2.5 mb-12 border border-emerald-100">
              <div className="flex space-x-3">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`px-5 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2.5 transition-all duration-300 
                      ${activeCategory === category.id
                        ? `bg-${category.color}-500 text-white shadow-md ring-2 ring-${category.color}-400/40`
                        : `border border-${category.color}-200 text-gray-700 hover:border-${category.color}-300 hover:bg-${category.color}-50/40`
                      }`}
                  >
                    {React.cloneElement(category.icon as React.ReactElement, { 
                      className: `h-4 w-4 ${activeCategory === category.id ? 'text-white' : `text-${category.color}-500`}`
                    })}
                    <span>{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.h3 
                className="text-center text-xl font-medium text-gray-800 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Explore <span className={`text-${currentCategory.color}-600 font-semibold`}>{currentCategory.name}</span> CBD Benefits
              </motion.h3>
            </motion.div>
          
            <motion.div
              key={`${activeCategory}-grid`}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {currentCategory.benefits.slice(0, 8).map((benefit, index) => (
                <Dialog key={index}>
                  <DialogTrigger asChild>
                    <motion.div
                      variants={itemVariants}
                      className={cn(
                        "relative group overflow-hidden rounded-xl border-2 shadow-md cursor-pointer h-full",
                        "hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
                        `border-${currentCategory.color}-200 hover:border-${currentCategory.color}-400 bg-gradient-to-b from-white to-${currentCategory.color}-50/20`
                      )}
                      onClick={() => setSelectedBenefit({category: currentCategory.id, benefit, index})}
                    >
                      {/* Decorative elements */}
                      <div className={cn(
                        "absolute top-0 right-0 w-24 h-24 -mr-10 -mt-10 rounded-full opacity-10 transition-opacity duration-300 group-hover:opacity-20",
                        `bg-${currentCategory.color}-500`
                      )}/>
                      
                      <div className="p-5 md:p-6 flex flex-col h-full relative z-10">
                        <div className={cn(
                          "w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mb-4 transition-all duration-200 shadow-sm",
                          `bg-${currentCategory.color}-100 group-hover:bg-${currentCategory.color}-500 group-hover:shadow-lg group-hover:shadow-${currentCategory.color}-100/50`
                        )}>
                          <Check className={cn(
                            "w-6 h-6 transition-colors duration-200",
                            `text-${currentCategory.color}-600 group-hover:text-white`
                          )} />
                        </div>
                        
                        <h3 className="text-lg font-medium leading-tight text-gray-800 mb-2 group-hover:text-gray-900 transition-colors">{benefit}</h3>
                        
                        <div className="mt-auto flex items-center justify-between">
                          <div className={cn(
                            "flex items-center text-sm font-medium transition-all duration-200 gap-1",
                            `text-${currentCategory.color}-600 group-hover:text-${currentCategory.color}-700`
                          )}>
                            <span>Discover</span>
                            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                          </div>
                          
                          <div className={cn(
                            "h-8 w-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100",
                            `bg-${currentCategory.color}-100 text-${currentCategory.color}-600 group-hover:bg-${currentCategory.color}-500 group-hover:text-white`
                          )}>
                            <PlusCircle className="h-5 w-5" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Animated bar */}
                      <div className={cn(
                        "absolute bottom-0 left-0 right-0 h-1.5 transition-transform duration-500 transform origin-left scale-x-0 group-hover:scale-x-100",
                        `bg-${currentCategory.color}-500`
                      )} />
                    </motion.div>
                  </DialogTrigger>
                  
                  <DialogContent className="sm:max-w-[500px] bg-white dark:bg-gray-900 dark:border-gray-700">
                    {(() => {
                      const condition = getRelevantCondition(currentCategory.id, benefit);
                      if (!condition) return (
                        <>
                          <DialogHeader>
                            <DialogTitle className="text-xl">CBD Benefit</DialogTitle>
                            <DialogDescription className="text-base mt-2 dark:text-gray-300">
                              {benefit}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="py-4">
                            <p className="text-gray-600 dark:text-gray-400">Loading benefit details...</p>
                          </div>
                        </>
                      );
                      
                      return (
                        <>
                          <DialogHeader>
                            <div className="flex items-center gap-3">
                              <BenefitIcon 
                                icon={condition.icon} 
                                color={currentCategory.color} 
                              />
                              <DialogTitle className="text-xl">{condition.title}</DialogTitle>
                            </div>
                            <DialogDescription className="text-base mt-2 dark:text-gray-300">
                              {benefit}
                            </DialogDescription>
                          </DialogHeader>
                          
                          <div className="mt-4 space-y-5">
                            <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">How CBD Helps:</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{condition.content}</p>
                            </div>
                            
                            <div>
                              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Key Benefits:</h4>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {condition.pillars.map((pillar, i) => (
                                  <div key={i} className="flex items-center gap-2">
                                    <div className={cn(
                                      "rounded-full p-1",
                                      `bg-${currentCategory.color}-100 dark:bg-${currentCategory.color}-900/30`
                                    )}>
                                      <CheckCircle2 className={cn(
                                        "h-3.5 w-3.5",
                                        `text-${currentCategory.color}-500 dark:text-${currentCategory.color}-400`
                                      )} />
                                    </div>
                                    <span className="text-sm text-gray-600 dark:text-gray-400">{pillar}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            
                            {conditionProducts[condition.id] && (
                              <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                                <h4 className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-3">Recommended Product:</h4>
                                <div className="flex items-center gap-4 bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                                  <div className="relative w-16 h-16 bg-white dark:bg-gray-700 rounded-md p-1 shadow-sm">
                                    <Image
                                      src={conditionProducts[condition.id].image}
                                      alt={conditionProducts[condition.id].name}
                                      fill
                                      className="object-contain p-1"
                                    />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h5 className="font-medium text-sm text-gray-900 dark:text-gray-100 truncate">
                                      {conditionProducts[condition.id].name}
                                    </h5>
                                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                                      {conditionProducts[condition.id].benefits[0]}
                                    </p>
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                                        ${conditionProducts[condition.id].price.toFixed(2)}
                                      </span>
                                      <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                          <Star 
                                            key={i} 
                                            className={cn(
                                              "h-3 w-3",
                                              i < Math.floor(conditionProducts[condition.id].rating)
                                                ? "text-yellow-400 fill-yellow-400"
                                                : "text-gray-200 fill-gray-200 dark:text-gray-600 dark:fill-gray-600"
                                            )}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                          
                          <DialogFooter className="mt-4">
                            <Button asChild className={cn(
                              "w-full text-white",
                              `bg-${currentCategory.color}-600 hover:bg-${currentCategory.color}-700`
                            )}>
                              <Link href={`/shop/${condition.id}`}>
                                <ShoppingCart className="h-4 w-4 mr-2" />
                                Shop {condition.title} Products
                              </Link>
                            </Button>
                          </DialogFooter>
                        </>
                      );
                    })()}
                  </DialogContent>
                </Dialog>
              ))}
            </motion.div>
          </div>
          
          {/* Featured product for this category */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20 mx-auto max-w-4xl"
          >
            <div className="text-center mb-10">
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                Featured <span className={`text-${currentCategory.color}-600`}>{currentCategory.name}</span> Product
              </h3>
              <p className="text-gray-600 max-w-xl mx-auto">
                Our most popular solution designed specifically for {currentCategory.name.toLowerCase()} benefits
              </p>
            </div>
            
            <Card className={cn(
              "overflow-hidden shadow-xl group hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border-2 relative",
              `border-${currentCategory.color}-200 bg-white dark:bg-gray-900 dark:border-${currentCategory.color}-900`
            )}>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-transparent to-gray-50 dark:to-gray-800/50 rounded-full -mt-20 -mr-20 z-0"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-transparent to-gray-50 dark:to-gray-800/50 rounded-full -mb-20 -ml-20 z-0"></div>
              <div className={cn(
                "absolute top-6 right-6 w-24 h-24 rounded-full opacity-20",
                `bg-${currentCategory.color}-200 dark:bg-${currentCategory.color}-900/30 blur-xl`
              )}></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-8 relative z-10">
                <div className="relative flex items-center justify-center">
                  <div className={cn(
                    "relative w-56 h-56 rounded-2xl overflow-hidden bg-gradient-to-br shadow-md transition-all duration-500",
                    `from-${currentCategory.color}-50 to-white dark:from-${currentCategory.color}-950/30 dark:to-gray-900`
                  )}>
                    {/* Floating dots decoration */}
                    <div className="absolute w-full h-full">
                      <div className={cn(
                        "absolute top-5 left-5 w-3 h-3 rounded-full",
                        `bg-${currentCategory.color}-200 dark:bg-${currentCategory.color}-700 animate-pulse`
                      )} style={{ animationDuration: '3s' }}></div>
                      <div className={cn(
                        "absolute bottom-12 right-6 w-2 h-2 rounded-full",
                        `bg-${currentCategory.color}-300 dark:bg-${currentCategory.color}-600 animate-pulse`
                      )} style={{ animationDuration: '4s' }}></div>
                      <div className={cn(
                        "absolute top-1/2 right-8 w-4 h-4 rounded-full",
                        `bg-${currentCategory.color}-100 dark:bg-${currentCategory.color}-800 animate-pulse`
                      )} style={{ animationDuration: '5s' }}></div>
                    </div>
                    
                    <Image
                      src="/images/tincture2.png"
                      alt={`Premium ${currentCategory.name} CBD Formula`}
                      fill
                      className="object-contain p-3 transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
                    />
                  </div>
                  
                  {/* New label badge */}
                  <div className={cn(
                    "absolute -top-3 -left-3 z-10",
                    "bg-gradient-to-br from-yellow-400 to-amber-500 dark:from-yellow-500 dark:to-amber-600",
                    "text-white py-1.5 px-3 rounded-full text-xs font-bold shadow-lg",
                    "flex items-center gap-1 uppercase tracking-wider"
                  )}>
                    <Award className="h-3.5 w-3.5" />
                    <span>Best seller</span>
                  </div>
                  
                  {/* Discount badge */}
                  <div className={cn(
                    "absolute -bottom-3 -right-3 z-10",
                    `bg-${currentCategory.color}-500 dark:bg-${currentCategory.color}-600`,
                    "text-white py-1.5 px-3 rounded-full text-xs font-bold shadow-lg",
                  )}>
                    Save 16%
                  </div>
                </div>
                
                <div className="flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-yellow-400"
                            fill="currentColor"
                          />
                        ))}
                      </div>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">(124 reviews)</span>
                    </div>
                    
                    <div>
                      <h3 className={cn(
                        "font-semibold text-2xl text-gray-900 dark:text-gray-100",
                        `group-hover:text-${currentCategory.color}-600 dark:group-hover:text-${currentCategory.color}-400 transition-colors duration-300`
                      )}>
                        Premium {currentCategory.name} CBD Formula
                      </h3>
                      
                      <div className={cn(
                        "flex items-center gap-1.5 mt-1",
                        `text-${currentCategory.color}-600 dark:text-${currentCategory.color}-400`
                      )}>
                        <Badge variant="outline" className={cn(
                          `border-${currentCategory.color}-200 bg-${currentCategory.color}-50 text-${currentCategory.color}-700`,
                          `dark:border-${currentCategory.color}-900 dark:bg-${currentCategory.color}-950 dark:text-${currentCategory.color}-300`
                        )}>
                          30ml
                        </Badge>
                        <Badge variant="outline" className={cn(
                          `border-${currentCategory.color}-200 bg-${currentCategory.color}-50 text-${currentCategory.color}-700`,
                          `dark:border-${currentCategory.color}-900 dark:bg-${currentCategory.color}-950 dark:text-${currentCategory.color}-300`
                        )}>
                          1000mg CBD
                        </Badge>
                        <Badge variant="outline" className={cn(
                          `border-${currentCategory.color}-200 bg-${currentCategory.color}-50 text-${currentCategory.color}-700`,
                          `dark:border-${currentCategory.color}-900 dark:bg-${currentCategory.color}-950 dark:text-${currentCategory.color}-300`
                        )}>
                          Full Spectrum
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Specially formulated for {currentCategory.name.toLowerCase()} benefits, combining premium hemp extract with targeted botanicals for maximum effectiveness.
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300">Key Benefits:</h4>
                      <ul className="grid grid-cols-1 gap-1.5">
                        {["Fast-acting formula", "Organic ingredients", "Third-party tested", "Easy to use"].map((benefit, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className={cn(
                              "rounded-full p-0.5 flex-shrink-0",
                              `text-${currentCategory.color}-600 dark:text-${currentCategory.color}-400`
                            )}>
                              <CheckCircle2 className="h-4 w-4" />
                            </div>
                            <span className="text-sm text-gray-600 dark:text-gray-400">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex flex-col space-y-4">
                    <div className="flex items-end justify-between">
                      <div className="flex flex-col">
                        <span className="text-sm text-gray-500 dark:text-gray-400 line-through">$59.99</span>
                        <div className="flex items-center gap-2">
                          <p className={cn(
                            "font-bold text-2xl",
                            `text-${currentCategory.color}-700 dark:text-${currentCategory.color}-500`
                          )}>$49.99</p>
                          <Badge className="bg-red-500 text-white">Save $10</Badge>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Free shipping</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">30-day satisfaction guarantee</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Button className={cn(
                        "flex-1 text-white shadow-md transition-all duration-300 group-hover:shadow-lg",
                        `bg-${currentCategory.color}-600 hover:bg-${currentCategory.color}-700 group-hover:shadow-${currentCategory.color}-300/20`
                      )}>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </Button>
                      
                      <Button variant="outline" className={cn(
                        "border transition-colors",
                        `border-${currentCategory.color}-200 text-${currentCategory.color}-700 hover:bg-${currentCategory.color}-50`,
                        `dark:border-${currentCategory.color}-800 dark:text-${currentCategory.color}-400 dark:hover:bg-${currentCategory.color}-950/50`
                      )}>
                        View Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
          
          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col items-center justify-center mt-12"
          >
            <div className={cn(
              "relative group overflow-hidden rounded-full shadow-lg transition-all duration-500",
              "border bg-white hover:shadow-xl",
              `border-${currentCategory.color}-200 hover:border-${currentCategory.color}-300`
            )}>
              <div className={cn(
                "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                `bg-gradient-to-r from-${currentCategory.color}-50 via-transparent to-${currentCategory.color}-50`
              )}/>
              <Link 
                href={`/${currentCategory.id}`}
                className={cn(
                  "relative z-10 inline-flex items-center text-base font-medium transition-all duration-200 px-8 py-4",
                  `text-${currentCategory.color}-700 hover:text-${currentCategory.color}-800`
                )}
              >
                <span>View all {currentCategory.name} products</span>
                <ArrowRight className={cn(
                  "ml-2 h-5 w-5 transition-transform duration-300", 
                  "group-hover:translate-x-1"
                )} />
              </Link>
            </div>
            
            <p className="text-sm text-gray-500 mt-5 max-w-sm text-center">
              Explore our full collection of premium {currentCategory.name.toLowerCase()} CBD products, backed by third-party testing and 100% satisfaction guarantee.
            </p>
          </motion.div>
        </Tabs>
      </div>
    </section>
  )
}