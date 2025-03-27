"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRightIcon, 
  Leaf, 
  Mail, 
  ChevronLeft, 
  ChevronRight, 
  ShoppingBag, 
  CheckCircle, 
  Star,
  Sparkles
} from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { Container } from "@/components/ui/container";

const FEATURED_COLLECTIONS = [
  {
    id: 1,
    title: "Health & Wellness",
    benefits: [
      "Stress reduction",
      "Better sleep quality",
      "Relief from discomfort",
      "Mood improvement"
    ],
    bestSeller: {
      name: "Full Spectrum CBD Oil",
      image: "/images/tincture2.png",
      rating: 4.9,
      reviews: 128,
      price: "$59.99",
      discount: "$69.99"
    },
    href: "/health-and-wellness",
    color: "green",
    gradient: "from-green-50 via-green-100/50 to-green-50/30",
    buttonGradient: "from-green-600 to-green-700",
    accentColor: "bg-green-600",
    textColor: "text-green-800",
    lightBg: "bg-green-50"
  },
  {
    id: 2,
    title: "Sport & Recovery",
    benefits: [
      "Muscle recovery",
      "Joint support",
      "Inflammation reduction",
      "Performance enhancement"
    ],
    bestSeller: {
      name: "Sport Recovery Gel",
      image: "/images/tincture2.png",
      rating: 4.8,
      reviews: 94,
      price: "$54.99",
      discount: "$64.99"
    },
    href: "/sport-and-recovery",
    color: "blue",
    gradient: "from-blue-50 via-blue-100/50 to-blue-50/30",
    buttonGradient: "from-blue-600 to-blue-700",
    accentColor: "bg-blue-600",
    textColor: "text-blue-800",
    lightBg: "bg-blue-50"
  },
  {
    id: 3,
    title: "Beauty & Cosmetics",
    benefits: [
      "Anti-aging properties",
      "Skin inflammation relief",
      "Natural moisturizing",
      "Acne reduction"
    ],
    bestSeller: {
      name: "CBD Face Serum",
      image: "/images/tincture2.png",
      rating: 4.9,
      reviews: 76,
      price: "$69.99",
      discount: "$79.99"
    },
    href: "/beauty-and-cosmetics",
    color: "purple",
    gradient: "from-purple-50 via-purple-100/50 to-purple-50/30",
    buttonGradient: "from-purple-600 to-purple-700",
    accentColor: "bg-purple-600",
    textColor: "text-purple-800",
    lightBg: "bg-purple-50"
  },
  {
    id: 4,
    title: "Hybrid & Mushrooms",
    benefits: [
      "Enhanced focus",
      "Immune system boost",
      "Natural energy",
      "Cognitive support"
    ],
    bestSeller: {
      name: "CBD + Lion's Mane Blend",
      image: "/images/tincture2.png",
      rating: 4.7,
      reviews: 52,
      price: "$64.99",
      discount: "$74.99"
    },
    href: "/hybrid-and-mushrooms",
    color: "indigo",
    gradient: "from-indigo-50 via-indigo-100/50 to-indigo-50/30",
    buttonGradient: "from-indigo-600 to-indigo-700",
    accentColor: "bg-indigo-600",
    textColor: "text-indigo-800",
    lightBg: "bg-indigo-50"
  },
  {
    id: 5,
    title: "Pet CBD",
    benefits: [
      "Anxiety relief",
      "Joint health support",
      "Better sleep",
      "Calming effect"
    ],
    bestSeller: {
      name: "Pet CBD Oil Drops",
      image: "/images/tincture2.png",
      rating: 4.8,
      reviews: 64,
      price: "$44.99",
      discount: "$49.99"
    },
    href: "/pet-cbd",
    color: "amber",
    gradient: "from-amber-50 via-amber-100/50 to-amber-50/30",
    buttonGradient: "from-amber-600 to-amber-700",
    accentColor: "bg-amber-600",
    textColor: "text-amber-800",
    lightBg: "bg-amber-50"
  }
];

interface HeroAction {
  text: string;
  href: string;
  icon?: React.ReactNode;
  variant?: "default" | "outline" | "secondary";
}

interface HeroProps {
  badge?: {
    text: string;
    action?: {
      text: string;
      href: string;
    };
  };
  title: string;
  description: string;
  actions: HeroAction[];
  newsletterPlaceholder?: string;
}

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 500 : -500,
    opacity: 0
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 250,
      damping: 25
    }
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 500 : -500,
    opacity: 0,
    transition: {
      duration: 0.3
    }
  })
};

