import { Hero } from "@/components/features/home/hero";
import { HealthAndWellness } from "@/components/features/home/health-section";
import { Sport } from "@/components/features/home/sport-section";
import { Beauty } from "@/components/features/home/beauty-section";
import { FeaturedProducts } from "@/components/features/home/categories";
import { BlogSection } from "@/components/features/home/blog-section";

export default function Home() {
  return (
    <>
      <Hero />
      
      <FeaturedProducts />

      <HealthAndWellness />
      <Sport />
      <Beauty />
      <BlogSection />
    </>
  );
}
