'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, User, Search, ChevronDown, Menu, X, Bitcoin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { CartDrawer } from '@/components/features/cart/cart-drawer'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet'
import { Input } from '@/components/ui/input'
import { motion, AnimatePresence } from 'framer-motion'
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"

// Product categories data
const productCategories = [
  {
    name: "Wellness",
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
    name: "Sport",
    color: "blue",
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
    name: "Beauty",
    color: "purple",
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
    name: "Hybrid",
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
  },
  {
    name: "Pet CBD",
    color: "amber",
    path: "/pet-cbd",
    products: [
      {
        name: "Dog Tinctures",
        description: "Calming CBD oil specially formulated for dogs",
        image: "/images/tincture2.png",
        path: "/pet-cbd/dog-tinctures"
      },
      {
        name: "Cat Drops",
        description: "Gentle CBD formulas for feline wellness",
        image: "/images/4.png",
        path: "/pet-cbd/cat-drops"
      },
      {
        name: "Treats",
        description: "CBD-infused treats for joint support and anxiety relief",
        image: "/images/5.png",
        path: "/pet-cbd/treats"
      }
    ]
  }
]

// Navigation links - removed Home and Shop
const navLinks = [
  { name: "Shop", path: "/shop" },
  { name: "About", path: "/about" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
  { name: "Lab", path: "/lab" }
]

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [logoIndex, setLogoIndex] = React.useState(3) // Start with logo 3 instead of 2
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { toast } = useToast();
  
  // Detect scroll for header shadow only (no height change)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    
    // Use passive event listener for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Cycle through logos 3, 4, 5 (skipping 2)
  const cycleLogo = () => {
    setLogoIndex(prev => {
      if (prev >= 5) return 3
      return prev + 1
    })
  }
  
  // Button click handler for wallet connect
  const handleWalletConnect = () => {
    toast({
      title: 'Wallet Connection',
      description: 'Wallet connection feature coming soon.',
    });
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className={cn(
      "sticky top-0 z-50 w-full border-b border-gray-100 bg-white h-20 backdrop-blur-sm bg-white/95",
      isScrolled ? "shadow-md" : "shadow-sm"
    )}>
      <div className="container mx-auto h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center gap-3"
            onClick={cycleLogo}
          >
            <div className="relative h-12 w-12 overflow-hidden">
              <Image
                src={`/images/${logoIndex}.png`}
                alt="Twistly"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <span className="font-bold text-black text-2xl hidden sm:inline-block tracking-tight">
              Twistly<span className="text-green-600">.</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Product Category Dropdowns with hover trigger */}
            {productCategories.map((category) => (
              <div key={category.path} className="group relative">
                <button 
                  className={cn(
                    "px-5 py-2.5 text-base font-medium tracking-tight rounded-md flex items-center gap-1.5 transition-colors duration-200",
                    category.color === "green" && "text-green-700 hover:text-green-900 group-hover:bg-green-50",
                    category.color === "blue" && "text-blue-700 hover:text-blue-900 group-hover:bg-blue-50",
                    category.color === "purple" && "text-purple-700 hover:text-purple-900 group-hover:bg-purple-50",
                    category.color === "brown" && "text-amber-900 hover:text-amber-950 group-hover:bg-amber-100",
                    category.color === "amber" && "text-amber-700 hover:text-amber-800 group-hover:bg-amber-50"
                  )}
                >
                  {category.name} <ChevronDown className="h-4 w-4 opacity-70" />
                </button>
                <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[400px] z-20 transition-all duration-200 ease-in-out transform translate-y-1 group-hover:translate-y-0">
                  <div className={cn(
                    "rounded-lg border shadow-lg bg-white p-5",
                    category.color === "green" && "border-green-100",
                    category.color === "blue" && "border-blue-100",
                    category.color === "purple" && "border-purple-100",
                    category.color === "brown" && "border-amber-200",
                    category.color === "amber" && "border-amber-100"
                  )}>
                    <div className="grid grid-cols-3 gap-4">
                      {category.products.map((product) => (
                        <Link key={product.path} href={product.path} className="group">
                          <div className="space-y-2">
                            <div className="relative w-full pt-[100%] rounded-md overflow-hidden border bg-gray-50/50">
                              <motion.img
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
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.2 }}
                              />
                            </div>
                            <div className="space-y-1">
                              <h4 className={cn(
                                "text-sm font-semibold tracking-tight group-hover:underline",
                                category.color === "green" && "group-hover:text-green-700",
                                category.color === "blue" && "group-hover:text-blue-700",
                                category.color === "purple" && "group-hover:text-purple-700",
                                category.color === "brown" && "group-hover:text-amber-900",
                                category.color === "amber" && "group-hover:text-amber-700"
                              )}>
                                {product.name}
                              </h4>
                              <p className="text-xs text-gray-500 line-clamp-2 font-light">
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
                        "text-sm font-medium flex justify-end hover:underline tracking-tight",
                        category.color === "green" && "text-green-700",
                        category.color === "blue" && "text-blue-700",
                        category.color === "purple" && "text-purple-700",
                        category.color === "brown" && "text-amber-900",
                        category.color === "amber" && "text-amber-700"
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
              <button 
                className="px-5 py-2.5 text-base font-medium tracking-tight rounded-md flex items-center gap-1.5 text-gray-800 hover:text-gray-900 group-hover:bg-gray-50 transition-colors duration-200"
              >
                Info <ChevronDown className="h-4 w-4 opacity-70" />
              </button>
              <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible w-[200px] z-20 transition-all duration-200 ease-in-out transform translate-y-1 group-hover:translate-y-0">
                <div className="rounded-lg border shadow-lg bg-white p-3">
                  <div className="flex flex-col space-y-1">
                    {navLinks.slice(1).map((link) => (
                      <motion.div key={link.path} whileHover={{ x: 2 }} transition={{ duration: 0.2 }}>
                        <Link 
                          href={link.path}
                          className="w-full text-left px-3 py-2 text-sm font-medium hover:bg-gray-50 rounded-md block transition-colors duration-150"
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </nav>
          
          {/* Desktop Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Shop Button */}
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Button asChild variant="default" className="bg-green-600 hover:bg-green-700 text-white rounded-full h-10 px-5 text-sm font-medium shadow-sm">
                <Link href="/shop" className="flex items-center gap-2">
                  <div className="relative w-5 h-5">
                    <Image 
                      src="/images/2.png"
                      alt="Twistly Icon" 
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </div>
                  <Separator orientation="vertical" className="h-4 bg-white/30" />
                  Shop
                </Link>
              </Button>
            </motion.div>
            
            {/* Desktop Search Button */}
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 relative rounded-full h-10 w-10"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="h-[18px] w-[18px]" />
              </Button>
            </motion.div>
            
            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 relative rounded-full h-10 w-10"
                    aria-label="User account"
                  >
                    <User className="h-[18px] w-[18px]" />
                  </Button>
                </motion.div>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-lg p-1 border border-gray-200">
                <DropdownMenuItem asChild className="rounded-md">
                  <Link href="/account" className="font-medium text-sm">My Account</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="rounded-md">
                  <Link href="/orders" className="font-medium text-sm">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="rounded-md">
                  <button
                    onClick={handleWalletConnect}
                    className="font-medium text-sm w-full text-left flex items-center"
                  >
                    <Bitcoin className="h-4 w-4 mr-2" />
                    Connect Wallet
                  </button>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild className="rounded-md">
                  <Link href="/signin" className="font-medium text-sm">Sign In</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Cart */}
            <CartDrawer />
          </div>
          
          {/* Mobile Menu and Cart */}
          <div className="flex md:hidden items-center space-x-2">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              <Button 
                variant="ghost" 
                size="icon"
                className="text-gray-700 hover:text-gray-900 hover:bg-gray-100 relative rounded-full h-10 w-10"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="h-[18px] w-[18px]" />
              </Button>
            </motion.div>
            
            {/* Mobile Cart */}
            <CartDrawer />
            
            {/* Mobile Menu */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                  <Button variant="ghost" size="icon" aria-label="Menu" className="relative text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full h-10 w-10">
                    <Menu className="h-[18px] w-[18px]" />
                  </Button>
                </motion.div>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-80 p-0">
                <div className="flex flex-col h-full">
                  <SheetHeader className="p-4 border-b">
                    <div className="flex items-center justify-between">
                      <SheetTitle className="text-left font-semibold tracking-tight">Menu</SheetTitle>
                      <SheetClose asChild>
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                          <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                            <X className="h-4 w-4" />
                            <span className="sr-only">Close menu</span>
                          </Button>
                        </motion.div>
                      </SheetClose>
                    </div>
                  </SheetHeader>
                  
                  <div className="flex-1 overflow-auto py-2">
                    {/* Mobile Navigation Links */}
                    <div className="flex flex-col space-y-4 mt-6 px-4">
                      <Link 
                        href="/shop" 
                        className="flex items-center justify-between py-2 text-base font-medium text-gray-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Shop
                      </Link>
                      
                      {/* Category links */}
                      {productCategories.map(category => (
                        <Link 
                          key={category.name} 
                          href={category.path}
                          className={cn(
                            "flex items-center justify-between py-2 text-base font-medium",
                            category.color === "green" && "text-green-700",
                            category.color === "blue" && "text-blue-700",
                            category.color === "purple" && "text-purple-700",
                            category.color === "brown" && "text-amber-900",
                            category.color === "amber" && "text-amber-700"
                          )}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {category.name}
                          <ChevronDown className="h-4 w-4 opacity-70" />
                        </Link>
                      ))}
                      
                      {/* Other links */}
                      {navLinks.slice(1).map(link => (
                        <Link 
                          key={link.name} 
                          href={link.path}
                          className="flex items-center justify-between py-2 text-base font-medium text-gray-900"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                    
                    {/* Mobile menu actions */}
                    <div className="grid grid-cols-2 gap-3 border-t pt-5 mt-6 px-4">
                      <SheetClose asChild>
                        <Button 
                          variant="outline" 
                          className="w-full gap-1 text-sm rounded-full"
                          onClick={() => {
                            setIsMobileMenuOpen(false)
                            setIsSearchOpen(true)
                          }}
                        >
                          <Search className="h-4 w-4" />
                          Search
                        </Button>
                      </SheetClose>
                      
                      <SheetClose asChild>
                        <Link href="/checkout" passHref>
                          <Button 
                            variant="default" 
                            className="w-full gap-1 text-sm bg-green-600 hover:bg-green-700 rounded-full"
                          >
                            <ShoppingCart className="h-4 w-4" />
                            Cart
                          </Button>
                        </Link>
                      </SheetClose>
                    </div>
                  </div>
                  
                  {/* Mobile Account Links */}
                  <div className="border-t p-4">
                    <div className="flex flex-col space-y-2">
                      <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                        <Button asChild variant="outline" size="lg" className="font-medium text-sm rounded-full">
                          <Link href="/account">My Account</Link>
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                        <Button 
                          size="lg" 
                          variant="outline"
                          className="font-medium text-sm flex items-center gap-2 rounded-full"
                          onClick={handleWalletConnect}
                        >
                          <Bitcoin className="h-4 w-4" />
                          Connect Wallet
                        </Button>
                      </motion.div>
                      <motion.div whileHover={{ y: -2 }} transition={{ duration: 0.2 }}>
                        <Button asChild size="lg" className="font-medium text-sm bg-green-600 hover:bg-green-700 rounded-full">
                          <Link href="/signin">Sign In</Link>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Search Overlay */}
      <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <SheetContent side="top" className="h-auto max-h-[300px]">
          <div className="flex flex-col space-y-4 pt-8 pb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4.5 w-4.5 text-gray-400" />
              <Input 
                placeholder="Search products..." 
                className="pl-10 h-11 text-base rounded-full border-gray-200 focus-visible:ring-green-600"
                autoFocus
              />
            </div>
            <div className="space-y-2">
              <div className="text-xs uppercase font-semibold tracking-wide text-gray-500 px-2">Popular Searches</div>
              <div className="flex flex-wrap gap-2">
                {["CBD Oil", "Softgels", "Sleep Aid", "Pain Relief", "Mushroom Extract"].map((term) => (
                  <motion.div key={term} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => setIsSearchOpen(false)}
                      className="text-xs h-9 font-medium px-3 rounded-full border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                    >
                      {term}
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
} 