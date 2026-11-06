import React from 'react';
import { WhatsAppIcon } from './WhatsAppIcon';
import { getWhatsAppUrl, WhatsAppContext } from '../../lib/whatsapp';

export interface WhatsAppButtonProps {
  children?: React.ReactNode;
  context?: WhatsAppContext;
  weight?: string;
  customMessage?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'solid' | 'outline' | 'pill' | 'white';
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  children = 'Enquire on WhatsApp',
  context = 'general',
  weight,
  customMessage,
  className = '',
  size = 'md',
  variant = 'solid',
}) => {
  const url = getWhatsAppUrl({ context, weight, customMessage });

  const sizeClasses = {
    sm: 'text-xs px-3.5 py-1.5 gap-1.5',
    md: 'text-sm sm:text-base px-5 py-2.5 gap-2',
    lg: 'text-base sm:text-lg px-7 py-3.5 gap-2.5',
  }[size];

  const variantClasses = {
    solid: 'bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold',
    white: 'bg-white hover:bg-[#FAF8F5] text-[#0D6539] hover:text-[#084526] font-bold border border-[#25D366]/40',
    outline: 'border-2 border-[#25D366] text-[#0D6539] hover:bg-[#25D366] hover:text-white font-semibold',
    pill: 'bg-[#25D366]/10 text-[#0D6539] hover:bg-[#25D366] hover:text-white border border-[#25D366]/30 font-medium',
  }[variant];

  const iconClasses = {
    solid: 'text-white',
    white: 'text-[#25D366]',
    outline: 'text-[#25D366] group-hover:text-white',
    pill: 'text-[#25D366] group-hover:text-white',
  }[variant];

  const iconSize = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-5 h-5 sm:w-6 sm:h-6',
  }[size];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center rounded-full transition-all duration-200 active:scale-[0.98] select-none ${sizeClasses} ${variantClasses} ${className}`}
      aria-label="Contact us on WhatsApp"
    >
      <WhatsAppIcon className={`${iconSize} flex-shrink-0 ${iconClasses} transition-colors`} />
      <span>{children}</span>
    </a>
  );
};

export default WhatsAppButton;
