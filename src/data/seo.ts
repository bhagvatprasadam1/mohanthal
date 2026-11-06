export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  canonicalPath: string;
  ogImage: string;
}

export const seoData: Record<string, PageSEO> = {
  home: {
    title: 'Mohanthal | मोहनथाल | Pure Gujarati Sweet | Festival & Diwali Sweet',
    description: 'Pure rich taste of Mohanthal, a pure Gujarati sweet handcrafted with love by Bhagvat Prasadam. Made from premium gram flour, pure ghee, and aromatic spices. Available in 250gm, 500gm, 1kg.',
    keywords: 'Mohanthal, मोहनथाल, pure Gujarati sweet, traditional Gujarati sweet, festival sweets, Diwali celebrations sweet, puja offerings, corporate gifting, Bhagvat Prasadam Mohanthal, pure ghee Mohanthal',
    canonicalPath: '/',
    ogImage: '/images/bhagvat/mohan_thal_main.webp',
  },
  mohanthal: {
    title: 'Mohanthal Sweet | मोहनथाल | Traditional Gujarati Sweet (250gm, 500gm, 1kg)',
    description: 'Order authentic Mohanthal by Bhagvat Prasadam. Traditional pure Gujarati sweet made from coarse gram flour, pure ghee, Kashmiri saffron, and dry fruits. Fast pan India delivery.',
    keywords: 'Mohanthal, मोहनथाल, pure traditional Gujarati sweets, Mohanthal 250gm, Mohanthal 500gm, Mohanthal 1kg, Bhagvat Prasadam, Diwali sweets online',
    canonicalPath: '/mohanthal',
    ogImage: '/images/bhagvat/mohan_thal_main.webp',
  },
  about: {
    title: 'Our Story | Authentic Gujarati Mohanthal Heritage & Craftsmanship',
    description: 'Learn about our Gujarati culinary heritage, our devotion to authentic Mohanthal preparation, and our commitment to using traditional ingredients and time-tested methods.',
    keywords: 'Mohanthal story, Gujarati sweet history, traditional Mohanthal heritage, authentic Gujarati sweets brand, Kathiawadi sweets',
    canonicalPath: '/about',
    ogImage: '/images/our-story-banner.webp',
  },
  ingredients: {
    title: 'Mohanthal Ingredients | What Is Gujarati Mohanthal Made Of?',
    description: 'Explore the pure ingredients behind our traditional Mohanthal: stone-ground besan, pure premium ghee, Kashmiri saffron, crushed green cardamom, and crunchy almonds.',
    keywords: 'Mohanthal ingredients, what is Mohanthal made of, besan sweet, premium ghee sweets, Kashmiri saffron sweet, cardamom pistachios',
    canonicalPath: '/ingredients',
    ogImage: '/images/ingredients-mohanthal.jpg',
  },
  process: {
    title: 'How Mohanthal Is Made | Traditional Gujarati Preparation & Roasting',
    description: 'From the traditional Dhrabo technique to slow ghee roasting and single-string chasni, discover the 7-step artisanal process that gives our Mohanthal its signature melt-in-mouth texture.',
    keywords: 'Mohanthal making process, how Mohanthal is made, traditional Mohanthal recipe style, Dhrabo technique, authentic Mohanthal preparation',
    canonicalPath: '/process',
    ogImage: '/images/hero-mohanthal.jpg',
  },
  gifting: {
    title: 'Mohanthal Gift Boxes | Premium Gujarati Sweet Gifting & Bulk Orders',
    description: 'Elegant Mohanthal gift boxes for Diwali, weddings, Janmashtami, and corporate celebrations. Handcrafted fresh sweets packed in premium airtight festive keepsake boxes.',
    keywords: 'Mohanthal gift box, Gujarati sweets for gifting, Diwali sweet gift box, wedding mithai favor, corporate sweet hampers, Mohanthal bulk order',
    canonicalPath: '/gifting',
    ogImage: '/images/gifting-mohanthal.jpg',
  },
  gallery: {
    title: 'Mohanthal Photo Gallery | Authentic Gujarati Sweet Images',
    description: 'View high-resolution photography of our authentic Gujarati Mohanthal, traditional preparation moments, pure raw ingredients, and festive gift packaging.',
    keywords: 'Mohanthal photos, Gujarati Mohanthal pictures, authentic Indian sweets photography, festive gift box photos',
    canonicalPath: '/gallery',
    ogImage: '/images/hero-mohanthal.jpg',
  },
  faq: {
    title: 'Mohanthal FAQ | Ingredients, Storage, Shelf Life & Delivery',
    description: 'Answers to all your questions about Mohanthal sweet: ingredients, shelf life (25-30 days), room temperature storage, pan India delivery, and custom gifting.',
    keywords: 'Mohanthal FAQ, how long does Mohanthal last, Mohanthal shelf life, how to store Mohanthal, Mohanthal delivery India',
    canonicalPath: '/faq',
    ogImage: '/images/texture-mohanthal.jpg',
  },
  contact: {
    title: 'Contact Us | Mohanthal Sweet Inquiries, WhatsApp & Bulk Orders',
    description: 'Connect with us for personal orders, festival gift boxes, and corporate Mohanthal inquiries. WhatsApp or call our team for fast assistance across India.',
    keywords: 'Contact Mohanthal, order Mohanthal WhatsApp, Gujarati sweet customer inquiry, bulk sweet order contact',
    canonicalPath: '/contact',
    ogImage: '/images/gifting-mohanthal.jpg',
  },
  privacyPolicy: {
    title: 'Privacy Policy | Authentic Gujarati Mohanthal',
    description: 'Our customer data privacy policy regarding personal inquiries, WhatsApp interactions, and website contact forms.',
    keywords: 'Privacy policy, customer data protection, Mohanthal sweet privacy',
    canonicalPath: '/privacy-policy',
    ogImage: '/images/hero-mohanthal.jpg',
  },
  terms: {
    title: 'Terms & Conditions | Authentic Gujarati Mohanthal',
    description: 'Terms of service, inquiry policies, delivery guidelines, and packaging standards for our handcrafted sweet brand.',
    keywords: 'Terms and conditions, delivery terms, order inquiries terms',
    canonicalPath: '/terms',
    ogImage: '/images/hero-mohanthal.jpg',
  },
  shippingPolicy: {
    title: 'Shipping & Delivery Policy | Authentic Gujarati Mohanthal',
    description: 'Information on pan India courier dispatch, packaging freshness, shelf life transit, and delivery timelines.',
    keywords: 'Mohanthal shipping, sweet delivery timeline, pan India mithai courier, packaging freshness',
    canonicalPath: '/shipping-policy',
    ogImage: '/images/hero-mohanthal.jpg',
  },
  returnPolicy: {
    title: 'Return & Refund Policy | Authentic Gujarati Mohanthal',
    description: 'Learn about our return, replacement, and cancellation guidelines for handcrafted Mohanthal sweets dispatched across India.',
    keywords: 'Mohanthal return policy, refund guidelines, damaged delivery replacement, sweet cancellations',
    canonicalPath: '/return-policy',
    ogImage: '/images/hero-mohanthal.jpg',
  },
  notFound: {
    title: '404: Sweet Not Found | Authentic Gujarati Mohanthal',
    description: 'The page you were looking for seems to have gone missing. Return home to discover our authentic Gujarati Mohanthal.',
    keywords: '404, not found, Mohanthal',
    canonicalPath: '/404',
    ogImage: '/images/hero-mohanthal.jpg',
  },
};
