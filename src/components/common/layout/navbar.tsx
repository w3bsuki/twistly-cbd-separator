'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Navbar1 } from '@/components/blocks/shadcnblocks-com-navbar1'
import { ShoppingCart, User, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navData = {
  logo: {
    url: "/",
    src: "/images/logo.svg",
    alt: "Twistly CBD",
    title: "Twistly CBD",
  },
  menu: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Shop",
      url: "/shop",
      items: [
        {
          title: "All Products",
          description: "Browse our complete collection of CBD products",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500" />,
          url: "/shop",
        },
        {
          title: "Health & Wellness",
          description: "Premium CBD oils and supplements for daily wellness",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-green-500 to-emerald-500" />,
          url: "/shop?category=health",
        },
        {
          title: "Beauty & Skincare",
          description: "CBD-infused beauty products for radiant skin",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500" />,
          url: "/shop?category=beauty",
        },
        {
          title: "Sport & Recovery",
          description: "High-performance CBD solutions for athletes",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-red-500 to-rose-500" />,
          url: "/shop?category=sport",
        },
      ],
    },
    {
      title: "Health & Wellness",
      url: "/health",
      items: [
        {
          title: "CBD Oils & Tinctures",
          description: "Premium full-spectrum CBD oils for daily wellness",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-green-500 to-emerald-500" />,
          url: "/health/oils",
        },
        {
          title: "Wellness Capsules",
          description: "Easy-to-take CBD capsules with targeted benefits",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-green-400 to-emerald-400" />,
          url: "/health/capsules",
        },
        {
          title: "Sleep & Relaxation",
          description: "Specialized formulas for better rest and calm",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-green-600 to-emerald-600" />,
          url: "/health/sleep",
        },
        {
          title: "Wellness Bundles",
          description: "Curated sets for comprehensive wellness support",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-green-300 to-emerald-300" />,
          url: "/health/bundles",
        },
      ],
    },
    {
      title: "Beauty & Skincare",
      url: "/beauty",
      items: [
        {
          title: "CBD Face Care",
          description: "Nourishing skincare infused with CBD",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-yellow-500 to-amber-500" />,
          url: "/beauty/face",
        },
        {
          title: "Body Care",
          description: "Luxurious CBD-infused body products",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-yellow-400 to-amber-400" />,
          url: "/beauty/body",
        },
        {
          title: "Anti-Aging",
          description: "Advanced formulas for youthful skin",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-yellow-600 to-amber-600" />,
          url: "/beauty/anti-aging",
        },
        {
          title: "Beauty Sets",
          description: "Complete CBD beauty routines",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-yellow-300 to-amber-300" />,
          url: "/beauty/sets",
        },
      ],
    },
    {
      title: "Sport & Recovery",
      url: "/sport",
      items: [
        {
          title: "Performance",
          description: "CBD products for enhanced athletic performance",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-red-500 to-rose-500" />,
          url: "/sport/performance",
        },
        {
          title: "Recovery",
          description: "Post-workout recovery and muscle support",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-red-400 to-rose-400" />,
          url: "/sport/recovery",
        },
        {
          title: "Joint Support",
          description: "Targeted relief for joints and flexibility",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-red-600 to-rose-600" />,
          url: "/sport/joints",
        },
        {
          title: "Sport Bundles",
          description: "Complete athletic CBD solutions",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-red-300 to-rose-300" />,
          url: "/sport/bundles",
        },
      ],
    },
    {
      title: "Learn",
      url: "/learn",
      items: [
        {
          title: "CBD Guide",
          description: "Everything you need to know about CBD",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500" />,
          url: "/learn/guide",
        },
        {
          title: "Lab Results",
          description: "Third-party testing and quality assurance",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-blue-400 to-indigo-400" />,
          url: "/learn/lab-results",
        },
        {
          title: "Blog",
          description: "Latest news and wellness articles",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600" />,
          url: "/blog",
        },
        {
          title: "FAQ",
          description: "Common questions about CBD",
          icon: <div className="size-5 shrink-0 rounded-full bg-gradient-to-br from-blue-300 to-indigo-300" />,
          url: "/learn/faq",
        },
      ],
    },
  ],
  auth: {
    login: { text: "Sign in", url: "/signin" },
    signup: { text: "Get Started", url: "/signup" },
  },
}

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden">
              <Image
                src="/images/logo.svg"
                alt="Twistly CBD"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-green-800 text-lg hidden sm:inline-block">Twistly CBD</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navData.menu.map((item, index) => (
              <Link 
                key={index} 
                href={item.url}
                className="px-3 py-2 text-sm font-medium text-green-700 hover:text-green-900 hover:bg-green-50 rounded-md transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          
          {/* Right Side - Icons and Auth */}
          <div className="flex items-center gap-4">
            {/* Search */}
            <Button variant="ghost" size="icon" className="text-green-700 hover:text-green-900 hover:bg-green-50">
              <Search className="h-5 w-5" />
            </Button>
            
            {/* Shopping Cart */}
            <Button variant="ghost" size="icon" className="text-green-700 hover:text-green-900 hover:bg-green-50 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            
            {/* Account */}
            <Button variant="ghost" size="icon" className="text-green-700 hover:text-green-900 hover:bg-green-50">
              <User className="h-5 w-5" />
            </Button>
            
            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href={navData.auth.login.url}>
                <Button variant="ghost" size="sm" className="text-green-700 hover:text-green-900 hover:bg-green-50">
                  {navData.auth.login.text}
                </Button>
              </Link>
              <Link href={navData.auth.signup.url}>
                <Button size="sm" className="bg-green-700 text-white hover:bg-green-800">
                  {navData.auth.signup.text}
                </Button>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="md:hidden text-green-700 hover:text-green-900 hover:bg-green-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
} 