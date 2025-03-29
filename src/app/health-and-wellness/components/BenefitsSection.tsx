'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Moon, Brain, Activity, Leaf, Shield, ChevronRight, Sparkles, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { cbdBenefits } from '../data/benefits'

export function BenefitsSection() {
  // Function to get the correct icon component based on name
  const getIconByName = (iconName: string, className?: string) => {
    switch (iconName) {
      case 'heart':
        return <Heart className={className || "h-4.5 w-4.5"} />;
      case 'moon':
        return <Moon className={className || "h-4.5 w-4.5"} />;
      case 'brain':
        return <Brain className={className || "h-4.5 w-4.5"} />;
      case 'activity':
        return <Activity className={className || "h-4.5 w-4.5"} />;
      case 'leaf':
        return <Leaf className={className || "h-4.5 w-4.5"} />;
      case 'shield':
        return <Shield className={className || "h-4.5 w-4.5"} />;
      default:
        return <Heart className={className || "h-4.5 w-4.5"} />;
    }
  };
  
  return (
    <section 
      className={`py-5 relative overflow-hidden bg-gradient-to-b from-green-50 to-white`}
      id="cbd-benefits"
    >
      {/* Simple background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-60 h-60 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-emerald-50 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl shadow-md p-5 overflow-hidden">
          <div className="text-center mb-4">
            <Badge variant="outline" className="border-green-300 text-green-700 font-semibold bg-white px-5 py-2 text-sm">
              <Sparkles className="h-5 w-5 mr-1.5" />
              <span>CBD Benefits</span>
            </Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-2">How CBD Supports Your Health</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4 text-sm md:text-base leading-relaxed">
              Discover the numerous ways CBD can benefit your daily wellness routine and support your body's natural systems
            </p>
          </div>
          
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-3"
          >
            {cbdBenefits.map((benefit, index) => {
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`rounded-lg border border-green-200/40 h-full shadow-md p-4 flex`}
                  style={{
                    backgroundImage: 'linear-gradient(to bottom right, rgba(240, 253, 244, 0.5), rgba(255, 255, 255, 0.95))'
                  }}
                >
                  <Card 
                    className="h-full border-l-[3px] border-green-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-200 w-full flex flex-col hover:bg-green-50/30"
                    style={{
                      background: 'linear-gradient(to bottom right, white, #f0fdf4)'
                    }}
                  >
                    <CardContent className="p-3 flex flex-col h-full items-center text-center">
                      <div className={`h-10 w-10 rounded-full bg-green-100 flex items-center justify-center shrink-0 shadow-sm mb-3`}>
                        <div className="text-green-600">
                          {getIconByName(benefit.iconName, "h-5 w-5")}
                        </div>
                      </div>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{benefit.description}</p>
                      
                      <div className="mt-auto w-full">
                        <div className="h-px w-full bg-gradient-to-r from-green-200/40 via-green-100 to-green-200/40 my-2"></div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full justify-center px-2 py-1 text-green-600 border-green-200 hover:bg-green-100 hover:text-green-700 hover:border-green-300"
                          asChild
                        >
                          <a href="#featured-products" className="flex items-center justify-center text-xs">
                            View related products
                            <ChevronRight className="h-3 w-3 ml-1" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
          
          <div className="flex justify-center pt-4 border-t border-green-100">
            <div className="bg-gradient-to-br from-green-50/80 to-white rounded-full border border-green-200/40 shadow-sm p-2">
              <Button 
                size="lg" 
                className="bg-green-600 text-white hover:bg-green-700 rounded-full shadow-md transition-colors flex items-center"
                asChild
              >
                <a href="/blog/cbd-benefits" className="flex items-center text-sm">
                  Learn more about CBD benefits
                  <ArrowRight className="ml-1.5 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 