import { Hero } from "@/components/features/home/hero";
import { Navbar } from "@/components/common/layout/navbar";
import { HealthAndWellness } from "@/components/features/home/health-section";
import { Sport } from "@/components/features/home/sport-section";
import { Beauty } from "@/components/features/home/beauty-section";
import { FeaturedProducts } from "@/components/features/home/categories";

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        
        <FeaturedProducts />

        <HealthAndWellness />
        <Sport />
        <Beauty />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Twistly</h3>
              <p className="text-gray-400">Premium CBD products designed to enhance your wellbeing and improve your quality of life.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="/shop" className="text-gray-400 hover:text-white transition-colors">Shop</a></li>
                <li><a href="/health" className="text-gray-400 hover:text-white transition-colors">Health & Wellness</a></li>
                <li><a href="/sport" className="text-gray-400 hover:text-white transition-colors">Sport & Recovery</a></li>
                <li><a href="/beauty" className="text-gray-400 hover:text-white transition-colors">Beauty & Skincare</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400 mb-2">Email: info@twistly.com</p>
              <p className="text-gray-400">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2023 Twistly CBD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
