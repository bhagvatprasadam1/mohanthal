import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { WhatsAppButton } from '../common/WhatsAppButton';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Our Story', path: '/about' },
    { label: 'Our Process', path: '/process' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-deep-brown/60 backdrop-blur-sm z-50 lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-cream z-50 border-l border-light-beige flex flex-col justify-between p-6 overflow-y-auto lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div>
              <div className="flex items-center justify-between pb-5 border-b border-light-beige">
                <Link to="/" onClick={onClose} className="inline-block py-1">
                  <img
                    src="/images/logo.webp"
                    alt={`${siteConfig.brandName} Traditional Sweets`}
                    width="988"
                    height="488"
                    className="h-11 sm:h-12 w-auto object-contain"
                  />
                </Link>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close navigation menu"
                  className="p-2 text-deep-brown hover:text-primary rounded-full hover:bg-light-beige transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 space-y-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-primary text-white'
                          : 'text-dark-text hover:bg-light-beige hover:text-deep-brown'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-light-beige space-y-4">
              <WhatsAppButton
                context="general"
                className="w-full justify-center text-sm py-3"
              >
                Order on WhatsApp
              </WhatsAppButton>

              <a
                href="https://bhagvatprasadam.com/products/pure-traditional-gujarati-sweets-mohanthal"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 font-semibold py-2.5 px-4 rounded-full text-xs text-center transition-colors"
              >
                <span>Order on Bhagvat Prasadam</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <div className="text-xs text-muted-text space-y-2 pt-2">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-2 text-dark-text hover:text-primary"
                >
                  <Phone className="w-3.5 h-3.5 text-primary" />
                  <span>{siteConfig.displayPhone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-2 text-dark-text hover:text-primary"
                >
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  <span>{siteConfig.email}</span>
                </a>
                <div className="flex items-center gap-2 text-muted-text">
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>{siteConfig.address.city}, {siteConfig.address.state}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
