export interface GiftingOccasion {
  id: string;
  name: string;
  tag: string;
  description: string;
  boxSize: string;
  leadTime: string;
}

export const giftingOccasions: GiftingOccasion[] = [
  {
    id: 'diwali',
    name: 'Diwali & Bestu Varas',
    tag: 'Grand Festival',
    description: 'Celebrate the Festival of Lights and the Gujarati New Year with auspicious golden sweets that signify wealth, joy, and warmth.',
    boxSize: '500g & 1kg Rigid Gift Boxes',
    leadTime: 'Order 5-7 days prior',
  },
  {
    id: 'weddings',
    name: 'Weddings & Invitation Favors',
    tag: 'Royal Traditions',
    description: 'Accompany your wedding cards and welcome hampers with authentic Mohanthal crafted in heritage packaging that speaks of royal Gujarati hospitality.',
    boxSize: '250g & 500g Custom Foil Sleeves',
    leadTime: 'Order 10-14 days prior',
  },
  {
    id: 'corporate',
    name: 'Corporate & Client Appreciation',
    tag: 'Executive Gifting',
    description: 'Impress valued partners and employees with an authentic artisanal delicacy that stands out from mass-produced commercial chocolates.',
    boxSize: '500g Premium Keepsake Boxes',
    leadTime: 'Bulk dispatch scheduling available',
  },
  {
    id: 'raksha-bandhan',
    name: 'Raksha Bandhan & Bhaubeej',
    tag: 'Sibling Love',
    description: 'Surprise your sibling with the authentic homemade taste of nostalgia and pure ghee indulgence.',
    boxSize: '250g & 500g Boxes',
    leadTime: 'Order 3-5 days prior',
  },
  {
    id: 'janmashtami',
    name: 'Janmashtami & Temple Bhog',
    tag: 'Sacred Offering',
    description: 'Prepared in a clean, hygienic environment adhering to traditional satvik purity, ideal for offering to Lord Krishna (Mohan) on his birthday.',
    boxSize: '500g & 1kg Auspicious Packs',
    leadTime: 'Order 3-5 days prior',
  },
  {
    id: 'housewarming',
    name: 'Housewarming & Family Celebrations',
    tag: 'Auspicious Starts',
    description: 'Make family blessings and Griha Pravesh gatherings unforgettable with sweet golden memories.',
    boxSize: '500g & 1kg Family Packs',
    leadTime: 'Order 2-4 days prior',
  },
];
