import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { seoData } from '../data/seo';
import { getBreadcrumbSchema } from '../lib/seo';
import { giftingOccasions } from '../data/gifting';
import { SectionHeading } from '../components/common/SectionHeading';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { Gift, Package, Building, Heart, CheckCircle2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Gifting: React.FC = () => {
  const schemas = [
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Gifting', path: '/gifting' },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.gifting.title}
        description={seoData.gifting.description}
        keywords={seoData.gifting.keywords}
        canonicalPath={seoData.gifting.canonicalPath}
        ogImage={seoData.gifting.ogImage}
        schema={schemas}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-dark-text font-medium">Gifting</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 inline-block">
            CELEBRATIONS & HAMPERS
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-deep-brown font-bold tracking-tight leading-tight">
            Sweet Moments, Thoughtfully Boxed
          </h1>
          <p className="mt-4 text-muted-text text-base sm:text-lg leading-relaxed">
            Elevate your festive, wedding, and corporate gifting with authentic Gujarati Mohanthal presented in royal rigid keepsake boxes.
          </p>
          <div className="pt-6 flex justify-center">
            <WhatsAppButton context="gifting" size="lg">
              Enquire on WhatsApp
            </WhatsAppButton>
          </div>
        </div>

        {/* Gift Box Packaging Showcase */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-light-beige mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                ROYAL PRESENTATION
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-deep-brown font-bold leading-tight">
                Designed to Impress and Protect Freshness
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                Our luxury gift boxes are crafted with heavy-gauge rigid board, warm cream textured cardstock, and embossed traditional Gujarati gold foil motifs.
              </p>
              <div className="space-y-3 pt-2 text-xs sm:text-sm text-dark-text">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-muted-green flex-shrink-0" />
                  <span>Airtight food-grade gold inner tray locks in pure premium ghee aroma</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-muted-green flex-shrink-0" />
                  <span>Smooth sliding drawer box with satin pull-ribbon</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-muted-green flex-shrink-0" />
                  <span>Individual gold cups protect delicate pieces during courier transit</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-gold/40">
                <img
                  src="/images/gifting-mohanthal.jpg"
                  alt="Premium Mohanthal gift box with diya and marigolds"
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Gifting Occasions Grid */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <SectionHeading
            eyebrow="MEMORABLE CELEBRATIONS"
            title="Tailored for Every Auspicious Milestone"
            subtitle="Explore our dedicated gifting options for families, celebrations, and businesses."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {giftingOccasions.map((occ) => (
              <div
                key={occ.id}
                className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                      {occ.tag}
                    </span>
                    <span className="text-[11px] text-muted-text flex items-center gap-1">
                      <Clock className="w-3 h-3 text-gold" />
                      {occ.leadTime}
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-xl text-deep-brown mb-2">
                    {occ.name}
                  </h3>

                  <p className="text-muted-text text-sm leading-relaxed mb-4">
                    {occ.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-light-beige text-xs text-dark-text/90 font-medium">
                  <strong>Recommended Box:</strong> {occ.boxSize}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Corporate & Bulk Gifting Banner */}
        <div className="bg-deep-brown text-cream rounded-3xl p-8 sm:p-12 border border-gold/40 mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gold flex items-center gap-2">
                <Building className="w-4 h-4" />
                CORPORATE & WEDDING INVITATION BULK ORDERS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-cream">
                Custom Branding & Scheduled Multi-Address Delivery
              </h2>
              <p className="text-cream/80 text-sm sm:text-base leading-relaxed">
                Whether you need 50 boxes for client Diwali hampers or 500 boxes for a destination wedding favor, we offer customized gift sleeve branding, personalized greeting notes, and reliable multi-city dispatch across India.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <WhatsAppButton
                context="bulk"
                size="lg"
                className="w-full justify-center bg-gold text-deep-brown hover:bg-gold-light"
              >
                Request Bulk Order
              </WhatsAppButton>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center py-3 px-6 rounded-full border border-gold/40 text-cream text-xs font-medium hover:bg-white/10"
              >
                Submit Written Inquiry
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
