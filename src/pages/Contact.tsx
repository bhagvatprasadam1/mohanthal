import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { seoData } from '../data/seo';
import { getLocalBusinessSchema, getBreadcrumbSchema } from '../lib/seo';
import { siteConfig } from '../data/siteConfig';
import { InquiryForm } from '../components/forms/InquiryForm';
import { Phone, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { WhatsAppIcon } from '../components/common/WhatsAppIcon';
import { Link } from 'react-router-dom';

export const Contact: React.FC = () => {
  const schemas = [
    getLocalBusinessSchema(),
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Contact', path: '/contact' },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.contact.title}
        description={seoData.contact.description}
        keywords={seoData.contact.keywords}
        canonicalPath={seoData.contact.canonicalPath}
        ogImage={seoData.contact.ogImage}
        schema={schemas}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-dark-text font-medium">Contact</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="font-jost text-primary font-bold text-xs uppercase tracking-[0.22em] mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
            REACH OUT TO US
            <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-deep-brown font-normal tracking-tight leading-tight">
            Let's Make Your Celebration Sweeter
          </h1>
          <p className="mt-3 sm:mt-4 text-muted-text text-base sm:text-lg leading-relaxed">
            Have questions about an upcoming family event, need festive gift boxes, or wish to order traditional Mohanthal? Connect directly with our team.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-light-beige space-y-5 sm:space-y-6">
              <h2 className="font-serif font-normal text-xl sm:text-2xl text-deep-brown border-b border-light-beige pb-3">
                Direct Communication
              </h2>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 text-[#25D366] flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-6 h-6 text-[#25D366]" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-muted-text block">Instant Chat</span>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-serif font-bold text-lg text-deep-brown hover:text-[#25D366] transition-colors"
                  >
                    WhatsApp Support
                  </a>
                  <p className="text-xs text-muted-text mt-0.5">Quickest response for batch schedules & custom orders.</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-muted-text block">Phone Call</span>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="font-serif font-bold text-lg text-deep-brown hover:text-primary transition-colors"
                  >
                    {siteConfig.displayPhone}
                  </a>
                  <p className="text-xs text-muted-text mt-0.5">{siteConfig.businessHours}</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gold/10 text-gold flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-muted-text block">Written Inquiries</span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-serif font-bold text-lg text-deep-brown hover:text-primary transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-xs text-muted-text mt-0.5">Corporate & wedding invitation proposals.</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-light-beige text-deep-brown flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-muted-text block">Artisan Workshop</span>
                  <span className="font-serif font-bold text-base text-deep-brown block leading-snug">
                    {siteConfig.address.full}
                  </span>
                  <p className="text-xs text-muted-text mt-0.5">Traditional small batch workshop with Pan India dispatch.</p>
                </div>
              </div>
            </div>

            {/* Satisfaction Guarantee card */}
            <div className="bg-light-beige/60 rounded-3xl p-6 border border-gold/30 flex items-center gap-4">
              <ShieldCheck className="w-8 h-8 text-primary flex-shrink-0" />
              <div className="text-xs text-deep-brown">
                <span className="font-bold block font-serif text-sm">Fresh Batch Promise</span>
                <span>Every box is made to order with 100% pure premium ghee. No chemical preservatives or stale inventory.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry Form */}
          <div className="lg:col-span-7">
            <InquiryForm />
          </div>

        </div>
      </div>
    </div>
  );
};