export function CBDHeroSection({
  badge = {
    text: "Premium CBD Products",
    action: {
      text: "Learn more",
      href: "/about",
    },
  },
  title = "Natural Wellness Through Premium CBD",
  description = "Discover our range of high-quality, lab-tested CBD products designed to enhance your wellbeing. From oils to edibles, we have everything you need for a balanced lifestyle.",
  actions = [
    {
      text: "Shop Now",
      href: "/products",
      variant: "default",
    },
    {
      text: "Learn More",
      href: "/about",
      variant: "outline",
      icon: <Leaf className="h-4 w-4" />,
    },
  ],
  newsletterPlaceholder = "Enter your email",
}: HeroProps) {
  const [email, setEmail] = useState("");
  const [currentCollection, setCurrentCollection] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const nextCollection = () => {
    setDirection(1);
    setCurrentCollection((prev) => (prev + 1) % FEATURED_COLLECTIONS.length);
  };

  const previousCollection = () => {
    setDirection(-1);
    setCurrentCollection((prev) => 
      prev === 0 ? FEATURED_COLLECTIONS.length - 1 : prev - 1
    );
  };

  // Auto-advance the slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setTimeout(() => {
      nextCollection();
    }, 6000);
    
    return () => clearTimeout(timer);
  }, [currentCollection, isAutoPlaying]);

  // Pause auto-advance on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
    setIsHovered(false);
  };

  const collection = FEATURED_COLLECTIONS[currentCollection];
  
  // Handle newsletter submission
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    // Would connect to API
    alert(`Thank you for subscribing with ${email}! Check your email for a confirmation.`);
    setEmail("");
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-green-50/80 to-white border-b border-green-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-green-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-green-100/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 left-1/4 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="py-12 md:py-16 lg:py-20">
          {/* Hero Content - Centered */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            {/* Badge */}
            {badge && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-6 flex justify-center"
              >
                <Badge 
                  className="px-4 py-1.5 rounded-full bg-gradient-to-r from-green-500/90 to-green-600/90 text-white shadow-sm border-0 flex items-center gap-1.5 w-fit"
                >
                  <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                  <span className="font-medium tracking-wide">{badge.text}</span>
                  {badge.action && (
                    <a 
                      href={badge.action.href} 
                      className="ml-1.5 pl-1.5 border-l border-white/20 flex items-center text-white/90 hover:text-white transition-colors"
                    >
                      {badge.action.text}
                      <ArrowRightIcon className="ml-1 h-3 w-3 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </Badge>
              </motion.div>
            )}
            
            {/* Title */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-700 to-green-800">
                {title}
              </span>
            </motion.h1>
            
            {/* Description */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              {description}
            </motion.p>
            
            {/* Actions */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {actions.map((action, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    variant={action.variant === "default" ? "primary" : "outlineGreen"} 
                    size="lg" 
                    rounded="full"
                    className="shadow-sm"
                    asChild
                  >
                    <a href={action.href} className="flex items-center gap-2 px-6 py-3 group">
                      {action.icon}
                      <span>{action.text}</span>
                      {!action.icon && action.variant === "default" && (
                        <ArrowRightIcon className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      )}
                    </a>
                  </Button>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Newsletter */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="max-w-md mx-auto w-full"
              onSubmit={handleNewsletterSubmit}
            >
              <div className="bg-white shadow-md border-0 rounded-full flex overflow-hidden ring-0 outline-none focus-within:outline-none focus-within:ring-0 focus-within:border-green-200">
                <div className="flex-grow flex items-center pl-4">
                  <Mail className="h-4 w-4 text-green-500 mr-2" />
                  <input 
                    type="email" 
                    placeholder={newsletterPlaceholder}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full py-3 text-sm outline-none ring-0 focus:outline-none focus:ring-0 border-0 text-gray-600 placeholder-gray-400"
                    required
                  />
                </div>
                <button 
                  type="submit"
                  className="rounded-full my-1 mr-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-sm hover:shadow-md transition-all duration-200 px-5 py-2 text-sm font-medium outline-none focus:outline-none border-0 ring-0 focus:ring-0"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 flex items-center justify-center gap-1">
                <CheckCircle className="h-3 w-3 text-green-500" />
                <span>No spam, unsubscribe anytime</span>
              </p>
            </motion.form>
          </div>
        
          {/* Product Slider - Now below hero content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="w-full max-w-4xl mx-auto mt-8"
          >
            <div 
              className="rounded-xl overflow-hidden shadow-xl border border-green-100 bg-white relative hover:shadow-2xl transition-shadow duration-300"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Slider Navigation */}
              <div className="absolute top-4 right-4 z-20 flex items-center gap-3">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={previousCollection}
                        className="p-2 rounded-full bg-white/90 backdrop-blur-sm border border-green-100 text-green-700 hover:bg-green-50 transition-all shadow-sm"
                        aria-label="Previous collection"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Previous</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={nextCollection}
                        className="p-2 rounded-full bg-white/90 backdrop-blur-sm border border-green-100 text-green-700 hover:bg-green-50 transition-all shadow-sm"
                        aria-label="Next collection"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </motion.button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">
                      <p>Next</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              <div className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden relative">
                <AnimatePresence custom={direction} initial={false}>
                  <motion.div
                    key={currentCollection}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="absolute inset-0"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${collection.gradient}`} />
                    
                    <div className="absolute inset-0 flex flex-col md:flex-row">
                      {/* Collection Info - Left Side */}
                      <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between relative z-10">
                        <div>
                          <Badge 
                            className={`mb-4 px-2.5 py-1 rounded-full ${collection.accentColor} text-white text-xs font-medium shadow-sm`}
                          >
                            {collection.title}
                          </Badge>
                          
                          <h2 className={`text-xl md:text-2xl font-bold mb-4 ${collection.textColor}`}>
                            Explore {collection.title} Collection
                          </h2>
                          
                          <ul className="space-y-2 mb-6">
                            {collection.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm md:text-base text-gray-700">
                                <div className={`h-1.5 w-1.5 rounded-full ${collection.accentColor}`} />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant={collection.color === "green" ? "green" : 
                                   collection.color === "blue" ? "blue" : 
                                   collection.color === "purple" ? "purple" : 
                                   collection.color === "indigo" ? "blue" : 
                                   "amber"}
                            rounded="full"
                            className="shadow-sm"
                            asChild
                          >
                            <a href={collection.href} className="flex items-center justify-center gap-2 py-2.5">
                              Explore Collection
                              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </a>
                          </Button>
                        </motion.div>
                      </div>
                      
                      {/* Product Image - Right Side */}
                      <div className="w-full md:w-1/2 relative p-4 flex items-center justify-center">
                        <div className={`absolute right-8 top-24 z-30 rounded-full px-3 py-1 ${collection.lightBg} ${collection.textColor} text-xs font-medium shadow-sm`}>
                          Best Seller
                        </div>
                        
                        <motion.div 
                          className="relative w-full h-[250px] flex items-center justify-center"
                          animate={{ 
                            y: isHovered ? [0, -5, 0] : 0
                          }}
                          transition={{ 
                            repeat: isHovered ? Infinity : 0, 
                            duration: 2.5,
                            ease: "easeInOut"
                          }}
                        >
                          <Image
                            src="/images/tincture2.png"
                            alt={collection.bestSeller.name}
                            width={200}
                            height={200}
                            className="object-contain drop-shadow-lg transition-transform duration-500 hover:scale-105 max-h-[200px]"
                            priority
                          />
                        </motion.div>
                        
                        {/* Product Info Card */}
                        <motion.div 
                          className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-[250px] bg-white rounded-lg shadow-lg border border-gray-100 p-3 z-20"
                          whileHover={{ 
                            boxShadow: "0 10px 15px -5px rgba(0, 0, 0, 0.1)"
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                                {collection.bestSeller.name}
                              </h3>
                              <div className="flex items-center mt-0.5">
                                <div className="flex items-center">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={cn(
                                        "w-3 h-3",
                                        i < Math.floor(collection.bestSeller.rating)
                                          ? "text-yellow-400 fill-yellow-400"
                                          : "text-gray-200"
                                      )}
                                    />
                                  ))}
                                </div>
                                <span className="ml-1 text-xs text-gray-500">
                                  ({collection.bestSeller.reviews})
                                </span>
                              </div>
                            </div>
                            <div className="text-right">
                              <span className="text-sm font-bold text-gray-900">
                                {collection.bestSeller.price}
                              </span>
                              {collection.bestSeller.discount && (
                                <span className="block text-xs text-gray-500 line-through">
                                  {collection.bestSeller.discount}
                                </span>
                              )}
                            </div>
                          </div>
                          <motion.div whileTap={{ scale: 0.98 }}>
                            <Button
                              size="sm"
                              variant="outlineGreen"
                              rounded="full"
                              className="w-full"
                            >
                              <ShoppingBag className="mr-1 h-3 w-3" />
                              Add to Cart
                            </Button>
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            
            {/* Collection Thumbnails */}
            <div className="mt-5 hidden md:flex justify-center gap-2">
              {FEATURED_COLLECTIONS.map((col, index) => (
                <motion.button
                  key={col.id}
                  whileHover={{ y: -1 }}
                  onClick={() => {
                    setDirection(index > currentCollection ? 1 : -1);
                    setCurrentCollection(index);
                  }}
                  className={cn(
                    "w-14 h-14 rounded-lg overflow-hidden border-2 transition-all duration-300",
                    currentCollection === index 
                      ? `border-${col.color}-500 ring-2 ring-${col.color}-200 shadow-md` 
                      : "border-gray-200 opacity-60 hover:opacity-100"
                  )}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src="/images/tincture2.png"
                      alt={col.title}
                      fill
                      className="object-cover"
                      sizes="56px"
                    />
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
} 