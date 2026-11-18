export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogImage: string;
}

export const seoData: Record<string, PageSEO> = {
  home: {
    title: 'Authentic Gujarati Mohanthal | Traditional Pure Ghee Sweet Online',
    description: 'Taste authentic Gujarati Mohanthal handcrafted with pure premium ghee, stone-ground besan, and Kashmiri saffron by Bhagvat Prasadam. Fresh pan India delivery.',
    keywords: 'Mohanthal, मोहनथाल, pure Gujarati sweet, traditional Gujarati sweet, festival sweets, Diwali celebrations sweet, puja offerings, corporate gifting, Bhagvat Prasadam Mohanthal, pure ghee Mohanthal',
    canonicalPath: '/',
    ogImage: '/images/bhagvat/mohan_thal_main.webp',
  },
  mohanthal: {
    title: 'Order Mohanthal Sweet Online | Pure Ghee Gujarati Mithai Box',
    description: 'Order authentic Gujarati Mohanthal by Bhagvat Prasadam. Rich traditional sweet made with slow-roasted gram flour, pure ghee, kesar, and dry fruits in 3 sizes.',
    keywords: 'Mohanthal, मोहनथाल, pure traditional Gujarati sweets, Mohanthal 250gm, Mohanthal 500gm, Mohanthal 1kg, Bhagvat Prasadam, Diwali sweets online',
    canonicalPath: '/mohanthal',
    ogImage: '/images/bhagvat/mohan_thal_main.webp',
  },
  about: {
    title: 'Our Story & Culinary Heritage | Authentic Gujarati Mohanthal',
    description: 'Discover the heritage behind Bhagvat Prasadam Mohanthal. Learn our devotion to authentic Kathiawadi sweet craftsmanship, pure ingredients, and timeless taste.',
    keywords: 'Mohanthal story, Gujarati sweet history, traditional Mohanthal heritage, authentic Gujarati sweets brand, Kathiawadi sweets',
    canonicalPath: '/about',
    ogImage: '/images/our-story-banner.webp',
  },
  ingredients: {
    title: 'Pure Mohanthal Ingredients | Ghee, Stone-Ground Besan & Saffron',
    description: 'Explore the pure ingredients behind our artisanal Mohanthal: stone-ground besan, pure ghee, Kashmiri saffron, crushed green cardamom, almonds, and pistachios.',
    keywords: 'Mohanthal ingredients, what is Mohanthal made of, besan sweet, premium ghee sweets, Kashmiri saffron sweet, cardamom pistachios',
    canonicalPath: '/ingredients',
    ogImage: '/images/ingredients-mohanthal.webp',
  },
  process: {
    title: 'Artisanal Mohanthal Making Process | Dhrabo & Slow Ghee Roasting',
    description: 'Discover the 7-step Gujarati artisanal process: traditional Dhrabo technique, slow copper-vessel ghee roasting, and single-string chasni for unmatched texture.',
    keywords: 'Mohanthal making process, how Mohanthal is made, traditional Mohanthal recipe style, Dhrabo technique, authentic Mohanthal preparation',
    canonicalPath: '/process',
    ogImage: '/images/process-craft.webp',
  },
  gifting: {
    title: 'Mohanthal Gift Boxes | Luxury Sweets for Weddings, Diwali & Corporate',
    description: 'Send premium Gujarati Mohanthal festive gift boxes for Diwali, weddings, and corporate celebrations. Freshly handcrafted sweets in airtight keepsake boxes.',
    keywords: 'Mohanthal gift box, Gujarati sweets for gifting, Diwali sweet gift box, wedding mithai favor, corporate sweet hampers, Mohanthal bulk order',
    canonicalPath: '/gifting',
    ogImage: '/images/gifting-mohanthal.webp',
  },
  gallery: {
    title: 'Mohanthal Gallery | Handcrafted Gujarati Sweet Photography',
    description: 'Browse photos of our authentic Gujarati Mohanthal, artisanal slow roasting, pure raw ingredients, and festive gift boxes ready for nationwide dispatch.',
    keywords: 'Mohanthal photos, Gujarati Mohanthal pictures, authentic Indian sweets photography, festive gift box photos',
    canonicalPath: '/gallery',
    ogImage: '/images/hero-traditional-box.webp',
  },
  faq: {
    title: 'Mohanthal FAQs | Shelf Life, Pure Ingredients & Pan India Delivery',
    description: 'Got questions about Mohanthal? Find answers on 30-day room temperature shelf life, 100% pure ghee ingredients, storage tips, and pan-India shipping times.',
    keywords: 'Mohanthal FAQ, how long does Mohanthal last, Mohanthal shelf life, how to store Mohanthal, Mohanthal delivery India',
    canonicalPath: '/faq',
    ogImage: '/images/texture-mohanthal.webp',
  },
  contact: {
    title: 'Contact Us | Mohanthal Order Inquiries, WhatsApp & Bulk Delivery',
    description: 'Get in touch for festive gift boxes, wedding favors, and custom bulk Mohanthal orders. Fast WhatsApp support and express pan-India courier delivery.',
    keywords: 'Contact Mohanthal, order Mohanthal WhatsApp, Gujarati sweet customer inquiry, bulk sweet order contact',
    canonicalPath: '/contact',
    ogImage: '/images/gifting-mohanthal.webp',
  },
  privacyPolicy: {
    title: 'Privacy Policy | Data Protection & Customer Security | Mohanthal',
    description: 'Review our customer privacy policy detailing how your personal information, order inquiries, and contact submissions are securely handled and protected.',
    keywords: 'Privacy policy, customer data protection, Mohanthal sweet privacy',
    canonicalPath: '/privacy-policy',
    ogImage: '/images/hero-traditional-box.webp',
  },
  terms: {
    title: 'Terms of Service | Order Guidelines & Conditions | Mohanthal',
    description: 'Read the terms of service, payment terms, order inquiry guidelines, and packaging standards for ordering artisanal Gujarati Mohanthal sweets online.',
    keywords: 'Terms and conditions, delivery terms, order inquiries terms',
    canonicalPath: '/terms',
    ogImage: '/images/hero-traditional-box.webp',
  },
  shippingPolicy: {
    title: 'Shipping Policy | Pan-India Mithai Courier & Fresh Delivery',
    description: 'Learn about our express shipping process, secure transit-safe packaging, dispatch timelines, and delivery across 20,000+ pin codes throughout India.',
    keywords: 'Mohanthal shipping, sweet delivery timeline, pan India mithai courier, packaging freshness',
    canonicalPath: '/shipping-policy',
    ogImage: '/images/hero-traditional-box.webp',
  },
  returnPolicy: {
    title: 'Return & Replacement Policy | Quality Guarantee | Mohanthal',
    description: 'Understand our return and damage-replacement policy. We ensure tamper-evident food-grade safety and complete satisfaction on every artisanal sweet pack.',
    keywords: 'Mohanthal return policy, refund guidelines, damaged delivery replacement, sweet cancellations',
    canonicalPath: '/return-policy',
    ogImage: '/images/hero-traditional-box.webp',
  },
  notFound: {
    title: 'Page Not Found (404) | Authentic Gujarati Mohanthal',
    description: 'The page you requested could not be found. Head back to our homepage to explore handcrafted Gujarati Mohanthal made with pure premium ghee across India.',
    keywords: '404, not found, Mohanthal',
    canonicalPath: '/404',
    ogImage: '/images/hero-traditional-box.webp',
  },
};
