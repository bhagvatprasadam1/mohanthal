import React from 'react';

export const PlayStoreIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a2.03 2.03 0 0 1-.22-.962V2.776c0-.36.08-.686.22-.962z" fill="#00E676" />
    <path d="M17.158 8.634L5.347.828C4.78.452 4.14.333 3.609 1.814L13.792 12l3.366-3.366z" fill="#FFD600" />
    <path d="M3.61 22.186c.53 1.48 1.171 1.362 1.737.986l11.811-7.806-3.366-3.366L3.61 22.186z" fill="#FF3D00" />
    <path d="M21.378 11.025l-4.22-2.391L13.792 12l3.366 3.366 4.22-2.391a1.144 1.144 0 0 0 0-1.95z" fill="#00B0FF" />
  </svg>
);

export const AppStoreIcon: React.FC<{ className?: string }> = ({ className = 'w-3.5 h-3.5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.63 1.35-.56.64-1.06 1.7-0.93 2.72 1.01.08 2.03-.47 2.64-1.22z" />
  </svg>
);

export interface AppDownloadBadgesProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md';
}

export const AppDownloadBadges: React.FC<AppDownloadBadgesProps> = ({
  className = '',
  size = 'xs',
}) => {
  const btnClasses = {
    xs: 'px-2 py-0.5 text-[10px] gap-1',
    sm: 'px-2.5 py-0.5 text-[11px] gap-1.5',
    md: 'px-3 py-1 text-xs gap-1.5',
  }[size];

  const iconClasses = {
    xs: 'w-2.5 h-2.5',
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
  }[size];

  return (
    <div className={`inline-flex items-center gap-1.5 ${className}`}>
      {/* Google Play Badge */}
      <a
        href="https://play.google.com/store/apps/details?id=in.sellonapp.bhagvatprasadam&pcampaignid=web_share"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on Google Play Store"
        className={`inline-flex items-center bg-[#050505] hover:bg-black text-white font-medium rounded-full border border-white/20 hover:border-white/50 transition-all duration-200 active:scale-95 shadow-xs leading-none whitespace-nowrap ${btnClasses}`}
      >
        <PlayStoreIcon className={iconClasses} />
        <span>Play Store</span>
      </a>

      {/* App Store Badge */}
      <a
        href="https://apps.apple.com/in/app/bhagvat-prasadam/id6751397354"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download on Apple App Store"
        className={`inline-flex items-center bg-[#050505] hover:bg-black text-white font-medium rounded-full border border-white/20 hover:border-white/50 transition-all duration-200 active:scale-95 shadow-xs leading-none whitespace-nowrap ${btnClasses}`}
      >
        <AppStoreIcon className={`${iconClasses} fill-white`} />
        <span>App Store</span>
      </a>
    </div>
  );
};
