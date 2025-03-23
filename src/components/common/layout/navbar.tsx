'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, User, Search, ChevronDown, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

// Product categories data
const productCategories = [
  {
    name: "Health & Wellness",
    color: "green",
    path: "/health-and-wellness",
    products: [
      {
        name: "Tinctures",
        description: "Full spectrum CBD oils for daily balance",
        image: "/images/tincture2.png",
        path: "/wellness/tinctures"
      },
      {
        name: "Softgels",
        description: "Easy-to-take CBD capsules for consistent dosing",
        image: "/images/softgel.png",
        path: "/wellness/softgels"
      },
      {
        name: "Capsules",
        description: "Specialized formulas for targeted wellness benefits",
        image: "/images/3.png",
        path: "/wellness/capsules"
      }
    ]
  },
  {
    name: "Sport & Recovery",
    color: "red",
    path: "/sport-and-recovery",
    products: [
      {
        name: "Tinctures",
        description: "Performance-focused CBD oils for active lifestyles",
        image: "/images/tincture2.png",
        path: "/sport/tinctures"
      },
      {
        name: "Softgels",
        description: "Pre and post-workout supplements for recovery",
        image: "/images/softgel.png",
        path: "/sport/softgels"
      },
      {
        name: "Bandages",
        description: "Targeted relief for muscles and joints",
        image: "/images/4.png",
        path: "/sport/bandages"
      }
    ]
  },
  {
    name: "Beauty & Cosmetics",
    color: "amber",
    path: "/beauty-and-cosmetics",
    products: [
      {
        name: "Tinctures",
        description: "Beauty-enhancing CBD formulas for skin health",
        image: "/images/tincture2.png",
        path: "/beauty/tinctures"
      },
      {
        name: "Serums",
        description: "Concentrated CBD treatments for targeted concerns",
        image: "/images/5.png",
        path: "/beauty/serums"
      },
      {
        name: "Oils",
        description: "Nourishing oils for face and body",
        image: "/images/5.png",
        path: "/beauty/oils"
      }
    ]
  },
  {
    name: "Hybrid & Mushrooms",
    color: "brown",
    path: "/hybrid-and-mushrooms",
    products: [
      {
        name: "Tinctures",
        description: "CBD-mushroom blend formulas for cognitive support",
        image: "/images/tincture2.png",
        path: "/hybrid/tinctures"
      },
      {
        name: "Capsules",
        description: "Functional mushroom supplements with CBD",
        image: "/images/3.png",
        path: "/hybrid/capsules"
      },
      {
        name: "Gummies",
        description: "Tasty CBD-mushroom edibles for daily wellness",
        image: "/images/4.png",
        path: "/hybrid/gummies"
      }
    ]
  }
]

