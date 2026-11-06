import React, { useState } from 'react';
import { SEOHead } from '../components/seo/SEOHead';
import { seoData } from '../data/seo';
import { getBreadcrumbSchema } from '../lib/seo';
import { galleryData, GalleryItem } from '../data/gallery';
import { SectionHeading } from '../components/common/SectionHeading';
import { X, ZoomIn } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Product', 'Ingredients', 'Process', 'Gifting'];

  const filteredItems =
    activeCategory === 'All'
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  const schemas = [
    getBreadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Gallery', path: '/gallery' },
    ]),
  ];

  return (
    <div className="bg-cream py-8 sm:py-10 lg:py-12">
      <SEOHead
        title={seoData.gallery.title}
        description={seoData.gallery.description}
        keywords={seoData.gallery.keywords}
        canonicalPath={seoData.gallery.canonicalPath}
        ogImage={seoData.gallery.ogImage}
        schema={schemas}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs text-muted-text mb-6 sm:mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-dark-text font-medium">Gallery</span>
        </nav>

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-widest mb-3 inline-block">
            VISUAL STORYTELLING
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-deep-brown font-bold tracking-tight leading-tight">
            Artisanal Photo Gallery
          </h1>
          <p className="mt-4 text-muted-text text-base sm:text-lg leading-relaxed">
            Feast your eyes on our authentic Gujarati Mohanthal, from pure raw ingredients and slow roasting to festive keepsake gift boxes.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 sm:mb-10 lg:mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? 'bg-primary text-white'
                  : 'bg-white text-dark-text hover:bg-light-beige border border-light-beige'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Responsive Grid: 4 cols desktop, 3 cols tablet, 2 cols mobile */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden border border-light-beige bg-white hover:border-primary cursor-pointer transition-colors"
            >
              <div className="aspect-square overflow-hidden bg-cream">
                <img
                  src={item.imageUrl}
                  alt={item.altText}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-deep-brown/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold tracking-wider text-gold mb-1">
                  {item.category}
                </span>
                <h4 className="font-serif font-bold text-sm leading-snug line-clamp-2">
                  {item.title}
                </h4>
                <div className="mt-2 flex items-center gap-1 text-[11px] text-white/80">
                  <ZoomIn className="w-3.5 h-3.5" />
                  <span>Click to expand</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-deep-brown/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="bg-white rounded-3xl overflow-hidden max-w-3xl w-full border border-gold/40 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image preview"
                className="absolute top-4 right-4 z-10 p-2 bg-deep-brown/80 hover:bg-deep-brown text-white rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-[4/3] bg-cream">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.altText}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 bg-cream border-t border-light-beige">
                <span className="text-xs font-bold uppercase tracking-widest text-gold block mb-1">
                  {selectedImage.category}
                </span>
                <h3 className="font-serif font-bold text-xl sm:text-2xl text-deep-brown mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-muted-text text-sm leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
