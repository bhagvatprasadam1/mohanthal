import React from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { ingredientsData } from '../../data/ingredients';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const IngredientsSection: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="ingredients-section">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="UNCOMPROMISED PURITY"
          title="Made With Simple, Premium Ingredients"
          subtitle="Traditional Gujarati Mohanthal is primarily prepared using pure besan, premium ghee, and sugar, with Kashmiri saffron, cardamom, and dry fruits to enhance its aroma and richness."
        />

        {/* Featured Ingredients Banner */}
        <div className="mb-12 rounded-3xl overflow-hidden border border-light-beige relative bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 p-6 sm:p-10 space-y-4">
              <h3 className="font-serif text-2xl sm:text-3xl text-deep-brown font-bold leading-tight">
                Only Seven Pure Ingredients. Zero Preservatives.
              </h3>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                Great sweets do not require artificial stabilizers or chemical essences. By selecting coarse, stone-ground flour, fragrant pure premium ghee, and hand-selected spices, our Mohanthal delivers the authentic taste of a traditional Gujarati home.
              </p>
              <div className="pt-2">
                <Button
                  to="/ingredients"
                  variant="outline"
                  size="sm"
                  icon={<ArrowRight className="w-4 h-4" />}
                  iconPosition="right"
                >
                  View Ingredients Breakdown
                </Button>
              </div>
            </div>
            <div className="lg:col-span-7 h-full">
              <img
                src="/images/ingredients-mohanthal.jpg"
                alt="Flat lay of Mohanthal ingredients: besan, pure golden premium ghee, saffron, cardamom, almonds, and pistachios"
                className="w-full h-full object-cover max-h-[380px] lg:max-h-none"
                loading="lazy"
                width="700"
                height="450"
              />
            </div>
          </div>
        </div>

        {/* 7 Ingredients Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {ingredientsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-3.5 sm:p-5 lg:p-6 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-gold block mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif text-sm sm:text-base lg:text-lg font-bold text-deep-brown leading-snug">
                  {item.name}
                </h4>
                <span className="text-[11px] sm:text-xs text-primary font-medium block mt-0.5 mb-2 sm:mb-3">
                  {item.gujaratiName}
                </span>
                <p className="text-muted-text text-xs sm:text-sm leading-relaxed">
                  {item.shortDesc}
                </p>
              </div>
            </div>
          ))}

          {/* Quick Info Tile */}
          <div className="bg-primary/5 rounded-2xl p-3.5 sm:p-5 lg:p-6 border border-primary/20 flex flex-col justify-center items-center text-center">
            <span className="font-serif text-base sm:text-lg lg:text-xl font-bold text-deep-brown mb-1.5 sm:mb-2 leading-snug">
              Interested in the Process?
            </span>
            <p className="text-xs text-muted-text mb-3 sm:mb-4">
              See how these seven ingredients are brought together using the 7-step Gujarati Dhrabo method.
            </p>
            <Button to="/process" variant="primary" size="sm">
              Discover the Process
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
