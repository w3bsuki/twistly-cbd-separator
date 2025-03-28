'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from '@/components/ui/carousel'

interface FeaturedCollectionProps {
  title: string
  category: 'health' | 'beauty' | 'sport' | 'hybrid'
  href: string
}

const collections: FeaturedCollectionProps[] = [
  {
    title: "Health & Wellness CBD",
    category: "health",
    href: "/health"
  },
  {
    title: "Sport & Recovery CBD",
    category: "sport",
    href: "/sport"
  },
  {
    title: "Beauty & Skincare CBD",
    category: "beauty",
    href: "/beauty"
  }
]

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1,
      duration: 0.5
    } 
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 300, 
      damping: 24,
      duration: 0.4 
    }
  }
}

// Simple product card for the carousel
function SimpleProductCard({ name, concentration, category }: { name: string, concentration: string, category: string }) {
  // Set background color based on category
  const getBgColor = () => {
    switch(category) {
      case 'sport':
        return "bg-blue-600";
      case 'beauty':
        return "bg-purple-600";
      case 'health':
      default:
        return "bg-green-600";
    }
  };

  // Set gradient colors based on category
  const getGradientColors = () => {
    switch(category) {
      case 'sport':
        return "bg-gradient-to-t from-blue-900/80 to-blue-600/30";
      case 'beauty':
        return "bg-gradient-to-t from-purple-900/80 to-pink-600/30";
      case 'health':
      default:
        return "bg-gradient-to-t from-green-900/80 to-green-600/30";
    }
  };

  return (
    <motion.div 
      className={`relative w-full h-full ${getBgColor()} rounded-lg overflow-hidden flex flex-col justify-end p-3 text-white`}
      variants={itemVariants}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`absolute inset-0 ${getGradientColors()}`} />
      <div className="relative z-10">
        <h3 className="font-medium text-base mb-0.5">{name}</h3>
        <p className="text-xs text-white/80">{concentration}</p>
      </div>
    </motion.div>
  )
}

export function FeaturedCollection({ title, category, href }: FeaturedCollectionProps) {
  // Create simplified product data for the carousel
  const productTypes = [
    { name: "Full Spectrum", concentration: "1000mg CBD" },
    { name: "Broad Spectrum", concentration: "750mg CBD" },
    { name: "Sleep CBD", concentration: "500mg CBD" },
    { name: "Wellness Plus", concentration: "500mg CBD" },
    { name: "Daily Wellness", concentration: "250mg CBD" },
    { name: "Full Spectrum", concentration: "1000mg CBD" },
    { name: "Broad Spectrum", concentration: "750mg CBD" },
    { name: "Sleep CBD", concentration: "500mg CBD" }
  ]

  // Set badge color based on category
  const getBadgeColor = () => {
    switch(category) {
      case 'sport':
        return "bg-blue-600";
      case 'beauty':
        return "bg-purple-600";
      case 'health':
      default:
        return "bg-green-600";
    }
  };
  
  return (
    <section className="py-8 relative overflow-hidden">
      <motion.div 
        className="container mx-auto max-w-7xl px-4 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center text-center mb-4">
          <motion.div variants={itemVariants}>
            <Badge 
              className={`px-3 py-1 text-xs ${getBadgeColor()} text-white border-0 mb-2`}
            >
              Featured Collection
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-2xl md:text-3xl font-bold mb-4"
            variants={itemVariants}
          >
            {title}
          </motion.h2>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {productTypes.map((product, index) => (
              <CarouselItem key={index} className="pl-2 basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6">
                <div className="aspect-square">
                  <SimpleProductCard name={product.name} concentration={product.concentration} category={category} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <motion.div 
          className="flex justify-center mt-4"
          variants={itemVariants}
        >
          <Link href={href}>
            <Button 
              className={`rounded-full text-white px-6 py-2 text-sm shadow-md ${
                category === 'health' ? 'bg-green-600 hover:bg-green-700' :
                category === 'sport' ? 'bg-blue-600 hover:bg-blue-700' :
                category === 'beauty' ? 'bg-purple-600 hover:bg-purple-700' :
                'bg-stone-600 hover:bg-stone-700'
              }`}
              asChild
            >
              <motion.div
                className="flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-5 h-5">
                  <Image 
                    src="/images/2.png"
                    alt="Twistly Icon" 
                    width={20}
                    height={20}
                    className="object-contain"
                  />
                </div>
                <Separator orientation="vertical" className="h-4 bg-white/30" />
                Explore Collection
                <ArrowRight className="ml-1 h-3.5 w-3.5" />
              </motion.div>
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export function FeaturedCollections() {
  return (
    <div className="bg-white space-y-4">
      {collections.map((collection, index) => (
        <FeaturedCollection
          key={index}
          title={collection.title}
          category={collection.category}
          href={collection.href}
        />
      ))}
    </div>
  )
} 