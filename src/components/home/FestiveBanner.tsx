import React from 'react';
import { mohanthalProduct } from '../../data/products';

export const FestiveBanner: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="festive-banner">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container with Clean Image */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-gold/50 bg-deep-brown">
          <a
            href={mohanthalProduct.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative w-full h-[320px] sm:h-[420px] lg:h-[500px] group focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Royal Gujarati Mohanthal Festive Gift Collection"
          >
            <picture>
              <source srcSet="/images/festive-banner.avif" type="image/avif" />
              <source srcSet="/images/festive-banner.webp" type="image/webp" />
              <img
                src="/images/festive-banner.jpg"
                alt="Royal Gujarati Mohanthal Festive Collection with Diwali diyas and marigold flowers"
                className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-1000"
                loading="lazy"
                decoding="async"
                width="1376"
                height="768"
              />
            </picture>
          </a>
        </div>

      </div>
    </section>
  );
};

export default FestiveBanner;
