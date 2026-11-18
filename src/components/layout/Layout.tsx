import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnnouncementBar } from '../common/AnnouncementBar';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingWhatsApp } from '../common/FloatingWhatsApp';

export const Layout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen bg-cream text-dark-text antialiased selection:bg-primary/20 selection:text-deep-brown">
      {/* Top Fixed Header Container with Line 1 & Line 2 Announcement Bar */}
      <div className="sticky top-0 z-40 w-full">
        <AnnouncementBar />
        <Header />
      </div>
      <main className="flex-grow">
        <Outlet />
      </main>
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};
