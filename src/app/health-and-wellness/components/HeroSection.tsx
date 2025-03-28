'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, ShieldCheck, Bot, Search, 
  Sparkles, SendHorizontal, ShoppingCart,
  CheckCircle, X, ChevronRight, Zap, 
  Brain, Moon, Heart, MessageSquare, Star, Activity
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Container } from '@/components/ui/container'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

interface HeroSectionProps {
  pageTheme: {
    gradients: {
      hero: string;
    };
    colors: {
      primary: string;
      accent: string;
      accentHover: string;
      border: string;
      light: string;
    };
  }
}

export function HeroSection({ pageTheme }: HeroSectionProps) {
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);

  const suggestions = [
    "What CBD products help with anxiety?",
    "Best options for chronic pain relief",
    "Help me sleep better at night",
    "Products for inflammation reduction",
    "CBD for stress management"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsTyping(e.target.value.length > 0);
    setShowSuggestions(e.target.value.length > 0);
    setActiveSuggestion(-1);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setInputValue(suggestion);
    setShowSuggestions(false);
    setIsTyping(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!showSuggestions) return;
    
    // Arrow down
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestion(prev => 
        prev < suggestions.length - 1 ? prev + 1 : prev
      );
    }
    // Arrow up
    else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestion(prev => 
        prev > 0 ? prev - 1 : prev
      );
    }
    // Enter
    else if (e.key === 'Enter' && activeSuggestion >= 0) {
      e.preventDefault();
      handleSuggestionClick(suggestions[activeSuggestion]);
    }
    // Escape
    else if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Show thinking state
    setIsThinking(true);
    setShowSuggestions(false);
    
    // Simulate AI thinking
    setTimeout(() => {
      // Here you would typically connect to your agent backend
      console.log('Submitted query:', inputValue);
      // Clear input and reset states after "processing"
      setInputValue('');
      setIsTyping(false);
      setIsThinking(false);
      // You could also redirect to a chat interface or open a chat modal
    }, 2000);
  };

  const clearInput = () => {
    setInputValue('');
    setIsTyping(false);
    setShowSuggestions(false);
  };

  return (
    <section className="py-8 relative overflow-hidden bg-gradient-to-b from-green-100 to-white">
      {/* Background with enhanced ShadCN style gradient */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-green-100 to-white">
        <div className="absolute -top-40 -left-40 h-80 w-80 rounded-full bg-green-200/60 blur-3xl" />
        <div className="absolute top-10 right-0 h-60 w-60 rounded-full bg-green-300/40 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-40 w-40 rounded-full bg-emerald-100/50 blur-2xl" />
      </div>
      
      <Container className="relative z-10">
        <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl shadow-md p-5 overflow-hidden">
          <div className="flex flex-col items-center max-w-3xl mx-auto">
            {/* Main Content - Text */}
            <div className="text-center mb-5">
              <div className="inline-flex bg-gradient-to-br from-green-50/80 to-white rounded-full border border-green-200/40 shadow-sm p-1.5">
                <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-2 rounded-full shadow-md flex items-center gap-2 font-medium">
                  <Sparkles className="h-4 w-4" />
                  <span>Health & Wellness</span>
                </div>
              </div>
              
              <div className="mt-4 mb-3">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900 leading-tight">
                  Your Journey to 
                  <span className="relative ml-2 inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text">Natural Balance</span>
                    <motion.div 
                      className="absolute -bottom-1 left-0 h-3 w-full bg-green-200 rounded-sm z-0"
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "100%", opacity: 1 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    />
                  </span>
                </h2>
              </div>
              
              <p className="text-gray-600 max-w-2xl mx-auto mb-5 text-base md:text-lg leading-relaxed">
                Discover our premium CBD wellness collection crafted to restore balance, 
                reduce stress, improve sleep, and enhance your overall wellbeing.
              </p>
            </div>

            {/* AI Assistant Container - Enhanced with green border and gradient */}
            <div className="bg-gradient-to-br from-green-100/70 to-white rounded-lg border-2 border-green-300/70 shadow-md p-4 w-full mb-5">
              {/* AI Assistant Card */}
              <Card className="relative bg-white border border-green-200 shadow-sm overflow-hidden w-full ring-1 ring-green-100">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl opacity-80 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-green-100 rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl opacity-60 pointer-events-none"></div>
                
                <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 p-3.5 pb-3 flex flex-row items-center gap-3 relative overflow-hidden">
                  <div className="relative flex items-center gap-2.5 z-10">
                    <div className="relative w-12 h-12 rounded-full bg-white/30 flex items-center justify-center border-2 border-white/40 ring-2 ring-green-600/20">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Image
                          src="/images/2.png"
                          alt="Dr. Twistly"
                          width={40}
                          height={40}
                          className="object-contain drop-shadow-sm"
                        />
                      </motion.div>
                      <motion.div 
                        className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-300 border-2 border-white"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    </div>
                    
                    <div className="flex flex-col">
                      <div className="flex items-center gap-1.5">
                        <h3 className="font-bold text-white text-lg">Dr. Twistly</h3>
                        <Badge className="bg-white/20 hover:bg-white/30 text-white border-none text-xs h-5 px-1.5">
                          AI
                        </Badge>
                      </div>
                      <p className="text-xs text-white/80">Wellness & CBD Specialist</p>
                    </div>
                  </div>
                  
                  <div className="ml-auto hidden md:flex items-center gap-1.5 bg-white/15 text-white/90 text-xs rounded-full px-2.5 py-1 border border-white/10">
                    <span className="inline-flex h-2 w-2 rounded-full bg-green-300 animate-pulse"></span>
                    <span>Online Now</span>
                  </div>
                </CardHeader>
                
                <div className="px-4 py-2.5 bg-gradient-to-r from-green-50 to-green-100/30 border-b border-green-200 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-green-700">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Trusted CBD Recommendations</span>
                  </div>
                  <Badge variant="outline" className="bg-white text-green-600 hover:bg-green-50 text-xs px-1.5 h-5 font-normal border-green-200 shadow-sm">
                    <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" /> 4.9/5
                  </Badge>
                </div>
                
                <CardContent className="p-3.5 pt-2.5 bg-gradient-to-b from-white to-green-50/30">
                  <div className="flex flex-col space-y-2 max-h-[150px] overflow-y-auto scrollbar-thin scrollbar-thumb-green-200 scrollbar-track-transparent pr-1">
                    {/* AI Message */}
                    <motion.div 
                      className="bg-gradient-to-br from-green-50 to-green-50/50 rounded-lg p-3 border-2 border-green-200/70 relative w-full shadow-sm"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute top-0 left-5 w-3 h-3 bg-green-50 border-t-2 border-l-2 border-green-200/70 transform -translate-y-1/2 rotate-45"></div>
                      <div className="w-full">
                        <div className="font-medium text-sm text-green-800 w-full whitespace-nowrap overflow-hidden text-ellipsis">Hi, I am Dr. Twistly, your CBD and Wellness Guide. How can I help you today? 😊</div>
                        <div className="flex justify-end w-full">
                          <span className="text-xs text-green-600/60 mt-1">Just now</span>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {[
                      {topic: 'Sleep', desc: 'Trouble sleeping?', icon: <Moon className="h-3.5 w-3.5" />},
                      {topic: 'Stress', desc: 'Feeling anxious?', icon: <Brain className="h-3.5 w-3.5" />},
                      {topic: 'Pain', desc: 'Joint discomfort?', icon: <Activity className="h-3.5 w-3.5" />},
                      {topic: 'Anxiety', desc: 'Need calm?', icon: <Heart className="h-3.5 w-3.5" />}
                    ].map((item, i) => (
                      <Button 
                        key={i}
                        variant="outline" 
                        className="border-green-200 bg-white/80 text-green-700 hover:bg-green-50 hover:border-green-300 h-auto py-2 flex-col items-start justify-start font-normal shadow-sm"
                        onClick={() => handleSuggestionClick(`CBD for ${item.topic.toLowerCase()} relief`)}
                      >
                        <div className="flex items-center w-full">
                          <div className="h-7 w-7 rounded-full bg-gradient-to-br from-green-100 to-green-50 border border-green-200 flex items-center justify-center mr-2 shadow-sm">
                            {item.icon}
                          </div>
                          <div className="text-left">
                            <div className="font-medium text-sm">{item.topic}</div>
                            <div className="text-xs text-gray-500">{item.desc}</div>
                          </div>
                          <MessageSquare className="h-3 w-3 ml-auto opacity-60" />
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
                
                <Separator className="bg-green-200" />
                
                <CardFooter className="p-3.5 pt-2.5 bg-gradient-to-t from-green-50/50 to-white">
                  <form onSubmit={handleSubmit} className="w-full flex items-center">
                    <div className="relative w-full">
                      <Input
                        type="text"
                        placeholder="Ask me anything about CBD wellness..."
                        className="w-full pr-20 pl-10 h-10 border-green-300 rounded-full text-sm focus-visible:ring-green-500 focus-visible:ring-offset-0 focus-visible:border-green-400 shadow-sm"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                        disabled={isThinking}
                        style={{width: '100%'}}
                      />
                      
                      {isThinking ? (
                        <div className="absolute left-3.5 top-1/2 transform -translate-y-1/2">
                          <div className="flex items-center gap-1">
                            <motion.div 
                              className="h-2 w-2 rounded-full bg-green-500"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                            />
                            <motion.div 
                              className="h-2 w-2 rounded-full bg-green-500"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ repeat: Infinity, duration: 1, delay: 0.3 }}
                            />
                            <motion.div 
                              className="h-2 w-2 rounded-full bg-green-500"
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ repeat: Infinity, duration: 1, delay: 0.6 }}
                            />
                          </div>
                        </div>
                      ) : (
                        <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-green-500" />
                      )}
                      
                      <div className="absolute right-1.5 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                        {inputValue && !isThinking && (
                          <button 
                            type="button" 
                            className="h-6 w-6 flex items-center justify-center text-gray-400 hover:text-gray-600"
                            onClick={clearInput}
                          >
                            <X className="h-3.5 w-3.5" />
                          </button>
                        )}
                        
                        <Button 
                          type="submit" 
                          size="icon"
                          className="h-8 w-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-md"
                          disabled={isThinking || !inputValue.trim()}
                        >
                          <SendHorizontal className="h-3.5 w-3.5" />
                        </Button>
                      </div>
                    </div>
                  </form>
                </CardFooter>
              </Card>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 w-full max-w-2xl mx-auto">
              {/* Shop Health Products Button Container */}
              <div className="bg-gradient-to-br from-green-100/70 to-white rounded-lg border-2 border-green-300/70 shadow-md p-1.5 w-full flex">
                <Button 
                  className={`${pageTheme.colors.accent} ${pageTheme.colors.accentHover} text-white shadow-md w-full border border-green-700/20`}
                  size="lg"
                  asChild
                >
                  <Link href="#featured-products" className="flex items-center justify-center">
                    Shop Health Products
                    <ShoppingCart className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              
              {/* Find Your Solution Button Container */}
              <div className="bg-gradient-to-br from-green-100/70 to-white rounded-lg border-2 border-green-300/70 shadow-md p-1.5 w-full flex">
                <Button 
                  variant="outline" 
                  className="border-green-300 text-green-700 hover:bg-green-50 hover:text-green-800 w-full shadow-sm"
                  size="lg"
                  asChild
                >
                  <Link href="#health-conditions" className="flex items-center justify-center">
                    Find Your Solution
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}