/**
 * Hooks Index
 * 
 * This file exports all custom hooks for easier imports throughout the application.
 * Import from '@/hooks' instead of individual files.
 */

// Product data hook for fetching and managing product data
export { useProductData } from './use-product-data'
export type { ProductFilter, ProductSortOption } from './use-product-data'

// Intersection observer hook for lazy loading and infinite scroll
export { useIntersectionObserver } from './use-intersection-observer'

// Debounce hook for delaying state updates
export { useDebounce } from './use-debounce'

// LocalStorage hook for client-side persistence
export { useLocalStorage } from './use-local-storage'

// Re-export other hooks as they are created
// export { useLocalStorage } from './use-local-storage'
// etc. 