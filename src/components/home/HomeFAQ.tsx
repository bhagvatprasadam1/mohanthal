import React, { useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { faqsData, FAQItem } from '../../data/faqs';
import { ChevronDown, ArrowRight, HelpCircle } from 'lucide-react';
import { Button } from '../common/Button';

export const HomeFAQ: React.FC = () => {
  const homeFaqs = faqsData.filter((f) => f.featuredOnHome);
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const midIndex = Math.ceil(homeFaqs.length / 2);
  const col1 = homeFaqs.slice(0, midIndex);
  const col2 = homeFaqs.slice(midIndex);

  const renderFaqCard = (faq: FAQItem) => {
    const isOpen = openId === faq.id;
    return (
      <div
        key={faq.id}
        className={`bg-white rounded-2xl border transition-colors duration-200 overflow-hidden ${
          isOpen
            ? 'border-primary ring-1 ring-primary/30'
            : 'border-light-beige hover:border-primary/50'
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
              isOpen ? 'transform rotate-180' : ''
            }`}
          />
        </button>

        {isOpen && (
          <div className="px-5 sm:px-6 pb-5 pt-1 text-muted-text text-sm sm:text-[15px] leading-relaxed border-t border-light-beige/50">
            <p>{faq.answer}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="home-faq">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CLEAR ANSWERS"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our authentic Gujarati Mohanthal, shelf life, ingredients, and delivery."
        />

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-6 items-start">
            <div className="flex flex-col space-y-4">
              {col1.map(renderFaqCard)}
            </div>
            <div className="flex flex-col space-y-4">
              {col2.map(renderFaqCard)}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button
            to="/faq"
            variant="outline"
            icon={<ArrowRight className="w-4 h-4" />}
            iconPosition="right"
          >
            View All Frequently Asked Questions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;
