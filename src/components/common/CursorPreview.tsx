import React, { useEffect, useState } from 'react';

interface CursorPreviewProps {
  activeImage: string | null;
  activeTitle: string | null;
}

export const CursorPreview: React.FC<CursorPreviewProps> = ({ activeImage, activeTitle }) => {
  const [pos, setPos] = useState({ x: -500, y: -500 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (activeImage) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [activeImage]);

  if (!visible || !activeImage) return null;

  return (
    <div
      className="fixed pointer-events-none z-50 transition-opacity duration-300 transform -translate-x-1/2 -translate-y-1/2 hidden lg:block"
      style={{
        left: `${pos.x + 160}px`,
        top: `${pos.y - 20}px`,
      }}
    >
      <div className="w-72 h-44 bg-white border border-[#e5e2da] shadow-2xl p-1.5 overflow-hidden">
        <img
          src={activeImage}
          alt={activeTitle || 'Preview'}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute bottom-3 left-3 bg-[#111111] text-white font-mono text-[9px] px-2 py-0.5 uppercase tracking-wider">
          {activeTitle}
        </div>
      </div>
    </div>
  );
};
