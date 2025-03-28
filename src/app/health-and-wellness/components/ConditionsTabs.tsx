'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Heart, Activity, Bot, Beaker, Check, Leaf, Shield, CheckCircle, Brain, Zap, Moon, Clock, ShoppingCart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Container } from '@/components/ui/container'
import { commonConditions } from '../data/conditions'
import Link from 'next/link'

interface ConditionsTabsProps {
  pageTheme: {
    colors: {
      accent: string;
      accentHover: string;
      border: string;
    };
  }
}

// Function to get the icon component based on the icon name
const getIconByName = (iconName: string) => {
  switch (iconName) {
    case 'brain':
      return <Brain className="h-4 w-4" />;
    case 'activity':
      return <Activity className="h-4 w-4" />;
    case 'zap':
      return <Zap className="h-4 w-4" />;
    case 'heart':
      return <Heart className="h-4 w-4" />;
    case 'moon':
      return <Moon className="h-4 w-4" />;
    default:
      return <Activity className="h-4 w-4" />;
  }
};

export function ConditionsTabs({ pageTheme }: ConditionsTabsProps) {
  return (
    <section className="py-8 relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Simple background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-60 h-60 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <Container>
        <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl shadow-md p-5 overflow-hidden">
          <div className="text-center mb-5">
            <div className="inline-flex bg-gradient-to-br from-green-50/80 to-white rounded-full border border-green-200/40 shadow-sm p-1.5">
              <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-2 rounded-full shadow-md flex items-center gap-2 font-medium">
                <Activity className="h-4 w-4" />
                <span>Health Applications</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-2">Common Conditions CBD May Support</h2>
            <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-4">
              Research suggests CBD may help support various health conditions through its interaction with the endocannabinoid system
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50/70 to-white rounded-xl border border-green-200/40 shadow-sm p-3 overflow-hidden">
            <Tabs defaultValue={commonConditions[0].id} className="w-full">
              <div className="overflow-x-auto pb-2 mb-4">
                <TabsList className="h-auto bg-gradient-to-r from-green-50 to-green-100 p-1.5 rounded-lg border border-green-200 shadow-sm w-full flex justify-between">
                  {commonConditions.map((condition) => (
                    <TabsTrigger
                      key={condition.id} 
                      value={condition.id}
                      className="flex-1 rounded-md data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-sm px-4 py-2.5 transition-all duration-200"
                    >
                      <div className="flex items-center whitespace-nowrap justify-center">
                        <span className="font-medium text-sm">{condition.name}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {commonConditions.map((condition) => (
                <TabsContent 
                  key={condition.id} 
                  value={condition.id}
                  className="focus:outline-none mt-0"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    {/* Card 1: Overview & Benefits - Simplified */}
                    <div className="bg-gradient-to-br from-green-50/60 to-white rounded-lg border border-green-200/40 shadow-sm p-3 flex flex-col h-full">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <div className="p-1 rounded-full bg-green-100">
                          {getIconByName(condition.iconName)}
                        </div>
                        {condition.name}
                      </h3>
                      
                      <div className="bg-white rounded-lg border border-green-100 p-3 mb-3 flex-grow">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {condition.description}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="bg-green-50/70 px-3 py-2 rounded-md border border-green-100 flex flex-col">
                          <span className="text-xs text-green-800">Relief Rate</span>
                          <span className="text-base font-semibold text-green-700">85%</span>
                        </div>
                        
                        <div className="bg-green-50/70 px-3 py-2 rounded-md border border-green-100 flex flex-col">
                          <span className="text-xs text-green-800">Results in</span>
                          <span className="text-base font-semibold text-green-700">2-4 weeks</span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg border border-green-100 p-3 mb-3 min-h-[106px]">
                        <h4 className="text-sm font-medium text-gray-800 mb-2 flex items-center gap-1.5">
                          <Shield className="h-3.5 w-3.5 text-green-700" />
                          <span>Key Benefits</span>
                        </h4>
                        <ul className="space-y-1">
                          <li className="flex items-start gap-2">
                            <div className="min-w-[18px] h-[18px] rounded-full bg-green-100 flex items-center justify-center text-[10px] font-bold text-green-700 mt-0.5">1</div>
                            <span className="text-xs text-gray-700">Targets CB1/CB2 receptors in the endocannabinoid system</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="min-w-[18px] h-[18px] rounded-full bg-green-100 flex items-center justify-center text-[10px] font-bold text-green-700 mt-0.5">2</div>
                            <span className="text-xs text-gray-700">May help regulate symptom intensity and frequency</span>
                          </li>
                        </ul>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-green-200 text-green-700 hover:bg-green-50 mt-auto"
                      >
                        <Bot className="mr-1.5 h-3.5 w-3.5" />
                        Ask Dr. Twistly
                      </Button>
                    </div>
                    
                    {/* Card 2: Dosage Info - Simplified */}
                    <div className="bg-gradient-to-br from-amber-50/60 to-white rounded-lg border border-amber-200/40 shadow-sm p-3 flex flex-col h-full">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <div className="p-1 rounded-full bg-amber-100">
                          <Activity className="h-4 w-4 text-amber-700" />
                        </div>
                        Recommended Dosage
                      </h3>
                      
                      <div className="bg-white rounded-lg border border-amber-100 p-3 mb-3 flex-grow">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {condition.dosage}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 mb-3">
                        <div className="bg-amber-50/70 px-3 py-2 rounded-md border border-amber-100 flex flex-col">
                          <span className="text-xs text-amber-800">Starting Dose</span>
                          <span className="text-base font-semibold text-amber-700">10mg</span>
                        </div>
                        
                        <div className="bg-amber-50/70 px-3 py-2 rounded-md border border-amber-100 flex flex-col">
                          <span className="text-xs text-amber-800">Moderate</span>
                          <span className="text-base font-semibold text-amber-700">25-50mg</span>
                        </div>
                      </div>
                      
                      <div className="bg-white rounded-lg border border-amber-100 p-3 mb-3 min-h-[106px]">
                        <h4 className="text-sm font-medium text-gray-800 mb-2">Administration Tips</h4>
                        <ul className="space-y-1">
                          <li className="flex items-start gap-2">
                            <div className="min-w-[18px] h-[18px] rounded-full bg-amber-100 flex items-center justify-center text-[10px] font-bold text-amber-700 mt-0.5">1</div>
                            <span className="text-xs text-gray-700">Start with a low dose and increase gradually</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <div className="min-w-[18px] h-[18px] rounded-full bg-amber-100 flex items-center justify-center text-[10px] font-bold text-amber-700 mt-0.5">2</div>
                            <span className="text-xs text-gray-700">Take consistently at the same times daily</span>
                          </li>
                        </ul>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-amber-200 text-amber-700 hover:bg-amber-50 mt-auto"
                      >
                        <Activity className="mr-1.5 h-3.5 w-3.5" />
                        Dosage Calculator
                      </Button>
                    </div>
                    
                    {/* Card 3: Products - Simplified */}
                    <div className="bg-gradient-to-br from-blue-50/60 to-white rounded-lg border border-blue-200/40 shadow-sm p-3 flex flex-col h-full">
                      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <div className="p-1 rounded-full bg-blue-100">
                          <Beaker className="h-4 w-4 text-blue-700" />
                        </div>
                        Recommended Products
                      </h3>
                      
                      <div className="space-y-2 mb-3 flex-grow">
                        {typeof condition.products[0] === 'string' 
                          ? condition.products.slice(0, 3).map((product, index) => (
                            <div key={index} className="flex items-center gap-3 bg-white rounded-lg border border-blue-100 p-3">
                              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                                <ShoppingCart className="h-4 w-4 text-blue-700" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-gray-900 text-sm">{product}</h4>
                                <p className="text-xs text-gray-500 truncate">Recommended for {condition.name}</p>
                              </div>
                              <Badge className="bg-blue-100 text-blue-700 border-none">
                                CBD
                              </Badge>
                            </div>
                          ))
                          : condition.products.slice(0, 3).map((product: any, index: number) => (
                            <div key={index} className="flex items-center gap-3 bg-white rounded-lg border border-blue-100 p-3">
                              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                                <ShoppingCart className="h-4 w-4 text-blue-700" />
                              </div>
                              <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-gray-900 text-sm">{product.name}</h4>
                                <p className="text-xs text-gray-500 truncate">Recommended for {condition.name}</p>
                              </div>
                              <Badge className="bg-blue-100 text-blue-700 border-none">
                                {product.type}
                              </Badge>
                            </div>
                          ))
                        }
                      </div>
                      
                      <div className="bg-white rounded-lg border border-blue-100 p-3 mb-3 min-h-[106px]">
                        <h4 className="text-sm font-medium text-gray-800 mb-2 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <Beaker className="h-3.5 w-3.5 text-blue-700" />
                            <span>Research Highlight</span>
                          </div>
                          <Button 
                            variant="link" 
                            size="sm" 
                            className="p-0 h-5 text-blue-600 justify-start font-normal"
                            asChild
                          >
                            <Link href="#" className="flex items-center text-xs">
                              Read full research
                              <ArrowRight className="ml-1 h-2.5 w-2.5" />
                            </Link>
                          </Button>
                        </h4>
                        <p className="text-xs text-gray-700">
                          {condition.research && condition.research.length > 150 
                            ? condition.research.substring(0, 150) + '...' 
                            : condition.research}
                        </p>
                      </div>
                      
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 mt-auto"
                        asChild
                      >
                        <Link href="#featured-products" className="flex items-center justify-center">
                          View All Products
                          <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
          
          <div className="flex justify-center mt-5 pt-4 border-t border-green-100">
            <div className="bg-gradient-to-br from-green-50/80 to-white rounded-full border border-green-200/40 shadow-sm p-1 px-2">
              <Button 
                variant="outline" 
                size="sm"
                className="border-green-200/80 text-green-700 hover:bg-green-50 rounded-full"
                asChild
              >
                <Link href="/blog/cbd-research">
                  Learn more about CBD research
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 