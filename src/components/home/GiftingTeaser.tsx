import React from "react";
import { SectionHeading } from "../common/SectionHeading";
import { Button } from "../common/Button";
import { WhatsAppButton } from "../common/WhatsAppButton";
import { ArrowRight, Gift, Check } from "lucide-react";

export const GiftingTeaser: React.FC = () => {
  const occasions = [
    "Diwali & Bestu Varas",
    "Weddings & Favors",
    "Raksha Bandhan",
    "Janmashtami Offering",
    "Puja & Housewarming",
    "Corporate Gifting",
  ];

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="gifting-teaser">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CELEBRATIONS & GIFTS"
          title="Made For Sweet Moments"
          subtitle="Packaged in rigid keepsake gift boxes with gold foil embossing, our Mohanthal makes a memorable impression for life's most meaningful celebrations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Showcase */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border-2 border-gold/40 bg-white">
              <img
                src="/images/gifting-mohanthal.jpg"
                alt="Luxury premium festive gift box filled with authentic Gujarati Mohanthal sweets adorned with diya and marigolds"
                className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-500"
                loading="lazy"
                width="600"
                height="450"
              />
            </div>
            <div className="mt-3 text-center text-xs text-muted-text italic">
              Premium rigid drawer box with food-grade airtight seal
            </div>
          </div>

          {/* Details & Occasions */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-primary font-serif font-bold text-xl">
              <Gift className="w-5 h-5 text-gold" />
              <span>The Quintessential Indian Celebration Gift</span>
            </div>

            <p className="text-muted-text text-base sm:text-lg leading-relaxed">
              Move beyond generic mass-manufactured gift boxes. Gifting
              authentic, freshly handcrafted Mohanthal honors your recipients
              with the regal warmth of pure premium ghee, fragrant saffron, and
              pure traditional artistry.
            </p>

            <div>
              <span className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-3">
                Celebrated Across Auspicious Occasions:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {occasions.map((occ, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl border border-light-beige text-xs font-medium text-dark-text"
                  >
                    <Check className="w-3.5 h-3.5 text-muted-green flex-shrink-0" />
                    <span className="truncate">{occ}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <WhatsAppButton context="gifting" size="md">
                Enquire About Gifting
              </WhatsAppButton>

              <Button
                to="/gifting"
                variant="outline"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Explore All Gift Boxes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GiftingTeaser;
