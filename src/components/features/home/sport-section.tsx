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
const sportProducts = [
  {
    name: "Recovery Blend CBD Oil",
    strength: "2000mg CBD",
    image: "/images/tincture.png",
    price: "$69.99",
    rating: 4.9,
    reviews: 142,
    description: "Fast-acting formula designed for post-workout recovery"
  },
  {
    name: "Muscle Relief CBD Oil",
    strength: "1500mg CBD",
    image: "/images/tincture.png",
    price: "$59.99",
    rating: 4.8,
    reviews: 118,
    description: "Targeted relief for sore muscles and joint discomfort"
  },
  {
    name: "Performance CBD Oil",
    strength: "1000mg CBD",
    image: "/images/tincture.png",
    price: "$49.99",
    rating: 4.7,
    reviews: 96,
    description: "Balanced formula to support athletic performance and focus"
  },
  {
    name: "Joint Support CBD Oil",
    strength: "750mg CBD",
    image: "/images/tincture.png",
    price: "$44.99",
    rating: 4.6,
    reviews: 87,
    description: "Enhanced with glucosamine for optimal joint health"
  },
  {
    name: "Pre-Workout CBD Oil",
    strength: "500mg CBD",
    image: "/images/tincture.png",
    price: "$39.99",
    rating: 4.5,
    reviews: 74,
    description: "Energizing blend to prepare your body for intense workouts"
  }
]

export function Sport() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-3 text-center mb-10">
          <Badge className="bg-red-500 text-white hover:bg-red-600 px-4 py-1 rounded-full text-xs">
            Sport & Recovery
          </Badge>
          <h2 className="text-3xl font-bold md:text-4xl tracking-tight text-red-900">
            Performance & Recovery CBD
          </h2>
          <p className="text-red-700 max-w-2xl mx-auto mt-2">
            Our sport collection is specially formulated to support athletic performance, enhance recovery, and provide targeted relief for active lifestyles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {sportProducts.slice(0, 3).map((product, index) => (
            <Card key={index} className="group overflow-hidden border border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-md">
              <CardContent className="p-0">
                <div className="relative">
                  <AspectRatio ratio={1} className="bg-red-50">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6"
                    />
                    <div className="absolute top-2 right-2">
                      <Badge className="bg-red-500 text-white">{product.strength}</Badge>
                    </div>
                  </AspectRatio>
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-lg text-red-900">{product.name}</h3>
                  <p className="text-sm text-red-700 mt-1">{product.description}</p>
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
                <Button variant="outline" className="w-full border-red-200 text-red-700 hover:bg-red-50">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <InfiniteSlider gap={16} className="w-full py-6 mb-8">
          {sportProducts.map((product, index) => (
            <div key={`slider-${index}`} className="relative group w-[220px]">
              <AspectRatio ratio={1} className="bg-white rounded-xl border border-red-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-red-800/20 to-transparent rounded-xl opacity-80 transition-opacity duration-300" />
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
          <Button asChild size="lg" className="bg-red-500 hover:bg-red-600">
            <Link href="/sport">
              Explore Sport Collection <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
} 