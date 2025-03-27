/**
 * Product Data Hook
 * 
 * Custom hook for fetching and managing product data with support for
 * filtering, sorting, and caching to improve performance.
 */

import { useState, useCallback, useEffect, useMemo } from 'react'
import { Product } from '@/lib/products'

// Filter options for products
export type ProductFilter = {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  tags?: string[];
  search?: string;
  inStock?: boolean;
}

// Sort options for products
export type ProductSortOption = 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'newest' | 'popularity';

// Hook parameters
interface UseProductDataParams {
  initialFilters?: ProductFilter;
  initialSort?: ProductSortOption;
  limit?: number;
  category?: string;
  featured?: boolean;
}

// Hook return type
interface UseProductDataResult {
  products: Product[];
  isLoading: boolean;
  error: Error | null;
  filters: ProductFilter;
  sortOption: ProductSortOption;
  updateFilters: (newFilters: Partial<ProductFilter>) => void;
  setSortOption: (sort: ProductSortOption) => void;
  resetFilters: () => void;
  refetch: () => Promise<void>;
  hasMore: boolean;
  loadMore: () => void;
}

/**
 * useProductData - Custom hook for fetching and managing product data
 * 
 * @example
 * ```tsx
 * const { 
 *   products, 
 *   isLoading, 
 *   filters, 
 *   updateFilters 
 * } = useProductData({
 *   category: 'wellness',
 *   initialSort: 'price-asc'
 * });
 * ```
 */
export function useProductData({
  initialFilters = {},
  initialSort = 'newest',
  limit = 12,
  category,
  featured = false,
}: UseProductDataParams = {}): UseProductDataResult {
  // Merge category from params into initial filters
  const mergedInitialFilters = useMemo(() => ({
    ...initialFilters,
    ...(category ? { category } : {})
  }), [initialFilters, category])

  // State definitions
  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)
  const [filters, setFilters] = useState<ProductFilter>(mergedInitialFilters)
  const [sortOption, setSortOption] = useState<ProductSortOption>(initialSort)
  const [page, setPage] = useState<number>(1)
  const [hasMore, setHasMore] = useState<boolean>(true)

  // Update filters while preserving existing ones
  const updateFilters = useCallback((newFilters: Partial<ProductFilter>) => {
    setFilters(prev => ({ ...prev, ...newFilters }))
    setPage(1) // Reset pagination when filters change
  }, [])

  // Reset filters to initial state
  const resetFilters = useCallback(() => {
    setFilters(mergedInitialFilters)
    setPage(1)
  }, [mergedInitialFilters])

  // Load more products
  const loadMore = useCallback(() => {
    if (hasMore && !isLoading) {
      setPage(prev => prev + 1)
    }
  }, [hasMore, isLoading])

  // Apply filters to products
  const applyFilters = useCallback((products: Product[], filters: ProductFilter): Product[] => {
    return products.filter(product => {
      // Category filter
      if (filters.category && product.category !== filters.category) {
        return false
      }
      
      // Price range filter
      if (filters.minPrice !== undefined && product.price < filters.minPrice) {
        return false
      }
      if (filters.maxPrice !== undefined && product.price > filters.maxPrice) {
        return false
      }
      
      // Tags filter
      if (filters.tags && filters.tags.length > 0) {
        if (!product.tags || !filters.tags.some(tag => product.tags.includes(tag))) {
          return false
        }
      }
      
      // Search filter
      if (filters.search) {
        const searchLower = filters.search.toLowerCase()
        if (
          !product.name.toLowerCase().includes(searchLower) &&
          !product.description.toLowerCase().includes(searchLower)
        ) {
          return false
        }
      }
      
      // In stock filter
      if (filters.inStock && !product.inStock) {
        return false
      }
      
      return true
    })
  }, [])

  // Apply sorting to products
  const applySorting = useCallback((products: Product[], sort: ProductSortOption): Product[] => {
    const sortedProducts = [...products]
    
    switch (sort) {
      case 'price-asc':
        return sortedProducts.sort((a, b) => a.price - b.price)
      case 'price-desc':
        return sortedProducts.sort((a, b) => b.price - a.price)
      case 'name-asc':
        return sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
      case 'name-desc':
        return sortedProducts.sort((a, b) => b.name.localeCompare(a.name))
      case 'newest':
        return sortedProducts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      case 'popularity':
        return sortedProducts.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0))
      default:
        return sortedProducts
    }
  }, [])

  // Fetch products with current filters and sorting
  const fetchProducts = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(null)
      
      // In a real application, this would be an API call with filters
      // For now, we're simulating the API call with a timeout
      
      // TODO: Replace with actual API call to Supabase
      const response = await fetch('/api/products?' + new URLSearchParams({
        page: page.toString(),
        limit: limit.toString(),
        sort: sortOption,
        ...(filters.category && { category: filters.category }),
        ...(filters.minPrice && { minPrice: filters.minPrice.toString() }),
        ...(filters.maxPrice && { maxPrice: filters.maxPrice.toString() }),
        ...(filters.search && { search: filters.search }),
        ...(filters.inStock !== undefined && { inStock: filters.inStock.toString() }),
        ...(featured && { featured: 'true' }),
      }))
      
      if (!response.ok) {
        throw new Error(`Error fetching products: ${response.statusText}`)
      }
      
      const data = await response.json()
      
      // If it's the first page, replace products, otherwise append
      setProducts(prev => page === 1 ? data.products : [...prev, ...data.products])
      setHasMore(data.hasMore)
      
    } catch (err) {
      console.error('Failed to fetch products:', err)
      setError(err instanceof Error ? err : new Error('Unknown error fetching products'))
    } finally {
      setIsLoading(false)
    }
  }, [filters, sortOption, page, limit, featured])

  // Fetch products when dependencies change
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  // Return the hook's API
  return {
    products,
    isLoading,
    error,
    filters,
    sortOption,
    updateFilters,
    setSortOption,
    resetFilters,
    refetch: fetchProducts,
    hasMore,
    loadMore,
  }
} 