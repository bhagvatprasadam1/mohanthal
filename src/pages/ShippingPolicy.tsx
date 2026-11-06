import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { seoData } from '../data/seo';
import { getBreadcrumbSchema } from '../lib/seo';
import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Box, Clock } from 'lucide-react';

export const ShippingPolicy: React.FC = () => {
  const schemas = [
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Shipping Policy', path: '/shipping-policy' },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.shippingPolicy.title}
        description={seoData.shippingPolicy.description}
        keywords={seoData.shippingPolicy.keywords}
        canonicalPath={seoData.shippingPolicy.canonicalPath}
        ogImage={seoData.shippingPolicy.ogImage}
        schema={schemas}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-dark-text font-medium">Shipping & Delivery Policy</span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-light-beige space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2">
              DISPATCH & FRESHNESS STANDARDS
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-deep-brown font-bold">
              Shipping & Freshness Policy
            </h1>
            <p className="text-muted-text text-sm sm:text-base mt-2">
              How we package, protect, and deliver authentic Gujarati Mohanthal to homes and events across India.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-light-beige/50 border border-light-beige flex items-start gap-3">
              <Truck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-deep-brown text-sm">Pan India Express Logistics</h4>
                <p className="text-muted-text text-xs mt-0.5">Delivered via reliable air & surface express couriers.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-light-beige/50 border border-light-beige flex items-start gap-3">
              <Box className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-deep-brown text-sm">Airtight Food-Grade Sealing</h4>
                <p className="text-muted-text text-xs mt-0.5">Preserves pure premium ghee aroma and natural shelf life.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-sm text-dark-text/90 leading-relaxed border-t border-light-beige pt-6">
            <section className="space-y-2">
              <h2 className="font-serif font-bold text-xl text-deep-brown">1. Made-to-Order Dispatch</h2>
              <p>
                To ensure maximum freshness, we do not warehouse pre-packaged sweets. Once your inquiry and order confirmation is completed, your batch is prepared fresh, rested naturally, sliced, packed in airtight trays, and dispatched within 24 to 48 hours.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif font-bold text-xl text-deep-brown">2. Transit Times Across India</h2>
              <ul className="list-disc pl-5 space-y-1 text-muted-text">
                <li><strong>Gujarat & Western India:</strong> 1 to 2 business days.</li>
                <li><strong>Metro Cities (Mumbai, Delhi-NCR, Bengaluru, Hyderabad, Chennai, Kolkata):</strong> 2 to 3 business days via Express Air.</li>
                <li><strong>Tier-2 & Tier-3 Regional Cities:</strong> 3 to 5 business days.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif font-bold text-xl text-deep-brown">3. Transit Stability & Shelf Life</h2>
              <p>
                Because authentic Mohanthal is crafted through slow roasting in pure premium ghee and sugar chasni, it maintains exceptional room temperature stability for 25 to 30 days without spoiling or degrading during transit.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif font-bold text-xl text-deep-brown">4. Festival Season Notice</h2>
              <p>
                During high-demand festive intervals (Diwali, Bestu Varas, Janmashtami, Raksha Bandhan), courier networks experience heavy volumes. We strongly recommend reserving orders 5 to 7 days in advance.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
