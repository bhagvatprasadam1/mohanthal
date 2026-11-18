import React, { useState, useEffect } from 'react';
import { siteConfig } from '../../data/siteConfig';
import { AppDownloadBadges } from './AppDownloadBadges';

export const AnnouncementBar: React.FC = () => {
  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);

  const shippingOffers = [
    `FREE SHIPPING ON ORDERS ABOVE ${siteConfig.offers.freeShippingAbove}`,
    `FREE SHIPPING ON YOUR FIRST ORDER ABOVE ${siteConfig.offers.firstOrderFreeShippingAbove}`,
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOfferIndex((prev) => (prev + 1) % shippingOffers.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [shippingOffers.length]);

  return (
    <aside aria-label="Special Offers and Mobile App Discount" className="w-full select-none">
      {/* LINE 1: Rotating Free Shipping Announcement Bar (Top Header - Line 1) */}
      <div className="bg-primary text-white py-0.5 sm:py-1 px-3">
        <div className="max-w-[1600px] mx-auto flex items-center justify-center text-center">
          <p
            key={currentOfferIndex}
            className="text-[10px] sm:text-[11px] md:text-xs font-bold tracking-wider sm:tracking-widest uppercase transition-opacity duration-300 ease-in-out truncate"
          >
            {shippingOffers[currentOfferIndex]}
          </p>
        </div>
      </div>

      {/* LINE 2: Mobile App Discount Banner (Top Header - Line 2, zero vertical gap) */}
      <div className="bg-primary text-white py-1 sm:py-1.5 px-3">
        <div className="max-w-[1600px] mx-auto flex items-center justify-center gap-1.5 sm:gap-2.5 text-center flex-nowrap overflow-hidden">
          {/* Desktop Text */}
          <span className="hidden sm:inline text-[11px] md:text-xs font-medium text-white/95 whitespace-nowrap">
            Install <strong className="font-bold text-white">{siteConfig.brandName}</strong> App &amp; Get{' '}
            <span className="font-extrabold text-[#FFF0D4] tracking-tight">
              {siteConfig.offers.appDiscount}
            </span>{' '}
            on App! Available on:
          </span>

          {/* Mobile Text (Concise 1 single line without overflow) */}
          <span className="inline sm:hidden text-[10px] xs:text-[11px] font-medium text-white/95 whitespace-nowrap">
            Install App &amp; Get{' '}
            <span className="font-extrabold text-[#FFF0D4]">
              {siteConfig.offers.appDiscountShort}
            </span>
            :
          </span>

          {/* Play Store & App Store Badges */}
          <AppDownloadBadges size="xs" />
        </div>
      </div>
    </aside>
  );
};

export default AnnouncementBar;
