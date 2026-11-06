import React from 'react';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { ExternalLink, Gift, Check, Flame } from 'lucide-react';
import { mohanthalProduct } from '../../data/products';

export const FestiveBanner: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="festive-banner">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Container with Image & Content Overlay */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-gold/50 bg-deep-brown">
          
          {/* Background Image with Clean Overlay */}
          <div className="relative h-[480px] sm:h-[540px] lg:h-[480px] w-full">
            <img
              src="/images/festive-banner.jpg"
              alt="Royal Gujarati Mohanthal Festive Collection with Diwali diyas and marigold flowers"
              className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
            {/* Overlay for readable text */}
            <div className="absolute inset-0 bg-deep-brown/85 lg:w-3/5" />
          </div>

          {/* Foreground Content Card */}
          <div className="absolute inset-0 flex flex-col justify-center p-6 sm:p-12 lg:p-16 max-w-2xl text-cream space-y-4">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-cream tracking-tight leading-tight">
              Royal Gujarati <span className="text-gold italic">Mohanthal</span>
            </h2>

            <p className="text-cream/90 text-sm sm:text-base lg:text-lg leading-relaxed">
              Make Diwali, weddings, and sacred temple pujas unforgettable with our authentic artisanal Mohanthal gift boxes. Handcrafted with 100% pure premium ghee, stone-ground besan, and rich dry fruits by <strong className="text-gold">Bhagvat Prasadam</strong>.
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-cream/90 pt-1">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                250gm, 500gm & 1kg Packs
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                Pan India Express Dispatch
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                Airtight Freshness Sealed
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-gold flex-shrink-0" />
                Diwali & Puja Ready
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <WhatsAppButton
                context="gifting"
                size="md"
                className="font-semibold text-sm justify-center"
              >
                Enquire for Festive Gifting
              </WhatsAppButton>

              <a
                href={mohanthalProduct.productUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors active:scale-95 text-center"
              >
                <span>Buy on Bhagvat Prasadam Store</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FestiveBanner;
