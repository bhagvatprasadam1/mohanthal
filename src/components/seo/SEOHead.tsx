import React, { useEffect } from 'react';
import { siteConfig } from '../../data/siteConfig';

export interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  schema?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  canonicalPath = '/',
  ogImage = '/images/hero-traditional-box.webp',
  schema,
}) => {
  useEffect(() => {
    // Set title
    document.title = title;

    // Helper for meta tags
    const setMeta = (name: string, content: string, isProperty = false) => {
      let el = document.querySelector(
        isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`
      );
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) {
          el.setAttribute('property', name);
        } else {
          el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Update standard meta
    setMeta('description', description);
    if (keywords) {
      setMeta('keywords', keywords);
    }

    const fullCanonicalUrl = `${siteConfig.siteUrl}${canonicalPath === '/' ? '' : canonicalPath}`;
    const fullOgImageUrl = ogImage.startsWith('http')
      ? ogImage
      : `${siteConfig.siteUrl}${ogImage}`;

    // Canonical link
    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', fullCanonicalUrl);

    // Open Graph
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', fullCanonicalUrl, true);
    setMeta('og:image', fullOgImageUrl, true);
    setMeta('og:type', 'website', true);
    setMeta('og:site_name', siteConfig.brandName, true);

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);
    setMeta('twitter:image', fullOgImageUrl);

    // Structured data injection
    if (schema) {
      const scriptId = 'page-structured-data';
      let script = document.getElementById(scriptId);
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.setAttribute('type', 'application/ld+json');
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    }
  }, [title, description, keywords, canonicalPath, ogImage, schema]);

  return null;
};
