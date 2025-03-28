'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Moon, Brain, Activity, Leaf, Shield, ChevronRight, Sparkles, ArrowRight } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { cbdBenefits } from '../data/benefits'

interface BenefitsSectionProps {
  pageTheme: {
    gradients: {
      section: string;
    };
    colors: {
      accent: string;
      accentHover: string;
      border: string;
    };
  }
}

export function BenefitsSection({ pageTheme }: BenefitsSectionProps) {
  // Function to get the correct icon component based on name
  const getIconByName = (iconName: string, className?: string) => {
    switch (iconName) {
      case 'heart':
        return <Heart className={className || "h-5 w-5"} />;
      case 'moon':
        return <Moon className={className || "h-5 w-5"} />;
      case 'brain':
        return <Brain className={className || "h-5 w-5"} />;
      case 'activity':
        return <Activity className={className || "h-5 w-5"} />;
      case 'leaf':
        return <Leaf className={className || "h-5 w-5"} />;
      case 'shield':
        return <Shield className={className || "h-5 w-5"} />;
      default:
        return <Heart className={className || "h-5 w-5"} />;
    }
  };
  
  return (
    <section 
      className={`py-6 relative overflow-hidden bg-gradient-to-b from-green-50 to-white`} 
      id="cbd-benefits"
    >
      {/* Simple background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-60 h-60 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-green-50 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl shadow-md p-4 overflow-hidden">
          <div className="text-center mb-4">
            <div className="inline-flex bg-gradient-to-br from-green-50/80 to-white rounded-full border border-green-200/40 shadow-sm p-1">
              <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-1.5 rounded-full shadow-md flex items-center gap-1.5 font-medium">
                <Sparkles className="h-3.5 w-3.5" />
                <span>CBD Benefits</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-2">How CBD Supports Your Health</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4 text-sm md:text-base leading-relaxed">
              Discover the numerous ways CBD can benefit your daily wellness routine and support your body's natural systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {cbdBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="h-full"
              >
                {/* Outer container with gradient and border */}
                <div 
                  className={`bg-gradient-to-br rounded-lg border border-opacity-40 h-full shadow-sm p-2 flex`}
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, ${
                      benefit.color === 'bg-green-50' ? 'rgba(240, 253, 244, 0.5)' : 
                      benefit.color === 'bg-green-100' ? 'rgba(222, 247, 236, 0.5)' : 
                      benefit.color === 'bg-green-200' ? 'rgba(187, 247, 208, 0.4)' : 
                      'rgba(240, 253, 244, 0.5)'
                    }, rgba(255, 255, 255, 0.95))`,
                    borderColor: benefit.color === 'bg-green-50' ? 'rgba(134, 239, 172, 0.4)' : 
                      benefit.color === 'bg-green-100' ? 'rgba(110, 231, 183, 0.4)' : 
                      benefit.color === 'bg-green-200' ? 'rgba(74, 222, 128, 0.4)' : 
                      'rgba(134, 239, 172, 0.4)'
                  }}
                >
                  <Card className={`h-full border-l-[3px] ${benefit.borderColor} rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 w-full flex flex-col`} 
                    style={{
                      background: `linear-gradient(to bottom right, white, ${
                        benefit.color === 'bg-green-50' ? '#f0fdf4' : 
                        benefit.color === 'bg-green-100' ? '#dcfce7' : 
                        benefit.color === 'bg-green-200' ? '#bbf7d0' : 
                        '#f0fdf4'
                      })`
                    }}
                  >
                    <CardContent className="p-3 flex flex-col h-full">
                      <div className="flex items-start gap-2.5 mb-2">
                        <div className={`h-9 w-9 rounded-full ${benefit.color} flex items-center justify-center shrink-0 shadow-sm`} 
                        >
                          <div className={benefit.iconColor}>
                            {getIconByName(benefit.iconName, "h-4.5 w-4.5")}
                          </div>
                        </div>
                        
                        <div>
                          <h3 className="text-sm font-bold text-gray-900 mb-0.5">{benefit.title}</h3>
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-gray-500">
                              <span className={`font-medium ${benefit.iconColor}`}>{benefit.stats.satisfaction}</span> satisfaction
                            </span>
                            <span className="mx-1 text-gray-300">•</span>
                            <span className="text-xs text-gray-500">
                              <span className={`font-medium ${benefit.iconColor}`}>{benefit.stats.timeToEffect}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-xs mb-2 flex-grow h-[4rem] overflow-hidden">{benefit.description}</p>
                      
                      <div className="mt-auto">
                        <div className="h-px w-full bg-gradient-to-r from-green-200/40 via-green-100 to-green-200/40 my-1.5"></div>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className={`w-full justify-between px-1 py-1 ${benefit.iconColor} hover:bg-opacity-10 ${benefit.hoverColor}`}
                          asChild
                        >
                          <a href="#featured-products" className="flex items-center text-xs">
                            View related products
                            <ChevronRight className="h-3 w-3 ml-1" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-4 pt-3 border-t border-green-100">
            <div className="bg-gradient-to-br from-green-50/80 to-white rounded-full border border-green-200/40 shadow-sm p-1 px-2">
              <Button 
                variant="outline" 
                size="sm"
                className="border-green-200/80 text-green-700 hover:bg-green-50 hover:text-green-800 rounded-full px-2.5 py-1.5"
                asChild
              >
                <a href="/blog/cbd-benefits" className="flex items-center">
                  Learn more about CBD benefits
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 