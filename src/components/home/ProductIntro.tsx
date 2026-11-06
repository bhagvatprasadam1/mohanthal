import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "../common/Button";

export const ProductIntro: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="what-is-mohanthal">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="HERITAGE & ESSENCE"
          title="What Is Mohanthal?"
          subtitle="A sacred confection born in Gujarat, revered for its golden melt-in-mouth richness."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-gold/30 bg-white">
              <img
                src="/images/texture-mohanthal.jpg"
                alt="Close-up of traditional Gujarati Mohanthal breaking softly showing grainy texture"
                className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
            {/* Cultural caption */}
            <div className="mt-4 p-4 rounded-xl bg-light-beige/70 border border-gold/30 text-xs sm:text-sm text-deep-brown">
              <span className="font-semibold block font-serif text-primary">
                Named After Lord Krishna:
              </span>
              <span>
                "Mohan" (a beloved name of Krishna) + "Thal" (offering plate),
                symbolizing royal temple prasadam.
              </span>
            </div>
          </div>

          {/* Detailed SEO Storytelling */}
          <div className="lg:col-span-6 space-y-6 text-muted-text text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-deep-brown font-serif">Mohanthal</strong>{" "}
              is an iconic traditional sweet that originated in the royal
              kitchens and domestic hearths of Gujarat and western India.
              Celebrated across generations, it holds pride of place during
              auspicious gatherings, Diwali festivities, and festive feasts.
            </p>
            <p>
              Unlike standard besan burfi, authentic Mohanthal requires a
              specialized preparation known as the <em>Dhrabo</em> method.
              Coarsely ground gram flour is patiently aerated with warm ghee and
              milk before slow roasting over gentle embers. This labor-intensive
              technique yields its hallmark <strong>Danedaar (grainy)</strong>{" "}
              texture that crumbles gently before melting into pure, comforting
              sweetness.
            </p>

            <div className="space-y-3 pt-2 text-sm text-dark-text">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-muted-green flex-shrink-0" />
                <span>
                  Richly infused with pure premium ghee and single-string boiled
                  sugar syrup
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-muted-green flex-shrink-0" />
                <span>
                  Naturally flavoured with Kashmiri saffron stigmas and green
                  cardamom
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-muted-green flex-shrink-0" />
                <span>
                  Topped with a generous blanket of slivered almonds and
                  pistachios
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Button
                to="/about"
                variant="outline"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Read Our Story & Heritage
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductIntro;
