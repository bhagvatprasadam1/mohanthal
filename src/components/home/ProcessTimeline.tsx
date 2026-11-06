import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../common/SectionHeading';
import { processSteps } from '../../data/process';
import { Clock, ArrowRight, Award } from 'lucide-react';
import { Button } from '../common/Button';

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="process-timeline">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ANCESTRAL TECHNIQUE"
          title="How Our Mohanthal Is Made"
          subtitle="Discover the traditional 7-stage Gujarati preparation process that turns simple wholesome ingredients into golden, aromatic perfection."
        />

        {/* Vertical Timeline Wrapper */}
        <div className="relative mt-8 sm:mt-12">
          {/* Continuous Vertical Timeline Spine */}
          {/* Desktop Center Line */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-12 w-0.5 bg-primary/40" />
          
          {/* Mobile Left Line */}
          <div className="md:hidden absolute left-5 top-4 bottom-12 w-0.5 bg-primary/40" />

          {/* Steps List */}
          <div className="space-y-8 sm:space-y-12">
            {processSteps.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div key={step.step} className="relative">
                  {/* Central Timeline Milestone Node (Desktop) */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 w-11 h-11 rounded-full bg-cream border-2 border-primary items-center justify-center font-serif font-bold text-sm text-primary z-20">
                    {step.step}
                  </div>

                  {/* Mobile Node Icon */}
                  <div className="md:hidden absolute left-1.5 top-5 w-8 h-8 rounded-full bg-cream border-2 border-primary flex items-center justify-center font-serif font-bold text-xs text-primary z-20">
                    {step.step}
                  </div>

                  {/* Grid Layout (Desktop Left vs Right, Mobile Pl-14) */}
                  <div className="md:grid md:grid-cols-2 md:gap-14 lg:gap-16 items-center">
                    
                    {/* Left Column content or spacer */}
                    <div className={`${isEven ? 'md:order-2 md:pl-2' : 'md:order-1 md:pr-2'} pl-12 sm:pl-14 md:pl-0`}>
                      <motion.div
                        initial={{ opacity: 0, x: isEven ? 30 : -30, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                        className="bg-white/95 rounded-2xl p-5 sm:p-6 border border-light-beige hover:border-primary transition-colors relative group"
                      >
                        {/* Header: Step pill & duration */}
                        <div className="flex items-center justify-between pb-3 mb-3 border-b border-light-beige/70">
                          <span className="font-jost text-xs uppercase tracking-wider font-bold text-primary">
                            Stage {step.step}
                          </span>
                          <span className="inline-flex items-center gap-1 text-[11px] font-medium text-muted-text bg-light-beige/70 px-2.5 py-0.5 rounded-full">
                            <Clock className="w-3 h-3 text-gold" />
                            {step.duration}
                          </span>
                        </div>

                        {/* Title & Gujarati name */}
                        <h3 className="font-serif text-lg sm:text-xl text-deep-brown font-normal leading-snug">
                          {step.title}
                        </h3>
                        <span className="text-xs text-primary font-medium block mt-0.5 mb-2.5">
                          {step.gujaratiTitle}
                        </span>

                        {/* Summary description */}
                        <p className="text-muted-text text-xs sm:text-sm leading-relaxed mb-3">
                          {step.summary}
                        </p>

                        {/* Craft Secret Highlight */}
                        <div className="pt-2.5 border-t border-light-beige/60 text-[11px] sm:text-xs text-muted-green font-medium flex items-start gap-1.5">
                          <span className="flex-shrink-0">💡</span>
                          <span className="text-dark-text/80">{step.craftSecret}</span>
                        </div>
                      </motion.div>
                    </div>

                    {/* Opposite empty column for desktop balance */}
                    <div className={`${isEven ? 'md:order-1' : 'md:order-2'} hidden md:block`} />

                  </div>
                </div>
              );
            })}
          </div>

          {/* Final Conclusion Milestone */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            className="mt-12 sm:mt-16 relative z-20 max-w-2xl mx-auto"
          >
            <div className="bg-white rounded-3xl p-6 sm:p-8 text-center border-2 border-gold/40">
              <div className="inline-flex items-center gap-2 font-jost text-xs font-bold uppercase tracking-[0.22em] text-primary mb-2">
                <Award className="w-4 h-4 text-primary" />
                <span>Patience Is The Recipe</span>
              </div>
              
              <h4 className="font-serif text-2xl sm:text-3xl text-deep-brown font-normal mb-3">
                Over 8 Hours of Handcrafted Devotion
              </h4>
              
              <p className="text-muted-text text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-6">
                From morning <em className="text-deep-brown">dhrabo</em> aeration to gentle overnight cooling, each small batch honours ancestral Kathiawadi culinary traditions.
              </p>

              <Button
                to="/process"
                variant="outline"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Read Complete Process Guide
              </Button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
