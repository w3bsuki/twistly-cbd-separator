import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HybridAndMushroomsPage() {
  return (
    <div className="container max-w-6xl mx-auto py-16 px-4">
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-amber-900 hover:text-amber-700 mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>
        
        <div className="flex flex-col items-center text-center mb-12">
          <Badge className="bg-amber-800 text-white mb-4 px-3 py-1">
            Hybrid & Mushrooms
          </Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-900 via-amber-700 to-amber-800 mb-4">
            CBD & Functional Mushroom Products
          </h1>
          <p className="text-amber-800 max-w-3xl">
            Discover our innovative range of CBD products enhanced with the powerful benefits of functional mushrooms. 
            These synergistic formulations are designed to support cognitive function, immune health, and overall wellness.
          </p>
        </div>
      </div>
      
      <div className="grid place-items-center py-16">
        <div className="text-center max-w-lg">
          <h2 className="text-2xl font-semibold text-amber-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-gray-600 mb-8">
            We're currently updating our Hybrid & Mushrooms collection with new products and detailed information.
            Check back soon to explore our complete range of CBD and functional mushroom formulations.
          </p>
          <Button asChild className="bg-amber-800 hover:bg-amber-900 text-white">
            <Link href="/">
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
} 