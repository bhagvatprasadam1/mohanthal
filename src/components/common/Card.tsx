import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverEffect = true,
}) => {
  return (
    <div
      className={`bg-white rounded-2xl border border-light-beige p-6 sm:p-8 transition-colors duration-200 ${
        hoverEffect
          ? 'hover:border-primary'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
};
