import React from "react";
import { SEOHead } from "../components/seo/SEOHead";
import { seoData } from "../data/seo";
import {
  getOrganizationSchema,
  getWebSiteSchema,
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
    getWebSiteSchema(),
    getProductSchema(),
    getFAQPageSchema(),
  ];

  return (
    <>
      <SEOHead
        title={seoData.home.title}
        description={seoData.home.description}
        keywords={seoData.home.keywords}
        canonicalPath={seoData.home.canonicalPath}
        ogImage={seoData.home.ogImage}
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
