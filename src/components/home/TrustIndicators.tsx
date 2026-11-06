import React from 'react';
import { Flame, Award, HeartHandshake, Clock } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  const pillars = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: 'Pure Premium Ghee',
      description: 'Slow-simmered pure premium ghee imparting the rich, comforting fragrance of tradition.',
    },
    {
      icon: <Flame className="w-6 h-6 text-primary" />,
      title: 'Premium Besan',
      description: 'Coarse stone-ground gram flour carefully roasted to golden perfection.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-primary" />,
      title: 'Traditional Recipe',
      description: 'Ancestral Gujarati proportions with authentic hand-rubbed "Dhrabo" technique.',
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: 'Freshly Prepared',
      description: 'Crafted in small batches and dispatched fresh to retain delicate moisture.',
    },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" aria-label="Trust and Quality Pillars">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3.5 p-3 sm:p-4 rounded-xl bg-white/70 border border-light-beige hover:border-primary transition-colors"
            >
              <div className="p-2 sm:p-2.5 rounded-lg bg-cream border border-gold/20 flex-shrink-0 [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                {pillar.icon}
              </div>
              <div>
                <h3 className="font-serif font-bold text-deep-brown text-sm sm:text-base leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-muted-text text-[11px] sm:text-xs md:text-sm mt-0.5 sm:mt-1 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
