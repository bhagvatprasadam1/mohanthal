import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { Card } from '../common/Card';
import { Award, Utensils, Feather, CheckCircle, PackageCheck, Flame } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const reasons = [
    {
      icon: <Utensils className="w-6 h-6 text-primary" />,
      title: 'Traditional Recipe',
      description: 'Prepared strictly according to time tested Kathiawadi methods without modern industrial shortcuts.',
    },
    {
      icon: <Feather className="w-6 h-6 text-primary" />,
      title: 'Premium Stone Ground Besan',
      description: 'Carefully chosen coarse gram flour specifically milled to create an authentic, even crumble.',
    },
    {
      icon: <Flame className="w-6 h-6 text-primary" />,
      title: 'Slow Simmered Premium Ghee',
      description: 'Used generously to unlock the deep caramelized aroma and velvety richness that defines genuine Mohanthal.',
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: 'Authentic Danedaar Texture',
      description: 'The signature melt in mouth grainy texture achieved solely through the ancestral hand-rubbed Dhrabo method.',
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: 'Fresh Small Batch Preparation',
      description: 'Prepared in limited artisan quantities with zero chemical stabilizers, coloring agents, or artificial essence.',
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-primary" />,
      title: 'Luxury Keepsake Packaging',
      description: 'Sealed in airtight food-grade gold trays and housed in regal rigid boxes designed for freshness and festive gifting.',
    },
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="why-choose-us">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="DISTINCTIVE EXCELLENCE"
          title="Why Choose Our Mohanthal?"
          subtitle="Every bite embodies six decades of devotion to authentic Gujarati craftsmanship."
        />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 lg:gap-6">
          {reasons.map((item, index) => (
            <Card key={index} className="!p-3.5 sm:!p-6 lg:!p-7 flex flex-col justify-between">
              <div>
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-light-beige flex items-center justify-center mb-3 sm:mb-4 border border-gold/30 text-primary [&>svg]:w-5 [&>svg]:h-5 sm:[&>svg]:w-6 sm:[&>svg]:h-6">
                  {item.icon}
                </div>
                <h3 className="font-serif font-bold text-sm sm:text-lg lg:text-xl text-deep-brown mb-1 sm:mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-muted-text text-xs sm:text-sm lg:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
