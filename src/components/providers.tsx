/**
 * Application Providers
 * 
 * This component wraps the application with all necessary context providers:
 * - ThemeProvider: Handles light/dark mode theming
 * - PreferencesProvider: Manages user preferences
 * - CartProvider: Manages the shopping cart state
 * - Toaster: Provides toast notifications
 * 
 * Additional providers should be added here as the application grows.
 */

"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { CartProvider } from "@/context/cart-context";
import { PreferencesProvider } from "@/context/preferences-context";
import { Toaster } from "@/components/ui/toaster";

interface ProvidersProps {
  /** The application UI to be wrapped with providers */
  children: ReactNode;
}

/**
 * Providers component that wraps the application with context providers
 * 
 * @example
 * ```tsx
 * <Providers>
 *   <App />
 * </Providers>
 * ```
 */
export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      enableSystem
    >
      <PreferencesProvider>
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </PreferencesProvider>
    </ThemeProvider>
  );
} 