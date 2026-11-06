import { siteConfig } from '../data/siteConfig';
import { mohanthalProduct } from '../data/products';
import { faqsData } from '../data/faqs';

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.brandName,
    url: siteConfig.siteUrl,
    logo: `${siteConfig.siteUrl}/favicon.svg`,
    description: siteConfig.subTagline,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.phone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Gujarati', 'Hindi'],
    },
    sameAs: [
      siteConfig.socials.instagram,
      siteConfig.socials.facebook,
      siteConfig.socials.youtube,
    ],
  };
}

export function getProductSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Mohanthal | मोहनथाल | Traditional Gujarati Sweet',
    image: `${siteConfig.siteUrl}${mohanthalProduct.imageUrl}`,
    description: mohanthalProduct.description,
    brand: {
      '@type': 'Brand',
      name: mohanthalProduct.vendor,
    },
    category: 'Food & Beverage > Sweets & Desserts > Indian Sweets',
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'INR',
      lowPrice: '148.00',
      highPrice: '590.00',
      offerCount: '3',
      availability: 'https://schema.org/InStock',
      url: mohanthalProduct.productUrl,
      seller: {
        '@type': 'Organization',
        name: mohanthalProduct.vendor,
      },
    },
  };
}

export function getFAQPageSchema(category?: string) {
  const items = category
    ? faqsData.filter((f) => f.category === category)
    : faqsData.filter((f) => f.featuredOnHome);

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${siteConfig.siteUrl}${item.path}`,
    })),
  };
}

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: siteConfig.brandName,
    image: `${siteConfig.siteUrl}/images/hero-mohanthal.jpg`,
    telephone: siteConfig.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    openingHours: 'Mo-Su 09:00-21:00',
    servesCuisine: 'Gujarati Traditional Sweets',
    priceRange: '₹₹',
    url: siteConfig.siteUrl,
  };
}