// Navigation links - removed Home and Shop
const navLinks = [
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Lab", path: "/lab" }
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden">
              <Image
                src="/images/logo.svg"
                alt="Twistly CBD"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="font-semibold text-green-800 text-xl hidden sm:inline-block">Twistly CBD</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Product Category Dropdowns with hover trigger */}
            {productCategories.map((category) => (
              <div key={category.path} className="group relative">
                <button className={cn(
                  "px-3 py-2 text-base font-medium rounded-md transition-colors flex items-center gap-1",
                  category.color === "green" && "text-green-700 hover:text-green-900 group-hover:bg-green-50",
                  category.color === "red" && "text-red-700 hover:text-red-900 group-hover:bg-red-50",
                  category.color === "amber" && "text-amber-700 hover:text-amber-900 group-hover:bg-amber-50",
                  category.color === "brown" && "text-amber-900 hover:text-amber-950 group-hover:bg-amber-100",
                )}>
                  {category.name} <ChevronDown className="h-4 w-4 opacity-50" />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[400px]">
                  <div className={cn(
                    "rounded-md border shadow-md bg-white p-4",
                    category.color === "green" && "border-green-100",
                    category.color === "red" && "border-red-100",
                    category.color === "amber" && "border-amber-100",
                    category.color === "brown" && "border-amber-200",
                  )}>
                    <div className="grid grid-cols-3 gap-4">
                      {category.products.map((product) => (
                        <Link key={product.path} href={product.path} className="group">
                          <div className="space-y-2">
                            <div className="relative w-full pt-[100%] rounded-md overflow-hidden border">
                              <img
                                src={product.image}
                                alt={product.name}
                                style={{
                                  position: 'absolute',
                                  top: 0,
                                  left: 0,
                                  width: '100%',
                                  height: '100%',
                                  objectFit: 'contain',
                                  padding: '8px'
                                }}
                                className="transition-transform group-hover:scale-105"
                              />
                            </div>
                            <div className="space-y-1">
                              <h4 className={cn(
                                "text-sm font-medium transition-colors group-hover:underline",
                                category.color === "green" && "group-hover:text-green-700",
                                category.color === "red" && "group-hover:text-red-700",
                                category.color === "amber" && "group-hover:text-amber-700",
                                category.color === "brown" && "group-hover:text-amber-900",
                              )}>
                                {product.name}
                              </h4>
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {product.description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="h-px bg-gray-200 my-4"></div>
                    <Link 
                      href={category.path} 
                      className={cn(
                        "text-sm font-medium flex justify-end hover:underline",
                        category.color === "green" && "text-green-700",
                        category.color === "red" && "text-red-700",
                        category.color === "amber" && "text-amber-700",
                        category.color === "brown" && "text-amber-900",
                      )}
                    >
                      View all {category.name} products
                    </Link>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Info Dropdown */}
            <div className="group relative">
              <button className="px-3 py-2 text-base font-medium rounded-md transition-colors flex items-center gap-1 text-green-700 hover:text-green-900 group-hover:bg-green-50">
                Info <ChevronDown className="h-4 w-4 opacity-50" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 w-[200px]">
                <div className="rounded-md border border-green-100 shadow-md bg-white p-2">
                  <div className="flex flex-col space-y-1">
                    {navLinks.map((link) => (
                      <Link 
                        key={link.path} 
                        href={link.path}
                        className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-900 hover:bg-green-50 rounded-md transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>
          
          {/* Right Side - Icons and Auth */}
          <div className="flex items-center gap-3">
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
            
            {/* Auth/Shop Button - Changed Get Started to Shop */}
            <div className="hidden lg:flex items-center gap-3">
              <Link href="/signin">
                <Button variant="ghost" size="sm" className="text-green-700 hover:text-green-900 hover:bg-green-50">
                  Sign in
                </Button>
              </Link>
              <Link href="/shop">
                <Button size="sm" className="bg-green-700 text-white hover:bg-green-800">
                  Shop
                </Button>
              </Link>
            </div>
            
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden text-green-700 hover:text-green-900 hover:bg-green-50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t py-4 px-4 bg-white">
          <nav className="flex flex-col space-y-3">
            {/* Product Categories */}
            {productCategories.map((category) => (
              <div key={category.path} className="space-y-1">
                <div className={cn(
                  "px-3 py-2 text-base font-medium rounded-md",
                  category.color === "green" && "text-green-700",
                  category.color === "red" && "text-red-700",
                  category.color === "amber" && "text-amber-700",
                  category.color === "brown" && "text-amber-900",
                )}>
                  {category.name}
                </div>
                <div className="pl-4 space-y-1">
                  {category.products.map((product) => (
                    <Link 
                      key={product.path} 
                      href={product.path}
                      className="px-3 py-1.5 text-sm flex items-center gap-3 text-gray-600 hover:text-green-900 hover:bg-green-50 rounded-md transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className="relative w-8 h-8 rounded-md overflow-hidden border border-gray-200">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                      {product.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="h-px bg-gray-200 my-2"></div>
            
            {/* Info Section */}
            <div className="space-y-1">
              <div className="px-3 py-2 text-base font-medium rounded-md text-green-700">
                Info
              </div>
              <div className="pl-4 space-y-1">
                {navLinks.map((link) => (
                  <Link 
                    key={link.path} 
                    href={link.path}
                    className="px-3 py-1.5 text-sm text-gray-600 hover:text-green-900 hover:bg-green-50 rounded-md transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            
            <div className="h-px bg-gray-200 my-2"></div>
            
            {/* Mobile Auth/Shop */}
            <div className="flex flex-col space-y-2 px-3">
              <Link href="/signin">
                <Button variant="outline" className="w-full justify-start">Sign in</Button>
              </Link>
              <Link href="/shop">
                <Button className="w-full justify-start bg-green-700 hover:bg-green-800">
                  Shop
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
} 