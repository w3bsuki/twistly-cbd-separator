'use client'

import React, { useState } from 'react'
import { Bot, Send, User, ArrowRight, Brain, Zap } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/common/ui/dialog'
import { cn } from '@/lib/utils'

// Mock response data
const mockResponses = [
  "Based on your symptoms, I'd recommend our CBD Sleep Aid Tincture. It contains 1000mg of full-spectrum CBD with added melatonin and chamomile to help with insomnia and promote better sleep quality.",
  "For chronic back pain, our Recovery Blend CBD Oil would be most effective. It's specially formulated with 2000mg of CBD and anti-inflammatory terpenes that target joint and muscle pain.",
  "If you're experiencing anxiety, I would suggest trying our Calm CBD Softgels. They offer consistent dosing of 25mg CBD per capsule combined with L-theanine for stress reduction.",
  "For skin issues like eczema, our Beauty CBD Serum would be ideal. It contains 750mg CBD along with hyaluronic acid and vitamin E to reduce inflammation and hydrate skin.",
]

type Message = {
  role: 'user' | 'assistant'
  content: string
}

export function CBDDoctor() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Hi there! I'm your CBD Doctor. Tell me about your health concerns or what you're looking for, and I'll recommend the best CBD products for your needs." }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  
  const chatContainerRef = React.useRef<HTMLDivElement>(null)
  
  // Scroll to bottom of chat when messages change
  React.useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])
  
  const handleSendMessage = () => {
    if (!inputValue.trim()) return
    
    // Add user message
    const newMessages = [...messages, { role: 'user', content: inputValue }]
    setMessages(newMessages)
    setInputValue('')
    setIsLoading(true)
    
    // Simulate API response
    setTimeout(() => {
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)]
      const productLink = `<a href="/shop" class="text-green-600 font-medium hover:underline">View product →</a>`
      
      setMessages([...newMessages, { 
        role: 'assistant', 
        content: `${randomResponse}\n\n${productLink}` 
      }])
      setIsLoading(false)
    }, 1500)
  }
  
  return (
    <section id="cbd-doctor" className="py-14 relative overflow-hidden bg-gradient-to-r from-green-50 to-green-100/30">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center mb-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <Badge className="px-4 py-1 text-sm bg-white border-green-200 text-green-700 flex items-center gap-2 mb-3 mx-auto">
              <Brain className="w-4 h-4" />
              AI Powered
            </Badge>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-green-800">
              Your Personal CBD Doctor
            </h2>
            
            <p className="text-green-700 max-w-2xl mx-auto">
              Not sure which product is right for you? Our AI assistant can help recommend the perfect CBD solution for your specific needs.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-xl shadow-lg border border-green-100 overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Left Side - Doctor Profile */}
              <div className="lg:w-1/3 bg-gradient-to-b from-green-50 to-green-100 p-6 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-green-100">
                <div className="w-24 h-24 rounded-full bg-white p-1 border-2 border-green-200 shadow-md mb-4">
                  <Avatar className="w-full h-full">
                    <AvatarImage src="/images/2.png" alt="CBD Doctor" />
                    <AvatarFallback className="bg-green-600 text-white text-xl font-bold">
                      <Bot className="h-12 w-12" />
                    </AvatarFallback>
                  </Avatar>
                </div>
                
                <h3 className="text-xl font-bold text-green-800 mb-1">Dr. Twistly</h3>
                <p className="text-green-700 font-medium text-sm mb-4">AI CBD Specialist</p>
                
                <div className="flex items-center justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-green-700 mb-6">Trusted by 5,000+ customers</p>
                
                <Dialog open={open} onOpenChange={setOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg w-full shadow-sm flex items-center justify-center gap-2">
                      <Zap className="h-4 w-4" />
                      Chat Now
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
                    <DialogHeader className="px-6 pt-6 pb-4 border-b bg-green-50">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border-2 border-white bg-green-600">
                          <AvatarFallback>CBD</AvatarFallback>
                          <AvatarImage src="/images/2.png" />
                        </Avatar>
                        <div>
                          <DialogTitle>CBD Doctor</DialogTitle>
                          <DialogDescription>
                            AI-powered product recommendations
                          </DialogDescription>
                        </div>
                      </div>
                    </DialogHeader>
                    
                    <div 
                      ref={chatContainerRef}
                      className="p-4 h-[350px] overflow-y-auto space-y-4"
                    >
                      {messages.map((message, i) => (
                        <div 
                          key={i} 
                          className={cn(
                            "flex items-start gap-3",
                            message.role === 'user' ? "justify-end" : ""
                          )}
                        >
                          {message.role === 'assistant' && (
                            <Avatar className="h-8 w-8 mt-1 border bg-green-600">
                              <AvatarFallback>CBD</AvatarFallback>
                              <AvatarImage src="/images/2.png" />
                            </Avatar>
                          )}
                          
                          <div 
                            className={cn(
                              "rounded-lg px-4 py-3 max-w-[80%]",
                              message.role === 'user' 
                                ? "bg-green-600 text-white" 
                                : "bg-gray-100 text-gray-800"
                            )}
                            dangerouslySetInnerHTML={{ __html: message.content.replace(/\n/g, '<br />') }}
                          />
                          
                          {message.role === 'user' && (
                            <Avatar className="h-8 w-8 mt-1 border bg-green-100">
                              <AvatarFallback><User className="h-4 w-4 text-green-700" /></AvatarFallback>
                            </Avatar>
                          )}
                        </div>
                      ))}
                      
                      {isLoading && (
                        <div className="flex items-start gap-3">
                          <Avatar className="h-8 w-8 mt-1 border bg-green-600">
                            <AvatarFallback>CBD</AvatarFallback>
                            <AvatarImage src="/images/2.png" />
                          </Avatar>
                          <div className="bg-gray-100 text-gray-800 rounded-lg px-4 py-3">
                            <div className="flex space-x-2 items-center h-6">
                              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                              <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="p-4 border-t">
                      <form 
                        onSubmit={(e) => {
                          e.preventDefault()
                          handleSendMessage()
                        }}
                        className="flex gap-2"
                      >
                        <Input
                          value={inputValue}
                          onChange={(e) => setInputValue(e.target.value)}
                          placeholder="Describe your needs..."
                          className="flex-1 rounded-full border-gray-200"
                        />
                        <Button 
                          type="submit"
                          size="icon" 
                          className="rounded-full bg-green-600 hover:bg-green-700"
                          disabled={!inputValue.trim() || isLoading}
                        >
                          <Send className="h-4 w-4" />
                        </Button>
                      </form>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              
              {/* Right Side - Description and Features */}
              <div className="lg:w-2/3 p-6 md:p-8">
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  How Can I Help You Today?
                </h3>
                
                <p className="text-gray-700 mb-6">
                  I'm here to guide you through our CBD product line and find the perfect match for your wellness needs. Just tell me what you're looking for help with.
                </p>
                
                <Separator className="my-5 bg-green-100" />
                
                <h4 className="font-medium text-green-700 mb-3">
                  I can help with:
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: <Bot className="h-4 w-4" />, text: "Product recommendations" },
                    { icon: <Zap className="h-4 w-4" />, text: "Dosage guidance" },
                    { icon: <Brain className="h-4 w-4" />, text: "CBD education" },
                    { icon: <ArrowRight className="h-4 w-4" />, text: "Finding alternatives" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-green-700">
                        {item.icon}
                      </div>
                      <span className="text-sm">{item.text}</span>
                    </div>
                  ))}
                </div>
                
                <Separator className="my-5 bg-green-100" />
                
                <div className="bg-green-50 rounded-lg p-4 mb-5">
                  <h4 className="font-medium text-green-800 mb-2">
                    Common Questions I Can Answer:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-white text-green-700 hover:bg-green-100 cursor-pointer">
                      What CBD is best for sleep?
                    </Badge>
                    <Badge variant="outline" className="bg-white text-green-700 hover:bg-green-100 cursor-pointer">
                      Help with anxiety
                    </Badge>
                    <Badge variant="outline" className="bg-white text-green-700 hover:bg-green-100 cursor-pointer">
                      CBD for pain relief
                    </Badge>
                    <Badge variant="outline" className="bg-white text-green-700 hover:bg-green-100 cursor-pointer">
                      Skincare recommendations
                    </Badge>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="bg-green-600 hover:bg-green-700 w-full text-white shadow-sm">
                        Start Consultation
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 