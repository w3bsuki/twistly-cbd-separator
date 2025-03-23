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
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-green-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:20px_20px] opacity-20 pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl px-4 relative">
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Badge className="bg-green-600 text-white hover:bg-green-700 px-4 py-1 rounded-full text-sm mb-4">
              <BookOpen className="mr-1 h-4 w-4" />
              Featured Articles
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-800 via-green-600 to-green-700 mb-4">
              Learn About CBD Benefits
            </h2>
            <p className="text-green-700 text-lg max-w-3xl text-center">
              Discover the latest research and insights about how CBD can enhance your wellness journey
            </p>
          </motion.div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogArticles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden border border-green-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                <div className="relative p-1">
                  <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-3 left-3">
                      <Badge className={`${article.categoryColor} text-white`}>
                        {article.category}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <CardContent className="flex-grow p-5">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-xl mb-3 group-hover:text-green-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-auto">
                    <div className="rounded-full w-8 h-8 bg-green-100 flex items-center justify-center">
                      {article.icon}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{article.author}</p>
                      <p className="text-xs text-gray-500">{article.authorRole}</p>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="border-t border-gray-100 p-4">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex gap-2">
                      {article.tags.slice(0, 2).map((tag, i) => (
                        <Badge key={i} variant="outline" className="bg-gray-50">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Link 
                      href={article.href} 
                      className="text-green-700 font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Explore Button */}
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Button asChild size="lg" className="bg-green-700 hover:bg-green-800 text-white rounded-full px-8 py-6 shadow-md">
              <Link href="/blog">
                Explore All Articles
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 