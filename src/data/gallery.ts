export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Product' | 'Ingredients' | 'Process' | 'Gifting';
  imageUrl: string;
  altText: string;
  description: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 'gal-3d-hero',
    title: '3D Artisanal Mohanthal Floating Cubes',
    category: 'Product',
    imageUrl: '/images/hero-mohanthal-3d.jpg',
    altText: '3D perspective of authentic Mohanthal cubes with pure ghee droplets and floating dry fruits',
    description: 'Ultra-luxury presentation of golden-amber Mohanthal cubes hovering with suspended pistachios and saffron.',
  },
  {
    id: 'gal-process-craft',
    title: 'Slow Kadai Roasting by Master Confectioner',
    category: 'Process',
    imageUrl: '/images/process-craft.jpg',
    altText: 'Traditional Gujarati sweet master stirring golden besan and bubbling pure premium ghee in large antique brass kadai',
    description: 'Ancestral Kathiawadi preparation: slow roasting coarse besan over gentle hearth fire with saffron milk.',
  },
  {
    id: 'gal-festive-royal',
    title: 'Royal Festive Diwali & Wedding Collection',
    category: 'Gifting',
    imageUrl: '/images/festive-banner.jpg',
    altText: 'Royal Gujarati Mohanthal gift box surrounded by glowing Diwali oil lamps and marigold flower garlands',
    description: 'Exquisite festive gift box presentation designed for Diwali celebrations, wedding favors, and temple pujas.',
  },
  {
    id: 'gal-bhagvat-1',
    title: 'Authentic Mohanthal by Bhagvat Prasadam',
    category: 'Product',
    imageUrl: '/images/bhagvat/mohan_thal_main.webp',
    altText: 'Mohanthal pure traditional Gujarati sweet by Bhagvat Prasadam garnished with pistachios and almonds',
    description: 'Golden square cuts of traditional Gujarati Mohanthal made with pure premium ghee and Kashmiri saffron.',
  },
  {
    id: 'gal-bhagvat-2',
    title: 'Mohanthal on Heritage Serving Thali',
    category: 'Product',
    imageUrl: '/images/bhagvat/mohan_thal_plate.webp',
    altText: 'Mohanthal sweets beautifully arranged on traditional serving platter',
    description: 'Freshly prepared festive sweet platter perfect for Diwali, Janmashtami, and family feasts.',
  },
  {
    id: 'gal-bhagvat-3',
    title: 'Danedaar Grainy Crumb Texture',
    category: 'Product',
    imageUrl: '/images/bhagvat/mohan_thal_close.webp',
    altText: 'Close up of authentic grainy melt in mouth Mohanthal texture',
    description: 'The signature moist, granular crumb achieved through the ancestral Dhrabo method.',
  },
  {
    id: 'gal-bhagvat-4',
    title: 'Bhagvat Prasadam Sealed Pack',
    category: 'Gifting',
    imageUrl: '/images/bhagvat/mohan_thal_box.webp',
    altText: 'Bhagvat Prasadam Mohanthal hygienic packaging box',
    description: 'Food-grade sealed packaging ensuring maximum freshness and aroma preservation during transit.',
  },
  {
    id: 'gal-bhagvat-5',
    title: 'Hand-Cut Saffron & Pistachio Pieces',
    category: 'Product',
    imageUrl: '/images/bhagvat/mohan_thal_pieces.webp',
    altText: 'Delicate square cut pieces of Mohanthal sweet with sliced dry fruits',
    description: 'Each piece is hand-cut and garnished with almonds and emerald pistachios.',
  },
  {
    id: 'gal-bhagvat-6',
    title: 'Festive Celebration & Puja Offering',
    category: 'Gifting',
    imageUrl: '/images/bhagvat/mohan_thal_festive.webp',
    altText: 'Traditional festive Gujarati celebration with Mohanthal sweet',
    description: 'Pure satvik sweet suited for sacred temple offerings and festive moments.',
  },
  {
    id: 'gal-7',
    title: 'Pure Raw Ingredients',
    category: 'Ingredients',
    imageUrl: '/images/ingredients-mohanthal.jpg',
    altText: 'Flat lay of coarse besan, pure golden premium ghee, saffron threads, cardamom, almonds, and pistachios',
    description: '100% natural ingredients: stone-ground besan, pure premium ghee, and hand-sorted spices.',
  },
  {
    id: 'gal-8',
    title: 'Festive Keepsake Gift Box',
    category: 'Gifting',
    imageUrl: '/images/gifting-mohanthal.jpg',
    altText: 'Premium festive Mohanthal gift box with diya and marigolds',
    description: 'Rigid luxury keepsake box with gold foil Gujarati motifs for corporate and wedding gifting.',
  },
];
