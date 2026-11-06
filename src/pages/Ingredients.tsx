import React from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { seoData } from '../data/seo';
import { getBreadcrumbSchema } from '../lib/seo';
import { ingredientsData } from '../data/ingredients';
import { SectionHeading } from '../components/common/SectionHeading';
import { Button } from '../components/common/Button';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Ingredients: React.FC = () => {
  const schemas = [
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Ingredients', path: '/ingredients' },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.ingredients.title}
        description={seoData.ingredients.description}
        keywords={seoData.ingredients.keywords}
        canonicalPath={seoData.ingredients.canonicalPath}
        ogImage={seoData.ingredients.ogImage}
        schema={schemas}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-dark-text font-medium">Ingredients</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 inline-block">
            TRANSPARENT SOURCING
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-deep-brown font-bold tracking-tight leading-tight">
            What Is Mohanthal Made Of?
          </h1>
          <p className="mt-4 text-muted-text text-base sm:text-lg leading-relaxed">
            Traditional Gujarati Mohanthal is primarily prepared using pure besan, premium ghee, and sugar, with ingredients such as cardamom, Kashmiri saffron, and dry fruits to enhance its aroma and richness.
          </p>
        </div>

        {/* Banner with Ingredients Flat Lay */}
        <div className="rounded-3xl overflow-hidden border border-light-beige mb-8 sm:mb-10 lg:mb-12 bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 p-8 sm:p-12 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                THE SEVEN ESSENTIALS
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-deep-brown font-bold leading-tight">
                Honoring the Simplicity of Natural Ingredients
              </h2>
              <p className="text-muted-text text-sm sm:text-base leading-relaxed">
                Traditional Kathiawadi confectioners never used industrial stabilizers, milk powder shortcuts, or artificial yellow food coloring. The golden hue comes purely from golden slow-roasted besan and crimson strands of steeped Kashmiri saffron.
              </p>
              <div className="pt-2 flex flex-col gap-2 text-xs text-deep-brown font-medium">
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-muted-green" />
                  100% Clarified Pure Premium Ghee
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-muted-green" />
                  Stone-Ground Coarse Besan
                </span>
                <span className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-muted-green" />
                  Authentic Kashmiri Mogra Saffron
                </span>
              </div>
            </div>
            <div className="lg:col-span-7">
              <img
                src="/images/ingredients-mohanthal.jpg"
                alt="Flat lay showing pure premium ghee, coarse besan, saffron, cardamom, almonds, and pistachios"
                className="w-full h-auto object-cover max-h-[460px]"
              />
            </div>
          </div>
        </div>

        {/* In-depth Breakdown of Each Ingredient */}
        <div className="space-y-8 mb-16">
          <SectionHeading
            eyebrow="DETAILED INGREDIENT PROFILES"
            title="Every Ingredient Has a Sacred Role"
            subtitle="Understand how each raw component shapes the aroma, crumb, and digestive ease of our sweet."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {ingredientsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-light-beige hover:border-primary transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-gold">
                      {item.category}
                    </span>
                    <span className="text-xs font-serif italic text-primary">
                      {item.gujaratiName}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-deep-brown mb-3">
                    {item.name}
                  </h3>
                  <p className="text-muted-text text-sm sm:text-base leading-relaxed mb-4">
                    {item.detailedRole}
                  </p>
                </div>

                <div className="pt-4 border-t border-light-beige text-xs text-muted-green font-medium flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span><strong>Sourcing:</strong> {item.sourcing}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Next Stage: Process */}
        <div className="bg-light-beige/60 rounded-3xl p-8 sm:p-12 border border-gold/40 text-center space-y-5">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-deep-brown">
            Ready to See How We Combine These Ingredients?
          </h3>
          <p className="text-muted-text text-sm sm:text-base max-w-xl mx-auto">
            Explore the 7-step Gujarati Dhrabo making method that gives our sweet its signature grainy crumb.
          </p>
          <div className="pt-2">
            <Button
              to="/process"
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Learn How Mohanthal Is Made
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};
