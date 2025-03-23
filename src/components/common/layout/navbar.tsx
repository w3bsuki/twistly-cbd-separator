'use client'

import React from 'react'
import { Navbar1 } from '@/components/blocks/shadcnblocks-com-navbar1'

const navData = {
  logo: {
    url: "/",
    src: "/images/1.png",
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
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Navbar1 {...navData} />
    </header>
  )
} 