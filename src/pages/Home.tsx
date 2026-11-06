import React from "react";
import { SEOHead } from "../components/seo/SEOHead";
import { seoData } from "../data/seo";
import {
  getOrganizationSchema,
  getProductSchema,
  getFAQPageSchema,
} from "../lib/seo";
import { HeroSection } from "../components/home/HeroSection";
import { FullWidthBanner } from "../components/home/FullWidthBanner";
import { TrustIndicators } from "../components/home/TrustIndicators";
import { ProductIntro } from "../components/home/ProductIntro";
import { ProductVideoSection } from "../components/home/ProductVideoSection";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { IngredientsSection } from "../components/home/IngredientsSection";
import { ProcessTimeline } from "../components/home/ProcessTimeline";
import { TextureSensory } from "../components/home/TextureSensory";
import { HeritageSection } from "../components/home/HeritageSection";
import { GiftingTeaser } from "../components/home/GiftingTeaser";
import { FestiveBanner } from "../components/home/FestiveBanner";
import { HomeFAQ } from "../components/home/HomeFAQ";
import { FinalCTA } from "../components/home/FinalCTA";

export const Home: React.FC = () => {
  const schemas = [
    getOrganizationSchema(),
    getProductSchema(),
    getFAQPageSchema(),
  ];

  return (
    <>
      <SEOHead
        title="Mohanthal | मोहनथाल | Pure Gujarati Sweet | Festival & Diwali Sweet"
        description="Authentic Gujarati Mohanthal handcrafted with pure premium ghee, stone-ground besan, and steeped saffron by Bhagvat Prasadam. Freshly prepared, traditional grainy texture delivered across India."
        keywords="Mohanthal, मोहनथाल, pure Gujarati sweet, traditional Gujarati sweet, festival sweets, Diwali celebrations, puja offerings, corporate gifting, Bhagvat Prasadam Mohanthal"
        canonicalPath={seoData.home.canonicalPath}
        ogImage="/images/festive-banner.jpg"
        schema={schemas}
      />

      <HeroSection />
      <TrustIndicators />
      <FullWidthBanner />
      <ProductIntro />
      <ProductVideoSection />
      <WhyChooseUs />
      <IngredientsSection />
      <ProcessTimeline />
      <TextureSensory />
      <HeritageSection />
      <GiftingTeaser />
      <FestiveBanner />
      <HomeFAQ />
      <FinalCTA />
    </>
  );
};
