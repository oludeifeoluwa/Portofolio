import React from 'react';

interface BrowserFrameProps {
  imageSrc?: string;
  alt?: string;
  children?: React.ReactNode;
  className?: string;
  url?: string;
}

export const BrowserFrame: React.FC<BrowserFrameProps> = ({
  imageSrc,
  alt = 'Browser frame mockup',
  children,
  className = '',
  url = 'https://system.interface/live',
}) => {
  return (
    <div
      className={`bg-white dark:bg-[#16171f] rounded-[24px] border border-[#e5e5e5] dark:border-[#272835] shadow-dialog-subtle overflow-hidden flex flex-col ${className}`}
    >
      {/* Browser Chrome Header */}
      <div className="px-6 py-3.5 border-b border-[#f0f0f0] dark:border-[#232530] flex items-center justify-between bg-[#fafafa] dark:bg-[#13141b] shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#c97b84]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#f69251]"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#8b8b8b]"></span>
        </div>
        <div className="w-56 sm:w-80 h-6 bg-[#f0f0f0] dark:bg-[#1f202b] rounded-full text-[11px] font-mono text-[#737373] dark:text-[#94a3b8] flex items-center justify-center px-4 truncate">
          {url}
        </div>
        <div className="w-8"></div>
      </div>

      {/* Interior Visual — full height, high-definition rendering */}
      <div className="relative overflow-hidden bg-[#fbfbfb] dark:bg-[#0b0c0e] flex-1 flex items-start justify-center">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={alt}
            loading="eager"
            decoding="sync"
            className="w-full h-full object-cover object-top transition-all duration-300"
            style={{
              imageRendering: '-webkit-optimize-contrast',
              transform: 'translateZ(0)',
              backfaceVisibility: 'hidden',
            }}
          />
        ) : (
          children
        )}
      </div>
    </div>
  );
};
