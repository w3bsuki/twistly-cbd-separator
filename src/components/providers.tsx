"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { CartProvider } from "@/context/cart-context";
import { Toaster } from "@/components/ui/toaster";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <CartProvider>
        {children}
        <Toaster />
      </CartProvider>
    </ThemeProvider>
  );
} 