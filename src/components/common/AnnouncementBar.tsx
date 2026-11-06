import React from 'react';
import { siteConfig } from '../../data/siteConfig';

export const AnnouncementBar: React.FC = () => {
  return (
    <aside 
      aria-label="Announcement"
      className="bg-deep-brown text-cream text-xs sm:text-sm py-2 px-4 border-b border-gold/30 tracking-wide"
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center text-center font-medium">
        <span className="truncate">
          {siteConfig.announcement}
        </span>
      </div>
    </aside>
  );
};
