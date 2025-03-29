'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, Heart, Activity, Bot, Beaker, CheckCircle, Brain, Zap, Moon, Flame, Shield, Pill, Droplet, ExternalLink 
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Container } from '@/components/ui/container'
import { commonConditions, Condition } from '../data/conditions'
import Link from 'next/link'

// Function to get the icon component based on the icon name
const getIconByName = (iconName: string, props?: React.ComponentProps<typeof Brain>) => {
  const defaultProps = { className: "h-5 w-5", ...props };
  switch (iconName) {
    case 'brain': return <Brain {...defaultProps} />;
    case 'activity': return <Activity {...defaultProps} />;
    case 'zap': return <Zap {...defaultProps} />;
    case 'heart': return <Heart {...defaultProps} />;
    case 'moon': return <Moon {...defaultProps} />;
    case 'flame': return <Flame {...defaultProps} />;
    default: return <Activity {...defaultProps} />;
  }
};

const getProductIcon = (type: string | undefined) => {
  switch (type?.toLowerCase()) {
    case 'oil':
    case 'tincture':
      return <Droplet className="h-4 w-4 text-blue-600" />;
    case 'capsules':
      return <Pill className="h-4 w-4 text-purple-600" />;
    case 'gummies':
      return <Heart className="h-4 w-4 text-pink-600" />;
    case 'topical':
    case 'balm':
      return <Zap className="h-4 w-4 text-orange-600" />;
    default:
      return <Beaker className="h-4 w-4 text-gray-600" />;
  }
};

export function ConditionsTabs() {
  return (
    <section className="py-10 relative overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 right-10 w-72 h-72 bg-green-100 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-20 left-10 w-72 h-72 bg-emerald-100 rounded-full opacity-30 blur-3xl"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="bg-white/90 backdrop-blur-md border border-slate-200 rounded-2xl shadow-lg p-6 overflow-hidden">
          <div className="text-center mb-8">
            <Badge variant="outline" className="border-green-300 bg-green-50 text-green-700 font-medium px-4 py-1 rounded-full mb-3">
              <Activity className="h-4 w-4 mr-1.5" />
              CBD Health Applications
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Targeted Support with CBD</h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Explore how CBD may help manage common health conditions by interacting with your body's natural systems. Find guidance and recommended products below.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-slate-50/60 to-white rounded-xl border border-slate-200/70 shadow-inner p-5 overflow-hidden">
            <Tabs defaultValue={commonConditions[0].id} className="w-full">
              <div className="overflow-x-auto pb-2 mb-6">
                <TabsList className="h-auto bg-slate-100 p-1.5 rounded-lg border border-slate-200 shadow-sm w-max mx-auto flex space-x-1">
                  {commonConditions.map((condition) => (
                    <TabsTrigger
                      key={condition.id} 
                      value={condition.id}
                      className="flex-shrink-0 rounded-md data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow px-4 py-2 transition-all duration-200 text-slate-600 hover:bg-slate-200/50 hover:text-slate-800"
                    >
                      <div className="flex items-center whitespace-nowrap justify-center gap-2">
                        {getIconByName(condition.iconName, { className: 'h-4 w-4'})} 
                        <span className="font-medium text-sm">{condition.name}</span>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {commonConditions.map((condition) => (
                <TabsContent 
                  key={condition.id} 
                  value={condition.id}
                  className="focus:outline-none mt-0 p-1"
                  tabIndex={-1}
                >
                  <motion.div
                     initial={{ opacity: 0.8, y: 10 }}
                     animate={{ opacity: 1, y: 0 }}
                     transition={{ duration: 0.3 }}
                     className="bg-white rounded-lg border border-slate-200 shadow-md p-6"
                  >
                    <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-100">
                      <div className="p-2 rounded-full bg-green-100 text-green-600">
                         {getIconByName(condition.iconName, { className: 'h-6 w-6'})} 
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{condition.name}</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="space-y-5">
                         <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Overview</h4>
                          <p className="text-sm text-gray-600 leading-relaxed">
                            {condition.description}
                          </p>
                        </div>
                        <div>
                           <h4 className="font-semibold text-gray-800 mb-2.5 flex items-center gap-1.5">
                              <Shield className="h-4 w-4 text-green-600" />
                              <span>Key Benefits</span>
                            </h4>
                            <ul className="space-y-1.5 list-inside">
                              {condition.keyBenefits.map((benefit, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                  <span>{benefit}</span>
                                </li>
                              ))}
                            </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-5">
                        <div>
                           <h4 className="font-semibold text-gray-800 mb-2">Dosage Guidance</h4>
                           <p className="text-sm text-gray-600 leading-relaxed">
                             {condition.dosage}
                           </p>
                        </div>
                        <div>
                           <h4 className="font-semibold text-gray-800 mb-2.5 flex items-center gap-1.5">
                             <Activity className="h-4 w-4 text-blue-600" />
                             <span>Administration Tips</span>
                           </h4>
                           <ul className="space-y-1.5 list-inside">
                             {condition.adminTips.map((tip, i) => (
                               <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                                 <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                 <span>{tip}</span>
                               </li>
                             ))}
                           </ul>
                        </div>
                         <Button 
                          variant="outline"
                          size="sm"
                          className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 hover:border-slate-400"
                        >
                          <Activity className="mr-1.5 h-4 w-4" />
                          Dosage Calculator (Example)
                        </Button>
                      </div>

                      <div>
                         <h4 className="font-semibold text-gray-800 mb-2.5 flex items-center gap-1.5">
                           <Beaker className="h-4 w-4 text-purple-600" />
                           <span>Recommended Products</span>
                         </h4>
                         <div className="space-y-2.5">
                           {condition.products.slice(0, 4).map((product, index) => {
                             const productObj = typeof product === 'string' ? { id: product.toLowerCase().replace(/\s+/g, '-'), name: product, type: 'Unknown' } : product;
                             return (
                               <Link href={`/shop/${productObj.id}`} key={index} className="block group">
                                 <div className="flex items-center gap-3 bg-slate-50 rounded-md border border-slate-200 p-3 transition-all duration-200 group-hover:border-green-300 group-hover:bg-green-50/50">
                                   <div className="flex-shrink-0 h-8 w-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                                     {getProductIcon(productObj.type)}
                                   </div>
                                   <div className="flex-1 min-w-0">
                                     <p className="font-medium text-gray-800 text-sm truncate group-hover:text-green-800">{productObj.name}</p>
                                     {productObj.type !== 'Unknown' && (
                                      <span className="text-xs text-gray-500">{productObj.type}</span>
                                     )}
                                   </div>
                                   <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-green-600 transition-colors flex-shrink-0" />
                                 </div>
                               </Link>
                             );
                           })}
                         </div>
                         <Button 
                           variant="default"
                           size="sm"
                           className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white"
                           asChild
                         >
                           <Link href="/shop">
                             Shop All Products
                             <ArrowRight className="ml-1.5 h-4 w-4" />
                           </Link>
                         </Button>
                      </div>
                    </div>

                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </Container>
    </section>
  )
} 