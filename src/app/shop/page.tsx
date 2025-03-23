'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Filter, SlidersHorizontal, Search, ChevronDown, X } from 'lucide-react'
import { products, Product } from '@/lib/products'
import { ProductCard } from '@/components/common/ui/product-card'
import { Button } from '@/components/common/ui/button'
import { Input } from '@/components/common/ui/input'
import { Badge } from '@/components/common/ui/badge'
import { Separator } from '@/components/common/ui/separator'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/common/ui/select'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/common/ui/sheet'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/common/ui/accordion'
import { Checkbox } from '@/components/common/ui/checkbox'

type SortOption = 'featured' | 'price-low' | 'price-high' | 'newest' | 'best-selling'

export default function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products)
  const [searchQuery, setSearchQuery] = useState('')
  const [sortOption, setSortOption] = useState<SortOption>('featured')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100])
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false)
  
  // Filter and sort products
  useEffect(() => {
    let result = [...products]
    
    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(query) || 
          product.description.toLowerCase().includes(query) ||
          product.tags.some(tag => tag.toLowerCase().includes(query))
      )
    }
    
    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter(product => 
        selectedCategories.includes(product.category)
      )
    }
    
    // Apply price range filter
    result = result.filter(
      product => {
        const price = product.discountPrice || product.price
        return price >= priceRange[0] && price <= priceRange[1]
      }
    )
    
    // Apply sorting
    switch (sortOption) {
      case 'price-low':
        result.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price))
        break
      case 'price-high':
        result.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price))
        break
      case 'best-selling':
        result.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0))
        break
      case 'newest':
        result = result.filter(product => product.new).concat(
          result.filter(product => !product.new)
        )
        break
      case 'featured':
      default:
        result = result.filter(product => product.featured).concat(
          result.filter(product => !product.featured)
        )
        break
    }
    
    setFilteredProducts(result)
  }, [searchQuery, sortOption, selectedCategories, priceRange])
  
  const handleCategoryChange = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }
  
  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategories([])
    setPriceRange([0, 100])
    setSortOption('featured')
  }
  
  const categories = [
    { id: 'health', name: 'Health & Wellness' },
    { id: 'beauty', name: 'Beauty & Skincare' },
    { id: 'sport', name: 'Sport & Recovery' },
    { id: 'hybrid', name: 'Hybrid Solutions' },
  ]
  
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gradient-to-r from-green-50 to-green-100 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Premium CBD Products
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-gray-600 mb-8"
            >
              Discover our collection of high-quality CBD products designed to enhance your wellness routine and improve your quality of life.
            </motion.p>
          </div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-0 w-1/2 h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Mobile filter button */}
        <div className="flex items-center justify-between mb-6 md:hidden">
          <h2 className="text-xl font-semibold">
            {filteredProducts.length} Products
          </h2>
          <Sheet open={isMobileFilterOpen} onOpenChange={setIsMobileFilterOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter & Sort
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-md">
              <SheetHeader className="mb-4">
                <SheetTitle>Filter & Sort</SheetTitle>
                <SheetDescription>
                  Refine your product selection
                </SheetDescription>
              </SheetHeader>
              
              <div className="space-y-6">
                {/* Sort options */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Sort By</h3>
                  <Select value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="best-selling">Best Selling</SelectItem>
                      <SelectItem value="newest">Newest</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <Separator />
                
                {/* Categories */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`mobile-category-${category.id}`}
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => handleCategoryChange(category.id)}
                        />
                        <label 
                          htmlFor={`mobile-category-${category.id}`}
                          className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <Separator />
                
                {/* Price range */}
                <div>
                  <h3 className="text-sm font-medium mb-2">Price Range</h3>
                  <div className="flex items-center gap-2">
                    <Input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                      className="w-20"
                    />
                    <span>to</span>
                    <Input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                      className="w-20"
                    />
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between">
                  <Button variant="outline" onClick={clearFilters}>
                    Clear All
                  </Button>
                  <Button onClick={() => setIsMobileFilterOpen(false)}>
                    Apply Filters
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop sidebar filters */}
          <div className="hidden md:block w-64 shrink-0">
            <div className="sticky top-24 space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">Filters</h3>
                
                {/* Search */}
                <div className="relative mb-6">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-8"
                  />
                </div>
                
                {/* Categories */}
                <Accordion type="single" collapsible defaultValue="categories">
                  <AccordionItem value="categories">
                    <AccordionTrigger className="text-sm font-medium">
                      Categories
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        {categories.map((category) => (
                          <div key={category.id} className="flex items-center space-x-2">
                            <Checkbox 
                              id={`category-${category.id}`}
                              checked={selectedCategories.includes(category.id)}
                              onCheckedChange={() => handleCategoryChange(category.id)}
                            />
                            <label 
                              htmlFor={`category-${category.id}`}
                              className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              {category.name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                {/* Price range */}
                <Accordion type="single" collapsible defaultValue="price">
                  <AccordionItem value="price">
                    <AccordionTrigger className="text-sm font-medium">
                      Price Range
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pt-1">
                        <div className="flex items-center gap-2">
                          <Input
                            type="number"
                            placeholder="Min"
                            value={priceRange[0]}
                            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                            className="w-20"
                          />
                          <span>to</span>
                          <Input
                            type="number"
                            placeholder="Max"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                            className="w-20"
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                
                {/* Active filters */}
                {(selectedCategories.length > 0 || searchQuery || priceRange[0] > 0 || priceRange[1] < 100) && (
                  <div className="mt-6">
                    <h4 className="text-sm font-medium mb-2">Active Filters</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedCategories.map((category) => (
                        <Badge key={category} variant="secondary" className="flex items-center gap-1">
                          {categories.find(c => c.id === category)?.name}
                          <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => handleCategoryChange(category)}
                          />
                        </Badge>
                      ))}
                      
                      {searchQuery && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          Search: {searchQuery}
                          <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => setSearchQuery('')}
                          />
                        </Badge>
                      )}
                      
                      {(priceRange[0] > 0 || priceRange[1] < 100) && (
                        <Badge variant="secondary" className="flex items-center gap-1">
                          Price: ${priceRange[0]} - ${priceRange[1]}
                          <X 
                            className="h-3 w-3 cursor-pointer" 
                            onClick={() => setPriceRange([0, 100])}
                          />
                        </Badge>
                      )}
                    </div>
                    
                    <Button 
                      variant="link" 
                      className="px-0 text-sm mt-2" 
                      onClick={clearFilters}
                    >
                      Clear all filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="flex-1">
            {/* Desktop sort options */}
            <div className="hidden md:flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">
                {filteredProducts.length} Products
              </h2>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Sort by:</span>
                <Select value={sortOption} onValueChange={(value) => setSortOption(value as SortOption)}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="best-selling">Best Selling</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            {/* Products */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <ProductCard product={product} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium mb-2">No products found</h3>
                <p className="text-muted-foreground mb-4">
                  Try adjusting your filters or search query
                </p>
                <Button onClick={clearFilters}>Clear Filters</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 