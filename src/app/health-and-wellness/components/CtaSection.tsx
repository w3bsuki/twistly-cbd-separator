'use client'

import React from 'react'
import Image from 'next/image'
import { ShoppingCart, Bot } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'

interface CtaSectionProps {
  pageTheme: {
    gradients: {
      cta: string;
    };
  }
}

export function CtaSection({ pageTheme }: CtaSectionProps) {
  return (
    <section className="py-8 relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Simple background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-60 h-60 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <div className="absolute top-1/4 left-1/3 w-1/2 h-1/2 bg-green-400/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-1/3 h-2/3 bg-green-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute top-1/3 right-0 w-1/4 h-1/4 bg-green-600/5 rounded-full blur-3xl -z-10"></div>
      
      <Container>
        <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl shadow-md p-5 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-green-50/40 via-transparent to-green-100/30 z-0"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-5">
              <div className="inline-flex bg-gradient-to-br from-green-50/80 to-white rounded-full border border-green-200/40 shadow-sm p-1.5">
                <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-2 rounded-full shadow-md flex items-center gap-2 font-medium">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Take Action</span>
                </div>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-2">Ready to Experience the Benefits?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto mb-4 text-sm">
                Try our premium CBD products for your health and wellness needs
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50/70 to-white rounded-xl border border-green-200/40 shadow-sm p-3 overflow-hidden relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-green-100/30 via-transparent to-transparent z-0"></div>
              
              <div className={`bg-gradient-to-r ${pageTheme.gradients.cta} rounded-xl p-6 md:p-8 shadow-lg relative z-10`}>
                <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-green-400/20 via-transparent to-transparent opacity-50"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center relative z-10">
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-white mb-3">Start Your Wellness Journey Today</h2>
                    <p className="text-green-100 text-sm mb-4">
                      Experience the natural benefits of our premium CBD products for your health and wellness needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <div className="inline-flex bg-white/10 rounded-full p-1">
                        <Button className="bg-white text-green-800 hover:bg-green-50 text-sm rounded-full px-5">
                          Shop Health Collection
                          <ShoppingCart className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      <div className="inline-flex bg-white/10 rounded-full p-1">
                        <Button variant="outline" className="border-white text-white hover:bg-green-700/80 text-sm rounded-full px-4">
                          Ask Our AI Expert
                          <Bot className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center relative">
                    <div className="absolute inset-0 bg-white/10 rounded-full blur-3xl transform scale-100 opacity-70"></div>
                    <div className="absolute inset-0 bg-green-300/10 rounded-full blur-2xl transform scale-75 animate-pulse"></div>
                    <div className="relative h-[200px] w-[200px] p-4 bg-white/10 rounded-full backdrop-blur-sm">
                      <Image
                        src="/images/tincture2.png"
                        alt="CBD Wellness Products"
                        fill
                        className="object-contain p-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 