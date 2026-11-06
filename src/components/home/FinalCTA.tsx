import React from 'react';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { Phone, Mail } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { Link } from 'react-router-dom';

export const FinalCTA: React.FC = () => {
  return (
    <section className="pt-6 sm:pt-8 lg:pt-9 pb-8 sm:pb-10 lg:pb-12 bg-primary text-white relative overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-5">
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight text-white leading-tight">
          Experience the Pure Taste of Traditional Gujarati Mohanthal
        </h2>

        <p className="text-white/90 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Whether for intimate family tea-time, festive celebrations, or bespoke corporate hampers, our team is ready to prepare your fresh small-batch order.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <WhatsAppButton
            context="general"
            size="lg"
            variant="white"
            className="w-full sm:w-auto text-base sm:text-lg"
          >
            Enquire on WhatsApp
          </WhatsAppButton>

          <a
            href={`tel:${siteConfig.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-deep-brown hover:bg-deep-brown-dark text-cream border border-gold/40 text-base font-medium transition-colors active:scale-95"
            aria-label="Call our sweet master"
          >
            <Phone className="w-4 h-4 text-gold" />
            <span>Call: {siteConfig.displayPhone}</span>
          </a>
        </div>

        <div className="pt-6 flex items-center justify-center gap-6 text-xs text-white/80">
          <Link to="/contact" className="hover:underline flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5" />
            <span>Send Written Inquiry</span>
          </Link>
          <span>•</span>
          <span>Pan India Fresh Dispatch</span>
          <span>•</span>
          <span>Small Batch Made to Order</span>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
