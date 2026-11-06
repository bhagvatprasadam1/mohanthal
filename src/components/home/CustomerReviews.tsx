import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { testimonialsData } from '../../data/testimonials';
import { Star, ShieldCheck, MapPin, Truck, Award, Heart } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  const proofPillars = [
    { icon: <Award className="w-5 h-5 text-primary" />, label: 'Traditional Recipe' },
    { icon: <ShieldCheck className="w-5 h-5 text-primary" />, label: 'Premium Ingredients' },
    { icon: <Heart className="w-5 h-5 text-primary" />, label: 'Made With Care' },
    { icon: <Truck className="w-5 h-5 text-primary" />, label: 'Pan India Delivery' },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="customer-reviews">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="WORDS OF APPRECIATION"
          title="What Our Customers Say"
          subtitle="Read honest impressions from families, festival celebrants, and corporate clients across India."
        />

        {/* Social Proof Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-12">
          {proofPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center gap-1.5 sm:gap-2 p-2.5 sm:p-3.5 rounded-xl bg-white border border-light-beige text-[11px] sm:text-xs md:text-sm font-semibold text-deep-brown"
            >
              {pillar.icon}
              <span className="truncate">{pillar.label}</span>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between"
            >
              <div>
                {/* Star rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]"
                    />
                  ))}
                  <span className="text-xs text-muted-text ml-2 font-medium">
                    {item.occasion}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-dark-text/90 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{item.review}"
                </p>
              </div>

              {/* Author & City */}
              <div className="pt-4 border-t border-light-beige flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-deep-brown text-base">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-muted-text mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                    <span>{item.city}</span>
                  </div>
                </div>

                {item.verified && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-green bg-muted-green/10 px-2.5 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified Order
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
