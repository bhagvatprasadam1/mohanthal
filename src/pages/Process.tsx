import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { seoData } from '../data/seo';
import { getBreadcrumbSchema } from '../lib/seo';
import { processSteps } from '../data/process';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { ArrowRight, Clock, Flame, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Process: React.FC = () => {
  const schemas = [
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Our Process', path: '/process' },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.process.title}
        description={seoData.process.description}
        keywords={seoData.process.keywords}
        canonicalPath={seoData.process.canonicalPath}
        ogImage={seoData.process.ogImage}
        schema={schemas}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-dark-text font-medium">Our Process</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="font-jost text-primary font-bold text-xs uppercase tracking-[0.22em] mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
            TIME-HONOURED TECHNIQUE
            <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-deep-brown font-normal tracking-tight leading-tight">
            The Traditional Mohanthal Making Process
          </h1>
          <p className="mt-3 sm:mt-4 text-muted-text text-base sm:text-lg leading-relaxed">
            Authentic Mohanthal cannot be rushed. It demands hours of patient hand-aeration, gentle kadai roasting, single-string sugar syrup precision, and slow overnight crystallization.
          </p>
        </div>

        {/* The Dhrabo Technique Focus */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-light-beige mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              <span className="font-jost text-gold-dark font-bold text-xs uppercase tracking-[0.22em] flex items-center gap-2">
                <span className="inline-block w-3 h-0.5 bg-gold/70"></span>
                THE SECRET OF THE CRUMB
              </span>
              <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl text-deep-brown font-normal leading-tight">
                What is the "Dhrabo" Method?
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                In colloquial Gujarati cooking, <em>ધાબો આપવો (Dhrabo aapvo)</em> refers to the tactile art of infusing coarse besan flour with warm premium ghee and warm milk before any cooking begins.
              </p>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                The confectioner vigorously rubs the mixture between their palms for several minutes until tiny, moist globules form. After resting, this coarse crumble is sifted through a traditional wire sieve. When roasted, each globule toasts on its outside while keeping its core moist, giving Mohanthal its unmistakable <strong>Danedaar (grainy)</strong> texture that never turns pasty or gummy.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border-2 border-gold/50">
                <img
                  src="/images/process-craft.jpg"
                  alt="Traditional Mohanthal preparation in heavy brass kadai with slow roasting premium ghee and besan"
                  className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="600"
                  height="450"
                />
              </div>
            </div>
          </div>
        </div>

        {/* The 7 Steps Walkthrough */}
        <div className="space-y-6 sm:space-y-8 mb-8 sm:mb-10 lg:mb-12">
          <SectionHeading
            eyebrow="STEP-BY-STEP CHRONOLOGY"
            title="Seven Stages to Perfection"
            subtitle="Follow the step-by-step artisanal journey from raw ingredients to diamond-cut mithai."
          />

          <div className="space-y-4 sm:space-y-5">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-5 sm:p-7 border border-light-beige hover:border-primary transition-colors flex flex-col md:flex-row items-start gap-5 sm:gap-6"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-cream border border-gold/30 flex items-center justify-center flex-shrink-0">
                  <span className="font-serif font-bold text-xl sm:text-2xl text-primary">
                    {step.step}
                  </span>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-serif font-normal text-lg sm:text-xl text-deep-brown">
                      {step.title}
                    </h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-serif text-primary bg-primary/10 px-2.5 py-0.5 rounded-full font-medium">
                        {step.gujaratiTitle}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs text-muted-text bg-light-beige px-2.5 py-0.5 rounded-full">
                        <Clock className="w-3 h-3 text-gold" />
                        {step.duration}
                      </span>
                    </div>
                  </div>

                  <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                    {step.details}
                  </p>

                  <div className="pt-2 text-xs text-muted-green font-medium flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary flex-shrink-0" />
                    <span><strong>Master Artisan Note:</strong> {step.craftSecret}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Step CTA */}
        <div className="bg-deep-brown text-cream rounded-3xl p-6 sm:p-10 border border-gold/40 text-center space-y-4 sm:space-y-5">
          <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-normal text-cream">
            Taste the Result of Pure Devotion
          </h3>
          <p className="text-cream/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Experience our fresh batch of traditional Gujarati Mohanthal, delivered directly from our kitchen to your doorstep.
          </p>
          <div className="pt-2">
            <Button
              to="/mohanthal"
              variant="gold"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Order Our Mohanthal
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
