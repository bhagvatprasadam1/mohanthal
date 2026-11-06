import React from "react";
import { Link } from "react-router-dom";

export const FullWidthBanner: React.FC = () => {
  return (
    <section
      aria-label="Pure Traditional Gujarati Sweets Banner"
      className="py-6 sm:py-8 lg:py-9 bg-cream"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-light-beige bg-[#FAF4E8]">
          <Link
            to="/mohanthal"
            className="block w-full group relative focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
            aria-label="Explore Authentic Traditional Gujarati Mohanthal"
          >
            <img
              src="/images/full-width-banner.webp"
              alt="Mohanthal Traditional Sweets • Pure Traditional Gujarati Sweets • Rich in Taste, Rooted in Tradition"
              width="1024"
              height="408"
              className="w-full h-auto block select-none transition-transform duration-500"
              loading="lazy"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FullWidthBanner;
