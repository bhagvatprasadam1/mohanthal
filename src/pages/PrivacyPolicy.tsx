import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { seoData } from '../data/seo';
import { getBreadcrumbSchema } from '../lib/seo';
import { Link } from 'react-router-dom';

export const PrivacyPolicy: React.FC = () => {
  const schemas = [
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Privacy Policy', path: '/privacy-policy' },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.privacyPolicy.title}
        description={seoData.privacyPolicy.description}
        keywords={seoData.privacyPolicy.keywords}
        canonicalPath={seoData.privacyPolicy.canonicalPath}
        ogImage={seoData.privacyPolicy.ogImage}
        schema={schemas}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-dark-text font-medium">Privacy Policy</span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-light-beige space-y-6 text-sm text-dark-text/90 leading-relaxed">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-2">
              DATA TRANSPARENCY
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl text-deep-brown font-bold">
              Privacy Policy
            </h1>
            <p className="text-muted-text text-xs sm:text-sm mt-1">
              Last updated: October 2026
            </p>
          </div>

          <p>
            At <strong>Mohanthal</strong>, we deeply respect your personal privacy. Because our website operates strictly as an informational and inquiry platform without automated eCommerce checkout, user registration, or database profiling, our data practices are simple and minimal.
          </p>

          <section className="space-y-2 pt-2">
            <h2 className="font-serif font-bold text-xl text-deep-brown">1. Information We Collect</h2>
            <p>
              When you submit an inquiry form or message us via WhatsApp or phone, you voluntarily share details such as your name, phone number, email address, city, and gifting requirements. We utilize this information exclusively to respond to your specific request and coordinate dispatch.
            </p>
          </section>

          <section className="space-y-2 pt-2">
            <h2 className="font-serif font-bold text-xl text-deep-brown">2. Zero Sale or Rental of Data</h2>
            <p>
              We do not sell, rent, trade, or distribute your phone numbers, email addresses, or inquiry communications to third-party advertisers or data brokers under any circumstances.
            </p>
          </section>

          <section className="space-y-2 pt-2">
            <h2 className="font-serif font-bold text-xl text-deep-brown">3. Communication via WhatsApp</h2>
            <p>
              By clicking our WhatsApp links or submitting an inquiry, conversations are conducted on WhatsApp, subject to WhatsApp’s standard end-to-end encryption protocols and terms of service.
            </p>
          </section>

          <section className="space-y-2 pt-2">
            <h2 className="font-serif font-bold text-xl text-deep-brown">4. Contacting Us</h2>
            <p>
              For any questions regarding your personal details or communications, you may reach out to us at <em>hello@mohanthal.in</em>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
