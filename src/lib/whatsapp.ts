import { siteConfig } from '../data/siteConfig';

export type WhatsAppContext = 'general' | 'hero' | 'product' | 'product_weight' | 'gifting' | 'bulk' | 'contact';

export interface WhatsAppOptions {
  context?: WhatsAppContext;
  weight?: string;
  customMessage?: string;
}

export function getWhatsAppUrl(options: WhatsAppOptions = {}): string {
  const phone = siteConfig.whatsappNumber;
  let message = 'Hello! I would like to know more about your authentic Gujarati Mohanthal.';

  if (options.customMessage) {
    message = options.customMessage;
  } else if (options.context === 'hero') {
    message = 'Hello! I would like to enquire about ordering your authentic Gujarati Mohanthal.';
  } else if (options.context === 'product') {
    message = 'Hello! I am interested in your Traditional Gujarati Mohanthal. Please share pricing and dispatch availability.';
  } else if (options.context === 'product_weight') {
    message = `Hello! I am interested in ordering the ${options.weight || '500g'} pack of your Traditional Gujarati Mohanthal. Please share pricing and delivery details.`;
  } else if (options.context === 'gifting') {
    message = 'Hello! I am interested in Mohanthal festive gift boxes for an upcoming celebration. Please share gift box options.';
  } else if (options.context === 'bulk') {
    message = 'Hello! I am looking to place a bulk Mohanthal order for a corporate event / wedding celebration. Please share details.';
  } else if (options.context === 'contact') {
    message = 'Hello! I would like to enquire about your Mohanthal sweets.';
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
