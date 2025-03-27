/**
 * Product API Route
 * 
 * Mock API endpoint to fetch products with filtering, sorting, and pagination.
 * This will be replaced with a real Supabase implementation later.
 */

import { NextRequest, NextResponse } from 'next/server';
import { 
  getBestSellerProducts, 
  getFeaturedProducts, 
  getNewProducts, 
  getProductsByCategory,
  products as allProducts
} from '@/lib/products';

/**
 * GET handler for product data
 */
export async function GET(request: NextRequest) {
  // Get URL parameters
  const searchParams = request.nextUrl.searchParams;
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '12');
  const sort = searchParams.get('sort') || 'newest';
  const category = searchParams.get('category') || undefined;
  const minPrice = searchParams.get('minPrice') ? parseFloat(searchParams.get('minPrice')!) : undefined;
  const maxPrice = searchParams.get('maxPrice') ? parseFloat(searchParams.get('maxPrice')!) : undefined;
  const search = searchParams.get('search') || undefined;
  const inStock = searchParams.get('inStock') === 'true';
  const featured = searchParams.get('featured') === 'true';
  
  // Simulate server processing delay
  await new Promise((resolve) => setTimeout(resolve, 600));

  try {
    // Start with all products or get products by category
    let filteredProducts = [...allProducts];
    
    // Apply featured filter
    if (featured) {
      filteredProducts = filteredProducts.filter(product => product.featured);
      
      // If we don't have enough featured products, add some bestsellers
      if (filteredProducts.length < limit) {
        const bestSellers = getBestSellerProducts(limit - filteredProducts.length);
        
        // Avoid duplicates by comparing IDs
        const existingIds = new Set(filteredProducts.map(p => p.id));
        const uniqueBestSellers = bestSellers.filter(p => !existingIds.has(p.id));
        
        filteredProducts = [...filteredProducts, ...uniqueBestSellers];
      }
    }
    
    // Apply category filter
    if (category) {
      filteredProducts = filteredProducts.filter(product => 
        product.category === category
      );
    }
    
    // Apply price range filter
    if (minPrice !== undefined) {
      filteredProducts = filteredProducts.filter(product => 
        product.price >= minPrice
      );
    }
    
    if (maxPrice !== undefined) {
      filteredProducts = filteredProducts.filter(product => 
        product.price <= maxPrice
      );
    }
    
    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchLower) || 
        product.description.toLowerCase().includes(searchLower) ||
        product.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }
    
    // Apply in-stock filter
    if (inStock) {
      filteredProducts = filteredProducts.filter(product => 
        product.stock > 0
      );
    }
    
    // Apply sorting
    switch (sort) {
      case 'price-asc':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filteredProducts.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'newest':
        // For mock data, we're just using the array order
        // In a real DB this would sort by creation date
        break;
      case 'popularity':
        filteredProducts.sort((a, b) => (b.reviewCount || 0) - (a.reviewCount || 0));
        break;
      default:
        // No sorting
        break;
    }
    
    // Calculate pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    // Check if there are more products
    const hasMore = endIndex < filteredProducts.length;
    
    // Return the paginated products
    return NextResponse.json({
      products: paginatedProducts,
      hasMore,
      total: filteredProducts.length,
      page,
      limit
    });
    
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
} 