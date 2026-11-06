export interface SiteConfig {
  brandName: string;
  tagline: string;
  subTagline: string;
  siteUrl: string;
  phone: string;
  displayPhone: string;
  whatsappNumber: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    region: string;
    full: string;
  };
  announcement: string;
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
    whatsapp: string;
  };
  businessHours: string;
  originYear: string;
}

export const siteConfig: SiteConfig = {
  brandName: 'Mohanthal',
  tagline: 'Authentic Gujarati Mohanthal',
  subTagline: 'Rich, grainy and aromatic, crafted with pure premium ghee and time honoured Gujarati tradition.',
  siteUrl: 'https://mohanthal.in',
  phone: '+918850011652',
  displayPhone: '+91-8850011652',
  whatsappNumber: '918850011652',
  email: 'hello@mohanthal.in',
  address: {
    street: '411, New Escon Plaza, Chhaprabhatha Road, Amroli',
    city: 'Surat',
    state: 'Gujarat',
    postalCode: '394107',
    country: 'India',
    region: 'Western India',
    full: '411, New Escon Plaza, Chhaprabhatha Road, Amroli, Surat, Gujarat 394107',
  },
  announcement: 'Traditional Gujarati Mohanthal • Freshly Prepared With Pure Premium Ghee • Pan India Delivery',
  socials: {
    instagram: 'https://www.instagram.com/_megascale_?igsh=c2NzYTV2eDQ3M3Uw',
    facebook: 'https://www.facebook.com/megascale.surat.96',
    youtube: 'https://youtube.com/@mohanthal_gujarat',
    whatsapp: 'https://wa.me/918850011652',
  },
  businessHours: 'Mon to Sun: 9:00 AM to 9:00 PM IST',
  originYear: '1974',
};
