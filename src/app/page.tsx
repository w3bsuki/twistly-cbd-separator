import { CBDHeroSection } from "@/components/sections/hero";
import { ShoppingBag, Leaf, ArrowRight } from "lucide-react";
import { FeaturedProducts } from "@/components/features/home/featured-products";
import { BlogSection } from "@/components/features/home/blog-section";
import { CategoryHighlights } from "@/components/features/home/category-highlights";
import { CBDBenefits } from "@/components/features/home/cbd-benefits";
import { Testimonials } from "@/components/features/home/testimonials";
import { DrTwistly } from '@/components/features/chat/dr-twistly'
import { MiniDrTwistly } from '@/components/features/chat/mini-dr-twistly'
import { Container } from '@/components/ui/container'

export default function HomePage() {
  return (
    <main>
      {/* Hero Section - Full width */}
      <CBDHeroSection
        badge={{
          text: "New CBD Collection",
          action: {
            text: "View products",
            href: "/products",
          },
        }}
        title="Elevate Your Wellness Journey"
        description="Experience the natural benefits of our premium CBD products. Ethically sourced, third-party tested, and designed to enhance your daily wellness routine."
        actions={[
          {
            text: "Shop Collection",
            href: "/shop",
            variant: "default",
            icon: <ShoppingBag className="h-4 w-4" />,
          },
          {
            text: "Learn About CBD",
            href: "/learn",
            variant: "outline",
            icon: <Leaf className="h-4 w-4" />,
          },
        ]}
        newsletterPlaceholder="Enter email for 10% off"
      />
      
      {/* Category Highlights Section (Slider) */}
      <CategoryHighlights />
      
      {/* Mini Dr. Twistly for Category Section */}
      <Container className="py-8">
        <MiniDrTwistly />
      </Container>
      
      <Container className="py-16">
        <FeaturedProducts />
      </Container>
      
      <Container className="py-16 bg-gray-50">
        <CBDBenefits />
      </Container>
      
      {/* Dr. Twistly AI Consultant Section */}
      <Container className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div>
                <div className="inline-block bg-green-100 text-green-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  AI-Powered Guidance
                </div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  Meet Dr. Twistly, Your Personal CBD Consultant
                </h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Not sure which CBD products are right for you? Our AI expert can help you navigate our product catalog and find the perfect match for your unique needs.
              </p>
              <ul className="space-y-3">
                {[
                  "Get personalized product recommendations",
                  "Learn about CBD dosages and applications",
                  "Find solutions for specific wellness goals",
                  "Discover the science behind our formulations"
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                      <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-4">
                <DrTwistly 
                  category="health" 
                  variant="dialog" 
                  className="shadow-lg"
                />
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-100 rounded-full opacity-50"></div>
              <div className="relative z-10 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden">
                <DrTwistly 
                  category="health" 
                  variant="inline" 
                  className="border-0 shadow-none"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
      
      <BlogSection />
      
      <Testimonials />
    </main>
  );
}
