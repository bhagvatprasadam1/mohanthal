export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  rating: number;
  review: string;
  occasion: string;
  verified: boolean;
  date: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: 'rev-1',
    name: 'Bhavna Parikh',
    city: 'Ahmedabad, Gujarat',
    rating: 5,
    review: 'Reminded me instantly of my grandmother’s kitchen in Saurashtra. The texture is truly danedaar (grainy) and not pasty like commercial store-bought sweets. The aroma of pure premium ghee fills the room as soon as you open the box.',
    occasion: 'Family Festival Order',
    verified: true,
    date: 'October 2026',
  },
  {
    id: 'rev-2',
    name: 'Rajesh Mehta',
    city: 'Mumbai, Maharashtra',
    rating: 5,
    review: 'Ordered 500g boxes for our corporate Diwali clients across Mumbai. Every single recipient praised the authenticity and royal packaging. The balance of saffron and cardamom is delicate and luxurious.',
    occasion: 'Corporate Festive Gifting',
    verified: true,
    date: 'October 2026',
  },
  {
    id: 'rev-3',
    name: 'Hetal Shah',
    city: 'Surat, Gujarat',
    rating: 5,
    review: 'Finding authentic Mohanthal with genuine Dhrabo texture is almost impossible today. This is the real deal. Soft, rich, melt-in-the-mouth, and arrived in immaculate condition without breaking.',
    occasion: 'Janmashtami Puja Offering',
    verified: true,
    date: 'September 2026',
  },
  {
    id: 'rev-4',
    name: 'Priyank Joshi',
    city: 'Bengaluru, Karnataka',
    rating: 5,
    review: 'Being away from Gujarat, I craved authentic homemade Mohanthal. Ordered via WhatsApp inquiry and received fresh dispatch in Bengaluru within 48 hours. Absolute perfection with evening tea.',
    occasion: 'Personal Indulgence',
    verified: true,
    date: 'September 2026',
  },
];
