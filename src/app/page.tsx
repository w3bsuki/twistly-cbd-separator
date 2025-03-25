import { Hero } from "@/components/features/home/hero";
import { HealthAndWellness } from "@/components/features/home/health-section";
import { Sport } from "@/components/features/home/sport-section";
import { Beauty } from "@/components/features/home/beauty-section";
import { Pet } from "@/components/features/home/pet-section";
import { HybridAndMushrooms } from "@/components/features/home/hybrid-section";
import { FeaturedProducts } from "@/components/features/home/categories";
import { BlogSection } from "@/components/features/home/blog-section";
import { CBDDoctor } from "@/components/features/home/cbd-doctor";

export default function Home() {
  return (
    <>
      <Hero />
      
      <FeaturedProducts />
      
      <CBDDoctor />

      <HealthAndWellness />
      <Sport />
      <Beauty />
      <Pet />
      <HybridAndMushrooms />
      <BlogSection />
    </>
  );
}
