import { CBDHeroSection } from "@/components/sections/hero";
import { ShoppingBag, Leaf } from "lucide-react";
import { FeaturedProducts } from "@/components/features/home/featured-products";
import { BlogSection } from "@/components/features/home/blog-section";
import { CategoryHighlights } from "@/components/features/home/category-highlights";
import { CBDBenefits } from "@/components/features/home/cbd-benefits";
import { Testimonials } from "@/components/features/home/testimonials";
import { DrTwistly } from '@/components/features/chat/dr-twistly'
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
      
      <Container className="py-16">
        <FeaturedProducts />
      </Container>
      
      <Container className="py-16 bg-gray-50">
        <CBDBenefits />
      </Container>
      
      <Container className="py-16">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold tracking-tight">
            Get Personalized CBD Recommendations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Not sure which CBD products are right for you? Chat with Dr. Twistly, our AI expert, for personalized recommendations based on your needs.
          </p>
          <DrTwistly 
            category="health" 
            variant="inline" 
            className="mx-auto"
          />
        </div>
      </Container>
      
      <BlogSection />
      
      <Testimonials />
    </main>
  );
}
