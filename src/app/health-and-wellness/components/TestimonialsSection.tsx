'use client'

import React from 'react'
import Image from 'next/image'
import { Star, MessageSquare } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { Container } from '@/components/ui/container'
import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { testimonials } from '../data/testimonials'

interface TestimonialsSectionProps {
  pageTheme: {
    gradients: {
      section: string;
    };
    colors: {
      accent: string;
      accentHover: string;
      border: string;
    };
  }
}

export function TestimonialsSection({ pageTheme }: TestimonialsSectionProps) {
  return (
    <section className="py-8 relative overflow-hidden bg-gradient-to-b from-green-50 to-white">
      {/* Simple background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-10 w-60 h-60 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-blue-50 rounded-full opacity-20 blur-3xl"></div>
      </div>
      
      <Container>
        <div className="bg-white/80 backdrop-blur-sm border border-green-200 rounded-xl shadow-md p-5 overflow-hidden">
          <div className="text-center mb-5">
            <div className="inline-flex bg-gradient-to-br from-green-50/80 to-white rounded-full border border-green-200/40 shadow-sm p-1.5">
              <div className="bg-gradient-to-r from-green-600 to-green-500 text-white px-5 py-2 rounded-full shadow-md flex items-center gap-2 font-medium">
                <MessageSquare className="h-4 w-4" />
                <span>Success Stories</span>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 mb-2">Customer Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4 text-sm">
              Hear from our customers who have experienced the benefits of our CBD products
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-green-50/70 to-white rounded-xl border border-green-200/40 shadow-sm p-3 overflow-hidden">
            <InfiniteSlider
              duration={30}
              reverse={false}
              gap={16}
              className="py-2"
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2 min-w-[280px] max-w-[330px]">
                  <Card className={`bg-white shadow-sm border ${pageTheme.colors.border} h-full hover:border-green-300 transition-colors duration-200`}>
                    <CardContent className="p-5 flex flex-col h-[320px]">
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            fill={i < Math.floor(testimonial.rating) ? "currentColor" : "none"}
                            className={`h-4 w-4 ${
                              i < Math.floor(testimonial.rating) ? "text-yellow-400" : "text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <div className="relative flex-grow">
                        <div className="absolute -left-1 -top-1 text-green-300 opacity-30">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.0896 5C8.16291 5 5.08981 7.60905 5.00629 11.5H8.10981C8.43038 11.5 8.73071 11.5608 8.99747 11.6802C9.26423 11.7996 9.49276 11.9632 9.667 12.1585C9.84124 12.3539 9.95772 12.5805 10.0066 12.8207C10.0556 13.0608 10.0359 13.3079 9.9487 13.5394C9.86155 13.7709 9.7098 13.9793 9.51583 14.1489C9.32186 14.3184 9.08996 14.4443 8.83883 14.5152C8.5877 14.5861 8.32394 14.6002 8.06646 14.5565C7.80897 14.5128 7.56478 14.4125 7.35378 14.2627L5.76267 13.1791C5.49567 13.9786 5.40219 14.8177 5.48726 15.6486C5.57232 16.4795 5.83426 17.286 6.25889 18.0113C7.03614 18.329 7.88162 18.4874 8.74099 18.5C9.68285 18.5607 10.6213 18.4359 11.5071 18.1326C12.3929 17.8294 13.205 17.3539 13.8953 16.7355C14.5856 16.1171 15.1399 15.3695 15.5248 14.5394C15.9097 13.7093 16.1172 12.8144 16.1347 11.9071C16.1522 10.9998 15.9793 10.0978 15.6264 9.254C15.2735 8.41021 14.749 7.64089 14.0835 7.00009C13.418 6.35929 12.6253 5.8623 11.7534 5.53993C10.8815 5.21755 9.95392 5.0761 9.03378 5.12729L11.0896 5Z" />
                            <path d="M16.2272 5C13.3005 5 10.2274 7.60905 10.1439 11.5H13.2474C13.568 11.5 13.8683 11.5608 14.1351 11.6802C14.4018 11.7996 14.6304 11.9632 14.8046 12.1585C14.9789 12.3539 15.0953 12.5805 15.1442 12.8207C15.1932 13.0608 15.1735 13.3079 15.0864 13.5394C14.9992 13.7709 14.8474 13.9793 14.6535 14.1489C14.4595 14.3184 14.2276 14.4443 13.9765 14.5152C13.7253 14.5861 13.4616 14.6002 13.2041 14.5565C12.9466 14.5128 12.7024 14.4125 12.4914 14.2627L10.9003 13.1791C10.6333 13.9786 10.5398 14.8177 10.6249 15.6486C10.71 16.4795 10.9719 17.286 11.3965 18.0113C12.1738 18.329 13.0193 18.4874 13.8786 18.5C14.8205 18.5607 15.7589 18.4359 16.6447 18.1326C17.5305 17.8294 18.3427 17.3539 19.0329 16.7355C19.7232 16.1171 20.2775 15.3695 20.6624 14.5394C21.0473 13.7093 21.2548 12.8144 21.2723 11.9071C21.2898 10.9998 21.1169 10.0978 20.764 9.254C20.4111 8.41021 19.8866 7.64089 19.2212 7.00009C18.5557 6.35929 17.7629 5.8623 16.891 5.53993C16.0191 5.21755 15.0915 5.0761 14.1714 5.12729L16.2272 5Z" />
                          </svg>
                        </div>
                        <div className="pl-5 relative h-[150px] overflow-hidden mb-4">
                          <p className="text-sm text-gray-700 italic">
                            {testimonial.quote}
                          </p>
                          <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent"></div>
                        </div>
                      </div>
                      <div className="flex items-center pt-2 border-t border-gray-100 mt-auto">
                        <div className="h-10 w-10 rounded-full overflow-hidden bg-gray-100 mr-3 flex items-center justify-center border border-green-100 shadow-sm">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.author}
                            width={40}
                            height={40}
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-gray-900">{testimonial.author}</p>
                          <p className="text-xs text-gray-500">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </InfiniteSlider>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-3">Share your story</p>
            <div className="inline-flex bg-gradient-to-br from-green-50/80 to-white rounded-full border border-green-200/40 shadow-sm p-1.5">
              <button className="bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-2 rounded-full shadow-sm hover:shadow-md font-medium flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>Leave a Review</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
} 