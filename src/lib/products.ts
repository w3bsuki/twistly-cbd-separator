export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  images: string[];
  image: string;
  category: 'health' | 'beauty' | 'sport' | 'hybrid';
  tags: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  featured?: boolean;
  bestSeller?: boolean;
  new?: boolean;
  discount?: number;
  details: {
    size: string;
    concentration: string;
    ingredients: string[];
    usage: string;
    benefits: string[];
  };
}

export const products: Product[] = [
  {
    id: "cbd-oil-full-spectrum",
    name: "Full Spectrum CBD Oil",
    description: "Our premium full-spectrum CBD oil is crafted from organically grown hemp plants, providing a complete profile of beneficial cannabinoids and terpenes for maximum effectiveness.",
    price: 89.99,
    discountPrice: 79.99,
    images: [
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg"
    ],
    image: "/images/products/placeholder.jpg",
    category: "health",
    tags: ["oil", "full-spectrum", "organic", "tincture"],
    rating: 4.8,
    reviewCount: 124,
    stock: 50,
    featured: true,
    bestSeller: true,
    details: {
      size: "30ml",
      concentration: "1000mg CBD",
      ingredients: ["Organic Hemp Extract", "MCT Oil", "Natural Flavors", "Terpenes"],
      usage: "Place 1ml under tongue and hold for 60 seconds before swallowing. Use once or twice daily.",
      benefits: [
        "Promotes relaxation and calm",
        "Supports healthy sleep cycles",
        "Helps manage everyday stress",
        "Supports joint and muscle comfort"
      ]
    }
  },
  {
    id: "cbd-wellness-drops",
    name: "CBD Wellness Drops",
    description: "Our CBD Wellness Drops combine premium CBD with essential vitamins and adaptogens for a daily wellness boost that supports your body's natural balance.",
    price: 69.99,
    images: [
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg"
    ],
    image: "/images/products/placeholder.jpg",
    category: "health",
    tags: ["wellness", "drops", "vitamins", "daily"],
    rating: 4.6,
    reviewCount: 89,
    stock: 35,
    details: {
      size: "30ml",
      concentration: "750mg CBD",
      ingredients: ["Broad Spectrum Hemp Extract", "MCT Oil", "Vitamin D3", "Vitamin B12", "Ashwagandha", "Natural Flavors"],
      usage: "Take 1ml daily, preferably in the morning with or without food.",
      benefits: [
        "Supports overall wellness",
        "Enhances daily energy levels",
        "Promotes immune system function",
        "Helps maintain mental clarity"
      ]
    }
  },
  {
    id: "cbd-recovery-balm",
    name: "CBD Recovery Balm",
    description: "This powerful recovery balm delivers targeted relief to sore muscles and joints with a potent combination of CBD, arnica, and menthol for cooling comfort.",
    price: 54.99,
    discountPrice: 49.99,
    images: [
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg"
    ],
    image: "/images/products/placeholder.jpg",
    category: "sport",
    tags: ["balm", "recovery", "muscle", "topical"],
    rating: 4.9,
    reviewCount: 156,
    stock: 42,
    bestSeller: true,
    details: {
      size: "60ml",
      concentration: "1500mg CBD",
      ingredients: ["CBD Isolate", "Shea Butter", "Coconut Oil", "Arnica Extract", "Menthol", "Lavender Oil", "Eucalyptus Oil"],
      usage: "Apply generously to affected areas and massage until absorbed. Use up to 3-4 times daily as needed.",
      benefits: [
        "Targets muscle soreness",
        "Soothes joint discomfort",
        "Cooling sensation for immediate comfort",
        "Non-greasy formula absorbs quickly"
      ]
    }
  },
  {
    id: "cbd-sleep-gummies",
    name: "CBD Sleep Gummies",
    description: "Our CBD Sleep Gummies combine premium CBD with melatonin and calming herbs to promote restful sleep and help you wake up refreshed.",
    price: 49.99,
    images: [
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg"
    ],
    image: "/images/products/placeholder.jpg",
    category: "health",
    tags: ["gummies", "sleep", "melatonin", "edible"],
    rating: 4.7,
    reviewCount: 203,
    stock: 78,
    bestSeller: true,
    details: {
      size: "30 gummies",
      concentration: "25mg CBD + 2mg Melatonin per gummy",
      ingredients: ["Broad Spectrum CBD", "Melatonin", "Chamomile Extract", "Passion Flower Extract", "L-Theanine", "Natural Flavors", "Organic Cane Sugar"],
      usage: "Take 1 gummy 30-60 minutes before bedtime.",
      benefits: [
        "Promotes faster sleep onset",
        "Supports deeper, more restful sleep",
        "Helps regulate sleep cycles",
        "Non-habit forming formula"
      ]
    }
  },
  {
    id: "cbd-face-serum",
    name: "CBD Radiance Face Serum",
    description: "This luxurious face serum combines the power of CBD with hyaluronic acid and vitamin C to hydrate, brighten and rejuvenate your skin for a radiant complexion.",
    price: 79.99,
    images: [
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg"
    ],
    image: "/images/products/placeholder.jpg",
    category: "beauty",
    tags: ["serum", "face", "skincare", "beauty"],
    rating: 4.8,
    reviewCount: 97,
    stock: 25,
    new: true,
    details: {
      size: "30ml",
      concentration: "500mg CBD",
      ingredients: ["CBD Isolate", "Hyaluronic Acid", "Vitamin C", "Niacinamide", "Aloe Vera", "Green Tea Extract", "Jojoba Oil"],
      usage: "Apply 3-4 drops to clean skin morning and evening. Follow with moisturizer.",
      benefits: [
        "Hydrates and plumps skin",
        "Brightens complexion",
        "Reduces appearance of fine lines",
        "Calms redness and irritation"
      ]
    }
  },
  {
    id: "cbd-sport-drops",
    name: "CBD Sport Performance Drops",
    description: "Formulated specifically for athletes, our Sport Performance Drops combine CBD with BCAAs and electrolytes to support recovery, endurance and optimal performance.",
    price: 74.99,
    discountPrice: 64.99,
    images: [
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg"
    ],
    image: "/images/products/placeholder.jpg",
    category: "sport",
    tags: ["sport", "performance", "recovery", "tincture"],
    rating: 4.7,
    reviewCount: 118,
    stock: 30,
    featured: true,
    details: {
      size: "30ml",
      concentration: "1500mg CBD",
      ingredients: ["Broad Spectrum CBD", "BCAAs", "Electrolyte Complex", "Tart Cherry Extract", "Turmeric Extract", "MCT Oil"],
      usage: "Take 1ml before or after workouts, or as needed for recovery.",
      benefits: [
        "Supports muscle recovery",
        "Enhances endurance",
        "Helps maintain electrolyte balance",
        "Promotes joint mobility"
      ]
    }
  },
  {
    id: "cbd-calm-capsules",
    name: "CBD Calm Capsules",
    description: "Our CBD Calm Capsules deliver a precise dose of CBD combined with calming adaptogens to help you manage stress and maintain focus throughout your day.",
    price: 64.99,
    images: [
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg"
    ],
    image: "/images/products/placeholder.jpg",
    category: "health",
    tags: ["capsules", "calm", "stress", "focus"],
    rating: 4.6,
    reviewCount: 84,
    stock: 45,
    details: {
      size: "30 capsules",
      concentration: "25mg CBD per capsule",
      ingredients: ["CBD Isolate", "Ashwagandha", "L-Theanine", "Lemon Balm Extract", "Magnesium", "Vegetable Cellulose Capsule"],
      usage: "Take 1 capsule daily with water, preferably with a meal.",
      benefits: [
        "Promotes calm without drowsiness",
        "Supports mental clarity and focus",
        "Helps manage everyday stress",
        "Supports overall mood balance"
      ]
    }
  },
  {
    id: "cbd-relief-roll-on",
    name: "CBD Relief Roll-On",
    description: "This convenient roll-on applicator delivers targeted CBD relief for on-the-go use, perfect for sore muscles, tension, and discomfort wherever you need it.",
    price: 39.99,
    images: [
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg"
    ],
    image: "/images/products/placeholder.jpg",
    category: "sport",
    tags: ["roll-on", "relief", "topical", "travel"],
    rating: 4.5,
    reviewCount: 67,
    stock: 55,
    new: true,
    details: {
      size: "10ml",
      concentration: "500mg CBD",
      ingredients: ["CBD Isolate", "Menthol", "Camphor", "Arnica Extract", "Peppermint Oil", "Eucalyptus Oil", "Aloe Vera"],
      usage: "Roll directly onto affected areas as needed. Can be applied up to 4 times daily.",
      benefits: [
        "Provides targeted relief",
        "Convenient on-the-go application",
        "Fast-acting formula",
        "Non-greasy and quick-drying"
      ]
    }
  },
  {
    id: "cbd-night-cream",
    name: "CBD Regenerative Night Cream",
    description: "This rich night cream works while you sleep, combining CBD with retinol and peptides to rejuvenate your skin, reduce signs of aging, and wake up with a refreshed complexion.",
    price: 84.99,
    discountPrice: 74.99,
    images: [
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg"
    ],
    image: "/images/products/placeholder.jpg",
    category: "beauty",
    tags: ["night cream", "anti-aging", "skincare", "beauty"],
    rating: 4.7,
    reviewCount: 76,
    stock: 32,
    featured: true,
    details: {
      size: "50ml",
      concentration: "300mg CBD",
      ingredients: ["CBD Isolate", "Retinol", "Peptide Complex", "Hyaluronic Acid", "Ceramides", "Squalane", "Vitamin E", "Shea Butter"],
      usage: "Apply a small amount to clean face and neck before bedtime. Use nightly for best results.",
      benefits: [
        "Reduces appearance of fine lines and wrinkles",
        "Improves skin texture and firmness",
        "Enhances skin's natural repair process",
        "Deeply hydrates and nourishes"
      ]
    }
  },
  {
    id: "cbd-pet-tincture",
    name: "CBD Pet Wellness Tincture",
    description: "Specially formulated for your furry friends, our Pet Wellness Tincture helps support your pet's overall health, calm, and comfort with a gentle, pet-safe CBD formula.",
    price: 59.99,
    images: [
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg"
    ],
    image: "/images/products/placeholder.jpg",
    category: "health",
    tags: ["pet", "tincture", "wellness", "animal"],
    rating: 4.9,
    reviewCount: 112,
    stock: 40,
    bestSeller: true,
    details: {
      size: "30ml",
      concentration: "500mg CBD",
      ingredients: ["Broad Spectrum CBD", "MCT Oil", "Natural Bacon Flavor"],
      usage: "Add to food or administer directly into pet's mouth. Dosage varies by weight - see included guide.",
      benefits: [
        "Supports pet comfort and mobility",
        "Helps maintain calm during stressful situations",
        "Promotes overall wellness",
        "Supports healthy sleep patterns"
      ]
    }
  },
  {
    id: "cbd-bath-bombs",
    name: "CBD Relaxation Bath Bombs",
    description: "Transform your bath into a therapeutic experience with our CBD-infused bath bombs, combining essential oils and Epsom salts for the ultimate relaxation and skin nourishment.",
    price: 44.99,
    images: [
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg",
      "/images/products/placeholder.jpg"
    ],
    image: "/images/products/placeholder.jpg",
    category: "beauty",
    tags: ["bath", "relaxation", "spa", "beauty"],
    rating: 4.6,
    reviewCount: 58,
    stock: 65,
    new: true,
    details: {
      size: "4 bath bombs",
      concentration: "50mg CBD per bath bomb",
      ingredients: ["CBD Isolate", "Epsom Salt", "Baking Soda", "Citric Acid", "Shea Butter", "Essential Oils", "Natural Colorants"],
      usage: "Drop one bath bomb into warm bath water and enjoy a 20-30 minute soak.",
      benefits: [
        "Promotes deep relaxation",
        "Soothes tired muscles",
        "Nourishes and softens skin",
        "Creates an aromatic spa experience"
      ]
    }
  }
];

export function getProductsByCategory(category: Product['category']) {
  return products.filter(product => product.category === category);
}

export function getFeaturedProducts() {
  return products.filter(product => product.featured);
}

export function getBestSellerProducts(limit: number = 4): Product[] {
  return products
    .filter(product => product.bestSeller)
    .slice(0, limit)
}

export function getNewProducts() {
  return products.filter(product => product.new);
}

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id)
} 