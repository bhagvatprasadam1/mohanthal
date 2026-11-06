import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { seoData } from '../data/seo';
import { getBreadcrumbSchema } from '../lib/seo';
import { siteConfig } from '../data/siteConfig';
import { Link } from 'react-router-dom';
import { ShieldCheck, RotateCcw, PackageCheck, Headphones, CheckCircle2 } from 'lucide-react';

export const ReturnPolicy: React.FC = () => {
  const schemas = [
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Return Policy', path: '/return-policy' },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.returnPolicy.title}
        description={seoData.returnPolicy.description}
        keywords={seoData.returnPolicy.keywords}
        canonicalPath={seoData.returnPolicy.canonicalPath}
        ogImage={seoData.returnPolicy.ogImage}
        schema={schemas}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-dark-text font-medium">Return & Refund Policy</span>
        </nav>

        <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-light-beige space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2">
              CUSTOMER ASSURANCE & HYGIENE STANDARDS
            </span>
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-deep-brown font-bold">
              Return & Refund Policy
            </h1>
            <p className="text-muted-text text-sm sm:text-base mt-2">
              Our clear guidelines on product freshness, transit damage replacements, and order cancellations.
            </p>
          </div>

          {/* Quick Highlight Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-light-beige/50 border border-light-beige flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-deep-brown text-sm">100% Freshness Guarantee</h4>
                <p className="text-muted-text text-xs mt-0.5">Every batch is prepared fresh with pure premium ghee upon order confirmation.</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-light-beige/50 border border-light-beige flex items-start gap-3">
              <RotateCcw className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-deep-brown text-sm">Hassle-Free Transit Replacement</h4>
                <p className="text-muted-text text-xs mt-0.5">Immediate assistance and re-dispatch for transit damage reported within 24 hours.</p>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-sm text-dark-text/90 leading-relaxed border-t border-light-beige pt-6">
            <section className="space-y-2">
              <h2 className="font-serif font-bold text-xl text-deep-brown">1. Perishable Food Product Nature</h2>
              <p>
                Mohanthal is an artisanal, perishable food confection freshly prepared with pure premium ghee, coarse besan, and steeped spices without artificial chemical preservatives. For safety and food hygiene regulations, <strong>we do not accept returns or exchanges for delivered sweets once the package seal has been opened or when the order has been delivered in sound condition</strong>.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif font-bold text-xl text-deep-brown">2. Transit Damage & Defective Delivery</h2>
              <p>
                We package our sweet boxes with multi-layer food-grade protective cushioning to endure transit across India. However, in the rare instance that your parcel arrives visibly damaged, tampered with, or compromised during courier transit:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-muted-text">
                <li>Please take clear unboxing photographs or a short video showing the outer carton and damaged inner contents.</li>
                <li>Notify our team within <strong>24 hours</strong> of delivery via WhatsApp (<a href={`https://wa.me/${siteConfig.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="text-primary font-semibold underline underline-offset-2">{siteConfig.displayPhone}</a>) or email (<a href={`mailto:${siteConfig.email}`} className="text-primary font-semibold underline underline-offset-2">{siteConfig.email}</a>).</li>
                <li>Upon rapid review, we will immediately process a <strong>free replacement batch dispatch</strong> or issue a <strong>full refund</strong> to your original payment method.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif font-bold text-xl text-deep-brown">3. Order Cancellation Policy</h2>
              <p>
                Because each batch of traditional Mohanthal is freshly slow-roasted to order:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-muted-text">
                <li>Cancellations are accepted within <strong>12 hours</strong> of order booking before kitchen roasting commences.</li>
                <li>Once a batch has been roasted, sliced, packed in airtight trays, or handed over to the courier partner, cancellations cannot be accepted.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif font-bold text-xl text-deep-brown">4. Refund Timeline</h2>
              <p>
                For verified transit claims or timely cancellations, approved refunds are initiated within <strong>2 business days</strong> via original payment method or instant UPI transfer. Bank processing may require 3 to 5 business days to reflect in your account.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="font-serif font-bold text-xl text-deep-brown">5. Customer Care & Assistance</h2>
              <p>
                We value your trust and celebratory moments. For any questions or assistance with your order, please reach our customer support team directly:
              </p>
              <div className="p-4 rounded-2xl bg-cream border border-light-beige space-y-1.5 text-xs sm:text-sm text-deep-brown font-medium mt-3">
                <p>• <strong>WhatsApp / Call:</strong> <a href={`tel:${siteConfig.phone}`} className="text-primary hover:underline">{siteConfig.displayPhone}</a></p>
                <p>• <strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline">{siteConfig.email}</a></p>
                <p>• <strong>Support Hours:</strong> {siteConfig.businessHours}</p>
                <p>• <strong>Workshop Address:</strong> {siteConfig.address.full}</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnPolicy;
