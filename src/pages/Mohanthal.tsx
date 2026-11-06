import React, { useState, useRef } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { seoData } from '../data/seo';
import { mohanthalProduct } from '../data/products';
import { getProductSchema, getBreadcrumbSchema } from '../lib/seo';
import { WhatsAppButton } from '../components/common/WhatsAppButton';
import { ShieldCheck, Calendar, Box, Phone, CheckCircle2, ExternalLink, Play, Pause, Volume2, VolumeX, Tag } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import { Link } from 'react-router-dom';

export const Mohanthal: React.FC = () => {
  const [selectedWeight, setSelectedWeight] = useState(
    mohanthalProduct.weights.find((w) => w.popular)?.weight || '500gm'
  );
  const [activeImage, setActiveImage] = useState(mohanthalProduct.imageUrl);

  // Video controls
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

  const activeWeightObj =
    mohanthalProduct.weights.find((w) => w.weight === selectedWeight) ||
    mohanthalProduct.weights[0];

  const schemas = [
    getProductSchema(),
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Mohanthal Product', path: '/mohanthal' },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title="Mohanthal | मोहनथाल | Pure Gujarati Sweet | Festival & Diwali Sweet"
        description="Authentic Mohanthal by Bhagvat Prasadam. Traditional Gujarati sweet made with pure premium ghee, premium besan, and rich dry fruits. Order 250gm, 500gm, or 1kg online."
        keywords="Mohanthal, मोहनथाल, pure Gujarati sweet, traditional Gujarati sweet, festival sweets, Diwali sweet, Bhagvat Prasadam Mohanthal, pure premium ghee sweet"
        canonicalPath={seoData.mohanthal.canonicalPath}
        ogImage={mohanthalProduct.imageUrl}
        schema={schemas}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-dark-text font-medium">Mohanthal Product</span>
        </nav>

        {/* Product Details Header */}
        <div className="bg-white rounded-3xl border border-light-beige overflow-hidden p-6 sm:p-10 lg:p-12 mb-8 sm:mb-10 lg:mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Visual Column with Gallery */}
            <div className="lg:col-span-6 space-y-4">
              <div className="rounded-2xl overflow-hidden border border-light-beige relative bg-cream">
                <img
                  src={activeImage}
                  alt="Mohanthal pure Gujarati sweet by Bhagvat Prasadam"
                  className="w-full h-auto object-cover aspect-[4/3] transform hover:scale-105 transition-transform duration-500"
                  loading="eager"
                  fetchPriority="high"
                  width="600"
                  height="450"
                />
              </div>

              {/* Thumbnails row */}
              <div className="grid grid-cols-6 gap-2">
                {mohanthalProduct.galleryImages.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImage(img)}
                    className={`rounded-lg overflow-hidden border-2 transition-all aspect-square ${
                      activeImage === img ? 'border-primary ring-1 ring-primary' : 'border-light-beige opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt={`Mohanthal gallery thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Meta, Pricing & Inquiry CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-xs font-bold tracking-widest uppercase text-gold bg-deep-brown px-2.5 py-1 rounded">
                    {mohanthalProduct.hindiTitle} • {mohanthalProduct.regionalName}
                  </span>
                  <span className="text-xs text-primary font-semibold flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" />
                    By {mohanthalProduct.vendor}
                  </span>
                </div>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-deep-brown font-bold tracking-tight">
                  {mohanthalProduct.title}
                </h1>
                <p className="mt-3 text-muted-text text-base leading-relaxed">
                  {mohanthalProduct.description}
                </p>
              </div>

              {/* Texture Highlight */}
              <div className="p-4 rounded-xl bg-light-beige/50 border border-gold/30 text-xs sm:text-sm text-deep-brown">
                <strong className="block font-serif text-primary text-sm mb-1">
                  Signature Danedaar Texture:
                </strong>
                <span>{mohanthalProduct.textureDescription}</span>
              </div>

              {/* Weight Packaging & Pricing Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-deep-brown mb-2.5">
                  Choose Pack Size & Price:
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {mohanthalProduct.weights.map((option) => (
                    <button
                      key={option.weight}
                      type="button"
                      onClick={() => setSelectedWeight(option.weight)}
                      className={`p-3.5 rounded-xl border text-left transition-all ${
                        selectedWeight === option.weight
                          ? 'border-primary bg-primary/5 ring-1 ring-primary'
                          : 'border-light-beige hover:border-primary/60 bg-cream/30'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-serif font-bold text-lg text-deep-brown">
                          {option.weight}
                        </span>
                        {option.popular && (
                          <span className="text-[9px] bg-gold text-deep-brown px-1.5 py-0.5 rounded font-bold uppercase">
                            Most Loved
                          </span>
                        )}
                      </div>
                      <div className="mt-1 flex items-baseline gap-1.5">
                        <span className="font-bold text-primary text-base">
                          {option.price}
                        </span>
                        <span className="text-xs text-muted-text line-through">
                          {option.originalPrice}
                        </span>
                      </div>
                      <span className="block text-[10px] text-muted-green font-semibold">
                        {option.discount}
                      </span>
                    </button>
                  ))}
                </div>
                <div className="mt-2.5 flex items-center justify-between text-xs text-primary font-medium">
                  <span>Ideal for: {activeWeightObj.idealFor}</span>
                  <span>Serves: {activeWeightObj.serving}</span>
                </div>
              </div>

              {/* Conversion Buttons with Product Link */}
              <div className="space-y-3 pt-4 border-t border-light-beige">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <WhatsAppButton
                    context="product_weight"
                    weight={selectedWeight}
                    size="lg"
                    className="justify-center text-sm sm:text-base font-semibold"
                  >
                    Order {selectedWeight} on WhatsApp
                  </WhatsAppButton>

                  <a
                    href={mohanthalProduct.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-hover text-white text-sm sm:text-base font-semibold py-3.5 px-6 rounded-full transition-colors active:scale-95 text-center"
                  >
                    <span>Order on Bhagvat Prasadam</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex justify-center pt-1">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="inline-flex items-center gap-1.5 text-xs text-muted-text hover:text-primary transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Or call us directly at {siteConfig.displayPhone}</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Embedded Video Showcase Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-light-beige mb-8 sm:mb-10 lg:mb-12">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-primary block mb-2">
              REAL ARTISANAL PREPARATION
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl text-deep-brown font-bold">
              Watch Bhagvat Prasadam Mohanthal in Motion
            </h2>
            <p className="text-muted-text text-sm sm:text-base mt-2">
              See the rich golden texture, delicate garnish of almonds and pistachios, and tender cut pieces crafted with pure ghee.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative rounded-2xl overflow-hidden border-2 border-gold/40 bg-deep-brown aspect-[16/9] group">
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

            {/* Center Play Button Overlay */}
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

            {/* Mute button */}
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
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-light-beige hover:border-primary transition-colors space-y-2.5 sm:space-y-3">
            <div className="w-10 h-10 rounded-xl bg-light-beige flex items-center justify-center text-primary mb-2">
              <Calendar className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown">
              Shelf Life & Freshness
            </h3>
            <p className="text-muted-text text-xs sm:text-sm leading-relaxed">
              {mohanthalProduct.shelfLife}. Made with pure premium ghee and traditional single-string sugar chasni, giving it natural longevity.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-light-beige hover:border-primary transition-colors space-y-2.5 sm:space-y-3">
            <div className="w-10 h-10 rounded-xl bg-light-beige flex items-center justify-center text-primary mb-2">
              <Box className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown">
              Storage Instructions
            </h3>
            <p className="text-muted-text text-xs sm:text-sm leading-relaxed">
              {mohanthalProduct.storage} Room temperature storage keeps the crumb velvety and delicate.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 sm:p-7 border border-light-beige hover:border-primary transition-colors space-y-2.5 sm:space-y-3 sm:col-span-2 lg:col-span-1">
            <div className="w-10 h-10 rounded-xl bg-light-beige flex items-center justify-center text-primary mb-2">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif font-bold text-lg sm:text-xl text-deep-brown">
              Sacred Satvik Preparation
            </h3>
            <p className="text-muted-text text-xs sm:text-sm leading-relaxed">
              Crafted in an authentic devotional kitchen adhering to satvik purity standards. Perfect for temple bhog, prasad, and family celebrations.
            </p>
          </div>
        </div>

        {/* Official Store Outbound Action Bar */}
        <div className="bg-deep-brown text-cream rounded-3xl p-8 sm:p-10 border border-gold/40 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-1">
              OFFICIAL STORE AVAILABILITY
            </span>
            <h3 className="font-serif font-bold text-2xl text-cream">
              Order directly on Bhagvat Prasadam Online
            </h3>
            <p className="text-cream/80 text-sm mt-1">
              Available in 250gm, 500gm, and 1kg packs with pan India delivery.
            </p>
          </div>
          <a
            href={mohanthalProduct.productUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 rounded-full bg-gold hover:bg-gold-light text-deep-brown font-bold text-sm flex items-center gap-2 flex-shrink-0"
          >
            <span>Visit Bhagvat Prasadam Store</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
