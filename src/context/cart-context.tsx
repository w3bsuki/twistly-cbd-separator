'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from '@/lib/products';
import { 
  CartState, 
  initialCartState, 
  addToCart as addItemToCart,
  updateCartItemQuantity as updateItemQuantity,
  removeFromCart as removeItem,
  clearCart as clearAllItems
} from '@/lib/cart';

type CartAction = 
  | { type: 'ADD_ITEM'; product: Product; quantity: number }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'REMOVE_ITEM'; productId: string }
  | { type: 'CLEAR_CART' }
  | { type: 'APPLY_DISCOUNT'; amount: number }
  | { type: 'REMOVE_DISCOUNT' }
  | { type: 'LOAD_CART'; state: CartState };

interface CartContextType {
  state: CartState;
  addItem: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  applyDiscount: (amount: number) => void;
  removeDiscount: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Reducer to manage cart state
function cartReducer(state: CartState, action: CartAction): CartState {
  console.log('Cart reducer action:', action.type, action);
  
  switch (action.type) {
    case 'ADD_ITEM':
      console.log('Adding item to cart:', action.product.name, 'quantity:', action.quantity);
      return addItemToCart(state, action.product, action.quantity);
    
    case 'UPDATE_QUANTITY':
      return updateItemQuantity(state, action.productId, action.quantity);
    
    case 'REMOVE_ITEM':
      return removeItem(state, action.productId);
    
    case 'CLEAR_CART':
      return clearAllItems();
    
    case 'APPLY_DISCOUNT':
      return {
        ...state,
        discount: action.amount,
        total: state.subtotal + state.tax + state.shipping - action.amount
      };
    
    case 'REMOVE_DISCOUNT':
      return {
        ...state,
        discount: 0,
        total: state.subtotal + state.tax + state.shipping
      };
    
    case 'LOAD_CART':
      return action.state;
    
    default:
      return state;
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Initialize state from localStorage if available
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  // Load cart from localStorage on initial render
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        try {
          const parsedCart = JSON.parse(savedCart);
          console.log('Loaded cart from localStorage:', parsedCart);
          
          // Validate the parsedCart has the expected structure
          if (parsedCart && typeof parsedCart === 'object') {
            // Ensure it has at least the items array
            if (!Array.isArray(parsedCart.items)) {
              parsedCart.items = [];
              console.warn('Cart items missing or invalid, initializing empty array');
            }
            
            // Ensure other required fields
            if (typeof parsedCart.itemCount !== 'number') parsedCart.itemCount = 0;
            if (typeof parsedCart.subtotal !== 'number') parsedCart.subtotal = 0;
            if (typeof parsedCart.discount !== 'number') parsedCart.discount = 0;
            if (typeof parsedCart.tax !== 'number') parsedCart.tax = 0;
            if (typeof parsedCart.shipping !== 'number') parsedCart.shipping = 0;
            if (typeof parsedCart.total !== 'number') parsedCart.total = 0;
            
            dispatch({ type: 'LOAD_CART', state: parsedCart });
          } else {
            console.warn('Invalid cart data structure, using default state');
            dispatch({ type: 'LOAD_CART', state: initialCartState });
          }
        } catch (error) {
          console.error('Failed to parse saved cart:', error);
          // If parse fails, clear the corrupted data
          localStorage.removeItem('cart');
          dispatch({ type: 'LOAD_CART', state: initialCartState });
        }
      } else {
        console.log('No saved cart found, using default state');
        dispatch({ type: 'LOAD_CART', state: initialCartState });
      }
    } catch (e) {
      console.error('Error accessing localStorage:', e);
      dispatch({ type: 'LOAD_CART', state: initialCartState });
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    try {
      console.log('Saving cart to localStorage:', state);
      localStorage.setItem('cart', JSON.stringify(state));
    } catch (e) {
      console.error('Error saving cart to localStorage:', e);
    }
  }, [state]);

  // Context value
  const value = {
    state,
    addItem: (product: Product, quantity: number = 1) => {
      console.log('addItem called with product:', product.name, 'quantity:', quantity);
      dispatch({ type: 'ADD_ITEM', product, quantity });
    },
    updateQuantity: (productId: string, quantity: number) => 
      dispatch({ type: 'UPDATE_QUANTITY', productId, quantity }),
    removeItem: (productId: string) => 
      dispatch({ type: 'REMOVE_ITEM', productId }),
    clearCart: () => 
      dispatch({ type: 'CLEAR_CART' }),
    applyDiscount: (amount: number) => 
      dispatch({ type: 'APPLY_DISCOUNT', amount }),
    removeDiscount: () => 
      dispatch({ type: 'REMOVE_DISCOUNT' })
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use cart context
export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
} 