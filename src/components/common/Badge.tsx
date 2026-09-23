import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'neutral' | 'white' | 'dark' | 'accent';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
}) => {
  const styles = {
    neutral: 'bg-[#f7f7f7] text-[#484758] border border-[#e5e5e5]',
    white: 'bg-white text-[#484758] border border-[#e5e5e5] shadow-xs',
    dark: 'bg-[#181825] text-white border border-[#181825]',
    accent: 'bg-[#f7f7f7] text-[#181825] border border-[#e5e5e5]',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-xs font-sans font-medium rounded-full ${styles[variant]} ${className}`}
      style={{ borderRadius: '100px' }}
    >
      {children}
    </span>
  );
};
