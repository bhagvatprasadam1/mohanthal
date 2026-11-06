import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { seoData } from '../data/seo';
import { getBreadcrumbSchema } from '../lib/seo';
import { Link } from 'react-router-dom';

export const Terms: React.FC = () => {
  const schemas = [
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Terms & Conditions', path: '/terms' },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.terms.title}
        description={seoData.terms.description}
        keywords={seoData.terms.keywords}
        canonicalPath={seoData.terms.canonicalPath}
        ogImage={seoData.terms.ogImage}
        schema={schemas}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-dark-text font-medium">Terms & Conditions</span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-light-beige space-y-6 text-sm text-dark-text/90 leading-relaxed">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2">
              TERMS OF SERVICE
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-deep-brown font-bold">
              Terms & Conditions
            </h1>
            <p className="text-muted-text text-xs sm:text-sm mt-1">
              Effective Date: October 2026
            </p>
          </div>

          <p>
            Welcome to the <strong>Mohanthal</strong> marketing website. By browsing this website or contacting us through our inquiry channels, you acknowledge and agree to the terms outlined below.
          </p>

          <section className="space-y-2 pt-2">
            <h2 className="font-serif font-bold text-xl text-deep-brown">1. Informational & Direct Order Nature</h2>
            <p>
              This website serves as an informational product presentation and marketing showcase. Product inquiries, batch scheduling, custom packing, and payment confirmations occur directly via verified business WhatsApp or direct client communication.
            </p>
          </section>

          <section className="space-y-2 pt-2">
            <h2 className="font-serif font-bold text-xl text-deep-brown">2. Handcrafted Variations</h2>
            <p>
              Because our Mohanthal is handcrafted in traditional small batches with coarse stone-ground flour and slow kadai roasting, natural minor variations in roasted amber shade, dry fruit garnishing, and hand-cut diamond dimensions may occur. This is the hallmark of genuine artisanal craftsmanship.
            </p>
          </section>

          <section className="space-y-2 pt-2">
            <h2 className="font-serif font-bold text-xl text-deep-brown">3. Allergens Notice</h2>
            <p>
              Our Mohanthal contains Dairy (Pure Premium Ghee, Milk) and Tree Nuts (Almonds, Pistachios). Customers with severe nut or dairy allergies should exercise personal discretion before consumption.
            </p>
          </section>

          <section className="space-y-2 pt-2">
            <h2 className="font-serif font-bold text-xl text-deep-brown">4. Inquiries & Disputes</h2>
            <p>
              For any clarification or custom corporate terms, please reach our team at <em>hello@mohanthal.in</em> or via our official WhatsApp line.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
