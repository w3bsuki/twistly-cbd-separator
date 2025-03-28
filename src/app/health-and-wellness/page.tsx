'use client'

import React from 'react'
import { HeroSection } from './components/HeroSection'
import { BenefitsSection } from './components/BenefitsSection'
import { FeaturedProducts } from './components/FeaturedProducts'
import { ConditionsTabs } from './components/ConditionsTabs'
import { CbdIngredientsSection } from './components/CbdIngredientsSection'
import { FaqSection } from './components/FaqSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { CtaSection } from './components/CtaSection'
import { pageTheme } from './utils/theme'
import { Separator } from '@/components/ui/separator'
// For future use: import { AiChatHero } from '@/components/AiChatHero'

export default function HealthAndWellnessPage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection pageTheme={pageTheme} />
      <Separator className="mx-auto max-w-7xl" />
      <BenefitsSection pageTheme={pageTheme} />
      <Separator className="mx-auto max-w-7xl" />
      <FeaturedProducts pageTheme={pageTheme} />
      <Separator className="mx-auto max-w-7xl" />
      <ConditionsTabs pageTheme={pageTheme} />
      <Separator className="mx-auto max-w-7xl" />
      <CbdIngredientsSection pageTheme={pageTheme} />
      <Separator className="mx-auto max-w-7xl" />
      <FaqSection pageTheme={pageTheme} />
      <Separator className="mx-auto max-w-7xl" />
      <TestimonialsSection pageTheme={pageTheme} />
      <Separator className="mx-auto max-w-7xl" />
      <CtaSection pageTheme={pageTheme} />
      
      {/* 
        The AiChatHero component has been extracted and saved for future use. 
        To implement it in the future, you can add it like this:
        
        <div className="max-w-7xl mx-auto px-4 py-8">
          <AiChatHero 
            themeColor="green"
            accentColor="green"
            lightColor="green"
            borderColor="green"
            title="Your Wellness Guide"
            subtitle="Ask Dr. Twistly about CBD products for your health needs"
          />
        </div>
      */}
    </div>
  )
} 