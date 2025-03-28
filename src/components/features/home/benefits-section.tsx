'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Dumbbell, Sparkles, Leaf, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

export function CBDBenefits() {
  const [activeTab, setActiveTab] = useState("health");

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div>
            <Badge className="mb-4 px-3 py-1 bg-green-50 text-green-700 border-green-200">
              Discover CBD Benefits
            </Badge>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            CBD for Every Need
          </h2>
          
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Explore how our premium CBD products can enhance different aspects of your life,
            from supporting your active lifestyle to improving your everyday wellness.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Tabs defaultValue="health" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
              <TabsTrigger value="health" className={cn(
                "flex items-center gap-2 py-3 px-4 transition-all duration-200",
                activeTab === "health" ? "bg-green-100 text-green-800" : "text-green-600"
              )}>
                <Heart className="w-5 h-5" />
                <span className="hidden md:inline">Health & Wellness</span>
                <span className="md:hidden">Health</span>
              </TabsTrigger>
              
              <TabsTrigger value="sport" className={cn(
                "flex items-center gap-2 py-3 px-4 transition-all duration-200",
                activeTab === "sport" ? "bg-blue-100 text-blue-800" : "text-blue-600"
              )}>
                <Dumbbell className="w-5 h-5" />
                <span className="hidden md:inline">Sport & Recovery</span>
                <span className="md:hidden">Sport</span>
              </TabsTrigger>
              
              <TabsTrigger value="beauty" className={cn(
                "flex items-center gap-2 py-3 px-4 transition-all duration-200",
                activeTab === "beauty" ? "bg-purple-100 text-purple-800" : "text-purple-600"
              )}>
                <Sparkles className="w-5 h-5" />
                <span className="hidden md:inline">Beauty & Skincare</span>
                <span className="md:hidden">Beauty</span>
              </TabsTrigger>
              
              <TabsTrigger value="hybrid" className={cn(
                "flex items-center gap-2 py-3 px-4 transition-all duration-200",
                activeTab === "hybrid" ? "bg-amber-100 text-amber-800" : "text-amber-600"
              )}>
                <Leaf className="w-5 h-5" />
                <span className="hidden md:inline">Hybrid Solutions</span>
                <span className="md:hidden">Hybrid</span>
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="health" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-6 text-white md:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                        <Heart className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold">Health & Wellness</h3>
                    </div>
                    <p className="mb-6 text-white/90">
                      CBD may help maintain balance in your body's systems, supporting overall wellness.
                    </p>
                    <Button asChild variant="secondary" className="gap-1 bg-white/10 hover:bg-white/20 text-white border-0">
                      <Link href="/health">
                        Explore Health <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="p-6 md:w-2/3">
                    <h4 className="font-medium text-lg mb-4">Key Benefits:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                        <span>May reduce everyday stress and promote a sense of calm</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                        <span>Could support healthy sleep cycles and improve sleep quality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                        <span>May help maintain balanced mood and emotional wellbeing</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                        <span>Supports the body's natural inflammatory response</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-green-600 flex-shrink-0" />
                        <span>May contribute to overall immune system function</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="sport" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 text-white md:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                        <Dumbbell className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold">Sport & Recovery</h3>
                    </div>
                    <p className="mb-6 text-white/90">
                      Enhance your physical performance and recovery with targeted CBD products.
                    </p>
                    <Button asChild variant="secondary" className="gap-1 bg-white/10 hover:bg-white/20 text-white border-0">
                      <Link href="/sport">
                        Explore Sport <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="p-6 md:w-2/3">
                    <h4 className="font-medium text-lg mb-4">Key Benefits:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span>May accelerate post-workout recovery time</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span>Could help reduce exercise-induced inflammation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span>Supports muscle relaxation after intense training</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span>May improve focus during athletic performance</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-blue-600 flex-shrink-0" />
                        <span>Helps maintain joint mobility and flexibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="beauty" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-6 text-white md:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold">Beauty & Skincare</h3>
                    </div>
                    <p className="mb-6 text-white/90">
                      Experience the potential of CBD to support healthy, radiant skin.
                    </p>
                    <Button asChild variant="secondary" className="gap-1 bg-white/10 hover:bg-white/20 text-white border-0">
                      <Link href="/beauty">
                        Explore Beauty <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="p-6 md:w-2/3">
                    <h4 className="font-medium text-lg mb-4">Key Benefits:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-purple-600 flex-shrink-0" />
                        <span>May help soothe irritated skin and reduce redness</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-purple-600 flex-shrink-0" />
                        <span>Helps balance oil production for clearer complexion</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-purple-600 flex-shrink-0" />
                        <span>Provides antioxidant properties to fight free radicals</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-purple-600 flex-shrink-0" />
                        <span>Supports skin's natural repair processes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-purple-600 flex-shrink-0" />
                        <span>May reduce the appearance of temporary skin issues</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="hybrid" className="mt-0 focus-visible:outline-none focus-visible:ring-0">
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-gradient-to-br from-amber-500 to-amber-600 p-6 text-white md:w-1/3">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center">
                        <Leaf className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold">Hybrid Solutions</h3>
                    </div>
                    <p className="mb-6 text-white/90">
                      Multi-purpose formulations designed to address several needs at once.
                    </p>
                    <Button asChild variant="secondary" className="gap-1 bg-white/10 hover:bg-white/20 text-white border-0">
                      <Link href="/hybrid">
                        Explore Hybrid <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                  
                  <div className="p-6 md:w-2/3">
                    <h4 className="font-medium text-lg mb-4">Key Benefits:</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-amber-600 flex-shrink-0" />
                        <span>All-in-one formulations addressing multiple needs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-amber-600 flex-shrink-0" />
                        <span>Perfect for those seeking comprehensive benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-amber-600 flex-shrink-0" />
                        <span>Combines targeted ingredients for enhanced effects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-amber-600 flex-shrink-0" />
                        <span>Simplified routines with fewer products needed</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="w-5 h-5 mt-0.5 text-amber-600 flex-shrink-0" />
                        <span>Balanced formulations for overall wellness</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div>
            <Button asChild size="lg" className="gap-2 bg-green-600 hover:bg-green-700">
              <Link href="/shop">
                Shop All CBD Products <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
          
          <div>
            <Button asChild variant="outline" size="lg" className="gap-2 border-green-200 text-green-700 hover:bg-green-50">
              <Link href="/learn">
                Learn More About CBD <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 