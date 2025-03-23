'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Badge } from '@/components/common/ui/badge'
import { Button } from '@/components/common/ui/button'
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem
} from '@/components/common/ui/carousel'

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

// Simple product card for the carousel
function SimpleProductCard({ name, concentration }: { name: string, concentration: string }) {
  return (
    <div className="relative w-full h-full bg-blue-600 rounded-lg overflow-hidden flex flex-col justify-end p-4 text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-blue-600/30" />
      <div className="relative z-10">
        <h3 className="font-medium text-lg mb-1">{name}</h3>
        <p className="text-sm text-white/80">{concentration}</p>
      </div>
    </div>
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
  
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 relative">
        <div className="flex flex-col items-center text-center mb-8">
          <Badge 
            className="px-4 py-1 text-sm bg-green-500 text-white border-0 mb-4"
          >
            Featured Collection
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            {title}
          </h2>
        </div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {productTypes.map((product, index) => (
              <CarouselItem key={index} className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
                <div className="aspect-square">
                  <SimpleProductCard name={product.name} concentration={product.concentration} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        
        <div className="flex justify-center mt-8">
          <Link href={href}>
            <Button className="rounded-md bg-green-500 hover:bg-green-600 text-white px-8 py-2">
              Explore Collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export function FeaturedCollections() {
  return (
    <div className="bg-white">
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