import { Product } from '@/lib/products';

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  discount: number;
  tax: number;
  shipping: number;
  total: number;
}

export const initialCartState: CartState = {
  items: [],
  itemCount: 0,
  subtotal: 0,
  discount: 0,
  tax: 0,
  shipping: 0,
  total: 0,
};

// Helper functions for cart operations
export const addToCart = (cart: CartState, product: Product, quantity: number = 1): CartState => {
  const existingItemIndex = cart.items.findIndex(item => item.product.id === product.id);
  let newItems = [...cart.items];
  
  if (existingItemIndex >= 0) {
    // Update quantity if item already exists
    newItems[existingItemIndex] = {
      ...newItems[existingItemIndex],
      quantity: newItems[existingItemIndex].quantity + quantity
    };
  } else {
    // Add new item
    newItems.push({ product, quantity });
  }
  
  return recalculateCart(cart, newItems);
};

export const updateCartItemQuantity = (cart: CartState, productId: string, quantity: number): CartState => {
  if (quantity <= 0) {
    return removeFromCart(cart, productId);
  }
  
  const newItems = cart.items.map(item => 
    item.product.id === productId ? { ...item, quantity } : item
  );
  
  return recalculateCart(cart, newItems);
};

export const removeFromCart = (cart: CartState, productId: string): CartState => {
  const newItems = cart.items.filter(item => item.product.id !== productId);
  return recalculateCart(cart, newItems);
};

export const clearCart = (): CartState => {
  return { ...initialCartState };
};

// Helper to recalculate cart totals
const recalculateCart = (cart: CartState, items: CartItem[]): CartState => {
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  
  const subtotal = items.reduce((total, item) => {
    const price = item.product.discountPrice || item.product.price;
    return total + (price * item.quantity);
  }, 0);
  
  // Assuming tax is 7%
  const tax = subtotal * 0.07;
  
  // Free shipping over $100, otherwise $5.99
  const shipping = subtotal > 100 ? 0 : 5.99;
  
  // Calculate total
  const total = subtotal + tax + shipping - cart.discount;
  
  return {
    ...cart,
    items,
    itemCount,
    subtotal,
    tax,
    shipping,
    total
  };
}; 