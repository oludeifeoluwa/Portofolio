import React, { useEffect, useRef } from 'react';

export const GenerativeHeroCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracker
    let mouse = { x: width / 2, y: height / 2 };
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    canvas.addEventListener('mousemove', handleMouseMove);

    // Generate node grid
    const cols = 14;
    const rows = 10;
    const points: { x: number; y: number; originX: number; originY: number; vx: number; vy: number }[] = [];

    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= rows; j++) {
        const x = (i / cols) * width;
        const y = (j / rows) * height;
        points.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: Math.random() * 0.4 - 0.2,
          vy: Math.random() * 0.4 - 0.2,
        });
      }
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw grid connections
      ctx.lineWidth = 0.75;
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.12)'; // Cobalt accent line

      for (let i = 0; i < points.length; i++) {
        const pt = points[i];

        // Interaction with mouse
        const dx = mouse.x - pt.x;
        const dy = mouse.y - pt.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const force = (120 - dist) / 120;
          pt.x -= (dx / dist) * force * 3;
          pt.y -= (dy / dist) * force * 3;
        } else {
          // Return to origin slowly
          pt.x += (pt.originX - pt.x) * 0.05;
          pt.y += (pt.originY - pt.y) * 0.05;
        }

        // Connect nearby points
        for (let j = i + 1; j < points.length; j++) {
          const pt2 = points[j];
          const distance = Math.hypot(pt.x - pt2.x, pt.y - pt2.y);
          if (distance < 75) {
            ctx.beginPath();
            ctx.moveTo(pt.x, pt.y);
            ctx.lineTo(pt2.x, pt2.y);
            ctx.stroke();
          }
        }

        // Draw tiny node dots
        ctx.fillStyle = dist < 120 ? '#2563eb' : '#d4d0c5';
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, dist < 120 ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="w-full h-full relative overflow-hidden border border-[#e5e2da] bg-[#ffffff]">
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />
      <div className="absolute bottom-3 right-4 font-mono text-[10px] text-[#666666] uppercase tracking-widest pointer-events-none">
        FIG 01.0 / GENERATIVE SYSTEM NODES
      </div>
    </div>
  );
};
