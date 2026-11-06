import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

export const TextureSensory: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream relative overflow-hidden" id="texture-sensory">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Extreme Macro Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-gold/40 bg-white">
              <img
                src="/images/texture-mohanthal.jpg"
                alt="Extreme close-up of traditional Mohanthal showing the signature moist, grainy melt-in-mouth crumb"
                className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
            <div className="absolute -bottom-3 -right-3 bg-primary text-white p-3.5 rounded-2xl border border-gold/40 hidden sm:block max-w-[200px]">
              <span className="font-serif font-bold text-sm block">Authentic "Dhrabo"</span>
              <span className="text-[11px] text-white/90">Never gummy, never sticky. Perfectly danedaar.</span>
            </div>
          </div>

          {/* Right: Dramatic Sensory Copy */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            <span className="font-jost text-primary font-bold text-xs uppercase tracking-[0.22em] flex items-center gap-2">
              <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
              THE SENSORY DISTINCTION
            </span>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-deep-brown tracking-tight leading-tight">
              The Signature <span className="text-primary italic font-serif">Grainy Texture</span>
            </h2>

            <blockquote className="border-l-2 border-primary pl-4 text-primary font-serif italic text-base sm:text-lg">
              "Soft, rich and delicately grainy, the texture is one of the defining characteristics of traditional Mohanthal."
            </blockquote>

            <p className="text-muted-text text-sm sm:text-base leading-relaxed">
              When you pick up a piece, it holds its clean, square form with grace. Yet, the moment you take a bite, the toasted besan granules part gently under the tongue, releasing the warm, buttery sweetness of slow simmered premium ghee and a lingering fragrance of Kashmiri saffron.
            </p>

            <div className="pt-2">
              <Button
                to="/mohanthal"
                variant="outline"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Discover the Taste
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TextureSensory;
