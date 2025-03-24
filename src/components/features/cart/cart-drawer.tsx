'use client';

import React from 'react';
import { ShoppingCart, X, Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

export function CartDrawer() {
  const { state, updateQuantity, removeItem } = useCart();
  const { items = [], itemCount = 0, subtotal = 0, tax = 0, shipping = 0, discount = 0, total = 0 } = state || {};
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-black hover:text-gray-700 hover:bg-gray-50 relative rounded-full h-10 w-10"
            aria-label="Open shopping cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <AnimatePresence>
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  className="absolute -top-1 -right-1 bg-green-700 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
                >
                  {itemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </Button>
        </motion.div>
      </SheetTrigger>
      
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col">
        <SheetHeader className="mb-4">
          <SheetTitle className="text-xl font-bold tracking-tight">Your Cart ({itemCount})</SheetTitle>
        </SheetHeader>
        
        {!items?.length ? (
          <div className="flex flex-col items-center justify-center flex-1 py-10">
            <motion.div 
              className="bg-gray-100 p-5 rounded-full mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ShoppingCart className="h-8 w-8 text-gray-400" />
            </motion.div>
            <motion.h3 
              className="text-base font-semibold tracking-tight mb-2"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              Your cart is empty
            </motion.h3>
            <motion.p 
              className="text-gray-500 text-center mb-6 font-light text-sm"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              Looks like you haven't added any products to your cart yet.
            </motion.p>
            <SheetClose asChild>
              <Link href="/shop">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button className="bg-green-700 hover:bg-green-800 font-medium text-sm tracking-tight">Continue Shopping</Button>
                </motion.div>
              </Link>
            </SheetClose>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              {items.map((item, index) => (
                <motion.div 
                  key={item.product.id} 
                  className="py-3 border-b last:border-b-0"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                >
                  <div className="flex items-start gap-3">
                    <Link href={`/shop/${item.product.id}`} className="shrink-0">
                      <motion.div 
                        className="relative h-16 w-16 overflow-hidden rounded-md border border-gray-100"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image 
                          src={item.product.image} 
                          alt={item.product.name}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    </Link>
                    
                    <div className="flex-1 min-w-0">
                      <Link href={`/shop/${item.product.id}`}>
                        <h4 className="font-medium text-sm text-gray-900 hover:text-green-700 transition-colors tracking-tight">
                          {item.product.name}
                        </h4>
                      </Link>
                      <p className="text-xs text-gray-500 mt-0.5 font-light">
                        {item.product.details.size} | {item.product.details.concentration}
                      </p>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center border rounded-md">
                          <motion.button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="p-1 text-gray-600 hover:bg-gray-100"
                            aria-label="Decrease quantity"
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.1 }}
                          >
                            <Minus className="h-3 w-3" />
                          </motion.button>
                          <span className="px-2 text-xs font-medium">{item.quantity}</span>
                          <motion.button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="p-1 text-gray-600 hover:bg-gray-100"
                            disabled={item.quantity >= item.product.stock}
                            aria-label="Increase quantity"
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.1 }}
                          >
                            <Plus className="h-3 w-3" />
                          </motion.button>
                        </div>
                        
                        <motion.button
                          onClick={() => removeItem(item.product.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          aria-label="Remove item"
                          whileHover={{ scale: 1.1, rotate: 10 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                        </motion.button>
                      </div>
                    </div>
                    
                    <div className="text-right">
                      <span className="font-semibold text-sm">
                        ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                      </span>
                      {item.product.discountPrice && (
                        <p className="text-xs text-gray-500 line-through font-light">
                          ${(item.product.price * item.quantity).toFixed(2)}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-auto pt-3">
              <Separator className="mb-3" />
              
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500 font-medium">Discount</span>
                    <span className="text-red-600 font-medium">-${discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500 font-medium">Shipping</span>
                  <span className="font-medium">{shipping > 0 ? `$${shipping.toFixed(2)}` : 'Free'}</span>
                </div>
                
                <Separator className="my-2" />
                
                <motion.div 
                  className="flex justify-between text-base font-semibold tracking-tight"
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </motion.div>
              </div>
              
              <SheetFooter className="mt-5">
                <div className="grid w-full gap-2">
                  <Link href="/checkout" passHref className="w-full">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className="w-full"
                    >
                      <Button className="w-full bg-green-700 hover:bg-green-800 font-medium text-sm h-9">
                        Checkout
                      </Button>
                    </motion.div>
                  </Link>
                  
                  <SheetClose asChild>
                    <Link href="/shop" passHref className="w-full">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="w-full"
                      >
                        <Button variant="outline" className="w-full text-sm font-medium h-9">
                          Continue Shopping
                        </Button>
                      </motion.div>
                    </Link>
                  </SheetClose>
                </div>
              </SheetFooter>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
} 