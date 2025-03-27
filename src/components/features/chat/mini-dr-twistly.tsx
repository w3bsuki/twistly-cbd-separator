"use client"

import React from 'react'
import { ArrowRight } from 'lucide-react'

interface MiniDrTwistlyProps {
  className?: string
}

export function MiniDrTwistly({ className }: MiniDrTwistlyProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Open the full Dr. Twistly dialog
    const drTwistlyButton = document.querySelector('[data-dr-twistly-trigger]') as HTMLButtonElement;
    if (drTwistlyButton) drTwistlyButton.click();
  };

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 shadow-md border border-gray-100">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full shadow-sm p-3 flex items-center justify-center">
          <img 
            src="/images/4.png" 
            alt="Dr. Twistly" 
            className="w-12 h-12 object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-1">Need help finding the right product?</h3>
          <p className="text-sm text-gray-600 mb-4">Ask Dr. Twistly a quick question and get instant recommendations</p>
          <form className="flex gap-2" onSubmit={handleSubmit}>
            <input 
              type="text" 
              placeholder="E.g., What can help with sleep issues?" 
              className="flex-1 px-4 py-2 text-sm rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-green-500/30"
            />
            <button 
              type="submit" 
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-4 py-2 text-sm font-medium flex items-center"
            >
              Ask <ArrowRight className="ml-2 h-3.5 w-3.5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 