'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Heart, Dumbbell, Sparkles, Leaf, ArrowRight, Check } from 'lucide-react';
import { Badge } from '@/components/common/ui/badge';
import { Button } from '@/components/common/ui/button';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/common/ui/card';
import { motion } from 'framer-motion';

const categories = [
  {
    id: "health",
    title: "Health & Wellness",
    icon: <Heart className="w-7 h-7 text-green-600" />,
    description: "CBD solutions for overall wellbeing, stress relief, and better sleep.",
    benefits: [
      "Reduce everyday stress and promote calm",
      "Support healthy sleep cycles",
      "Balance mood and emotional wellbeing",
      "Support natural inflammatory response",
      "Contribute to overall immune function"
    ],
    color: "border-green-200 hover:border-green-300",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    href: "/health",
    btnClass: "bg-green-600 hover:bg-green-700"
  },
  {
    id: "sport",
    title: "Sport & Recovery",
    icon: <Dumbbell className="w-7 h-7 text-blue-600" />,
    description: "Products designed for active lifestyles, muscle recovery, and performance.",
    benefits: [
      "Accelerate post-workout recovery time",
      "Reduce exercise-induced inflammation",
      "Support muscle relaxation after training",
      "Improve focus during athletic performance",
      "Maintain joint mobility and flexibility"
    ],
    color: "border-blue-200 hover:border-blue-300",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    href: "/sport",
    btnClass: "bg-blue-600 hover:bg-blue-700"
  },
  {
    id: "beauty",
    title: "Beauty & Skincare",
    icon: <Sparkles className="w-7 h-7 text-purple-600" />,
    description: "CBD-infused skincare for radiant complexion and healthy appearance.",
    benefits: [
      "Soothe irritated skin and reduce redness",
      "Balance oil production for clearer skin",
      "Provide antioxidant protection",
      "Support skin's natural repair processes",
      "Reduce temporary skin issues"
    ],
    color: "border-purple-200 hover:border-purple-300",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    href: "/beauty",
    btnClass: "bg-purple-600 hover:bg-purple-700"
  },
  {
    id: "hybrid",
    title: "Hybrid Solutions",
    icon: <Leaf className="w-7 h-7 text-amber-600" />,
    description: "Multi-purpose formulations addressing several wellness needs at once.",
    benefits: [
      "All-in-one formulations for multiple needs",
      "Perfect for comprehensive benefits",
      "Combined ingredients for enhanced effects",
      "Simplified routines with fewer products",
      "Balanced formulations for overall wellness"
    ],
    color: "border-amber-200 hover:border-amber-300",
    bgColor: "bg-amber-50",
    textColor: "text-amber-700",
    href: "/hybrid",
    btnClass: "bg-amber-600 hover:bg-amber-700"
  }
];

export function CategoryCards() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 px-3 py-1 bg-blue-50 text-blue-700 border-blue-200">
            Category Guide
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Find Your Perfect CBD Match
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-10">
            Explore our specialized categories to find products perfectly suited to your unique needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <Card 
              key={category.id} 
              className={`border-2 shadow-sm transition-all duration-300 ${category.color} h-full overflow-hidden`}
            >
              <div className={`${category.bgColor} px-6 py-4 border-b ${category.color}`}>
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/70 w-12 h-12 rounded-full flex items-center justify-center">
                    {category.icon}
                  </div>
                  <CardTitle className="text-2xl">{category.title}</CardTitle>
                </div>
              </div>
              
              <CardContent className="pt-6 pb-4">
                <CardDescription className="text-gray-700 text-base mb-6">
                  {category.description}
                </CardDescription>
                
                <h4 className={`font-medium text-lg mb-4 ${category.textColor}`}>Key Benefits:</h4>
                <ul className="space-y-3 mb-6">
                  {category.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className={`w-5 h-5 mt-0.5 ${category.textColor} flex-shrink-0`} />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter className="bg-gray-50 border-t pt-4 pb-4">
                <Button asChild className={`w-full ${category.btnClass} rounded-md shadow-md`}>
                  <Link href={category.href} className="flex items-center justify-center gap-2">
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
                    <span>Explore {category.title.split('&')[0].trim()}</span>
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
} 