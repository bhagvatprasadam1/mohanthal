export interface FAQItem {
  id: string;
  category: 'Product' | 'Ingredients' | 'Preparation' | 'Storage' | 'Delivery' | 'Gifting' | 'Bulk Orders';
  question: string;
  answer: string;
  featuredOnHome?: boolean;
}

export const faqsData: FAQItem[] = [
  {
    id: 'what-is-mohanthal',
    category: 'Product',
    question: 'What is Mohanthal?',
    answer: 'Mohanthal is an iconic royal Gujarati and Rajasthani sweet traditionally made from coarse gram flour (besan), pure premium ghee, sugar syrup (chasni), aromatic saffron (kesar), cardamom, and garnished generously with almonds and pistachios. It has a rich, fudge-like consistency with a distinctive granular and crumbly melt-in-the-mouth texture.',
    featuredOnHome: true,
  },
  {
    id: 'what-is-it-made-from',
    category: 'Ingredients',
    question: 'What is traditional Gujarati Mohanthal made from?',
    answer: 'Authentic Gujarati Mohanthal is crafted from stone-ground coarse besan, pure premium ghee, refined sugar, whole milk, Kashmiri saffron, crushed green cardamom, and slivered almonds and pistachios. We do not use any artificial food color, artificial flavor essence, or chemical preservatives.',
    featuredOnHome: true,
  },
  {
    id: 'does-it-contain-ghee',
    category: 'Ingredients',
    question: 'Does Mohanthal contain pure premium ghee?',
    answer: 'Yes, absolutely. Pure premium ghee is the cornerstone of traditional Mohanthal. It provides the signature roasted aroma, tender grain, and glossy appearance while acting as a natural preservative.',
    featuredOnHome: true,
  },
  {
    id: 'taste-profile',
    category: 'Product',
    question: 'What does Mohanthal taste like?',
    answer: 'Mohanthal has a deeply satisfying, nutty sweetness with deep roasted notes of caramelized gram flour, rich buttery undertones of pure premium ghee, and a fragrant, floral-citrus lift from cardamom and Kashmiri saffron. It is rich and decadent without being cloying.',
    featuredOnHome: false,
  },
  {
    id: 'grainy-texture',
    category: 'Preparation',
    question: 'What gives Mohanthal its signature grainy texture?',
    answer: 'The signature grainy crumb (Danedaar) comes from an ancestral Gujarati technique called "Dhrabo". Coarse gram flour is hand-rubbed with warm melted ghee and milk until small pearl-like granules form, which are then sifted and slow-roasted over gentle heat.',
    featuredOnHome: true,
  },
  {
    id: 'storage-instructions',
    category: 'Storage',
    question: 'How should Mohanthal be stored?',
    answer: 'Mohanthal should be stored in a cool, dry place away from direct sunlight and heat. Once opened, keep it in an airtight container to preserve its delicate ghee aroma and moisture. Mohanthal does NOT need to be refrigerated; keeping it at room temperature ensures it retains its soft, velvety crumble.',
    featuredOnHome: true,
  },
  {
    id: 'shelf-life',
    category: 'Storage',
    question: 'What is the shelf life of Mohanthal?',
    answer: 'Our fresh Mohanthal has a natural shelf life of 25 to 30 days at ambient room temperature, thanks to the thorough slow-roasting of besan in pure premium ghee and moisture-locking sugar syrup.',
    featuredOnHome: true,
  },
  {
    id: 'festivals',
    category: 'Gifting',
    question: 'Can I order Mohanthal for festivals like Diwali or Janmashtami?',
    answer: 'Yes! Mohanthal is the quintessential Gujarati celebratory sweet offered during Diwali, Janmashtami, Raksha Bandhan, and auspicious family pujas. We recommend reserving festival orders 5 to 7 days in advance for timely preparation and dispatch.',
    featuredOnHome: false,
  },
  {
    id: 'gift-boxes',
    category: 'Gifting',
    question: 'Do you offer Mohanthal gift boxes?',
    answer: 'Yes, we offer premium rigid keepsake boxes with gold foil Gujarati motifs in 250g, 500g, and 1kg sizes, complete with airtight inner food-grade sealing for elegant and safe presentation.',
    featuredOnHome: false,
  },
  {
    id: 'bulk-orders',
    category: 'Bulk Orders',
    question: 'Do you accept bulk and corporate orders?',
    answer: 'Yes, we regularly cater to corporate gifting programs, wedding return gifts, and festival community orders. Custom sleeve branding and scheduled multi-city delivery are available upon request.',
    featuredOnHome: false,
  },
  {
    id: 'pan-india-delivery',
    category: 'Delivery',
    question: 'Do you deliver across India?',
    answer: 'Yes, we dispatch freshly prepared batches via express air and road logistics to major metros and tier-1/tier-2 cities across India, packaged securely in shock-resistant outer courier boxes.',
    featuredOnHome: true,
  },
  {
    id: 'how-to-order',
    category: 'Delivery',
    question: 'How can I order or enquire about Mohanthal?',
    answer: 'Since we focus on handcrafted small batches, simply click any "Enquire on WhatsApp" or "Call Us" button on the website, or fill out our Contact inquiry form. Our team responds promptly with availability, batch dates, and dispatch schedules.',
    featuredOnHome: true,
  },
];
