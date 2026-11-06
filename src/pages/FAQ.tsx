import React, { useState } from "react";
import { SEOHead } from "../components/seo/SEOHead";
import { seoData } from "../data/seo";
import { getFAQPageSchema, getBreadcrumbSchema } from "../lib/seo";
import { faqsData, FAQItem } from "../data/faqs";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import { Button } from "../components/common/Button";
import { Link } from "react-router-dom";

export const FAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const categories = [
    "All",
    "Product",
    "Ingredients",
    "Preparation",
    "Storage",
    "Delivery",
    "Gifting",
    "Bulk Orders",
  ];

  const filteredFaqs =
    activeCategory === "All"
      ? faqsData
      : faqsData.filter((item) => item.category === activeCategory);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const midIndex = Math.ceil(filteredFaqs.length / 2);
  const col1 = filteredFaqs.slice(0, midIndex);
  const col2 = filteredFaqs.slice(midIndex);

  const schemas = [
    getFAQPageSchema(),
    getBreadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "FAQ", path: "/faq" },
    ]),
  ];

  const renderFaqCard = (faq: FAQItem) => {
    const isOpen = openId === faq.id;
    return (
      <div
        key={faq.id}
        className={`bg-white rounded-2xl border transition-colors duration-200 overflow-hidden ${
          isOpen
            ? "border-primary ring-1 ring-primary/30"
            : "border-light-beige hover:border-primary/50"
        }`}
      >
        <button
          type="button"
          onClick={() => toggleAccordion(faq.id)}
          aria-expanded={isOpen}
          className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-start justify-between gap-4 font-serif text-base sm:text-lg text-deep-brown hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20"
        >
          <span className="flex items-start gap-3">
            <HelpCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
            <span className="leading-snug">{faq.question}</span>
          </span>
          <ChevronDown
            className={`w-5 h-5 text-primary flex-shrink-0 mt-0.5 transition-transform duration-300 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          />
        </button>

        {isOpen && (
          <div className="px-5 sm:px-6 pb-5 pt-1 text-muted-text text-sm sm:text-[15px] leading-relaxed border-t border-light-beige/50">
            <p>{faq.answer}</p>
            <span className="inline-block mt-3 text-[11px] font-semibold text-primary/80 uppercase tracking-wider">
              Category: {faq.category}
            </span>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.faq.title}
        description={seoData.faq.description}
        keywords={seoData.faq.keywords}
        canonicalPath={seoData.faq.canonicalPath}
        ogImage={seoData.faq.ogImage}
        schema={schemas}
      />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav
          className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-primary">
            Home
          </Link>
          <span>/</span>
          <span className="text-dark-text font-medium">
            Frequently Asked Questions
          </span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <span className="font-jost text-primary font-bold text-xs uppercase tracking-[0.22em] mb-3 flex items-center justify-center gap-2">
            <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
            HELP & KNOWLEDGE BASE
            <span className="inline-block w-4 h-0.5 bg-gold/70"></span>
          </span>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-deep-brown font-normal tracking-tight leading-tight">
            Frequently Asked Questions
          </h1>
          <p className="mt-3 sm:mt-4 text-muted-text text-base sm:text-lg leading-relaxed">
            Find clear, truthful answers regarding our traditional ingredients,
            shelf life, room temperature storage, pan India delivery, and
            festival ordering.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-white"
                  : "bg-white text-dark-text hover:bg-light-beige border border-light-beige"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Accordion 2-Column List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 lg:gap-6 items-start mb-8 sm:mb-10 lg:mb-12">
          <div className="flex flex-col space-y-4">
            {col1.map(renderFaqCard)}
          </div>
          <div className="flex flex-col space-y-4">
            {col2.map(renderFaqCard)}
          </div>
        </div>

        {/* Still Have Questions CTA */}
        <div className="bg-light-beige/60 rounded-3xl p-6 sm:p-8 border border-gold/40 text-center space-y-4 max-w-3xl mx-auto">
          <h3 className="font-serif text-xl sm:text-2xl font-normal text-deep-brown">
            Still Have Questions?
          </h3>
          <p className="text-muted-text text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Our team is always delighted to assist you with custom orders,
            dietary queries, or delivery schedules.
          </p>
          <div className="pt-2">
            <Button
              to="/contact"
              variant="primary"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
            >
              Contact Our Sweet Masters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
