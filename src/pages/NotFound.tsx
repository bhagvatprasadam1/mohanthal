import React from "react";
import { SEOHead } from "../components/seo/SEOHead";
import { seoData } from "../data/seo";
import { Button } from "../components/common/Button";
import { Home, Compass } from "lucide-react";

export const NotFound: React.FC = () => {
  return (
    <div className="bg-cream py-12 sm:py-16 flex items-center justify-center text-center px-4">
      <SEOHead
        title={seoData.notFound.title}
        description={seoData.notFound.description}
        keywords={seoData.notFound.keywords}
        canonicalPath={seoData.notFound.canonicalPath}
        ogImage={seoData.notFound.ogImage}
      />

      <div className="max-w-md mx-auto space-y-6">
        <div className="w-20 h-20 rounded-full bg-light-beige text-primary flex items-center justify-center mx-auto border-2 border-gold/40">
          <Compass className="w-10 h-10 text-primary" />
        </div>

        <span className="text-xs font-bold uppercase tracking-widest text-primary block">
          404 ERROR
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl text-deep-brown font-bold leading-tight">
          Looks Like This Sweet Went Missing.
        </h1>

        <p className="text-muted-text text-sm sm:text-base leading-relaxed">
          The page you're looking for couldn't be found or may have moved. Why
          not return home or explore our authentic Gujarati Mohanthal?
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            to="/"
            variant="primary"
            icon={<Home className="w-4 h-4" />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Back Home
          </Button>

          <Button
            to="/mohanthal"
            variant="outline"
            icon={<Compass className="w-4 h-4" />}
            iconPosition="left"
            className="w-full sm:w-auto"
          >
            Explore Mohanthal
          </Button>
        </div>
      </div>
    </div>
  );
};
