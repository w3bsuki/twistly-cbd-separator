'use client'

import React from 'react'
import { HeroSection } from './components/HeroSection'
import { BenefitsSection } from './components/BenefitsSection'
import { FeaturedProducts } from './components/FeaturedProducts'
import { ConditionsTabs } from './components/ConditionsTabs'
import { FaqSection } from './components/FaqSection'
import { TestimonialsSection } from './components/TestimonialsSection'
import { CtaSection } from './components/CtaSection'
import { pageTheme } from './utils/theme'
import { Separator } from '@/components/ui/separator'

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
      <FaqSection pageTheme={pageTheme} />
      <Separator className="mx-auto max-w-7xl" />
      <TestimonialsSection pageTheme={pageTheme} />
      <Separator className="mx-auto max-w-7xl" />
      <CtaSection pageTheme={pageTheme} />
    </div>
  )
} 