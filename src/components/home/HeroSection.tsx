import React from "react";
import { motion } from "framer-motion";
import { Star, Truck, ShieldCheck } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-cream pt-3 sm:pt-5 lg:pt-6 pb-6 sm:pb-8 lg:pb-9 flex items-center">
      <div className="max-w-7xl xl:max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 xl:gap-10 items-center">
          {/* Left Column: Focused SEO Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-3 sm:space-y-4 text-center lg:text-left flex flex-col justify-center"
          >
            {/* Elegant Text Kicker */}
            <div className="flex items-center justify-center lg:justify-start gap-2 font-jost text-xs sm:text-sm font-bold tracking-[0.22em] text-gold-dark uppercase">
              <span className="w-6 h-px bg-gold/60" />
              <span>Heritage Recipe • Pure Tradition</span>
            </div>

            {/* Primary SEO Heading */}
            <div className="space-y-1">
              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl text-deep-brown font-normal tracking-tight leading-[1.15]">
                Traditional{" "}
                <span className="block text-primary italic font-serif">
                  Mohanthal
                </span>
              </h1>
              <p className="font-serif italic text-gold-dark text-xs sm:text-sm tracking-wide">
                100% Pure Premium Ghee • Authentic Gujarati Sweet
              </p>
            </div>

            {/* High-Impact SEO Description */}
            <p className="text-muted-text text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0">
              Melt in mouth{" "}
              <strong className="text-deep-brown font-semibold">
                "Dhrabo"
              </strong>{" "}
              coarse grain Mohanthal, slow roasted in pure premium ghee with
              stone ground besan, steeped Kashmiri kesar, cardamom, and sliced
              almonds & pistachios.
            </p>

            {/* Clean Keyword Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-2 text-xs sm:text-sm font-medium text-deep-brown pt-0.5">
              <span className="inline-flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-primary" />
                100% Premium Ghee
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-gold" />
                Grainy "Dhrabo" Texture
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Kashmiri Kesar & Pista
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600" />
                Zero Preservatives
              </span>
            </div>

            {/* Reassurance & Social Proof */}
            <div className="pt-1 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1 text-xs text-muted-text">
              <div className="flex items-center gap-1">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-deep-brown">4.9/5 Rating</span>
                <span>(1,200+ Reviews)</span>
              </div>
              <span className="hidden sm:inline text-gold/60">•</span>
              <span className="flex items-center gap-1">
                <Truck className="w-3.5 h-3.5 text-primary" />
                Pan India Express Delivery
              </span>
            </div>
          </motion.div>

          {/* Right Column: Magnified, Full-Scale Showcase Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 flex items-center justify-center relative"
          >
            <div className="w-full flex items-center justify-center relative group">
              <img
                src="/images/hero-traditional-box.webp"
                alt="Traditional Gujarati Mohanthal sweet served on an antique brass thali with the signature gift box, garnished with pistachios and almonds"
                className="w-full h-auto max-w-[300px] sm:max-w-md lg:max-w-lg xl:max-w-[590px] object-contain transition-transform duration-700 group-hover:scale-[1.02] select-none relative z-10"
                loading="eager"
                fetchPriority="high"
                width="1024"
                height="910"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
