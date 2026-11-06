import React, { useRef, useState } from 'react';
import { SectionHeading } from '../common/SectionHeading';
import { mohanthalProduct } from '../../data/products';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { Play, Pause, ExternalLink, Volume2, VolumeX, ShieldCheck, Award } from 'lucide-react';

export const ProductVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-6 sm:py-8 lg:py-9 bg-cream" id="mohanthal-video">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="TRADITION IN MOTION"
          title="Watch Our Mohanthal Craftsmanship"
          subtitle="Experience the pure golden texture, hand-garnished dry fruits, and traditional Gujarati preparation in authentic video."
        />

        <div className="bg-white rounded-3xl border border-light-beige overflow-hidden p-6 sm:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Video Player Box */}
            <div className="lg:col-span-7 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold/40 bg-deep-brown aspect-[16/9] group">
                <video
                  ref={videoRef}
                  src={mohanthalProduct.videoUrl}
                  poster="/images/bhagvat/mohan_thal_main.webp"
                  playsInline
                  loop
                  muted={isMuted}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Center Play/Pause Overlay Trigger */}
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Pause video' : 'Play video'}
                  className={`absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 hover:bg-primary text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 active:scale-95 ${
                    isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                  }`}
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 fill-white" />
                  ) : (
                    <Play className="w-8 h-8 fill-white ml-1" />
                  )}
                </button>

                {/* Bottom Bar Controls Overlay */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    className="p-2 rounded-full bg-deep-brown/80 text-white hover:bg-deep-brown backdrop-blur-sm transition-colors text-xs"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Badge Top Left */}
                <div className="absolute top-3 left-3 bg-deep-brown/85 backdrop-blur-sm text-gold px-3 py-1.5 rounded-lg text-xs font-serif font-bold border border-gold/30 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-gold" />
                  <span>Bhagvat Prasadam Authentic</span>
                </div>
              </div>
            </div>

            {/* Right: Video Explanations & Direct Links */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-1">
                  100% PURE & SACRED
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-deep-brown font-bold leading-tight">
                  Handcrafted with Purity, Heritage & Devotion
                </h3>
                <p className="mt-3 text-muted-text text-sm sm:text-base leading-relaxed">
                  Notice how each cut piece maintains its rich, tender form without crumbling excessively. The glossy golden sheen is the signature of slow-roasted pure premium ghee, delicately infused with Kashmiri saffron and topped with sliced badam and pista.
                </p>
              </div>

              {/* Trust Features */}
              <div className="space-y-2.5 text-xs sm:text-sm text-dark-text border-t border-b border-light-beige py-4">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-muted-green flex-shrink-0" />
                  <span>Pure Premium Ghee & Gram Flour (Besan)</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-muted-green flex-shrink-0" />
                  <span>Authentic Bhagvat Prasadam Traditional Recipe</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-muted-green flex-shrink-0" />
                  <span>Ideal for Diwali, Puja Offering & Celebrations</span>
                </div>
              </div>

              {/* Direct Store & Inquiry Actions */}
              <div className="space-y-3 pt-2">
                <a
                  href={mohanthalProduct.productUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white font-semibold py-3.5 px-6 rounded-full transition-colors text-sm sm:text-base active:scale-98"
                >
                  <span>Order on Bhagvat Prasadam Store</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <WhatsAppButton
                  context="product"
                  size="md"
                  className="w-full justify-center text-sm py-3"
                >
                  Enquire via WhatsApp
                </WhatsAppButton>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductVideoSection;
