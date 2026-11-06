export interface ProductWeightOption {
  weight: string;
  price: string;
  originalPrice: string;
  discount: string;
  pieces: string;
  serving: string;
  idealFor: string;
  popular?: boolean;
}

export interface ProductDetail {
  id: string;
  title: string;
  hindiTitle: string;
  regionalName: string;
  vendor: string;
  productUrl: string;
  tagline: string;
  description: string;
  origin: string;
  textureDescription: string;
  weights: ProductWeightOption[];
  shelfLife: string;
  storage: string;
  packaging: string;
  ingredients: string[];
  allergens: string;
  highlights: string[];
  imageUrl: string;
  galleryImages: string[];
  videoUrl: string;
}

export const mohanthalProduct: ProductDetail = {
  id: 'pure-traditional-gujarati-sweets-mohanthal',
  title: 'Mohanthal | Traditional Gujarati Sweet',
  hindiTitle: 'मोहनथाल',
  regionalName: 'ગુજરાતી મોહનથાળ',
  vendor: 'Bhagvat Prasadam',
  productUrl: 'https://bhagvatprasadam.com/products/pure-traditional-gujarati-sweets-mohanthal',
  tagline: 'Pure & Authentic Gujarati Sweet by Bhagvat Prasadam',
  description: 'Pure rich taste of Mohanthal, a pure Gujarati sweet handcrafted with love by Bhagvat Prasadam. Made from premium gram flour, pure ghee, sugar, and aromatic spices, this traditional Gujarati sweet melts in your mouth with authentic flavor. Perfect for festival sweets, Diwali celebrations, puja offerings, or corporate gifting, our Mohanthal combines heritage, purity, and festive joy.',
  origin: 'Gujarat, India',
  textureDescription: 'Rich, moist, gently crumbly and distinctly grainy (Danedaar) that melts luxuriously on the tongue with pure premium ghee fragrance.',
  weights: [
    {
      weight: '250gm',
      price: '₹148',
      originalPrice: '₹196',
      discount: '25% OFF',
      pieces: '6 - 8 Pieces',
      serving: '2 - 3 Persons',
      idealFor: 'Personal indulgence & small family tea time',
    },
    {
      weight: '500gm',
      price: '₹295',
      originalPrice: '₹392',
      discount: '25% OFF',
      pieces: '14 - 16 Pieces',
      serving: '5 - 6 Persons',
      idealFor: 'Family festivals & thoughtful Diwali gifting',
      popular: true,
    },
    {
      weight: '1kg',
      price: '₹590',
      originalPrice: '₹785',
      discount: '25% OFF',
      pieces: '28 - 32 Pieces',
      serving: '10 - 12 Persons',
      idealFor: 'Grand festive feasts, temple puja & weddings',
    },
  ],
  shelfLife: '25 to 30 days at ambient room temperature (no refrigeration required)',
  storage: 'Store in a cool, dry place away from direct sunlight. Keep in an airtight container after breaking the seal.',
  packaging: 'Food-grade sealed container encased in a protective box to retain natural moisture and pure ghee freshness.',
  ingredients: [
    'Premium Gram Flour (Besan)',
    'Pure Premium Ghee',
    'Sugar (Chasni)',
    'Kashmiri Saffron (Kesar)',
    'Green Cardamom (Elaichi)',
    'Almonds (Badam)',
    'Pistachios (Pista)',
    'Milk (for traditional Dhrabo)',
  ],
  allergens: 'Contains Dairy (Ghee, Milk) and Tree Nuts (Almonds, Pistachios). Prepared in a sacred, satvik kitchen.',
  highlights: [
    'Handcrafted with Love by Bhagvat Prasadam',
    '100% Pure Premium Ghee',
    'Coarse Stone-Ground Besan',
    'Traditional "Dhrabo" Granular Texture',
    'Authentic Festival & Diwali Sweet',
    'Zero Preservatives or Artificial Flavors',
  ],
  imageUrl: '/images/bhagvat/mohan_thal_main.webp',
  galleryImages: [
    '/images/bhagvat/mohan_thal_main.webp',
    '/images/bhagvat/mohan_thal_plate.webp',
    '/images/bhagvat/mohan_thal_close.webp',
    '/images/bhagvat/mohan_thal_box.webp',
    '/images/bhagvat/mohan_thal_pieces.webp',
    '/images/bhagvat/mohan_thal_festive.webp',
  ],
  videoUrl: 'https://bhagvatprasadam.com/cdn/shop/videos/c/vp/7e29c727216a44b29f5ff01809499c47/7e29c727216a44b29f5ff01809499c47.HD-1080p-4.8Mbps-91297788.mp4',
};
