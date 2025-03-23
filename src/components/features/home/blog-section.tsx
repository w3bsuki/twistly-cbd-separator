'use client'

import React from 'react'
import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  BookOpen, 
  ThumbsUp, 
  Brain, 
  HeartPulse, 
  Zap,
  UserCircle2
} from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Blog article data
const blogArticles = [
  {
    title: "CBD for Anxiety and Stress Management: What Science Says",
    date: "May 15, 2024",
    readTime: "8 min read",
    image: "/images/tincture2.png",
    category: "Mental Health",
    categoryColor: "bg-green-600",
    excerpt: "Explore the scientific evidence behind CBD's potential to reduce anxiety and manage stress in everyday life.",
    author: "Dr. Emma Wilson",
    authorRole: "Neuroscientist",
    icon: <Brain className="h-6 w-6 text-green-500" />,
    href: "/blog/cbd-anxiety-stress-management",
    tags: ["Anxiety", "Stress Relief", "Mental Health"]
  },
  {
    title: "How CBD Supports Recovery After Intense Workouts",
    date: "June 2, 2024",
    readTime: "6 min read",
    image: "/images/tincture2.png",
    category: "Sport & Recovery",
    categoryColor: "bg-red-600",
    excerpt: "Discover how CBD helps athletes recover faster and reduce inflammation and muscle soreness after intense training sessions.",
    author: "Mark Stevens",
    authorRole: "Sports Physiologist",
    icon: <Zap className="h-6 w-6 text-red-500" />,
    href: "/blog/cbd-workout-recovery",
    tags: ["Recovery", "Inflammation", "Performance"]
  },
  {
    title: "CBD and Sleep: Improving Your Nightly Rest Naturally",
    date: "April 28, 2024",
    readTime: "7 min read",
    image: "/images/tincture2.png",
    category: "Wellness",
    categoryColor: "bg-indigo-600",
    excerpt: "Learn how CBD could help improve sleep quality and address common sleep issues without the side effects of traditional sleep medications.",
    author: "Dr. Sarah Chen",
    authorRole: "Sleep Specialist",
    icon: <HeartPulse className="h-6 w-6 text-indigo-500" />,
    href: "/blog/cbd-sleep-improvement",
    tags: ["Sleep", "Relaxation", "Wellness"]
  }
]

export function BlogSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 25,
        duration: 0.5 
      }
    }
  };
  
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center mb-8"
        >
          <Badge className="bg-green-600 text-white hover:bg-green-700 px-3 py-0.5 rounded-full text-xs mb-3">
            <BookOpen className="mr-1 h-3 w-3" />
            Featured Articles
          </Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-600 to-green-700 mb-2">
            Learn About CBD Benefits
          </h2>
          <p className="text-green-700 text-sm md:text-base max-w-3xl text-center">
            Discover the latest research and insights about how CBD can enhance your wellness journey
          </p>
        </motion.div>

        {/* Articles Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {blogArticles.map((article, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
            >
              <Card className="group overflow-hidden border border-green-100 hover:border-green-300 shadow-sm transition-all duration-300 h-full flex flex-col">
                <div className="relative">
                  <div className="relative h-44 w-full overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="h-full w-full"
                    >
                      <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    </motion.div>
                    <motion.div 
                      className="absolute top-2 left-2 z-10"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Badge className={`${article.categoryColor} text-white text-xs px-2 py-0.5`}>
                        {article.category}
                      </Badge>
                    </motion.div>
                  </div>
                </div>
                
                <CardContent className="flex-grow p-3">
                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <motion.h3 
                    className="font-bold text-base mb-2 group-hover:text-green-700 transition-colors line-clamp-2"
                    whileHover={{ x: 2 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {article.title}
                  </motion.h3>
                  
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="rounded-full w-6 h-6 bg-green-100 flex items-center justify-center">
                      <div className="scale-75">{article.icon}</div>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">{article.author}</p>
                      <p className="text-[10px] text-gray-500">{article.authorRole}</p>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="border-t border-gray-100 p-3">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex gap-1.5">
                      {article.tags.slice(0, 2).map((tag, i) => (
                        <Badge key={i} variant="outline" className="bg-gray-50 text-[10px] px-1.5 py-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <motion.div
                      whileHover={{ x: 3 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <Link 
                        href={article.href} 
                        className="text-green-700 font-medium text-xs flex items-center gap-1 group-hover:gap-1.5 transition-all"
                      >
                        Read More <ArrowRight className="h-3 w-3" />
                      </Link>
                    </motion.div>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Explore Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button 
            asChild 
            size="sm" 
            className="bg-green-700 hover:bg-green-800 text-white text-sm rounded-full px-6 py-1.5 shadow-sm relative overflow-hidden group"
          >
            <Link href="/blog">
              <motion.span 
                className="absolute inset-0 w-0 bg-green-900 transition-all duration-300 group-hover:w-full"
                initial={{ width: "0%" }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center">
                Explore All Articles
                <motion.div 
                  className="ml-1.5 inline-flex"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.div>
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
} 