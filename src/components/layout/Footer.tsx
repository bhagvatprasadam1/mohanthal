import React, { useState } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "../../data/siteConfig";
import { Phone, Mail, MapPin, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "../common/WhatsAppIcon";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);
  const [isPoliciesOpen, setIsPoliciesOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer className="bg-cream text-dark-text pt-6 sm:pt-8 lg:pt-9 pb-6 border-t border-light-beige">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid: Clean collapsible sections on mobile, 12-col on desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 pb-6 sm:pb-8">
          {/* Brand Column */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-4 space-y-3 sm:space-y-4">
            <Link to="/" className="inline-block group">
              <img
                src="/images/logo.webp"
                alt={`${siteConfig.brandName} Traditional Sweets`}
                width="988"
                height="488"
                className="h-10 sm:h-12 lg:h-14 w-auto object-contain transition-opacity group-hover:opacity-90"
              />
            </Link>
            <p className="text-muted-text text-xs sm:text-sm leading-relaxed max-w-sm">
              Authentic Gujarati Mohanthal handcrafted in small batches using
              coarse stone ground besan, slow simmered pure premium ghee,
              Kashmiri saffron, and aromatic spices.
            </p>
          </div>

          {/* Quick Links Column (Collapsible Dropdown on Mobile, Open by Default on Desktop) */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-3 border-b border-light-beige/70 pb-3 lg:border-none lg:pb-0">
            <button
              type="button"
              onClick={() => setIsQuickLinksOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-2 lg:py-0 text-left cursor-pointer lg:cursor-default"
              aria-expanded={isQuickLinksOpen}
              aria-label="Toggle Quick Links menu"
            >
              <h3 className="font-serif text-base sm:text-lg font-semibold text-deep-brown tracking-wide">
                Quick Links
              </h3>
              <span className="p-1 rounded-full text-deep-brown hover:text-primary transition-colors lg:hidden">
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isQuickLinksOpen ? "rotate-180 text-primary" : "text-deep-brown"
                  }`}
                />
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 ${
                isQuickLinksOpen
                  ? "max-h-96 opacity-100 mt-2.5 lg:mt-3.5 pb-2 lg:pb-0"
                  : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100 mt-0 lg:mt-3.5"
              }`}
            >
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-muted-text">
                <li>
                  <Link to="/" className="hover:text-primary transition-colors block py-0.5">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    to="/process"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    Our Process
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Policies Column (Collapsible Dropdown on Mobile, Open by Default on Desktop) */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-2 border-b border-light-beige/70 pb-3 lg:border-none lg:pb-0">
            <button
              type="button"
              onClick={() => setIsPoliciesOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-2 lg:py-0 text-left cursor-pointer lg:cursor-default"
              aria-expanded={isPoliciesOpen}
              aria-label="Toggle Policies menu"
            >
              <h3 className="font-serif text-base sm:text-lg font-semibold text-deep-brown tracking-wide">
                Policies
              </h3>
              <span className="p-1 rounded-full text-deep-brown hover:text-primary transition-colors lg:hidden">
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isPoliciesOpen ? "rotate-180 text-primary" : "text-deep-brown"
                  }`}
                />
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 ${
                isPoliciesOpen
                  ? "max-h-96 opacity-100 mt-2.5 lg:mt-3.5 pb-2 lg:pb-0"
                  : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100 mt-0 lg:mt-3.5"
              }`}
            >
              <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-muted-text">
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shipping-policy"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/return-policy"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    Return Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy-policy"
                    className="hover:text-primary transition-colors block py-0.5"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Info Column (Collapsible Dropdown on Mobile, Open by Default on Desktop) */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-3 border-b border-light-beige/70 pb-3 lg:border-none lg:pb-0 pt-1 sm:pt-2 lg:pt-0">
            <button
              type="button"
              onClick={() => setIsContactOpen((prev) => !prev)}
              className="w-full flex items-center justify-between py-2 lg:py-0 text-left cursor-pointer lg:cursor-default"
              aria-expanded={isContactOpen}
              aria-label="Toggle Contact Info menu"
            >
              <h3 className="font-serif text-base sm:text-lg font-semibold text-deep-brown tracking-wide">
                Contact Info
              </h3>
              <span className="p-1 rounded-full text-deep-brown hover:text-primary transition-colors lg:hidden">
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isContactOpen ? "rotate-180 text-primary" : "text-deep-brown"
                  }`}
                />
              </span>
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 lg:!max-h-none lg:!opacity-100 ${
                isContactOpen
                  ? "max-h-[500px] opacity-100 mt-2.5 lg:mt-3.5 pb-2 lg:pb-0"
                  : "max-h-0 opacity-0 lg:max-h-none lg:opacity-100 mt-0 lg:mt-3.5"
              }`}
            >
              <div className="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm text-muted-text">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="hover:text-primary transition-colors font-medium"
                >
                  {siteConfig.displayPhone}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors font-medium break-all"
                >
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {siteConfig.address.full}
                </span>
              </div>
            </div>

            {/* Social Icons Below Contact Info */}
            <div className="flex items-center space-x-2.5 pt-4">
              <a
                href={siteConfig.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="group w-9 h-9 rounded-full bg-white border border-light-beige flex items-center justify-center text-deep-brown hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366] group-hover:text-white transition-colors" />
              </a>
              <a
                href={siteConfig.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white border border-light-beige flex items-center justify-center text-deep-brown hover:bg-[#E4405F] hover:text-white hover:border-[#E4405F] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={siteConfig.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-white border border-light-beige flex items-center justify-center text-deep-brown hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.7 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
                </svg>
              </a>
              <a
                href={siteConfig.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-full bg-white border border-light-beige flex items-center justify-center text-deep-brown hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>

      {/* Traditional Artisanal Mohanthal Illustration Art Banner (Full Width, Reduced Spacing) */}
      <div className="w-full overflow-hidden pt-1 pb-2">
        <img
          src="/images/footer-img.webp"
          alt="Traditional Gujarati Mohanthal Crafting Illustration"
          width="1024"
          height="275"
          className="w-full h-auto block select-none pointer-events-none"
          loading="lazy"
        />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bottom Bar */}
        <div className="pt-4 border-t border-light-beige/70 flex flex-col sm:flex-row items-center justify-center text-center text-xs text-muted-text gap-1.5 sm:gap-2">
          <p>
            © {currentYear} {siteConfig.brandName}. All rights reserved. Crafted with Gujarati tradition.
          </p>
          <span className="hidden sm:inline text-muted-text/40">•</span>
          <p>
            Powered by{" "}
            <a
              href="https://www.megascale.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-hover font-semibold transition-colors underline underline-offset-2"
            >
              Megascale
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
