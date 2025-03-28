'use client'

import React, { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { faqItems } from '../data/faq'
import { HelpCircle, Send, Brain, Loader2 } from 'lucide-react'

interface FaqSectionProps {
  pageTheme: {
    colors: {
      accent: string;
      accentHover: string;
      border: string;
    };
  }
}

export function FaqSection({ pageTheme }: FaqSectionProps) {
  const [aiInputFocused, setAiInputFocused] = useState(false);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAskAi = () => {
    if (!query.trim()) return;
    
    setIsLoading(true);
    
    // Simulate AI response delay
    setTimeout(() => {
      // Find a relevant FAQ match based on the query
      const relevantFaq = faqItems.find(item => 
        item.question.toLowerCase().includes(query.toLowerCase()) || 
        item.answer.toLowerCase().includes(query.toLowerCase())
      );
      
      if (relevantFaq) {
        // Simulate opening the accordion item
        const index = faqItems.indexOf(relevantFaq);
        const accordionItem = document.querySelector(`[data-value="item-${index}"]`);
        if (accordionItem) {
          accordionItem.setAttribute('data-state', 'open');
          accordionItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
      
      setQuery('');
      setIsLoading(false);
    }, 1200);
  };
  
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
                <HelpCircle className="h-4 w-4" />
                <span>Common Questions</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-2">Frequently Asked Questions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4 text-sm">
              Find answers to common questions about CBD and our health products
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50/70 to-white rounded-xl border border-green-200/40 shadow-sm p-3 overflow-hidden">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`} 
                    className={`border ${pageTheme.colors.border} rounded-lg overflow-hidden shadow-sm bg-white`}
                  >
                    <AccordionTrigger className="px-4 py-3 hover:no-underline data-[state=open]:bg-green-50/50 hover:bg-green-50/30 group transition-colors">
                      <div className="flex items-start gap-2 text-left">
                        <div className="mt-0.5 flex-shrink-0 h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                          <HelpCircle className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="font-medium text-gray-900 group-hover:text-green-700 group-data-[state=open]:text-green-700">
                          {item.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-4 pt-1 text-gray-600 data-[state=open]:bg-green-50/30">
                      <div className="flex gap-2">
                        <div className="flex-shrink-0 w-5"></div>
                        <div className="text-sm leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-green-100/50 rounded-xl border border-green-200/40 shadow-sm">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-white shadow-sm flex items-center justify-center border border-green-200">
                  <HelpCircle className="h-5 w-5 text-green-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-medium text-gray-900">Still have Questions?</h3>
                  <p className="text-sm text-gray-600">We are here to help</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <div className="relative w-full sm:w-64">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 text-green-600 animate-spin" />
                    ) : (
                      <Brain className={`h-4 w-4 ${aiInputFocused ? 'text-green-600' : 'text-green-500/70'} transition-colors duration-300`} />
                    )}
                  </div>
                  <input 
                    type="text" 
                    placeholder="Ask our AI assistant..." 
                    className={`w-full pl-10 pr-10 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/40 transition-all duration-300 ${
                      aiInputFocused 
                        ? 'border-green-400 bg-green-50/50 shadow-sm' 
                        : 'border-green-200 bg-white'
                    }`}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onFocus={() => setAiInputFocused(true)}
                    onBlur={() => setAiInputFocused(false)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !isLoading) {
                        handleAskAi();
                      }
                    }}
                    disabled={isLoading}
                  />
                  <button 
                    className={`absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 flex items-center justify-center rounded-full transition-all duration-300 ${
                      aiInputFocused 
                        ? 'bg-green-500 text-white shadow-sm hover:bg-green-600' 
                        : 'bg-green-100 text-green-600 hover:bg-green-200'
                    } ${isLoading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    onClick={handleAskAi}
                    disabled={isLoading || !query.trim()}
                  >
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
                <a 
                  href="/contact" 
                  className="px-5 py-2.5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg shadow-sm hover:shadow-md transition-all hover:translate-y-[-1px] font-medium text-sm whitespace-nowrap"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 