'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/common/ui/badge"
import { Button } from "@/components/common/ui/button"
import { InfiniteSlider } from "@/components/common/ui/infinite-slider"
import { AspectRatio } from "@/components/common/ui/aspect-ratio"
import { ArrowRight, Star } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/common/ui/card"

// Updated with local image paths and more product details
const healthProducts = [
  {
    name: "Full Spectrum CBD Oil",
    strength: "1000mg CBD",
    image: "/images/tincture.png",
    price: "$49.99",
    rating: 4.8,
    reviews: 124,
    description: "Our premium full-spectrum CBD oil for daily wellness support"
  },
  {
    name: "Broad Spectrum CBD Oil",
    strength: "750mg CBD",
    image: "/images/tincture.png",
    price: "$39.99",
    rating: 4.7,
    reviews: 98,
    description: "THC-free broad spectrum formula for balanced wellness"
  },
  {
    name: "Sleep CBD Formula",
    strength: "1500mg CBD",
    image: "/images/tincture.png",
    price: "$59.99",
    rating: 4.9,
    reviews: 156,
    description: "Enhanced with melatonin and CBN for better sleep quality"
  },
  {
    name: "Wellness Plus CBD",
    strength: "2000mg CBD",
    image: "/images/tincture.png",
    price: "$79.99",
    rating: 4.8,
    reviews: 87,
    description: "Our highest potency formula for maximum therapeutic benefits"
  },
  {
    name: "Daily Wellness CBD",
    strength: "500mg CBD",
    image: "/images/tincture.png",
    price: "$29.99",
    rating: 4.6,
    reviews: 112,
    description: "Perfect starter strength for CBD beginners"
  }
]

export function HealthAndWellness() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-3 text-center mb-10">
          <Badge className="bg-green-500 text-white hover:bg-green-600 px-4 py-1 rounded-full text-xs">
            Health & Wellness
          </Badge>
          <h2 className="text-3xl font-bold md:text-4xl tracking-tight text-green-900">
            Premium CBD for Daily Wellness
          </h2>
          <p className="text-green-700 max-w-2xl mx-auto mt-2">
            Our health and wellness collection features premium CBD oils designed to support your daily wellness routine and promote balance in body and mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {healthProducts.slice(0, 3).map((product, index) => (
            <Card key={index} className="group overflow-hidden border border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-md">
              <CardContent className="p-0">
                <div className="relative">
                  <AspectRatio ratio={1} className="bg-green-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-green-500 text-white">{product.strength}</Badge>
                    </div>
                  </AspectRatio>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg text-green-900">{product.name}</h3>
                  <p className="text-sm text-green-700 mt-1">{product.description}</p>
                  <div className="flex items-center mt-2">
                    <p className="font-bold text-lg">{product.price}</p>
                    <div className="ml-auto flex items-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm ml-1">{product.rating}</span>
                      <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full border-green-200 text-green-700 hover:bg-green-50">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <InfiniteSlider gap={16} reverse className="w-full py-6 mb-8">
          {healthProducts.map((product, index) => (
            <div key={`slider-${index}`} className="relative group w-[220px]">
              <AspectRatio ratio={1} className="bg-white rounded-xl border border-green-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/60 via-green-800/20 to-transparent rounded-xl opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 text-left">
                  <p className="text-white text-sm font-medium leading-tight">{product.name}</p>
                  <Badge variant="outline" className="mt-1 text-[10px] bg-white/10 text-white border-white/20">
                    {product.strength}
                  </Badge>
                </div>
              </AspectRatio>
            </div>
          ))}
        </InfiniteSlider>

        <div className="flex justify-center mt-8">
          <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
            <Link href="/health">
              Explore Health Collection <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 